var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/import-tokens.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@skpm/fs/index.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO: async. Should probably be done with NSFileHandle and some notifications
// TODO: file descriptor. Needs to be done with NSFileHandle
var Buffer = __webpack_require__(/*! buffer */ "buffer").Buffer;
var utils = __webpack_require__(/*! ./utils */ "./node_modules/@skpm/fs/utils.js");
var parseStat = utils.parseStat;
var fsError = utils.fsError;
var fsErrorForPath = utils.fsErrorForPath;
var encodingFromOptions = utils.encodingFromOptions;
var NOT_IMPLEMENTED = utils.NOT_IMPLEMENTED;

module.exports.constants = {
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1,
};

module.exports.access = NOT_IMPLEMENTED("access");

module.exports.accessSync = function (path, mode) {
  mode = mode | 0;
  var fileManager = NSFileManager.defaultManager();

  switch (mode) {
    case 0:
      canAccess = module.exports.existsSync(path);
      break;
    case 1:
      canAccess = Boolean(Number(fileManager.isExecutableFileAtPath(path)));
      break;
    case 2:
      canAccess = Boolean(Number(fileManager.isWritableFileAtPath(path)));
      break;
    case 3:
      canAccess =
        Boolean(Number(fileManager.isExecutableFileAtPath(path))) &&
        Boolean(Number(fileManager.isWritableFileAtPath(path)));
      break;
    case 4:
      canAccess = Boolean(Number(fileManager.isReadableFileAtPath(path)));
      break;
    case 5:
      canAccess =
        Boolean(Number(fileManager.isReadableFileAtPath(path))) &&
        Boolean(Number(fileManager.isExecutableFileAtPath(path)));
      break;
    case 6:
      canAccess =
        Boolean(Number(fileManager.isReadableFileAtPath(path))) &&
        Boolean(Number(fileManager.isWritableFileAtPath(path)));
      break;
    case 7:
      canAccess =
        Boolean(Number(fileManager.isReadableFileAtPath(path))) &&
        Boolean(Number(fileManager.isWritableFileAtPath(path))) &&
        Boolean(Number(fileManager.isExecutableFileAtPath(path)));
      break;
  }

  if (!canAccess) {
    throw new Error("Can't access " + String(path));
  }
};

module.exports.appendFile = NOT_IMPLEMENTED("appendFile");

module.exports.appendFileSync = function (file, data, options) {
  if (!module.exports.existsSync(file)) {
    return module.exports.writeFileSync(file, data, options);
  }

  var handle = NSFileHandle.fileHandleForWritingAtPath(file);
  handle.seekToEndOfFile();

  var encoding = encodingFromOptions(options, "utf8");

  var nsdata = Buffer.from(
    data,
    encoding === "NSData" || encoding === "buffer" ? undefined : encoding
  ).toNSData();

  handle.writeData(nsdata);
};

module.exports.chmod = NOT_IMPLEMENTED("chmod");

module.exports.chmodSync = function (path, mode) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.setAttributes_ofItemAtPath_error(
    {
      NSFilePosixPermissions: mode,
    },
    path,
    err
  );

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }
};

module.exports.chown = NOT_IMPLEMENTED("chown");
module.exports.chownSync = NOT_IMPLEMENTED("chownSync");

module.exports.close = NOT_IMPLEMENTED("close");
module.exports.closeSync = NOT_IMPLEMENTED("closeSync");

module.exports.copyFile = NOT_IMPLEMENTED("copyFile");

module.exports.copyFileSync = function (path, dest, flags) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.copyItemAtPath_toPath_error(path, dest, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, false, err.value());
  }
};

module.exports.createReadStream = NOT_IMPLEMENTED("createReadStream");
module.exports.createWriteStream = NOT_IMPLEMENTED("createWriteStream");

module.exports.exists = NOT_IMPLEMENTED("exists");

module.exports.existsSync = function (path) {
  var fileManager = NSFileManager.defaultManager();
  return Boolean(Number(fileManager.fileExistsAtPath(path)));
};

module.exports.fchmod = NOT_IMPLEMENTED("fchmod");
module.exports.fchmodSync = NOT_IMPLEMENTED("fchmodSync");
module.exports.fchown = NOT_IMPLEMENTED("fchown");
module.exports.fchownSync = NOT_IMPLEMENTED("fchownSync");
module.exports.fdatasync = NOT_IMPLEMENTED("fdatasync");
module.exports.fdatasyncSync = NOT_IMPLEMENTED("fdatasyncSync");
module.exports.fstat = NOT_IMPLEMENTED("fstat");
module.exports.fstatSync = NOT_IMPLEMENTED("fstatSync");
module.exports.fsync = NOT_IMPLEMENTED("fsync");
module.exports.fsyncSync = NOT_IMPLEMENTED("fsyncSync");
module.exports.ftruncate = NOT_IMPLEMENTED("ftruncate");
module.exports.ftruncateSync = NOT_IMPLEMENTED("ftruncateSync");
module.exports.futimes = NOT_IMPLEMENTED("futimes");
module.exports.futimesSync = NOT_IMPLEMENTED("futimesSync");

module.exports.lchmod = NOT_IMPLEMENTED("lchmod");
module.exports.lchmodSync = NOT_IMPLEMENTED("lchmodSync");
module.exports.lchown = NOT_IMPLEMENTED("lchown");
module.exports.lchownSync = NOT_IMPLEMENTED("lchownSync");

module.exports.link = NOT_IMPLEMENTED("link");

module.exports.linkSync = function (existingPath, newPath) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.linkItemAtPath_toPath_error(existingPath, newPath, err);

  if (err.value() !== null) {
    throw fsErrorForPath(existingPath, undefined, err.value());
  }
};

module.exports.lstat = NOT_IMPLEMENTED("lstat");

module.exports.lstatSync = function (path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.attributesOfItemAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }

  return parseStat(result);
};

module.exports.mkdir = NOT_IMPLEMENTED("mkdir");

module.exports.mkdirSync = function (path, options) {
  var mode = 0o777;
  var recursive = false;
  if (options && options.mode) {
    mode = options.mode;
  }
  if (options && options.recursive) {
    recursive = options.recursive;
  }
  if (typeof options === "number") {
    mode = options;
  }
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.createDirectoryAtPath_withIntermediateDirectories_attributes_error(
    path,
    recursive,
    {
      NSFilePosixPermissions: mode,
    },
    err
  );

  if (err.value() !== null) {
    throw new Error(err.value());
  }
};

module.exports.mkdtemp = NOT_IMPLEMENTED("mkdtemp");

module.exports.mkdtempSync = function (path) {
  function makeid() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  var tempPath = path + makeid();
  module.exports.mkdirSync(tempPath);
  return tempPath;
};

module.exports.open = NOT_IMPLEMENTED("open");
module.exports.openSync = NOT_IMPLEMENTED("openSync");

module.exports.read = NOT_IMPLEMENTED("read");

module.exports.readdir = NOT_IMPLEMENTED("readdir");

module.exports.readdirSync = function (path, options) {
  var encoding = encodingFromOptions(options, "utf8");
  var fileManager = NSFileManager.defaultManager();
  var paths = fileManager.subpathsAtPath(path);
  var arr = [];
  for (var i = 0; i < paths.length; i++) {
    var pathName = paths[i];
    arr.push(encoding === "buffer" ? Buffer.from(pathName) : String(pathName));
  }
  return arr;
};

module.exports.readFile = NOT_IMPLEMENTED("readFile");

module.exports.readFileSync = function (path, options) {
  var encoding = encodingFromOptions(options, "buffer");
  var fileManager = NSFileManager.defaultManager();
  var data = fileManager.contentsAtPath(path);
  if (!data) {
    throw fsErrorForPath(path, false);
  }

  var buffer = Buffer.from(data);

  if (encoding === "buffer") {
    return buffer;
  } else if (encoding === "NSData") {
    return buffer.toNSData();
  } else {
    return buffer.toString(encoding);
  }
};

module.exports.readlink = NOT_IMPLEMENTED("readlink");

module.exports.readlinkSync = function (path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.destinationOfSymbolicLinkAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }

  return String(result);
};

module.exports.readSync = NOT_IMPLEMENTED("readSync");

module.exports.realpath = NOT_IMPLEMENTED("realpath");
module.exports.realpath.native = NOT_IMPLEMENTED("realpath.native");

module.exports.realpathSync = function (path) {
  return String(
    NSString.stringWithString(path).stringByResolvingSymlinksInPath()
  );
};

module.exports.realpathSync.native = NOT_IMPLEMENTED("realpathSync.native");

module.exports.rename = NOT_IMPLEMENTED("rename");

module.exports.renameSync = function (oldPath, newPath) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  fileManager.moveItemAtPath_toPath_error(oldPath, newPath, err);

  var error = err.value();

  if (error !== null) {
    // if there is already a file, we need to overwrite it
    if (
      String(error.domain()) === "NSCocoaErrorDomain" &&
      Number(error.code()) === 516
    ) {
      var err2 = MOPointer.alloc().init();
      fileManager.replaceItemAtURL_withItemAtURL_backupItemName_options_resultingItemURL_error(
        NSURL.fileURLWithPath(newPath),
        NSURL.fileURLWithPath(oldPath),
        null,
        NSFileManagerItemReplacementUsingNewMetadataOnly,
        null,
        err2
      );
      if (err2.value() !== null) {
        throw fsErrorForPath(oldPath, undefined, err2.value());
      }
    } else {
      throw fsErrorForPath(oldPath, undefined, error);
    }
  }
};

module.exports.rmdir = NOT_IMPLEMENTED("rmdir");

