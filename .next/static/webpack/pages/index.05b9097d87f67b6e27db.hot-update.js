"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/dialog/dialog.component.tsx":
/*!************************************************!*\
  !*** ./components/dialog/dialog.component.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Dialog; }
/* harmony export */ });
/* harmony import */ var C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dialog_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog.module.css */ "./components/dialog/dialog.module.css");
/* harmony import */ var _dialog_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dialog_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\J\xE9r\xE9my\\Documents\\GIT\\escowgame\\components\\dialog\\dialog.component.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Dialog = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Dialog, _React$Component);

  var _super = _createSuper(Dialog);

  function Dialog(props) {
    var _this;

    (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Dialog);

    _this = _super.call(this, props);

    (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "current_index_frame", null);

    (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "start", function () {
      _this.current_index_frame = 0;
      document.addEventListener("click", _this.click);

      _this.setState({});
    });

    (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "click", function () {
      if (_this.current_index_frame === undefined) {
        return;
      }

      _this.current_index_frame++;

      if (_this.current_index_frame >= _this.props.value.frames.length) {
        _this.current_index_frame = undefined;

        if (_this.props.value["do"] !== undefined) {
          _this.props.value["do"]();

          return;
        }
      }

      _this.setState({});
    });

    (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "componentDidMount", function () {
      if (_this.props.value.timer === undefined) {
        _this.start();
      } else {
        setTimeout(_this.start, _this.props.value.timer * 1000);
      }
    });

    (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "render", function () {
      return _this.current_index_frame !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: (_dialog_module_css__WEBPACK_IMPORTED_MODULE_8___default().dialog),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
          children: _this.props.value.frames[_this.current_index_frame].text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
          className: (_dialog_module_css__WEBPACK_IMPORTED_MODULE_8___default().toggler)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this));
    });

    return _this;
  }

  return Dialog;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDViOTA5N2Q4N2Y2N2I2ZTI3ZGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztJQU9xQkU7Ozs7O0FBR2pCLGtCQUFZQyxLQUFaLEVBQWdDO0FBQUE7O0FBQUE7O0FBQzVCLDhCQUFNQSxLQUFOOztBQUQ0QixzVEFGTSxJQUVOOztBQUFBLHdTQUl4QixZQUFNO0FBQ1YsWUFBS0MsbUJBQUwsR0FBMkIsQ0FBM0I7QUFDQUMsTUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFrQyxNQUFLQyxLQUF2Qzs7QUFDQSxZQUFLQyxRQUFMLENBQWMsRUFBZDtBQUNILEtBUitCOztBQUFBLHdTQVV4QixZQUFNO0FBQ1YsVUFBRyxNQUFLSixtQkFBTCxLQUE2QkssU0FBaEMsRUFBMkM7QUFDdkM7QUFDSDs7QUFFRCxZQUFLTCxtQkFBTDs7QUFDQSxVQUFJLE1BQUtBLG1CQUFMLElBQTRCLE1BQUtELEtBQUwsQ0FBV08sS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLE1BQXhELEVBQWdFO0FBQzVELGNBQUtSLG1CQUFMLEdBQTJCSyxTQUEzQjs7QUFDQSxZQUFJLE1BQUtOLEtBQUwsQ0FBV08sS0FBWCxXQUF3QkQsU0FBNUIsRUFBdUM7QUFDbkMsZ0JBQUtOLEtBQUwsQ0FBV08sS0FBWDs7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsWUFBS0YsUUFBTCxDQUFjLEVBQWQ7QUFDSCxLQXhCK0I7O0FBQUEsb1RBMEJaLFlBQU07QUFDdEIsVUFBRyxNQUFLTCxLQUFMLENBQVdPLEtBQVgsQ0FBaUJHLEtBQWpCLEtBQTJCSixTQUE5QixFQUF5QztBQUNyQyxjQUFLSyxLQUFMO0FBQ0gsT0FGRCxNQUVPO0FBQ0hDLFFBQUFBLFVBQVUsQ0FBQyxNQUFLRCxLQUFOLEVBQVksTUFBS1gsS0FBTCxDQUFXTyxLQUFYLENBQWlCRyxLQUFqQixHQUF5QixJQUFyQyxDQUFWO0FBQ0g7QUFDSixLQWhDK0I7O0FBQUEseVNBa0N2QixZQUFNO0FBQ1gsYUFDSSxNQUFLVCxtQkFBTCxLQUE2QixJQUE3QixpQkFDQTtBQUFLLGlCQUFTLEVBQUVILGtFQUFoQjtBQUFBLGdDQUNJO0FBQUEsb0JBRVEsTUFBS0UsS0FBTCxDQUFXTyxLQUFYLENBQWlCQyxNQUFqQixDQUF3QixNQUFLUCxtQkFBN0IsRUFBa0RhO0FBRjFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0pBREosZUFNSTtBQUFNLG1CQUFTLEVBQUVoQixtRUFBYWlCO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0pBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZKQUZKO0FBV0gsS0E5QytCOztBQUFBO0FBRS9COzs7RUFMK0JsQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL2RpYWxvZy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgRGlhbG9nU3RydWN0IGZyb20gJy4uLy4uL3N0cnVjdHVyZXMvZGlhbG9nL2RpYWxvZy5zdHJ1Y3R1cmUnXHJcblxyXG5pbnRlcmZhY2UgRGlhbG9nUHJvcHMge1xyXG4gICAgcmVhZG9ubHkgdmFsdWU6IERpYWxvZ1N0cnVjdFxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PERpYWxvZ1Byb3BzPiB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRfaW5kZXhfZnJhbWU6IG51bWJlciA9IG51bGxcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogRGlhbG9nUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRfaW5kZXhfZnJhbWUgPSAwXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5jbGljaylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudF9pbmRleF9mcmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50X2luZGV4X2ZyYW1lICsrXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudF9pbmRleF9mcmFtZSA+PSB0aGlzLnByb3BzLnZhbHVlLmZyYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50X2luZGV4X2ZyYW1lID0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlLmRvICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWUuZG8oKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnZhbHVlLnRpbWVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnN0YXJ0LHRoaXMucHJvcHMudmFsdWUudGltZXIgKiAxMDAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50X2luZGV4X2ZyYW1lICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5kaWFsb2d9PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlLmZyYW1lc1t0aGlzLmN1cnJlbnRfaW5kZXhfZnJhbWVdLnRleHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLnRvZ2dsZXJ9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlIiwiRGlhbG9nIiwicHJvcHMiLCJjdXJyZW50X2luZGV4X2ZyYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2siLCJzZXRTdGF0ZSIsInVuZGVmaW5lZCIsInZhbHVlIiwiZnJhbWVzIiwibGVuZ3RoIiwidGltZXIiLCJzdGFydCIsInNldFRpbWVvdXQiLCJkaWFsb2ciLCJ0ZXh0IiwidG9nZ2xlciIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=