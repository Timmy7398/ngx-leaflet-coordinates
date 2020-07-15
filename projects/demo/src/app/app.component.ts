import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'demo';
  map : L.Map;

  optionCoord : L.Control.CoordinatesOptions = {
    decimals: 4,
    decimalSeperator: ".",
    useLatLngOrder: true,
    useDMM: true
  }

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909)
  };

  baseLayers = {}

  ngOnInit(): void {
  }

  onMapReady(map : L.Map){
    this.map = map;
  }
}
