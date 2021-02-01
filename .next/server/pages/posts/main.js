module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/posts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Source/Components/Chart.js":
/*!************************************!*\
  !*** ./Source/Components/Chart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataChart; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @devexpress/dx-react-chart-material-ui */ "@devexpress/dx-react-chart-material-ui");
/* harmony import */ var _devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Components\\Chart.js";






class DataChart extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const data = [];
    var i;

    for (i = 0; i < 20; i++) {
      data.push({
        argument: i,
        value: Math.floor(Math.random() * 100)
      });
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {},
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4___default.a, {
        title: "Grafik",
        subheader: "Zaman-De\u011Fer Grafi\u011Fi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./Source/Components/Footer.js":
/*!*************************************!*\
  !*** ./Source/Components/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageFooter; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-footer */ "rc-footer");
/* harmony import */ var rc_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_footer_assets_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-footer/assets/index.css */ "./node_modules/rc-footer/assets/index.css");
/* harmony import */ var rc_footer_assets_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_footer_assets_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Components\\Footer.js";

 // import 'rc-footer/asssets/index.less';


class PageFooter extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_footer__WEBPACK_IMPORTED_MODULE_1___default.a, {
      columns: [{
        items: [{
          title: "Help"
        }, {
          title: "Community"
        }, {
          title: "Advisories"
        }, {
          title: "Status"
        }, {
          title: "Contact"
        }],
        title: 'Support',
        openExternal: true
      }, {
        items: [{
          title: "About"
        }, {
          title: "Blog"
        }, {
          title: "Press"
        }],
        title: 'Company',
        openExternal: true
      }, {
        items: [{
          title: "Policies"
        }, {
          title: "Terms of Use"
        }, {
          title: "Code of Conduct"
        }, {
          title: "Privacy"
        }],
        title: 'Terms & Policies',
        openExternal: true
      }],
      backgroundColor: "#3F51B5",
      bottom: "Made with \u2764\uFE0F by ikbalkazanc"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }, this);
  }

}

/***/ }),

/***/ "./Source/Components/NavBar.js":
/*!*************************************!*\
  !*** ./Source/Components/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Components\\NavBar.js";







class NavBar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
      position: "fixed",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Container"], {
          maxWidth: "lg",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
            container: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
              color: "inherit",
              children: "Menu"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
              color: "inherit",
              children: "Profil"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
              color: "inherit",
              children: "Postlar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "./Source/Components/PostInput.js":
/*!****************************************!*\
  !*** ./Source/Components/PostInput.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostInput; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Services_PostService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/PostService */ "./Source/Services/PostService.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Components\\PostInput.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
class PostInput extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "sumbit", () => {
      let post = {
        title: this.state.title,
        description: this.state.context
      };
      _Services_PostService__WEBPACK_IMPORTED_MODULE_9__["default"].Add(post);
      this.setState({
        temp: false
      });
    });

    this.state = {
      title: "",
      context: "",
      temp: false
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: useStyles.root,
      style: {
        backgroundColor: "#F7F7F7"
      },
      variant: "outlined",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
          variant: "h5",
          className: useStyles.title,
          color: "textSecondary",
          gutterBottom: true,
          children: "Yeni blog yaz!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
              style: {
                backgroundColor: "white"
              },
              label: "Ba\u015Fl\u0131k",
              type: "text",
              onChange: event => {
                this.setState({
                  title: event.target.value
                });
              },
              fullWidth: true,
              variant: "filled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
              style: {
                backgroundColor: "white"
              },
              label: "\u0130\xE7erik",
              multiline: true,
              rows: 4,
              fullWidth: true,
              placeholder: "yaz... yaz... yaz...",
              onChange: event => {
                this.setState({
                  context: event.target.value
                });
              },
              variant: "filled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
            variant: "outlined",
            onClick: () => {
              this.sumbit();
            },
            size: "small",
            children: "G\xF6nder"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./Source/Components/PostList.js":
/*!***************************************!*\
  !*** ./Source/Components/PostList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Components\\PostList.js";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
}));
class PostList extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
        severity: "info",
        children: "Son Payla\u015F\u0131lanalar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: useStyles.root,
        children: this.props.posts.map((element, key) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default.a, {
              primary: element.title,
              secondary: element.description.substring(0, 50) + "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 37
            }, this)
          }, key, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 33
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./Source/Components/PostRoll.js":
/*!***************************************!*\
  !*** ./Source/Components/PostRoll.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostRoll; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Source_Services_PostService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Source/Services/PostService */ "./Source/Services/PostService.js");

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Components\\PostRoll.js";












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    maxWidth: 345
  }
});

