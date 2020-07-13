// import './NumberFormatter.ts';
// import * as L from 'leaflet';

// L.Control.Coordinates = L.Control.extend({
//     options: {
// 		position: 'bottomright',
// 		//decimals used if not using DMS or labelFormatter functions
// 		decimals: 4,
// 		//decimalseperator used if not using DMS or labelFormatter functions
// 		decimalSeperator: ".",
// 		//label templates for usage if no labelFormatter function is defined
// 		labelTemplateLat: "Lat: {y}",
// 		labelTemplateLng: "Lng: {x}",
// 		//label formatter functions
// 		labelFormatterLat: undefined,
// 		labelFormatterLng: undefined,
// 		//switch on/off input fields on click
// 		enableUserInput: true,
// 		//use Degree-Minute-Second
// 		useDMS: false,
// 		//if true lat-lng instead of lng-lat label ordering is used
// 		useLatLngOrder: false,
// 		//if true user given coordinates are centered directly
// 		centerUserCoordinates: false,
// 		//leaflet marker type
// 		markerType: L.marker,
// 		//leaflet marker properties
// 		markerProps: {}
//     },

//     onAdd: function(map : L.Map) : HTMLElement {
//         this._map = map;

// 		var className = 'leaflet-control-coordinates',
// 			container = this._container = L.DomUtil.create('div', className),
// 			options = this.options;

// 		//label containers
// 		this._labelcontainer = L.DomUtil.create("div", "uiElement label", container);
// 		this._label = L.DomUtil.create("span", "labelFirst", this._labelcontainer);


// 		//input containers
// 		this._inputcontainer = L.DomUtil.create("div", "uiElement input uiHidden", container);
// 		let xSpan : HTMLElement, ySpan : HTMLElement;
// 		if (options.useLatLngOrder) {
// 			ySpan = L.DomUtil.create("span", "", this._inputcontainer);
// 			this._inputY = this._createInput("inputY", this._inputcontainer);
// 			xSpan = L.DomUtil.create("span", "", this._inputcontainer);
// 			this._inputX = this._createInput("inputX", this._inputcontainer);
// 		} else {
// 			xSpan = L.DomUtil.create("span", "", this._inputcontainer);
// 			this._inputX = this._createInput("inputX", this._inputcontainer);
// 			ySpan = L.DomUtil.create("span", "", this._inputcontainer);
// 			this._inputY = this._createInput("inputY", this._inputcontainer);
// 		}
// 		xSpan.innerHTML = options.labelTemplateLng.replace("{x}", "");
// 		ySpan.innerHTML = options.labelTemplateLat.replace("{y}", "");

// 		L.DomEvent.on(this._inputX, 'keyup', this._handleKeypress, this);
// 		L.DomEvent.on(this._inputY, 'keyup', this._handleKeypress, this);

// 		//connect to mouseevents
// 		map.on("mousemove", this._update, this);
// 		map.on('dragstart', this.collapse, this);

// 		map.whenReady(this._update, this);

// 		this._showsCoordinates = true;
// 		//wether or not to show inputs on click
// 		if (options.enableUserInput) {
// 			L.DomEvent.addListener(this._container, "click", this._switchUI, this);
// 		}

// 		return container;
//     },
    
//     _createInput: function (classname : string, container : HTMLElement) : HTMLElement {
//         let input : HTMLElement = L.DomUtil.create("input", classname, container);
// 		input.setAttribute('type',"text");
// 		L.DomEvent.disableClickPropagation(input);
// 		return input;
//     },

//     _clearMarker: function() : void {
// 		this._map.removeLayer(this._marker);
// 	},

// 	_handleKeypress: function(e : any) : void {
// 		switch (e.keyCode) {
// 			case 27: //Esc
// 				this.collapse();
// 				break;
// 			case 13: //Enter
// 				this._handleSubmit();
// 				this.collapse();
// 				break;
// 			default: //All keys
// 				this._handleSubmit();
// 				break;
// 		}
// 	},

// 	/**
// 	 *	Called on each keyup except ESC
// 	 */
// 	_handleSubmit: function() : void {
// 		var x = L.NumberFormatter.createValidNumber(this._inputX.value, this.options.decimalSeperator);
// 		var y = L.NumberFormatter.createValidNumber(this._inputY.value, this.options.decimalSeperator);
// 		if (x !== undefined && y !== undefined) {
// 			let marker = this._marker;
// 			if (!marker) {
// 				marker = this._marker = this._createNewMarker();
// 				marker.on("click", this._clearMarker, this);
// 			}
// 			let ll : L.LatLng = new L.LatLng(y, x);
// 			marker.setLatLng(ll);
// 			marker.addTo(this._map);
// 			if (this.options.centerUserCoordinates) {
// 				this._map.setView(ll, this._map.getZoom());
// 			}
// 		}
// 	},

// 	/**
// 	 *	Shows inputs fields
// 	 */
// 	expand: function() : void {
// 		this._showsCoordinates = false;

// 		this._map.off("mousemove", this._update, this);

// 		L.DomEvent.addListener(this._container, "mousemove", L.DomEvent.stop);
// 		L.DomEvent.removeListener(this._container, "click", this._switchUI, this);

