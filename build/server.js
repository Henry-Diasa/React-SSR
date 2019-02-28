/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/express-http-proxy/app/steps/buildProxyReq.js":
/*!********************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/buildProxyReq.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nvar requestOptions = __webpack_require__(/*! ../../lib/requestOptions */ \"./node_modules/express-http-proxy/lib/requestOptions.js\");\n\nfunction buildProxyReq(Container) {\n  var req = Container.user.req;\n  var res = Container.user.res;\n  var options = Container.options;\n  var host = Container.proxy.host;\n  var parseBody = !options.parseReqBody ? Promise.resolve(null) : requestOptions.bodyContent(req, res, options);\n  var createReqOptions = requestOptions.create(req, res, options, host);\n  return Promise.all([parseBody, createReqOptions]).then(function (responseArray) {\n    Container.proxy.bodyContent = responseArray[0];\n    Container.proxy.reqBuilder = responseArray[1];\n    debug('proxy request options:', Container.proxy.reqBuilder);\n    return Container;\n  });\n}\n\nmodule.exports = buildProxyReq;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/buildProxyReq.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/copyProxyResHeadersToUserRes.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/copyProxyResHeadersToUserRes.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction copyProxyResHeadersToUserRes(container) {\n  return new Promise(function (resolve) {\n    var res = container.user.res;\n    var rsp = container.proxy.res;\n\n    if (!res.headersSent) {\n      res.status(rsp.statusCode);\n      Object.keys(rsp.headers).filter(function (item) {\n        return item !== 'transfer-encoding';\n      }).forEach(function (item) {\n        res.set(item, rsp.headers[item]);\n      });\n    }\n\n    resolve(container);\n  });\n}\n\nmodule.exports = copyProxyResHeadersToUserRes;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/copyProxyResHeadersToUserRes.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/decorateProxyReqBody.js":
/*!***************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/decorateProxyReqBody.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nfunction defaultDecorator(proxyReqOptBody\n/*, userReq */\n) {\n  return proxyReqOptBody;\n}\n\nfunction decorateProxyReqBody(container) {\n  var userDecorator = container.options.proxyReqBodyDecorator;\n  var resolverFn = userDecorator || defaultDecorator;\n\n  if (userDecorator) {\n    debug('using custom proxyReqBodyDecorator');\n  }\n\n  return Promise.resolve(resolverFn(container.proxy.bodyContent, container.user.req)).then(function (bodyContent) {\n    container.proxy.bodyContent = bodyContent;\n    return Promise.resolve(container);\n  });\n}\n\nmodule.exports = decorateProxyReqBody;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/decorateProxyReqBody.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/decorateProxyReqOpts.js":
/*!***************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/decorateProxyReqOpts.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nfunction defaultDecorator(proxyReqOptBuilder\n/*, userReq */\n) {\n  return proxyReqOptBuilder;\n}\n\nfunction decorateProxyReqOpt(container) {\n  var resolverFn = container.options.proxyReqOptDecorator || defaultDecorator;\n  return Promise.resolve(resolverFn(container.proxy.reqBuilder, container.user.req)).then(function (processedReqOpts) {\n    delete processedReqOpts.params;\n    container.proxy.reqBuilder = processedReqOpts;\n    debug('Request options (after processing): %o', processedReqOpts);\n    return Promise.resolve(container);\n  });\n}\n\nmodule.exports = decorateProxyReqOpt;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/decorateProxyReqOpts.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/decorateUserRes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/decorateUserRes.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar as = __webpack_require__(/*! ../../lib/as.js */ \"./node_modules/express-http-proxy/lib/as.js\");\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nvar zlib = __webpack_require__(/*! zlib */ \"zlib\");\n\nfunction isResGzipped(res) {\n  return res.headers['content-encoding'] === 'gzip';\n}\n\nfunction zipOrUnzip(method) {\n  return function (rspData, res) {\n    return isResGzipped(res) && rspData.length ? zlib[method](rspData) : rspData;\n  };\n}\n\nvar maybeUnzipResponse = zipOrUnzip('gunzipSync');\nvar maybeZipResponse = zipOrUnzip('gzipSync');\n\nfunction verifyBuffer(rspd, reject) {\n  if (!Buffer.isBuffer(rspd)) {\n    return reject(new Error('userResDecorator should return string or buffer as data'));\n  }\n}\n\nfunction updateHeaders(res, rspdBefore, rspdAfter, reject) {\n  if (!res.headersSent) {\n    res.set('content-length', rspdAfter.length);\n  } else if (rspdAfter.length !== rspdBefore.length) {\n    var error = '\"Content-Length\" is already sent,' + 'the length of response data can not be changed';\n    return reject(new Error(error));\n  }\n}\n\nfunction decorateProxyResBody(container) {\n  var resolverFn = container.options.userResDecorator;\n\n  if (!resolverFn) {\n    return Promise.resolve(container);\n  }\n\n  var proxyResData = maybeUnzipResponse(container.proxy.resData, container.proxy.res);\n  var proxyRes = container.proxy.res;\n  var req = container.user.req;\n  var res = container.user.res;\n\n  if (res.statusCode === 304) {\n    debug('Skipping userResDecorator on response 304');\n    return Promise.resolve(container);\n  }\n\n  return Promise.resolve(resolverFn(proxyRes, proxyResData, req, res)).then(function (modifiedResData) {\n    return new Promise(function (resolve, reject) {\n      var rspd = as.buffer(modifiedResData, container.options);\n      verifyBuffer(rspd, reject);\n      updateHeaders(res, proxyResData, rspd, reject);\n      container.proxy.resData = maybeZipResponse(rspd, container.proxy.res);\n      resolve(container);\n    });\n  });\n}\n\nmodule.exports = decorateProxyResBody;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/decorateUserRes.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/decorateUserResHeaders.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/decorateUserResHeaders.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction decorateUserResHeaders(container) {\n  var resolverFn = container.options.userResHeaderDecorator;\n  var headers = container.user.res._headers;\n\n  if (!resolverFn) {\n    return Promise.resolve(container);\n  }\n\n  return Promise.resolve(resolverFn(headers, container.user.req, container.user.res, container.proxy.req, container.proxy.res)).then(function (headers) {\n    return new Promise(function (resolve) {\n      container.user.res.set(headers);\n      resolve(container);\n    });\n  });\n}\n\nmodule.exports = decorateUserResHeaders;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/decorateUserResHeaders.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/filterUserRequest.js":
/*!************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/filterUserRequest.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" // No-op version of filter.  Allows everything!\n\nfunction defaultFilter(proxyReqOptBuilder, userReq) {\n  // eslint-disable-line\n  return true;\n}\n\nfunction filterUserRequest(container) {\n  var resolverFn = container.options.filter || defaultFilter;\n  return Promise.resolve(resolverFn(container.user.req, container.user.res)).then(function (shouldIContinue) {\n    if (shouldIContinue) {\n      return Promise.resolve(container);\n    } else {\n      return Promise.reject(); // reject with no args should simply call next()\n    }\n  });\n}\n\nmodule.exports = filterUserRequest;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/filterUserRequest.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/handleProxyErrors.js":
/*!************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/handleProxyErrors.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nfunction connectionResetHandler(err, res) {\n  if (err && err.code === 'ECONNRESET') {\n    debug('Error: Connection reset due to timeout.');\n    res.setHeader('X-Timeout-Reason', 'express-http-proxy reset the request.');\n    res.writeHead(504, {\n      'Content-Type': 'text/plain'\n    });\n    res.end();\n  }\n}\n\nfunction handleProxyErrors(err, res, next) {\n  switch (err && err.code) {\n    case 'ECONNRESET':\n      {\n        return connectionResetHandler(err, res, next);\n      }\n\n    default:\n      {\n        next(err);\n      }\n  }\n}\n\nmodule.exports = handleProxyErrors;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/handleProxyErrors.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/maybeSkipToNextHandler.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/maybeSkipToNextHandler.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction defaultSkipFilter()\n/* res */\n{\n  return false;\n}\n\nfunction maybeSkipToNextHandler(container) {\n  var resolverFn = container.options.skipToNextHandlerFilter || defaultSkipFilter;\n  return Promise.resolve(resolverFn(container.proxy.res)).then(function (shouldSkipToNext) {\n    if (shouldSkipToNext) {\n      container.user.res.expressHttpProxy = container.proxy;\n      return Promise.reject(container.user.next());\n    } else {\n      return Promise.resolve(container);\n    }\n  });\n}\n\nmodule.exports = maybeSkipToNextHandler;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/maybeSkipToNextHandler.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/prepareProxyReq.js":
/*!**********************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/prepareProxyReq.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar as = __webpack_require__(/*! ../../lib/as */ \"./node_modules/express-http-proxy/lib/as.js\");\n\nfunction getContentLength(body) {\n  var result;\n\n  if (Buffer.isBuffer(body)) {\n    // Buffer\n    result = body.length;\n  } else if (typeof body === 'string') {\n    result = Buffer.byteLength(body);\n  }\n\n  return result;\n}\n\nfunction prepareProxyReq(container) {\n  return new Promise(function (resolve) {\n    var bodyContent = container.proxy.bodyContent;\n    var reqOpt = container.proxy.reqBuilder;\n\n    if (bodyContent) {\n      bodyContent = container.options.reqAsBuffer ? as.buffer(bodyContent, container.options) : as.bufferOrString(bodyContent);\n      reqOpt.headers['content-length'] = getContentLength(bodyContent);\n\n      if (container.options.reqBodyEncoding) {\n        reqOpt.headers['Accept-Charset'] = container.options.reqBodyEncoding;\n      }\n    }\n\n    container.proxy.bodyContent = bodyContent;\n    resolve(container);\n  });\n}\n\nmodule.exports = prepareProxyReq;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/prepareProxyReq.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/resolveProxyHost.js":
/*!***********************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/resolveProxyHost.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar requestOptions = __webpack_require__(/*! ../../lib/requestOptions */ \"./node_modules/express-http-proxy/lib/requestOptions.js\");\n\nfunction resolveProxyHost(container) {\n  var parsedHost;\n\n  if (container.options.memoizeHost && container.options.memoizedHost) {\n    parsedHost = container.options.memoizedHost;\n  } else {\n    parsedHost = requestOptions.parseHost(container);\n  }\n\n  container.proxy.reqBuilder.host = parsedHost.host;\n  container.proxy.reqBuilder.port = container.options.port || parsedHost.port;\n  container.proxy.requestModule = parsedHost.module;\n  return Promise.resolve(container);\n}\n\nmodule.exports = resolveProxyHost;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/resolveProxyHost.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/resolveProxyReqPath.js":
/*!**************************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/resolveProxyReqPath.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar url = __webpack_require__(/*! url */ \"url\");\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nfunction defaultProxyReqPathResolver(req) {\n  return url.parse(req.url).path;\n}\n\nfunction resolveProxyReqPath(container) {\n  var resolverFn = container.options.proxyReqPathResolver || defaultProxyReqPathResolver;\n  return Promise.resolve(resolverFn(container.user.req)).then(function (resolvedPath) {\n    container.proxy.reqBuilder.path = resolvedPath;\n    debug('resolved proxy path:', resolvedPath);\n    return Promise.resolve(container);\n  });\n}\n\nmodule.exports = resolveProxyReqPath;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/resolveProxyReqPath.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/sendProxyRequest.js":
/*!***********************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/sendProxyRequest.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar chunkLength = __webpack_require__(/*! ../../lib/chunkLength */ \"./node_modules/express-http-proxy/lib/chunkLength.js\");\n\nfunction sendProxyRequest(Container) {\n  var req = Container.user.req;\n  var bodyContent = Container.proxy.bodyContent;\n  var reqOpt = Container.proxy.reqBuilder;\n  var options = Container.options;\n  return new Promise(function (resolve, reject) {\n    var protocol = Container.proxy.requestModule;\n    var proxyReq = Container.proxy.req = protocol.request(reqOpt, function (rsp) {\n      if (options.stream) {\n        Container.proxy.res = rsp;\n        return resolve(Container);\n      }\n\n      var chunks = [];\n      rsp.on('data', function (chunk) {\n        chunks.push(chunk);\n      });\n      rsp.on('end', function () {\n        Container.proxy.res = rsp;\n        Container.proxy.resData = Buffer.concat(chunks, chunkLength(chunks));\n        resolve(Container);\n      });\n      rsp.on('error', reject);\n    });\n    proxyReq.on('socket', function (socket) {\n      if (options.timeout) {\n        socket.setTimeout(options.timeout, function () {\n          proxyReq.abort();\n        });\n      }\n    });\n    proxyReq.on('error', reject); // this guy should go elsewhere, down the chain\n\n    if (options.parseReqBody) {\n      // We are parsing the body ourselves so we need to write the body content\n      // and then manually end the request.\n      //if (bodyContent instanceof Object) {\n      //throw new Error\n      //debugger;\n      //bodyContent = JSON.stringify(bodyContent);\n      //}\n      if (bodyContent.length) {\n        var body = bodyContent;\n        var contentType = proxyReq.getHeader('Content-Type');\n\n        if (contentType === 'x-www-form-urlencoded' || contentType === 'application/x-www-form-urlencoded') {\n          try {\n            var params = JSON.parse(body);\n            body = Object.keys(params).map(function (k) {\n              return k + '=' + params[k];\n            }).join('&');\n          } catch (e) {// bodyContent is not json-format\n          }\n        }\n\n        proxyReq.setHeader('Content-Length', Buffer.byteLength(body));\n        proxyReq.write(body);\n      }\n\n      proxyReq.end();\n    } else {\n      // Pipe will call end when it has completely read from the request.\n      req.pipe(proxyReq);\n    }\n\n    req.on('aborted', function () {\n      // reject?\n      proxyReq.abort();\n    });\n  });\n}\n\nmodule.exports = sendProxyRequest;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/sendProxyRequest.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/app/steps/sendUserRes.js":
/*!******************************************************************!*\
  !*** ./node_modules/express-http-proxy/app/steps/sendUserRes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sendUserRes(Container) {\n  if (!Container.user.res.headersSent) {\n    if (Container.options.stream) {\n      Container.proxy.res.pipe(Container.user.res);\n    } else {\n      Container.user.res.send(Container.proxy.resData);\n    }\n  }\n\n  return Promise.resolve(Container);\n}\n\nmodule.exports = sendUserRes;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/app/steps/sendUserRes.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/index.js":
/*!**************************************************!*\
  !*** ./node_modules/express-http-proxy/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" // * Breaks proxying into a series of discrete steps, many of which can be swapped out by authors.\n// * Uses Promises to support async.\n// * Uses a quasi-Global called Container to tidy up the argument passing between the major work-flow steps.\n\nvar ScopeContainer = __webpack_require__(/*! ./lib/scopeContainer */ \"./node_modules/express-http-proxy/lib/scopeContainer.js\");\n\nvar assert = __webpack_require__(/*! assert */ \"assert\");\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nvar buildProxyReq = __webpack_require__(/*! ./app/steps/buildProxyReq */ \"./node_modules/express-http-proxy/app/steps/buildProxyReq.js\");\n\nvar copyProxyResHeadersToUserRes = __webpack_require__(/*! ./app/steps/copyProxyResHeadersToUserRes */ \"./node_modules/express-http-proxy/app/steps/copyProxyResHeadersToUserRes.js\");\n\nvar decorateProxyReqBody = __webpack_require__(/*! ./app/steps/decorateProxyReqBody */ \"./node_modules/express-http-proxy/app/steps/decorateProxyReqBody.js\");\n\nvar decorateProxyReqOpts = __webpack_require__(/*! ./app/steps/decorateProxyReqOpts */ \"./node_modules/express-http-proxy/app/steps/decorateProxyReqOpts.js\");\n\nvar decorateUserRes = __webpack_require__(/*! ./app/steps/decorateUserRes */ \"./node_modules/express-http-proxy/app/steps/decorateUserRes.js\");\n\nvar decorateUserResHeaders = __webpack_require__(/*! ./app/steps/decorateUserResHeaders */ \"./node_modules/express-http-proxy/app/steps/decorateUserResHeaders.js\");\n\nvar filterUserRequest = __webpack_require__(/*! ./app/steps/filterUserRequest */ \"./node_modules/express-http-proxy/app/steps/filterUserRequest.js\");\n\nvar handleProxyErrors = __webpack_require__(/*! ./app/steps/handleProxyErrors */ \"./node_modules/express-http-proxy/app/steps/handleProxyErrors.js\");\n\nvar maybeSkipToNextHandler = __webpack_require__(/*! ./app/steps/maybeSkipToNextHandler */ \"./node_modules/express-http-proxy/app/steps/maybeSkipToNextHandler.js\");\n\nvar prepareProxyReq = __webpack_require__(/*! ./app/steps/prepareProxyReq */ \"./node_modules/express-http-proxy/app/steps/prepareProxyReq.js\");\n\nvar resolveProxyHost = __webpack_require__(/*! ./app/steps/resolveProxyHost */ \"./node_modules/express-http-proxy/app/steps/resolveProxyHost.js\");\n\nvar resolveProxyReqPath = __webpack_require__(/*! ./app/steps/resolveProxyReqPath */ \"./node_modules/express-http-proxy/app/steps/resolveProxyReqPath.js\");\n\nvar sendProxyRequest = __webpack_require__(/*! ./app/steps/sendProxyRequest */ \"./node_modules/express-http-proxy/app/steps/sendProxyRequest.js\");\n\nvar sendUserRes = __webpack_require__(/*! ./app/steps/sendUserRes */ \"./node_modules/express-http-proxy/app/steps/sendUserRes.js\");\n\nmodule.exports = function proxy(host, userOptions) {\n  assert(host, 'Host should not be empty');\n  return function handleProxy(req, res, next) {\n    debug('[start proxy] ' + req.path);\n    var container = new ScopeContainer(req, res, next, host, userOptions);\n    filterUserRequest(container).then(buildProxyReq).then(resolveProxyHost).then(decorateProxyReqOpts).then(resolveProxyReqPath).then(decorateProxyReqBody).then(prepareProxyReq).then(sendProxyRequest).then(maybeSkipToNextHandler).then(copyProxyResHeadersToUserRes).then(decorateUserResHeaders).then(decorateUserRes).then(sendUserRes).catch(function (err) {\n      // I sometimes reject without an error to shortcircuit the remaining\n      // steps and return control to the host application.\n      if (err) {\n        var resolver = container.options.proxyErrorHandler ? container.options.proxyErrorHandler : handleProxyErrors;\n        resolver(err, res, next);\n      } else {\n        next();\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/index.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/lib/as.js":
/*!***************************************************!*\
  !*** ./node_modules/express-http-proxy/lib/as.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n * Trivial convenience methods for parsing Buffers\n */\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asBuffer(body, options) {\n  var ret;\n\n  if (Buffer.isBuffer(body)) {\n    ret = body;\n  } else if (_typeof(body) === 'object') {\n    ret = new Buffer(JSON.stringify(body), options.reqBodyEncoding);\n  } else if (typeof body === 'string') {\n    ret = new Buffer(body, options.reqBodyEncodeing);\n  }\n\n  return ret;\n}\n\nfunction asBufferOrString(body) {\n  var ret;\n\n  if (Buffer.isBuffer(body)) {\n    ret = body;\n  } else if (_typeof(body) === 'object') {\n    ret = JSON.stringify(body);\n  } else if (typeof body === 'string') {\n    ret = body;\n  }\n\n  return ret;\n}\n\nmodule.exports = {\n  buffer: asBuffer,\n  bufferOrString: asBufferOrString\n};\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/lib/as.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/lib/chunkLength.js":
/*!************************************************************!*\
  !*** ./node_modules/express-http-proxy/lib/chunkLength.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction chunkLength(chunks) {\n  return chunks.reduce(function (len, buf) {\n    return len + buf.length;\n  }, 0);\n}\n\nmodule.exports = chunkLength;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/lib/chunkLength.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/lib/isUnset.js":
/*!********************************************************!*\
  !*** ./node_modules/express-http-proxy/lib/isUnset.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (val) {\n  return typeof val === 'undefined' || val === '' || val === null;\n};\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/lib/isUnset.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/lib/requestOptions.js":
/*!***************************************************************!*\
  !*** ./node_modules/express-http-proxy/lib/requestOptions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\nvar https = __webpack_require__(/*! https */ \"https\");\n\nvar url = __webpack_require__(/*! url */ \"url\");\n\nvar getRawBody = __webpack_require__(/*! raw-body */ \"raw-body\");\n\nvar isUnset = __webpack_require__(/*! ./isUnset */ \"./node_modules/express-http-proxy/lib/isUnset.js\");\n\nfunction extend(obj, source, skips) {\n  if (!source) {\n    return obj;\n  }\n\n  for (var prop in source) {\n    if (!skips || skips.indexOf(prop) === -1) {\n      obj[prop] = source[prop];\n    }\n  }\n\n  return obj;\n}\n\nfunction parseHost(Container) {\n  var host = Container.params.host;\n  var req = Container.user.req;\n  var options = Container.options;\n  host = typeof host === 'function' ? host(req) : host.toString();\n\n  if (!host) {\n    return new Error('Empty host parameter');\n  }\n\n  if (!/http(s)?:\\/\\//.test(host)) {\n    host = 'http://' + host;\n  }\n\n  var parsed = url.parse(host);\n\n  if (!parsed.hostname) {\n    return new Error('Unable to parse hostname, possibly missing protocol://?');\n  }\n\n  var ishttps = options.https || parsed.protocol === 'https:';\n  return {\n    host: parsed.hostname,\n    port: parsed.port || (ishttps ? 443 : 80),\n    module: ishttps ? https : http\n  };\n}\n\nfunction reqHeaders(req, options) {\n  var headers = options.headers || {};\n  var skipHdrs = ['connection', 'content-length'];\n\n  if (!options.preserveHostHdr) {\n    skipHdrs.push('host');\n  }\n\n  var hds = extend(headers, req.headers, skipHdrs);\n  hds.connection = 'close';\n  return hds;\n}\n\nfunction createRequestOptions(req, res, options) {\n  // prepare proxyRequest\n  var reqOpt = {\n    headers: reqHeaders(req, options),\n    method: req.method,\n    path: req.path,\n    params: req.params\n  };\n\n  if (options.preserveReqSession) {\n    reqOpt.session = req.session;\n  }\n\n  return Promise.resolve(reqOpt);\n} // extract to bodyContent object\n\n\nfunction bodyContent(req, res, options) {\n  var parseReqBody = isUnset(options.parseReqBody) ? true : options.parseReqBody;\n\n  function maybeParseBody(req, limit) {\n    if (req.body) {\n      return Promise.resolve(req.body);\n    } else {\n      // Returns a promise if no callback specified and global Promise exists.\n      return getRawBody(req, {\n        length: req.headers['content-length'],\n        limit: limit\n      });\n    }\n  }\n\n  if (parseReqBody) {\n    return maybeParseBody(req, options.limit);\n  }\n}\n\nmodule.exports = {\n  create: createRequestOptions,\n  bodyContent: bodyContent,\n  parseHost: parseHost\n};\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/lib/requestOptions.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/lib/resolveOptions.js":
/*!***************************************************************!*\
  !*** ./node_modules/express-http-proxy/lib/resolveOptions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debug = __webpack_require__(/*! debug */ \"debug\")('express-http-proxy');\n\nvar isUnset = __webpack_require__(/*! ../lib/isUnset */ \"./node_modules/express-http-proxy/lib/isUnset.js\");\n\nfunction resolveBodyEncoding(reqBodyEncoding) {\n  /* For reqBodyEncoding, these is a meaningful difference between null and\n    * undefined.  null should be passed forward as the value of reqBodyEncoding,\n    * and undefined should result in utf-8.\n    */\n  return reqBodyEncoding !== undefined ? reqBodyEncoding : 'utf-8';\n} // parse client arguments\n\n\nfunction resolveOptions(options) {\n  options = options || {};\n  var resolved;\n\n  if (options.decorateRequest) {\n    throw new Error('decorateRequest is REMOVED; use proxyReqOptDecorator and' + 'proxyReqBodyDecorator instead.  see README.md');\n  }\n\n  if (options.forwardPath || options.forwardPathAsync) {\n    console.warn('forwardPath and forwardPathAsync are DEPRECATED' + 'and should be replaced with proxyReqPathResolver');\n  }\n\n  if (options.intercept) {\n    console.warn('DEPRECATED: intercept. Use decorateUseRes instead.' + ' Please see README for more information.');\n  }\n\n  resolved = {\n    limit: options.limit || '1mb',\n    proxyReqPathResolver: options.proxyReqPathResolver || options.forwardPathAsync || options.forwardPath,\n    proxyReqOptDecorator: options.proxyReqOptDecorator,\n    proxyReqBodyDecorator: options.proxyReqBodyDecorator,\n    userResDecorator: options.userResDecorator || options.intercept,\n    userResHeaderDecorator: options.userResHeaderDecorator,\n    proxyErrorHandler: options.proxyErrorHandler,\n    filter: options.filter,\n    // For backwards compatability, we default to legacy behavior for newly added settings.\n    parseReqBody: isUnset(options.parseReqBody) ? true : options.parseReqBody,\n    preserveHostHdr: options.preserveHostHdr,\n    memoizeHost: isUnset(options.memoizeHost) ? true : options.memoizeHost,\n    reqBodyEncoding: resolveBodyEncoding(options.reqBodyEncoding),\n    skipToNextHandlerFilter: options.skipToNextHandlerFilter,\n    headers: options.headers,\n    preserveReqSession: options.preserveReqSession,\n    https: options.https,\n    port: options.port,\n    reqAsBuffer: options.reqAsBuffer,\n    timeout: options.timeout\n  }; // automatically opt into stream mode if no response modifiers are specified\n\n  resolved.stream = !resolved.skipToNextHandlerFilter && !resolved.userResDecorator && !resolved.userResHeaderDecorator;\n  debug(resolved);\n  return resolved;\n}\n\nmodule.exports = resolveOptions;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/lib/resolveOptions.js?");

