"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trip = void 0;
var Trip = /** @class */ (function () {
    function Trip(direaction, cost, duration, date) {
        this.direaction = direaction;
        this.cost = cost;
        this.duration = duration;
        this.date = date;
        this.flights = [];
        this.passengers = [];
    }
    Trip.prototype.addFlight = function (flight) {
        this.flights.push(flight);
        flight.trips.push(this);
    };
    Trip.prototype.addPassenger = function (passenger) {
        this.passengers.push(passenger);
        passenger.trips.push(this);
    };
    return Trip;
}());
exports.Trip = Trip;
