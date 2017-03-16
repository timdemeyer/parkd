"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var GoogleMapsComponent = (function () {
    function GoogleMapsComponent() {
        // inital map values
        this.centerMapLat = 51.2193871;
        this.centerMapLng = 4.4154059;
        this.zoom = 11;
    }
    __decorate([
        core_1.Input('wifiPoints'), 
        __metadata('design:type', Object)
    ], GoogleMapsComponent.prototype, "wifiPoints", void 0);
    GoogleMapsComponent = __decorate([
        core_1.Component({
            selector: 'google-maps',
            templateUrl: '../google-maps-template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GoogleMapsComponent);
    return GoogleMapsComponent;
}());
exports.GoogleMapsComponent = GoogleMapsComponent;
//# sourceMappingURL=google-maps.component.js.map