/***/ }),

/***/ "./node_modules/express-http-proxy/lib/scopeContainer.js":
/*!***************************************************************!*\
  !*** ./node_modules/express-http-proxy/lib/scopeContainer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar resolveOptions = __webpack_require__(/*! ../lib/resolveOptions */ \"./node_modules/express-http-proxy/lib/resolveOptions.js\"); // The Container object is passed down the chain of Promises, with each one\n// of them mutating and returning Container.  The goal is that (eventually)\n// author using this library // could hook into/override any of these\n// workflow steps with a Promise or simple function.\n// Container for scoped arguments in a promise chain.  Each promise recieves\n// this as its argument, and returns it.\n//\n// Do not expose the details of this to hooks/user functions.\n\n\nfunction Container(req, res, next, host, userOptions) {\n  return {\n    user: {\n      req: req,\n      res: res,\n      next: next\n    },\n    proxy: {\n      req: undefined,\n      res: undefined,\n      resData: undefined,\n      // from proxy res\n      bodyContent: undefined,\n      // for proxy req\n      reqBuilder: {} // reqOpt, intended as first arg to http(s)?.request\n\n    },\n    options: resolveOptions(userOptions),\n    params: {\n      host: host,\n      userOptions: userOptions\n    }\n  };\n}\n\nmodule.exports = Container;\n\n//# sourceURL=webpack:///./node_modules/express-http-proxy/lib/scopeContainer.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n // 返回实例, 创建一个对个 基础对象\n// 这个会做\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/'\n}));\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Header =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n        className: \"navbar navbar-inverse navbar-fixed-top\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container-fluid\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"navbar-header\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        className: \"navbar-brand\",\n        to: \"/\"\n      }, \"SSR\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"nav navbar-nav\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\"\n      }, \"\\u9996\\u9875\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/counter\"\n      }, \"\\u8BA1\\u7B97\\u5668\")), this.props.user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/logout\"\n      }, \"\\u9000\\u51FA\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/profile\"\n      }, \"\\u4E2A\\u4EBA\\u4E2D\\u5FC3\"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/login\"\n      }, \"\\u767B\\u5F55\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"nav navbar-nav navbar-right\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, this.props.user ? this.props.user.username : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/login\"\n      }, \"\\u767B\\u5F55\"))))));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(function (state) {\n  return state.session;\n})(Header));\n/* \n  这边的逻辑是这样的\n  如果没有登录显示登录, 如果登录了显示退出 和 个人中心\n\n  右侧如果登录了显示用户名\n  如果没有登录提示去登录\n*/\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/container/App.js":
