"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/card/[id]",{

/***/ "./components/card/card-details/CardDetails.tsx":
/*!******************************************************!*\
  !*** ./components/card/card-details/CardDetails.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardDetails_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardDetails.module.scss */ \"./components/card/card-details/CardDetails.module.scss\");\n/* harmony import */ var _CardDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CardDetails_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CardDetails = function(props) {\n    _s();\n    var card = props.card;\n    var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var pid = router.query.pid;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_CardDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card),\n        __source: {\n            fileName: \"C:\\\\Users\\\\a.perevezenseva\\\\Documents\\\\Projects\\\\transactions-cards\\\\components\\\\card\\\\card-details\\\\CardDetails.tsx\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\a.perevezenseva\\\\Documents\\\\Projects\\\\transactions-cards\\\\components\\\\card\\\\card-details\\\\CardDetails.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: card.cardID\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\a.perevezenseva\\\\Documents\\\\Projects\\\\transactions-cards\\\\components\\\\card\\\\card-details\\\\CardDetails.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: card.cardAccount\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                className: (_CardDetails_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\a.perevezenseva\\\\Documents\\\\Projects\\\\transactions-cards\\\\components\\\\card\\\\card-details\\\\CardDetails.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: card.maskedCardNumber\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\a.perevezenseva\\\\Documents\\\\Projects\\\\transactions-cards\\\\components\\\\card\\\\card-details\\\\CardDetails.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: card.currency\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\a.perevezenseva\\\\Documents\\\\Projects\\\\transactions-cards\\\\components\\\\card\\\\card-details\\\\CardDetails.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: card.expireDate\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\a.perevezenseva\\\\Documents\\\\Projects\\\\transactions-cards\\\\components\\\\card\\\\card-details\\\\CardDetails.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: card.balance\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\a.perevezenseva\\\\Documents\\\\Projects\\\\transactions-cards\\\\components\\\\card\\\\card-details\\\\CardDetails.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: card.status\n            })\n        ]\n    }, card.cardID));\n};\n_s(CardDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CardDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardDetails);\nvar _c;\n$RefreshReg$(_c, \"CardDetails\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQvY2FyZC1kZXRhaWxzL0NhcmREZXRhaWxzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFFTDs7O0FBRTlDLEdBQUssQ0FBQ0UsV0FBVyxHQUFHLFFBQVEsQ0FBUEMsS0FBc0IsRUFBSyxDQUFDOztJQUMvQyxHQUFLLENBQUdDLElBQUksR0FBS0QsS0FBSyxDQUFkQyxJQUFJO0lBQ1osR0FBSyxDQUFDQyxNQUFNLEdBQUdMLGtFQUFTO0lBQ3hCLEdBQUssQ0FBR00sR0FBRyxHQUFLRCxNQUFNLENBQUNFLEtBQUssQ0FBcEJELEdBQUc7SUFDWCxNQUFNLHVFQUNIRSxDQUFHO1FBQUNDLFNBQVMsRUFBRVIsc0VBQVc7Ozs7Ozs7O2lGQUN4QlMsQ0FBSTs7Ozs7OzswQkFBRU4sSUFBSSxDQUFDTyxNQUFNOztpRkFDakJELENBQUk7Ozs7Ozs7MEJBQUVOLElBQUksQ0FBQ1EsV0FBVzs7aUZBQ3RCRixDQUFJO2dCQUFDRCxTQUFTLEVBQUVSLHNFQUFXOzs7Ozs7OzBCQUFHRyxJQUFJLENBQUNTLGdCQUFnQjs7aUZBQ25ESCxDQUFJOzs7Ozs7OzBCQUFFTixJQUFJLENBQUNVLFFBQVE7O2lGQUNuQkosQ0FBSTs7Ozs7OzswQkFBRU4sSUFBSSxDQUFDVyxVQUFVOztpRkFDckJMLENBQUk7Ozs7Ozs7MEJBQUVOLElBQUksQ0FBQ1ksT0FBTzs7aUZBQ2xCTixDQUFJOzs7Ozs7OzBCQUFFTixJQUFJLENBQUNhLE1BQU07OztPQVBjYixJQUFJLENBQUNPLE1BQU07QUFVakQsQ0FBQztHQWZLVCxXQUFXOztRQUVBRiw4REFBUzs7O0tBRnBCRSxXQUFXO0FBaUJqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZC9jYXJkLWRldGFpbHMvQ2FyZERldGFpbHMudHN4PzU2MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XHJcbmltcG9ydCB7IElDYXJkIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9jYXJkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2FyZERldGFpbHMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IENhcmREZXRhaWxzID0gKHByb3BzOiB7IGNhcmQ6IElDYXJkIH0pID0+IHtcclxuICBjb25zdCB7IGNhcmQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0ga2V5PXtjYXJkLmNhcmRJRH0+XHJcbiAgICAgIDxzcGFuPntjYXJkLmNhcmRJRH08L3NwYW4+XHJcbiAgICAgIDxzcGFuPntjYXJkLmNhcmRBY2NvdW50fTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+e2NhcmQubWFza2VkQ2FyZE51bWJlcn08L3NwYW4+XHJcbiAgICAgIDxzcGFuPntjYXJkLmN1cnJlbmN5fTwvc3Bhbj5cclxuICAgICAgPHNwYW4+e2NhcmQuZXhwaXJlRGF0ZX08L3NwYW4+XHJcbiAgICAgIDxzcGFuPntjYXJkLmJhbGFuY2V9PC9zcGFuPlxyXG4gICAgICA8c3Bhbj57Y2FyZC5zdGF0dXN9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmREZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwic3R5bGVzIiwiQ2FyZERldGFpbHMiLCJwcm9wcyIsImNhcmQiLCJyb3V0ZXIiLCJwaWQiLCJxdWVyeSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJjYXJkSUQiLCJjYXJkQWNjb3VudCIsIm1hc2tlZENhcmROdW1iZXIiLCJjdXJyZW5jeSIsImV4cGlyZURhdGUiLCJiYWxhbmNlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/card/card-details/CardDetails.tsx\n");

/***/ })

});