"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilot = void 0;
var Employee_1 = require("./Employee");
var Pilot = /** @class */ (function (_super) {
    __extends(Pilot, _super);
    function Pilot(id, name, salary) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.id = id;
        _this.name = name;
        _this.salary = salary;
        return _this;
    }
    Pilot.prototype.isEqual = function (other) {
        return this.id == other.id && this.name == other.name && this.salary == other.salary;
    };
    Pilot.prototype.getSalary = function () {
        return this.salary;
    };
    return Pilot;
}(Employee_1.Employee));
exports.Pilot = Pilot;
