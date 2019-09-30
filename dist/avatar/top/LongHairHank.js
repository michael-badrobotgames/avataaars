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
var facialHair_1 = require("./facialHair");
var HairColor_1 = require("./HairColor");
var LongHairHank = /** @class */ (function (_super) {
    __extends(LongHairHank, _super);
    function LongHairHank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    LongHairHank.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { d: 'M127.746306,122.838428 C127.620929,86.449212 120.558835,61.5030694 106.560022,48 C83.4798088,25.737131 60.3385696,15.7356884 41.0968554,28.4612466 C21.8551411,41.1868049 40.1879496,72.7905844 28.1262876,110.56134 C25.3100873,119.380192 22.7799674,126.06877 20.535928,130.627074 C25.6449553,144.277648 35.9289393,155.401567 49,161.610951 L49,167.646091 C25.2192824,161.478945 1.0750272,150.099389 1,134 C0.914976702,115.014914 4.64323078,33.3120212 23.6432308,17 C33.0236763,8.9466302 48.6952966,0.550643437 73.0001685,1 C97.3050404,1.44935656 111.684769,9.74156817 122.516367,17 C138.360121,27.6171586 146.936642,66.4766439 147.00091,100.879518 C147.036152,120.509924 141.787661,146.299971 135.346428,147 C121.047752,148.55397 112.471716,164.424475 97.0000027,170.584776 L97,161.610951 C112.479675,154.257359 124.050482,140.011146 127.746306,122.838428 Z', id: path2 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Long-Hair/Hank', mask: "url(#" + mask1 + ")" },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement("g", { id: 'Hair', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', transform: 'translate(40.000000, 19.000000)' },
                        React.createElement("mask", { id: mask2, fill: 'white' },
                            React.createElement("use", { xlinkHref: '#' + path2 })),
                        React.createElement("use", { id: 'Combined-Shape', fill: '#E6E6E6', xlinkHref: '#' + path2 }),
                        React.createElement(HairColor_1.default, { maskID: mask2 })),
                    React.createElement(facialHair_1.default, null),
                    this.props.children))));
    };
    LongHairHank.optionValue = 'LongHairHank';
    return LongHairHank;
}(React.Component));
exports.default = LongHairHank;