const deletePost = async id => {
  await _Source_Services_PostService__WEBPACK_IMPORTED_MODULE_12__["default"].Delete(id);
};

const oneCard = (post, uniqueKey) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    style: {
      padding: 0,
      marginBottom: '2rem'
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        backgroundColor: "#F7F7F7"
      },
      className: useStyles.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default.a, {
          component: "img",
          alt: "Contemplative Reptile",
          height: "200",
          image: "https://storage.googleapis.com/stateless-whwwp-screenbeetle-c/2019/10/96ca8698-alicia-letterbox.jpg",
          title: "Contemplative Reptile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
            gutterBottom: true,
            variant: "h5",
            component: "h2",
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
            variant: "body2",
            color: "textSecondary",
            component: "p",
            children: post.description.substring(0.200) + "..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
            variant: "h6",
            color: "textSecondary",
            component: "p",
            children: post.date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
          size: "small",
          color: "primary",
          children: "Learn More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
          onClick: () => {
            deletePost(post.id);
          },
          size: "small",
          color: "secondary",
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)
  }, uniqueKey, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

const ifEmpty = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    variant: "h2",
    component: "h2",
    children: "Payla\u015F\u0131mlar y\xFCkleniyor..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, undefined);
};

class PostRoll extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  render() {
    if (this.props.posts.length === 0) {
      return ifEmpty();
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          padding: 0
        },
        children: this.props.posts.map((element, key) => {
          return oneCard(element, key);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this);
    }
  }

}

/***/ }),

/***/ "./Source/Components/Slider.js":
/*!*************************************!*\
  !*** ./Source/Components/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderShow; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Components\\Slider.js";

const slideImages = ['https://wowslider.net/local-sliders/demo-10/data1/images/road220058.jpg', "https://wowslider.net/local-sliders/demo-10/data1/images/field175959_1920.jpg"];
class SliderShow extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        width: "100%",
        height: "350",
        src: slideImages[1],
        alt: "First slide"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./Source/Pages/MainPage.js":
/*!**********************************!*\
  !*** ./Source/Pages/MainPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Source_Components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Source/Components/NavBar */ "./Source/Components/NavBar.js");
/* harmony import */ var _Source_Components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Source/Components/Slider */ "./Source/Components/Slider.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Source_Services_PostService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Source/Services/PostService */ "./Source/Services/PostService.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Source_Components_PostList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Source/Components/PostList */ "./Source/Components/PostList.js");
/* harmony import */ var _Source_Components_PostRoll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Source/Components/PostRoll */ "./Source/Components/PostRoll.js");
/* harmony import */ var _Source_Components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Source/Components/Footer */ "./Source/Components/Footer.js");
/* harmony import */ var _Views_FooterView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Views/FooterView */ "./Source/Views/FooterView.js");
/* harmony import */ var _Views_NavigationBarView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Views/NavigationBarView */ "./Source/Views/NavigationBarView.js");
/* harmony import */ var _Views_SliderView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Views/SliderView */ "./Source/Views/SliderView.js");
/* harmony import */ var _Views_PostListView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Views/PostListView */ "./Source/Views/PostListView.js");
/* harmony import */ var _Views_PostRollView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Views/PostRollView */ "./Source/Views/PostRollView.js");
/* harmony import */ var _Views_PostInputView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Views/PostInputView */ "./Source/Views/PostInputView.js");
/* harmony import */ var _Views_ChartView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Views/ChartView */ "./Source/Views/ChartView.js");

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Pages\\MainPage.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class MainPage extends react__WEBPACK_IMPORTED_MODULE_6___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getBlogPost", async () => {
      var fetchedPosts = await _Source_Services_PostService__WEBPACK_IMPORTED_MODULE_5__["default"].GetAll();
      this.setState({
        blogPosts: fetchedPosts
      });
    });

    this.state = {
      blogPosts: []
    };
  }

  componentDidMount() {
    this.getBlogPost();
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        backgroundColor: "#e8eaf6"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Views_NavigationBarView__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
        maxWidth: "lg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            xs: 12,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Views_SliderView__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
            item: true,
            container: true,
            spacing: 3,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
              item: true,
              xs: 4,
              md: 4,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Views_PostListView__WEBPACK_IMPORTED_MODULE_13__["default"], {
                posts: this.state.blogPosts
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Views_ChartView__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
              item: true,
              xs: 8,
              md: 8,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Views_PostInputView__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Views_PostRollView__WEBPACK_IMPORTED_MODULE_14__["default"], {
                posts: this.state.blogPosts
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Views_FooterView__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./Source/Services/PostService.js":
/*!****************************************!*\
  !*** ./Source/Services/PostService.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_config */ "./Source/Services/_config.js");
//var json = require('../../db.json');



class PostService {
  async GetAll() {
    /*
    try {
        var response = await axios.get(URL + "posts");
        return response.data;
    }
    catch (err) {
        console.log(err)
        return json.posts
    }*/
    return [];
  }

  async Add(post) {
    /*
    post.date = new Date().toString();
    post.id = Math.floor(Math.random() * 100000);
    try {
        var response = await axios.post(URL + "posts", post);
        return response.data
    }
    catch (err) {
        console.log(err)
    }*/
    return {};
  }

  async Delete(id) {
    /*
    try {
        var response = await axios.delete(URL + "posts/" + id.toString());
        return response.data
    }
    catch (err) {
        console.log(err)
    }*/
    return {};
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new PostService());

/***/ }),

/***/ "./Source/Services/_config.js":
/*!************************************!*\
  !*** ./Source/Services/_config.js ***!
  \************************************/
/*! exports provided: URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
const URL = "http://localhost:3001/";

/***/ }),