module.exports.rmdirSync = function (path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var isDirectory = module.exports.lstatSync(path).isDirectory();
  if (!isDirectory) {
    throw fsError("ENOTDIR", {
      path: path,
      syscall: "rmdir",
    });
  }
  fileManager.removeItemAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, true, err.value(), "rmdir");
  }
};

module.exports.stat = NOT_IMPLEMENTED("stat");

// the only difference with lstat is that we resolve symlinks
//
// > lstat() is identical to stat(), except that if pathname is a symbolic
// > link, then it returns information about the link itself, not the file
// > that it refers to.
// http://man7.org/linux/man-pages/man2/lstat.2.html
module.exports.statSync = function (path) {
  return module.exports.lstatSync(module.exports.realpathSync(path));
};

module.exports.symlink = NOT_IMPLEMENTED("symlink");

module.exports.symlinkSync = function (target, path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.createSymbolicLinkAtPath_withDestinationPath_error(
    path,
    target,
    err
  );

  if (err.value() !== null) {
    throw new Error(err.value());
  }
};

module.exports.truncate = NOT_IMPLEMENTED("truncate");

module.exports.truncateSync = function (path, len) {
  var hFile = NSFileHandle.fileHandleForUpdatingAtPath(sFilePath);
  hFile.truncateFileAtOffset(len || 0);
  hFile.closeFile();
};

module.exports.unlink = NOT_IMPLEMENTED("unlink");

module.exports.unlinkSync = function (path) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var isDirectory = module.exports.lstatSync(path).isDirectory();
  if (isDirectory) {
    throw fsError("EPERM", {
      path: path,
      syscall: "unlink",
    });
  }
  var result = fileManager.removeItemAtPath_error(path, err);

  if (err.value() !== null) {
    throw fsErrorForPath(path, false, err.value());
  }
};

module.exports.unwatchFile = NOT_IMPLEMENTED("unwatchFile");

module.exports.utimes = NOT_IMPLEMENTED("utimes");

module.exports.utimesSync = function (path, aTime, mTime) {
  var err = MOPointer.alloc().init();
  var fileManager = NSFileManager.defaultManager();
  var result = fileManager.setAttributes_ofItemAtPath_error(
    {
      NSFileModificationDate: aTime,
    },
    path,
    err
  );

  if (err.value() !== null) {
    throw fsErrorForPath(path, undefined, err.value());
  }
};

module.exports.watch = NOT_IMPLEMENTED("watch");
module.exports.watchFile = NOT_IMPLEMENTED("watchFile");

module.exports.write = NOT_IMPLEMENTED("write");

module.exports.writeFile = NOT_IMPLEMENTED("writeFile");

module.exports.writeFileSync = function (path, data, options) {
  var encoding = encodingFromOptions(options, "utf8");

  var nsdata = Buffer.from(
    data,
    encoding === "NSData" || encoding === "buffer" ? undefined : encoding
  ).toNSData();

  nsdata.writeToFile_atomically(path, true);
};

module.exports.writeSync = NOT_IMPLEMENTED("writeSync");


/***/ }),

/***/ "./node_modules/@skpm/fs/utils.js":
/*!****************************************!*\
  !*** ./node_modules/@skpm/fs/utils.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports.parseStat = function parseStat(result) {
  return {
    dev: String(result.NSFileDeviceIdentifier),
    // ino: 48064969, The file system specific "Inode" number for the file.
    mode: result.NSFileType | result.NSFilePosixPermissions,
    nlink: Number(result.NSFileReferenceCount),
    uid: String(result.NSFileOwnerAccountID),
    gid: String(result.NSFileGroupOwnerAccountID),
    // rdev: 0, A numeric device identifier if the file is considered "special".
    size: Number(result.NSFileSize),
    // blksize: 4096, The file system block size for i/o operations.
    // blocks: 8, The number of blocks allocated for this file.
    atimeMs:
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    mtimeMs:
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    ctimeMs:
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000,
    birthtimeMs:
      Number(result.NSFileCreationDate.timeIntervalSince1970()) * 1000,
    atime: new Date(
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5
    ), // the 0.5 comes from the node source. Not sure why it's added but in doubt...
    mtime: new Date(
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5
    ),
    ctime: new Date(
      Number(result.NSFileModificationDate.timeIntervalSince1970()) * 1000 + 0.5
    ),
    birthtime: new Date(
      Number(result.NSFileCreationDate.timeIntervalSince1970()) * 1000 + 0.5
    ),
    isBlockDevice: function () {
      return result.NSFileType === NSFileTypeBlockSpecial;
    },
    isCharacterDevice: function () {
      return result.NSFileType === NSFileTypeCharacterSpecial;
    },
    isDirectory: function () {
      return result.NSFileType === NSFileTypeDirectory;
    },
    isFIFO: function () {
      return false;
    },
    isFile: function () {
      return result.NSFileType === NSFileTypeRegular;
    },
    isSocket: function () {
      return result.NSFileType === NSFileTypeSocket;
    },
    isSymbolicLink: function () {
      return result.NSFileType === NSFileTypeSymbolicLink;
    },
  };
};

var ERRORS = {
  EPERM: {
    message: "operation not permitted",
    errno: -1,
  },
  ENOENT: {
    message: "no such file or directory",
    errno: -2,
  },
  EACCES: {
    message: "permission denied",
    errno: -13,
  },
  ENOTDIR: {
    message: "not a directory",
    errno: -20,
  },
  EISDIR: {
    message: "illegal operation on a directory",
    errno: -21,
  },
};

function fsError(code, options) {
  var error = new Error(
    code +
      ": " +
      ERRORS[code].message +
      ", " +
      (options.syscall || "") +
      (options.path ? " '" + options.path + "'" : "")
  );

  Object.keys(options).forEach(function (k) {
    error[k] = options[k];
  });

  error.code = code;
  error.errno = ERRORS[code].errno;

  return error;
}

module.exports.fsError = fsError;

module.exports.fsErrorForPath = function fsErrorForPath(
  path,
  shouldBeDir,
  err,
  syscall
) {
  var fileManager = NSFileManager.defaultManager();
  var doesExist = fileManager.fileExistsAtPath(path);
  if (!doesExist) {
    return fsError("ENOENT", {
      path: path,
      syscall: syscall || "open",
    });
  }
  var isReadable = fileManager.isReadableFileAtPath(path);
  if (!isReadable) {
    return fsError("EACCES", {
      path: path,
      syscall: syscall || "open",
    });
  }
  if (typeof shouldBeDir !== "undefined") {
    var isDirectory = __webpack_require__(/*! ./index */ "./node_modules/@skpm/fs/index.js").lstatSync(path).isDirectory();
    if (isDirectory && !shouldBeDir) {
      return fsError("EISDIR", {
        path: path,
        syscall: syscall || "read",
      });
    } else if (!isDirectory && shouldBeDir) {
      return fsError("ENOTDIR", {
        path: path,
        syscall: syscall || "read",
      });
    }
  }
  return new Error(err || "Unknown error while manipulating " + path);
};

module.exports.encodingFromOptions = function encodingFromOptions(
  options,
  defaultValue
) {
  return options && options.encoding
    ? String(options.encoding)
    : options
    ? String(options)
    : defaultValue;
};

module.exports.NOT_IMPLEMENTED = function NOT_IMPLEMENTED(name) {
  return function () {
    throw new Error(
      "fs." +
        name +
        " is not implemented yet. If you feel like implementing it, any contribution will be gladly accepted on https://github.com/skpm/fs"
    );
  };
};


/***/ }),

/***/ "./node_modules/color-difference/lib/compare.js":
/*!******************************************************!*\
  !*** ./node_modules/color-difference/lib/compare.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return compare; })();

var HexRgb   = __webpack_require__(/*! color-model */ "./node_modules/color-model/index.js").HexRgb,
    methods = {
        'EuclideanDistance' : __webpack_require__(/*! ./method/euclidean-distance */ "./node_modules/color-difference/lib/method/euclidean-distance.js")
      , 'CIE76Difference'   : __webpack_require__(/*! ./method/cie-76-difference */ "./node_modules/color-difference/lib/method/cie-76-difference.js")
    };

/**
 * Compares two colors and returns difference from 1 to 100
 *
 * @param {String} color1
 * @param {String} color2
 * @param {String} method Default method is best from currently implemented
 * @return {Number} difference
 */
function compare(color1, color2, method) {
  var methodName = method || 'CIE76Difference';

  if (undefined === methods[methodName]) {
    throw new Error('Method "' + methodName + '" is unknown. See implemented methods in ./lib/method directory.');
  }

  /** @type Abstract */
  var methodObj = new methods[methodName];

  return methodObj.compare(new HexRgb(color1), new HexRgb(color2));
};


/***/ }),

/***/ "./node_modules/color-difference/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/color-difference/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports  = {
  compare       : __webpack_require__(/*! ./compare */ "./node_modules/color-difference/lib/compare.js")
  , method      : {
      'EuclideanDistance' : __webpack_require__(/*! ./method/euclidean-distance */ "./node_modules/color-difference/lib/method/euclidean-distance.js")
    , 'CIE76Difference'   : __webpack_require__(/*! ./method/cie-76-difference */ "./node_modules/color-difference/lib/method/cie-76-difference.js")
  }
};


/***/ }),

/***/ "./node_modules/color-difference/lib/method/abstract.js":
/*!**************************************************************!*\
  !*** ./node_modules/color-difference/lib/method/abstract.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (function() { return Abstract; })();

function Abstract() {
};

/**
 * Compares two colors and returns difference from 1 to 100
 *
 * @param {Rgb} color1
 * @param {Rgb} color2
 * @return {Number} difference
 */