/*!******************************!*\
  !*** ./src/container/App.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container\",\n        style: {\n          marginTop: 70\n        }\n      }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(this.props.route.routes)));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/container/App.js?");

/***/ }),

/***/ "./src/container/Counter/index.js":
/*!****************************************!*\
  !*** ./src/container/Counter/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/counter */ \"./src/store/actions/counter.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Counter =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Counter, _Component);\n\n  function Counter() {\n    _classCallCheck(this, Counter);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Counter).apply(this, arguments));\n  }\n\n  _createClass(Counter, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.props.increment\n      }, \"\\u70B9\\u6211+1\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, this.props.number));\n    }\n  }]);\n\n  return Counter;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return state.counter;\n}, _store_actions_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Counter));\n\n//# sourceURL=webpack:///./src/container/Counter/index.js?");

/***/ }),

/***/ "./src/container/Home/index.js":
/*!*************************************!*\
  !*** ./src/container/Home/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/home */ \"./src/store/actions/home.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Home);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      name: 'home'\n    });\n\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.list.length == 0) {\n        this.props.getHomeList();\n      }\n    }\n    /*   static getDerivedStateFromProps(nextProps, prevState, c3, c4) {\n        console.dir(nextProps);\n        console.dir(prevState);\n        console.log('getDerivedStateFromProps');\n        console.dir(c3);\n        console.dir(c4);\n        nextProps.getHomeList()\n        return null\n      } */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"list-group\"\n      }, this.props.list.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: item.id,\n          className: \"list-group-item\"\n        }, item.name);\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"33333\")));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* 这边有一个难点, 有一个最难的点 */\n\n\nHome = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return state.home;\n}, _store_actions_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Home);\n\nHome.loadData = function (store) {\n  // dispatch 返回的就是一个 aciton 本身.\n  // 这边 return 回去就是 一个 promise !!! 这是一个 关键的 难点. 也是一个关键点.\n  return store.dispatch(_store_actions_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getHomeList());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/container/Home/index.js?");