/***/ "./Source/Views/ChartView.js":
/*!***********************************!*\
  !*** ./Source/Views/ChartView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartView; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Chart */ "./Source/Components/Chart.js");

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Views\\ChartView.js";


class ChartView extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Chart__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }, this);
  }

}

/***/ }),

/***/ "./Source/Views/FooterView.js":
/*!************************************!*\
  !*** ./Source/Views/FooterView.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterView; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Footer */ "./Source/Components/Footer.js");

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Views\\FooterView.js";


class FooterView extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }, this);
  }

}

/***/ }),

/***/ "./Source/Views/NavigationBarView.js":
/*!*******************************************!*\
  !*** ./Source/Views/NavigationBarView.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavivationBarView; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/NavBar */ "./Source/Components/NavBar.js");

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Views\\NavigationBarView.js";


class NavivationBarView extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }, this);
  }

}

/***/ }),

/***/ "./Source/Views/PostInputView.js":
/*!***************************************!*\
  !*** ./Source/Views/PostInputView.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostInputView; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_PostInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/PostInput */ "./Source/Components/PostInput.js");

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Views\\PostInputView.js";


class PostInputView extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_PostInput__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }, this);
  }

}

/***/ }),

/***/ "./Source/Views/PostListView.js":
/*!**************************************!*\
  !*** ./Source/Views/PostListView.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostListView; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_PostList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/PostList */ "./Source/Components/PostList.js");

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Views\\PostListView.js";


class PostListView extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_PostList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      posts: this.props.posts
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }, this);
  }

}

/***/ }),

/***/ "./Source/Views/PostRollView.js":
/*!**************************************!*\
  !*** ./Source/Views/PostRollView.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostRollView; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_PostRoll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/PostRoll */ "./Source/Components/PostRoll.js");

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Views\\PostRollView.js";


class PostRollView extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_PostRoll__WEBPACK_IMPORTED_MODULE_2__["default"], {
      posts: this.props.posts
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }, this);
  }

}

/***/ }),

/***/ "./Source/Views/SliderView.js":
/*!************************************!*\
  !*** ./Source/Views/SliderView.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderView; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Slider */ "./Source/Components/Slider.js");

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\Source\\Views\\SliderView.js";


class SliderView extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }, this);
  }

}

/***/ }),

/***/ "./node_modules/rc-footer/assets/index.css":
/*!*************************************************!*\
  !*** ./node_modules/rc-footer/assets/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/posts/main.js":
/*!*****************************!*\
  !*** ./pages/posts/main.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Source_Pages_MainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Source/Pages/MainPage */ "./Source/Pages/MainPage.js");

var _jsxFileName = "C:\\Users\\iko_k\\Desktop\\projects\\NextJS\\NextJS-BlogPage\\pages\\posts\\main.js";