Abstract.prototype.compare = function(color1, color2) {
  throw new Error('Compare method unimplemented!');
};


/***/ }),

/***/ "./node_modules/color-difference/lib/method/cie-76-difference.js":
/*!***********************************************************************!*\
  !*** ./node_modules/color-difference/lib/method/cie-76-difference.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return CIE76Difference; })();

/**
 * @extends Abstract
 */
function CIE76Difference() {
};

__webpack_require__(/*! util */ "util").inherits(CIE76Difference, __webpack_require__(/*! ./abstract */ "./node_modules/color-difference/lib/method/abstract.js")); 'code' ? 'completion' : undefined;

/**
 * @param {Rgb} color1
 * @param {Rgb} color2
 */
CIE76Difference.prototype.compare = function(color1, color2) {
  if (color1.equals(color2)) {
    return 0;
  }

  function squaredDelta(v1, v2) {
    return Math.pow(v1 - v2, 2);
  }

  var lab1 = color1.toLab(),
      lab2 = color2.toLab(),
      sum  = 0;

  sum += squaredDelta(lab1.lightness(), lab2.lightness());
  sum += squaredDelta(lab1.a(), lab2.a());
  sum += squaredDelta(lab1.b(), lab2.b());

  return Math.max(Math.min(Math.sqrt(sum), 100), 0)
};


/***/ }),

/***/ "./node_modules/color-difference/lib/method/euclidean-distance.js":
/*!************************************************************************!*\
  !*** ./node_modules/color-difference/lib/method/euclidean-distance.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return EuclideanDistance; })();

/**
 * @extends Abstract
 */
function EuclideanDistance() {
};

__webpack_require__(/*! util */ "util").inherits(EuclideanDistance, __webpack_require__(/*! ./abstract */ "./node_modules/color-difference/lib/method/abstract.js")); 'code' ? 'completion' : undefined;

/**
 * @param {Rgb} color1
 * @param {Rgb} color2
 */
EuclideanDistance.prototype.compare = function(color1, color2) {
  if (color1.equals(color2)) {
    return 0;
  }

  function squaredDelta(v1, v2) {
    return Math.pow(v1 - v2, 2);
  }

  var sum = 0;
  sum += squaredDelta(color1.red(),   color2.red());
  sum += squaredDelta(color1.green(), color2.green());
  sum += squaredDelta(color1.blue(),  color2.blue());

  var conversionIndex = 19.5075;

  return Math.sqrt(sum / conversionIndex);
};


/***/ }),

/***/ "./node_modules/color-model/index.js":
/*!*******************************************!*\
  !*** ./node_modules/color-model/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (process.env.COLOR_MODEL_COVERAGE) {
  eval('module.exports = require("./.coverage/lib");');
} else {
  module.exports = __webpack_require__(/*! ./lib */ "./node_modules/color-model/lib/index.js");
}


/***/ }),

/***/ "./node_modules/color-model/lib/abstract-model.js":
/*!********************************************************!*\
  !*** ./node_modules/color-model/lib/abstract-model.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return AbstractModel; })();

var _r = __webpack_require__(/*! ./component */ "./node_modules/color-model/lib/component.js"); eval('var Component = _r');

/**
 * Abstract color model
 */
function AbstractModel() {
  this._name       = null;
  this._components = [];
};

/**
 * @returns {String}
 */
AbstractModel.prototype.toString = function () {
  var v = [];
  for (var i = 0, iMax = this._components.length; i < iMax; i++) {
    v.push(this['_' + this._components[i]].get());
  }
  return this._name + '(' + v.join(', ') + ')';
};

/**
 * @param {AbstractModel} that
 * @returns {Boolean}
 */
AbstractModel.prototype.equals = function (that) {
  if (!(that instanceof AbstractModel) || this._name !== that._name) {
    return false;
  }
  for (var i = 0, cs = this._components, iMax = cs.length; i < iMax; i++) {
    var key = '_' + cs[i];
    if (!this[key].equals(that[key])) {
      return false;
    }
  }
  return true;
};

/**
 * @abstract
 * @returns {Xyz}
 */
AbstractModel.prototype.toXyz = function () {
  throw new Error('Model ' + this._name + ' has not implemented Xyz conversion!');
};

/**
 * @returns {Lab}
 */
AbstractModel.prototype.toLab = function () {
  return this.toXyz().toLab();
};

/**
 * Getter/chainable setter in one place
 *
 * @param {String} name
 * @param {Number} value
 * @returns {AbstractModel}
 */
AbstractModel.prototype.component = function (name, value) {
  var component = this['_' + name];
  if (undefined === component || !(component instanceof Component)) {
    throw new Error('Component "' + name + '" is not exists');
  }

  if (1 == arguments.length) {
    return component.get();
  }

  component.set(value);
  return this;
};

/**
 * @param {String} name
 * @param {Array} args
 * @returns {AbstractModel}
 */
AbstractModel.prototype._component = function (name, args) {
  /** @type Component */
  var component = this['_' + name];

  if (0 == args.length) {
    return component.get();
  }

  component.set(args[0]);
  return this;
};


/***/ }),

/***/ "./node_modules/color-model/lib/component.js":
/*!***************************************************!*\
  !*** ./node_modules/color-model/lib/component.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (function() { return Component; })();

/**
 * Color model Component
 * @param {String} name
 * @param {Number} from
 * @param {Number} to
 */
function Component(name, from, to) {
  if (!name) {
    throw new Error('Name not set');
  }
  this._name = name;

  from = parseFloat(from);
  to   = parseFloat(to);
  if (!(from < to)) {
    throw new Error('From must be less than to');
  }
  this._from = from;
  this._to   = to;

  this._value = null;
};

/**
 * @param {Number} value
 * @returns {Component}
 */
Component.prototype.set = function (value) {
  value = value ? parseFloat(value) : 0;
  if (isNaN(value)) {
    throw new Error('Value for ' + this._name + ' must be numeric');
  }

  if (value < this._from || value > this._to) {
    throw new Error('Value for ' + this._name + ' (' + value + ') must be between ' + this._from + ' and ' + this._to);
  }

  this._value = value;
  return this;
};

/**
 * @returns {Number}
 */
Component.prototype.get = function () {
  return this._value;
};

/**
 * @param {Component} that
 * @returns {Boolean}
 */
Component.prototype.equals = function (that) {
  return (that instanceof Component)
    && this._name  === that._name
    && this._value === that._value;
};


/***/ }),

/***/ "./node_modules/color-model/lib/hex-rgb.js":
/*!*************************************************!*\
  !*** ./node_modules/color-model/lib/hex-rgb.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return HexRgb; })();

var _r = __webpack_require__(/*! ./rgb */ "./node_modules/color-model/lib/rgb.js"); eval('var Rgb = _r');

/**
 * Rgb color model, that created from HEX string and formatted as HEX
 * @extends Rgb
 * @param {String} hex
 */
function HexRgb(hex) {
  if (undefined === hex) {
    return HexRgb.super_.apply(this, args);
  }

  var c  = '([a-f0-9]{1,2})',
      re = new RegExp('^#?' + c + c + c + '$', 'i'),
      m  = hex.match(re);

  if (null === m) {
    throw new Error('Value "' + hex + '" is unknown hex color');
  }

  var args = [
    this._parseIntFromHex(m[1]),
    this._parseIntFromHex(m[2]),
    this._parseIntFromHex(m[3])
  ];
  HexRgb.super_.apply(this, args);
};

__webpack_require__(/*! util */ "util").inherits(HexRgb, __webpack_require__(/*! ./rgb */ "./node_modules/color-model/lib/rgb.js")); 'code' ? 'completion' : undefined;

/**
 * @param {String} hex
 * @returns {Number}
 */
HexRgb.prototype._parseIntFromHex = function(hex) {
  if (1 == hex.length) {
    hex = hex + hex;
  }
  return parseInt(hex, 16);
};

/**
 * @returns {String}
 */
HexRgb.prototype.toString = function() {
  return '#' + this._formatIntAsHex(this.red()) + this._formatIntAsHex(this.green()) + this._formatIntAsHex(this.blue());
};

/**
 * @param {Number} intValue
 * @returns {String}
 */
HexRgb.prototype._formatIntAsHex = function(intValue) {
  intValue = Math.round(intValue);
  strValue = '' + intValue;
  if (1 == strValue.length) {
    strValue = strValue + strValue;
  }
  return (intValue < 16 ? '0' : '') + intValue.toString(16);
};

/**
 * @returns {Rgb}
 */
HexRgb.prototype.toRgb = function () {
  return new Rgb(this._red.get(), this._green.get(), this._blue.get());
};


/***/ }),

/***/ "./node_modules/color-model/lib/hsl.js":
/*!*********************************************!*\
  !*** ./node_modules/color-model/lib/hsl.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return Hsl; })();

var _r = __webpack_require__(/*! ./component */ "./node_modules/color-model/lib/component.js"); eval('var Component = _r');
var _r = __webpack_require__(/*! ./rgb */ "./node_modules/color-model/lib/rgb.js");       eval('var Rgb       = _r');

/**
 * Hue, saturation, lightness color space
 * @extends AbstractModel
 * @param {Number} h
 * @param {Number} s
 * @param {Number} l
 */
function Hsl(h, s, l) {
  this._name       = 'hsl';
  this._components = ['hue', 'saturation', 'lightness'];
  this._hue        = new Component('hue',        0, 360); this._hue.set(h);
  this._saturation = new Component('saturation', 0, 1  ); this._saturation.set(s);
  this._lightness  = new Component('lightness',  0, 1  ); this._lightness.set(l);
};

