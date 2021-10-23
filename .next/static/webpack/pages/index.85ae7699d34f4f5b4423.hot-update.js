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

    (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__.default)((0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this), "click", function (evt) {
      if (_this.current_index_frame === undefined) {
        return;
      }

      evt.stopPropagation();
      evt.preventDefault();
      _this.current_index_frame++;

      if (_this.current_index_frame >= _this.props.value.frames.length) {
        _this.current_index_frame = undefined;
        window.removeEventListener("click", _this.click);

        if (_this.props.value.afterDo !== undefined) {
          _this.props.value.afterDo();

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
        children: [_this.props.value.frames[_this.current_index_frame].img !== undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
          className: (_dialog_module_css__WEBPACK_IMPORTED_MODULE_8___default().picture),
          src: _this.props.value.frames[_this.current_index_frame].img
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: (_dialog_module_css__WEBPACK_IMPORTED_MODULE_8___default().text_zone),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
            children: _this.props.value.frames[_this.current_index_frame].text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: (_dialog_module_css__WEBPACK_IMPORTED_MODULE_8___default().toggler)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, (0,C_Users_J_r_my_Documents_GIT_escowgame_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODVhZTc2OTlkMzRmNGY1YjQ0MjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztJQU9xQkU7Ozs7O0FBR2pCLGtCQUFZQyxLQUFaLEVBQWdDO0FBQUE7O0FBQUE7O0FBQzVCLDhCQUFNQSxLQUFOOztBQUQ0QixzVEFGTSxJQUVOOztBQUFBLHdTQUl4QixZQUFNO0FBQ1YsWUFBS0MsbUJBQUwsR0FBMkIsQ0FBM0I7QUFDQUMsTUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFrQyxNQUFLQyxLQUF2Qzs7QUFDQSxZQUFLQyxRQUFMLENBQWMsRUFBZDtBQUNILEtBUitCOztBQUFBLHdTQVV4QixVQUFDQyxHQUFELEVBQXFCO0FBQ3pCLFVBQUcsTUFBS0wsbUJBQUwsS0FBNkJNLFNBQWhDLEVBQTJDO0FBQ3ZDO0FBQ0g7O0FBRURELE1BQUFBLEdBQUcsQ0FBQ0UsZUFBSjtBQUNBRixNQUFBQSxHQUFHLENBQUNHLGNBQUo7QUFFQSxZQUFLUixtQkFBTDs7QUFDQSxVQUFJLE1BQUtBLG1CQUFMLElBQTRCLE1BQUtELEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLE1BQXhELEVBQWdFO0FBQzVELGNBQUtYLG1CQUFMLEdBQTJCTSxTQUEzQjtBQUNBTSxRQUFBQSxNQUFNLENBQUNDLG1CQUFQLENBQTJCLE9BQTNCLEVBQW1DLE1BQUtWLEtBQXhDOztBQUNBLFlBQUksTUFBS0osS0FBTCxDQUFXVSxLQUFYLENBQWlCSyxPQUFqQixLQUE2QlIsU0FBakMsRUFBNEM7QUFDeEMsZ0JBQUtQLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkssT0FBakI7O0FBQ0E7QUFDSDtBQUNKOztBQUNELFlBQUtWLFFBQUwsQ0FBYyxFQUFkO0FBQ0gsS0E1QitCOztBQUFBLG9UQThCWixZQUFNO0FBQ3RCLFVBQUcsTUFBS0wsS0FBTCxDQUFXVSxLQUFYLENBQWlCTSxLQUFqQixLQUEyQlQsU0FBOUIsRUFBeUM7QUFDckMsY0FBS1UsS0FBTDtBQUNILE9BRkQsTUFFTztBQUNIQyxRQUFBQSxVQUFVLENBQUMsTUFBS0QsS0FBTixFQUFZLE1BQUtqQixLQUFMLENBQVdVLEtBQVgsQ0FBaUJNLEtBQWpCLEdBQXlCLElBQXJDLENBQVY7QUFDSDtBQUNKLEtBcEMrQjs7QUFBQSx5U0FzQ3ZCLFlBQU07QUFDWCxhQUNJLE1BQUtmLG1CQUFMLEtBQTZCLElBQTdCLGlCQUNBO0FBQUssaUJBQVMsRUFBRUgsa0VBQWhCO0FBQUEsbUJBRVEsTUFBS0UsS0FBTCxDQUFXVSxLQUFYLENBQWlCQyxNQUFqQixDQUF3QixNQUFLVixtQkFBN0IsRUFBa0RtQixHQUFsRCxLQUEwRGIsU0FBMUQsaUJBQ0E7QUFDSSxtQkFBUyxFQUFFVCxtRUFEZjtBQUVJLGFBQUcsRUFBRSxNQUFLRSxLQUFMLENBQVdVLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCLE1BQUtWLG1CQUE3QixFQUFrRG1CO0FBRjNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0pBSFIsZUFRSTtBQUFLLG1CQUFTLEVBQUV0QixxRUFBaEI7QUFBQSxrQ0FDSTtBQUFBLHNCQUVRLE1BQUtFLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0IsTUFBS1YsbUJBQTdCLEVBQWtEc0I7QUFGMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpS0FESixlQU1JO0FBQU0scUJBQVMsRUFBRXpCLG1FQUFhMEI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpS0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0pBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZKQUZKO0FBb0JILEtBM0QrQjs7QUFBQTtBQUUvQjs7O0VBTCtCM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9kaWFsb2cubW9kdWxlLmNzcydcclxuaW1wb3J0IERpYWxvZ1N0cnVjdCBmcm9tICcuLi8uLi9zdHJ1Y3R1cmVzL2RpYWxvZy9kaWFsb2cuc3RydWN0dXJlJ1xyXG5cclxuaW50ZXJmYWNlIERpYWxvZ1Byb3BzIHtcclxuICAgIHJlYWRvbmx5IHZhbHVlOiBEaWFsb2dTdHJ1Y3RcclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxEaWFsb2dQcm9wcz4ge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50X2luZGV4X2ZyYW1lOiBudW1iZXIgPSBudWxsXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IERpYWxvZ1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50X2luZGV4X2ZyYW1lID0gMFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2spXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSlcclxuICAgIH1cclxuXHJcbiAgICBjbGljayA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRfaW5kZXhfZnJhbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudF9pbmRleF9mcmFtZSArK1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRfaW5kZXhfZnJhbWUgPj0gdGhpcy5wcm9wcy52YWx1ZS5mcmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9pbmRleF9mcmFtZSA9IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5jbGljaylcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUuYWZ0ZXJEbyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlLmFmdGVyRG8oKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnZhbHVlLnRpbWVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnN0YXJ0LHRoaXMucHJvcHMudmFsdWUudGltZXIgKiAxMDAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50X2luZGV4X2ZyYW1lICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5kaWFsb2d9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWUuZnJhbWVzW3RoaXMuY3VycmVudF9pbmRleF9mcmFtZV0uaW1nICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUucGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLnZhbHVlLmZyYW1lc1t0aGlzLmN1cnJlbnRfaW5kZXhfZnJhbWVdLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRleHRfem9uZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudmFsdWUuZnJhbWVzW3RoaXMuY3VycmVudF9pbmRleF9mcmFtZV0udGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUudG9nZ2xlcn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZSIsIkRpYWxvZyIsInByb3BzIiwiY3VycmVudF9pbmRleF9mcmFtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrIiwic2V0U3RhdGUiLCJldnQiLCJ1bmRlZmluZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiZnJhbWVzIiwibGVuZ3RoIiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFmdGVyRG8iLCJ0aW1lciIsInN0YXJ0Iiwic2V0VGltZW91dCIsImRpYWxvZyIsImltZyIsInBpY3R1cmUiLCJ0ZXh0X3pvbmUiLCJ0ZXh0IiwidG9nZ2xlciIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=