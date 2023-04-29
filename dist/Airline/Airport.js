"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airport = void 0;
var Airport = /** @class */ (function () {
    function Airport(name, code, address) {
        this.name = name;
        this.code = code;
        this.address = address;
        this.flights = [];
        this.gates = [];
    }
    Airport.prototype.getFlights = function (pilot, date) {
        var flights = [];
        for (var _i = 0, _a = this.flights; _i < _a.length; _i++) {
            var flight = _a[_i];
            for (var _b = 0, _c = flight.pilots; _b < _c.length; _b++) {
                var pilot_1 = _c[_b];
                if (flight.date === date && pilot_1.isEqual(pilot_1)) {
                    flights.push(flight);
                }
            }
        }
        return flights;
    };
    Airport.prototype.addFlight = function (flight) {
        this.flights.push(flight);
    };
    Airport.prototype.addGate = function (gate) {
        this.gates.push(gate);
    };
    Airport.prototype.getGateForFlight = function (flightNumber) {
        for (var _i = 0, _a = this.gates; _i < _a.length; _i++) {
            var gate = _a[_i];
            if (gate.flight && gate.flight.flightNumber === flightNumber) {
                return gate;
            }
        }
        return undefined;
    };
    return Airport;
}());
exports.Airport = Airport;
