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
  private regressionResultsString: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = '/analyze';
    const body = { 'distanceDecayCoefficient': 1 };

    this.http.post(url, body).subscribe((data: any) => {
      console.log("data:");
      console.log(data);
      this.regressionResultsString = data.summary;
    });

    this.map = L.map('residuals-map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3,
      scrollWheelZoom: false,
    });
  
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    tiles.addTo(this.map);    

  }

}