__webpack_require__(/*! util */ "util").inherits(Hsl, __webpack_require__(/*! ./abstract-model */ "./node_modules/color-model/lib/abstract-model.js")); 'code' ? 'completion' : undefined;

/**
 * @param {Number} value from 0 to 360
 * @returns {Hsl}
 */
Hsl.prototype.hue = function (value) {
  return this._component('hue', arguments);
};

/**
 * @param {Number} value from 0 to 1
 * @returns {Hsl}
 */
Hsl.prototype.saturation = function (value) {
  return this._component('saturation', arguments);
};

/**
 * @param {Number} value from 0 to 1
 * @returns {Hsl}
 */
Hsl.prototype.lightness = function (value) {
  return this._component('lightness', arguments);
};

/**
 * @returns {Xyz}
 */
Hsl.prototype.toXyz = function () {
  return this.toRgb().toXyz();
};

/**
 * @returns {Rgb}
 */
Hsl.prototype.toRgb = function () {
  var lightness  = this._lightness.get(),
      saturation = this._saturation.get();
  if (saturation == 0) {
    var light = 0;
    if (lightness < 0) {
      light = 0;
    } else if (lightness >= 1) {
      light = 255;
    } else {
      light = (lightness * (1 << 16)) >> 8;
    }
    return new Rgb(light, light, light);
  }

  var hue   = this._hue.get() / this._hue._to,
      temp2 = (lightness < 0.5) ?
                (lightness * (saturation + 1)) :
                (lightness + saturation) - (lightness * saturation),
      temp1 = 2 * lightness - temp2;

  return new Rgb(
    this._calcHue(temp1, temp2, hue + 1 / 3),
    this._calcHue(temp1, temp2, hue),
    this._calcHue(temp1, temp2, hue - 1 / 3)
  );
};

/**
 * @param {Number} temp1
 * @param {Number} temp2
 * @param {Number} hue
 * @returns {Number}
 */
Hsl.prototype._calcHue = function (temp1, temp2, hue) {
  if (hue < 0) {
    ++hue;
  } else if (hue > 1) {
    --hue;
  }

  result = temp1;
  if (hue * 6 < 1) {
    result = temp1 + (temp2 - temp1) * hue * 6;
  } else if (hue * 2 < 1) {
    result = temp2;
  } else if (hue * 3 < 2) {
    result = temp1 + (temp2 - temp1) * (2/3 - hue) * 6;
  }

  return (result * 255.99999999999997) >> 0;
};


/***/ }),

/***/ "./node_modules/color-model/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/color-model/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    Component     : __webpack_require__(/*! ./component */ "./node_modules/color-model/lib/component.js")
  , AbstractModel : __webpack_require__(/*! ./abstract-model */ "./node_modules/color-model/lib/abstract-model.js")
  , Xyz           : __webpack_require__(/*! ./xyz */ "./node_modules/color-model/lib/xyz.js")
  , Rgb           : __webpack_require__(/*! ./rgb */ "./node_modules/color-model/lib/rgb.js")
  , HexRgb        : __webpack_require__(/*! ./hex-rgb */ "./node_modules/color-model/lib/hex-rgb.js")
  , Lab           : __webpack_require__(/*! ./lab */ "./node_modules/color-model/lib/lab.js")
  , Hsl           : __webpack_require__(/*! ./hsl */ "./node_modules/color-model/lib/hsl.js")
};


/***/ }),

/***/ "./node_modules/color-model/lib/lab.js":
/*!*********************************************!*\
  !*** ./node_modules/color-model/lib/lab.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return Lab; })();

var _r = __webpack_require__(/*! ./component */ "./node_modules/color-model/lib/component.js"); eval('var Component = _r');

/**
 * Lab color space
 *
 * CIE 1976 (L*, a*, b*) color space
 * @extends AbstractModel
 * @param {Number} l
 * @param {Number} a
 * @param {Number} b
 */
function Lab(l, a, b) {
  this._name       = 'lab';
  this._components = ['lightness', 'a', 'b'];
  this._lightness  = new Component('lightness',    0, 100); this._lightness.set(l);
  this._a          = new Component('a',          -87, 100); this._a.set(a);
  this._b          = new Component('b',         -108, 100); this._b.set(b);
};

__webpack_require__(/*! util */ "util").inherits(Lab, __webpack_require__(/*! ./abstract-model */ "./node_modules/color-model/lib/abstract-model.js")); 'code' ? 'completion' : undefined;

/**
 * @param {Number} value
 * @returns {Lab}
 */
Lab.prototype.lightness = function (value) {
  return this._component('lightness', arguments);
};

/**
 * @param {Number} value
 * @returns {Lab}
 */
Lab.prototype.a = function (value) {
  return this._component('a', arguments);
};

/**
 * @param {Number} value
 * @returns {Lab}
 */
Lab.prototype.b = function (value) {
  return this._component('b', arguments);
};


/***/ }),

/***/ "./node_modules/color-model/lib/rgb.js":
/*!*********************************************!*\
  !*** ./node_modules/color-model/lib/rgb.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return Rgb; })();

var _r = __webpack_require__(/*! ./component */ "./node_modules/color-model/lib/component.js"); eval('var Component = _r');
var _r = __webpack_require__(/*! ./xyz */ "./node_modules/color-model/lib/xyz.js");       eval('var Xyz       = _r');
var _r = __webpack_require__(/*! ./hsl */ "./node_modules/color-model/lib/hsl.js");       eval('var Hsl       = _r');

/**
 * Rgb color model
 * @extends AbstractModel
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 */
function Rgb(r, g, b) {
  this._name       = 'rgb';
  this._components = ['red', 'green', 'blue'];
  this._red        = new Component('red',   0, 255); this._red.set(r);
  this._green      = new Component('green', 0, 255); this._green.set(g);
  this._blue       = new Component('blue',  0, 255); this._blue.set(b);
};

__webpack_require__(/*! util */ "util").inherits(Rgb, __webpack_require__(/*! ./abstract-model */ "./node_modules/color-model/lib/abstract-model.js")); 'code' ? 'completion' : undefined;

/**
 * @param {Number} value
 * @returns {Rgb}
 */
Rgb.prototype.red = function (value) {
  return this._component('red', arguments);
};

/**
 * @param {Number} value
 * @returns {Rgb}
 */
Rgb.prototype.green = function (value) {
  return this._component('green', arguments);
};

/**
 * @param {Number} value
 * @returns {Rgb}
 */
Rgb.prototype.blue = function (value) {
  return this._component('blue', arguments);
};

/**
 * @returns {HexRgb}
 */
Rgb.prototype.toHex = function () {
  var HexRgb = __webpack_require__(/*! ./hex-rgb */ "./node_modules/color-model/lib/hex-rgb.js");
  return new HexRgb()
    .red  (this._red  .get())
    .green(this._green.get())
    .blue (this._blue .get());
};

/**
 * @returns {String}
 */
Rgb.prototype.toHexString = function () {
  return this.toHex().toString();
};

/**
 * @param {Number} value
 * @returns {Number}
 */
Rgb.prototype._preparePreXyzValue = function(value) {
  value = value / 255;
  if (value > 0.04045) {
    value = (value + 0.055) / 1.055;
    value = Math.pow(value, 2.4);
  } else {
    value = value / 12.92;
  }
  return value * 100;
};

/**
 * @returns {Xyz}
 */
Rgb.prototype.toXyz = function () {
  var r = this._preparePreXyzValue(this._red  .get()),
      g = this._preparePreXyzValue(this._green.get()),
      b = this._preparePreXyzValue(this._blue .get());

  return new Xyz(
    this._finalizeXyzValue(r * 0.4124 + g * 0.3576 + b * 0.1805),
    this._finalizeXyzValue(r * 0.2126 + g * 0.7152 + b * 0.0722),
    this._finalizeXyzValue(r * 0.0193 + g * 0.1192 + b * 0.9505)
  );
};

/**
 * @param {Number} preXyzValue
 * @returns {Number}
 */
Rgb.prototype._finalizeXyzValue = function (preXyzValue) {
  return Math.round(preXyzValue * 10000) / 10000;
};

/**
 * @returns {Hsl}
 */
Rgb.prototype.toHsl = function () {
  var r = this._red  .get() / 255,
      g = this._green.get() / 255,
      b = this._blue .get() / 255,
      min   = Math.min(r, g, b),
      max   = Math.max(r, g, b),
      delta = max - min,
      lightness = (min + max) / 2;

  lightness = Math.round(lightness * 100) / 100;

  if (delta == 0) {
    return new Hsl(0, 0, lightness);
  }

  var saturation = 0;
  if (lightness < 0.5) {
    saturation = delta / (max + min);
  } else {
    saturation = delta / (2 - max - min);
  }
  saturation = Math.round(saturation * 100) / 100;

  var hue  = 0,
    deltaR = (((max - r) / 6 ) + (delta / 2)) / delta,
    deltaG = (((max - g) / 6 ) + (delta / 2)) / delta,
    deltaB = (((max - b) / 6 ) + (delta / 2)) / delta;

  if (r == max) {
    hue = deltaB - deltaG;
  } else if (g == max) {
    hue = ( 1 / 3 ) + deltaR - deltaB;
  } else {
    hue = ( 2 / 3 ) + deltaG - deltaR;
  }

  if (hue < 0) {
    ++hue;
  } else if (hue > 1) {
    --hue;
  }
  hue = (hue * 360.99999999999997) >> 0;
  if (360 == hue) {
    hue = 0;
  }

  return new Hsl(hue, saturation, lightness);
};