/***/ }),

/***/ "./src/container/Login/index.js":
/*!**************************************!*\
  !*** ./src/container/Login/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/session */ \"./src/store/actions/session.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Login =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Login, _Component);\n\n  function Login() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Login);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      username: ''\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubmit\", function (event) {\n      event.preventDefault();\n\n      _this.props.login({\n        username: _this.state.username\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"form-group\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        htmlFor: \"username\"\n      }, \"\\u7528\\u6237\\u540D\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        className: \"form-control\",\n        value: this.state.username,\n        onChange: function onChange(event) {\n          _this2.setState({\n            username: event.target.value\n          });\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"form-group\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"submit\",\n        className: \"btn btn-primary\",\n        value: \"\\u767B\\u5F55\"\n      })))));\n    }\n  }]);\n\n  return Login;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return state.session;\n}, _store_actions_session__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Login));\n\n//# sourceURL=webpack:///./src/container/Login/index.js?");

/***/ }),

/***/ "./src/container/Logout/index.js":
/*!***************************************!*\
  !*** ./src/container/Logout/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar Logout =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Logout, _Component);\n\n  function Logout() {\n    _classCallCheck(this, Logout);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Logout).apply(this, arguments));\n  }\n\n  _createClass(Logout, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-3\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"form-group\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"submit\",\n        className: \"btn btn-primary\",\n        value: \"\\u9000\\u51FA\"\n      })))));\n    }\n  }]);\n\n  return Logout;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logout);\n\n//# sourceURL=webpack:///./src/container/Logout/index.js?");

/***/ }),

