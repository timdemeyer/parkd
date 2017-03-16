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
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var AppComponent = (function () {
    // ----------------------------------------------
    function AppComponent(http) {
        this.http = http;
        this.title = 'Publieke WIFI access points in Antwerpen';
        this.quote = 'Home is where the wifi connects automatically.';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getWifiPoints();
    };
    AppComponent.prototype.getWifiPoints = function () {
        var _this = this;
        this.http.get('http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json')
            .map(function (res) { return res.json().data; })
            .subscribe(// .subscribe(success, failure, complete);
        function (// .subscribe(success, failure, complete);
            data) { _this.wifiPoints = data; }, function (err) { return console.error(err); }, function () { return _this.convertCoordinatesToNumbers(); });
    };
    AppComponent.prototype.convertCoordinatesToNumbers = function () {
        for (var _i = 0, _a = this.wifiPoints; _i < _a.length; _i++) {
            var wifiPoint = _a[_i];
            wifiPoint.point_lat = parseFloat(wifiPoint.point_lat);
            wifiPoint.point_lng = parseFloat(wifiPoint.point_lng);
        }
        console.log(this.wifiPoints);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../wifipoints-template.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map