/***/ }),

/***/ "./node_modules/color-model/lib/xyz.js":
/*!*********************************************!*\
  !*** ./node_modules/color-model/lib/xyz.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function() { return Xyz; })();

var _r = __webpack_require__(/*! ./component */ "./node_modules/color-model/lib/component.js"); eval('var Component = _r');
var _r = __webpack_require__(/*! ./rgb */ "./node_modules/color-model/lib/rgb.js");       eval('var Rgb       = _r');
var _r = __webpack_require__(/*! ./lab */ "./node_modules/color-model/lib/lab.js");       eval('var Lab       = _r');

/**
 * XYZ color model - base color model for others
 *
 * CIE 1931 color space
 * @extends AbstractModel
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 */
function Xyz(x, y, z) {
  this._name       = 'xyz';
  this._components = ['x', 'y', 'z'];
  this._x          = new Component('x', 0, 95.05); this._x.set(x);
  this._y          = new Component('y', 0, 100  ); this._y.set(y);
  this._z          = new Component('z', 0, 108.9); this._z.set(z);
};

__webpack_require__(/*! util */ "util").inherits(Xyz, __webpack_require__(/*! ./abstract-model */ "./node_modules/color-model/lib/abstract-model.js")); 'code' ? 'completion' : undefined;

/**
 * @param {Number} value
 * @returns {Xyz}
 */
Xyz.prototype.x = function (value) {
  return this._component('x', arguments);
};

/**
 * @param {Number} value
 * @returns {Xyz}
 */
Xyz.prototype.y = function (value) {
  return this._component('y', arguments);
};

/**
 * @param {Number} value
 * @returns {Xyz}
 */
Xyz.prototype.z = function (value) {
  return this._component('z', arguments);
};

/**
 * @returns {Xyz}
 */
Xyz.prototype.toXyz = function () {
  return new Xyz(this._x.get(), this._y.get(), this._z.get());
};

/**
 * @returns {Lab}
 */
Xyz.prototype.toLab = function () {
  var x = this._preparePreLabValue(this._x.get() /  95.047),
      y = this._preparePreLabValue(this._y.get() / 100.000),
      z = this._preparePreLabValue(this._z.get() / 108.883);

  return new Lab(
    this._finalizeLabValue((116 * y) - 16),
    this._finalizeLabValue(500 * (x - y)),
    this._finalizeLabValue(200 * (y - z))
  );
};

/**
 * @param {Number} preLabValue
 * @returns {Number}
 */
Xyz.prototype._preparePreLabValue = function (preLabValue) {
  if (preLabValue > 0.008856) {
    return Math.pow(preLabValue, 1/3);
  }
  return (7.787 * preLabValue) + (16 / 116);
};

/**
 * @param {Number} preLabValue
 * @returns {Number}
 */
Xyz.prototype._finalizeLabValue = function (preLabValue) {
  return Math.round(preLabValue * 10000) / 10000;
};

/**
 * @returns {Rgb}
 */
Xyz.prototype.toRgb = function () {
  var x = this._x.get() / 100,
      y = this._y.get() / 100,
      z = this._z.get() / 100,
      r = x *  3.2406 + y * -1.5372 + z * -0.4986,
      g = x * -0.9689 + y *  1.8758 + z *  0.0415,
      b = x *  0.0557 + y * -0.2040 + z *  1.0570;

  return new Rgb(this._finalizeRgbValue(r), this._finalizeRgbValue(g), this._finalizeRgbValue(b));
};

/**
 * @param {Number} preRgbValue
 * @returns {Number}
 */
Xyz.prototype._finalizeRgbValue = function (preRgbValue) {
  if (preRgbValue > 0.0031308 ) {
    preRgbValue = 1.055 * Math.pow(preRgbValue,  1/2.4) - 0.055;
  } else {
    preRgbValue = 12.92 * preRgbValue;
  }

  return Math.round(255 * preRgbValue);
};


/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/colorcolor/src/colorcolor.js":
/*!***************************************************!*\
  !*** ./node_modules/colorcolor/src/colorcolor.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*jshint esversion: 6 */

function colorcolor(color, newColor = "rgba", calculateOpacity = false) {
	color = color.toLowerCase();
	newColor = newColor.toLowerCase();
	var returnedColor = color;
	var namedColor = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
	var r,g,b,a;
	var roundTo = 4;
	var colorDefinitions = {
		rgb: {
			re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
			example: [ "rgb(123, 234, 45)", "rgb(255,234,245)" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ], 10), parseInt(bits[ 2 ], 10), parseInt(bits[ 3 ], 10), 1
				];
			}
		},
		rgba: {
			re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
			example: [ "rgba(123, 234, 45, 1)", "rgba(255,234,245, 0.5)" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ], 10), parseInt(bits[ 2 ], 10), parseInt(bits[ 3 ], 10), parseFloat(bits[ 4 ])
				];
			}
		},
		hex: {
			re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
			example: [ "00ff00", "336699" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ], 16), parseInt(bits[ 2 ], 16), parseInt(bits[ 3 ], 16), 1
				];
			}
		},
		hex3: {
			re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
			example: [ "fb0", "f0f" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ] + bits[ 1 ], 16), parseInt(bits[ 2 ] + bits[ 2 ], 16), parseInt(bits[ 3 ] + bits[ 3 ], 16), 1
				];
			}
		},
		hexa: {
			re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
			example: [ "00ff00ff", "336699a0" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ], 16), parseInt(bits[ 2 ], 16), parseInt(bits[ 3 ], 16), (parseInt(bits[ 4 ], 16) / 255)
				];
			}
		},
		hex4a: {
			re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
			example: [ "fb0f", "f0f8" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ] + bits[ 1 ], 16), parseInt(bits[ 2 ] + bits[ 2 ], 16), parseInt(bits[ 3 ] + bits[ 3 ], 16), (parseInt(bits[ 4 ] + bits[ 4 ], 16) / 255)
				];
			}
		},
		hsl: {
			re: /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
			example: [ "hsl(120, 100%, 25%)", "hsl(0, 100%, 50%)" ],
			toRGBA: function (bits) {
				bits[ 4 ] = 1;
				var rgba = hslToRgb(bits);
				return [
					rgba.r, rgba.g, rgba.b, rgba.a
				];
			}
		},
		hsla: {
			re: /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
			example: [ "hsla(120, 100%, 25%, 1)", "hsla(0, 100%, 50%, 0.5)" ],
			toRGBA: function (bits) {
				var rgba = hslToRgb(bits);
				return [
					rgba.r, rgba.g, rgba.b, rgba.a
				];
			}
		},
		hsv: {
			re: /^hsv\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
			example: [ "hsv(120, 100%, 25%)", "hsv(0, 100%, 50%)" ],
			toRGBA: function (bits) {
				var rgb = hsvToRgb(bits);
				return [
					rgb.r, rgb.g, rgb.b, 1
				];
			}
		},
		hsb: {
			re: /^hsb\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
			example: [ "hsb(120, 100%, 25%)", "hsb(0, 100%, 50%)" ],
			toRGBA: function (bits) {
				var rgb = hsvToRgb(bits);
				return [
					rgb.r, rgb.g, rgb.b, 1
				];
			}
		}
	};

	// If this is a named color, convert it to hex
	if (namedColor.hasOwnProperty(color)) {
		color = namedColor[color];
		color.forEach(function(piece, index) {
			"use strict";
			color[index] = ("0" + piece.toString(16)).slice(-2);
		});
		color = "#" + color.join('');
	}

	// Search the color definitions for a match
	for (let colorDefinition in colorDefinitions) {
		let re = colorDefinitions[colorDefinition].re;
		let processor = colorDefinitions[colorDefinition].toRGBA;
		let bits = re.exec(color);
		if (bits) {
			let channels = processor(bits);
			r = channels[0];
			g = channels[1];
			b = channels[2];
			a = +(Math.round(channels[3] + ("e+" + roundTo)) + ("e-" + roundTo));
		}
	}
	r = Math.round( ( r < 0 || isNaN(r) ) ? 0 : ( ( r > 255 ) ? 255 : r ) );
	g = Math.round( ( g < 0 || isNaN(g) ) ? 0 : ( ( g > 255 ) ? 255 : g ) );
	b = Math.round( ( b < 0 || isNaN(b) ) ? 0 : ( ( b > 255 ) ? 255 : b ) );
	a = ( a < 0 || isNaN(a) ) ? 0 : ( ( a > 1 ) ? 1 : a );

	switch (newColor) {
		case "hex":
			returnedColor = "#" + ("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2);
			break;
		case "hexa":
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b, a);
			}
			returnedColor = "#" + ("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2) + ("0" + (Math.round(255 * a)).toString(16)).slice(-2);
			break;
		case "hsl":
			let hsl = rgbToHsl({ "r": r, "g": g, "b": b });
			returnedColor = `hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`;
			break;
		case "hsla":
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b, a);
			}
			let hsla = rgbToHsl({ "r": r, "g": g, "b": b, "a": a });
			returnedColor = `hsla(${hsla.h},${hsla.s}%,${hsla.l}%,${hsla.a})`;
			break;
		case "hsb":
			/* Same as `hsv` */
			let hsb = rgbToHsv({ "r": r, "g": g, "b": b });
			returnedColor = `hsb(${hsb.h},${hsb.s}%,${hsb.v}%)`;
			break;
		case "hsv":
			let hsv = rgbToHsv({ "r": r, "g": g, "b": b });
			returnedColor = `hsv(${hsv.h},${hsv.s}%,${hsv.v}%)`;
			break;
		case "rgb":
			returnedColor = `rgb(${r},${g},${b})`;
			break;
		case "rgba":
		/* falls through */
		default:
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b, a);
			}
			returnedColor = `rgba(${r},${g},${b},${a})`;
			break;
	}

	return returnedColor;
}

