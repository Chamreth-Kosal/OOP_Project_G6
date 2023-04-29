"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var Layout = /** @class */ (function () {
    function Layout(row, column) {
        this.row = row;
        this.column = column;
        this.seats = [];
    }
    Layout.prototype.addSeat = function (seat) {
        this.seats.push(seat);
    };
    return Layout;
}());
exports.Layout = Layout;
