"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Header */ \"./src/components/Header.jsx\");\n/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Footer */ \"./src/components/Footer.jsx\");\n/* harmony import */ var _src_components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Home */ \"./src/components/Home.jsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Index(props) {\n    var handleSearch = function handleSearch(e) {\n        var value = e.target.value;\n        axios.get(\"https://dummyjson.com/products/search?q=\" + value).then(function(response) {\n            setProducts(response.data.products);\n        })[\"catch\"](function(err) {\n            console.log(err);\n        });\n    };\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), products = _useState[0], setProducts = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios.get(\"https://dummyjson.com/products\").then(function(response) {\n            setProducts(response.data.products);\n        })[\"catch\"](function(err) {\n            console.log(err);\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleSearch: function() {\n                    return handleSearch;\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\pages\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                products: products\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\pages\\\\index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"8/Hhf2onsmvGCykHlTCLKPkfVcY=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBQW1EO0FBQ0w7QUFDQTtBQUNKO0FBRTFDLFNBQVNNLE1BQU1DLEtBQUssRUFBRTtRQVlYQyxlQUFULFNBQVNBLGFBQWFDLENBQUMsRUFBRTtRQUN2QixJQUFJQyxRQUFRRCxFQUFFRSxNQUFNLENBQUNELEtBQUs7UUFDMUJFLE1BQ0dDLEdBQUcsQ0FBQyw2Q0FBNkNILE9BQ2pESSxJQUFJLENBQUMsU0FBQ0MsVUFBYTtZQUNsQkMsWUFBWUQsU0FBU0UsSUFBSSxDQUFDQyxRQUFRO1FBQ3BDLEVBQ0NDLENBQUFBLFFBQUssQ0FBQyxTQUFDQyxLQUFRO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNKOztJQXJCQSxJQUFnQ2xCLFlBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxJQUFJLE9BQXRDZ0IsV0FBeUJoQixjQUFmYyxjQUFlZDtJQUNoQ0QsZ0RBQVNBLENBQUMsV0FBTTtRQUNkVyxNQUNHQyxHQUFHLENBQUMsa0NBQ0pDLElBQUksQ0FBQyxTQUFDQyxVQUFhO1lBQ2xCQyxZQUFZRCxTQUFTRSxJQUFJLENBQUNDLFFBQVE7UUFDcEMsRUFDQ0MsQ0FBQUEsUUFBSyxDQUFDLFNBQUNDLEtBQVE7WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0o7SUFZQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDcEIsOERBQU1BO2dCQUFDSyxjQUFnQjsyQkFBTUE7Ozs7Ozs7MEJBQzlCLDhEQUFDSCw0REFBSUE7Z0JBQUNhLFVBQVVBOzs7Ozs7MEJBQ2hCLDhEQUFDZCw4REFBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0E5QlNFO0tBQUFBO0FBZ0NULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvSG9tZVwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9kdW1teWpzb24uY29tL3Byb2R1Y3RzXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEucHJvZHVjdHMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaChlKSB7XHJcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCJodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMvc2VhcmNoP3E9XCIgKyB2YWx1ZSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YS5wcm9kdWN0cyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIGhhbmRsZVNlYXJjaCA9IHsoKSA9PiBoYW5kbGVTZWFyY2h9IC8+XHJcbiAgICAgIDxIb21lIHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiRm9vdGVyIiwiSG9tZSIsIkluZGV4IiwicHJvcHMiLCJoYW5kbGVTZWFyY2giLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInNldFByb2R1Y3RzIiwiZGF0YSIsInByb2R1Y3RzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});