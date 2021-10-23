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
          className: "toggler"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmQ0NTk0NzM4MTc4MGQyODAyZGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztJQU9xQkU7Ozs7O0FBR2pCLGtCQUFZQyxLQUFaLEVBQWdDO0FBQUE7O0FBQUE7O0FBQzVCLDhCQUFNQSxLQUFOOztBQUQ0QixzVEFGTSxJQUVOOztBQUFBLHdTQUl4QixZQUFNO0FBQ1YsWUFBS0MsbUJBQUwsR0FBMkIsQ0FBM0I7QUFDQUMsTUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFrQyxNQUFLQyxLQUF2Qzs7QUFDQSxZQUFLQyxRQUFMLENBQWMsRUFBZDtBQUNILEtBUitCOztBQUFBLHdTQVV4QixZQUFNO0FBQ1YsVUFBRyxNQUFLSixtQkFBTCxLQUE2QkssU0FBaEMsRUFBMkM7QUFDdkM7QUFDSDs7QUFFRCxZQUFLTCxtQkFBTDs7QUFDQSxVQUFJLE1BQUtBLG1CQUFMLElBQTRCLE1BQUtELEtBQUwsQ0FBV08sS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLE1BQXhELEVBQWdFO0FBQzVELGNBQUtSLG1CQUFMLEdBQTJCSyxTQUEzQjs7QUFDQSxZQUFJLE1BQUtOLEtBQUwsQ0FBV08sS0FBWCxXQUF3QkQsU0FBNUIsRUFBdUM7QUFDbkMsZ0JBQUtOLEtBQUwsQ0FBV08sS0FBWDs7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsWUFBS0YsUUFBTCxDQUFjLEVBQWQ7QUFDSCxLQXhCK0I7O0FBQUEsb1RBMEJaLFlBQU07QUFDdEIsVUFBRyxNQUFLTCxLQUFMLENBQVdPLEtBQVgsQ0FBaUJHLEtBQWpCLEtBQTJCSixTQUE5QixFQUF5QztBQUNyQyxjQUFLSyxLQUFMO0FBQ0gsT0FGRCxNQUVPO0FBQ0hDLFFBQUFBLFVBQVUsQ0FBQyxNQUFLRCxLQUFOLEVBQVksTUFBS1gsS0FBTCxDQUFXTyxLQUFYLENBQWlCRyxLQUFqQixHQUF5QixJQUFyQyxDQUFWO0FBQ0g7QUFDSixLQWhDK0I7O0FBQUEseVNBa0N2QixZQUFNO0FBQ1gsYUFDSSxNQUFLVCxtQkFBTCxLQUE2QixJQUE3QixpQkFDQTtBQUFLLGlCQUFTLEVBQUVILGtFQUFoQjtBQUFBLGdDQUNJO0FBQUEsb0JBRVEsTUFBS0UsS0FBTCxDQUFXTyxLQUFYLENBQWlCQyxNQUFqQixDQUF3QixNQUFLUCxtQkFBN0IsRUFBa0RhO0FBRjFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0pBREosZUFNSTtBQUFNLG1CQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwrSkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkpBRko7QUFXSCxLQTlDK0I7O0FBQUE7QUFFL0I7OztFQUwrQmpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vZGlhbG9nLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBEaWFsb2dTdHJ1Y3QgZnJvbSAnLi4vLi4vc3RydWN0dXJlcy9kaWFsb2cvZGlhbG9nLnN0cnVjdHVyZSdcclxuXHJcbmludGVyZmFjZSBEaWFsb2dQcm9wcyB7XHJcbiAgICByZWFkb25seSB2YWx1ZTogRGlhbG9nU3RydWN0XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RGlhbG9nUHJvcHM+IHtcclxuICAgIHByaXZhdGUgY3VycmVudF9pbmRleF9mcmFtZTogbnVtYmVyID0gbnVsbFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBEaWFsb2dQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudF9pbmRleF9mcmFtZSA9IDBcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe30pXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50X2luZGV4X2ZyYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRfaW5kZXhfZnJhbWUgKytcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50X2luZGV4X2ZyYW1lID49IHRoaXMucHJvcHMudmFsdWUuZnJhbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfaW5kZXhfZnJhbWUgPSB1bmRlZmluZWRcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUuZG8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZS5kbygpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMudmFsdWUudGltZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc3RhcnQsdGhpcy5wcm9wcy52YWx1ZS50aW1lciAqIDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfaW5kZXhfZnJhbWUgIT09IG51bGwgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmRpYWxvZ30+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWUuZnJhbWVzW3RoaXMuY3VycmVudF9pbmRleF9mcmFtZV0udGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvZ2dsZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZSIsIkRpYWxvZyIsInByb3BzIiwiY3VycmVudF9pbmRleF9mcmFtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrIiwic2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsImZyYW1lcyIsImxlbmd0aCIsInRpbWVyIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwiZGlhbG9nIiwidGV4dCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=