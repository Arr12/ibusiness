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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-instantsearch-dom */ \"./node_modules/react-instantsearch-dom/dist/es/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\n\n\n\n\n\nfunction ModalSearch(props) {\n    var Hit = function Hit(props) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__.Highlight, {\n                attribute: \"name\",\n                hit: props.hit\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this);\n    };\n    //   const searchClient = instantMeiliSearch(\"https://dummyjson.com/\", \"\");\n    var searchClient = false;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(props.showModal === true ? \"block\" : \"hidden\", \" top-0 z-30 fixed w-screen h-screen bg-gray-200\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"ml-3 mt-3\",\n                onClick: function() {\n                    return props.setShowModal(false);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__.InstantSearch, {\n                indexName: \"?q\",\n                searchClient: searchClient,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__.SearchBox, {\n                        className: \"top-1/2 left-[20%] border-0 border-gray-200 py-1 px-3 rounded-lg absolute lg:relative lg:border-r-0\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__.Hits, {\n                        hitComponent: Hit\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\src\\\\components\\\\ModalSearch.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = ModalSearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalSearch);\nvar _c;\n$RefreshReg$(_c, \"ModalSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNlYXJjaC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFtRDtBQU1sQjtBQUNxQztBQUNMO0FBQ0w7QUFDNUQsU0FBU1UsWUFBWUMsS0FBSyxFQUFFO1FBSWpCQyxNQUFULFNBQVNBLElBQUlELEtBQUssRUFBRTtRQUNsQixxQkFDRSw4REFBQ0U7c0JBQ0MsNEVBQUNQLDhEQUFTQTtnQkFBQ1EsV0FBVTtnQkFBT0MsS0FBS0osTUFBTUksR0FBRzs7Ozs7Ozs7Ozs7SUFHaEQ7SUFUQSwyRUFBMkU7SUFDM0UsSUFBTUMsZUFBZSxLQUFLO0lBUzFCLHFCQUNFLDhEQUFDSDtRQUNDSSxXQUFXLEdBRVYsT0FEQ04sTUFBTU8sU0FBUyxLQUFLLElBQUksR0FBRyxVQUFVLFFBQVEsRUFDOUM7OzBCQUVELDhEQUFDQztnQkFBT0YsV0FBVTtnQkFBWUcsU0FBUzsyQkFBTVQsTUFBTVUsWUFBWSxDQUFDLEtBQUs7OzBCQUNuRSw0RUFBQ2IsMkVBQWVBO29CQUFDYyxNQUFNYixzRUFBT0E7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ04sa0VBQWFBO2dCQUFDb0IsV0FBVTtnQkFBS1AsY0FBY0E7O2tDQUMxQyw4REFBQ1osOERBQVNBO3dCQUFDYSxXQUFVOzs7Ozs7a0NBQ3JCLDhEQUFDWix5REFBSUE7d0JBQUNtQixjQUFjWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVCO0tBMUJTRjtBQTJCVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNlYXJjaC5qc3g/NGM4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEluc3RhbnRTZWFyY2gsXHJcbiAgU2VhcmNoQm94LFxyXG4gIEhpdHMsXHJcbiAgSGlnaGxpZ2h0LFxyXG59IGZyb20gXCJyZWFjdC1pbnN0YW50c2VhcmNoLWRvbVwiO1xyXG5pbXBvcnQgeyBpbnN0YW50TWVpbGlTZWFyY2ggfSBmcm9tIFwiQG1laWxpc2VhcmNoL2luc3RhbnQtbWVpbGlzZWFyY2hcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVRpbWVzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5mdW5jdGlvbiBNb2RhbFNlYXJjaChwcm9wcykge1xyXG4gIC8vICAgY29uc3Qgc2VhcmNoQ2xpZW50ID0gaW5zdGFudE1laWxpU2VhcmNoKFwiaHR0cHM6Ly9kdW1teWpzb24uY29tL1wiLCBcIlwiKTtcclxuICBjb25zdCBzZWFyY2hDbGllbnQgPSBmYWxzZTtcclxuXHJcbiAgZnVuY3Rpb24gSGl0KHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIaWdobGlnaHQgYXR0cmlidXRlPVwibmFtZVwiIGhpdD17cHJvcHMuaGl0fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgcHJvcHMuc2hvd01vZGFsID09PSB0cnVlID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIlxyXG4gICAgICB9IHRvcC0wIHotMzAgZml4ZWQgdy1zY3JlZW4gaC1zY3JlZW4gYmctZ3JheS0yMDBgfVxyXG4gICAgPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1sLTMgbXQtM1wiIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldFNob3dNb2RhbChmYWxzZSl9PlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxJbnN0YW50U2VhcmNoIGluZGV4TmFtZT1cIj9xXCIgc2VhcmNoQ2xpZW50PXtzZWFyY2hDbGllbnR9PlxyXG4gICAgICAgIDxTZWFyY2hCb3ggY2xhc3NOYW1lPVwidG9wLTEvMiBsZWZ0LVsyMCVdIGJvcmRlci0wIGJvcmRlci1ncmF5LTIwMCBweS0xIHB4LTMgcm91bmRlZC1sZyBhYnNvbHV0ZSBsZzpyZWxhdGl2ZSBsZzpib3JkZXItci0wXCIgLz5cclxuICAgICAgICA8SGl0cyBoaXRDb21wb25lbnQ9e0hpdH0gLz5cclxuICAgICAgPC9JbnN0YW50U2VhcmNoPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFNlYXJjaDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnN0YW50U2VhcmNoIiwiU2VhcmNoQm94IiwiSGl0cyIsIkhpZ2hsaWdodCIsImluc3RhbnRNZWlsaVNlYXJjaCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhVGltZXMiLCJNb2RhbFNlYXJjaCIsInByb3BzIiwiSGl0IiwiZGl2IiwiYXR0cmlidXRlIiwiaGl0Iiwic2VhcmNoQ2xpZW50IiwiY2xhc3NOYW1lIiwic2hvd01vZGFsIiwiYnV0dG9uIiwib25DbGljayIsInNldFNob3dNb2RhbCIsImljb24iLCJpbmRleE5hbWUiLCJoaXRDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ModalSearch.jsx\n"));

/***/ })

});