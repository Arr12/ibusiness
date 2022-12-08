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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Header */ \"./src/components/Header.jsx\");\n/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Footer */ \"./src/components/Footer.jsx\");\n/* harmony import */ var _src_components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Home */ \"./src/components/Home.jsx\");\n/* harmony import */ var _src_components_ModalSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/ModalSearch */ \"./src/components/ModalSearch.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Index(props) {\n    var addProducts = function addProducts(title) {\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(\"https://dummyjson.com/products/add\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                title: title\n            })\n        }).then(function(res) {\n            return res.json();\n        }).then(console.log);\n    };\n    var updateProducts = function updateProducts(id, title) {\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(\"https://dummyjson.com/products/\" + id, {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                title: title\n            })\n        }).then(function(res) {\n            return res.json();\n        }).then(console.log);\n    };\n    var deleteProducts = function deleteProducts(id) {\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetch(\"https://dummyjson.com/products/\" + id, {\n            method: \"DELETE\"\n        }).then(function(res) {\n            return res.json();\n        }).then(console.log);\n    };\n    var handleSearch = function handleSearch(e) {\n        var value = e.target.value;\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"https://dummyjson.com/products/search?q=\" + value).then(function(response) {\n            setProducts(response.data.products);\n        })[\"catch\"](function(err) {\n            console.log(err);\n        });\n    };\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), products = _useState[0], setProducts = _useState[1];\n    var _useState1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), showModal = _useState1[0], setShowModal = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"https://dummyjson.com/products\").then(function(response) {\n            setProducts(response.data.products);\n        })[\"catch\"](function(err) {\n            console.log(err);\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleSearch: function() {\n                    return handleSearch;\n                },\n                showModal: showModal,\n                setShowModal: function() {\n                    return setShowModal;\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\pages\\\\index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                products: products,\n                axios: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\pages\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\pages\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ModalSearch__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                showModal: showModal,\n                setShowModal: function() {\n                    return setShowModal;\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\pages\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ARYO\\\\Documents\\\\ibisnis_react\\\\pages\\\\index.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"pphjGLEsWzJL2/ow31y0MFaniko=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFBbUQ7QUFDTDtBQUNBO0FBQ0o7QUFDYztBQUM5QjtBQUUxQixTQUFTUSxNQUFNQyxLQUFLLEVBQUU7UUFhWEMsY0FBVCxTQUFTQSxZQUFZQyxLQUFLLEVBQUU7UUFDMUJKLG1EQUNRLENBQUMsc0NBQXNDO1lBQzNDTSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CTixPQUFPQTtZQUVUO1FBQ0YsR0FDQ08sSUFBSSxDQUFDLFNBQUNDO21CQUFRQSxJQUFJQyxJQUFJO1dBQ3RCRixJQUFJLENBQUNHLFFBQVFDLEdBQUc7SUFDckI7UUFDU0MsaUJBQVQsU0FBU0EsZUFBZUMsRUFBRSxFQUFFYixLQUFLLEVBQUU7UUFDakNKLG1EQUNRLENBQUMsb0NBQW9DaUIsSUFBSTtZQUM3Q1gsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtZQUM5Q0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQk4sT0FBT0E7WUFDVDtRQUNGLEdBQ0NPLElBQUksQ0FBQyxTQUFDQzttQkFBUUEsSUFBSUMsSUFBSTtXQUN0QkYsSUFBSSxDQUFDRyxRQUFRQyxHQUFHO0lBQ3JCO1FBQ1NHLGlCQUFULFNBQVNBLGVBQWVELEVBQUUsRUFBRTtRQUMxQmpCLG1EQUNRLENBQUMsb0NBQW9DaUIsSUFBSTtZQUM3Q1gsUUFBUTtRQUNWLEdBQ0NLLElBQUksQ0FBQyxTQUFDQzttQkFBUUEsSUFBSUMsSUFBSTtXQUN0QkYsSUFBSSxDQUFDRyxRQUFRQyxHQUFHO0lBQ3JCO1FBQ1NJLGVBQVQsU0FBU0EsYUFBYUMsQ0FBQyxFQUFFO1FBQ3ZCLElBQUlDLFFBQVFELEVBQUVFLE1BQU0sQ0FBQ0QsS0FBSztRQUMxQnJCLGlEQUNNLENBQUMsNkNBQTZDcUIsT0FDakRWLElBQUksQ0FBQyxTQUFDYSxVQUFhO1lBQ2xCQyxZQUFZRCxTQUFTRSxJQUFJLENBQUNDLFFBQVE7UUFDcEMsRUFDQ0MsQ0FBQUEsUUFBSyxDQUFDLFNBQUNDLEtBQVE7WUFDZGYsUUFBUUMsR0FBRyxDQUFDYztRQUNkO0lBQ0o7O0lBdkRBLElBQWdDbEMsWUFBQUEsZ0ZBQUFBLENBQUFBLCtDQUFRQSxDQUFDLElBQUksT0FBdENnQyxXQUF5QmhDLGNBQWY4QixjQUFlOUI7SUFDaEMsSUFBa0NBLGFBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxJQUFJLE9BQXhDbUMsWUFBMkJuQyxlQUFoQm9DLGVBQWdCcEM7SUFDbENELGdEQUFTQSxDQUFDLFdBQU07UUFDZE0saURBQ00sQ0FBQyxrQ0FDSlcsSUFBSSxDQUFDLFNBQUNhLFVBQWE7WUFDbEJDLFlBQVlELFNBQVNFLElBQUksQ0FBQ0MsUUFBUTtRQUNwQyxFQUNDQyxDQUFBQSxRQUFLLENBQUMsU0FBQ0MsS0FBUTtZQUNkZixRQUFRQyxHQUFHLENBQUNjO1FBQ2Q7SUFDSjtJQTZDQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDcEMsOERBQU1BO2dCQUNMdUIsY0FBYzsyQkFBTUE7O2dCQUNwQlcsV0FBV0E7Z0JBQ1hDLGNBQWM7MkJBQU1BOzs7Ozs7OzBCQUV0Qiw4REFBQ2pDLDREQUFJQTtnQkFBQzZCLFVBQVVBO2dCQUFVM0IsS0FBSzs7Ozs7OzBCQUMvQiw4REFBQ0gsOERBQU1BOzs7OzswQkFDUCw4REFBQ0UsbUVBQVdBO2dCQUFDK0IsV0FBV0E7Z0JBQVdDLGNBQWM7MkJBQU1BOzs7Ozs7Ozs7Ozs7O0FBRzdEO0dBckVTOUI7S0FBQUE7QUF1RVQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Ib21lXCI7XHJcbmltcG9ydCBNb2RhbFNlYXJjaCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTW9kYWxTZWFyY2hcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0c1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhLnByb2R1Y3RzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxuICBmdW5jdGlvbiBhZGRQcm9kdWN0cyh0aXRsZSkge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmZldGNoKFwiaHR0cHM6Ly9kdW1teWpzb24uY29tL3Byb2R1Y3RzL2FkZFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgLyogb3RoZXIgcHJvZHVjdCBkYXRhICovXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGNvbnNvbGUubG9nKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdHMoaWQsIHRpdGxlKSB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZmV0Y2goXCJodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMvXCIgKyBpZCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbihjb25zb2xlLmxvZyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3RzKGlkKSB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZmV0Y2goXCJodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHMvXCIgKyBpZCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oY29uc29sZS5sb2cpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBoYW5kbGVTZWFyY2goZSkge1xyXG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9kdW1teWpzb24uY29tL3Byb2R1Y3RzL3NlYXJjaD9xPVwiICsgdmFsdWUpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEucHJvZHVjdHMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGhhbmRsZVNlYXJjaD17KCkgPT4gaGFuZGxlU2VhcmNofVxyXG4gICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxyXG4gICAgICAgIHNldFNob3dNb2RhbD17KCkgPT4gc2V0U2hvd01vZGFsfVxyXG4gICAgICAvPlxyXG4gICAgICA8SG9tZSBwcm9kdWN0cz17cHJvZHVjdHN9IGF4aW9zIC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPE1vZGFsU2VhcmNoIHNob3dNb2RhbD17c2hvd01vZGFsfSBzZXRTaG93TW9kYWw9eygpID0+IHNldFNob3dNb2RhbH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIkZvb3RlciIsIkhvbWUiLCJNb2RhbFNlYXJjaCIsImF4aW9zIiwiSW5kZXgiLCJwcm9wcyIsImFkZFByb2R1Y3RzIiwidGl0bGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVByb2R1Y3RzIiwiaWQiLCJkZWxldGVQcm9kdWN0cyIsImhhbmRsZVNlYXJjaCIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImdldCIsInJlc3BvbnNlIiwic2V0UHJvZHVjdHMiLCJkYXRhIiwicHJvZHVjdHMiLCJjYXRjaCIsImVyciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});