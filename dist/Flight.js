"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
var Meal_1 = require("./meal/Meal");
var Flight = /** @class */ (function () {
    function Flight(flightNumber, date, departureTime, arriveTime) {
        this.flightNumber = flightNumber;
        this.date = date;
        this.departureTime = departureTime;
        this.arriveTime = arriveTime;
        this.trips = [];
        this.passengers = [];
        this.meals = [];
        this.chefs = [];
        this.crews = [];
        this.pilots = [];
        this.fightAttendants = [];
    }
    Flight.prototype.addPassenger = function (passenger) {
        this.passengers.push(passenger);
        passenger.flights.push(this);
    };
    Flight.prototype.addTrip = function (trip) {
        this.trips.push(trip);
        trip.flights.push(this);
    };
    Flight.prototype.getPassenger = function () {
        return this.passengers;
    };
    Flight.prototype.addPilot = function (pilot) {
        this.pilots.push(pilot);
    };
    Flight.prototype.addCrew = function (crew) {
        this.crews.push(crew);
    };
    Flight.prototype.addChef = function (chef) {
        this.chefs.push(chef);
    };
    // addMeal(meal:Meal){
    //     this.meals.push(meal);
    // }
    Flight.prototype.addFlightAttendant = function (flightAttendant) {
        this.fightAttendants.push(flightAttendant);
    };
    Flight.prototype.getGate = function () {
        return this.gate;
    };
    Flight.prototype.getFlightNumber = function () {
        return this.flightNumber;
    };
    Flight.prototype.assignGate = function (gate) {
        this.gate = gate;
        gate.flight = this;
    };
    Flight.prototype.getPassengerReturnTicket = function () {
        var returnTicketCount = 0;
        for (var _i = 0, _a = this.passengers; _i < _a.length; _i++) {
            var passenger = _a[_i];
            if (passenger.hasReturnTicket) {
                returnTicketCount++;
            }
        }
        return returnTicketCount;
    };
    Flight.prototype.addMeal = function (type, count) {
        this.meals.push(new Meal_1.Meal(type, count));
    };
    Flight.prototype.getMealCountByType = function (type) {
        var count = 0;
        for (var _i = 0, _a = this.meals; _i < _a.length; _i++) {
            var meal = _a[_i];
            if (meal.type === type) {
                count += meal.count;
            }
        }
        return count;
    };
    return Flight;
}());
exports.Flight = Flight;
