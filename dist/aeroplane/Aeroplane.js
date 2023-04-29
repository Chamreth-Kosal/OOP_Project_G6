"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aeroplane = void 0;
var Aeroplane = /** @class */ (function () {
    function Aeroplane(registerNumber, code) {
        this.registerNumber = registerNumber;
        this.code = code;
        this.flights = [];
        this.layouts = [];
    }
    Aeroplane.prototype.addFlight = function (flight) {
        this.flights.push(flight);
    };
    Aeroplane.prototype.addLayout = function (layout) {
        this.layouts.push(layout);
    };
    return Aeroplane;
}());
exports.Aeroplane = Aeroplane;
