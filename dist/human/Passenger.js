"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passenger = void 0;
var Passenger = /** @class */ (function () {
    function Passenger(name, age, phone, gender, hasReturnTicket) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.gender = gender;
        this.hasReturnTicket = hasReturnTicket;
        this.flights = [];
        this.trips = [];
    }
    Passenger.prototype.addFlight = function (flight) {
        this.flights.push(flight);
        flight.passengers.push(this);
    };
    Passenger.prototype.addTrip = function (trip) {
        this.trips.push(trip);
        trip.passengers.push(this);
    };
    Passenger.prototype.getFlight = function () {
        return this.flights;
    };
    return Passenger;
}());
exports.Passenger = Passenger;
