import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app',
  templateUrl: '../wifipoints-template.html'
})


export class AppComponent  { 

  title = 'Publieke WIFI access points in Antwerpen';
  quote = 'Home is where the wifi connects automatically.';

  wifiPoints:any;

  // ----------------------------------------------

  constructor(private http: Http) { }

  ngOnInit(): void
  {
    this.getWifiPoints();
  }

  getWifiPoints()
  {
    this.http.get('http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json')
    .map((res:Response) => res.json().data)
    .subscribe( // .subscribe(success, failure, complete);
      data => {this.wifiPoints = data;},
      err => console.error(err),
      () => this.convertCoordinatesToNumbers()
    );
  }  

  convertCoordinatesToNumbers()
  {
     for (let wifiPoint of this.wifiPoints) {
       wifiPoint.point_lat = parseFloat(wifiPoint.point_lat);
       wifiPoint.point_lng = parseFloat(wifiPoint.point_lng);
     }
     console.log(this.wifiPoints);
  }


}