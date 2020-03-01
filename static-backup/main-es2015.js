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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"span12\">\n        <h2 class=\"display-4\">Cancer and Nitrate in Drinking Water</h2>\n        <p class=\"lead\">Explore the relationship yourself</p>\n        <hr class=\"my-4\">\n        <!-- <p>This app allows anyone to explore the relationship between cancer rates and nitrate concentration in Wisconsin water.</p> -->\n        <p>Cory Leigh Rahman, Master's in GIS & Web Map Programming, University of Wisconsin-Madison</p>\n        <p>March, 2020</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <h3>Introduction</h3>\n      <p>The question we want to explore is: <strong>Is there a relationship between Nitrate in drinking water and\n          Cancer?</strong></p>\n      <ul>\n        <li>Independent (Explanatory) Variable: <strong>Nitrate Concentration</strong> from water well samples</li>\n        <li>Dependent Variable: <strong>Cancer Rate</strong> from census tracts</li>\n      </ul>\n    </div>\n    <h5>Methodology</h5>\n    <img class=\"img-fluid\" id=\"img-analysis-flow-chart\" src=\"/static/assets/images/analysis-flow-chart.png\">\n    <ngb-accordion [closeOthers]=\"true\" activeIds=\"\">\n      <ngb-panel id=\"static-1\" title=\"Full Explanation of Methodology and Flow Chart\">\n        <ng-template ngbPanelContent>\n          This flow chart shows the process for our analysis. We start with two inputs: cancer rates from census tracts, and water samples from wells. In order to explore the relationship between these factors they must be in the same form. To get the data in the same form we interpolate the well samples and use zonal statistics to get the average nitrate concentration per census tract. Once both cancer rates and average nitrate concentration are averaged per census tract we can run a linear regression. The \"R-squared\" value of the regression results will tell us how much of the cancer rate could be explained by nitrate concentration in drinking water.\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n    <p><br>The green-colored steps (<span class=\"analysis-coordination-color font-weight-bold\">Interpolation</span>, <span\n        class=\"analysis-coordination-color font-weight-bold\">Residuals</span>, and <span\n        class=\"analysis-coordination-color font-weight-bold\">Results</span>) are the steps we can interact with in this\n      app. You can set\n      the Interpolation parameters, run the full analysis, and explore the results.</p>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <br>\n\n      <h3>Do the Analysis</h3>\n\n      <h5>Set <span class=\"analysis-coordination-color\">Interpolation</span> Parameters</h5>\n\n      <p>The most subjective part of this analysis is how to do the interpolation. The <strong>Power</strong>\n        (distance decay exponent) and <strong>Smoothing</strong> values affect how nitrate concentration is estimated\n        for\n        areas between water wells.</p>\n    </div>\n  </div>\n  <!-- <div class=\"row\" style=\"width: 100%\"> -->\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <form class=\"analysis-input-form\">\n        <div class=\"form-group\">\n          <label for=\"idw_power_input\">Power</label>\n          <input [(ngModel)]=\"idw_power\" step=\"0.1\" name=\"idw_power\" type=\"number\" min=\"0\" max=\"143\" placeholder=\"Enter a number > 0\"\n            class=\"form-control\" id=\"idw_power_input\" required>\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Default: 2</small>\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Also called <em>distance decay exponent</em></small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"idw_smoothing_input\">Smoothing</label>\n          <input [(ngModel)]=\"idw_smoothing\" step=\"0.1\" name=\"idw_smoothing\" type=\"number\" min=\"0\" max=\"143\" placeholder=\"Enter a number >= 0\"\n            class=\"form-control\" id=\"idw_smoothing_input\" required>\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Default: 1</small>\n        </div>\n        <!-- <div class=\"form-group form-check\">\n          <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n          <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n        </div> -->\n        <button (click)=\"runAnalysis()\" [disabled]=\"waitingForResults\" type=\"submit\" class=\"btn btn-primary\">\n          <span *ngIf=\"waitingForResults\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span> \n          {{analysisCount < 1 ? \"Run\" : \"Re-run\"}} Analysis\n        </button>\n      </form>\n    </div>\n    <div class=\"col-sm\">\n      <img id=\"img-interpolation-parameters\" src=\"/static/assets/images/interpolation-parameters.png\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xs-12 map-wrapper\">\n      <br><br>\n      <h5>Map of Regression <span class=\"analysis-coordination-color\">Residuals</span></h5>\n      <div id=\"residuals-map\"></div>\n    </div>\n\n    <div class=\"col-xs-12\">\n      <br><br>\n      <h5>Summary of Regression <span class=\"analysis-coordination-color\">Results</span></h5>\n      <pre id=\"regression-results\">{{regressionResultsString}}</pre>\n    </div>\n\n    <!-- Add space at the end of the page -->\n    <br><br><br><br><br><br><br><br>\n\n  </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("h1, h2, h3, h4, h5, h6 {\n  display: block;\n  width: 100%;\n}\n\n.map-wrapper {\n  width: 100%;\n}\n\n#residuals-map {\n  width: 100%;\n  height: 650px;\n}\n\n.jumbotron {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n#img-analysis-flow-chart {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  max-width: 900px;\n}\n\n#img-interpolation-parameters {\n  margin-left: auto;\n  margin-right: auto;\n  width: 220px;\n}\n\n.analysis-coordination-color {\n  color: #278A00;\n}\n\n.analysis-input-form .spinner-border {\n  margin-right: 0.2em;\n  margin-bottom: 0.1em;\n  width: 1em;\n  height: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jbHIvY29kZS9FeHBsb3JpbmctQ2FuY2VyLWFuZC1OaXRyYXRlL2Zyb250LWVuZC1leHBsb3JpbmctY2FuY2VyLW5pdHJhdGUvc3JjL2FwcC9hbmFseXNpcy1kYXNoYm9hcmQvYW5hbHlzaXMtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbmFseXNpcy1kYXNoYm9hcmQvYW5hbHlzaXMtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxjQWxDNEI7QUNpQzlCOztBREtFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9hbmFseXNpcy1kYXNoYm9hcmQvYW5hbHlzaXMtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kYW5hbHlzaXMtY29vcmRpbmF0aW9uLWNvbG9yOiAjMjc4QTAwO1xuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3Jlc2lkdWFscy1tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NTBweDtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuI2ltZy1hbmFseXNpcy1mbG93LWNoYXJ0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTAwcHg7XG59XG4jaW1nLWludGVycG9sYXRpb24tcGFyYW1ldGVycyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAyMjBweDtcbn1cblxuLmFuYWx5c2lzLWNvb3JkaW5hdGlvbi1jb2xvciB7XG4gIGNvbG9yOiAkYW5hbHlzaXMtY29vcmRpbmF0aW9uLWNvbG9yO1xufVxuXG4uYW5hbHlzaXMtaW5wdXQtZm9ybSB7XG4gIC5zcGlubmVyLWJvcmRlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICB9XG59XG4iLCJoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3Jlc2lkdWFscy1tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NTBweDtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuI2ltZy1hbmFseXNpcy1mbG93LWNoYXJ0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTAwcHg7XG59XG5cbiNpbWctaW50ZXJwb2xhdGlvbi1wYXJhbWV0ZXJzIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDIyMHB4O1xufVxuXG4uYW5hbHlzaXMtY29vcmRpbmF0aW9uLWNvbG9yIHtcbiAgY29sb3I6ICMyNzhBMDA7XG59XG5cbi5hbmFseXNpcy1pbnB1dC1mb3JtIC5zcGlubmVyLWJvcmRlciB7XG4gIG1hcmdpbi1yaWdodDogMC4yZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbn0iXX0= */");

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
        this.regressionResultsString = "";
        this.analysisCount = 0;
        this.waitingForResults = false;
        this.runAnalysis = () => {
            console.log("this.idw_power\n", this.idw_power);
            console.log("this.idw_smoothing\n", this.idw_smoothing);
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
                this._div = leaflet__WEBPACK_IMPORTED_MODULE_3__["DomUtil"].create('div', 'info_box_control'); // create a div with a class "info"
                this.update();
                return this._div;
            };
            // method that we will use to update the control based on feature properties passed
            this.infoBoxControl.update = function (props) {
                this._div.innerHTML = '<h5>Census Tracts</h5>' + (props ?
                    `
            Residual: ${Number.parseFloat(props.residual).toPrecision(4)}
            <br>Cancer Rate: ${Number.parseFloat(props.canrate).toPrecision(4)}
            <br>Nitrate Concentration: ${Number.parseFloat(props.mean).toPrecision(4)}
            `
                    : 'Hover over a census tract');
            };
            this.infoBoxControl.addTo(this.map);
            // /* Useful for testing map position */
            // setInterval(() => {
            //   console.log("map center: ", this.map.getCenter());
            // }, 3000)
        };
        this.startAnalysis_updateData = (distanceDecayExponent = "2", smoothing = "0") => {
            this.waitingForResults = true;
            const url = '/analyze';
            const body = { 'distanceDecayExponent': String(distanceDecayExponent), 'smoothing': String(smoothing) };
            this.http.post(url, body).subscribe((data) => {
                if (this.map.hasLayer(this.residualsGeoJson)) {
                    this.map.removeLayer(this.residualsGeoJson);
                    this.residualsGeoJson = undefined;
                }
                this.regressionResultsString = data.summary;
                this.residualsGeoJson = leaflet__WEBPACK_IMPORTED_MODULE_3__["geoJSON"](JSON.parse(data.geojson), {
                    style: this.getStyle("residual"),
                    smoothFactor: 0.3,
                    onEachFeature: this.onEachFeature,
                }).addTo(this.map);
                this.map.addLayer(this.residualsGeoJson);
                this.analysisCount += 1;
                this.waitingForResults = false;
                console.log("this.residualsGeoJson:\n", this.residualsGeoJson);
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
            return d < -100 ? 'black'
                : d < -0.30 ? '#8c510a'
                    : d < -0.20 ? '#bf812d'
                        : d < -0.10 ? '#dfc27d'
                            : d < -0.00 ? '#f6e8c3'
                                : d < 0.10 ? '#c7eae5'
                                    : d < 0.20 ? '#80cdc1'
                                        : d < 0.30 ? '#35978f'
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