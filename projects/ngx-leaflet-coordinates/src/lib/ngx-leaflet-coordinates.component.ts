
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as L from 'leaflet';

import '../../../../node_modules/leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.min.js'

declare module 'leaflet' {
  namespace Control {
      interface CoordinatesOptions extends L.ControlOptions {
          decimals: number,
          decimalsSeperator: string,
          labelTemplateLat?: string,
          labelTemplateLng?: string,
          labelFormatterLat?: any, // FCT
          labelFormatterLng?: any, // FCT
          enableUserInput?: boolean,
          useDMS?: boolean,
          useLatLngOrder?: boolean,
          centerUserCoordinates?: boolean,
          markerType?: L.Marker,
          markerProps?: L.MapOptions
      }
// 
      export class Coordinates extends L.Control {
          constructor(otpions?: CoordinatesOptions);
          // 
          _createInput(classname: string, container: HTMLElement) : HTMLElement;
          _clearMarker() : void;
          _handleKeypress(e : any) : void;
          _handleSubmit() : void;
          expand() : void;
          _createCoordinateLabel(ll : any) : string;
          _getNumber(n : number, opts : CoordinatesOptions): string;
          collapse() : void;
          _switchUI(evt : any): void;
          _update(evt : any) : void;
          _createNewMarker() : L.Marker;
      }
  }
// 
  namespace control {
      export function coordinates(options?: Control.CoordinatesOptions) : Control.Coordinates;
  }
// 
  export namespace NumberFormatter {
      export function round(num : number, dec : number, sep : string) : string;
      export function toDMS(deg : number) : string;
      export function createValidNumber(num: string, sep : string) : number | undefined;
  }
}


@Component({
  selector: 'leaflet-coordinates-control',
  template: '',
  styleUrls: [
    '../../../../node_modules/leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.css'
  ]
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
