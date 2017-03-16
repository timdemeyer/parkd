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
var GemeenteFilterPipe = (function () {
    function GemeenteFilterPipe() {
    }
    GemeenteFilterPipe.prototype.transform = function (wifipoints, term) {
        if (term === undefined)
            return wifipoints; // return all wifipoints
        // returns the filtered array
        return wifipoints.filter(function (wifipoint) {
            return wifipoint.gemeente.toLowerCase().includes(term.toLowerCase()); // returns true/false
        });
    };
    GemeenteFilterPipe = __decorate([
        core_1.Pipe({
            name: 'gemeenteFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], GemeenteFilterPipe);
    return GemeenteFilterPipe;
}());
exports.GemeenteFilterPipe = GemeenteFilterPipe;
//# sourceMappingURL=gemeente-filter-pipe.js.map