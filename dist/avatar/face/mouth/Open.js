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
var Open = /** @class */ (function (_super) {
    __extends(Open, _super);
    function Open() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Open.prototype.render = function () {
        return (React.createElement("g", { id: 'Mouth/Open', transform: 'translate(2.000000, 52.000000)', fillOpacity: '0.699999988', fill: '#000000' },
            React.createElement("circle", { id: "Oval", cx: "54", cy: "27", r: "14" })));
    };
    Open.optionValue = 'Open';
    return Open;
}(React.Component));
exports.default = Open;
