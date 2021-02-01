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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/post/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/post/index.ts":
/*!*********************************!*\
  !*** ./pages/api/post/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _source_services_PostService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../source/services/PostService */ "./source/services/PostService.js");

//import AuthenticationMiddleware from "../../../Source/Middlewares/AuthenticationMiddleware"

/* harmony default export */ __webpack_exports__["default"] = (next_connect__WEBPACK_IMPORTED_MODULE_0___default()().use((req, res, next) => {
  console.log("custom middleware");
  next();
}) //.use<NextApiRequest, NextApiResponse>(AuthenticationMiddleware)
.get(async (req, res) => {
  var posts = await _source_services_PostService__WEBPACK_IMPORTED_MODULE_1__["default"].GetAll();
  res.statusCode = 200;
  res.json(posts);
}).post(async (req, res) => {
  res.statusCode = 200;
  var post = await _source_services_PostService__WEBPACK_IMPORTED_MODULE_1__["default"].Add(req.body);
  res.json(post);
}).delete(async (req, res) => {
  console.log(req.body.id);

  if (req.body.id == undefined) {
    res.statusCode = 400;
  } else {
    res.statusCode = 200;
    await _source_services_PostService__WEBPACK_IMPORTED_MODULE_1__["default"].Delete(req.body.id);
  }

  res.end();
}));

/***/ }),

/***/ "./source/services/PostService.js":
/*!****************************************!*\
  !*** ./source/services/PostService.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_config */ "./source/services/_config.js");
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

/***/ "./source/services/_config.js":
/*!************************************!*\
  !*** ./source/services/_config.js ***!
  \************************************/
