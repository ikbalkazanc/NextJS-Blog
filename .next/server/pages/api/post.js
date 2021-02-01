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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("s4Ji");


/***/ }),

/***/ "GhFg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");

// CONCATENATED MODULE: ./source/services/_config.js
const URL = "http://localhost:3001/";
// CONCATENATED MODULE: ./source/services/PostService.js
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

/* harmony default export */ var services_PostService = __webpack_exports__["a"] = (new PostService());

/***/ }),

/***/ "Pmoa":
/***/ (function(module, exports) {

module.exports = require("next");

/***/ }),

/***/ "Zb5a":
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ }),

/***/ "s4Ji":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next-connect"
var external_next_connect_ = __webpack_require__("Zb5a");
var external_next_connect_default = /*#__PURE__*/__webpack_require__.n(external_next_connect_);

// EXTERNAL MODULE: external "next"
var external_next_ = __webpack_require__("Pmoa");

// CONCATENATED MODULE: ./source/middlewares/AuthenticationMiddleware.js

async function Authencation(req, res, next) {
  console.log("auth");

  if (true) {
    next();
  } else {}
}
// EXTERNAL MODULE: ./source/services/PostService.js + 1 modules
var PostService = __webpack_require__("GhFg");

// CONCATENATED MODULE: ./pages/api/post/index.ts



/* harmony default export */ var api_post = __webpack_exports__["default"] = (external_next_connect_default()().use((req, res, next) => {
  console.log("custom middleware");
  next();
}).use(Authencation).get(async (req, res) => {
  var posts = await PostService["a" /* default */].GetAll();
  res.statusCode = 200;
  res.json(posts);
}).post(async (req, res) => {
  res.statusCode = 200;
  var post = await PostService["a" /* default */].Add(req.body);
  res.json(post);
}).delete(async (req, res) => {
  console.log(req.body.id);

  if (req.body.id == undefined) {
    res.statusCode = 400;
  } else {
    res.statusCode = 200;
    await PostService["a" /* default */].Delete(req.body.id);
  }

  res.end();
}));

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });