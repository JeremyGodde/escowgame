"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/credits/credits.component.js":
/*!*************************************************!*\
  !*** ./components/credits/credits.component.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Credits; }
/* harmony export */ });
/* harmony import */ var C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _credits_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./credits.module.css */ "./components/credits/credits.module.css");
/* harmony import */ var _credits_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_credits_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\J\xE9r\xE9my\\Documents\\GIT\\escowgame\\components\\credits\\credits.component.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var ID = "generics";

var Credits = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Credits, _React$Component);

  var _super = _createSuper(Credits);

  function Credits(props) {
    var _this;

    (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Credits);

    _this = _super.call(this, props);

    (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "end", function (evt) {
      // on empêche l'événement de clic de se propager aux autres éléments de la fenêtre
      evt.stopPropagation();
      evt.preventDefault(); // on défait le lien entre l'événement de clic et la fonction

      window.removeEventListener("click", _this.end); // on supprime le timer du scrolling

      clearInterval(_this.timer); // on change de lieu (retour à l'écran d'accueil)

      _this.props.moveToPlace(0);
    });

    (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "scroll", function () {
      if (_this.state.y > _this.genericsElement.offsetHeight + 10) {
        // 10px après la fin
        _this.end();
      } else {
        _this.setState({
          y: _this.state.y + 0.75 // chaque image est décalée de 0.75px vers le haut

        });
      }
    });

    (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "componentDidMount", function () {
      _this.genericsElement = document.getElementById(ID);
      window.addEventListener("click", _this.end);
      _this.timer = setInterval(_this.scroll, 10); // 1 image toutes les 10 ms => 100 fps
    });

    (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "render", function () {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
        id: ID,
        className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_8___default().credits),
        style: {
          position: "fixed",
          top: "-".concat(_this.state.y, "px")
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
          "class": (_credits_module_css__WEBPACK_IMPORTED_MODULE_8___default().space),
          children: "Sc\xE9naristes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              children: "Clara"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 25
            }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_8___default().name),
              children: "Grellier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 44
            }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              children: "J\xE9r\xE9my"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 25
            }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_8___default().name),
              children: "Godde"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 45
            }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              children: "Margaux"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 25
            }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_8___default().name),
              children: "Gressel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 46
            }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              children: "Marianne"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 25
            }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_8___default().name),
              children: "Guesneau"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 47
            }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              children: "Olivia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 25
            }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_8___default().name),
              children: "Lasserre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 45
            }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
          children: "Cr\xE9dits images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
          children: "Cr\xE9dits sons"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
          children: "Nous remercions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              children: "Serge"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 25
            }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
              className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_8___default().name),
              children: "Bouchardon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 44
            }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
          children: "EscowGame"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
          children: "SI28 - Automne 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
          src: "/img/credits/logoUTC.jpg",
          alt: "Universit\xE9 de technologie de Compi\xE8gne",
          width: "240px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this));
    });

    _this.state = {
      y: 0
    };
    return _this;
  } // on appellera cette fonction pour mettre fin au générique


  return Credits;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDQ3NmE1Mzk5ZmQwN2I2MWNjMTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUUsRUFBRSxHQUFHLFVBQVg7O0lBRXFCQzs7Ozs7QUFDakIsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxzU0FRYixVQUFDQyxHQUFELEVBQVM7QUFDWDtBQUNBQSxNQUFBQSxHQUFHLENBQUNDLGVBQUo7QUFDQUQsTUFBQUEsR0FBRyxDQUFDRSxjQUFKLEdBSFcsQ0FJWDs7QUFDQUMsTUFBQUEsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixPQUEzQixFQUFtQyxNQUFLQyxHQUF4QyxFQUxXLENBTVg7O0FBQ0FDLE1BQUFBLGFBQWEsQ0FBQyxNQUFLQyxLQUFOLENBQWIsQ0FQVyxDQVFYOztBQUNBLFlBQUtSLEtBQUwsQ0FBV1MsV0FBWCxDQUF1QixDQUF2QjtBQUNILEtBbEJrQjs7QUFBQSx5U0FxQlYsWUFBTTtBQUNYLFVBQUksTUFBS0MsS0FBTCxDQUFXQyxDQUFYLEdBQWUsTUFBS0MsZUFBTCxDQUFxQkMsWUFBckIsR0FBb0MsRUFBdkQsRUFBMkQ7QUFBRTtBQUN6RCxjQUFLUCxHQUFMO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsY0FBS1EsUUFBTCxDQUFjO0FBQ1ZILFVBQUFBLENBQUMsRUFBRSxNQUFLRCxLQUFMLENBQVdDLENBQVgsR0FBZSxJQURSLENBQ2E7O0FBRGIsU0FBZDtBQUdIO0FBQ0osS0E3QmtCOztBQUFBLG9UQWdDQyxZQUFNO0FBQ3RCLFlBQUtDLGVBQUwsR0FBdUJHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QmxCLEVBQXhCLENBQXZCO0FBQ0FNLE1BQUFBLE1BQU0sQ0FBQ2EsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBZ0MsTUFBS1gsR0FBckM7QUFDQSxZQUFLRSxLQUFMLEdBQWFVLFdBQVcsQ0FBQyxNQUFLQyxNQUFOLEVBQWEsRUFBYixDQUF4QixDQUhzQixDQUdtQjtBQUM1QyxLQXBDa0I7O0FBQUEseVNBc0NWLFlBQU07QUFDWCwwQkFDSTtBQUFTLFVBQUUsRUFBRXJCLEVBQWI7QUFBaUIsaUJBQVMsRUFBRUQsb0VBQTVCO0FBQTJDLGFBQUssRUFBRTtBQUFDd0IsVUFBQUEsUUFBUSxFQUFFLE9BQVg7QUFBb0JDLFVBQUFBLEdBQUcsYUFBTSxNQUFLWixLQUFMLENBQVdDLENBQWpCO0FBQXZCLFNBQWxEO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBT2Qsa0VBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0pBREosZUFFSTtBQUFBLGtDQUNJO0FBQUEsb0NBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUtBQUosb0JBQXVCO0FBQU0sdUJBQVMsRUFBRUEsaUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1LQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUtBREosZUFFSTtBQUFBLG9DQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1LQUFKLG9CQUF3QjtBQUFNLHVCQUFTLEVBQUVBLGlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlLQUZKLGVBR0k7QUFBQSxvQ0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtS0FBSixvQkFBeUI7QUFBTSx1QkFBUyxFQUFFQSxpRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpS0FISixlQUlJO0FBQUEsb0NBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUtBQUosb0JBQTBCO0FBQU0sdUJBQVMsRUFBRUEsaUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1LQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUtBSkosZUFLSTtBQUFBLG9DQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1LQUFKLG9CQUF3QjtBQUFNLHVCQUFTLEVBQUVBLGlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlLQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrSkFGSixlQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtKQVRKLGVBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0pBVkosZUFXSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrSkFYSixlQVlJO0FBQUEsaUNBQ0k7QUFBQSxvQ0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtS0FBSixvQkFBdUI7QUFBTSx1QkFBUyxFQUFFQSxpRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0pBWkosZUFlSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrSkFmSixlQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrSkFoQkosZUFpQkk7QUFBSyxhQUFHLEVBQUMsMEJBQVQ7QUFBb0MsYUFBRyxFQUFDLDhDQUF4QztBQUFpRixlQUFLLEVBQUM7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrSkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZKQURKO0FBcUJILEtBNURrQjs7QUFFZixVQUFLYSxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsQ0FBQyxFQUFFO0FBRE0sS0FBYjtBQUZlO0FBS2xCLElBRUQ7Ozs7RUFSaUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY3JlZGl0cy9jcmVkaXRzLmNvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2NyZWRpdHMubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IElEID0gXCJnZW5lcmljc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVkaXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgeTogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBvbiBhcHBlbGxlcmEgY2V0dGUgZm9uY3Rpb24gcG91ciBtZXR0cmUgZmluIGF1IGfDqW7DqXJpcXVlXHJcbiAgICBlbmQgPSAoZXZ0KSA9PiB7XHJcbiAgICAgICAgLy8gb24gZW1ww6pjaGUgbCfDqXbDqW5lbWVudCBkZSBjbGljIGRlIHNlIHByb3BhZ2VyIGF1eCBhdXRyZXMgw6lsw6ltZW50cyBkZSBsYSBmZW7DqnRyZVxyXG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy8gb24gZMOpZmFpdCBsZSBsaWVuIGVudHJlIGwnw6l2w6luZW1lbnQgZGUgY2xpYyBldCBsYSBmb25jdGlvblxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmVuZClcclxuICAgICAgICAvLyBvbiBzdXBwcmltZSBsZSB0aW1lciBkdSBzY3JvbGxpbmdcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXHJcbiAgICAgICAgLy8gb24gY2hhbmdlIGRlIGxpZXUgKHJldG91ciDDoCBsJ8OpY3JhbiBkJ2FjY3VlaWwpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5tb3ZlVG9QbGFjZSgwKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uIGFwcGVsbGVyYSBjZXR0ZSBmb25jdGlvbiBhdmVjIHVuIHRpbWVyIHBvdXIgZG9ubmVyIGwnZWZmZXQgc2Nyb2xsaW5nIGQndW4gZ8OpbsOpcmlxdWVcclxuICAgIHNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS55ID4gdGhpcy5nZW5lcmljc0VsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgMTApIHsgLy8gMTBweCBhcHLDqHMgbGEgZmluXHJcbiAgICAgICAgICAgIHRoaXMuZW5kKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuc3RhdGUueSArIDAuNzUgLy8gY2hhcXVlIGltYWdlIGVzdCBkw6ljYWzDqWUgZGUgMC43NXB4IHZlcnMgbGUgaGF1dFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjZXR0ZSBmb25jdGlvbiBlc3QgbGFuY8OpZSBhdXRvbWF0aXF1ZW1lbnQgbG9yc3F1ZSBsZSBjb21wb3NlbnQgYSBmaW5pIGRlIGNoYXJnZXJcclxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2VuZXJpY3NFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoSUQpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuZW5kKVxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnNjcm9sbCwxMCkgLy8gMSBpbWFnZSB0b3V0ZXMgbGVzIDEwIG1zID0+IDEwMCBmcHNcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gaWQ9e0lEfSBjbGFzc05hbWU9e3N0eWxlLmNyZWRpdHN9IHN0eWxlPXt7cG9zaXRpb246IFwiZml4ZWRcIiwgdG9wOiBgLSR7dGhpcy5zdGF0ZS55fXB4YH19PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPXtzdHlsZS5zcGFjZX0+U2PDqW5hcmlzdGVzPC9oMj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4+Q2xhcmE8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT17c3R5bGUubmFtZX0+R3JlbGxpZXI8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4+SsOpcsOpbXk8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT17c3R5bGUubmFtZX0+R29kZGU8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4+TWFyZ2F1eDwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5uYW1lfT5HcmVzc2VsPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuPk1hcmlhbm5lPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLm5hbWV9Pkd1ZXNuZWF1PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuPk9saXZpYTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5uYW1lfT5MYXNzZXJyZTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxoMj5DcsOpZGl0cyBpbWFnZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgyPkNyw6lkaXRzIHNvbnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgyPk5vdXMgcmVtZXJjaW9uczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuPlNlcmdlPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLm5hbWV9PkJvdWNoYXJkb248L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8aDE+RXNjb3dHYW1lPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMz5TSTI4IC0gQXV0b21uZSAyMDIxPC9oMz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9jcmVkaXRzL2xvZ29VVEMuanBnXCIgYWx0PVwiVW5pdmVyc2l0w6kgZGUgdGVjaG5vbG9naWUgZGUgQ29tcGnDqGduZVwiIHdpZHRoPVwiMjQwcHhcIi8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZSIsIklEIiwiQ3JlZGl0cyIsInByb3BzIiwiZXZ0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZW5kIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwibW92ZVRvUGxhY2UiLCJzdGF0ZSIsInkiLCJnZW5lcmljc0VsZW1lbnQiLCJvZmZzZXRIZWlnaHQiLCJzZXRTdGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0SW50ZXJ2YWwiLCJzY3JvbGwiLCJjcmVkaXRzIiwicG9zaXRpb24iLCJ0b3AiLCJzcGFjZSIsIm5hbWUiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9