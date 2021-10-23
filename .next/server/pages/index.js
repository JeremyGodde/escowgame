(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/credits/credits.component.js":
/*!*************************************************!*\
  !*** ./components/credits/credits.component.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Credits)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _credits_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credits.module.css */ "./components/credits/credits.module.css");
/* harmony import */ var _credits_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_credits_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\J\xE9r\xE9my\\Documents\\GIT\\escowgame\\components\\credits\\credits.component.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ID = "generics";
class Credits extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "end", evt => {
      // on empêche l'événement de clic de se propager aux autres éléments de la fenêtre
      evt.stopPropagation();
      evt.preventDefault(); // on défait le lien entre l'événement de clic et la fonction

      window.removeEventListener("click", this.end); // on supprime le timer du scrolling

      clearInterval(this.timer); // on change de lieu (retour à l'écran d'accueil)

      this.props.moveToPlace(0);
    });

    _defineProperty(this, "scroll", () => {
      if (this.state.y > this.genericsElement.offsetHeight + 10) {
        // 10px après la fin
        this.end();
      } else {
        this.setState({
          y: this.state.y + 0.75 // chaque image est décalée de 0.75px vers le haut

        });
      }
    });

    _defineProperty(this, "componentDidMount", () => {
      this.genericsElement = document.getElementById(ID);
      window.addEventListener("click", this.end);
      this.timer = setInterval(this.scroll, 10); // 1 image toutes les 10 ms => 100 fps
    });

    _defineProperty(this, "render", () => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
        id: ID,
        className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_2___default().credits),
        style: {
          position: "fixed",
          top: `-${this.state.y}px`
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          class: (_credits_module_css__WEBPACK_IMPORTED_MODULE_2___default().space),
          children: "Sc\xE9naristes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: "Clara"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 25
            }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
              children: "Grellier"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 44
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: "J\xE9r\xE9my"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 25
            }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
              children: "Godde"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: "Margaux"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 25
            }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
              children: "Gressel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 46
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: "Marianne"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 25
            }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
              children: "Guesneau"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 47
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: "Olivia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 25
            }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
              children: "Lasserre"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          children: "Cr\xE9dits images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          children: "Cr\xE9dits sons"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          children: "Nous remercions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: "Serge"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 25
            }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: (_credits_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
              children: "Bouchardon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 44
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
          children: "EscowGame"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          children: "SI28 - Automne 2021"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: "/img/credits/logoUTC.jpg",
          alt: "Universit\xE9 de technologie de Compi\xE8gne",
          width: "240px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, this);
    });

    this.state = {
      y: 0
    };
  } // on appellera cette fonction pour mettre fin au générique


}

/***/ }),

/***/ "./components/dialog/dialog.component.tsx":
/*!************************************************!*\
  !*** ./components/dialog/dialog.component.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dialog_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.module.css */ "./components/dialog/dialog.module.css");
/* harmony import */ var _dialog_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dialog_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\J\xE9r\xE9my\\Documents\\GIT\\escowgame\\components\\dialog\\dialog.component.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Dialog extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "current_index_frame", null);

    _defineProperty(this, "start", () => {
      this.current_index_frame = 0;
      document.addEventListener("click", this.click);
      this.setState({});
    });

    _defineProperty(this, "click", evt => {
      if (this.current_index_frame === undefined) {
        return;
      }

      evt.stopPropagation();
      evt.preventDefault();
      this.current_index_frame++;

      if (this.current_index_frame >= this.props.value.frames.length) {
        this.current_index_frame = undefined;
        window.removeEventListener("click", this.click);

        if (this.props.value.afterDo !== undefined) {
          this.props.value.afterDo();
          return;
        }
      }

      this.setState({});
    });

    _defineProperty(this, "componentDidMount", () => {
      if (this.props.value.timer === undefined) {
        this.start();
      } else {
        setTimeout(this.start, this.props.value.timer * 1000);
      }
    });

    _defineProperty(this, "render", () => {
      return this.current_index_frame !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_dialog_module_css__WEBPACK_IMPORTED_MODULE_2___default().dialog),
        children: [this.props.value.frames[this.current_index_frame].img !== undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          className: (_dialog_module_css__WEBPACK_IMPORTED_MODULE_2___default().picture),
          src: this.props.value.frames[this.current_index_frame].img
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_dialog_module_css__WEBPACK_IMPORTED_MODULE_2___default().text_zone),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            children: this.props.value.frames[this.current_index_frame].text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: (_dialog_module_css__WEBPACK_IMPORTED_MODULE_2___default().toggler)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }, this);
    });
  }

}

