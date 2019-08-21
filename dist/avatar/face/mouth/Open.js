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
            React.createElement("path", { d: "M38,15.3292014 C38,24.1657574 45.163444,31.3292014 54,31.3292014 C62.836556,31.3292014 70,24.1657574 70,15.3292014 C70,9.11045137 64.6666667,6.00107637 54,6.00107637 C43.3333333,5.93355337 38,9.04292837 38,15.3292014 Z", id: 'Mouth', transform: 'translate(54.005357, 22.188409) scale(1, -1) translate(-54.005357, -22.188409) ' })));
    };
    Open.optionValue = 'Open';
    return Open;
}(React.Component));
exports.default = Open;
