"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gate = void 0;
var Gate = /** @class */ (function () {
    function Gate(gateNumber) {
        this.gateNumber = gateNumber;
    }
    Gate.prototype.getGateNumber = function () {
        return this.gateNumber;
    };
    return Gate;
}());
exports.Gate = Gate;
