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
  private regressionResultsString: string = "";
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
    if ( !Number.isNaN(this.idw_power) && !Number.isNaN(this.idw_smoothing) && this.idw_power > 0 && this.idw_smoothing >= 0 ) {
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
        this._div = L.DomUtil.create('div', 'info_box_control'); // create a div with a class "info"
        this.update();
        return this._div;
    };
    
    // method that we will use to update the control based on feature properties passed
    this.infoBoxControl.update = function (props) {
        this._div.innerHTML = '<h5>Census Tracts</h5>' +  (props ?
            `
            Residual: ${Number.parseFloat(props.residual).toPrecision(4)}
            <br>Cancer Rate: ${Number.parseFloat(props.canrate).toPrecision(4)}
            <br>Nitrate Concentration: ${Number.parseFloat(props.mean).toPrecision(4)}
            `
            : 'Hover over a census tract');
    };
    
    this.infoBoxControl.addTo(this.map);
    

    // /* Useful for testing map position */
    // setInterval(() => {
    //   console.log("map center: ", this.map.getCenter());
    // }, 3000)

  }

  startAnalysis_updateData = (distanceDecayExponent:any = "2", smoothing:any = "0") => {
    this.waitingForResults = true;
    const url = '/analyze';
    const body = { 'distanceDecayExponent': String(distanceDecayExponent), 'smoothing': String(smoothing) };
    this.http.post(url, body).subscribe((data: any) => {
      if (this.map.hasLayer(this.residualsGeoJson)) {
        this.map.removeLayer(this.residualsGeoJson);
        this.residualsGeoJson = undefined;
      }
      this.regressionResultsString = data.summary;
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
    : d < -0.00 ? '#f6e8c3' 
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
