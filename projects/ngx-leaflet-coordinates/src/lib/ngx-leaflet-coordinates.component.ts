
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as L from 'leaflet';

import '../../../../node_modules/leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.min.js'

@Component({
  selector: 'leaflet-coordinates-control',
  template: '',
})
export class NgxLeafletCoordinatesComponent implements OnInit, OnDestroy {

  private _map : L.Map;
  private coordinates : L.Control.Coordinates;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._map.removeControl(this.coordinates);
  }

  @Input() options : L.Control.CoordinatesOptions = {
    decimals: 4,
    decimalsSeperator: '.'
  };

  @Input() set map(map : L.Map) {
    if(map){
      this._map = map;
      this.coordinates = L.control.coordinates(this.options).addTo(this.map);
    }
  }

  get map() : L.Map {
    return this._map;
  }


}