function calculateOpacityFromWhite(r, g, b, a) {
	"use strict";
	var min = 0;
	a = ( 255 - ( min = Math.min(r, g, b) ) ) / 255;
	r = (  false || ( r - min ) / a ).toFixed(0);
	g = (  false || ( g - min ) / a ).toFixed(0);
	b = (  false || ( b - min ) / a ).toFixed(0);
	a = parseFloat(a.toFixed(4));

	return [r, g, b, a];
}

function hslToRgb(bits) {
	var rgba = {}, hsl = {
		h: bits[1] / 360,
		s: bits[2] / 100,
		l: bits[3] / 100,
		a: parseFloat(bits[ 4 ])
	};
	if (hsl.s === 0) {
		let v = 255 * hsl.l;
		rgba = {
			r: v,
			g: v,
			b: v,
			a: hsl.a
		};
	} else {
		let q = hsl.l < 0.5 ? hsl.l * ( 1 + hsl.s ) : ( hsl.l + hsl.s ) - ( hsl.l * hsl.s );
		let p = 2 * hsl.l - q;
		rgba.r = hueToRgb(p, q, hsl.h + ( 1 / 3 ) ) * 255;
		rgba.g = hueToRgb(p, q, hsl.h) * 255;
		rgba.b = hueToRgb(p, q, hsl.h - ( 1 / 3 ) ) * 255;
		rgba.a = hsl.a;
	}

	return rgba;
}

function rgbToHsl(rgba) {
	rgba.r = rgba.r / 255;
	rgba.g = rgba.g / 255;
	rgba.b = rgba.b / 255;
	var max = Math.max(rgba.r, rgba.g, rgba.b), min = Math.min(rgba.r, rgba.g, rgba.b), hsl = [], d;
	hsl.a = rgba.a;
	hsl.l = ( max + min ) / 2;
	if (max === min) {
		hsl.h = 0;
		hsl.s = 0;
	} else {
		d = max - min;
		hsl.s = hsl.l >= 0.5 ? d / ( 2 - max - min ) : d / ( max + min );
		switch (max) {
			case rgba.r:
				hsl.h = ( rgba.g - rgba.b ) / d + ( rgba.g < rgba.b ? 6 : 0 );
				break;
			case rgba.g:
				hsl.h = ( rgba.b - rgba.r ) / d + 2;
				break;
			case rgba.b:
				hsl.h = ( rgba.r - rgba.g ) / d + 4;
				break;
		}
		hsl.h /= 6;
	}
	hsl.h = parseInt(( hsl.h * 360 ).toFixed(0), 10);
	hsl.s = parseInt(( hsl.s * 100 ).toFixed(0), 10);
	hsl.l = parseInt(( hsl.l * 100 ).toFixed(0), 10);

	return hsl;
}

function hsvToRgb(bits) {
	var rgb = {}, hsv = {
		h: bits[1] / 360,
		s: bits[2] / 100,
		v: bits[3] / 100
	}, i = Math.floor(hsv.h * 6), f = hsv.h * 6 - i, p = hsv.v * ( 1 - hsv.s ), q = hsv.v * ( 1 - f * hsv.s ), t = hsv.v * ( 1 - ( 1 - f ) * hsv.s );
	switch (i % 6) {
		case 0:
			rgb.r = hsv.v;
			rgb.g = t;
			rgb.b = p;
			break;
		case 1:
			rgb.r = q;
			rgb.g = hsv.v;
			rgb.b = p;
			break;
		case 2:
			rgb.r = p;
			rgb.g = hsv.v;
			rgb.b = t;
			break;
		case 3:
			rgb.r = p;
			rgb.g = q;
			rgb.b = hsv.v;
			break;
		case 4:
			rgb.r = t;
			rgb.g = p;
			rgb.b = hsv.v;
			break;
		case 5:
			rgb.r = hsv.v;
			rgb.g = p;
			rgb.b = q;
			break;
	}
	rgb.r = rgb.r * 255;
	rgb.g = rgb.g * 255;
	rgb.b = rgb.b * 255;

	return rgb;
}

function rgbToHsv(rgba) {
	rgba.r = toPercent(parseInt(rgba.r, 10) % 256, 256);
	rgba.g = toPercent(parseInt(rgba.g, 10) % 256, 256);
	rgba.b = toPercent(parseInt(rgba.b, 10) % 256, 256);
	var max = Math.max(rgba.r, rgba.g, rgba.b), min = Math.min(rgba.r, rgba.g, rgba.b), d = max - min, hsv = {
		"h": 0,
		"s": max === 0 ? 0 : d / max,
		"v": max
	};
	if (max !== min) {
		switch (max) {
			case rgba.r:
				hsv.h = ( rgba.g - rgba.b ) / d + ( rgba.g < rgba.b ? 6 : 0 );
				break;
			case rgba.g:
				hsv.h = ( rgba.b - rgba.r ) / d + 2;
				break;
			case rgba.b:
				hsv.h = ( rgba.r - rgba.g ) / d + 4;
				break;
		}
		hsv.h /= 6;
	}
	hsv.h = parseInt(( hsv.h * 360 ).toFixed(0), 10);
	hsv.s = parseInt(( hsv.s * 100 ).toFixed(0), 10);
	hsv.v = parseInt(( hsv.v * 100 ).toFixed(0), 10);

	return hsv;
}

function hueToRgb(p, q, t) {
	if (t < 0) {
		t += 1;
	}
	if (t > 1) {
		t -= 1;
	}
	if (t < 1 / 6) {
		return p + ( q - p ) * 6 * t;
	}
	if (t < 1 / 2) {
		return q;
	}
	if (t < 2 / 3) {
		return p + ( q - p ) * ( ( 2 / 3 - t ) * 6 );
	}

	return p;
}

function toPercent(amount, limit) {
	return amount / limit;
}

module.exports = colorcolor;
global.colorcolor = module.exports; /* ew */


/***/ }),

/***/ "./src/import-tokens.js":
/*!******************************!*\
  !*** ./src/import-tokens.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var colorcolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! colorcolor */ "./node_modules/colorcolor/src/colorcolor.js");
/* harmony import */ var colorcolor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(colorcolor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sketch/dom */ "sketch/dom");
/* harmony import */ var sketch_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sketch_dom__WEBPACK_IMPORTED_MODULE_4__);




var cd = __webpack_require__(/*! color-difference */ "./node_modules/color-difference/lib/index.js");



var fs = __webpack_require__(/*! @skpm/fs */ "./node_modules/@skpm/fs/index.js");

var os = __webpack_require__(/*! os */ "os");

var path = __webpack_require__(/*! path */ "path");

var desktopDir = path.join(os.homedir(), "Desktop"); // #region Sketch Items

var sketch = __webpack_require__(/*! sketch */ "sketch");

var Swatch = sketch.Swatch;

var Style = __webpack_require__(/*! sketch/dom */ "sketch/dom").Style;



var Group = __webpack_require__(/*! sketch/dom */ "sketch/dom").Group;

var Text = __webpack_require__(/*! sketch/dom */ "sketch/dom").Text;

var SharedStyle = __webpack_require__(/*! sketch/dom */ "sketch/dom").SharedStyle; // Document variables


var document = sketch.getSelectedDocument();
var firstSelectedLayer = document.selectedLayers.layers[0];
var artboard = sketch.Artboard; // #endregion
// #region Styles Variables

var layerStyles = document.sharedLayerStyles;
var textStyles = document.sharedTextStyles;
var arrayLayerStyleIDs = layerStyles.map(function (sharedstyle) {
  return sharedstyle["id"];
});
var arrayLayerStyleNames = layerStyles.map(function (sharedstyle) {
  return sharedstyle["name"];
});
var arrayLayerStyleStyles = layerStyles.map(function (sharedstyle) {
  return sharedstyle["style"];
});

var layerStylesOrdered = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(document.sharedLayerStyles).sort(function (left, right) {
  return left.name > right.name;
});

var arrayTextStyleIDs = textStyles.map(function (sharedstyle) {
  return sharedstyle["id"];
});
var arrayTextStyleNames = textStyles.map(function (sharedstyle) {
  return sharedstyle["name"];
});
var arrayTextStyleStyles = textStyles.map(function (sharedstyle) {
  return sharedstyle["style"];
});

var textStylesOrdered = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(document.sharedTextStyles).sort(function (left, right) {
  return left.name > right.name;
});

var stylesString = JSON.stringify(layerStylesOrdered);
var textString = JSON.stringify(textStylesOrdered);
var insertedTextStyles = []; // This array contains:
// 0 = color variable name
// 1 = color variable folder
// 2 = color variable color (HEX)
// 3 = color variable referencing color