/***/ "./src/container/Profile/index.js":
/*!****************************************!*\
  !*** ./src/container/Profile/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Profile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Profile =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Profile, _Component);\n\n  function Profile() {\n    _classCallCheck(this, Profile);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Profile).apply(this, arguments));\n  }\n\n  _createClass(Profile, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"col-md-6 col-md-offset-3\"\n      }, \"\\u4E2A\\u4EBA\\u4E2D\\u5FC3\"));\n    }\n  }]);\n\n  return Profile;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/container/Profile/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _container_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/Counter */ \"./src/container/Counter/index.js\");\n/* harmony import */ var _container_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/Home */ \"./src/container/Home/index.js\");\n/* harmony import */ var _container_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container/App */ \"./src/container/App.js\");\n/* harmony import */ var _container_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container/Login */ \"./src/container/Login/index.js\");\n/* harmony import */ var _container_Logout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container/Logout */ \"./src/container/Logout/index.js\");\n/* harmony import */ var _container_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container/Profile */ \"./src/container/Profile/index.js\");\n\n\n\n\n\n\n\n\n/* 很深的 无限嵌套的 递归结构 */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _container_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  // loadData:App.loadData,\n  //子路由\n  key: '/app',\n  routes: [{\n    path: '/',\n    component: _container_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    exact: true,\n    key: '/',\n    loadData: _container_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loadData //加载数据，如果此配置项有了这个属性，那么则意味着需要加载异步数据\n\n  }, {\n    path: '/counter',\n    component: _container_Counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    key: '/counter'\n  }, {\n    path: '/login',\n    component: _container_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    key: '/login'\n  }, {\n    path: '/logout',\n    component: _container_Logout__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    key: '/logout'\n  }, {\n    path: '/profile',\n    component: _container_Profile__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    key: '/profile'\n  }]\n}]);\n/*\n 为了路由做匹配,\n 需要把  组件式的路由 改写为对象式的路由.\n\nexport default [\n  {\n    path: '/',\n    component: Home,\n    exact: true,\n    key: '/',\n    loadData: Home.loadData   // 这个值的 是一个函数,  如果 有这个属性, 表明需要加载异步数据\n  },\n  {\n    path: '/counter',\n    component: Counter,\n    key: '/counter',\n  },\n]\n*/\n\n/* \n  提取出来只为了复用.\n */\n\n/* export default (\n  <Fragment>\n    <Route path='/' exact component={Home} />\n    <Route path='/counter' component={Counter} />\n\n  </Fragment>\n)  */\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/server/render.js\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-http-proxy */ \"./node_modules/express-http-proxy/index.js\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_1__);\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar app = express();\n\n\napp.use(express.static(path.resolve('public')));\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()('http://127.0.0.1:4000', {\n  // 代理路径的 处理函数\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return \"/api\".concat(req.url);\n  }\n}));\napp.get('*', function (req, res) {\n  Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req, res);\n});\napp.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _container_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/Home */ \"./src/container/Home/index.js\");\n/* harmony import */ var _container_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/Counter */ \"./src/container/Counter/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, res) {\n  var store = Object(_store__WEBPACK_IMPORTED_MODULE_9__[\"getServerStore\"])(); //这个方法可以处理嵌套路由\n\n  /* 这边的 matchRoutes 也不是一步到位的. */\n  // let matchRoutes = matchRoutes(routes, req.path)\n\n  /* 这种 filter 的书写也只能处理一层的单级路由, 因为 filter 只遍历了一次 */\n\n  /*   let matchRoutes = routes.filter(route => (\n    matchPath(req.path, route)\n  )) */\n\n  var matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_7__[\"matchRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req.path);\n  var promises = [];\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      // promises.push(new Promise(function (resolve) {\n      //   // 这边调两个resolve 都是 调同一个 resolve\n      //   return item.route.loadData(store).then(resolve, resolve)\n      // }))\n      promises.push(item.route.loadData(store));\n    }\n  });\n  Promise.all(promises).then(function () {\n    var html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"Provider\"], {\n      store: store\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n      context: {},\n      location: req.path\n    }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_7__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]))));\n    res.send(\"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n      <meta charset=\\\"UTF-8\\\">\\n      <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n      <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n      <link rel=\\\"stylesheet\\\" href=\\\"https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css\\\" />\\n      <title>SSR</title>\\n    </head>\\n    <body>\\n      <div>\\u4F60\\u597D</div>\\n      <div id=\\\"root\\\">\".concat(html, \"</div>\\n      <script>\\n        window.context = {\\n          state: \").concat(JSON.stringify(store.getState()), \"\\n        }\\n      </script>\\n      <script src=/client.js></script>\\n    </body>\\n    </html>\\n  \"));\n  });\n});\n\n//# sourceURL=webpack:///./src/server/render.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n // 返回实例, 创建一个对个 基础对象\n// 这个会做\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: 'http://localhost:4000'\n}));\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/store/action-types.js":
