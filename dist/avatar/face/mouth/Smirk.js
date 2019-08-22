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
            React.createElement("path", { d: 'M43.1833268,27.0786133 C48.4906999,28.4765497 50.8861817,28.4033203 58.7280273,28.4033203 C66.569873,28.4033203 70.6523438,24.2158892 72.2558594,17.0532227 C72.5854586,15.5809516 72.1532975,13.4661626 70.0466081,14.0269722 C67.9399186,14.5877817 68.6169206,22.8037239 59.8029557,24.1431269 C50.9889909,25.4825298 45.7624284,23.6222116 43.1833268,22.9057488 C40.6042252,22.1892859 39.9580952,26.2291029 43.1833268,27.0786133 Z', id: 'Mouth' })));
    };
    Smirk.optionValue = 'Smirk';
    return Smirk;
}(React.Component));
exports.default = Smirk;
