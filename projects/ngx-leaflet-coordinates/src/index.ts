import * as L from 'leaflet'


declare module 'leaflet' {
    namespace Control {
        interface CoordinatesOptions extends L.ControlOptions {
            decimals               : number,
            decimalSeperator       : string,
            labelLng              ?: string,
            labelTemplateLat      ?: string,
            labelTemplateLng      ?: string,
            enableUserInput       ?: boolean,
            useDMS                ?: boolean,
            useDMM                ?: boolean,
            useLatLngOrder        ?: boolean,
            centerUserCoordinates ?: boolean,
            markerType            ?: any,
            markerProps           ?: L.MapOptions

            // Functions
            labelFormatterLat ?: any,
            labelFormatterLng ?: any,
            customLabelFcn    ?: any,
        }

        export class Coordinates extends L.Control {
            constructor(otpions?: CoordinatesOptions);
            
            _createInput(classname: string, container: HTMLElement) : HTMLElement;
            _clearMarker()                                          : void;
            _handleKeypress(e : any)                                : void;
            _handleSubmit()                                         : void;
            _update(evt : L.LeafletMouseEvent)                      : void;
            _switchUI(evt : Event)                                  : void;
            expand()                                                : void;
            collapse()                                              : void;
            _createCoordinateLabel(ll : any)                        : string;
            _getNumber(n : number, opts : CoordinatesOptions)       : string;
            _createNewMarker()                                      : any;
 
            options: CoordinatesOptions;
        }
    }

    namespace control {
        export function coordinates(options?: Control.CoordinatesOptions) : Control.Coordinates;
    }

    export namespace NumberFormatter {
        
        export function round(num : number, dec : number, sep : string) : string;
        export function toDMS(deg : number) : string;
        export function toUTM(latLng : L.LatLng) : {zone: number, part: string, proj: any};
        export function toDMM(deg: number, dec : number) : string;
        export function createValidNumber(num: string, sep : string) : number | undefined;
    
        function zoneUTM(latLng : L.LatLng) : {zone: number, part: string};
    }
}