/*!***********************************!*\
  !*** ./src/store/action-types.js ***!
  \***********************************/
/*! exports provided: INCREMENT, SET_HOME_LIST, SET_SESSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INCREMENT\", function() { return INCREMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_HOME_LIST\", function() { return SET_HOME_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_SESSION\", function() { return SET_SESSION; });\nvar INCREMENT = 'INCREMENT';\nvar SET_HOME_LIST = 'SET_HOME_LIST'; //设置会话信息\n\nvar SET_SESSION = 'SET_SESSION';\n\n//# sourceURL=webpack:///./src/store/action-types.js?");

/***/ }),

/***/ "./src/store/actions/counter.js":
/*!**************************************!*\
  !*** ./src/store/actions/counter.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  increment: function increment() {\n    return {\n      type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"INCREMENT\"]\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/store/actions/counter.js?");

/***/ }),

/***/ "./src/store/actions/home.js":
/*!***********************************!*\
  !*** ./src/store/actions/home.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* \n  axios 最大的 特别 就是  服务器端和 客户端是一模一样的\n*/\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getHomeList: function getHomeList() {\n    // 为 thunk 中间件  增加一个 新的 参数  request\n    return function (dispatch, getState, request) {\n      /* \n        服务器端 访问4000\n        而 客户端 访问3000 接口\n      */\n      return request.get('/api/users').then(function (result) {\n        var list = result.data;\n        dispatch({\n          type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_HOME_LIST\"],\n          payload: list\n        });\n      });\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/store/actions/home.js?");

/***/ }),