var colorVariablesArray = []; // #endregion

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var directoryFiles = getPath();
  var folder = directoryFiles.substring(0, directoryFiles.lastIndexOf("/")) + "/data/";
  var fileName = path.basename(directoryFiles);

  if (fileName === "dsp.json") {
    var fontTokens = JSON.parse(fs.readFileSync(folder + "fonts.json")); // let docsTokens = JSON.parse(fs.readFileSync(folder + "docs.json"));

    var tokensTokens = JSON.parse(fs.readFileSync(folder + "tokens.json")); // #region Color Tokens import

    var palettes = [];
    var themes_light = [];
    var themes_dark = [];
    var fillStyles = [];
    var borderStyles = [];
    tokensTokens.entities.forEach(function (entity) {
      var alias = false;

      if (entity.type === "Alias") {
        alias = true;
      }

      if (!alias) {
        if (entity.category_id === "ref.palette") {
          if (!entity.name.includes("NaN")) {
            var name = entity.name.substring(entity.name.lastIndexOf(".") + 1); // console.log("Name: " + name);

            var palette = name.replace(/[0-9]/g, ""); // console.log("Palette: " + palette);

            var color = entity.value;
            var description = entity.description;
            palettes.push([palette, name, color]);
          }
        } else if (entity.category_id === "sys.color.light") {
          var theme = entity.tags[4];
          var _name = entity.tags[3];
          var _palette = entity.tags[3];
          var _color = entity.value;
          themes_light.push([theme, _name, _palette, _color]);
        } else if (entity.category_id === "sys.color.dark") {
          var _theme = entity.tags[4];
          var _name2 = entity.tags[3];
          var _palette2 = entity.tags[3];
          var _color2 = entity.value;
          themes_dark.push([_theme, _name2, _palette2, _color2]);
        }
      }
    }); // #endregion Color Tokens import
    // #region Text Tokens import

    var textMDStyles = [];
    var styleName = "";
    var fontFamily = "";
    var fontSize = 0;
    var fontLineHeight = 0;
    var fontWeight = "Regular";
    var fontKerning = 0;
    fontTokens.entities.forEach(function (entity) {
      var alias = false;

      if (entity.type === "Alias") {
        alias = true;
      }

      if (!alias) {
        styleName = entity.tags[0];
        fontFamily = entity.tokens[0].value;
        fontLineHeight = parseFloat(entity.tokens[1].value);
        fontWeight = entity.tokens[2].value;
        fontKerning = parseFloat(entity.tokens[3].value);
        fontSize = parseFloat(entity.tokens[4].value);
        textMDStyles.push([styleName, fontFamily, fontLineHeight, fontWeight, fontKerning, fontSize]);
      }
    }); // #endregion Text Tokens import

    var generatedLayerStyles = [];
    var generatedTextStyles = []; // Create color variables for each palette

    var colorVariables = paletteToColorVariables(palettes); // #region Connect Color Variables
    // themes_light.forEach((style) => {
    //     generatedLayerStyles.push(
    //         createNewLayerStyle(style[0], style[1], style[2], style[3])
    //     );
    //     if (availableTextStyles(style[1])) {
    //         textMDStyles.forEach((textStyle) => {
    //             generatedTextStyles.push(
    //                 createNewTextStyle(
    //                     style[0],
    //                     style[1],
    //                     style[2],
    //                     style[3],
    //                     textStyle
    //                 )
    //             );
    //         });
    //     }
    // });
    // themes_dark.forEach((style) => {
    //     generatedLayerStyles.push(
    //         createNewLayerStyle(style[0], style[1], style[2], style[3])
    //     );
    //     if (availableTextStyles(style[1])) {
    //         textMDStyles.forEach((textStyle) => {
    //             generatedTextStyles.push(
    //                 createNewTextStyle(
    //                     style[0],
    //                     style[1],
    //                     style[2],
    //                     style[3],
    //                     textStyle
    //                 )
    //             );
    //         });
    //     }
    // });
    // #endregion Connect Color Variables
    // #region Generates elements

    var newPage = findOrCreatePage(document, "Material Design Palettes"); // #region Tonal Palettes

    var paletteArtboard = createArtboard(newPage, 0, 0, 1000, 100, "Tonal Palettes");
    var paletteTitle = createTextWithStyleName(paletteArtboard, 32, 16, "light/headline/on-background/headline-large", "Tonal Palette", "Tonal Palette title");
    console.log(paletteTitle); // #endregion Tonal Palettes
    // #endregion Generates elements
  } else {
    sketch.UI.alert("Select the correct file", "Please select the dsp.json file from your downloaded Material Design 3 token folder");
  }

  function paletteToColorVariables(palettes) {
    var arrayColorVarNames = document.swatches.map(function (Swatch) {
      return Swatch["name"];
    });
    palettes.forEach(function (palette) {
      var paletteName = palette[0];
      var colorName = palette[1];
      var name = paletteName + "/" + colorName;
      var color = palette[2];
      var newSwatch = Swatch.from({
        name: name,
        color: color
      }); // add the color variable to the local color variables Array

      colorVariablesArray.push([name, name.split("/")[0], color, newSwatch.referencingColor]); // Generate the new Color Variable if it doesn't exist

      if (arrayColorVarNames.length > 0) {
        if (arrayColorVarNames.indexOf(colorName) === -1) {
          document.swatches.push(newSwatch);
        } else {
          var existingSwatch = document.swatches[arrayColorVarNames.indexOf(colorName)];
          document.swatches[arrayColorVarNames.indexOf(colorName)].sketchObject.updateWithColor(MSColor.colorWithHex_alpha(color[1].slice(0, 7), 1));
          var swatchContainer = document.sketchObject.documentData().sharedSwatches(); // REFRESHES THE UI

          swatchContainer.updateReferencesToSwatch(existingSwatch.sketchObject);
        }
      } else {
        document.swatches.push(newSwatch);
      }
    });
  }
}); // ******************************************************************* //
// General Styles management functions                                 //
// ******************************************************************* //

function getLayerStyleNameFromID(id) {
  var styleName = "";

  for (var i = 0; i < arrayLayerStyleNames.length; i++) {
    if (arrayLayerStyleIDs[i] === id) {
      styleName = arrayLayerStyleNames[i];
    }
  }

  return styleName;
}

function getTextStyleNameFromID(id) {
  try {
    var textStyle = "";

    for (var i = 0; i < arrayTextStyleStyles.length; i++) {
      if (arrayTextStyleIDs[i] === id) {
        textStyle = arrayTextStyleStyles[i];
      }
    }

    return textStyle;
  } catch (getTextStylesStyleFromIDErr) {
    console.log(getTextStylesStyleFromIDErr);
  }
}

function getLayerStyleIDFromName(name) {
  var styleID = "";

  for (var i = 0; i < arrayLayerStyleIDs.length; i++) {
    if (arrayLayerStyleNames[i] === name) {
      styleID = arrayLayerStyleIDs[i];
    }
  }

  return styleID;
}

function getTextStyleIDFromName(name) {
  var styleID = "";

  for (var i = 0; i < arrayTextStyleIDs.length; i++) {
    if (arrayTextStyleNames[i] === name) {
      styleID = arrayTextStyleIDs[i];
    }
  }

  return styleID;
}

function createNewLayerStyle() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var palette = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

  try {
    var generatedStyles = [];
    var styleNameFill = theme + "/Fills/" + name;
    var styleNameBorder = theme + "/Borders/" + name;
    var styleColor = color + "ff".toUpperCase();
    var checkName = name.replace(/[0-9]/g, "").split("-");
    var colorVariables = document.swatches;
    var shouldSkip = false;
    colorVariables.forEach(function (variable) {
      var variableColor = variable.color.toUpperCase();
      var variableName = variable.name;
      var variableFolder = variableName.split("/")[0];

      if (shouldSkip) {
        return styleColor;
      }

      if (checkName.includes(variableFolder)) {
        if (variableColor === styleColor) {
          styleColor = variable.referencingColor;
          shouldSkip = true;
          return styleColor;
        }
      } else if (variableFolder === "neutral") {
        if (variableColor === styleColor) {
          styleColor = variable.referencingColor;
          shouldSkip = true;
          return styleColor;
        }
      } else if (variableFolder === "neutral-variant") {
        if (variableColor === styleColor) {
          styleColor = variable.referencingColor;
          shouldSkip = true;
          return styleColor;
        }
      }
    }); // #endregion assign color variable

    var fills = [{
      color: styleColor,
      fillType: Style.FillType.Color
    }];
    var borders = [{
      color: styleColor,
      fillType: Style.FillType.Color,
      position: Style.BorderPosition.Inside
    }]; // 1. If the style is new

    if (arrayLayerStyleNames.indexOf(styleNameFill) === -1) {
      var sharedStyle = layerStyles.push({
        name: styleNameFill,
        style: {
          fills: fills,
          borders: []
        },
        document: document
      });
      generatedStyles.push([styleNameFill, palette]);
    }

    if (arrayLayerStyleNames.indexOf(styleNameBorder) === -1) {
      var _sharedStyle = layerStyles.push({
        name: styleNameBorder,
        style: {
          fills: [],
          borders: borders
        },
        document: document
      });

      generatedStyles.push([styleNameBorder, palette]);
    } // 2. If the style exists


    if (arrayLayerStyleNames.indexOf(styleNameFill) !== -1) {
      var existingStyleID = getLayerStyleIDFromName(styleNameFill);

      if (existingStyleID !== "") {
        var localIndex = arrayLayerStyleIDs.indexOf(existingStyleID);
        var existingStyle = layerStyles[localIndex];
        existingStyle.style.fills[0].color = fills[0].color;
        generatedStyles.push([styleNameFill, palette]);
      }
    }

    if (arrayLayerStyleNames.indexOf(styleNameBorder) !== -1) {
      var _existingStyleID = getLayerStyleIDFromName(styleNameBorder);

      if (_existingStyleID !== "") {
        var _localIndex = arrayLayerStyleIDs.indexOf(_existingStyleID);

        var _existingStyle = layerStyles[_localIndex];
        _existingStyle.style.fills[0].color = fills[0].color;
        generatedStyles.push([styleNameBorder, palette]);
      }
    }

    updateLayerStyles();
    return generatedStyles;
  } catch (createLayerStyleErr) {
    console.log(createLayerStyleErr);
  }
}