/*! exports provided: URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
const URL = "http://localhost:3001/";

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Bvc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vU291cmNlL1NlcnZpY2VzL1Bvc3RTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL1NvdXJjZS9TZXJ2aWNlcy9fY29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiXSwibmFtZXMiOlsibmV4dENvbm5lY3QiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY29uc29sZSIsImxvZyIsImdldCIsInBvc3RzIiwiUG9zdFNlcnZpY2UiLCJHZXRBbGwiLCJzdGF0dXNDb2RlIiwianNvbiIsInBvc3QiLCJBZGQiLCJib2R5IiwiZGVsZXRlIiwiaWQiLCJ1bmRlZmluZWQiLCJEZWxldGUiLCJlbmQiLCJVUkwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFZUEsa0hBQVcsR0FFckJDLEdBRlUsQ0FFMkIsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDdERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FGLE1BQUk7QUFDUCxDQUxVLEVBT1g7QUFQVyxDQVNWRyxHQVRVLENBU04sT0FBT0wsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3JCLE1BQUlLLEtBQUssR0FBRyxNQUFNQyxvRUFBVyxDQUFDQyxNQUFaLEVBQWxCO0FBQ0FQLEtBQUcsQ0FBQ1EsVUFBSixHQUFpQixHQUFqQjtBQUNBUixLQUFHLENBQUNTLElBQUosQ0FBU0osS0FBVDtBQUVILENBZFUsRUFnQlZLLElBaEJVLENBZ0JMLE9BQU9YLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUN0QkEsS0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsTUFBSUUsSUFBSSxHQUFHLE1BQU1KLG9FQUFXLENBQUNLLEdBQVosQ0FBZ0JaLEdBQUcsQ0FBQ2EsSUFBcEIsQ0FBakI7QUFDQVosS0FBRyxDQUFDUyxJQUFKLENBQVNDLElBQVQ7QUFFSCxDQXJCVSxFQXVCVkcsTUF2QlUsQ0F1QkgsT0FBT2QsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3hCRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBRyxDQUFDYSxJQUFKLENBQVNFLEVBQXJCOztBQUNBLE1BQUlmLEdBQUcsQ0FBQ2EsSUFBSixDQUFTRSxFQUFULElBQWVDLFNBQW5CLEVBQThCO0FBQzFCZixPQUFHLENBQUNRLFVBQUosR0FBaUIsR0FBakI7QUFDSCxHQUZELE1BR0s7QUFDRFIsT0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsVUFBTUYsb0VBQVcsQ0FBQ1UsTUFBWixDQUFtQmpCLEdBQUcsQ0FBQ2EsSUFBSixDQUFTRSxFQUE1QixDQUFOO0FBQ0g7O0FBQ0RkLEtBQUcsQ0FBQ2lCLEdBQUo7QUFDSCxDQWpDVSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1YLFdBQU4sQ0FBa0I7QUFDZCxRQUFNQyxNQUFOLEdBQWU7QUFDWDtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUSxXQUFPLEVBQVA7QUFDSDs7QUFDRCxRQUFNSSxHQUFOLENBQVVELElBQVYsRUFBZ0I7QUFDWjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRLFdBQU8sRUFBUDtBQUNIOztBQUNELFFBQU1NLE1BQU4sQ0FBYUYsRUFBYixFQUFpQjtBQUNiO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUSxXQUFPLEVBQVA7QUFDSDs7QUFwQ2E7O0FBdUNILG1FQUFJUixXQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBTyxNQUFNWSxHQUFHLEdBQUcsd0JBQVosQzs7Ozs7Ozs7Ozs7QUNBUCxrQzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9hcGkvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3Bvc3QvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuaW1wb3J0IG5leHQsIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbi8vaW1wb3J0IEF1dGhlbnRpY2F0aW9uTWlkZGxld2FyZSBmcm9tIFwiLi4vLi4vLi4vU291cmNlL01pZGRsZXdhcmVzL0F1dGhlbnRpY2F0aW9uTWlkZGxld2FyZVwiXHJcbmltcG9ydCBQb3N0U2VydmljZSBmcm9tICcuLi8uLi8uLi9zb3VyY2Uvc2VydmljZXMvUG9zdFNlcnZpY2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXh0Q29ubmVjdDxOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlPigpXHJcblxyXG4gICAgLnVzZTxOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlPigocmVxLCByZXMsIG5leHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImN1c3RvbSBtaWRkbGV3YXJlXCIpXHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLy51c2U8TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZT4oQXV0aGVudGljYXRpb25NaWRkbGV3YXJlKVxyXG5cclxuICAgIC5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAgICAgdmFyIHBvc3RzID0gYXdhaXQgUG9zdFNlcnZpY2UuR2V0QWxsKCk7XHJcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDBcclxuICAgICAgICByZXMuanNvbihwb3N0cylcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIC5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwXHJcbiAgICAgICAgdmFyIHBvc3QgPSBhd2FpdCBQb3N0U2VydmljZS5BZGQocmVxLmJvZHkpO1xyXG4gICAgICAgIHJlcy5qc29uKHBvc3QpXHJcblxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLmRlbGV0ZShhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keS5pZClcclxuICAgICAgICBpZiAocmVxLmJvZHkuaWQgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAwICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMFxyXG4gICAgICAgICAgICBhd2FpdCBQb3N0U2VydmljZS5EZWxldGUocmVxLmJvZHkuaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXMuZW5kKCk7XHJcbiAgICB9KTtcclxuXHJcbiIsIi8vdmFyIGpzb24gPSByZXF1aXJlKCcuLi8uLi9kYi5qc29uJyk7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgVVJMIH0gZnJvbSBcIi4vX2NvbmZpZ1wiO1xyXG5cclxuY2xhc3MgUG9zdFNlcnZpY2Uge1xyXG4gICAgYXN5bmMgR2V0QWxsKCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFVSTCArIFwicG9zdHNcIik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgcmV0dXJuIGpzb24ucG9zdHNcclxuICAgICAgICB9Ki9cclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICAgIGFzeW5jIEFkZChwb3N0KSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICBwb3N0LmRhdGUgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcG9zdC5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChVUkwgKyBcInBvc3RzXCIsIHBvc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9Ki9cclxuICAgICAgICByZXR1cm4ge31cclxuICAgIH1cclxuICAgIGFzeW5jIERlbGV0ZShpZCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKFVSTCArIFwicG9zdHMvXCIgKyBpZC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgcmV0dXJuIHt9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQb3N0U2VydmljZSgpOyIsImV4cG9ydCBjb25zdCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==