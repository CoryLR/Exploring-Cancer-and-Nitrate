import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
  selector: 'app-analysis-dashboard',
  templateUrl: './analysis-dashboard.component.html',
  styleUrls: ['./analysis-dashboard.component.scss']
})

export class AnalysisDashboardComponent implements OnInit {

  private map: any;
  private infoBoxControl;
  private residualsGeoJson: any;
  private regressionResultsString: string = "Run the analysis to see regression results.";
  private analysisCount: number = 0;
  private waitingForResults: boolean = false;
  private analysisLog = 'Use the "Run Analysis" button.';

  private idw_power;
  private idw_smoothing;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initializeMap()
  }

  runAnalysis = () => {
    if (!Number.isNaN(this.idw_power) && !Number.isNaN(this.idw_smoothing) && this.idw_power > 0 && this.idw_smoothing >= 0) {
      this.startAnalysis_updateData(this.idw_power, this.idw_smoothing)
    } else {
      alert("Power must be greater than 0 and Smoothing must be greater than or equal to 0");
    }
  }

  initializeMap = () => {
    this.map = L.map('residuals-map', {
      center: [44.9259, -89.8572],
      zoom: 7,
      scrollWheelZoom: false,
    });
    const baseMap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
      ext: 'png'
    });
    baseMap.addTo(this.map);

    this.infoBoxControl = L.control();

    this.infoBoxControl.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'info_control info_control_hover'); // create a div with a class "info"
      this.update();
      return this._div;
    };

    let self = this;
    // method that we will use to update the control based on feature properties passed
    this.infoBoxControl.update = function (props) {
      let residual, cancerRate, cancerRateEstimate, nitrateConcentration;
      if (props) {
        cancerRate = Number.parseFloat(props.canrate).toFixed(2);
        cancerRateEstimate = Number.parseFloat(props.canrate + props.residual).toFixed(3)
        residual = Number.parseFloat(props.residual).toFixed(3);
        nitrateConcentration = Number.parseFloat(props.mean).toFixed(2);
      }
      this._div.innerHTML = '<h5>Census Tracts</h5>' + (props ?
        `
        <ul style="padding-left: 1.2em; margin-bottom: 0.5em;">
        <li>Actual Cancer Rate: <strong>${cancerRate}</strong>%</li>
        <li>Estimated Cancer Rate: <strong>${cancerRateEstimate}</strong>%</li>
        <li><strong>Residual: </strong><strong>${residual}%</strong></li>
        </ul>
        <em>(Cancer rate estimated based on Nitrate Concentration of <strong>${nitrateConcentration}</strong> ppm)</em>
        `
        : self.analysisCount < 1 ? 'Run the analysis to see census tracts' : 'Hover over a census tract');
    };

    this.infoBoxControl.addTo(this.map);

    let legend = L.control({ position: 'bottomleft' });

    legend.onAdd = (map) => {

      var div = L.DomUtil.create('div', 'info_control info_control_legend'),
        // grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        // midGrades = [0.3, 0.2, 0.1, 0, -0.1, -0.2, -0.3],
        midGrades = [0.4, 0.2, 0, -0.2, -0.4],
        labels = [];

      div.innerHTML += `<div><i style="background: ${this.getResidualColor(0.5)}"></i> > 0.4</div>`
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < midGrades.length - 1; i++) {
        div.innerHTML += `<div><i style="background: ${this.getResidualColor(midGrades[i] - 0.01)}"></i> ${midGrades[i]} - ${midGrades[i + 1]}</div>`
      }
      div.innerHTML += `<div><i style="background: ${this.getResidualColor(-0.5)}"></i> < -0.4</div>`

      return div;
    };

    legend.addTo(this.map);
  }

  startAnalysis_updateData = (distanceDecayExponent: any = "2", smoothing: any = "0") => {
    this.waitingForResults = true;
    this.userLog(`\n\nRunning Analysis... `);
    const url = '/analyze';
    const body = { 'distanceDecayExponent': String(distanceDecayExponent), 'smoothing': String(smoothing) };
    this.http.post(url, body).subscribe((data: any) => {
      if (this.map.hasLayer(this.residualsGeoJson)) {
        this.map.removeLayer(this.residualsGeoJson);
        this.residualsGeoJson = undefined;
      }
      this.regressionResultsString = data.summary.slice(0, -103);
      this.residualsGeoJson = L.geoJSON(JSON.parse(data.geojson), {
        style: this.getStyle("residual"),
        smoothFactor: 0.3,
        onEachFeature: this.onEachFeature,
      }).addTo(this.map);
      this.map.addLayer(this.residualsGeoJson);
      this.analysisCount += 1;
      this.waitingForResults = false;
      this.infoBoxControl.update();
      this.userLog(`Done!\nInputs Used: Power:${this.idw_power} Smoothing:${this.idw_smoothing}`);
    });
  }

  getStyle = (property) => {
    return (feature) => {
      return {
        weight: 0,
        color: 'white',
        fillColor: this.getResidualColor(feature.properties[property]),
        fillOpacity: 1,
      };
    }
  }

  getResidualColor = (d) => {
    return d < -0.40 ? '#8c510a'
      : d < -0.20 ? '#d8b365'
        : d < 0.00 ? '#f2e9da'
          : d < 0.20 ? '#c7eae5'
            : d < 0.40 ? '#5ab4ac'
              : '#01665e';
  }

  highlightFeature = (e) => {
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      color: 'white',
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }

    this.infoBoxControl.update(layer.feature.properties);

  }

  resetHighlight = (e) => {
    this.residualsGeoJson.resetStyle(e.target);
    this.infoBoxControl.update();
  }

  onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight,
      // click: zoomToFeature
    });
  }

  userLog = (message) => {
    this.analysisLog += String(message);
    setTimeout(() => {
      let logWrapperElement = document.querySelector('#analysis-log .log-wrapper');
      logWrapperElement.scrollTop = logWrapperElement.scrollHeight;
    }, 50);
  }

  promptGeoJsonDownload = () => {
    this.promptDownload("Residuals-Cancer-Nitrate.geojson", JSON.stringify(this.residualsGeoJson.toGeoJSON()));
  }

  promptDownload = (filename, text) => {
    let element = document.createElement('a');
    element.setAttribute('href', URL.createObjectURL(new Blob([text], {
      type: "application/octet-stream"
    })));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    setTimeout(function () {
      document.body.removeChild(element);
    }, 1000);
  }

}