/***/ "./src/store/actions/session.js":
/*!**************************************!*\
  !*** ./src/store/actions/session.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  login: function login(user) {\n    return function (dispatch, getState, request) {\n      return request.post('/api/login', user).then(function (result) {\n        var data = result.data; //响应体\n\n        dispatch({\n          type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_SESSION\"],\n          payload: data.data\n        });\n      });\n    };\n  },\n  logout: function logout() {\n    return function (dispatch, getState, request) {\n      return request.get('/api/logout').then(function (result) {\n        var data = result.data; //响应体\n\n        dispatch({\n          type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_SESSION\"],\n          payload: data.data\n        }); //退出之后自动跳转到登陆页\n        //dispatch(push('/login'));\n      });\n    };\n  },\n  getUser: function getUser() {\n    return function (dispatch, getState, request) {\n      return request.get('/api/user').then(function (result) {\n        var data = result.data; //响应体\n\n        dispatch({\n          type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_SESSION\"],\n          payload: data.data\n        });\n      });\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/store/actions/session.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getServerStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerStore\", function() { return getServerStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.js\");\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\n\n\n\n\n\n/* \n  为了让 服务器端 和 客户端都用到这个仓库\n  但 其实本质上, 他们不是同一个仓库  (所以这边返回 的是一个 获取 仓库的方法)\n*/\n\nfunction getServerStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_server_request__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a));\n}\nfunction getClientStore() {\n  var initState = window.context.state;\n  console.dir(initState); // createSotre 中间穿的值.\n\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_client_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"]), redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a));\n}\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/reducers/counter.js":
/*!***************************************!*\
  !*** ./src/store/reducers/counter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\nvar initState = {\n  number: 0\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"INCREMENT\"]:\n      return {\n        number: state.number + 1\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/reducers/counter.js?");

/***/ }),

