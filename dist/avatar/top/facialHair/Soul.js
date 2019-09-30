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
var lodash_1 = require("lodash");
var Colors_1 = require("./Colors");
var Goatee = /** @class */ (function (_super) {
    __extends(Goatee, _super);
    function Goatee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    Goatee.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1;
        return (React.createElement("g", { id: 'Facial-Hair/Soul', transform: 'translate(49.000000, 72.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M74.9987743,109.723371 C74.9987743,115 74.9987743,115 83.9999331,115 C93.0010919,115 93.577188,115 93.577188,109.723371 C93.577188,104.446742 89.4491427,95.5190691 83.9999331,95.5190691 C78.5507235,95.5190691 74.9987743,104.446742 74.9987743,109.723371 Z', id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Soul', fill: '#331B0C', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 })));
    };
    Goatee.optionValue = 'Soul';
    return Goatee;
}(React.Component));
exports.default = Goatee;
