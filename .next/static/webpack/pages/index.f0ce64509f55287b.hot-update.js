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

/***/ "./src/components/ModalSearch.jsx":
/*!****************************************!*\
  !*** ./src/components/ModalSearch.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @meilisearch/instant-meilisearch */ \"./node_modules/@meilisearch/instant-meilisearch/dist/instant-meilisearch.umd.js\");\n/* harmony import */ var _meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ModalSearch(props) {\n    var Hit = function Hit(props) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Highlight, {\n                attribute: \"name\",\n                hit: props.hit\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this);\n    };\n    var searchClient = (0,_meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_2__.instantMeiliSearch)(\"https://dummyjson.com/\", \"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed w-screen h-screen bg-gray-700\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InstantSearch, {\n            indexName: \"?q\",\n            searchClient: searchClient,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchBox, {\n                    className: \"hidden lg:block border-0 border-gray-200 py-1 px-3 rounded-lg absolute lg:relative lg:border-r-0\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Hits, {\n                    hitComponent: Hit\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = ModalSearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalSearch);\nvar _c;\n$RefreshReg$(_c, \"ModalSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNlYXJjaC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQW1EO0FBQ21CO0FBQ3RFLFNBQVNJLFlBQVlDLEtBQUssRUFBRTtRQUdqQkMsTUFBVCxTQUFTQSxJQUFJRCxLQUFLLEVBQUU7UUFDbEIscUJBQ0UsOERBQUNFO3NCQUNDLDRFQUFDQztnQkFBVUMsV0FBVTtnQkFBT0MsS0FBS0wsTUFBTUssR0FBRzs7Ozs7Ozs7Ozs7SUFHaEQ7SUFSQSxJQUFNQyxlQUFlUixvRkFBa0JBLENBQUMsMEJBQTBCO0lBU2xFLHFCQUNFLDhEQUFDSTtRQUFJSyxXQUFVO2tCQUNiLDRFQUFDQztZQUFjQyxXQUFVO1lBQUtILGNBQWNBOzs4QkFDMUMsOERBQUNJO29CQUFVSCxXQUFVOzs7Ozs7OEJBQ3JCLDhEQUFDSTtvQkFBS0MsY0FBY1g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVCO0tBbEJTRjtBQW1CVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNlYXJjaC5qc3g/NGM4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBpbnN0YW50TWVpbGlTZWFyY2ggfSBmcm9tIFwiQG1laWxpc2VhcmNoL2luc3RhbnQtbWVpbGlzZWFyY2hcIjtcclxuZnVuY3Rpb24gTW9kYWxTZWFyY2gocHJvcHMpIHtcclxuICBjb25zdCBzZWFyY2hDbGllbnQgPSBpbnN0YW50TWVpbGlTZWFyY2goXCJodHRwczovL2R1bW15anNvbi5jb20vXCIsIFwiXCIpO1xyXG5cclxuICBmdW5jdGlvbiBIaXQocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhpZ2hsaWdodCBhdHRyaWJ1dGU9XCJuYW1lXCIgaGl0PXtwcm9wcy5oaXR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdy1zY3JlZW4gaC1zY3JlZW4gYmctZ3JheS03MDBcIj5cclxuICAgICAgPEluc3RhbnRTZWFyY2ggaW5kZXhOYW1lPVwiP3FcIiBzZWFyY2hDbGllbnQ9e3NlYXJjaENsaWVudH0+XHJcbiAgICAgICAgPFNlYXJjaEJveCBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgYm9yZGVyLTAgYm9yZGVyLWdyYXktMjAwIHB5LTEgcHgtMyByb3VuZGVkLWxnIGFic29sdXRlIGxnOnJlbGF0aXZlIGxnOmJvcmRlci1yLTBcIiAvPlxyXG4gICAgICAgIDxIaXRzIGhpdENvbXBvbmVudD17SGl0fSAvPlxyXG4gICAgICA8L0luc3RhbnRTZWFyY2g+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsU2VhcmNoO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluc3RhbnRNZWlsaVNlYXJjaCIsIk1vZGFsU2VhcmNoIiwicHJvcHMiLCJIaXQiLCJkaXYiLCJIaWdobGlnaHQiLCJhdHRyaWJ1dGUiLCJoaXQiLCJzZWFyY2hDbGllbnQiLCJjbGFzc05hbWUiLCJJbnN0YW50U2VhcmNoIiwiaW5kZXhOYW1lIiwiU2VhcmNoQm94IiwiSGl0cyIsImhpdENvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ModalSearch.jsx\n"));

/***/ })

});