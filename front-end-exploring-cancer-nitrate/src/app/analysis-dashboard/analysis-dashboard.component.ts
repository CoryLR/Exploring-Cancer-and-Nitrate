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

  private idw_power;
  private idw_smoothing;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initializeMap()
  }

  runAnalysis = () => {
    console.log("this.idw_power\n", this.idw_power)
    console.log("this.idw_smoothing\n", this.idw_smoothing)
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

    // method that we will use to update the control based on feature properties passed
    this.infoBoxControl.update = function (props) {
      let residual, cancerRate, nitrateConcentration;
      if (props) {
        residual = Number.parseFloat(props.residual).toPrecision(3);
        cancerRate = Number.parseFloat(props.canrate).toPrecision(2);
        nitrateConcentration = Number.parseFloat(props.mean).toPrecision(3);
      }
      this._div.innerHTML = '<h5>Census Tracts</h5>' + (props ?
        `
            <strong>Residual</strong>: ${residual}
            <br>Cancer Rate: ${cancerRate}
            <br>Nitrate Concentration: ${nitrateConcentration}
            `
        : 'Hover over a census tract');
    };

    this.infoBoxControl.addTo(this.map);

    let legend = L.control({ position: 'bottomleft' });

    legend.onAdd = (map) => {

      var div = L.DomUtil.create('div', 'info_control info_control_legend'),
        // grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        midGrades = [0.3, 0.2, 0.1, 0, -0.1, -0.2, -0.3],
        labels = [];
      
      div.innerHTML += `<i style="background: ${this.getResidualColor(0.4)}"></i> > 0.3<br>`
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < midGrades.length -1; i++) {
        div.innerHTML += `<i style="background: ${this.getResidualColor(midGrades[i] - 0.01)}"></i> ${midGrades[i]} - ${midGrades[i+1]}<br>`
      }
      div.innerHTML += `<i style="background: ${this.getResidualColor(-0.4)}"></i> < -0.3<br>`

      return div;
    };

    legend.addTo(this.map);


    /* Useful for testing map position */
    setInterval(() => {
      console.log("map center: ", this.map.getCenter());
    }, 5000)

  }

  startAnalysis_updateData = (distanceDecayExponent: any = "2", smoothing: any = "0") => {
    this.waitingForResults = true;
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
      console.log("this.residualsGeoJson:\n", this.residualsGeoJson)
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
    return d < -100 ? 'black'
      : d < -0.30 ? '#8c510a'
        : d < -0.20 ? '#bf812d'
          : d < -0.10 ? '#dfc27d'
            : d < 0.00 ? '#f6e8c3'
              : d < 0.10 ? '#c7eae5'
                : d < 0.20 ? '#80cdc1'
                  : d < 0.30 ? '#35978f'
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


}
