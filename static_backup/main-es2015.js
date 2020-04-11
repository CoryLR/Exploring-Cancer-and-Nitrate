(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analysis-dashboard/analysis-dashboard.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analysis-dashboard/analysis-dashboard.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <h2 class=\"display-4\">Cancer and Nitrate in Drinking Water</h2>\n        <p class=\"lead\">Explore the relationship yourself</p>\n        <hr class=\"my-4\">\n        <p>Cory Leigh Rahman, Master's in GIS & Web Map Programming, University of Wisconsin-Madison</p>\n        <p>March, 2020</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <h2>Introduction</h2>\n      <p>Nitrate is a contaminant which can get into your drinking water supply because of fertilizers and other waste<sup><a href=\"https://www.doh.wa.gov/Portals/1/Documents/Pubs/331-214.pdf\">Source</a></sup>. We can use data from Wisconsin to help figure out an important question: <strong>What is the relationship between Nitrate in drinking water and Cancer?</strong></p>\n    </div>\n    <div class=\"col-xs-12\">\n      <h4>Methodology</h4>\n      <p>To see how nitrate and cancer are related we will run linear regression on state-wide data from Wisconsin. Results of the regression could tell us how much of the cancer rate can be explained by nitrate concentration in drinking water.</p>\n      <ul>\n        <li>Independent (Explanatory) Variable: <strong>Nitrate Concentration</strong> from water well samples\n          <em>(parts per million)</em></li>\n        <li>Dependent Variable: <strong>Cancer Rate</strong> from census tracts <em>(percentage of population)</em></li>\n      </ul>\n      <img class=\"img-fluid\" id=\"img-analysis-flow-chart\" src=\"/static/assets/images/analysis-flow-chart.png\">\n      <p><br>The green-colored steps (<span class=\"analysis-coordination-color font-weight-bold\">Interpolation</span>,\n        <span class=\"analysis-coordination-color font-weight-bold\">Residuals</span>, and <span\n          class=\"analysis-coordination-color font-weight-bold\">Results</span>) are the steps we can interact with in\n        this\n        app. The rest is done automatically for you. You can set\n        the Interpolation parameters, run the full analysis, and explore the results.</p>\n        <ngb-accordion [closeOthers]=\"true\" activeIds=\"\">\n          <ngb-panel id=\"accordion-methodology\" title=\"&#9432; Further Explanation of Methodology and Flow Chart\">\n            <ng-template ngbPanelContent>\n              This flow chart shows the process for our analysis. We start with two <strong>inputs</strong>: cancer rates from census\n              tracts, and nitrate concentrations from well water samples (both from 2016). In order to explore the relationship between these\n              factors they must be in the same form. To get the data in the same form we <strong>interpolate</strong> the well samples and\n              use <strong>zonal statistics</strong> to get the average nitrate concentration per census tract. Once both cancer rates and\n              average nitrate concentration are averaged per census tract we can run a <strong>linear regression</strong>. The R-squared\n              value of the regression results will tell us how much of the cancer rate could be explained by nitrate\n              concentration in drinking water. For example, an R-Squared value of 0.20 would suggest that nitrate in drinking water can explain 20% of the cancer rate.\n            </ng-template>\n          </ngb-panel>\n        </ngb-accordion>  \n        <br>\n        <br>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <br>\n      <h2>Analysis</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-lg-4\">\n      <h4><span class=\"analysis-coordination-color\">Interpolation</span> Parameters</h4>\n      <p>The most subjective part of this analysis is how to do the interpolation. The <strong>Power</strong>\n        (distance decay exponent) and <strong>Smoothing</strong> values affect how nitrate concentration is estimated\n        for\n        areas between water wells.</p>\n      <img id=\"img-interpolation-parameters\" src=\"/static/assets/images/interpolation-parameters.png\">\n    </div>\n    <div class=\"col-sm-5 col-lg-4\">\n      <h4>Run the Analysis</h4>\n      <form class=\"analysis-input-form\">\n        <div class=\"form-group\">\n          <label for=\"idw_power_input\">Power</label>\n          <input [(ngModel)]=\"idw_power\" [disabled]=\"waitingForResults\" step=\"0.1\" name=\"idw_power\" type=\"number\" min=\"0\" max=\"143\"\n            placeholder=\"Enter a number > 0\" class=\"form-control\" id=\"idw_power_input\" required>\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Default: 2</small>\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Also called <em>distance decay exponent</em></small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"idw_smoothing_input\">Smoothing</label>\n          <input [(ngModel)]=\"idw_smoothing\" [disabled]=\"waitingForResults\" step=\"0.1\" name=\"idw_smoothing\" type=\"number\" min=\"0\" max=\"143\"\n            placeholder=\"Enter a number >= 0\" class=\"form-control\" id=\"idw_smoothing_input\" required>\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Default: 1</small>\n        </div>\n        <!-- <div class=\"form-group form-check\">\n          <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n          <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n        </div> -->\n        <button (click)=\"runAnalysis()\" [disabled]=\"waitingForResults\" type=\"submit\" class=\"btn btn-primary\">\n          <span *ngIf=\"waitingForResults\" class=\"spinner-border spinner-border-sm\" role=\"status\"\n            aria-hidden=\"true\"></span>\n          {{waitingForResults ? \"Running Analysis...\" : analysisCount < 1 ? \"Run Analysis\" : \"Re-run Analysis\"}}\n        </button>\n      </form>\n    </div>\n    <div class=\"col-sm-7 col-lg-4\" id=\"analysis-log\">\n      <h4>Log</h4>\n      <div class=\"log-wrapper\">\n        <pre>{{analysisLog}}</pre>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xl-6 map-column\">\n      <div id=\"residuals-map-intro\">\n        <br>\n        <h4>Map of Regression <span class=\"analysis-coordination-color\">Residuals</span></h4>\n        <p>This map shows where our model over and under predicted.</p>\n      </div>\n      <div style=\"position: relative\">\n        <div id=\"residuals-map\"></div>\n        <button id=\"geojson_download_button\" (click)='promptGeoJsonDownload()' *ngIf=\"analysisCount > 0\" class=\"btn btn-secondary\" title=\"Download this GeoJSON\">&#10515;</button>\n      </div>\n      <br>\n      <ngb-accordion [closeOthers]=\"true\" activeIds=\"\">\n        <ngb-panel id=\"accordion-residuals-map\" title=\"&#9432; Further Explanation of Residuals Map\">\n          <ng-template ngbPanelContent>\n            Using linear regression we can guess what the cancer rate will be in any given census tract based only on\n            the nitrate concentration in water there. This map displays the difference (i.e.\n            <strong>residual</strong>) between our guesses and the actual cancer rates in each tract.\n          </ng-template>\n        </ngb-panel>\n      </ngb-accordion>\n    </div>\n\n    <div class=\"col-xl-6 regression-results-column\">\n      <div id=\"regression-results-intro\">\n        <br>\n        <h4>Summary of Regression <span class=\"analysis-coordination-color\">Results</span></h4>\n        <p>These results tell us how much nitrate can help explain cancer rates. </p>\n      </div>\n      <div class=\"regression-results-wrapper\">\n        <pre id=\"regression-results\">{{regressionResultsString}}</pre>\n      </div>\n      <br>\n      <ngb-accordion [closeOthers]=\"true\" activeIds=\"\">\n        <ngb-panel id=\"accordion-regression-results\" title=\"&#9432; Further Explanation of Regression Summary\">\n          <ng-template ngbPanelContent>\n            The regression summary tells us 1) What the R-Squared value is, and 2) if we can trust the R-Squared\n            value. An R-Squared value of 0.20, for example, would suggest that nitrate in drinking water could explain\n            20% of the cancer rate. The other statistics tell us if the R-Squared value can be trusted. Note that \"mean\" on the left-hand side refers to nitrate concentration (the mean/average nitrate concentration per census tract).\n          </ng-template>\n        </ngb-panel>\n      </ngb-accordion>\n    </div>\n\n    <!-- Add space at the end of the page -->\n    <div class=\"col-xs-12\">\n      <br><br>\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-analysis-dashboard></app-analysis-dashboard>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/analysis-dashboard/analysis-dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/analysis-dashboard/analysis-dashboard.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h2, h3, h4, h5, h6 {\n  display: block;\n  width: 100%;\n}\n\nh4, h5 {\n  margin-top: 15px;\n}\n\np {\n  text-align: justify;\n}\n\n.col-xs-12 {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n#residuals-map {\n  width: 100%;\n  height: 650px;\n}\n\n.jumbotron {\n  background-color: #ede6da;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n#img-analysis-flow-chart {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  max-width: 900px;\n  height: auto;\n}\n\n#img-interpolation-parameters {\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n  height: auto;\n}\n\n.analysis-coordination-color {\n  color: #278A00;\n}\n\n.analysis-input-form .spinner-border {\n  margin-right: 0.2em;\n  margin-bottom: 0.1em;\n  width: 1em;\n  height: 1em;\n}\n\n#analysis-log .log-wrapper {\n  height: 280px;\n  overflow-y: scroll;\n  background-color: #ede6da;\n  padding: 10px;\n}\n\n#analysis-log .log-wrapper pre {\n  width: 100%;\n  margin: 0;\n}\n\n.regression-results-column {\n  overflow-x: hidden;\n}\n\n.regression-results-column .regression-results-wrapper {\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 10px;\n  background-color: #ede6da;\n  width: 100%;\n}\n\n@media (max-width: 1199.98px) {\n  .regression-results-column .regression-results-wrapper {\n    height: 550px;\n  }\n}\n\n@media (min-width: 1199.98px) {\n  .regression-results-column .regression-results-wrapper {\n    height: 650px;\n    font-size: 11px;\n  }\n}\n\n.regression-results-column .regression-results-wrapper pre#regression-results {\n  height: 530px;\n}\n\n#geojson_download_button {\n  position: absolute;\n  bottom: 35px;\n  right: 15px;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbHIvY29kZS9FeHBsb3JpbmctQ2FuY2VyLWFuZC1OaXRyYXRlL2Zyb250LWVuZC1leHBsb3JpbmctY2FuY2VyLW5pdHJhdGUvc3JjL2FwcC9hbmFseXNpcy1kYXNoYm9hcmQvYW5hbHlzaXMtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbmFseXNpcy1kYXNoYm9hcmQvYW5hbHlzaXMtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRFVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNQRjs7QURVQTtFQUNFLHlCQTlCd0I7RUErQnhCLGVBQUE7RUFDQSxnQkFBQTtBQ1BGOztBRFVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNQRjs7QURTQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ05GOztBRFNBO0VBQ0UsY0FuRDRCO0FDNkM5Qjs7QURVRTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ1BKOztBRGFFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBbkVzQjtFQW9FdEIsYUFBQTtBQ1ZKOztBRFdJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUNUTjs7QURjQTtFQUNFLGtCQUFBO0FDWEY7O0FEYUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQW5Gc0I7RUFvRnRCLFdBQUE7QUNYSjs7QURZSTtFQU5GO0lBT0ksYUFBQTtFQ1RKO0FBQ0Y7O0FEVUk7RUFURjtJQVVNLGFBQUE7SUFDQSxlQUFBO0VDUE47QUFDRjs7QURTSTtFQUNFLGFBQUE7QUNQTjs7QURZQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDVEYiLCJmaWxlIjoic3JjL2FwcC9hbmFseXNpcy1kYXNoYm9hcmQvYW5hbHlzaXMtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kYW5hbHlzaXMtY29vcmRpbmF0aW9uLWNvbG9yOiAjMjc4QTAwO1xuJG1lZGl1bS1iYWNrZ3JvdW5kLWNvbG9yOiAjZWRlNmRhO1xuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oNCwgaDUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmNvbC14cy0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5tYXAtY29sdW1uIHtcbiAgLy8gd2lkdGg6IDEwMCU7XG59XG5cbiNyZXNpZHVhbHMtbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjUwcHg7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVkaXVtLWJhY2tncm91bmQtY29sb3I7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuI2ltZy1hbmFseXNpcy1mbG93LWNoYXJ0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbiNpbWctaW50ZXJwb2xhdGlvbi1wYXJhbWV0ZXJzIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5hbmFseXNpcy1jb29yZGluYXRpb24tY29sb3Ige1xuICBjb2xvcjogJGFuYWx5c2lzLWNvb3JkaW5hdGlvbi1jb2xvcjtcbn1cblxuLmFuYWx5c2lzLWlucHV0LWZvcm0ge1xuICAuc3Bpbm5lci1ib3JkZXIge1xuICAgIG1hcmdpbi1yaWdodDogMC4yZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4xZW07XG4gICAgd2lkdGg6IDFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgfVxufVxuXG4jYW5hbHlzaXMtbG9nIHtcbiAgXG4gIC5sb2ctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAyODBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1lZGl1bS1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcHJlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG4ucmVncmVzc2lvbi1yZXN1bHRzLWNvbHVtbiB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICAucmVncmVzc2lvbi1yZXN1bHRzLXdyYXBwZXIge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1lZGl1bS1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cblxuICAgIHByZSNyZWdyZXNzaW9uLXJlc3VsdHMge1xuICAgICAgaGVpZ2h0OiA1MzBweDtcbiAgICB9XG4gIH1cbn1cblxuI2dlb2pzb25fZG93bmxvYWRfYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDM1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICB6LWluZGV4OiAxMDAwO1xufSIsImgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmg0LCBoNSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY29sLXhzLTEyIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuI3Jlc2lkdWFscy1tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NTBweDtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGU2ZGE7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuI2ltZy1hbmFseXNpcy1mbG93LWNoYXJ0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuI2ltZy1pbnRlcnBvbGF0aW9uLXBhcmFtZXRlcnMge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmFuYWx5c2lzLWNvb3JkaW5hdGlvbi1jb2xvciB7XG4gIGNvbG9yOiAjMjc4QTAwO1xufVxuXG4uYW5hbHlzaXMtaW5wdXQtZm9ybSAuc3Bpbm5lci1ib3JkZXIge1xuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG59XG5cbiNhbmFseXNpcy1sb2cgLmxvZy13cmFwcGVyIHtcbiAgaGVpZ2h0OiAyODBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlNmRhO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuI2FuYWx5c2lzLWxvZyAubG9nLXdyYXBwZXIgcHJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnJlZ3Jlc3Npb24tcmVzdWx0cy1jb2x1bW4ge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4ucmVncmVzc2lvbi1yZXN1bHRzLWNvbHVtbiAucmVncmVzc2lvbi1yZXN1bHRzLXdyYXBwZXIge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGU2ZGE7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAucmVncmVzc2lvbi1yZXN1bHRzLWNvbHVtbiAucmVncmVzc2lvbi1yZXN1bHRzLXdyYXBwZXIge1xuICAgIGhlaWdodDogNTUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLnJlZ3Jlc3Npb24tcmVzdWx0cy1jb2x1bW4gLnJlZ3Jlc3Npb24tcmVzdWx0cy13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDY1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxufVxuLnJlZ3Jlc3Npb24tcmVzdWx0cy1jb2x1bW4gLnJlZ3Jlc3Npb24tcmVzdWx0cy13cmFwcGVyIHByZSNyZWdyZXNzaW9uLXJlc3VsdHMge1xuICBoZWlnaHQ6IDUzMHB4O1xufVxuXG4jZ2VvanNvbl9kb3dubG9hZF9idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDEwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/analysis-dashboard/analysis-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/analysis-dashboard/analysis-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AnalysisDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisDashboardComponent", function() { return AnalysisDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);




let AnalysisDashboardComponent = class AnalysisDashboardComponent {
    constructor(http) {
        this.http = http;
        this.regressionResultsString = "Run the analysis to see regression results.";
        this.analysisCount = 0;
        this.waitingForResults = false;
        this.analysisLog = 'Use the "Run Analysis" button.';
        this.runAnalysis = () => {
            if (!Number.isNaN(this.idw_power) && !Number.isNaN(this.idw_smoothing) && this.idw_power > 0 && this.idw_smoothing >= 0) {
                this.startAnalysis_updateData(this.idw_power, this.idw_smoothing);
            }
            else {
                alert("Power must be greater than 0 and Smoothing must be greater than or equal to 0");
            }
        };
        this.initializeMap = () => {
            this.map = leaflet__WEBPACK_IMPORTED_MODULE_3__["map"]('residuals-map', {
                center: [44.9259, -89.8572],
                zoom: 7,
                scrollWheelZoom: false,
            });
            const baseMap = leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
                attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                subdomains: 'abcd',
                minZoom: 0,
                maxZoom: 20,
                ext: 'png'
            });
            baseMap.addTo(this.map);
            this.infoBoxControl = leaflet__WEBPACK_IMPORTED_MODULE_3__["control"]();
            this.infoBoxControl.onAdd = function (map) {
                this._div = leaflet__WEBPACK_IMPORTED_MODULE_3__["DomUtil"].create('div', 'info_control info_control_hover'); // create a div with a class "info"
                this.update();
                return this._div;
            };
            let self = this;
            // method that we will use to update the control based on feature properties passed
            this.infoBoxControl.update = function (props) {
                let residual, cancerRate, cancerRateEstimate, nitrateConcentration;
                if (props) {
                    cancerRate = Number.parseFloat(props.canrate).toFixed(2);
                    cancerRateEstimate = Number.parseFloat(props.canrate + props.residual).toFixed(3);
                    residual = Number.parseFloat(props.residual).toFixed(3);
                    nitrateConcentration = Number.parseFloat(props.mean).toFixed(2);
                }
                this._div.innerHTML = '<h5>Census Tracts</h5>' + (props ?
                    `
        <ul style="padding-left: 1.2em; margin-bottom: 0.5em;">
        <li>Actual Cancer Rate: <strong>${cancerRate}</strong>%</li>
        <li>Estimated Cancer Rate: <strong>${cancerRateEstimate}</strong>%</li>
        <li><strong>Residual: </strong><strong>${residual}%</strong></li>
        </ul>
        <em>(Cancer rate estimated based on Nitrate Concentration of <strong>${nitrateConcentration}</strong> ppm)</em>
        `
                    : self.analysisCount < 1 ? 'Run the analysis to see census tracts' : 'Hover over a census tract');
            };
            this.infoBoxControl.addTo(this.map);
            let legend = leaflet__WEBPACK_IMPORTED_MODULE_3__["control"]({ position: 'bottomleft' });
            legend.onAdd = (map) => {
                var div = leaflet__WEBPACK_IMPORTED_MODULE_3__["DomUtil"].create('div', 'info_control info_control_legend'), 
                // grades = [0, 10, 20, 50, 100, 200, 500, 1000],
                // midGrades = [0.3, 0.2, 0.1, 0, -0.1, -0.2, -0.3],
                midGrades = [0.4, 0.2, 0, -0.2, -0.4], labels = [];
                div.innerHTML += `<div><i style="background: ${this.getResidualColor(0.5)}"></i> > 0.4</div>`;
                // loop through our density intervals and generate a label with a colored square for each interval
                for (var i = 0; i < midGrades.length - 1; i++) {
                    div.innerHTML += `<div><i style="background: ${this.getResidualColor(midGrades[i] - 0.01)}"></i> ${midGrades[i]} - ${midGrades[i + 1]}</div>`;
                }
                div.innerHTML += `<div><i style="background: ${this.getResidualColor(-0.5)}"></i> < -0.4</div>`;
                return div;
            };
            legend.addTo(this.map);
        };
        this.startAnalysis_updateData = (distanceDecayExponent = "2", smoothing = "0") => {
            this.waitingForResults = true;
            this.userLog(`\n\nRunning Analysis... `);
            const url = '/analyze';
            const body = { 'distanceDecayExponent': String(distanceDecayExponent), 'smoothing': String(smoothing) };
            this.http.post(url, body).subscribe((data) => {
                if (this.map.hasLayer(this.residualsGeoJson)) {
                    this.map.removeLayer(this.residualsGeoJson);
                    this.residualsGeoJson = undefined;
                }
                this.regressionResultsString = data.summary.slice(0, -103);
                this.residualsGeoJson = leaflet__WEBPACK_IMPORTED_MODULE_3__["geoJSON"](JSON.parse(data.geojson), {
                    style: this.getStyle("residual"),
                    smoothFactor: 0.3,
                    onEachFeature: this.onEachFeature,
                }).addTo(this.map);
                this.map.addLayer(this.residualsGeoJson);
                this.analysisCount += 1;
                this.waitingForResults = false;
                this.infoBoxControl.update();
                this.userLog(`Done!\nInputs Used: Power:${this.idw_power} Smoothing:${this.idw_smoothing}`);
            });
        };
        this.getStyle = (property) => {
            return (feature) => {
                return {
                    weight: 0,
                    color: 'white',
                    fillColor: this.getResidualColor(feature.properties[property]),
                    fillOpacity: 1,
                };
            };
        };
        this.getResidualColor = (d) => {
            return d < -0.40 ? '#8c510a'
                : d < -0.20 ? '#d8b365'
                    : d < 0.00 ? '#f2e9da'
                        : d < 0.20 ? '#c7eae5'
                            : d < 0.40 ? '#5ab4ac'
                                : '#01665e';
        };
        this.highlightFeature = (e) => {
            var layer = e.target;
            layer.setStyle({
                weight: 5,
                color: 'white',
            });
            if (!leaflet__WEBPACK_IMPORTED_MODULE_3__["Browser"].ie && !leaflet__WEBPACK_IMPORTED_MODULE_3__["Browser"].opera && !leaflet__WEBPACK_IMPORTED_MODULE_3__["Browser"].edge) {
                layer.bringToFront();
            }
            this.infoBoxControl.update(layer.feature.properties);
        };
        this.resetHighlight = (e) => {
            this.residualsGeoJson.resetStyle(e.target);
            this.infoBoxControl.update();
        };
        this.onEachFeature = (feature, layer) => {
            layer.on({
                mouseover: this.highlightFeature,
                mouseout: this.resetHighlight,
            });
        };
        this.userLog = (message) => {
            this.analysisLog += String(message);
            setTimeout(() => {
                let logWrapperElement = document.querySelector('#analysis-log .log-wrapper');
                logWrapperElement.scrollTop = logWrapperElement.scrollHeight;
            }, 50);
        };
        this.promptGeoJsonDownload = () => {
            this.promptDownload("Residuals-Cancer-Nitrate.geojson", JSON.stringify(this.residualsGeoJson.toGeoJSON()));
        };
        this.promptDownload = (filename, text) => {
            let element = document.createElement('a');
            element.setAttribute('href', URL.createObjectURL(new Blob([text], {
                type: "application/octet-stream"
            })));
            element.setAttribute('download', filename);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            setTimeout(function () {
                document.body.removeChild(element);
            }, 1000);
        };
    }
    ngOnInit() {
        this.initializeMap();
    }
};
AnalysisDashboardComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AnalysisDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analysis-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./analysis-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analysis-dashboard/analysis-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./analysis-dashboard.component.scss */ "./src/app/analysis-dashboard/analysis-dashboard.component.scss")).default]
    })
], AnalysisDashboardComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'front-end-exploring-cancer-nitrate';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _analysis_dashboard_analysis_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analysis-dashboard/analysis-dashboard.component */ "./src/app/analysis-dashboard/analysis-dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _analysis_dashboard_analysis_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AnalysisDashboardComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/clr/code/Exploring-Cancer-and-Nitrate/front-end-exploring-cancer-nitrate/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map