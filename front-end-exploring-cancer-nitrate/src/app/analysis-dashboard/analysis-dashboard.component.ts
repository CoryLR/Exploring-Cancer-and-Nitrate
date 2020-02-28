import { Component, OnInit } from '@angular/core';
// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-analysis-dashboard',
  templateUrl: './analysis-dashboard.component.html',
  styleUrls: ['./analysis-dashboard.component.scss']
})

// @Injectable()
export class AnalysisDashboardComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = '/analyze';
    const body = { 'selection': "a" };

    this.http.post(url, body).subscribe((data: any) => {
      console.log("data:");
      console.log(data);
    });
  }

}
