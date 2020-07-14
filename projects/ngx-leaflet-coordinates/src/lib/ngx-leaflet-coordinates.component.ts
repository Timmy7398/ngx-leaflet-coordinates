
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as L from 'leaflet';

import '../../../../node_modules/leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.min.js'

// import { NumberFormatter } from './NumberFormatter';

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
    decimalSeperator: '.'
  };

  @Input() set map(map : L.Map) {
    if(map){
      this._map = map;
      this.coordinates = L.control.coordinates(this.options).addTo(this.map);
      // L.NumberFormatter.round = funcDef.round;
      // console.log(NumberFormatter.round(45.890986, 2, '.'));
      
    }
  }

  get map() : L.Map {
    return this._map;
  }


}
