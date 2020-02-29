import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
  selector: 'app-analysis-dashboard',
  templateUrl: './analysis-dashboard.component.html',
  styleUrls: ['./analysis-dashboard.component.scss']
})

export class AnalysisDashboardComponent implements OnInit {

  private map;
  private residualsGeoJson;
  private regressionResultsString: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = '/analyze';
    const body = { 'distanceDecayCoefficient': 1 };

    this.map = L.map('residuals-map', {
      center: [44.64, -89.91],
      zoom: 6,
      scrollWheelZoom: false,
    });

    this.http.post(url, body).subscribe((data: any) => {
      console.log(">>> data:");
      console.log(data);

      this.residualsGeoJson = JSON.parse(data.geojson);
      this.regressionResultsString = data.summary;

      console.log(">>> this.residualsGeoJson:")
      console.log(this.residualsGeoJson)

      // console.log(">>> typeof this.residualsGeoJson:")
      // console.log(typeof this.residualsGeoJson)

      L.geoJSON(this.residualsGeoJson, { style: this.style, smoothFactor: 0.3 }).addTo(this.map);

    });

    // const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // });
    const tiles = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
      ext: 'png'
    });
    tiles.addTo(this.map);

  }

  getColor = (d) => {
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

  style = (feature) => {
    return {
      stroke: false,
      fillColor: this.getColor(feature.properties.residual),
      fillOpacity: 1,
    };
  }



}