/***/ }),

/***/ "./components/home-screen/home-screen.component.js":
/*!*********************************************************!*\
  !*** ./components/home-screen/home-screen.component.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_screen_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-screen.module.css */ "./components/home-screen/home-screen.module.css");
/* harmony import */ var _home_screen_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_screen_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\J\xE9r\xE9my\\Documents\\GIT\\escowgame\\components\\home-screen\\home-screen.component.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class HomeScreen extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "play", () => {
      this.props.moveToPlace(1);
    });

    _defineProperty(this, "render", () => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
        className: (_home_screen_module_css__WEBPACK_IMPORTED_MODULE_2___default().home),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
          children: "EscowGame"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          children: ["Grellier - Godde - Gressel - Guesneau - Lasserre", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 69
          }, this), "SI28 - Universit\xE9 de technologie de Compi\xE8gne"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: "AVERTISSEMENT : la suite du jeu contient des images susceptibles de choquer la sensibilit\xE9 des plus fragiles. Si vous ne souhaitez pas continuer l\u2019aventure,  ne suivez pas le chien."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          onClick: this.play,
          children: "Jouer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, this);
    });
  }

}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home-screen/home-screen.component */ "./components/home-screen/home-screen.component.js");
/* harmony import */ var _components_credits_credits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/credits/credits.component */ "./components/credits/credits.component.js");
/* harmony import */ var _components_dialog_dialog_component_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dialog/dialog.component.tsx */ "./components/dialog/dialog.component.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\J\xE9r\xE9my\\Documents\\GIT\\escowgame\\pages\\index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Index extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "moveToPlace", id_place => {
      this.setState({
        place: id_place
      });
    });

    _defineProperty(this, "dialog_test", {
      timer: 2,
      afterDo: () => {
        this.moveToPlace(2);
      },
      frames: [{
        img: "/img/chien/chien_face.png",
        text: "Bienvenue dans cet essai de dialogue. Cliquez quelque part pour continuer."
      }, {
        img: "/img/chien/chien_face.png",
        text: "Cela fonctionne-t-il ?"
      }, {
        img: "/img/chien/chien_face.png",
        text: "Bien ! Passons au générique voulez-vous"
      }]
    });

    this.state = {
      place: 0
    };
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("main", {
      children: this.state.place === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_home_screen_home_screen_component__WEBPACK_IMPORTED_MODULE_1__.default, {
        moveToPlace: this.moveToPlace
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }, this) || this.state.place === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_dialog_dialog_component_tsx__WEBPACK_IMPORTED_MODULE_3__.default, {
        value: this.dialog_test
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }, this) || this.state.place === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_credits_credits_component__WEBPACK_IMPORTED_MODULE_2__.default, {
        moveToPlace: this.moveToPlace
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./components/credits/credits.module.css":
/*!***********************************************!*\
  !*** ./components/credits/credits.module.css ***!
  \***********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"credits": "credits_credits__3mKVf",
	"name": "credits_name__177Os",
	"space": "credits_space__33_Zy"
};


/***/ }),

/***/ "./components/dialog/dialog.module.css":
/*!*********************************************!*\
  !*** ./components/dialog/dialog.module.css ***!
  \*********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"dialog": "dialog_dialog__Z9Rtm",
	"picture": "dialog_picture__2Md7o",
	"text_zone": "dialog_text_zone__1-7IH",
	"toggler": "dialog_toggler__23eze",
	"toggle_sign": "dialog_toggle_sign__3ESv_"
};


/***/ }),