// 		L.DomUtil.addClass(this._labelcontainer, "uiHidden");
// 		L.DomUtil.removeClass(this._inputcontainer, "uiHidden");
// 	},

// 	/**
// 	 *	Creates the label according to given options and formatters
// 	 */
// 	_createCoordinateLabel: function(ll : any) : string {
//         let opts : L.Control.CoordinatesOptions = this.options,
// 			x, y;
// 		if (opts.customLabelFcn) {
// 			return opts.customLabelFcn(ll, opts);
// 		}
// 		if (opts.labelLng) {
// 			x = opts.labelFormatterLng(ll.lng);
// 		} else {
// 			x = L.Util.template(opts.labelTemplateLng, {
// 				x: this._getNumber(ll.lng, opts)
// 			});
// 		}
// 		if (opts.labelFormatterLat) {
// 			y = opts.labelFormatterLat(ll.lat);
// 		} else {
// 			y = L.Util.template(opts.labelTemplateLat, {
// 				y: this._getNumber(ll.lat, opts)
// 			});
// 		}
// 		if (opts.useLatLngOrder) {
// 			return y + " " + x;
// 		}
// 		return x + " " + y;
//     },
		

// 	/**
// 	 *	Returns a Number according to options (DMS or decimal)
// 	 */
// 	_getNumber: function(n : number, opts : L.Control.CoordinatesOptions) : string {
// 		let res : string;
// 		if (opts.useDMS) {
// 			res = L.NumberFormatter.toDMS(n);
// 		} else {
// 			res = L.NumberFormatter.round(n, opts.decimals, opts.decimalSeperator);
// 		}
// 		return res;
// 	},

// 	/**
// 	 *	Shows coordinate labels after user input has ended. Also
// 	 *	displays a marker with popup at the last input position.
// 	 */
// 	collapse: function() : void {
// 		if (!this._showsCoordinates) {
//             return;
//         }

//         this._map.on("mousemove", this._update, this);
//         this._showsCoordinates = true;
        
//         L.DomEvent.addListener(this._container, "click", this._switchUI, this);
//         L.DomEvent.removeListener(this._container, "mousemove", L.DomEvent.stop);

//         L.DomUtil.addClass(this._inputcontainer, "uiHidden");
//         L.DomUtil.removeClass(this._labelcontainer, "uiHidden");

//         if (this._marker) {
//             let m : any       = this._createNewMarker(),
//                 ll : L.LatLng = this._marker.getLatLng();
//             m.setLatLng(ll);

//             let container : HTMLElement = L.DomUtil.create("div", "");
//             let label     : HTMLElement = L.DomUtil.create("div", "", container);
//             let close     : HTMLElement = L.DomUtil.create("a", "", container);
            
//             label.innerHTML = this._ordinateLabel(ll);
//             close.innerHTML = "Remove";
//             close.setAttribute("href", "#");

//             let stop = L.DomEvent.stopPropagation;
//             L.DomEvent
//                 .on(close, 'click', stop)
//                 .on(close, 'mousedown', stop)
//                 .on(close, 'dblclick', stop)
//                 .on(close, 'click', L.DomEvent.preventDefault)
//                 .on(close, 'click', function() {
//                     this._map.removeLayer(m);
//                 }, this);

//             m.bindPopup(container);
//             m.addTo(this._map);
//             this._map.removeLayer(this._marker);
//             this._marker = null;
// 		}
// 	},

// 	/**
// 	 *	Click callback for UI
// 	 */
// 	_switchUI: function(evt : Event) : void {
// 		L.DomEvent.stop(evt);
// 		L.DomEvent.stopPropagation(evt);
// 		L.DomEvent.preventDefault(evt);
// 		if (this._showsCoordinates) {
// 			//show textfields
// 			this.expand();
// 		} else {
// 			//show coordinates
// 			this.collapse();
// 		}
// 	},

// 	onRemove: function(map : L.Map) :void {
// 		map.off("mousemove", this._update, this);
// 	},

// 	/**
// 	 *	Mousemove callback function updating labels and input elements
// 	 */
// 	_update: function(evt : L.LeafletMouseEvent) : void {
//         let pos  : L.LatLng = evt.latlng,
// 			opts : L.Control.CoordinatesOptions = this.options;
// 		if (pos) {
// 			pos = pos.wrap();
// 			this._currentPos = pos;
// 			this._inputY.value = L.NumberFormatter.round(pos.lat, opts.decimals, opts.decimalSeperator);
// 			this._inputX.value = L.NumberFormatter.round(pos.lng, opts.decimals, opts.decimalSeperator);
// 			this._label.innerHTML = this._createCoordinateLabel(pos);
// 		}
// 	},

// 	_createNewMarker: function() : any {
//         return this.options.markerType(null, this.options.markerProps);
//     },
    
//     addTo : function(map : L.Map) : this {
//         return this.addTo(map);
//     },

//     remove: function() : this {
//         return this.remove();
//     },

//     getPosition: function() : L.ControlPosition {
//         return this.options.position;
//     },

//     setPosition(position : L.ControlPosition) : this {
//         let map = this._map;

//         if(map){
//             map.removeControl(this);
//         }
//     },

//     getContainer: function() : HTMLElement | undefined {

//     }
// })