function Main() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Source_Pages_MainPage__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "@devexpress/dx-react-chart-material-ui":
/*!*********************************************************!*\
  !*** external "@devexpress/dx-react-chart-material-ui" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@devexpress/dx-react-chart-material-ui");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/system");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "rc-footer":
/*!****************************!*\
  !*** external "rc-footer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-footer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL0NvbXBvbmVudHMvQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL0NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL1NvdXJjZS9Db21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9Tb3VyY2UvQ29tcG9uZW50cy9Qb3N0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL0NvbXBvbmVudHMvUG9zdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL0NvbXBvbmVudHMvUG9zdFJvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL0NvbXBvbmVudHMvU2xpZGVyLmpzIiwid2VicGFjazovLy8uL1NvdXJjZS9QYWdlcy9NYWluUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9Tb3VyY2UvU2VydmljZXMvUG9zdFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL1NlcnZpY2VzL19jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL1ZpZXdzL0NoYXJ0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9Tb3VyY2UvVmlld3MvRm9vdGVyVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9Tb3VyY2UvVmlld3MvTmF2aWdhdGlvbkJhclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL1ZpZXdzL1Bvc3RJbnB1dFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL1ZpZXdzL1Bvc3RMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9Tb3VyY2UvVmlld3MvUG9zdFJvbGxWaWV3LmpzIiwid2VicGFjazovLy8uL1NvdXJjZS9WaWV3cy9TbGlkZXJWaWV3LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Bvc3RzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGRldmV4cHJlc3MvZHgtcmVhY3QtY2hhcnQtbWF0ZXJpYWwtdWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy1mb290ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkRhdGFDaGFydCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZGF0YSIsImkiLCJwdXNoIiwiYXJndW1lbnQiLCJ2YWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJQYWdlRm9vdGVyIiwiaXRlbXMiLCJ0aXRsZSIsIm9wZW5FeHRlcm5hbCIsIk5hdkJhciIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJidWxsZXQiLCJtYXJnaW4iLCJ0cmFuc2Zvcm0iLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIlBvc3RJbnB1dCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwb3N0Iiwic3RhdGUiLCJkZXNjcmlwdGlvbiIsImNvbnRleHQiLCJQb3N0U2VydmljZSIsIkFkZCIsInNldFN0YXRlIiwidGVtcCIsImJhY2tncm91bmRDb2xvciIsImV2ZW50IiwidGFyZ2V0Iiwic3VtYml0IiwidGhlbWUiLCJ3aWR0aCIsIm1heFdpZHRoIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsImlubGluZSIsIlBvc3RMaXN0IiwicG9zdHMiLCJtYXAiLCJlbGVtZW50Iiwia2V5Iiwic3Vic3RyaW5nIiwiZGVsZXRlUG9zdCIsImlkIiwiRGVsZXRlIiwib25lQ2FyZCIsInVuaXF1ZUtleSIsInBhZGRpbmciLCJkYXRlIiwiaWZFbXB0eSIsIlBvc3RSb2xsIiwibGVuZ3RoIiwic2xpZGVJbWFnZXMiLCJTbGlkZXJTaG93IiwiTWFpblBhZ2UiLCJmZXRjaGVkUG9zdHMiLCJHZXRBbGwiLCJibG9nUG9zdHMiLCJjb21wb25lbnREaWRNb3VudCIsImdldEJsb2dQb3N0IiwiVVJMIiwiQ2hhcnRWaWV3IiwiRm9vdGVyVmlldyIsIk5hdml2YXRpb25CYXJWaWV3IiwiUG9zdElucHV0VmlldyIsIlBvc3RMaXN0VmlldyIsIlBvc3RSb2xsVmlldyIsIlNsaWRlclZpZXciLCJNYWluIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREg7QUFHSDs7QUFMK0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHBEO0FBQ0E7QUFFZSxNQUFNOEIsVUFBTixTQUF5QmpGLCtDQUF6QixDQUFtQztBQUM5Q0MsUUFBTSxHQUFHO0FBQ0wsd0JBQ0cscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURIO0FBR0g7O0FBTDZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hsRDtBQUNlLFNBQVNpRixJQUFULEdBQWdCO0FBQzNCLHNCQUNJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUdILEM7Ozs7Ozs7Ozs7O0FDTEQsbUU7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvcG9zdHMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcG9zdHMvbWFpbi5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCB7XHJcbiAgICBBcmd1bWVudEF4aXMsXHJcbiAgICBWYWx1ZUF4aXMsXHJcbiAgICBDaGFydCxcclxuICAgIExpbmVTZXJpZXMsXHJcbn0gZnJvbSAnQGRldmV4cHJlc3MvZHgtcmVhY3QtY2hhcnQtbWF0ZXJpYWwtdWknO1xyXG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtdXHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDIwOyBpKyspIHtcclxuICAgICAgICAgICAgZGF0YS5wdXNoKHsgYXJndW1lbnQ6IGksIHZhbHVlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7XHJcblxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJHcmFmaWtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN1YmhlYWRlcj1cIlphbWFuLURlxJ9lciBHcmFmacSfaVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgICAgICAgICAgPENoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFyZ3VtZW50QXhpcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmFsdWVBeGlzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lU2VyaWVzIHZhbHVlRmllbGQ9XCJ2YWx1ZVwiIGFyZ3VtZW50RmllbGQ9XCJhcmd1bWVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGFydD4qLyB9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8L0NhcmQgPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBGb290ZXIgZnJvbSAncmMtZm9vdGVyJztcclxuaW1wb3J0ICdyYy1mb290ZXIvYXNzZXRzL2luZGV4LmNzcyc7IC8vIGltcG9ydCAncmMtZm9vdGVyL2Fzc3NldHMvaW5kZXgubGVzcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZUZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoPEZvb3RlclxyXG4gICAgICAgICAgICBjb2x1bW5zPXtbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6XCJIZWxwXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6XCJDb21tdW5pdHlcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZTpcIkFkdmlzb3JpZXNcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZTpcIlN0YXR1c1wifSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZTpcIkNvbnRhY3RcIn1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VwcG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkV4dGVybmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZTpcIkFib3V0XCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6XCJCbG9nXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6XCJQcmVzc1wifVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDb21wYW55JyxcclxuICAgICAgICAgICAgICAgICAgICBvcGVuRXh0ZXJuYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZTpcIlBvbGljaWVzXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6XCJUZXJtcyBvZiBVc2VcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZTpcIkNvZGUgb2YgQ29uZHVjdFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlOlwiUHJpdmFjeVwifSwgXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Rlcm1zICYgUG9saWNpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5FeHRlcm5hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiMzRjUxQjVcIlxyXG4gICAgICAgICAgICBib3R0b209XCJNYWRlIHdpdGgg4p2k77iPIGJ5IGlrYmFsa2F6YW5jXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5NZW51PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Qcm9maWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPlBvc3RsYXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IFBvc3RTZXJ2aWNlIGZyb20gJy4uL1NlcnZpY2VzL1Bvc3RTZXJ2aWNlJ1xyXG5pbXBvcnQgeyBPdXRsaW5lZElucHV0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBtaW5XaWR0aDogMjc1LFxyXG4gICAgfSxcclxuICAgIGJ1bGxldDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIG1hcmdpbjogJzAgMnB4JyxcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgIH0sXHJcbiAgICBwb3M6IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDEyLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0SW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICB0aXRsZTpcIlwiLFxyXG4gICAgICAgICAgICBjb250ZXh0OlwiXCIsXHJcbiAgICAgICAgICAgIHRlbXA6ZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdW1iaXQgPSAoKSA9PntcclxuICAgICAgICBsZXQgcG9zdCA9IHtcclxuICAgICAgICAgICAgdGl0bGUgOiB0aGlzLnN0YXRlLnRpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IHRoaXMuc3RhdGUuY29udGV4dFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBQb3N0U2VydmljZS5BZGQocG9zdCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGVtcDpmYWxzZX0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXt1c2VTdHlsZXMucm9vdH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNGN0Y3RjdcIiB9fSB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY2xhc3NOYW1lPXt1c2VTdHlsZXMudGl0bGV9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWWVuaSBibG9nIHlheiFcclxuICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJhxZ9sxLFrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCk9PnsgdGhpcy5zZXRTdGF0ZSh7dGl0bGU6ZXZlbnQudGFyZ2V0LnZhbHVlfSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIsSww6dlcmlrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieWF6Li4uIHlhei4uLiB5YXouLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpPT57IHRoaXMuc2V0U3RhdGUoe2NvbnRleHQ6ZXZlbnQudGFyZ2V0LnZhbHVlfSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zID5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9eygpPT57dGhpcy5zdW1iaXQoKX19IHNpemU9XCJzbWFsbFwiPkfDtm5kZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCB7IHNoYWRvd3MgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3lzdGVtJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgbWF4V2lkdGg6ICczNmNoJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICAgIH0sXHJcbiAgICBpbmxpbmU6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q2FyZCA+XHJcbiAgICAgICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJpbmZvXCI+U29uIFBheWxhxZ/EsWxhbmFsYXI8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgPExpc3QgY2xhc3NOYW1lPXt1c2VTdHlsZXMucm9vdH0gPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wb3N0cy5tYXAoKGVsZW1lbnQsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17ZWxlbWVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17ZWxlbWVudC5kZXNjcmlwdGlvbi5zdWJzdHJpbmcoMCwgNTApICsgXCIuLi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcclxuaW1wb3J0IFBvc3RTZXJ2aWNlIGZyb20gJy4uLy4uL1NvdXJjZS9TZXJ2aWNlcy9Qb3N0U2VydmljZSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1heFdpZHRoOiAzNDUsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCAgZGVsZXRlUG9zdCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGF3YWl0IFBvc3RTZXJ2aWNlLkRlbGV0ZShpZCk7XHJcbn1cclxuXHJcbmNvbnN0IG9uZUNhcmQgPSAocG9zdCwgdW5pcXVlS2V5KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8TGlzdEl0ZW0ga2V5PXt1bmlxdWVLZXl9IHN0eWxlPXt7IHBhZGRpbmc6IDAsIG1hcmdpbkJvdHRvbTogJzJyZW0nIH19PlxyXG4gICAgICA8Q2FyZCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y3RjdGN1wiIH19IGNsYXNzTmFtZT17dXNlU3R5bGVzLnJvb3R9PlxyXG4gICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgYWx0PVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcclxuXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXHJcbiAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3N0YXRlbGVzcy13aHd3cC1zY3JlZW5iZWV0bGUtYy8yMDE5LzEwLzk2Y2E4Njk4LWFsaWNpYS1sZXR0ZXJib3guanBnXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJDb250ZW1wbGF0aXZlIFJlcHRpbGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgIHtwb3N0LmRlc2NyaXB0aW9uLnN1YnN0cmluZygwLjIwMCkgKyBcIi4uLlwifVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICB7cG9zdC5kYXRlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgTGVhcm4gTW9yZVxyXG4gICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHtkZWxldGVQb3N0KHBvc3QuaWQpfX0gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuXHJcbiAgKVxyXG59XHJcbmNvbnN0IGlmRW1wdHkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDJcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICBQYXlsYcWfxLFtbGFyIHnDvGtsZW5peW9yLi4uXHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdFJvbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnBvc3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGlmRW1wdHkoKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdCBzdHlsZT17eyBwYWRkaW5nOiAwIH19ID5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wb3N0cy5tYXAoKGVsZW1lbnQsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBvbmVDYXJkKGVsZW1lbnQsIGtleSlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3Qgc2xpZGVJbWFnZXMgPSBbXHJcbiAgICAnaHR0cHM6Ly93b3dzbGlkZXIubmV0L2xvY2FsLXNsaWRlcnMvZGVtby0xMC9kYXRhMS9pbWFnZXMvcm9hZDIyMDA1OC5qcGcnLFxyXG4gICAgXCJodHRwczovL3dvd3NsaWRlci5uZXQvbG9jYWwtc2xpZGVycy9kZW1vLTEwL2RhdGExL2ltYWdlcy9maWVsZDE3NTk1OV8xOTIwLmpwZ1wiXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJTaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gXCIxMDAlXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IFwiMzUwXCIgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcmM9IHtzbGlkZUltYWdlc1sxXX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJGaXJzdCBzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uL1NvdXJjZS9Db21wb25lbnRzL05hdkJhcidcclxuaW1wb3J0IFNsaWRlU2hvdyBmcm9tICcuLi8uLi9Tb3VyY2UvQ29tcG9uZW50cy9TbGlkZXInXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgUG9zdFNlcnZpY2UgZnJvbSAnLi4vLi4vU291cmNlL1NlcnZpY2VzL1Bvc3RTZXJ2aWNlJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vLi4vU291cmNlL0NvbXBvbmVudHMvUG9zdExpc3QnXHJcbmltcG9ydCBQb3N0Um9sbCBmcm9tICcuLi8uLi9Tb3VyY2UvQ29tcG9uZW50cy9Qb3N0Um9sbCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9Tb3VyY2UvQ29tcG9uZW50cy9Gb290ZXInXHJcblxyXG5pbXBvcnQgRm9vdGVyVmlldyBmcm9tICcuLi9WaWV3cy9Gb290ZXJWaWV3J1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhclZpZXcgZnJvbSAnLi4vVmlld3MvTmF2aWdhdGlvbkJhclZpZXcnXHJcbmltcG9ydCBTbGlkZXJWaWV3IGZyb20gJy4uL1ZpZXdzL1NsaWRlclZpZXcnXHJcbmltcG9ydCBQb3N0TGlzdFZpZXcgZnJvbSAnLi4vVmlld3MvUG9zdExpc3RWaWV3J1xyXG5pbXBvcnQgUG9zdFJvbGxWaWV3IGZyb20gJy4uL1ZpZXdzL1Bvc3RSb2xsVmlldydcclxuaW1wb3J0IFBvc3RJbnB1dFZpZXcgZnJvbSAnLi4vVmlld3MvUG9zdElucHV0VmlldydcclxuaW1wb3J0IENoYXJ0VmlldyBmcm9tICcuLi9WaWV3cy9DaGFydFZpZXcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBibG9nUG9zdHM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QmxvZ1Bvc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCbG9nUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB2YXIgZmV0Y2hlZFBvc3RzID0gYXdhaXQgUG9zdFNlcnZpY2UuR2V0QWxsKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJsb2dQb3N0czogZmV0Y2hlZFBvc3RzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiNlOGVhZjZcIn19PlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CYXJWaWV3IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJWaWV3ID48L1NsaWRlclZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBjb250YWluZXIgc3BhY2luZz17M30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdExpc3RWaWV3IHBvc3RzPXt0aGlzLnN0YXRlLmJsb2dQb3N0c30gPjwvUG9zdExpc3RWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFydFZpZXc+PC9DaGFydFZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RJbnB1dFZpZXc+PC9Qb3N0SW5wdXRWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0Um9sbFZpZXcgcG9zdHM9e3RoaXMuc3RhdGUuYmxvZ1Bvc3RzfT48L1Bvc3RSb2xsVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlclZpZXcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiLy92YXIganNvbiA9IHJlcXVpcmUoJy4uLy4uL2RiLmpzb24nKTtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBVUkwgfSBmcm9tIFwiLi9fY29uZmlnXCI7XHJcblxyXG5jbGFzcyBQb3N0U2VydmljZSB7XHJcbiAgICBhc3luYyBHZXRBbGwoKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoVVJMICsgXCJwb3N0c1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICByZXR1cm4ganNvbi5wb3N0c1xyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgYXN5bmMgQWRkKHBvc3QpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIHBvc3QuZGF0ZSA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBwb3N0LmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCArIFwicG9zdHNcIiwgcG9zdCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIHJldHVybiB7fVxyXG4gICAgfVxyXG4gICAgYXN5bmMgRGVsZXRlKGlkKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5kZWxldGUoVVJMICsgXCJwb3N0cy9cIiArIGlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9Ki9cclxuICAgICAgICByZXR1cm4ge31cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBvc3RTZXJ2aWNlKCk7IiwiZXhwb3J0IGNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL1wiOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGFydCBmcm9tICcuLi9Db21wb25lbnRzL0NoYXJ0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICA8Q2hhcnQvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0NvbXBvbmVudHMvRm9vdGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyVmlldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9OYXZCYXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpdmF0aW9uQmFyVmlldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgPE5hdkJhci8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQb3N0SW5wdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9Qb3N0SW5wdXQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0SW5wdXRWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICA8UG9zdElucHV0Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL0NvbXBvbmVudHMvUG9zdExpc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0TGlzdFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgIDxQb3N0TGlzdCBwb3N0cz17dGhpcy5wcm9wcy5wb3N0c30vPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUG9zdFJvbGwgZnJvbSAnLi4vQ29tcG9uZW50cy9Qb3N0Um9sbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RSb2xsVmlldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgPFBvc3RSb2xsIHBvc3RzPXt0aGlzLnByb3BzLnBvc3RzfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9TbGlkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICA8U2xpZGVyLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IE1haW5QYWdlIGZyb20gJy4uLy4uL1NvdXJjZS9QYWdlcy9NYWluUGFnZSdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5QYWdlPjwvTWFpblBhZ2U+XHJcbiAgICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGRldmV4cHJlc3MvZHgtcmVhY3QtY2hhcnQtbWF0ZXJpYWwtdWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLWZvb3RlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==