/***/ "./components/home-screen/home-screen.module.css":
/*!*******************************************************!*\
  !*** ./components/home-screen/home-screen.module.css ***!
  \*******************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"home": "home-screen_home__1fC2z",
	"title_shadow": "home-screen_title_shadow__3e6h5",
	"button_scale": "home-screen_button_scale__3Zlgo"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0k7QUFBQSxnQkFHUSxLQUFLckMsS0FBTCxDQUFXb0MsS0FBWCxLQUFxQixDQUFyQixpQkFDQSw4REFBQyxrRkFBRDtBQUFZLG1CQUFXLEVBQUUsS0FBS3JDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixJQUlJLEtBQUtDLEtBQUwsQ0FBV29DLEtBQVgsS0FBcUIsQ0FBckIsaUJBQ0EsOERBQUMsNEVBQUQ7QUFBUSxhQUFLLEVBQUUsS0FBS0U7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLElBT0ksS0FBS3RDLEtBQUwsQ0FBV29DLEtBQVgsS0FBcUIsQ0FBckIsaUJBQ0EsOERBQUMsMEVBQUQ7QUFBUyxtQkFBVyxFQUFFLEtBQUtyQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBZ0JIOztBQXJEOEM7Ozs7Ozs7Ozs7QUNMbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzY293Z2FtZV9zaTI4Ly4vY29tcG9uZW50cy9jcmVkaXRzL2NyZWRpdHMuY29tcG9uZW50LmpzIiwid2VicGFjazovL2VzY293Z2FtZV9zaTI4Ly4vY29tcG9uZW50cy9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXNjb3dnYW1lX3NpMjgvLi9jb21wb25lbnRzL2hvbWUtc2NyZWVuL2hvbWUtc2NyZWVuLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9lc2Nvd2dhbWVfc2kyOC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2VzY293Z2FtZV9zaTI4Ly4vY29tcG9uZW50cy9jcmVkaXRzL2NyZWRpdHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9lc2Nvd2dhbWVfc2kyOC8uL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5tb2R1bGUuY3NzIiwid2VicGFjazovL2VzY293Z2FtZV9zaTI4Ly4vY29tcG9uZW50cy9ob21lLXNjcmVlbi9ob21lLXNjcmVlbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2VzY293Z2FtZV9zaTI4L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9lc2Nvd2dhbWVfc2kyOC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vY3JlZGl0cy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgSUQgPSBcImdlbmVyaWNzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWRpdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uIGFwcGVsbGVyYSBjZXR0ZSBmb25jdGlvbiBwb3VyIG1ldHRyZSBmaW4gYXUgZ8OpbsOpcmlxdWVcclxuICAgIGVuZCA9IChldnQpID0+IHtcclxuICAgICAgICAvLyBvbiBlbXDDqmNoZSBsJ8OpdsOpbmVtZW50IGRlIGNsaWMgZGUgc2UgcHJvcGFnZXIgYXV4IGF1dHJlcyDDqWzDqW1lbnRzIGRlIGxhIGZlbsOqdHJlXHJcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAvLyBvbiBkw6lmYWl0IGxlIGxpZW4gZW50cmUgbCfDqXbDqW5lbWVudCBkZSBjbGljIGV0IGxhIGZvbmN0aW9uXHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuZW5kKVxyXG4gICAgICAgIC8vIG9uIHN1cHByaW1lIGxlIHRpbWVyIGR1IHNjcm9sbGluZ1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcclxuICAgICAgICAvLyBvbiBjaGFuZ2UgZGUgbGlldSAocmV0b3VyIMOgIGwnw6ljcmFuIGQnYWNjdWVpbClcclxuICAgICAgICB0aGlzLnByb3BzLm1vdmVUb1BsYWNlKDApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gb24gYXBwZWxsZXJhIGNldHRlIGZvbmN0aW9uIGF2ZWMgdW4gdGltZXIgcG91ciBkb25uZXIgbCdlZmZldCBzY3JvbGxpbmcgZCd1biBnw6luw6lyaXF1ZVxyXG4gICAgc2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnkgPiB0aGlzLmdlbmVyaWNzRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAxMCkgeyAvLyAxMHB4IGFwcsOocyBsYSBmaW5cclxuICAgICAgICAgICAgdGhpcy5lbmQoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgeTogdGhpcy5zdGF0ZS55ICsgMC43NSAvLyBjaGFxdWUgaW1hZ2UgZXN0IGTDqWNhbMOpZSBkZSAwLjc1cHggdmVycyBsZSBoYXV0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNldHRlIGZvbmN0aW9uIGVzdCBsYW5jw6llIGF1dG9tYXRpcXVlbWVudCBsb3JzcXVlIGxlIGNvbXBvc2VudCBhIGZpbmkgZGUgY2hhcmdlclxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZW5lcmljc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChJRClcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5lbmQpXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKHRoaXMuc2Nyb2xsLDEwKSAvLyAxIGltYWdlIHRvdXRlcyBsZXMgMTAgbXMgPT4gMTAwIGZwc1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD17SUR9IGNsYXNzTmFtZT17c3R5bGUuY3JlZGl0c30gc3R5bGU9e3twb3NpdGlvbjogXCJmaXhlZFwiLCB0b3A6IGAtJHt0aGlzLnN0YXRlLnl9cHhgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9e3N0eWxlLnNwYWNlfT5TY8OpbmFyaXN0ZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3Bhbj5DbGFyYTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5uYW1lfT5HcmVsbGllcjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3Bhbj5Kw6lyw6lteTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5uYW1lfT5Hb2RkZTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3Bhbj5NYXJnYXV4PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLm5hbWV9PkdyZXNzZWw8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4+TWFyaWFubmU8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT17c3R5bGUubmFtZX0+R3Vlc25lYXU8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4+T2xpdmlhPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLm5hbWV9Pkxhc3NlcnJlPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGgyPkNyw6lkaXRzIGltYWdlczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Q3LDqWRpdHMgc29uczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDI+Tm91cyByZW1lcmNpb25zPC9oMj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4+U2VyZ2U8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT17c3R5bGUubmFtZX0+Qm91Y2hhcmRvbjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxoMT5Fc2Nvd0dhbWU8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgzPlNJMjggLSBBdXRvbW5lIDIwMjE8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2NyZWRpdHMvbG9nb1VUQy5qcGdcIiBhbHQ9XCJVbml2ZXJzaXTDqSBkZSB0ZWNobm9sb2dpZSBkZSBDb21wacOoZ25lXCIgd2lkdGg9XCIyNDBweFwiLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vZGlhbG9nLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBEaWFsb2dTdHJ1Y3QgZnJvbSAnLi4vLi4vc3RydWN0dXJlcy9kaWFsb2cvZGlhbG9nLnN0cnVjdHVyZSdcclxuXHJcbmludGVyZmFjZSBEaWFsb2dQcm9wcyB7XHJcbiAgICByZWFkb25seSB2YWx1ZTogRGlhbG9nU3RydWN0XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RGlhbG9nUHJvcHM+IHtcclxuICAgIHByaXZhdGUgY3VycmVudF9pbmRleF9mcmFtZTogbnVtYmVyID0gbnVsbFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBEaWFsb2dQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudF9pbmRleF9mcmFtZSA9IDBcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLmNsaWNrKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe30pXHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2sgPSAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50X2luZGV4X2ZyYW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRfaW5kZXhfZnJhbWUgKytcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50X2luZGV4X2ZyYW1lID49IHRoaXMucHJvcHMudmFsdWUuZnJhbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRfaW5kZXhfZnJhbWUgPSB1bmRlZmluZWRcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuY2xpY2spXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlLmFmdGVyRG8gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZS5hZnRlckRvKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe30pXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy52YWx1ZS50aW1lciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5zdGFydCx0aGlzLnByb3BzLnZhbHVlLnRpbWVyICogMTAwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9pbmRleF9mcmFtZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZGlhbG9nfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlLmZyYW1lc1t0aGlzLmN1cnJlbnRfaW5kZXhfZnJhbWVdLmltZyAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy52YWx1ZS5mcmFtZXNbdGhpcy5jdXJyZW50X2luZGV4X2ZyYW1lXS5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50ZXh0X3pvbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnZhbHVlLmZyYW1lc1t0aGlzLmN1cnJlbnRfaW5kZXhfZnJhbWVdLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLnRvZ2dsZXJ9Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9ob21lLXNjcmVlbi5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZVNjcmVlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5tb3ZlVG9QbGFjZSgxKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLmhvbWV9PlxyXG4gICAgICAgICAgICAgICAgPGgxPkVzY293R2FtZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgR3JlbGxpZXIgLSBHb2RkZSAtIEdyZXNzZWwgLSBHdWVzbmVhdSAtIExhc3NlcnJlPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICBTSTI4IC0gVW5pdmVyc2l0w6kgZGUgdGVjaG5vbG9naWUgZGUgQ29tcGnDqGduZVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEFWRVJUSVNTRU1FTlQgOiBsYSBzdWl0ZSBkdSBqZXUgY29udGllbnQgZGVzIGltYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgIHN1c2NlcHRpYmxlcyBkZSBjaG9xdWVyIGxhIHNlbnNpYmlsaXTDqSBkZXMgcGx1c1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYWdpbGVzLiBTaSB2b3VzIG5lIHNvdWhhaXRleiBwYXMgY29udGludWVyXHJcbiAgICAgICAgICAgICAgICAgICAgbOKAmWF2ZW50dXJlLCAgbmUgc3VpdmV6IHBhcyBsZSBjaGllbi5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wbGF5fT5Kb3VlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSG9tZVNjcmVlbiBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUtc2NyZWVuL2hvbWUtc2NyZWVuLmNvbXBvbmVudCdcclxuaW1wb3J0IENyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9jcmVkaXRzL2NyZWRpdHMuY29tcG9uZW50J1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4uL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHN4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGxhY2U6IDAsXHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuXHJcbiAgICBtb3ZlVG9QbGFjZSA9IChpZF9wbGFjZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwbGFjZTogaWRfcGxhY2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIMOgIGVubGV2ZXIsIGp1c3RlIHBvdXIgdGVzdGVyIGxlcyBkaWFsb2d1ZXNcclxuICAgIGRpYWxvZ190ZXN0ID0ge1xyXG4gICAgICAgIHRpbWVyOiAyLFxyXG4gICAgICAgIGFmdGVyRG86ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9QbGFjZSgyKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJhbWVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltZzogXCIvaW1nL2NoaWVuL2NoaWVuX2ZhY2UucG5nXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkJpZW52ZW51ZSBkYW5zIGNldCBlc3NhaSBkZSBkaWFsb2d1ZS4gQ2xpcXVleiBxdWVscXVlIHBhcnQgcG91ciBjb250aW51ZXIuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1nOiBcIi9pbWcvY2hpZW4vY2hpZW5fZmFjZS5wbmdcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2VsYSBmb25jdGlvbm5lLXQtaWwgP1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltZzogXCIvaW1nL2NoaWVuL2NoaWVuX2ZhY2UucG5nXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkJpZW4gISBQYXNzb25zIGF1IGfDqW7DqXJpcXVlIHZvdWxlei12b3VzXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wbGFjZSA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxIb21lU2NyZWVuIG1vdmVUb1BsYWNlPXt0aGlzLm1vdmVUb1BsYWNlfS8+XHJcbiAgICAgICAgICAgICAgICApIHx8IChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBsYWNlID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZyB2YWx1ZT17dGhpcy5kaWFsb2dfdGVzdH0vPlxyXG4gICAgICAgICAgICAgICAgKSB8fCAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wbGFjZSA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxDcmVkaXRzIG1vdmVUb1BsYWNlPXt0aGlzLm1vdmVUb1BsYWNlfS8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjcmVkaXRzXCI6IFwiY3JlZGl0c19jcmVkaXRzX18zbUtWZlwiLFxuXHRcIm5hbWVcIjogXCJjcmVkaXRzX25hbWVfXzE3N09zXCIsXG5cdFwic3BhY2VcIjogXCJjcmVkaXRzX3NwYWNlX18zM19aeVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGlhbG9nXCI6IFwiZGlhbG9nX2RpYWxvZ19fWjlSdG1cIixcblx0XCJwaWN0dXJlXCI6IFwiZGlhbG9nX3BpY3R1cmVfXzJNZDdvXCIsXG5cdFwidGV4dF96b25lXCI6IFwiZGlhbG9nX3RleHRfem9uZV9fMS03SUhcIixcblx0XCJ0b2dnbGVyXCI6IFwiZGlhbG9nX3RvZ2dsZXJfXzIzZXplXCIsXG5cdFwidG9nZ2xlX3NpZ25cIjogXCJkaWFsb2dfdG9nZ2xlX3NpZ25fXzNFU3ZfXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJob21lXCI6IFwiaG9tZS1zY3JlZW5faG9tZV9fMWZDMnpcIixcblx0XCJ0aXRsZV9zaGFkb3dcIjogXCJob21lLXNjcmVlbl90aXRsZV9zaGFkb3dfXzNlNmg1XCIsXG5cdFwiYnV0dG9uX3NjYWxlXCI6IFwiaG9tZS1zY3JlZW5fYnV0dG9uX3NjYWxlX18zWmxnb1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlIiwiSUQiLCJDcmVkaXRzIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImV2dCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVuZCIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lciIsIm1vdmVUb1BsYWNlIiwic3RhdGUiLCJ5IiwiZ2VuZXJpY3NFbGVtZW50Iiwib2Zmc2V0SGVpZ2h0Iiwic2V0U3RhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEludGVydmFsIiwic2Nyb2xsIiwiY3JlZGl0cyIsInBvc2l0aW9uIiwidG9wIiwic3BhY2UiLCJuYW1lIiwiRGlhbG9nIiwiY3VycmVudF9pbmRleF9mcmFtZSIsImNsaWNrIiwidW5kZWZpbmVkIiwidmFsdWUiLCJmcmFtZXMiLCJsZW5ndGgiLCJhZnRlckRvIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwiZGlhbG9nIiwiaW1nIiwicGljdHVyZSIsInRleHRfem9uZSIsInRleHQiLCJ0b2dnbGVyIiwiSG9tZVNjcmVlbiIsImhvbWUiLCJwbGF5IiwiSW5kZXgiLCJpZF9wbGFjZSIsInBsYWNlIiwicmVuZGVyIiwiZGlhbG9nX3Rlc3QiXSwic291cmNlUm9vdCI6IiJ9