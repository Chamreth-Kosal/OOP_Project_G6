"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airline = void 0;
var Airline = /** @class */ (function () {
    function Airline(name, code) {
        this.name = name;
        this.code = code;
        this.flights = [];
        this.employees = [];
    }
    Airline.prototype.addFlight = function (flight) {
        this.flights.push(flight);
    };
    Airline.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Airline.prototype.getTotalSalary = function () {
        var totalSalary = 0;
        for (var i = 0; i < this.employees.length; i++) {
            totalSalary += this.employees[i].salary;
        }
        return totalSalary;
    };
    return Airline;
}());
exports.Airline = Airline;