/***/ "./src/store/reducers/home.js":
/*!************************************!*\
  !*** ./src/store/reducers/home.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\nvar initState = {\n  list: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_HOME_LIST\"]:\n      /*  把 aciton 的payload 属性赋值进来 */\n      return {\n        list: action.payload\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/reducers/home.js?");

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter */ \"./src/store/reducers/counter.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/store/reducers/home.js\");\n/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session */ \"./src/store/reducers/session.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  counter: _counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  home: _home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  session: _session__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/store/reducers/index.js?");

/***/ }),

/***/ "./src/store/reducers/session.js":
/*!***************************************!*\
  !*** ./src/store/reducers/session.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ \"./src/store/action-types.js\");\n\nvar initState = {\n  user: null,\n  //当前登陆的用户\n  success: null,\n  //成功的消息\n  error: null //错误消息\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _action_types__WEBPACK_IMPORTED_MODULE_0__[\"SET_SESSION\"]:\n      return action.payload;\n    //整体覆盖\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/reducers/session.js?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");\n\n//# sourceURL=webpack:///external_%22assert%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"https\");\n\n//# sourceURL=webpack:///external_%22https%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "raw-body":
/*!***************************!*\
  !*** external "raw-body" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"raw-body\");\n\n//# sourceURL=webpack:///external_%22raw-body%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"zlib\");\n\n//# sourceURL=webpack:///external_%22zlib%22?");

/***/ })

/******/ });