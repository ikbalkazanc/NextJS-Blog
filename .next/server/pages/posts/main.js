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
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
          data: data,
          width: 300,
          height: 300,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["ArgumentAxis"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_devexpress_dx_react_chart_material_ui__WEBPACK_IMPORTED_MODULE_3__["LineSeries"], {
            valueField: "value",
            argumentField: "argument"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this)
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
var json = __webpack_require__(/*! ../../db.json */ "./db.json");




class PostService {
  async GetAll() {
    var response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_config__WEBPACK_IMPORTED_MODULE_1__["URL"] + "posts");

    if (response.status == 200) {
      return response.data;
    } else {
      json.posts;
    }
  }

  async Add(post) {
    post.date = new Date().toString();
    post.id = Math.floor(Math.random() * 100000);
    var response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_config__WEBPACK_IMPORTED_MODULE_1__["URL"] + "posts", post);
    return response.data;
  }

  async Delete(id) {
    var response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(_config__WEBPACK_IMPORTED_MODULE_1__["URL"] + "posts/" + id.toString());
    return response.data;
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

/***/ "./db.json":
/*!*****************!*\
  !*** ./db.json ***!
  \*****************/
/*! exports provided: posts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"posts\":[{\"title\":\"Makale\",\"description\":\"\\\"Makale, herhangi bir konuda, bir görüşü, bir düşünceyi savunmak ve kanıtlamak için yazılan yazılara denir. Gazete ve dergilerde yayımlanır. Bir gerçeği açıklamak, bir konuda görüş ve düşünceler öne sürmek ya da bir tezi savunmak, desteklemek için yazılan yazılara da  denir. Makaleler bir gerçeği kanıtlamak için yazılır. Makalelerde bilimsel verilerden yararlanılır. Akademik makaleler ise aynı zamanda bilimsel ve akademik boyuttaki dergilerde, bilimsel çalışmaların sonuçlarını içeren yazılar biçiminde de oluşturulabilmektedir. Bu konudaki dergiler ücretli ya da ücretsiz ve ulusal ya da uluslararası olabilmektedir. Hakemlik süreçleri kör hakemlik biçiminde birden fazla hakem ile yürütülebimektedir \\\",\",\"date\":\"Fri Jan 29 2021 04:33:30 GMT+0300 (GMT+03:00)\",\"id\":37748},{\"title\":\"Makale\",\"description\":\"\\\"Makale, herhangi bir konuda, bir görüşü, bir düşünceyi savunmak ve kanıtlamak için yazılan yazılara denir. Gazete ve dergilerde yayımlanır. Bir gerçeği açıklamak, bir konuda görüş ve düşünceler öne sürmek ya da bir tezi savunmak, desteklemek için yazılan yazılara da  denir. Makaleler bir gerçeği kanıtlamak için yazılır. Makalelerde bilimsel verilerden yararlanılır. Akademik makaleler ise aynı zamanda bilimsel ve akademik boyuttaki dergilerde, bilimsel çalışmaların sonuçlarını içeren yazılar biçiminde de oluşturulabilmektedir. Bu konudaki dergiler ücretli ya da ücretsiz ve ulusal ya da uluslararası olabilmektedir. Hakemlik süreçleri kör hakemlik biçiminde birden fazla hakem ile yürütülebimektedir \\\",\",\"date\":\"Fri Jan 29 2021 04:33:30 GMT+0300 (GMT+03:00)\",\"id\":45323},{\"title\":\"Makale\",\"description\":\"\\\"Makale, herhangi bir konuda, bir görüşü, bir düşünceyi savunmak ve kanıtlamak için yazılan yazılara denir. Gazete ve dergilerde yayımlanır. Bir gerçeği açıklamak, bir konuda görüş ve düşünceler öne sürmek ya da bir tezi savunmak, desteklemek için yazılan yazılara da  denir. Makaleler bir gerçeği kanıtlamak için yazılır. Makalelerde bilimsel verilerden yararlanılır. Akademik makaleler ise aynı zamanda bilimsel ve akademik boyuttaki dergilerde, bilimsel çalışmaların sonuçlarını içeren yazılar biçiminde de oluşturulabilmektedir. Bu konudaki dergiler ücretli ya da ücretsiz ve ulusal ya da uluslararası olabilmektedir. Hakemlik süreçleri kör hakemlik biçiminde birden fazla hakem ile yürütülebimektedir \\\",\",\"date\":\"Fri Jan 29 2021 04:33:30 GMT+0300 (GMT+03:00)\",\"id\":12344},{\"title\":\"deneme\",\"description\":\"asdasd\",\"date\":\"Mon Feb 01 2021 06:21:00 GMT+0300 (GMT+03:00)\",\"id\":69376}]}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL0NvbXBvbmVudHMvQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL0NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL1NvdXJjZS9Db21wb25lbnRzL05hdkJhci5qcyIsIndlYnBhY2s6Ly8vLi9Tb3VyY2UvQ29tcG9uZW50cy9Qb3N0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL0NvbXBvbmVudHMvUG9zdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL0NvbXBvbmVudHMvUG9zdFJvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL0NvbXBvbmVudHMvU2xpZGVyLmpzIiwid2VicGFjazovLy8uL1NvdXJjZS9QYWdlcy9NYWluUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9Tb3VyY2UvU2VydmljZXMvUG9zdFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL1NlcnZpY2VzL19jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL1ZpZXdzL0NoYXJ0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9Tb3VyY2UvVmlld3MvRm9vdGVyVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9Tb3VyY2UvVmlld3MvTmF2aWdhdGlvbkJhclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL1ZpZXdzL1Bvc3RJbnB1dFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL1ZpZXdzL1Bvc3RMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9Tb3VyY2UvVmlld3MvUG9zdFJvbGxWaWV3LmpzIiwid2VicGFjazovLy8uL1NvdXJjZS9WaWV3cy9TbGlkZXJWaWV3LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Bvc3RzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGRldmV4cHJlc3MvZHgtcmVhY3QtY2hhcnQtbWF0ZXJpYWwtdWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy1mb290ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkRhdGFDaGFydCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiZGF0YSIsImkiLCJwdXNoIiwiYXJndW1lbnQiLCJ2YWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJQYWdlRm9vdGVyIiwiaXRlbXMiLCJ0aXRsZSIsIm9wZW5FeHRlcm5hbCIsIk5hdkJhciIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJidWxsZXQiLCJtYXJnaW4iLCJ0cmFuc2Zvcm0iLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIlBvc3RJbnB1dCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwb3N0Iiwic3RhdGUiLCJkZXNjcmlwdGlvbiIsImNvbnRleHQiLCJQb3N0U2VydmljZSIsIkFkZCIsInNldFN0YXRlIiwidGVtcCIsImJhY2tncm91bmRDb2xvciIsImV2ZW50IiwidGFyZ2V0Iiwic3VtYml0IiwidGhlbWUiLCJ3aWR0aCIsIm1heFdpZHRoIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsImlubGluZSIsIlBvc3RMaXN0IiwicG9zdHMiLCJtYXAiLCJlbGVtZW50Iiwia2V5Iiwic3Vic3RyaW5nIiwiZGVsZXRlUG9zdCIsImlkIiwiRGVsZXRlIiwib25lQ2FyZCIsInVuaXF1ZUtleSIsInBhZGRpbmciLCJkYXRlIiwiaWZFbXB0eSIsIlBvc3RSb2xsIiwibGVuZ3RoIiwic2xpZGVJbWFnZXMiLCJTbGlkZXJTaG93IiwiTWFpblBhZ2UiLCJmZXRjaGVkUG9zdHMiLCJHZXRBbGwiLCJibG9nUG9zdHMiLCJjb21wb25lbnREaWRNb3VudCIsImdldEJsb2dQb3N0IiwianNvbiIsInJlcXVpcmUiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwiVVJMIiwic3RhdHVzIiwiRGF0ZSIsInRvU3RyaW5nIiwiZGVsZXRlIiwiQ2hhcnRWaWV3IiwiRm9vdGVyVmlldyIsIk5hdml2YXRpb25CYXJWaWV3IiwiUG9zdElucHV0VmlldyIsIlBvc3RMaXN0VmlldyIsIlBvc3RSb2xsVmlldyIsIlNsaWRlclZpZXciLCJNYWluIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FB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LE1BQU11QyxVQUFOLFNBQXlCMUYsK0NBQXpCLENBQW1DO0FBQzlDQyxRQUFNLEdBQUc7QUFDTCx3QkFDRyxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREg7QUFHSDs7QUFMNkMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIbEQ7QUFDZSxTQUFTMEYsSUFBVCxHQUFnQjtBQUMzQixzQkFDSSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFHSCxDOzs7Ozs7Ozs7OztBQ0xELG1FOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Bvc3RzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Bvc3RzL21haW4uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQge1xyXG4gICAgQXJndW1lbnRBeGlzLFxyXG4gICAgVmFsdWVBeGlzLFxyXG4gICAgQ2hhcnQsXHJcbiAgICBMaW5lU2VyaWVzLFxyXG59IGZyb20gJ0BkZXZleHByZXNzL2R4LXJlYWN0LWNoYXJ0LW1hdGVyaWFsLXVpJztcclxuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlcic7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXVxyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAyMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaCh7IGFyZ3VtZW50OiBpLCB2YWx1ZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17e1xyXG5cclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiR3JhZmlrXCJcclxuICAgICAgICAgICAgICAgICAgICBzdWJoZWFkZXI9XCJaYW1hbi1EZcSfZXIgR3JhZmnEn2lcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJndW1lbnRBeGlzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWYWx1ZUF4aXMgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVTZXJpZXMgdmFsdWVGaWVsZD1cInZhbHVlXCIgYXJndW1lbnRGaWVsZD1cImFyZ3VtZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NoYXJ0PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPC9DYXJkID5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgRm9vdGVyIGZyb20gJ3JjLWZvb3Rlcic7XHJcbmltcG9ydCAncmMtZm9vdGVyL2Fzc2V0cy9pbmRleC5jc3MnOyAvLyBpbXBvcnQgJ3JjLWZvb3Rlci9hc3NzZXRzL2luZGV4Lmxlc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKDxGb290ZXJcclxuICAgICAgICAgICAgY29sdW1ucz17W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOltcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlOlwiSGVscFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlOlwiQ29tbXVuaXR5XCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6XCJBZHZpc29yaWVzXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6XCJTdGF0dXNcIn0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6XCJDb250YWN0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1N1cHBvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5FeHRlcm5hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6XCJBYm91dFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlOlwiQmxvZ1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlOlwiUHJlc3NcIn1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29tcGFueScsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkV4dGVybmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6XCJQb2xpY2llc1wifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlOlwiVGVybXMgb2YgVXNlXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGU6XCJDb2RlIG9mIENvbmR1Y3RcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZTpcIlByaXZhY3lcIn0sIFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUZXJtcyAmIFBvbGljaWVzJyxcclxuICAgICAgICAgICAgICAgICAgICBvcGVuRXh0ZXJuYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjM0Y1MUI1XCJcclxuICAgICAgICAgICAgYm90dG9tPVwiTWFkZSB3aXRoIOKdpO+4jyBieSBpa2JhbGthemFuY1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TWVudTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+UHJvZmlsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Qb3N0bGFyPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICApXHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBQb3N0U2VydmljZSBmcm9tICcuLi9TZXJ2aWNlcy9Qb3N0U2VydmljZSdcclxuaW1wb3J0IHsgT3V0bGluZWRJbnB1dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDI3NSxcclxuICAgIH0sXHJcbiAgICBidWxsZXQ6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICBtYXJnaW46ICcwIDJweCcsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICB9LFxyXG4gICAgcG9zOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMixcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgdGl0bGU6XCJcIixcclxuICAgICAgICAgICAgY29udGV4dDpcIlwiLFxyXG4gICAgICAgICAgICB0ZW1wOmZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3VtYml0ID0gKCkgPT57XHJcbiAgICAgICAgbGV0IHBvc3QgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlIDogdGhpcy5zdGF0ZS50aXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiB0aGlzLnN0YXRlLmNvbnRleHRcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgUG9zdFNlcnZpY2UuQWRkKHBvc3QpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RlbXA6ZmFsc2V9KVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17dXNlU3R5bGVzLnJvb3R9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjRjdGN0Y3XCIgfX0gdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNsYXNzTmFtZT17dXNlU3R5bGVzLnRpdGxlfSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFllbmkgYmxvZyB5YXohXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCYcWfbMSxa1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpPT57IHRoaXMuc2V0U3RhdGUoe3RpdGxlOmV2ZW50LnRhcmdldC52YWx1ZX0pIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLEsMOnZXJpa1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInlhei4uLiB5YXouLi4geWF6Li4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KT0+eyB0aGlzLnNldFN0YXRlKHtjb250ZXh0OmV2ZW50LnRhcmdldC52YWx1ZX0pIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKT0+e3RoaXMuc3VtYml0KCl9fSBzaXplPVwic21hbGxcIj5Hw7ZuZGVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xyXG5pbXBvcnQgeyBzaGFkb3dzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N5c3RlbSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMzZjaCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgICB9LFxyXG4gICAgaW5saW5lOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2lubGluZScsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcmQgPlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiaW5mb1wiPlNvbiBQYXlsYcWfxLFsYW5hbGFyPC9BbGVydD5cclxuICAgICAgICAgICAgICAgIDxMaXN0IGNsYXNzTmFtZT17dXNlU3R5bGVzLnJvb3R9ID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucG9zdHMubWFwKChlbGVtZW50LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2VsZW1lbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e2VsZW1lbnQuZGVzY3JpcHRpb24uc3Vic3RyaW5nKDAsIDUwKSArIFwiLi4uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBQb3N0U2VydmljZSBmcm9tICcuLi8uLi9Tb3VyY2UvU2VydmljZXMvUG9zdFNlcnZpY2UnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogMzQ1LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgIGRlbGV0ZVBvc3QgPSBhc3luYyAoaWQpID0+IHtcclxuICBhd2FpdCBQb3N0U2VydmljZS5EZWxldGUoaWQpO1xyXG59XHJcblxyXG5jb25zdCBvbmVDYXJkID0gKHBvc3QsIHVuaXF1ZUtleSkgPT4ge1xyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPExpc3RJdGVtIGtleT17dW5pcXVlS2V5fSBzdHlsZT17eyBwYWRkaW5nOiAwLCBtYXJnaW5Cb3R0b206ICcycmVtJyB9fT5cclxuICAgICAgPENhcmQgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNGN0Y3RjdcIiB9fSBjbGFzc05hbWU9e3VzZVN0eWxlcy5yb290fT5cclxuICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxyXG4gICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9zdGF0ZWxlc3Mtd2h3d3Atc2NyZWVuYmVldGxlLWMvMjAxOS8xMC85NmNhODY5OC1hbGljaWEtbGV0dGVyYm94LmpwZ1wiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICB7cG9zdC5kZXNjcmlwdGlvbi5zdWJzdHJpbmcoMC4yMDApICsgXCIuLi5cIn1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAge3Bvc3QuZGF0ZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIExlYXJuIE1vcmVcclxuICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7ZGVsZXRlUG9zdChwb3N0LmlkKX19IHNpemU9XCJzbWFsbFwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvTGlzdEl0ZW0+XHJcblxyXG4gIClcclxufVxyXG5jb25zdCBpZkVtcHR5ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImgyXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgUGF5bGHFn8SxbWxhciB5w7xrbGVuaXlvci4uLlxyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RSb2xsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5wb3N0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBpZkVtcHR5KClcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3Qgc3R5bGU9e3sgcGFkZGluZzogMCB9fSA+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucG9zdHMubWFwKChlbGVtZW50LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgb25lQ2FyZChlbGVtZW50LCBrZXkpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IHNsaWRlSW1hZ2VzID0gW1xyXG4gICAgJ2h0dHBzOi8vd293c2xpZGVyLm5ldC9sb2NhbC1zbGlkZXJzL2RlbW8tMTAvZGF0YTEvaW1hZ2VzL3JvYWQyMjAwNTguanBnJyxcclxuICAgIFwiaHR0cHM6Ly93b3dzbGlkZXIubmV0L2xvY2FsLXNsaWRlcnMvZGVtby0xMC9kYXRhMS9pbWFnZXMvZmllbGQxNzU5NTlfMTkyMC5qcGdcIlxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IFwiMTAwJVwiICBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBcIjM1MFwiICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPSB7c2xpZGVJbWFnZXNbMV19XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiRmlyc3Qgc2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi8uLi9Tb3VyY2UvQ29tcG9uZW50cy9OYXZCYXInXHJcbmltcG9ydCBTbGlkZVNob3cgZnJvbSAnLi4vLi4vU291cmNlL0NvbXBvbmVudHMvU2xpZGVyJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFBvc3RTZXJ2aWNlIGZyb20gJy4uLy4uL1NvdXJjZS9TZXJ2aWNlcy9Qb3N0U2VydmljZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uLy4uL1NvdXJjZS9Db21wb25lbnRzL1Bvc3RMaXN0J1xyXG5pbXBvcnQgUG9zdFJvbGwgZnJvbSAnLi4vLi4vU291cmNlL0NvbXBvbmVudHMvUG9zdFJvbGwnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vU291cmNlL0NvbXBvbmVudHMvRm9vdGVyJ1xyXG5cclxuaW1wb3J0IEZvb3RlclZpZXcgZnJvbSAnLi4vVmlld3MvRm9vdGVyVmlldydcclxuaW1wb3J0IE5hdmlnYXRpb25CYXJWaWV3IGZyb20gJy4uL1ZpZXdzL05hdmlnYXRpb25CYXJWaWV3J1xyXG5pbXBvcnQgU2xpZGVyVmlldyBmcm9tICcuLi9WaWV3cy9TbGlkZXJWaWV3J1xyXG5pbXBvcnQgUG9zdExpc3RWaWV3IGZyb20gJy4uL1ZpZXdzL1Bvc3RMaXN0VmlldydcclxuaW1wb3J0IFBvc3RSb2xsVmlldyBmcm9tICcuLi9WaWV3cy9Qb3N0Um9sbFZpZXcnXHJcbmltcG9ydCBQb3N0SW5wdXRWaWV3IGZyb20gJy4uL1ZpZXdzL1Bvc3RJbnB1dFZpZXcnXHJcbmltcG9ydCBDaGFydFZpZXcgZnJvbSAnLi4vVmlld3MvQ2hhcnRWaWV3J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYmxvZ1Bvc3RzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmdldEJsb2dQb3N0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmxvZ1Bvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGZldGNoZWRQb3N0cyA9IGF3YWl0IFBvc3RTZXJ2aWNlLkdldEFsbCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBibG9nUG9zdHM6IGZldGNoZWRQb3N0c1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjZThlYWY2XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyVmlldyAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyVmlldyA+PC9TbGlkZXJWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHNwYWNpbmc9ezN9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9IG1kPXs0fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RMaXN0VmlldyBwb3N0cz17dGhpcy5zdGF0ZS5ibG9nUG9zdHN9ID48L1Bvc3RMaXN0Vmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhcnRWaWV3PjwvQ2hhcnRWaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0SW5wdXRWaWV3PjwvUG9zdElucHV0Vmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFJvbGxWaWV3IHBvc3RzPXt0aGlzLnN0YXRlLmJsb2dQb3N0c30+PC9Qb3N0Um9sbFZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXJWaWV3IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsInZhciBqc29uID0gcmVxdWlyZSgnLi4vLi4vZGIuanNvbicpO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFVSTCB9IGZyb20gXCIuL19jb25maWdcIjtcclxuXHJcbmNsYXNzIFBvc3RTZXJ2aWNlIHtcclxuICAgIGFzeW5jIEdldEFsbCgpIHtcclxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoVVJMICsgXCJwb3N0c1wiKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGpzb24ucG9zdHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBBZGQocG9zdCkge1xyXG4gICAgICAgIHBvc3QuZGF0ZSA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBwb3N0LmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChVUkwgKyBcInBvc3RzXCIscG9zdCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgIH1cclxuICAgIGFzeW5jIERlbGV0ZShpZCkge1xyXG4gICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShVUkwgKyBcInBvc3RzL1wiICsgaWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBvc3RTZXJ2aWNlKCk7IiwiZXhwb3J0IGNvbnN0IFVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL1wiOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGFydCBmcm9tICcuLi9Db21wb25lbnRzL0NoYXJ0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICA8Q2hhcnQvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0NvbXBvbmVudHMvRm9vdGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyVmlldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9OYXZCYXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpdmF0aW9uQmFyVmlldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgPE5hdkJhci8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQb3N0SW5wdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9Qb3N0SW5wdXQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0SW5wdXRWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICA8UG9zdElucHV0Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uL0NvbXBvbmVudHMvUG9zdExpc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0TGlzdFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgIDxQb3N0TGlzdCBwb3N0cz17dGhpcy5wcm9wcy5wb3N0c30vPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUG9zdFJvbGwgZnJvbSAnLi4vQ29tcG9uZW50cy9Qb3N0Um9sbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RSb2xsVmlldyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgPFBvc3RSb2xsIHBvc3RzPXt0aGlzLnByb3BzLnBvc3RzfS8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9TbGlkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICA8U2xpZGVyLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IE1haW5QYWdlIGZyb20gJy4uLy4uL1NvdXJjZS9QYWdlcy9NYWluUGFnZSdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5QYWdlPjwvTWFpblBhZ2U+XHJcbiAgICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGRldmV4cHJlc3MvZHgtcmVhY3QtY2hhcnQtbWF0ZXJpYWwtdWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJjLWZvb3RlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==