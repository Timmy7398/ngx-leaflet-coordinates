// import * as L from 'leaflet'

// declare module 'leaflet' {
//     namespace Control {
//         interface CoordinatesOptions extends L.ControlOptions {
//             decimals: number,
//             decimalsSeperator: string,
//             labelTemplateLat?: string,
//             labelTemplateLng?: string,
//             labelFormatterLat?: any, // FCT
//             labelFormatterLng?: any, // FCT
//             enableUserInput?: boolean,
//             useDMS?: boolean,
//             useLatLngOrder?: boolean,
//             centerUserCoordinates?: boolean,
//             markerType?: L.Marker,
//             markerProps?: L.MapOptions
//         }

//         export class Coordinates extends L.Control {
//             constructor(otpions?: CoordinatesOptions);
            
//             _createInput(classname: string, container: HTMLElement) : HTMLElement;
//             _clearMarker() : void;
//             _handleKeypress(e : any) : void;
//             _handleSubmit() : void;
//             expand() : void;
//             _createCoordinateLabel(ll : any) : string;
//             _getNumber(n : number, opts : CoordinatesOptions): string;
//             collapse() : void;
//             _switchUI(evt : any): void;
//             _update(evt : any) : void;
//             _createNewMarker() : L.Marker;
//         }
//     }

//     namespace control {
//         export function coordinates(options?: Control.CoordinatesOptions) : Control.Coordinates;
//     }

//     export namespace NumberFormatter {
//         export function round(num : number, dec : number, sep : string) : string;
//         export function toDMS(deg : number) : string;
//         export function createValidNumber(num: string, sep : string) : number | undefined;
//     }
// }