function createNewTextStyle() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var palette = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var styleDetails = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

  try {
    // styleDetails:
    // 0 = styleName (containes group + - + variant),
    // 1 = fontFamily,
    // 2 = fontLineHeight,
    // 3 = fontWeight,
    // 4 = fontKerning,
    // 5 = fontSize
    var generatedStyles = [];
    var textName = styleDetails[0];
    var styleName = theme + "/" + styleDetails[0].split("-")[0] + "/" + name + "/" + styleDetails[0];
    var fontFamily = styleDetails[1];
    var fontLineHeight = styleDetails[2];
    var fontWeight = 5;

    if (styleDetails[3] === "Medium") {
      fontWeight = 6;
    }

    var fontKerning = styleDetails[4];
    var fontSize = styleDetails[5];
    var styleColor = color + "ff".toUpperCase();
    var checkName = name.replace(/[0-9]/g, "").split("-");
    var colorVariables = document.swatches;
    var shouldSkip = false; // #region assign color variable

    colorVariables.forEach(function (variable) {
      var variableColor = variable.color.toUpperCase();
      var variableName = variable.name;
      var variableFolder = variableName.split("/")[0];

      if (shouldSkip) {
        return styleColor;
      }

      if (checkName.includes(variableFolder)) {
        if (variableColor === styleColor) {
          styleColor = variable.referencingColor;
          shouldSkip = true;
          return styleColor;
        }
      } else if (variableFolder === "neutral") {
        if (variableColor === styleColor) {
          styleColor = variable.referencingColor;
          shouldSkip = true;
          return styleColor;
        }
      } else if (variableFolder === "neutral-variant") {
        if (variableColor === styleColor) {
          styleColor = variable.referencingColor;
          shouldSkip = true;
          return styleColor;
        }
      }
    }); // #endregion assign color variable

    if (arrayTextStyleNames.indexOf(styleName) === -1) {
      var sharedStyle = textStyles.push({
        name: styleName,
        style: {
          textColor: styleColor,
          fontSize: fontSize,
          fontFamily: fontFamily,
          lineHeight: fontLineHeight,
          kerning: fontKerning,
          fontWeight: fontWeight,
          fills: [],
          borders: [],
          alignment: "left"
        },
        document: document
      });
      insertedTextStyles.push([sharedStyle.name, palette]);
      updateTextStyles();
      return sharedStyle;
    } else {
      // Update styles
      var existingStyleID = getTextStyleIDFromName(styleName);

      if (existingStyleID !== "") {
        var localIndex = arrayTextStyleIDs.indexOf(existingStyleID);
        var existingStyle = textStyles[localIndex];
        existingStyle.style.textColor = styleColor;
        existingStyle.style.fontSize = fontSize;
        existingStyle.style.fontFamily = fontFamily;
        existingStyle.style.lineHeight = fontLineHeight;
        existingStyle.style.kerning = fontKerning;
        generatedStyles.push([existingStyle.name, palette]);
        updateTextStyles();
        return existingStyle;
      } // Update titles


      styleName = folder + "H1/" + styleDetails[0];
      existingStyleID = getTextStyleIDFromName(styleName);

      if (existingStyleID !== "") {
        var _localIndex2 = arrayTextStyleIDs.indexOf(existingStyleID);

        var _existingStyle2 = textStyles[_localIndex2];
        _existingStyle2.style.textColor = styleColor;
        generatedStyles.push([_existingStyle2.name, palette]);
        updateTextStyles();
        return _existingStyle2;
      }
    }
  } catch (createTextStyleErr) {
    console.log(createTextStyleErr);
  }
}

function updateLayerStyles() {
  layerStyles = document.sharedLayerStyles;
  arrayLayerStyleIDs = layerStyles.map(function (sharedstyle) {
    return sharedstyle["id"];
  });
  arrayLayerStyleNames = layerStyles.map(function (sharedstyle) {
    return sharedstyle["name"];
  });
  arrayLayerStyleStyles = layerStyles.map(function (sharedstyle) {
    return sharedstyle["style"];
  });
}

function updateTextStyles() {
  var textStyles = document.sharedTextStyles;
  arrayTextStyleIDs = textStyles.map(function (sharedstyle) {
    return sharedstyle["id"];
  });
  arrayTextStyleNames = textStyles.map(function (sharedstyle) {
    return sharedstyle["name"];
  });
  arrayTextStyleStyles = textStyles.map(function (sharedstyle) {
    return sharedstyle["style"];
  });
}

function availableTextStyles() {
  var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var toReturn = false;
  var availableTextStyles = ["primary", "on-primary", "on-primary-container", "secondary", "on-secondary", "on-secondary-container", "tertiary", "on-tertiary", "on-tertiary-container", "error", "on-error", "on-error-container", "on-background", "on-surface", "on-surface-variant", "inverse-primary", "inverse-on-surface"]; // availableTextStyles.forEach((availableStyle) => {
  // console.log(style);

  if (availableTextStyles.includes(style.toLowerCase())) {
    toReturn = true;
  } // });


  return toReturn;
}

function getPath() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "~/Documents";
  var panel = NSOpenPanel.openPanel();
  panel.setCanChooseFiles(true);
  panel.setCanChooseDirectories(false);
  panel.setCanCreateDirectories(false);
  panel.setAllowsMultipleSelection(false);
  panel.setTitle("Select a folder");
  panel.setPrompt("Select");
  panel.setDirectoryURL(NSURL.fileURLWithPath(initialPath));
  var result = panel.runModal();

  if (result === NSFileHandlingPanelOKButton) {
    return panel.URL().path();
  } else {
    return null;
  }
} // ******************************************************************* //
// Pages management support functions                                  //
// ******************************************************************* //


function findOrCreatePage(document, name) {
  var _document$pages$filte = document.pages.filter(function (page) {
    return page.name === name;
  }),
      _document$pages$filte2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_document$pages$filte, 1),
      page = _document$pages$filte2[0];

  if (!page) {
    return new sketch_dom__WEBPACK_IMPORTED_MODULE_4__["Page"]({
      name: name,
      parent: document
    });
  } else {
    return page;
  }
}

function backgroundWithStyle(parentLayer, x, y, width, height, styleID, cornerRadius) {
  var xPosition = x;
  var yPosition = y;
  var backgroundWidth = width;
  var backgroundHeight = height;
  var backgroundColor = "#ffffff";
  var backgroundBorder = "";
  var backgroundStyleID = styleID;
  var backgroundCornerRadius = cornerRadius;
  var index = arrayLayerStyleIDs.indexOf(backgroundStyleID);
  buttonBackground = createShapePath(parentLayer, xPosition, yPosition, backgroundWidth, backgroundHeight, backgroundColor, backgroundBorder, buttonBackgroundName);
  buttonBackground.sharedStyleId = backgroundStyleID;
  buttonBackground.style = layerStyles[index].style;
  buttonBackground.points.forEach(function (point) {
    return point.cornerRadius = backgroundCornerRadius;
  });
  buttonBackground.sketchObject.setFixedRadius(backgroundCornerRadius);
  buttonBackground.moveToBack();
}
/* Manage the text */


function createTextWithStyleID(parentLayer, padding, styleID) {
  var textX = padding;
  var textY = 10;
  var textParent = parentLayer;
  var textStyleID = styleID;
  var textValue = buttonTextName;
  var textName = buttonTextName;
  var index = arrayTextStyleIDs.indexOf(textStyleID);
  var newText = new Text({
    parent: textParent,
    text: textValue
  });
  newText.frame.x = textX;
  newText.frame.y = textY;
  newText.sharedStyleId = textStyleID;
  newText.style = textStyles[index].style;
  newText.name = textName;
  return newText;
}

function createTextWithStyleName(parentLayer, posX, posY, styleName) {
  var textValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  var textName = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
  var textX = posX;
  var textY = posY;
  var textStyleID = getTextStyleIDFromName(styleName);
  var index = arrayTextStyleIDs.indexOf(textStyleID);
  var newText = new Text({
    parent: parentLayer,
    text: textValue,
    sharedStyleId: textStyleID,
    style: textStyles[index].style,
    name: textName
  });
  newText.frame.x = posX;
  newText.frame.y = posY;
  return newText;
} // ******************************************************************* //
// Handle function to manage Sketch items                              //
// ******************************************************************* //


function createArtboard(parentLayer, x, y, width, height, name) {
  var Artboard = sketch.Artboard;
  var artboard = new Artboard({
    name: name,
    parent: parentLayer,
    frame: {
      x: x,
      y: y,
      width: width,
      height: height
    }
  });
  return artboard;
}

function createShapePath(parentLayer, x, y, width, height, background, border, name) {
  var borders = [];

  if (border !== "") {
    borders = border;
  }

  var ShapePath = sketch.ShapePath;
  var newShape = new ShapePath({
    parent: parentLayer,
    frame: {
      x: x,
      y: y,
      width: width,
      height: height
    },
    style: {
      fills: [background],
      borders: borders
    },
    name: name
  });
  return newShape;
}

function createGroup(parentLayer, children, name) {
  try {
    var _Group = sketch.Group;
    var newGroup = new _Group({
      parent: parentLayer,
      layers: children,
      name: name
    });
    return newGroup;
  } catch (errGroup) {
    console.log(errGroup);
  }
}

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['onShutdown'] = __skpm_run.bind(this, 'onShutdown')

//# sourceMappingURL=__import-tokens.js.map