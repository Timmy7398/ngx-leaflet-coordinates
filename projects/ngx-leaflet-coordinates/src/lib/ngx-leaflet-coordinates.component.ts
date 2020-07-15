
import { Component, OnInit, OnDestroy, Input, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

import '/home/thomas/Documents/stage/app-pghm/Leaflet.Coordinates/dist/leaflet.coordinates-0.1.5.min.js'

// import { NumberFormatter } from './NumberFormatter';

@Component({
  selector: 'leaflet-coordinates-control',
  template: '',
})
export class NgxLeafletCoordinatesComponent implements OnInit, OnDestroy, AfterViewInit {

  private _map : L.Map;
  private coordinates : L.Control.Coordinates;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._map.removeControl(this.coordinates);
  }

  ngAfterViewInit(): void {
    if(this._map){
      this.coordinates = L.control.coordinates(this.options).addTo(this.map);
    }
  }

  @Input() options : L.Control.CoordinatesOptions = {
    decimals: 4,
    decimalSeperator: '.'
  };

  @Input() set map(map : L.Map) {
    if(map){
      this._map = map;
    }
  }

  get map() : L.Map {
    return this._map;
  }


}
