"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Smirk = /** @class */ (function (_super) {
    __extends(Smirk, _super);
    function Smirk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Smirk.prototype.render = function () {
        return (React.createElement("g", { id: 'Mouth/Smirk', transform: 'translate(2.000000, 52.000000)', fillOpacity: '0.599999964', fillRule: 'nonzero', fill: '#000000' },
            React.createElement("path", { d: 'M39.1367188,23.5 C44.4440918,24.5437012 46.1581544,24.3605957 54,24.3605957 C61.8418456,24.3605957 65.739502,21.3476562 67.3430176,16 C67.6726169,14.9008005 68.1066895,13.5812988 66,14 C63.8933105,14.4187012 64.5703125,20.5527344 55.7563477,21.5527344 C46.9423828,22.5527344 41.7158203,21.1638184 39.1367187,20.6289062 C36.5576172,20.0939941 35.9114872,22.8657544 39.1367188,23.5 Z', id: 'Mouth' })));
    };
    Smirk.optionValue = 'Smirk';
    return Smirk;
}(React.Component));
exports.default = Smirk;
