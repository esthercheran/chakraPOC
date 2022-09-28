var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// external-global-plugin:react
var require_react = __commonJS({
  "external-global-plugin:react"(exports, module) {
    module.exports = window.React;
  }
});

// node_modules/lodash.mergewith/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.mergewith/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function overArg(func, transform2) {
      return function(arg) {
        return func(transform2(arg));
      };
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var objectCtorString = funcToString.call(Object);
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var Symbol = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var nativeMax = Math.max;
    var nativeNow = Date.now;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject4(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size2 = data.size;
      data.set(key, value);
      this.size += data.size == size2 ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    var baseFor = createBaseFor();
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsNative(value) {
      if (!isObject4(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction3(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeysIn(object) {
      if (!isObject4(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject4(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject4(objValue) || isFunction3(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + "");
    }
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isIterateeCall(value, index, object) {
      if (!isObject4(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function overRest(func, start, transform2) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform2(array);
        return apply(func, this, otherArgs);
      };
    }
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    var setToString = shortOut(baseSetToString);
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction3(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction3(value) {
      if (!isObject4(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject4(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    var mergeWith4 = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });
    function constant(value) {
      return function() {
        return value;
      };
    }
    function identity(value) {
      return value;
    }
    function stubFalse() {
      return false;
    }
    module.exports = mergeWith4;
  }
});

// node_modules/@chakra-ui/react/dist/index.esm.js
var import_react = __toModule(require_react());

// node_modules/@chakra-ui/styled-system/dist/index.esm.js
var import_lodash = __toModule(require_lodash());
var import_lodash2 = __toModule(require_lodash());
var import_lodash3 = __toModule(require_lodash());
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function") && !Array.isArray(value);
}
var isImportant = (value) => /!(important)?$/.test(value);
var withoutImportant = (value) => typeof value === "string" ? value.replace(/!(important)?$/, "").trim() : value;
var tokenToCSSVar = (scale, value) => (theme2) => {
  const valueStr = String(value);
  const important = isImportant(valueStr);
  const valueWithoutImportant = withoutImportant(valueStr);
  const key = scale ? `${scale}.${valueWithoutImportant}` : valueWithoutImportant;
  let transformed = isObject(theme2.__cssMap) && key in theme2.__cssMap ? theme2.__cssMap[key].varRef : value;
  transformed = withoutImportant(transformed);
  return important ? `${transformed} !important` : transformed;
};
function createTransform(options) {
  const { scale, transform: transform2, compose } = options;
  const fn = (value, theme2) => {
    const _value = tokenToCSSVar(scale, value)(theme2);
    let result = (transform2 == null ? void 0 : transform2(_value, theme2)) ?? _value;
    if (compose) {
      result = compose(result, theme2);
    }
    return result;
  };
  return fn;
}
var pipe = (...fns) => (v) => fns.reduce((a, b) => b(a), v);
function toConfig(scale, transform2) {
  return (property) => {
    const result = { property, scale };
    result.transform = createTransform({
      scale,
      transform: transform2
    });
    return result;
  };
}
var getRtl = ({ rtl, ltr }) => (theme2) => theme2.direction === "rtl" ? rtl : ltr;
function logical(options) {
  const { property, scale, transform: transform2 } = options;
  return {
    scale,
    property: getRtl(property),
    transform: scale ? createTransform({
      scale,
      compose: transform2
    }) : transform2
  };
}
var transformTemplate = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function getTransformTemplate() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...transformTemplate
  ].join(" ");
}
function getTransformGpuTemplate() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...transformTemplate
  ].join(" ");
}
var filterTemplate = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
};
var backdropFilterTemplate = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate(value) {
  return {
    "--chakra-ring-offset-shadow": `var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)`,
    "--chakra-ring-shadow": `var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)`,
    "--chakra-ring-width": value,
    boxShadow: [
      `var(--chakra-ring-offset-shadow)`,
      `var(--chakra-ring-shadow)`,
      `var(--chakra-shadow, 0 0 #0000)`
    ].join(", ")
  };
}
var flexDirectionTemplate = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};
var owlSelector = "& > :not(style) ~ :not(style)";
var spaceXTemplate = {
  [owlSelector]: {
    marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
    marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
  }
};
var spaceYTemplate = {
  [owlSelector]: {
    marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
    marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
  }
};
var directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]);
var trimSpace = (str) => str.trim();
function parseGradient(value, theme2) {
  var _a7;
  if (value == null || globalSet.has(value))
    return value;
  const regex = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g;
  const { type, values } = ((_a7 = regex.exec(value)) == null ? void 0 : _a7.groups) ?? {};
  if (!type || !values)
    return value;
  const _type = type.includes("-gradient") ? type : `${type}-gradient`;
  const [maybeDirection, ...stops] = values.split(",").map(trimSpace).filter(Boolean);
  if ((stops == null ? void 0 : stops.length) === 0)
    return value;
  const direction2 = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
  stops.unshift(direction2);
  const _values = stops.map((stop) => {
    if (valueSet.has(stop))
      return stop;
    const firstStop = stop.indexOf(" ");
    const [_color, _stop] = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop];
    const _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" ");
    const key = `colors.${_color}`;
    const color2 = key in theme2.__cssMap ? theme2.__cssMap[key].varRef : _color;
    return _stopOrFunc ? [
      color2,
      ...Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]
    ].join(" ") : color2;
  });
  return `${_type}(${_values.join(", ")})`;
}
var isCSSFunction = (value) => {
  return typeof value === "string" && value.includes("(") && value.includes(")");
};
var gradientTransform = (value, theme2) => parseGradient(value, theme2 ?? {});
function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}
var analyzeCSSValue = (value) => {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), "");
  return { unitless: !unit, value: num, unit };
};
var wrap = (str) => (value) => `${str}(${value})`;
var transformFunctions = {
  filter(value) {
    return value !== "auto" ? value : filterTemplate;
  },
  backdropFilter(value) {
    return value !== "auto" ? value : backdropFilterTemplate;
  },
  ring(value) {
    return getRingTemplate(transformFunctions.px(value));
  },
  bgClip(value) {
    return value === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: value };
  },
  transform(value) {
    if (value === "auto")
      return getTransformTemplate();
    if (value === "auto-gpu")
      return getTransformGpuTemplate();
    return value;
  },
  vh(value) {
    return value === "$100vh" ? "var(--chakra-vh)" : value;
  },
  px(value) {
    if (value == null)
      return value;
    const { unitless } = analyzeCSSValue(value);
    return unitless || typeof value === "number" ? `${value}px` : value;
  },
  fraction(value) {
    return !(typeof value === "number") || value > 1 ? value : `${value * 100}%`;
  },
  float(value, theme2) {
    const map = { left: "right", right: "left" };
    return theme2.direction === "rtl" ? map[value] : value;
  },
  degree(value) {
    if (isCssVar(value) || value == null)
      return value;
    const unitless = typeof value === "string" && !value.endsWith("deg");
    return typeof value === "number" || unitless ? `${value}deg` : value;
  },
  gradient: gradientTransform,
  blur: wrap("blur"),
  opacity: wrap("opacity"),
  brightness: wrap("brightness"),
  contrast: wrap("contrast"),
  dropShadow: wrap("drop-shadow"),
  grayscale: wrap("grayscale"),
  hueRotate: wrap("hue-rotate"),
  invert: wrap("invert"),
  saturate: wrap("saturate"),
  sepia: wrap("sepia"),
  bgImage(value) {
    if (value == null)
      return value;
    const prevent = isCSSFunction(value) || globalSet.has(value);
    return !prevent ? `url(${value})` : value;
  },
  outline(value) {
    const isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: value };
  },
  flexDirection(value) {
    const { space: space22, divide: divide22 } = flexDirectionTemplate[value] ?? {};
    const result = { flexDirection: value };
    if (space22)
      result[space22] = 1;
    if (divide22)
      result[divide22] = 1;
    return result;
  }
};
var t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  radii: toConfig("radii", transformFunctions.px),
  space: toConfig("space", pipe(transformFunctions.vh, transformFunctions.px)),
  spaceT: toConfig("space", pipe(transformFunctions.vh, transformFunctions.px)),
  degreeT(property) {
    return { property, transform: transformFunctions.degree };
  },
  prop(property, scale, transform2) {
    return {
      property,
      scale,
      ...scale && {
        transform: createTransform({ scale, transform: transform2 })
      }
    };
  },
  propT(property, transform2) {
    return { property, transform: transform2 };
  },
  sizes: toConfig("sizes", pipe(transformFunctions.vh, transformFunctions.px)),
  sizesT: toConfig("sizes", pipe(transformFunctions.vh, transformFunctions.fraction)),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transformFunctions.blur)
};
var background = {
  background: t.colors("background"),
  backgroundColor: t.colors("backgroundColor"),
  backgroundImage: t.propT("backgroundImage", transformFunctions.bgImage),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: { transform: transformFunctions.bgClip },
  bgSize: t.prop("backgroundSize"),
  bgPosition: t.prop("backgroundPosition"),
  bg: t.colors("background"),
  bgColor: t.colors("backgroundColor"),
  bgPos: t.prop("backgroundPosition"),
  bgRepeat: t.prop("backgroundRepeat"),
  bgAttachment: t.prop("backgroundAttachment"),
  bgGradient: t.propT("backgroundImage", transformFunctions.gradient),
  bgClip: { transform: transformFunctions.bgClip }
};
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});
var border = {
  border: t.borders("border"),
  borderWidth: t.borderWidths("borderWidth"),
  borderStyle: t.borderStyles("borderStyle"),
  borderColor: t.colors("borderColor"),
  borderRadius: t.radii("borderRadius"),
  borderTop: t.borders("borderTop"),
  borderBlockStart: t.borders("borderBlockStart"),
  borderTopLeftRadius: t.radii("borderTopLeftRadius"),
  borderStartStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: t.radii("borderTopRightRadius"),
  borderStartEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: t.borders("borderRight"),
  borderInlineEnd: t.borders("borderInlineEnd"),
  borderBottom: t.borders("borderBottom"),
  borderBlockEnd: t.borders("borderBlockEnd"),
  borderBottomLeftRadius: t.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t.radii("borderBottomRightRadius"),
  borderLeft: t.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: t.borders(["borderLeft", "borderRight"]),
  borderInline: t.borders("borderInline"),
  borderY: t.borders(["borderTop", "borderBottom"]),
  borderBlock: t.borders("borderBlock"),
  borderTopWidth: t.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t.borderWidths("borderBlockStartWidth"),
  borderTopColor: t.colors("borderTopColor"),
  borderBlockStartColor: t.colors("borderBlockStartColor"),
  borderTopStyle: t.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t.colors("borderBottomColor"),
  borderBlockEndColor: t.colors("borderBlockEndColor"),
  borderBottomStyle: t.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t.colors("borderLeftColor"),
  borderInlineStartColor: t.colors("borderInlineStartColor"),
  borderLeftStyle: t.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t.borderWidths("borderInlineEndWidth"),
  borderRightColor: t.colors("borderRightColor"),
  borderInlineEndColor: t.colors("borderInlineEndColor"),
  borderRightStyle: t.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: t.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});
var color = {
  color: t.colors("color"),
  textColor: t.colors("color"),
  fill: t.colors("fill"),
  stroke: t.colors("stroke")
};
var effect = {
  boxShadow: t.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: t.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: t.prop("backgroundBlendMode"),
  opacity: true
};
Object.assign(effect, {
  shadow: effect.boxShadow
});
var filter = {
  filter: { transform: transformFunctions.filter },
  blur: t.blur("--chakra-blur"),
  brightness: t.propT("--chakra-brightness", transformFunctions.brightness),
  contrast: t.propT("--chakra-contrast", transformFunctions.contrast),
  hueRotate: t.degreeT("--chakra-hue-rotate"),
  invert: t.propT("--chakra-invert", transformFunctions.invert),
  saturate: t.propT("--chakra-saturate", transformFunctions.saturate),
  dropShadow: t.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
  backdropFilter: { transform: transformFunctions.backdropFilter },
  backdropBlur: t.blur("--chakra-backdrop-blur"),
  backdropBrightness: t.propT("--chakra-backdrop-brightness", transformFunctions.brightness),
  backdropContrast: t.propT("--chakra-backdrop-contrast", transformFunctions.contrast),
  backdropHueRotate: t.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: t.propT("--chakra-backdrop-invert", transformFunctions.invert),
  backdropSaturate: t.propT("--chakra-backdrop-saturate", transformFunctions.saturate)
};
var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: { transform: transformFunctions.flexDirection },
  experimental_spaceX: {
    static: spaceXTemplate,
    transform: createTransform({
      scale: "space",
      transform: (value) => value !== null ? { "--chakra-space-x": value } : null
    })
  },
  experimental_spaceY: {
    static: spaceYTemplate,
    transform: createTransform({
      scale: "space",
      transform: (value) => value != null ? { "--chakra-space-y": value } : null
    })
  },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: t.space("gap"),
  rowGap: t.space("rowGap"),
  columnGap: t.space("columnGap")
};
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection
});
var grid = {
  gridGap: t.space("gridGap"),
  gridColumnGap: t.space("gridColumnGap"),
  gridRowGap: t.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: { transform: transformFunctions.outline },
  outlineOffset: true,
  outlineColor: t.colors("outlineColor")
};
var layout = {
  width: t.sizesT("width"),
  inlineSize: t.sizesT("inlineSize"),
  height: t.sizes("height"),
  blockSize: t.sizes("blockSize"),
  boxSize: t.sizes(["width", "height"]),
  minWidth: t.sizes("minWidth"),
  minInlineSize: t.sizes("minInlineSize"),
  minHeight: t.sizes("minHeight"),
  minBlockSize: t.sizes("minBlockSize"),
  maxWidth: t.sizes("maxWidth"),
  maxInlineSize: t.sizes("maxInlineSize"),
  maxHeight: t.sizes("maxHeight"),
  maxBlockSize: t.sizes("maxBlockSize"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  float: t.propT("float", transformFunctions.float),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});
var list = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t.prop("listStyleImage")
};
function get(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize = (fn) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet = memoize(get);
var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
};
var getWithPriority = (theme2, key, styles3) => {
  const result = {};
  const obj = memoizedGet(theme2, key, {});
  for (const prop in obj) {
    const isInStyles = prop in styles3 && styles3[prop] != null;
    if (!isInStyles)
      result[prop] = obj[prop];
  }
  return result;
};
var others = {
  srOnly: {
    transform(value) {
      if (value === true)
        return srOnly;
      if (value === "focusable")
        return srFocusable;
      return {};
    }
  },
  layerStyle: {
    processResult: true,
    transform: (value, theme2, styles3) => getWithPriority(theme2, `layerStyles.${value}`, styles3)
  },
  textStyle: {
    processResult: true,
    transform: (value, theme2, styles3) => getWithPriority(theme2, `textStyles.${value}`, styles3)
  },
  apply: {
    processResult: true,
    transform: (value, theme2, styles3) => getWithPriority(theme2, value, styles3)
  }
};
var position = {
  position: true,
  pos: t.prop("position"),
  zIndex: t.prop("zIndex", "zIndices"),
  inset: t.spaceT("inset"),
  insetX: t.spaceT(["left", "right"]),
  insetInline: t.spaceT("insetInline"),
  insetY: t.spaceT(["top", "bottom"]),
  insetBlock: t.spaceT("insetBlock"),
  top: t.spaceT("top"),
  insetBlockStart: t.spaceT("insetBlockStart"),
  bottom: t.spaceT("bottom"),
  insetBlockEnd: t.spaceT("insetBlockEnd"),
  left: t.spaceT("left"),
  insetInlineStart: t.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: t.spaceT("right"),
  insetInlineEnd: t.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});
var ring = {
  ring: { transform: transformFunctions.ring },
  ringColor: t.colors("--chakra-ring-color"),
  ringOffset: t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t.colors("--chakra-ring-offset-color"),
  ringInset: t.prop("--chakra-ring-inset")
};
var space = {
  margin: t.spaceT("margin"),
  marginTop: t.spaceT("marginTop"),
  marginBlockStart: t.spaceT("marginBlockStart"),
  marginRight: t.spaceT("marginRight"),
  marginInlineEnd: t.spaceT("marginInlineEnd"),
  marginBottom: t.spaceT("marginBottom"),
  marginBlockEnd: t.spaceT("marginBlockEnd"),
  marginLeft: t.spaceT("marginLeft"),
  marginInlineStart: t.spaceT("marginInlineStart"),
  marginX: t.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: t.spaceT("marginInline"),
  marginY: t.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t.spaceT("marginBlock"),
  padding: t.space("padding"),
  paddingTop: t.space("paddingTop"),
  paddingBlockStart: t.space("paddingBlockStart"),
  paddingRight: t.space("paddingRight"),
  paddingBottom: t.space("paddingBottom"),
  paddingBlockEnd: t.space("paddingBlockEnd"),
  paddingLeft: t.space("paddingLeft"),
  paddingInlineStart: t.space("paddingInlineStart"),
  paddingInlineEnd: t.space("paddingInlineEnd"),
  paddingX: t.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: t.space("paddingInline"),
  paddingY: t.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t.space("paddingBlock")
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});
var textDecoration = {
  textDecorationColor: t.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: { property: "textDecoration" },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t.shadows("textShadow")
};
var transform = {
  clipPath: true,
  transform: t.propT("transform", transformFunctions.transform),
  transformOrigin: true,
  translateX: t.spaceT("--chakra-translate-x"),
  translateY: t.spaceT("--chakra-translate-y"),
  skewX: t.degreeT("--chakra-skew-x"),
  skewY: t.degreeT("--chakra-skew-y"),
  scaleX: t.prop("--chakra-scale-x"),
  scaleY: t.prop("--chakra-scale-y"),
  scale: t.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: t.degreeT("--chakra-rotate")
};
var transition = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t.prop("transitionDuration", "transition.duration"),
  transitionProperty: t.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: t.prop("transitionTimingFunction", "transition.easing")
};
var typography = {
  fontFamily: t.prop("fontFamily", "fonts"),
  fontSize: t.prop("fontSize", "fontSizes", transformFunctions.px),
  fontWeight: t.prop("fontWeight", "fontWeights"),
  lineHeight: t.prop("lineHeight", "lineHeights"),
  letterSpacing: t.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
};
var scroll = {
  scrollBehavior: true,
  scrollSnapAlign: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  scrollMargin: t.spaceT("scrollMargin"),
  scrollMarginTop: t.spaceT("scrollMarginTop"),
  scrollMarginBottom: t.spaceT("scrollMarginBottom"),
  scrollMarginLeft: t.spaceT("scrollMarginLeft"),
  scrollMarginRight: t.spaceT("scrollMarginRight"),
  scrollMarginX: t.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: t.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: t.spaceT("scrollPadding"),
  scrollPaddingTop: t.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: t.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: t.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: t.spaceT("scrollPaddingRight"),
  scrollPaddingX: t.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: t.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function resolveReference(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpression = (operator, ...operands) => operands.map(resolveReference).join(` ${operator} `).replace(/calc/g, "");
var add = (...operands) => `calc(${toExpression("+", ...operands)})`;
var subtract = (...operands) => `calc(${toExpression("-", ...operands)})`;
var multiply = (...operands) => `calc(${toExpression("*", ...operands)})`;
var divide = (...operands) => `calc(${toExpression("/", ...operands)})`;
var negate = (x) => {
  const value = resolveReference(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply(value, -1);
};
var calc = Object.assign((x) => ({
  add: (...operands) => calc(add(x, ...operands)),
  subtract: (...operands) => calc(subtract(x, ...operands)),
  multiply: (...operands) => calc(multiply(x, ...operands)),
  divide: (...operands) => calc(divide(x, ...operands)),
  negate: () => calc(negate(x)),
  toString: () => x.toString()
}), {
  add,
  subtract,
  multiply,
  divide,
  negate
});
function replaceWhiteSpace(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
  const valueStr = replaceWhiteSpace(value.toString());
  return escapeSymbol(escapeDot(valueStr));
}
function escapeDot(value) {
  if (value.includes("\\."))
    return value;
  const isDecimal2 = !Number.isInteger(parseFloat(value.toString()));
  return isDecimal2 ? value.replace(".", `\\.`) : value;
}
function escapeSymbol(value) {
  return value.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function addPrefix(value, prefix = "") {
  return [prefix, value].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
  return `var(${name}${fallback ? `, ${fallback}` : ""})`;
}
function toVarDefinition(value, prefix = "") {
  return escape(`--${addPrefix(value, prefix)}`);
}
function cssVar(name, fallback, cssVarPrefix) {
  const cssVariable = toVarDefinition(name, cssVarPrefix);
  return {
    variable: cssVariable,
    reference: toVarReference(cssVariable, fallback)
  };
}
var breakpoints = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
var state = {
  hover: (str, post) => `${str}:hover ${post}, ${str}[data-hover] ${post}`,
  focus: (str, post) => `${str}:focus ${post}, ${str}[data-focus] ${post}`,
  focusVisible: (str, post) => `${str}:focus-visible ${post}`,
  focusWithin: (str, post) => `${str}:focus-within ${post}`,
  active: (str, post) => `${str}:active ${post}, ${str}[data-active] ${post}`,
  disabled: (str, post) => `${str}:disabled ${post}, ${str}[data-disabled] ${post}`,
  invalid: (str, post) => `${str}:invalid ${post}, ${str}[data-invalid] ${post}`,
  checked: (str, post) => `${str}:checked ${post}, ${str}[data-checked] ${post}`,
  indeterminate: (str, post) => `${str}:indeterminate ${post}, ${str}[aria-checked=mixed] ${post}, ${str}[data-indeterminate] ${post}`,
  readOnly: (str, post) => `${str}:read-only ${post}, ${str}[readonly] ${post}, ${str}[data-read-only] ${post}`,
  expanded: (str, post) => `${str}:read-only ${post}, ${str}[aria-expanded=true] ${post}, ${str}[data-expanded] ${post}`,
  placeholderShown: (str, post) => `${str}:placeholder-shown ${post}`
};
var toGroup = (fn) => merge((v) => fn(v, "&"), "[role=group]", "[data-group]", ".group");
var toPeer = (fn) => merge((v) => fn(v, "~ &"), "[data-peer]", ".peer");
var merge = (fn, ...selectors) => selectors.map(fn).join(", ");
var pseudoSelectors = {
  _hover: "&:hover, &[data-hover]",
  _active: "&:active, &[data-active]",
  _focus: "&:focus, &[data-focus]",
  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  _disabled: "&[disabled], &[aria-disabled=true], &[data-disabled]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _checked: "&[aria-checked=true], &[data-checked]",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _valid: "&[data-valid], &[data-state=valid]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _hidden: "&[hidden], &[data-hidden]",
  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: toGroup(state.hover),
  _peerHover: toPeer(state.hover),
  _groupFocus: toGroup(state.focus),
  _peerFocus: toPeer(state.focus),
  _groupFocusVisible: toGroup(state.focusVisible),
  _peerFocusVisible: toPeer(state.focusVisible),
  _groupActive: toGroup(state.active),
  _peerActive: toPeer(state.active),
  _groupDisabled: toGroup(state.disabled),
  _peerDisabled: toPeer(state.disabled),
  _groupInvalid: toGroup(state.invalid),
  _peerInvalid: toPeer(state.invalid),
  _groupChecked: toGroup(state.checked),
  _peerChecked: toPeer(state.checked),
  _groupFocusWithin: toGroup(state.focusWithin),
  _peerFocusWithin: toPeer(state.focusWithin),
  _peerPlaceholderShown: toPeer(state.placeholderShown),
  _placeholder: "&::placeholder",
  _placeholderShown: "&:placeholder-shown",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  _mediaDark: "@media (prefers-color-scheme: dark)",
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"
};
var pseudoPropNames = Object.keys(pseudoSelectors);
var systemProps = (0, import_lodash2.default)({}, background, border, color, flexbox, layout, filter, ring, interactivity, grid, others, position, effect, space, scroll, typography, textDecoration, transform, list, transition);
var layoutSystem = Object.assign({}, space, layout, flexbox, grid, position);
var layoutPropNames = Object.keys(layoutSystem);
var propNames = [...Object.keys(systemProps), ...pseudoPropNames];
var styleProps = { ...systemProps, ...pseudoSelectors };
function defineStyle(styles3) {
  return styles3;
}
function defineStyleConfig(config2) {
  return config2;
}
function createMultiStyleConfigHelpers(parts) {
  return {
    definePartsStyle(config2) {
      return config2;
    },
    defineMultiStyleConfig(config2) {
      return { parts, ...config2 };
    }
  };
}

// node_modules/@chakra-ui/utils/dist/index.esm.js
var import_lodash4 = __toModule(require_lodash());

// node_modules/framesync/dist/es/on-next-frame.js
var defaultTimestep = 1 / 60 * 1e3;

// node_modules/@chakra-ui/utils/dist/index.esm.js
function isFunction(value) {
  return typeof value === "function";
}
function get2(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj)
      break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize2 = (fn) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet2 = memoize2(get2);
var focusableElList = [
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
];
var focusableElSelector = focusableElList.join();
var pipe2 = (...fns) => (v) => fns.reduce((a, b) => b(a), v);
var minSafeInteger = Number.MIN_SAFE_INTEGER || -9007199254740991;
var maxSafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;
var breakpoints2 = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);

// node_modules/@chakra-ui/anatomy/dist/index.esm.js
function anatomy(name, map = {}) {
  let called = false;
  function assert() {
    if (!called) {
      called = true;
      return;
    }
    throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
  }
  function parts(...values) {
    assert();
    for (const part of values) {
      ;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function extend(...parts2) {
    for (const part of parts2) {
      if (part in map)
        continue;
      map[part] = toPart(part);
    }
    return anatomy(name, map);
  }
  function selectors() {
    const value = Object.fromEntries(Object.entries(map).map(([key, part]) => [key, part.selector]));
    return value;
  }
  function classnames() {
    const value = Object.fromEntries(Object.entries(map).map(([key, part]) => [key, part.className]));
    return value;
  }
  function toPart(part) {
    const el = ["container", "root"].includes(part ?? "") ? [name] : [name, part];
    const attr = el.filter(Boolean).join("__");
    const className = `chakra-${attr}`;
    const partObj = {
      className,
      selector: `.${className}`,
      toString: () => part
    };
    return partObj;
  }
  const __type = {};
  return {
    parts,
    toPart,
    extend,
    selectors,
    classnames,
    get keys() {
      return Object.keys(map);
    },
    __type
  };
}
var accordionAnatomy = anatomy("accordion").parts("root", "container", "button", "panel").extend("icon");
var alertAnatomy = anatomy("alert").parts("title", "description", "container").extend("icon", "spinner");
var avatarAnatomy = anatomy("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
var breadcrumbAnatomy = anatomy("breadcrumb").parts("link", "item", "container").extend("separator");
var buttonAnatomy = anatomy("button").parts();
var checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container").extend("label");
var circularProgressAnatomy = anatomy("progress").parts("track", "filledTrack").extend("label");
var drawerAnatomy = anatomy("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var editableAnatomy = anatomy("editable").parts("preview", "input", "textarea");
var formAnatomy = anatomy("form").parts("container", "requiredIndicator", "helperText");
var formErrorAnatomy = anatomy("formError").parts("text", "icon");
var inputAnatomy = anatomy("input").parts("addon", "field", "element");
var listAnatomy = anatomy("list").parts("container", "item", "icon");
var menuAnatomy = anatomy("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider");
var modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
var numberInputAnatomy = anatomy("numberinput").parts("root", "field", "stepperGroup", "stepper");
var pinInputAnatomy = anatomy("pininput").parts("field");
var popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton");
var progressAnatomy = anatomy("progress").parts("label", "filledTrack", "track");
var radioAnatomy = anatomy("radio").parts("container", "control", "label");
var selectAnatomy = anatomy("select").parts("field", "icon");
var sliderAnatomy = anatomy("slider").parts("container", "track", "thumb", "filledTrack", "mark");
var statAnatomy = anatomy("stat").parts("container", "label", "helpText", "number", "icon");
var switchAnatomy = anatomy("switch").parts("container", "track", "thumb");
var tableAnatomy = anatomy("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption");
var tabsAnatomy = anatomy("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator");
var tagAnatomy = anatomy("tag").parts("container", "label", "closeButton");

// node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    n = n % max / parseFloat(String(max));
  }
  return n;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}

// node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var s = 0;
  var l = (max + min) / 2;
  if (max === min) {
    s = 0;
    h = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h, s, l };
}
function hue2rgb(p, q, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p + (q - p) * (6 * t2);
  }
  if (t2 < 1 / 2) {
    return q;
  }
  if (t2 < 2 / 3) {
    return p + (q - p) * (2 / 3 - t2) * 6;
  }
  return p;
}
function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h, s, v };
}
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t2 = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t2, v][mod];
  var g = [t2, v, v, q, p, p][mod];
  var b = [p, p, t2, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16)),
    pad2(convertDecimalToHex(a))
  ];
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color2) {
  return {
    r: color2 >> 16,
    g: (color2 & 65280) >> 8,
    b: color2 & 255
  };
}

// node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

// node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color2) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color2 === "string") {
    color2 = stringInputToObject(color2);
  }
  if (typeof color2 === "object") {
    if (isValidCSSUnit(color2.r) && isValidCSSUnit(color2.g) && isValidCSSUnit(color2.b)) {
      rgb = rgbToRgb(color2.r, color2.g, color2.b);
      ok = true;
      format = String(color2.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.v)) {
      s = convertToPercentage(color2.s);
      v = convertToPercentage(color2.v);
      rgb = hsvToRgb(color2.h, s, v);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.l)) {
      s = convertToPercentage(color2.s);
      l = convertToPercentage(color2.l);
      rgb = hslToRgb(color2.h, s, l);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color2, "a")) {
      a = color2.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color2.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color2) {
  color2 = color2.trim().toLowerCase();
  if (color2.length === 0) {
    return false;
  }
  var named = false;
  if (names[color2]) {
    color2 = names[color2];
    named = true;
  } else if (color2 === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color2);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color2);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color2) {
  return Boolean(matchers.CSS_UNIT.exec(String(color2)));
}

// node_modules/@ctrl/tinycolor/dist/module/index.js
var TinyColor = function() {
  function TinyColor2(color2, opts) {
    if (color2 === void 0) {
      color2 = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a7;
    if (color2 instanceof TinyColor2) {
      return color2;
    }
    if (typeof color2 === "number") {
      color2 = numberInputToObject(color2);
    }
    this.originalInput = color2;
    var rgb = inputToRGB(color2);
    this.originalInput = color2;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a7 = opts.format) !== null && _a7 !== void 0 ? _a7 : rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor2.prototype.isDark = function() {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function() {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function() {
    var rgb = this.toRgb();
    var R;
    var G;
    var B;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R = RsRGB / 12.92;
    } else {
      R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G = GsRGB / 12.92;
    } else {
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B = BsRGB / 12.92;
    } else {
      B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };
  TinyColor2.prototype.getAlpha = function() {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.toHsv = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  };
  TinyColor2.prototype.toHsvString = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHsl = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  };
  TinyColor2.prototype.toHslString = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHex = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toRgbString = function() {
    var r = Math.round(this.r);
    var g = Math.round(this.g);
    var b = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toPercentageRgb = function() {
    var fmt = function(x) {
      return "".concat(Math.round(bound01(x, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function() {
    var rnd = function(x) {
      return Math.round(bound01(x, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toName = function() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a7 = Object.entries(names); _i < _a7.length; _i++) {
      var _b3 = _a7[_i], key = _b3[0], value = _b3[1];
      if (hex === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function(format) {
    var formatSet = Boolean(format);
    format = format !== null && format !== void 0 ? format : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor2.prototype.clone = function() {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function() {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function(amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function(color2, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color2).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor2(rgba);
  };
  TinyColor2.prototype.analogous = function(results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function() {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function(results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h = hsv.h;
    var s = hsv.s;
    var v = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({ h, s, v }));
      v = (v + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function() {
    var hsl = this.toHsl();
    var h = hsl.h;
    return [
      this,
      new TinyColor2({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor2({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })
    ];
  };
  TinyColor2.prototype.onBackground = function(background2) {
    var fg = this.toRgb();
    var bg = new TinyColor2(background2).toRgb();
    return new TinyColor2({
      r: bg.r + (fg.r - bg.r) * fg.a,
      g: bg.g + (fg.g - bg.g) * fg.a,
      b: bg.b + (fg.b - bg.b) * fg.a
    });
  };
  TinyColor2.prototype.triad = function() {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function() {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function(n) {
    var hsl = this.toHsl();
    var h = hsl.h;
    var result = [this];
    var increment = 360 / n;
    for (var i = 1; i < n; i++) {
      result.push(new TinyColor2({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
    }
    return result;
  };
  TinyColor2.prototype.equals = function(color2) {
    return this.toRgbString() === new TinyColor2(color2).toRgbString();
  };
  return TinyColor2;
}();

// node_modules/@ctrl/tinycolor/dist/module/random.js
function random(options) {
  if (options === void 0) {
    options = {};
  }
  if (options.count !== void 0 && options.count !== null) {
    var totalColors = options.count;
    var colors3 = [];
    options.count = void 0;
    while (totalColors > colors3.length) {
      options.count = null;
      if (options.seed) {
        options.seed += 1;
      }
      colors3.push(random(options));
    }
    options.count = totalColors;
    return colors3;
  }
  var h = pickHue(options.hue, options.seed);
  var s = pickSaturation(h, options);
  var v = pickBrightness(h, s, options);
  var res = { h, s, v };
  if (options.alpha !== void 0) {
    res.a = options.alpha;
  }
  return new TinyColor(res);
}
function pickHue(hue, seed) {
  var hueRange = getHueRange(hue);
  var res = randomWithin(hueRange, seed);
  if (res < 0) {
    res = 360 + res;
  }
  return res;
}
function pickSaturation(hue, options) {
  if (options.hue === "monochrome") {
    return 0;
  }
  if (options.luminosity === "random") {
    return randomWithin([0, 100], options.seed);
  }
  var saturationRange = getColorInfo(hue).saturationRange;
  var sMin = saturationRange[0];
  var sMax = saturationRange[1];
  switch (options.luminosity) {
    case "bright":
      sMin = 55;
      break;
    case "dark":
      sMin = sMax - 10;
      break;
    case "light":
      sMax = 55;
      break;
    default:
      break;
  }
  return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H, S, options) {
  var bMin = getMinimumBrightness(H, S);
  var bMax = 100;
  switch (options.luminosity) {
    case "dark":
      bMax = bMin + 20;
      break;
    case "light":
      bMin = (bMax + bMin) / 2;
      break;
    case "random":
      bMin = 0;
      bMax = 100;
      break;
    default:
      break;
  }
  return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H, S) {
  var lowerBounds = getColorInfo(H).lowerBounds;
  for (var i = 0; i < lowerBounds.length - 1; i++) {
    var s1 = lowerBounds[i][0];
    var v1 = lowerBounds[i][1];
    var s2 = lowerBounds[i + 1][0];
    var v2 = lowerBounds[i + 1][1];
    if (S >= s1 && S <= s2) {
      var m = (v2 - v1) / (s2 - s1);
      var b = v1 - m * s1;
      return m * S + b;
    }
  }
  return 0;
}
function getHueRange(colorInput) {
  var num = parseInt(colorInput, 10);
  if (!Number.isNaN(num) && num < 360 && num > 0) {
    return [num, num];
  }
  if (typeof colorInput === "string") {
    var namedColor = bounds.find(function(n) {
      return n.name === colorInput;
    });
    if (namedColor) {
      var color2 = defineColor(namedColor);
      if (color2.hueRange) {
        return color2.hueRange;
      }
    }
    var parsed = new TinyColor(colorInput);
    if (parsed.isValid) {
      var hue = parsed.toHsv().h;
      return [hue, hue];
    }
  }
  return [0, 360];
}
function getColorInfo(hue) {
  if (hue >= 334 && hue <= 360) {
    hue -= 360;
  }
  for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
    var bound = bounds_1[_i];
    var color2 = defineColor(bound);
    if (color2.hueRange && hue >= color2.hueRange[0] && hue <= color2.hueRange[1]) {
      return color2;
    }
  }
  throw Error("Color not found");
}
function randomWithin(range, seed) {
  if (seed === void 0) {
    return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
  }
  var max = range[1] || 1;
  var min = range[0] || 0;
  seed = (seed * 9301 + 49297) % 233280;
  var rnd = seed / 233280;
  return Math.floor(min + rnd * (max - min));
}
function defineColor(bound) {
  var sMin = bound.lowerBounds[0][0];
  var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
  var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
  var bMax = bound.lowerBounds[0][1];
  return {
    name: bound.name,
    hueRange: bound.hueRange,
    lowerBounds: bound.lowerBounds,
    saturationRange: [sMin, sMax],
    brightnessRange: [bMin, bMax]
  };
}
var bounds = [
  {
    name: "monochrome",
    hueRange: null,
    lowerBounds: [
      [0, 0],
      [100, 0]
    ]
  },
  {
    name: "red",
    hueRange: [-26, 18],
    lowerBounds: [
      [20, 100],
      [30, 92],
      [40, 89],
      [50, 85],
      [60, 78],
      [70, 70],
      [80, 60],
      [90, 55],
      [100, 50]
    ]
  },
  {
    name: "orange",
    hueRange: [19, 46],
    lowerBounds: [
      [20, 100],
      [30, 93],
      [40, 88],
      [50, 86],
      [60, 85],
      [70, 70],
      [100, 70]
    ]
  },
  {
    name: "yellow",
    hueRange: [47, 62],
    lowerBounds: [
      [25, 100],
      [40, 94],
      [50, 89],
      [60, 86],
      [70, 84],
      [80, 82],
      [90, 80],
      [100, 75]
    ]
  },
  {
    name: "green",
    hueRange: [63, 178],
    lowerBounds: [
      [30, 100],
      [40, 90],
      [50, 85],
      [60, 81],
      [70, 74],
      [80, 64],
      [90, 50],
      [100, 40]
    ]
  },
  {
    name: "blue",
    hueRange: [179, 257],
    lowerBounds: [
      [20, 100],
      [30, 86],
      [40, 80],
      [50, 74],
      [60, 60],
      [70, 52],
      [80, 44],
      [90, 39],
      [100, 35]
    ]
  },
  {
    name: "purple",
    hueRange: [258, 282],
    lowerBounds: [
      [20, 100],
      [30, 87],
      [40, 79],
      [50, 70],
      [60, 65],
      [70, 59],
      [80, 52],
      [90, 45],
      [100, 42]
    ]
  },
  {
    name: "pink",
    hueRange: [283, 334],
    lowerBounds: [
      [20, 100],
      [30, 90],
      [40, 86],
      [60, 84],
      [80, 80],
      [90, 75],
      [100, 73]
    ]
  }
];

// node_modules/@chakra-ui/theme-tools/dist/index.esm.js
function dlv_es_default(t2, e, l, n, r) {
  for (e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)
    t2 = t2 ? t2[e[n]] : r;
  return t2 === r ? l : t2;
}
var isEmptyObject = (obj) => Object.keys(obj).length === 0;
var getColor = (theme2, color2, fallback) => {
  const hex = dlv_es_default(theme2, `colors.${color2}`, color2);
  const { isValid } = new TinyColor(hex);
  return isValid ? hex : fallback;
};
var tone = (color2) => (theme2) => {
  const hex = getColor(theme2, color2);
  const isDark2 = new TinyColor(hex).isDark();
  return isDark2 ? "dark" : "light";
};
var isDark = (color2) => (theme2) => tone(color2)(theme2) === "dark";
var transparentize = (color2, opacity) => (theme2) => {
  const raw = getColor(theme2, color2);
  return new TinyColor(raw).setAlpha(opacity).toRgbString();
};
function generateStripe(size2 = "1rem", color2 = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${color2} 25%,
    transparent 25%,
    transparent 50%,
    ${color2} 50%,
    ${color2} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${size2} ${size2}`
  };
}
function randomColor(opts) {
  const fallback = random().toHexString();
  if (!opts || isEmptyObject(opts)) {
    return fallback;
  }
  if (opts.string && opts.colors) {
    return randomColorFromList(opts.string, opts.colors);
  }
  if (opts.string && !opts.colors) {
    return randomColorFromString(opts.string);
  }
  if (opts.colors && !opts.string) {
    return randomFromList(opts.colors);
  }
  return fallback;
}
function randomColorFromString(str) {
  let hash = 0;
  if (str.length === 0)
    return hash.toString();
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  let color2 = "#";
  for (let j = 0; j < 3; j += 1) {
    const value = hash >> j * 8 & 255;
    color2 += `00${value.toString(16)}`.substr(-2);
  }
  return color2;
}
function randomColorFromList(str, list2) {
  let index = 0;
  if (str.length === 0)
    return list2[0];
  for (let i = 0; i < str.length; i += 1) {
    index = str.charCodeAt(i) + ((index << 5) - index);
    index = index & index;
  }
  index = (index % list2.length + list2.length) % list2.length;
  return list2[index];
}
function randomFromList(list2) {
  return list2[Math.floor(Math.random() * list2.length)];
}
function mode(light, dark) {
  return (props) => props.colorMode === "dark" ? dark : light;
}
function orient(options) {
  const { orientation, vertical, horizontal } = options;
  if (!orientation)
    return {};
  return orientation === "vertical" ? vertical : horizontal;
}
function isObject2(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function") && !Array.isArray(value);
}
function toRef(operand) {
  if (isObject2(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpr = (operator, ...operands) => operands.map(toRef).join(` ${operator} `).replace(/calc/g, "");
var add2 = (...operands) => `calc(${toExpr("+", ...operands)})`;
var subtract2 = (...operands) => `calc(${toExpr("-", ...operands)})`;
var multiply2 = (...operands) => `calc(${toExpr("*", ...operands)})`;
var divide2 = (...operands) => `calc(${toExpr("/", ...operands)})`;
var negate2 = (x) => {
  const value = toRef(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply2(value, -1);
};
var calc2 = Object.assign((x) => ({
  add: (...operands) => calc2(add2(x, ...operands)),
  subtract: (...operands) => calc2(subtract2(x, ...operands)),
  multiply: (...operands) => calc2(multiply2(x, ...operands)),
  divide: (...operands) => calc2(divide2(x, ...operands)),
  negate: () => calc2(negate2(x)),
  toString: () => x.toString()
}), {
  add: add2,
  subtract: subtract2,
  multiply: multiply2,
  divide: divide2,
  negate: negate2
});
function isDecimal(value) {
  return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace2(value, replaceValue = "-") {
  return value.replace(/\s+/g, replaceValue);
}
function escape2(value) {
  const valueStr = replaceWhiteSpace2(value.toString());
  if (valueStr.includes("\\."))
    return value;
  return isDecimal(value) ? valueStr.replace(".", `\\.`) : value;
}
function addPrefix2(value, prefix = "") {
  return [prefix, escape2(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
  return `var(${escape2(name)}${fallback ? `, ${fallback}` : ""})`;
}
function toVar(value, prefix = "") {
  return `--${addPrefix2(value, prefix)}`;
}
function cssVar2(name, options) {
  const cssVariable = toVar(name, options == null ? void 0 : options.prefix);
  return {
    variable: cssVariable,
    reference: toVarRef(cssVariable, getFallback(options == null ? void 0 : options.fallback))
  };
}
function getFallback(fallback) {
  if (typeof fallback === "string")
    return fallback;
  return fallback == null ? void 0 : fallback.reference;
}

// node_modules/@chakra-ui/theme/dist/index.esm.js
var { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(accordionAnatomy.keys);
var baseStyleContainer = defineStyle({
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
});
var baseStyleButton = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
});
var baseStylePanel = defineStyle({
  pt: "2",
  px: "4",
  pb: "5"
});
var baseStyleIcon = defineStyle({
  fontSize: "1.25em"
});
var baseStyle = definePartsStyle({
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon
});
var accordionTheme = defineMultiStyleConfig({ baseStyle });
var { definePartsStyle: definePartsStyle2, defineMultiStyleConfig: defineMultiStyleConfig2 } = createMultiStyleConfigHelpers(alertAnatomy.keys);
var $fg = cssVar("alert-fg");
var $bg = cssVar("alert-bg");
var baseStyle2 = definePartsStyle2({
  container: {
    bg: $bg.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: $fg.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: $fg.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function getBg(props) {
  const { theme: theme2, colorScheme: c } = props;
  const lightBg = getColor(theme2, `${c}.100`, c);
  const darkBg = transparentize(`${c}.200`, 0.16)(theme2);
  return mode(lightBg, darkBg)(props);
}
var variantSubtle = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  const fg = mode(`${c}.500`, `${c}.200`)(props);
  return {
    container: {
      [$bg.variable]: getBg(props),
      [$fg.variable]: `colors.${fg}`
    }
  };
});
var variantLeftAccent = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  const fg = mode(`${c}.500`, `${c}.200`)(props);
  return {
    container: {
      [$bg.variable]: getBg(props),
      [$fg.variable]: `colors.${fg}`,
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: $fg.reference
    }
  };
});
var variantTopAccent = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  const fg = mode(`${c}.500`, `${c}.200`)(props);
  return {
    container: {
      [$bg.variable]: getBg(props),
      [$fg.variable]: `colors.${fg}`,
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: $fg.reference
    }
  };
});
var variantSolid = definePartsStyle2((props) => {
  const { colorScheme: c } = props;
  const bg = mode(`${c}.500`, `${c}.200`)(props);
  const fg = mode(`white`, `gray.900`)(props);
  return {
    container: {
      [$bg.variable]: `colors.${bg}`,
      [$fg.variable]: `colors.${fg}`,
      color: $fg.reference
    }
  };
});
var variants = {
  subtle: variantSubtle,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid
};
var alertTheme = defineMultiStyleConfig2({
  baseStyle: baseStyle2,
  variants,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
});
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
};
var container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
};
var sizes = {
  ...spacing,
  ...largeSizes,
  container
};
var sizes_default = sizes;
var isFunction2 = (value) => typeof value === "function";
function runIfFn(valueOrFn, ...args) {
  return isFunction2(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
var { definePartsStyle: definePartsStyle3, defineMultiStyleConfig: defineMultiStyleConfig3 } = createMultiStyleConfigHelpers(avatarAnatomy.keys);
var baseStyleBadge = defineStyle((props) => {
  return {
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: mode("white", "gray.800")(props)
  };
});
var baseStyleExcessLabel = defineStyle((props) => {
  return {
    bg: mode("gray.200", "whiteAlpha.400")(props)
  };
});
var baseStyleContainer2 = defineStyle((props) => {
  const { name, theme: theme2 } = props;
  const bg = name ? randomColor({ string: name }) : "gray.400";
  const isBgDark = isDark(bg)(theme2);
  let color2 = "white";
  if (!isBgDark)
    color2 = "gray.800";
  const borderColor = mode("white", "gray.800")(props);
  return {
    bg,
    color: color2,
    borderColor,
    verticalAlign: "top"
  };
});
var baseStyle3 = definePartsStyle3((props) => ({
  badge: runIfFn(baseStyleBadge, props),
  excessLabel: runIfFn(baseStyleExcessLabel, props),
  container: runIfFn(baseStyleContainer2, props)
}));
function getSize(size2) {
  const themeSize = size2 !== "100%" ? sizes_default[size2] : void 0;
  return definePartsStyle3({
    container: {
      width: size2,
      height: size2,
      fontSize: `calc(${themeSize ?? size2} / 2.5)`
    },
    excessLabel: {
      width: size2,
      height: size2
    },
    label: {
      fontSize: `calc(${themeSize ?? size2} / 2.5)`,
      lineHeight: size2 !== "100%" ? themeSize ?? size2 : void 0
    }
  });
}
var sizes2 = {
  "2xs": getSize(4),
  xs: getSize(6),
  sm: getSize(8),
  md: getSize(12),
  lg: getSize(16),
  xl: getSize(24),
  "2xl": getSize(32),
  full: getSize("100%")
};
var avatarTheme = defineMultiStyleConfig3({
  baseStyle: baseStyle3,
  sizes: sizes2,
  defaultProps: { size: "md" }
});
var baseStyle4 = defineStyle({
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold"
});
var variantSolid2 = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const dark = transparentize(`${c}.500`, 0.6)(theme2);
  return {
    bg: mode(`${c}.500`, dark)(props),
    color: mode(`white`, `whiteAlpha.800`)(props)
  };
});
var variantSubtle2 = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkBg = transparentize(`${c}.200`, 0.16)(theme2);
  return {
    bg: mode(`${c}.100`, darkBg)(props),
    color: mode(`${c}.800`, `${c}.200`)(props)
  };
});
var variantOutline = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  const darkColor = transparentize(`${c}.200`, 0.8)(theme2);
  const lightColor = getColor(theme2, `${c}.500`);
  const color2 = mode(lightColor, darkColor)(props);
  return {
    color: color2,
    boxShadow: `inset 0 0 0px 1px ${color2}`
  };
});
var variants2 = {
  solid: variantSolid2,
  subtle: variantSubtle2,
  outline: variantOutline
};
var badgeTheme = defineStyleConfig({
  baseStyle: baseStyle4,
  variants: variants2,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig4, definePartsStyle: definePartsStyle4 } = createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);
var baseStyleLink = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var baseStyle5 = definePartsStyle4({
  link: baseStyleLink
});
var breadcrumbTheme = defineMultiStyleConfig4({
  baseStyle: baseStyle5
});
var baseStyle6 = defineStyle({
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
});
var variantGhost = defineStyle((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  if (c === "gray") {
    return {
      color: mode(`inherit`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props)
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) }
    };
  }
  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme2);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme2);
  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props)
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props)
    }
  };
});
var variantOutline2 = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
      marginEnd: "-1px"
    },
    ...runIfFn(variantGhost, props)
  };
});
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};
var variantSolid3 = defineStyle((props) => {
  const { colorScheme: c } = props;
  if (c === "gray") {
    const bg2 = mode(`gray.100`, `whiteAlpha.200`)(props);
    return {
      bg: bg2,
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.300`)(props),
        _disabled: {
          bg: bg2
        }
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) }
    };
  }
  const {
    bg = `${c}.500`,
    color: color2 = "white",
    hoverBg = `${c}.600`,
    activeBg = `${c}.700`
  } = accessibleColorMap[c] ?? {};
  const background2 = mode(bg, `${c}.200`)(props);
  return {
    bg: background2,
    color: mode(color2, `gray.800`)(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background2
      }
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) }
  };
});
var variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props)
    }
  };
});
var variantUnstyled = defineStyle({
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
});
var variants3 = {
  ghost: variantGhost,
  outline: variantOutline2,
  solid: variantSolid3,
  link: variantLink,
  unstyled: variantUnstyled
};
var sizes3 = {
  lg: defineStyle({
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  }),
  md: defineStyle({
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  }),
  sm: defineStyle({
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  }),
  xs: defineStyle({
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  })
};
var buttonTheme = defineStyleConfig({
  baseStyle: baseStyle6,
  variants: variants3,
  sizes: sizes3,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
});
var { definePartsStyle: definePartsStyle5, defineMultiStyleConfig: defineMultiStyleConfig5 } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);
var $size = cssVar("checkbox-size");
var baseStyleControl = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    w: $size.reference,
    h: $size.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props),
      _hover: {
        bg: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: mode(`${c}.600`, `${c}.300`)(props)
      },
      _disabled: {
        borderColor: mode("gray.200", "transparent")(props),
        bg: mode("gray.200", "whiteAlpha.300")(props),
        color: mode("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props)
    },
    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: mode("red.500", "red.300")(props)
    }
  };
});
var baseStyleContainer3 = defineStyle({
  _disabled: { cursor: "not-allowed" }
});
var baseStyleLabel = defineStyle({
  userSelect: "none",
  _disabled: { opacity: 0.4 }
});
var baseStyleIcon2 = defineStyle({
  transitionProperty: "transform",
  transitionDuration: "normal"
});
var baseStyle7 = definePartsStyle5((props) => ({
  icon: baseStyleIcon2,
  container: baseStyleContainer3,
  control: runIfFn(baseStyleControl, props),
  label: baseStyleLabel
}));
var sizes4 = {
  sm: definePartsStyle5({
    control: { [$size.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: definePartsStyle5({
    control: { [$size.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: definePartsStyle5({
    control: { [$size.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
};
var checkboxTheme = defineMultiStyleConfig5({
  baseStyle: baseStyle7,
  sizes: sizes4,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var $size2 = cssVar2("close-button-size");
var baseStyle8 = defineStyle((props) => {
  const hoverBg = mode(`blackAlpha.100`, `whiteAlpha.100`)(props);
  const activeBg = mode(`blackAlpha.200`, `whiteAlpha.200`)(props);
  return {
    w: [$size2.reference],
    h: [$size2.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none"
    },
    _hover: { bg: hoverBg },
    _active: { bg: activeBg },
    _focusVisible: {
      boxShadow: "outline"
    }
  };
});
var sizes5 = {
  lg: defineStyle({
    [$size2.variable]: "sizes.10",
    fontSize: "md"
  }),
  md: defineStyle({
    [$size2.variable]: "sizes.8",
    fontSize: "xs"
  }),
  sm: defineStyle({
    [$size2.variable]: "sizes.6",
    fontSize: "2xs"
  })
};
var closeButtonTheme = defineStyleConfig({
  baseStyle: baseStyle8,
  sizes: sizes5,
  defaultProps: {
    size: "md"
  }
});
var { variants: variants4, defaultProps } = badgeTheme;
var baseStyle9 = defineStyle({
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm"
});
var codeTheme = defineStyleConfig({
  baseStyle: baseStyle9,
  variants: variants4,
  defaultProps
});
var baseStyle10 = defineStyle({
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
});
var containerTheme = defineStyleConfig({
  baseStyle: baseStyle10
});
var baseStyle11 = defineStyle({
  opacity: 0.6,
  borderColor: "inherit"
});
var variantSolid4 = defineStyle({
  borderStyle: "solid"
});
var variantDashed = defineStyle({
  borderStyle: "dashed"
});
var variants5 = {
  solid: variantSolid4,
  dashed: variantDashed
};
var dividerTheme = defineStyleConfig({
  baseStyle: baseStyle11,
  variants: variants5,
  defaultProps: {
    variant: "solid"
  }
});
var { definePartsStyle: definePartsStyle6, defineMultiStyleConfig: defineMultiStyleConfig6 } = createMultiStyleConfigHelpers(drawerAnatomy.keys);
function getSize2(value) {
  if (value === "full") {
    return definePartsStyle6({
      dialog: { maxW: "100vw", h: "100vh" }
    });
  }
  return definePartsStyle6({
    dialog: { maxW: value }
  });
}
var baseStyleOverlay = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "overlay"
});
var baseStyleDialogContainer = defineStyle({
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
});
var baseStyleDialog = defineStyle((props) => {
  const { isFullHeight } = props;
  return {
    ...isFullHeight && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    boxShadow: mode("lg", "dark-lg")(props)
  };
});
var baseStyleHeader = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody = defineStyle({
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
});
var baseStyleFooter = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle12 = definePartsStyle6((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer,
  dialog: runIfFn(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody,
  footer: baseStyleFooter
}));
var sizes6 = {
  xs: getSize2("xs"),
  sm: getSize2("md"),
  md: getSize2("lg"),
  lg: getSize2("2xl"),
  xl: getSize2("4xl"),
  full: getSize2("full")
};
var drawerTheme = defineMultiStyleConfig6({
  baseStyle: baseStyle12,
  sizes: sizes6,
  defaultProps: {
    size: "xs"
  }
});
var { definePartsStyle: definePartsStyle7, defineMultiStyleConfig: defineMultiStyleConfig7 } = createMultiStyleConfigHelpers(editableAnatomy.keys);
var baseStylePreview = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyleInput = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyleTextarea = defineStyle({
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
});
var baseStyle13 = definePartsStyle7({
  preview: baseStylePreview,
  input: baseStyleInput,
  textarea: baseStyleTextarea
});
var editableTheme = defineMultiStyleConfig7({
  baseStyle: baseStyle13
});
var { definePartsStyle: definePartsStyle8, defineMultiStyleConfig: defineMultiStyleConfig8 } = createMultiStyleConfigHelpers(formAnatomy.keys);
var baseStyleRequiredIndicator = defineStyle((props) => {
  return {
    marginStart: "1",
    color: mode("red.500", "red.300")(props)
  };
});
var baseStyleHelperText = defineStyle((props) => {
  return {
    mt: "2",
    color: mode("gray.600", "whiteAlpha.600")(props),
    lineHeight: "normal",
    fontSize: "sm"
  };
});
var baseStyle14 = definePartsStyle8((props) => ({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: runIfFn(baseStyleRequiredIndicator, props),
  helperText: runIfFn(baseStyleHelperText, props)
}));
var formTheme = defineMultiStyleConfig8({
  baseStyle: baseStyle14
});
var { definePartsStyle: definePartsStyle9, defineMultiStyleConfig: defineMultiStyleConfig9 } = createMultiStyleConfigHelpers(formErrorAnatomy.keys);
var baseStyleText = defineStyle((props) => {
  return {
    color: mode("red.500", "red.300")(props),
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal"
  };
});
var baseStyleIcon3 = defineStyle((props) => {
  return {
    marginEnd: "0.5em",
    color: mode("red.500", "red.300")(props)
  };
});
var baseStyle15 = definePartsStyle9((props) => ({
  text: runIfFn(baseStyleText, props),
  icon: runIfFn(baseStyleIcon3, props)
}));
var formErrorTheme = defineMultiStyleConfig9({
  baseStyle: baseStyle15
});
var baseStyle16 = defineStyle({
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
});
var formLabelTheme = defineStyleConfig({
  baseStyle: baseStyle16
});
var baseStyle17 = defineStyle({
  fontFamily: "heading",
  fontWeight: "bold"
});
var sizes7 = {
  "4xl": defineStyle({
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  }),
  "3xl": defineStyle({
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  }),
  "2xl": defineStyle({
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  }),
  xl: defineStyle({
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  lg: defineStyle({
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  }),
  md: defineStyle({
    fontSize: "xl",
    lineHeight: 1.2
  }),
  sm: defineStyle({
    fontSize: "md",
    lineHeight: 1.2
  }),
  xs: defineStyle({
    fontSize: "sm",
    lineHeight: 1.2
  })
};
var headingTheme = defineStyleConfig({
  baseStyle: baseStyle17,
  sizes: sizes7,
  defaultProps: {
    size: "xl"
  }
});
var { definePartsStyle: definePartsStyle10, defineMultiStyleConfig: defineMultiStyleConfig10 } = createMultiStyleConfigHelpers(inputAnatomy.keys);
var baseStyle18 = definePartsStyle10({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
});
var size = {
  lg: defineStyle({
    fontSize: "lg",
    px: "4",
    h: "12",
    borderRadius: "md"
  }),
  md: defineStyle({
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md"
  }),
  sm: defineStyle({
    fontSize: "sm",
    px: "3",
    h: "8",
    borderRadius: "sm"
  }),
  xs: defineStyle({
    fontSize: "xs",
    px: "2",
    h: "6",
    borderRadius: "sm"
  })
};
var sizes8 = {
  lg: definePartsStyle10({
    field: size.lg,
    addon: size.lg
  }),
  md: definePartsStyle10({
    field: size.md,
    addon: size.md
  }),
  sm: definePartsStyle10({
    field: size.sm,
    addon: size.sm
  }),
  xs: definePartsStyle10({
    field: size.xs,
    addon: size.xs
  })
};
function getDefaults(props) {
  const { focusBorderColor: fc, errorBorderColor: ec } = props;
  return {
    focusBorderColor: fc || mode("blue.500", "blue.300")(props),
    errorBorderColor: ec || mode("red.500", "red.300")(props)
  };
}
var variantOutline3 = definePartsStyle10((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: mode("gray.300", "whiteAlpha.400")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0 0 0 1px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme2, fc),
        boxShadow: `0 0 0 1px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: mode("inherit", "whiteAlpha.50")(props),
      bg: mode("gray.100", "whiteAlpha.300")(props)
    }
  };
});
var variantFilled = definePartsStyle10((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props),
      _hover: {
        bg: mode("gray.200", "whiteAlpha.100")(props)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: getColor(theme2, fc)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: mode("gray.100", "whiteAlpha.50")(props)
    }
  };
});
var variantFlushed = definePartsStyle10((props) => {
  const { theme: theme2 } = props;
  const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: getColor(theme2, ec),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, ec)}`
      },
      _focusVisible: {
        borderColor: getColor(theme2, fc),
        boxShadow: `0px 1px 0px 0px ${getColor(theme2, fc)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
});
var variantUnstyled2 = definePartsStyle10({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
});
var variants6 = {
  outline: variantOutline3,
  filled: variantFilled,
  flushed: variantFlushed,
  unstyled: variantUnstyled2
};
var inputTheme = defineMultiStyleConfig10({
  baseStyle: baseStyle18,
  sizes: sizes8,
  variants: variants6,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});
var baseStyle19 = defineStyle((props) => {
  return {
    bg: mode("gray.100", "whiteAlpha")(props),
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap"
  };
});
var kbdTheme = defineStyleConfig({
  baseStyle: baseStyle19
});
var baseStyle20 = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
});
var linkTheme = defineStyleConfig({
  baseStyle: baseStyle20
});
var { defineMultiStyleConfig: defineMultiStyleConfig11, definePartsStyle: definePartsStyle11 } = createMultiStyleConfigHelpers(listAnatomy.keys);
var baseStyleIcon4 = defineStyle({
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
});
var baseStyle21 = definePartsStyle11({
  icon: baseStyleIcon4
});
var listTheme = defineMultiStyleConfig11({
  baseStyle: baseStyle21
});
var { defineMultiStyleConfig: defineMultiStyleConfig12, definePartsStyle: definePartsStyle12 } = createMultiStyleConfigHelpers(menuAnatomy.keys);
var baseStyleList = defineStyle((props) => {
  return {
    bg: mode("#fff", "gray.700")(props),
    boxShadow: mode("sm", "dark-lg")(props),
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px"
  };
});
var baseStyleItem = defineStyle((props) => {
  return {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      bg: mode("gray.100", "whiteAlpha.100")(props)
    },
    _active: {
      bg: mode("gray.200", "whiteAlpha.200")(props)
    },
    _expanded: {
      bg: mode("gray.100", "whiteAlpha.100")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
});
var baseStyleGroupTitle = defineStyle({
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
});
var baseStyleCommand = defineStyle({
  opacity: 0.6
});
var baseStyleDivider = defineStyle({
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
});
var baseStyleButton2 = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal"
});
var baseStyle22 = definePartsStyle12((props) => ({
  button: baseStyleButton2,
  list: runIfFn(baseStyleList, props),
  item: runIfFn(baseStyleItem, props),
  groupTitle: baseStyleGroupTitle,
  command: baseStyleCommand,
  divider: baseStyleDivider
}));
var menuTheme = defineMultiStyleConfig12({
  baseStyle: baseStyle22
});
var { defineMultiStyleConfig: defineMultiStyleConfig13, definePartsStyle: definePartsStyle13 } = createMultiStyleConfigHelpers(modalAnatomy.keys);
var baseStyleOverlay2 = defineStyle({
  bg: "blackAlpha.600",
  zIndex: "modal"
});
var baseStyleDialogContainer2 = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto"
  };
});
var baseStyleDialog2 = defineStyle((props) => {
  const { scrollBehavior } = props;
  return {
    borderRadius: "md",
    bg: mode("white", "gray.700")(props),
    color: "inherit",
    my: "16",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    boxShadow: mode("lg", "dark-lg")(props)
  };
});
var baseStyleHeader2 = defineStyle({
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
});
var baseStyleCloseButton2 = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3"
});
var baseStyleBody2 = defineStyle((props) => {
  const { scrollBehavior } = props;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
});
var baseStyleFooter2 = defineStyle({
  px: "6",
  py: "4"
});
var baseStyle23 = definePartsStyle13((props) => ({
  overlay: baseStyleOverlay2,
  dialogContainer: runIfFn(baseStyleDialogContainer2, props),
  dialog: runIfFn(baseStyleDialog2, props),
  header: baseStyleHeader2,
  closeButton: baseStyleCloseButton2,
  body: runIfFn(baseStyleBody2, props),
  footer: baseStyleFooter2
}));
function getSize3(value) {
  if (value === "full") {
    return definePartsStyle13({
      dialog: {
        maxW: "100vw",
        minH: "$100vh",
        my: "0",
        borderRadius: "0"
      }
    });
  }
  return definePartsStyle13({
    dialog: { maxW: value }
  });
}
var sizes9 = {
  xs: getSize3("xs"),
  sm: getSize3("sm"),
  md: getSize3("md"),
  lg: getSize3("lg"),
  xl: getSize3("xl"),
  "2xl": getSize3("2xl"),
  "3xl": getSize3("3xl"),
  "4xl": getSize3("4xl"),
  "5xl": getSize3("5xl"),
  "6xl": getSize3("6xl"),
  full: getSize3("full")
};
var modalTheme = defineMultiStyleConfig13({
  baseStyle: baseStyle23,
  sizes: sizes9,
  defaultProps: { size: "md" }
});
var typography2 = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
};
var typography_default = typography2;
var { defineMultiStyleConfig: defineMultiStyleConfig14, definePartsStyle: definePartsStyle14 } = createMultiStyleConfigHelpers(numberInputAnatomy.keys);
var $stepperWidth = cssVar2("number-input-stepper-width");
var $inputPadding = cssVar2("number-input-input-padding");
var inputPaddingValue = calc2($stepperWidth).add("0.5rem").toString();
var baseStyleRoot = defineStyle({
  [$stepperWidth.variable]: "sizes.6",
  [$inputPadding.variable]: inputPaddingValue
});
var baseStyleField = defineStyle((props) => {
  var _a7;
  return ((_a7 = runIfFn(inputTheme.baseStyle, props)) == null ? void 0 : _a7.field) ?? {};
});
var baseStyleStepperGroup = defineStyle({
  width: [$stepperWidth.reference]
});
var baseStyleStepper = defineStyle((props) => {
  return {
    borderStart: "1px solid",
    borderStartColor: mode("inherit", "whiteAlpha.300")(props),
    color: mode("inherit", "whiteAlpha.800")(props),
    _active: {
      bg: mode("gray.200", "whiteAlpha.300")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
});
var baseStyle24 = definePartsStyle14((props) => ({
  root: baseStyleRoot,
  field: baseStyleField,
  stepperGroup: baseStyleStepperGroup,
  stepper: runIfFn(baseStyleStepper, props) ?? {}
}));
function getSize4(size2) {
  var _a7, _b3;
  const sizeStyle = (_a7 = inputTheme.sizes) == null ? void 0 : _a7[size2];
  const radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };
  const _fontSize = ((_b3 = sizeStyle.field) == null ? void 0 : _b3.fontSize) ?? "md";
  const fontSize = typography_default.fontSizes[_fontSize];
  return definePartsStyle14({
    field: {
      ...sizeStyle.field,
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: calc2(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size2]
      },
      _last: {
        borderBottomEndRadius: radius[size2],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var sizes10 = {
  xs: getSize4("xs"),
  sm: getSize4("sm"),
  md: getSize4("md"),
  lg: getSize4("lg")
};
var numberInputTheme = defineMultiStyleConfig14({
  baseStyle: baseStyle24,
  sizes: sizes10,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});
var _a;
var baseStyle25 = defineStyle({
  ...(_a = inputTheme.baseStyle) == null ? void 0 : _a.field,
  textAlign: "center"
});
var sizes11 = {
  lg: defineStyle({
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  }),
  md: defineStyle({
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  }),
  sm: defineStyle({
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  }),
  xs: defineStyle({
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  })
};
var _a2;
var variants7 = {
  outline: defineStyle((props) => {
    var _a7, _b3;
    return ((_b3 = runIfFn((_a7 = inputTheme.variants) == null ? void 0 : _a7.outline, props)) == null ? void 0 : _b3.field) ?? {};
  }),
  flushed: defineStyle((props) => {
    var _a7, _b3;
    return ((_b3 = runIfFn((_a7 = inputTheme.variants) == null ? void 0 : _a7.flushed, props)) == null ? void 0 : _b3.field) ?? {};
  }),
  filled: defineStyle((props) => {
    var _a7, _b3;
    return ((_b3 = runIfFn((_a7 = inputTheme.variants) == null ? void 0 : _a7.filled, props)) == null ? void 0 : _b3.field) ?? {};
  }),
  unstyled: ((_a2 = inputTheme.variants) == null ? void 0 : _a2.unstyled.field) ?? {}
};
var pinInputTheme = defineStyleConfig({
  baseStyle: baseStyle25,
  sizes: sizes11,
  variants: variants7,
  defaultProps: inputTheme.defaultProps
});
var { defineMultiStyleConfig: defineMultiStyleConfig15, definePartsStyle: definePartsStyle15 } = createMultiStyleConfigHelpers(popoverAnatomy.keys);
var $popperBg = cssVar2("popper-bg");
var $arrowBg = cssVar2("popper-arrow-bg");
var $arrowShadowColor = cssVar2("popper-arrow-shadow-color");
var baseStylePopper = defineStyle({ zIndex: 10 });
var baseStyleContent = defineStyle((props) => {
  const bg = mode("white", "gray.700")(props);
  const shadowColor = mode("gray.200", "whiteAlpha.300")(props);
  return {
    [$popperBg.variable]: `colors.${bg}`,
    bg: $popperBg.reference,
    [$arrowBg.variable]: $popperBg.reference,
    [$arrowShadowColor.variable]: `colors.${shadowColor}`,
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: {
      outline: 0,
      boxShadow: "outline"
    }
  };
});
var baseStyleHeader3 = defineStyle({
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
});
var baseStyleBody3 = defineStyle({
  px: 3,
  py: 2
});
var baseStyleFooter3 = defineStyle({
  px: 3,
  py: 2,
  borderTopWidth: "1px"
});
var baseStyleCloseButton3 = defineStyle({
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
});
var baseStyle26 = definePartsStyle15((props) => ({
  popper: baseStylePopper,
  content: baseStyleContent(props),
  header: baseStyleHeader3,
  body: baseStyleBody3,
  footer: baseStyleFooter3,
  closeButton: baseStyleCloseButton3
}));
var popoverTheme = defineMultiStyleConfig15({
  baseStyle: baseStyle26
});
var { defineMultiStyleConfig: defineMultiStyleConfig16, definePartsStyle: definePartsStyle16 } = createMultiStyleConfigHelpers(progressAnatomy.keys);
var filledStyle = defineStyle((props) => {
  const { colorScheme: c, theme: t2, isIndeterminate, hasStripe } = props;
  const stripeStyle = mode(generateStripe(), generateStripe("1rem", "rgba(0,0,0,0.1)"))(props);
  const bgColor = mode(`${c}.500`, `${c}.200`)(props);
  const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(t2, bgColor)} 50%,
    transparent 100%
  )`;
  const addStripe = !isIndeterminate && hasStripe;
  return {
    ...addStripe && stripeStyle,
    ...isIndeterminate ? { bgImage: gradient } : { bgColor }
  };
});
var baseStyleLabel2 = defineStyle({
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
});
var baseStyleTrack = defineStyle((props) => {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
});
var baseStyleFilledTrack = defineStyle((props) => {
  return {
    transitionProperty: "common",
    transitionDuration: "slow",
    ...filledStyle(props)
  };
});
var baseStyle27 = definePartsStyle16((props) => ({
  label: baseStyleLabel2,
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack(props)
}));
var sizes12 = {
  xs: definePartsStyle16({
    track: { h: "1" }
  }),
  sm: definePartsStyle16({
    track: { h: "2" }
  }),
  md: definePartsStyle16({
    track: { h: "3" }
  }),
  lg: definePartsStyle16({
    track: { h: "4" }
  })
};
var progressTheme = defineMultiStyleConfig16({
  sizes: sizes12,
  baseStyle: baseStyle27,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig17, definePartsStyle: definePartsStyle17 } = createMultiStyleConfigHelpers(radioAnatomy.keys);
var baseStyleControl2 = defineStyle((props) => {
  var _a7;
  const controlStyle = (_a7 = runIfFn(checkboxTheme.baseStyle, props)) == null ? void 0 : _a7.control;
  return {
    ...controlStyle,
    borderRadius: "full",
    _checked: {
      ...controlStyle == null ? void 0 : controlStyle["_checked"],
      _before: {
        content: `""`,
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
});
var baseStyle28 = definePartsStyle17((props) => {
  var _a7, _b3, _c3, _d3;
  return {
    label: (_b3 = (_a7 = checkboxTheme).baseStyle) == null ? void 0 : _b3.call(_a7, props).label,
    container: (_d3 = (_c3 = checkboxTheme).baseStyle) == null ? void 0 : _d3.call(_c3, props).container,
    control: baseStyleControl2(props)
  };
});
var sizes13 = {
  md: definePartsStyle17({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: definePartsStyle17({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: definePartsStyle17({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
};
var radioTheme = defineMultiStyleConfig17({
  baseStyle: baseStyle28,
  sizes: sizes13,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig18, definePartsStyle: definePartsStyle18 } = createMultiStyleConfigHelpers(selectAnatomy.keys);
var baseStyleField2 = defineStyle((props) => {
  var _a7;
  return {
    ...(_a7 = inputTheme.baseStyle) == null ? void 0 : _a7.field,
    bg: mode("white", "gray.700")(props),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    "> option, > optgroup": {
      bg: mode("white", "gray.700")(props)
    }
  };
});
var baseStyleIcon5 = defineStyle({
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
});
var baseStyle29 = definePartsStyle18((props) => ({
  field: baseStyleField2(props),
  icon: baseStyleIcon5
}));
var iconSpacing = defineStyle({
  paddingInlineEnd: "8"
});
var _a3;
var _b;
var _c;
var _d;
var _e;
var _f;
var _g;
var _h;
var sizes14 = {
  lg: {
    ...(_a3 = inputTheme.sizes) == null ? void 0 : _a3.lg,
    field: {
      ...(_b = inputTheme.sizes) == null ? void 0 : _b.lg.field,
      ...iconSpacing
    }
  },
  md: {
    ...(_c = inputTheme.sizes) == null ? void 0 : _c.md,
    field: {
      ...(_d = inputTheme.sizes) == null ? void 0 : _d.md.field,
      ...iconSpacing
    }
  },
  sm: {
    ...(_e = inputTheme.sizes) == null ? void 0 : _e.sm,
    field: {
      ...(_f = inputTheme.sizes) == null ? void 0 : _f.sm.field,
      ...iconSpacing
    }
  },
  xs: {
    ...(_g = inputTheme.sizes) == null ? void 0 : _g.xs,
    field: {
      ...(_h = inputTheme.sizes) == null ? void 0 : _h.sm.field,
      ...iconSpacing
    },
    icon: {
      insetEnd: "1"
    }
  }
};
var selectTheme = defineMultiStyleConfig18({
  baseStyle: baseStyle29,
  sizes: sizes14,
  variants: inputTheme.variants,
  defaultProps: inputTheme.defaultProps
});
var $startColor = cssVar("skeleton-start-color");
var $endColor = cssVar("skeleton-end-color");
var baseStyle30 = defineStyle((props) => {
  const defaultStartColor = mode("gray.100", "gray.800")(props);
  const defaultEndColor = mode("gray.400", "gray.600")(props);
  const {
    startColor = defaultStartColor,
    endColor = defaultEndColor,
    theme: theme2
  } = props;
  const start = getColor(theme2, startColor);
  const end = getColor(theme2, endColor);
  return {
    [$startColor.variable]: start,
    [$endColor.variable]: end,
    opacity: 0.7,
    borderRadius: "2px",
    borderColor: start,
    background: end
  };
});
var skeletonTheme = defineStyleConfig({
  baseStyle: baseStyle30
});
var baseStyle31 = defineStyle((props) => ({
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    bg: mode("white", "gray.700")(props)
  }
}));
var skipLinkTheme = defineStyleConfig({
  baseStyle: baseStyle31
});
var { defineMultiStyleConfig: defineMultiStyleConfig19, definePartsStyle: definePartsStyle19 } = createMultiStyleConfigHelpers(sliderAnatomy.keys);
var $thumbSize = cssVar("slider-thumb-size");
var $trackSize = cssVar("slider-track-size");
var baseStyleContainer4 = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...orient({
      orientation,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
});
var baseStyleTrack2 = defineStyle((props) => {
  const orientationStyles = orient({
    orientation: props.orientation,
    horizontal: { h: $trackSize.reference },
    vertical: { w: $trackSize.reference }
  });
  return {
    ...orientationStyles,
    overflow: "hidden",
    borderRadius: "sm",
    bg: mode("gray.200", "whiteAlpha.200")(props),
    _disabled: {
      bg: mode("gray.300", "whiteAlpha.300")(props)
    }
  };
});
var baseStyleThumb = defineStyle((props) => {
  const { orientation } = props;
  const orientationStyle = orient({
    orientation,
    vertical: {
      left: "50%",
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`
      }
    },
    horizontal: {
      top: "50%",
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`
      }
    }
  });
  return {
    ...orientationStyle,
    w: $thumbSize.reference,
    h: $thumbSize.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
});
var baseStyleFilledTrack2 = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    width: "inherit",
    height: "inherit",
    bg: mode(`${c}.500`, `${c}.200`)(props)
  };
});
var baseStyle32 = definePartsStyle19((props) => ({
  container: baseStyleContainer4(props),
  track: baseStyleTrack2(props),
  thumb: baseStyleThumb(props),
  filledTrack: baseStyleFilledTrack2(props)
}));
var sizeLg = definePartsStyle19({
  container: {
    [$thumbSize.variable]: `sizes.4`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeMd = definePartsStyle19({
  container: {
    [$thumbSize.variable]: `sizes.3.5`,
    [$trackSize.variable]: `sizes.1`
  }
});
var sizeSm = definePartsStyle19({
  container: {
    [$thumbSize.variable]: `sizes.2.5`,
    [$trackSize.variable]: `sizes.0.5`
  }
});
var sizes15 = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var sliderTheme = defineMultiStyleConfig19({
  baseStyle: baseStyle32,
  sizes: sizes15,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var $size3 = cssVar2("spinner-size");
var baseStyle33 = defineStyle({
  width: [$size3.reference],
  height: [$size3.reference]
});
var sizes16 = {
  xs: defineStyle({
    [$size3.variable]: "sizes.3"
  }),
  sm: defineStyle({
    [$size3.variable]: "sizes.4"
  }),
  md: defineStyle({
    [$size3.variable]: "sizes.6"
  }),
  lg: defineStyle({
    [$size3.variable]: "sizes.8"
  }),
  xl: defineStyle({
    [$size3.variable]: "sizes.12"
  })
};
var spinnerTheme = defineStyleConfig({
  baseStyle: baseStyle33,
  sizes: sizes16,
  defaultProps: {
    size: "md"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig20, definePartsStyle: definePartsStyle20 } = createMultiStyleConfigHelpers(statAnatomy.keys);
var baseStyleLabel3 = defineStyle({
  fontWeight: "medium"
});
var baseStyleHelpText = defineStyle({
  opacity: 0.8,
  marginBottom: "2"
});
var baseStyleNumber = defineStyle({
  verticalAlign: "baseline",
  fontWeight: "semibold"
});
var baseStyleIcon6 = defineStyle({
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
});
var baseStyle34 = definePartsStyle20({
  container: {},
  label: baseStyleLabel3,
  helpText: baseStyleHelpText,
  number: baseStyleNumber,
  icon: baseStyleIcon6
});
var sizes17 = {
  md: definePartsStyle20({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
};
var statTheme = defineMultiStyleConfig20({
  baseStyle: baseStyle34,
  sizes: sizes17,
  defaultProps: {
    size: "md"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig21, definePartsStyle: definePartsStyle21 } = createMultiStyleConfigHelpers(switchAnatomy.keys);
var $width = cssVar2("switch-track-width");
var $height = cssVar2("switch-track-height");
var $diff = cssVar2("switch-track-diff");
var diffValue = calc2.subtract($width, $height);
var $translateX = cssVar2("switch-thumb-x");
var baseStyleTrack3 = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    bg: mode("gray.300", "whiteAlpha.400")(props),
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      bg: mode(`${c}.500`, `${c}.200`)(props)
    }
  };
});
var baseStyleThumb2 = defineStyle({
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: `translateX(${$translateX.reference})`
  }
});
var baseStyle35 = definePartsStyle21((props) => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: calc2($diff).negate().toString()
    }
  },
  track: baseStyleTrack3(props),
  thumb: baseStyleThumb2
}));
var sizes18 = {
  sm: definePartsStyle21({
    container: {
      [$width.variable]: "1.375rem",
      [$height.variable]: "sizes.3"
    }
  }),
  md: definePartsStyle21({
    container: {
      [$width.variable]: "1.875rem",
      [$height.variable]: "sizes.4"
    }
  }),
  lg: definePartsStyle21({
    container: {
      [$width.variable]: "2.875rem",
      [$height.variable]: "sizes.6"
    }
  })
};
var switchTheme = defineMultiStyleConfig21({
  baseStyle: baseStyle35,
  sizes: sizes18,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig22, definePartsStyle: definePartsStyle22 } = createMultiStyleConfigHelpers(tableAnatomy.keys);
var baseStyle36 = definePartsStyle22({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
});
var numericStyles = defineStyle({
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
});
var variantSimple = definePartsStyle22((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variantStripe = definePartsStyle22((props) => {
  const { colorScheme: c } = props;
  return {
    th: {
      color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    td: {
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles
    },
    caption: {
      color: mode("gray.600", "gray.100")(props)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: mode(`${c}.100`, `${c}.700`)(props)
          },
          td: {
            background: mode(`${c}.100`, `${c}.700`)(props)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
});
var variants8 = {
  simple: variantSimple,
  striped: variantStripe,
  unstyled: defineStyle({})
};
var sizes19 = {
  sm: definePartsStyle22({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: definePartsStyle22({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: definePartsStyle22({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
};
var tableTheme = defineMultiStyleConfig22({
  baseStyle: baseStyle36,
  variants: variants8,
  sizes: sizes19,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig23, definePartsStyle: definePartsStyle23 } = createMultiStyleConfigHelpers(tabsAnatomy.keys);
var baseStyleRoot2 = defineStyle((props) => {
  const { orientation } = props;
  return {
    display: orientation === "vertical" ? "flex" : "block"
  };
});
var baseStyleTab = defineStyle((props) => {
  const { isFitted } = props;
  return {
    flex: isFitted ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
});
var baseStyleTablist = defineStyle((props) => {
  const { align = "start", orientation } = props;
  const alignments = {
    end: "flex-end",
    center: "center",
    start: "flex-start"
  };
  return {
    justifyContent: alignments[align],
    flexDirection: orientation === "vertical" ? "column" : "row"
  };
});
var baseStyleTabpanel = defineStyle({
  p: 4
});
var baseStyle37 = definePartsStyle23((props) => ({
  root: baseStyleRoot2(props),
  tab: baseStyleTab(props),
  tablist: baseStyleTablist(props),
  tabpanel: baseStyleTabpanel
}));
var sizes20 = {
  sm: definePartsStyle23({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: definePartsStyle23({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: definePartsStyle23({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
};
var variantLine = definePartsStyle23((props) => {
  const { colorScheme: c, orientation } = props;
  const isVertical = orientation === "vertical";
  const borderProp = orientation === "vertical" ? "borderStart" : "borderBottom";
  const marginProp = isVertical ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [borderProp]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [borderProp]: "2px solid",
      borderColor: "transparent",
      [marginProp]: "-2px",
      _selected: {
        color: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: "currentColor"
      },
      _active: {
        bg: mode("gray.200", "whiteAlpha.300")(props)
      },
      _disabled: {
        _active: { bg: "none" }
      }
    }
  };
});
var variantEnclosed = definePartsStyle23((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      _selected: {
        color: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: "inherit",
        borderBottomColor: mode(`white`, `gray.800`)(props)
      }
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantEnclosedColored = definePartsStyle23((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      bg: mode(`gray.50`, `whiteAlpha.50`)(props),
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        bg: mode("#fff", "gray.800")(props),
        color: mode(`${c}.600`, `${c}.300`)(props),
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      }
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
});
var variantSoftRounded = definePartsStyle23((props) => {
  const { colorScheme: c, theme: theme2 } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: getColor(theme2, `${c}.700`),
        bg: getColor(theme2, `${c}.100`)
      }
    }
  };
});
var variantSolidRounded = definePartsStyle23((props) => {
  const { colorScheme: c } = props;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: mode("gray.600", "inherit")(props),
      _selected: {
        color: mode(`#fff`, "gray.800")(props),
        bg: mode(`${c}.600`, `${c}.300`)(props)
      }
    }
  };
});
var variantUnstyled3 = definePartsStyle23({});
var variants9 = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
  unstyled: variantUnstyled3
};
var tabsTheme = defineMultiStyleConfig23({
  baseStyle: baseStyle37,
  sizes: sizes20,
  variants: variants9,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
});
var { defineMultiStyleConfig: defineMultiStyleConfig24, definePartsStyle: definePartsStyle24 } = createMultiStyleConfigHelpers(tagAnatomy.keys);
var baseStyleContainer5 = defineStyle({
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  borderRadius: "md",
  _focusVisible: {
    boxShadow: "outline"
  }
});
var baseStyleLabel4 = defineStyle({
  lineHeight: 1.2,
  overflow: "visible"
});
var baseStyleCloseButton4 = defineStyle({
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
});
var baseStyle38 = definePartsStyle24({
  container: baseStyleContainer5,
  label: baseStyleLabel4,
  closeButton: baseStyleCloseButton4
});
var sizes21 = {
  sm: definePartsStyle24({
    container: {
      minH: "5",
      minW: "5",
      fontSize: "xs",
      px: "2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: definePartsStyle24({
    container: {
      minH: "6",
      minW: "6",
      fontSize: "sm",
      px: "2"
    }
  }),
  lg: definePartsStyle24({
    container: {
      minH: "8",
      minW: "8",
      fontSize: "md",
      px: "3"
    }
  })
};
var variants10 = {
  subtle: definePartsStyle24((props) => {
    var _a7;
    return {
      container: (_a7 = badgeTheme.variants) == null ? void 0 : _a7.subtle(props)
    };
  }),
  solid: definePartsStyle24((props) => {
    var _a7;
    return {
      container: (_a7 = badgeTheme.variants) == null ? void 0 : _a7.solid(props)
    };
  }),
  outline: definePartsStyle24((props) => {
    var _a7;
    return {
      container: (_a7 = badgeTheme.variants) == null ? void 0 : _a7.outline(props)
    };
  })
};
var tagTheme = defineMultiStyleConfig24({
  variants: variants10,
  baseStyle: baseStyle38,
  sizes: sizes21,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
});
var _a4;
var baseStyle39 = defineStyle({
  ...(_a4 = inputTheme.baseStyle) == null ? void 0 : _a4.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
});
var _a5;
var variants11 = {
  outline: defineStyle((props) => {
    var _a7;
    return ((_a7 = inputTheme.variants) == null ? void 0 : _a7.outline(props).field) ?? {};
  }),
  flushed: defineStyle((props) => {
    var _a7;
    return ((_a7 = inputTheme.variants) == null ? void 0 : _a7.flushed(props).field) ?? {};
  }),
  filled: defineStyle((props) => {
    var _a7;
    return ((_a7 = inputTheme.variants) == null ? void 0 : _a7.filled(props).field) ?? {};
  }),
  unstyled: ((_a5 = inputTheme.variants) == null ? void 0 : _a5.unstyled.field) ?? {}
};
var _a6;
var _b2;
var _c2;
var _d2;
var sizes22 = {
  xs: ((_a6 = inputTheme.sizes) == null ? void 0 : _a6.xs.field) ?? {},
  sm: ((_b2 = inputTheme.sizes) == null ? void 0 : _b2.sm.field) ?? {},
  md: ((_c2 = inputTheme.sizes) == null ? void 0 : _c2.md.field) ?? {},
  lg: ((_d2 = inputTheme.sizes) == null ? void 0 : _d2.lg.field) ?? {}
};
var textareaTheme = defineStyleConfig({
  baseStyle: baseStyle39,
  sizes: sizes22,
  variants: variants11,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});
var $bg2 = cssVar2("tooltip-bg");
var $fg2 = cssVar2("tooltip-fg");
var $arrowBg2 = cssVar2("popper-arrow-bg");
var baseStyle40 = defineStyle((props) => {
  const bg = mode("gray.700", "gray.300")(props);
  const fg = mode("whiteAlpha.900", "gray.900")(props);
  return {
    bg: $bg2.reference,
    color: $fg2.reference,
    [$bg2.variable]: `colors.${bg}`,
    [$fg2.variable]: `colors.${fg}`,
    [$arrowBg2.variable]: $bg2.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip"
  };
});
var tooltipTheme = defineStyleConfig({
  baseStyle: baseStyle40
});
var components = {
  Accordion: accordionTheme,
  Alert: alertTheme,
  Avatar: avatarTheme,
  Badge: badgeTheme,
  Breadcrumb: breadcrumbTheme,
  Button: buttonTheme,
  Checkbox: checkboxTheme,
  CloseButton: closeButtonTheme,
  Code: codeTheme,
  Container: containerTheme,
  Divider: dividerTheme,
  Drawer: drawerTheme,
  Editable: editableTheme,
  Form: formTheme,
  FormError: formErrorTheme,
  FormLabel: formLabelTheme,
  Heading: headingTheme,
  Input: inputTheme,
  Kbd: kbdTheme,
  Link: linkTheme,
  List: listTheme,
  Menu: menuTheme,
  Modal: modalTheme,
  NumberInput: numberInputTheme,
  PinInput: pinInputTheme,
  Popover: popoverTheme,
  Progress: progressTheme,
  Radio: radioTheme,
  Select: selectTheme,
  Skeleton: skeletonTheme,
  SkipLink: skipLinkTheme,
  Slider: sliderTheme,
  Spinner: spinnerTheme,
  Stat: statTheme,
  Switch: switchTheme,
  Table: tableTheme,
  Tabs: tabsTheme,
  Tag: tagTheme,
  Textarea: textareaTheme,
  Tooltip: tooltipTheme
};
var borders = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
};
var borders_default = borders;
var breakpoints3 = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
};
var breakpoints_default = breakpoints3;
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
};
var colors_default = colors;
var radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
var radius_default = radii;
var shadows = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
var shadows_default = shadows;
var transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
};
var transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
var transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
};
var transition2 = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration
};
var transition_default = transition2;
var zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
};
var z_index_default = zIndices;
var blur = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
};
var blur_default = blur;
var foundations = {
  breakpoints: breakpoints_default,
  zIndices: z_index_default,
  radii: radius_default,
  blur: blur_default,
  colors: colors_default,
  ...typography_default,
  sizes: sizes_default,
  shadows: shadows_default,
  space: spacing,
  borders: borders_default,
  transition: transition_default
};
var semanticTokens = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
};
var styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
      wordWrap: "break-word"
    }
  }
};
function isObject3(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function") && !Array.isArray(value);
}
var requiredChakraThemeKeys = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function isChakraTheme(unit) {
  if (!isObject3(unit)) {
    return false;
  }
  return requiredChakraThemeKeys.every((propertyName) => Object.prototype.hasOwnProperty.call(unit, propertyName));
}
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
var theme = {
  semanticTokens,
  direction,
  ...foundations,
  components,
  styles,
  config
};

// node_modules/@chakra-ui/react/dist/index.esm.js
function extendTheme(...extensions) {
  let overrides2 = [...extensions];
  let baseTheme = extensions[extensions.length - 1];
  if (isChakraTheme(baseTheme) && overrides2.length > 1) {
    overrides2 = overrides2.slice(0, overrides2.length - 1);
  } else {
    baseTheme = theme;
  }
  return pipe2(...overrides2.map((extension) => (prevTheme) => isFunction(extension) ? extension(prevTheme) : mergeThemeOverride(prevTheme, extension)))(baseTheme);
}
function mergeThemeOverride(...overrides2) {
  return (0, import_lodash4.default)({}, ...overrides2, mergeThemeCustomizer);
}
function mergeThemeCustomizer(source, override, key, object) {
  if ((isFunction(source) || isFunction(override)) && Object.prototype.hasOwnProperty.call(object, key)) {
    return (...args) => {
      const sourceValue = isFunction(source) ? source(...args) : source;
      const overrideValue = isFunction(override) ? override(...args) : override;
      return (0, import_lodash4.default)({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }
  return void 0;
}

// src/theme/index.ts
import styles2 from "./styles.js";
import Button from "./components/button.js";
import Avatar from "./components/avatar.js";
import Checkbox from "./components/checkbox.js";
import Tag from "./components/tag.js";
import Switch from "./components/switch.js";
import IconButton from "./components/iconbutton.js";
import Heading from "./components/heading.js";
import Text from "./components/text.js";
import getChakraSemanticTokens from "../getChakraSemanticTokens.js";

// src/figmaTokens.json
var colors2 = {
  light: {
    "btn-primary-default-background-color": "#a855f7",
    "btn-primary-default-text-color": "#ffffff",
    "btn-primary-default-border-color": "#0ea5e9",
    "btn-primary-default-icon-color": "#ffffff",
    "btn-primary-hover-background-color": "#38bdf8",
    "btn-primary-hover-text-color": "#ffffff",
    "btn-primary-hover-border-color": "#38bdf8",
    "btn-primary-hover-icon-color": "#ffffff",
    "btn-primary-active-background-color": "#0284c7",
    "btn-primary-active-text-color": "#ffffff",
    "btn-primary-active-border-color": "#0284c7",
    "btn-primary-active-icon-color": "#ffffff",
    "btn-primary-disabled-background-color": "#d1d5db",
    "btn-primary-disabled-text-color": "#6b7280",
    "btn-primary-disabled-border-color": "#d1d5db",
    "btn-primary-disabled-icon-color": "#6b7280",
    "btn-secondary-default-background-color": "hsla(255,0%,100%,0.01)",
    "btn-secondary-default-text-color": "#4b5563",
    "btn-secondary-default-border-color": "#4b5563",
    "btn-secondary-default-icon-color": "#4b5563",
    "btn-secondary-hover-background-color": "#d1d5db",
    "btn-secondary-hover-text-color": "#4b5563",
    "btn-secondary-hover-border-color": "#d1d5db",
    "btn-secondary-hover-icon-color": "#4b5563",
    "btn-secondary-active-background-color": "#6b7280",
    "btn-secondary-active-text-color": "#ffffff",
    "btn-secondary-active-border-color": "#6b7280",
    "btn-secondary-active-icon-color": "#ffffff",
    "btn-secondary-disabled-background-color": "#d1d5db",
    "btn-secondary-disabled-text-color": "#6b7280",
    "btn-secondary-disabled-border-color": "#d1d5db",
    "btn-secondary-disabled-icon-color": "#6b7280",
    "btn-negative-default-background-color": "#f87171",
    "btn-negative-default-text-color": "#ffffff",
    "btn-negative-default-border-color": "#f87171",
    "btn-negative-default-icon-color": "#ffffff",
    "btn-negative-hover-background-color": "#fca5a5",
    "btn-negative-hover-text-color": "#ffffff",
    "btn-negative-hover-border-color": "#fca5a5",
    "btn-negative-hover-icon-color": "#ffffff",
    "btn-negative-active-background-color": "#ef4444",
    "btn-negative-active-text-color": "#ffffff",
    "btn-negative-active-border-color": "#ef4444",
    "btn-negative-active-icon-color": "#ffffff",
    "btn-negative-disabled-background-color": "#d1d5db",
    "btn-negative-disabled-text-color": "#6b7280",
    "btn-negative-disabled-border-color": "#d1d5db",
    "btn-negative-disabled-icon-color": "#6b7280",
    "btn-focus-ring": "#e0f2fe",
    "semantic-fg-default": "#000000",
    "semantic-fg-muted": "#374151",
    "semantic-fg-subtle": "#6b7280",
    "semantic-fg-on-accent": "#ffffff",
    "semantic-fg-on-disabled": "#6b7280",
    "semantic-fg-disabled": "#d1d5db",
    "semantic-fg-accent": "#a855f7",
    "semantic-bg-surface": "#ffffff",
    "semantic-bg-muted": "#d1d5db",
    "semantic-bg-subtle": "#f3f4f6",
    "semantic-bg-canvas": "#fafafa",
    "semantic-cta-default": "#a855f7",
    "semantic-cta-emphasised": "#0284c7",
    "semantic-cta-muted": "#38bdf8",
    "semantic-cta-subtle": "#e0f2fe",
    "semantic-cta-disabled": "#9ca3af",
    "semantic-primary-default": "#0ea5e9",
    "semantic-primary-emphasised": "#0284c7",
    "semantic-primary-muted": "#38bdf8",
    "semantic-primary-subtle": "#e0f2fe",
    "semantic-primary-disabled": "#9ca3af",
    "semantic-secondary-default": "#4b5563",
    "semantic-secondary-emphasised": "#6b7280",
    "semantic-secondary-muted": "#d1d5db",
    "semantic-secondary-subtle": "#f3f4f6",
    "semantic-secondary-disabled": "#9ca3af",
    "semantic-warning-fg": "#fbbf24",
    "semantic-warning-emphasised": "#f59e0b",
    "semantic-warning-muted": "#fcd34d",
    "semantic-warning-subtle": "#fef3c7",
    "semantic-warning-on-warning": "#000000",
    "semantic-error-fg": "#f87171",
    "semantic-error-emphasised": "#ef4444",
    "semantic-error-muted": "#fca5a5",
    "semantic-error-subtle": "#fee2e2",
    "semantic-error-on-error": "#ffffff",
    "semantic-info-fg": "#2dd4bf",
    "semantic-info-emphasised": "#3b82f6",
    "semantic-info-muted": "#93c5fd",
    "semantic-info-subtle": "#dbeafe",
    "semantic-info-on-info": "#ffffff",
    "semantic-success-fg": "#34d399",
    "semantic-success-emphasised": "#10b981",
    "semantic-success-muted": "#6ee7b7",
    "semantic-success-subtle": "#d1fae5",
    "semantic-success-on-success": "#ffffff",
    "semantic-help-fg": "#c084fc",
    "semantic-help-emphasised": "#a855f7",
    "semantic-help-muted": "#d8b4fe",
    "semantic-help-subtle": "#f3e8ff",
    "semantic-help-on-success": "#ffffff",
    "semantic-neutral-fg": "#9ca3af",
    "semantic-neutral-emphasised": "#6b7280",
    "semantic-neutral-muted": "#d1d5db",
    "semantic-neutral-subtle": "#f3f4f6",
    "semantic-neutral-on-success": "#ffffff",
    "semantic-inputs-background": "#ffffff",
    "semantic-inputs-text": "#374151",
    "semantic-inputs-placeholder": "#6b7280",
    "semantic-inputs-border-default": "#d1d5db",
    "semantic-inputs-border-disabled": "#6b7280",
    "semantic-inputs-fg-disabled": "#d1d5db",
    "semantic-border-default": "#f3f4f6",
    "semantic-color-actions-negative-default-border": "#f87171",
    "semantic-color-actions-negative-default-text": "#ffffff",
    "semantic-color-actions-negative-default-background": "#f87171",
    "semantic-color-actions-negative-default-icon": "#f87171",
    "semantic-color-actions-negative-default-quiet-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-negative-default-quiet-text": "#f87171",
    "semantic-color-actions-negative-hover-border": "#fca5a5",
    "semantic-color-actions-negative-hover-text": "#ffffff",
    "semantic-color-actions-negative-hover-background": "#fca5a5",
    "semantic-color-actions-negative-hover-icon": "#fca5a5",
    "semantic-color-actions-negative-hover-quiet-background": "#fca5a5",
    "semantic-color-actions-negative-hover-quiet-text": "#ffffff",
    "semantic-color-actions-negative-active-border": "#ef4444",
    "semantic-color-actions-negative-active-text": "#ffffff",
    "semantic-color-actions-negative-active-background": "#ef4444",
    "semantic-color-actions-negative-active-icon": "#ef4444",
    "semantic-color-actions-negative-active-quiet-background": "#ef4444",
    "semantic-color-actions-negative-active-quiet-text": "#ffffff",
    "semantic-color-actions-negative-focus-border": "#f87171",
    "semantic-color-actions-negative-focus-text": "#ffffff",
    "semantic-color-actions-negative-focus-background": "#f87171",
    "semantic-color-actions-negative-focus-icon": "#f87171",
    "semantic-color-actions-negative-disabled-background": "#d1d5db",
    "semantic-color-actions-negative-disabled-text": "#6b7280",
    "semantic-color-actions-negative-disabled-border": "#d1d5db",
    "semantic-color-actions-negative-disabled-icon": "#d1d5db",
    "semantic-color-actions-cta-default-border-color": "#a855f7",
    "semantic-color-actions-cta-default-text-color": "#ffffff",
    "semantic-color-actions-cta-default-background-color": "#a855f7",
    "semantic-color-actions-cta-hover-border-color": "#38bdf8",
    "semantic-color-actions-cta-hover-text-color": "#ffffff",
    "semantic-color-actions-cta-hover-background-color": "#38bdf8",
    "semantic-color-actions-cta-active-border-color": "#0284c7",
    "semantic-color-actions-cta-active-text-color": "#ffffff",
    "semantic-color-actions-cta-active-background-color": "#0284c7",
    "semantic-color-actions-cta-focus-border-color": "#a855f7",
    "semantic-color-actions-cta-focus-text-color": "#ffffff",
    "semantic-color-actions-cta-focus-background-color": "#a855f7",
    "semantic-color-actions-primary-default-border": "#0ea5e9",
    "semantic-color-actions-primary-default-text": "#ffffff",
    "semantic-color-actions-primary-default-background": "#0ea5e9",
    "semantic-color-actions-primary-default-quiet-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-primary-hover-border": "#38bdf8",
    "semantic-color-actions-primary-hover-text": "#ffffff",
    "semantic-color-actions-primary-hover-background": "#38bdf8",
    "semantic-color-actions-primary-hover-quiet-background": "#38bdf8",
    "semantic-color-actions-primary-active-border": "#0284c7",
    "semantic-color-actions-primary-active-text": "#ffffff",
    "semantic-color-actions-primary-active-background": "#0284c7",
    "semantic-color-actions-primary-active-quiet-background": "#0284c7",
    "semantic-color-actions-primary-focus-border": "#0ea5e9",
    "semantic-color-actions-primary-focus-quiet-border": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-primary-focus-text": "#0ea5e9",
    "semantic-color-actions-primary-focus-quiet-text": "#0ea5e9",
    "semantic-color-actions-primary-focus-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-primary-focus-quiet-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-primary-disabled-background": "#d1d5db",
    "semantic-color-actions-primary-disabled-text": "#6b7280",
    "semantic-color-actions-primary-disabled-border": "#d1d5db",
    "semantic-color-actions-secondary-default-border": "#4b5563",
    "semantic-color-actions-secondary-default-quiet-border": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-default-text": "#4b5563",
    "semantic-color-actions-secondary-default-quiet-text": "#4b5563",
    "semantic-color-actions-secondary-default-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-default-quiet-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-hover-border": "#d1d5db",
    "semantic-color-actions-secondary-hover-quiet-border": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-hover-text": "#4b5563",
    "semantic-color-actions-secondary-hover-quiet-text": "#4b5563",
    "semantic-color-actions-secondary-hover-background": "#d1d5db",
    "semantic-color-actions-secondary-hover-quiet-background": "#d1d5db",
    "semantic-color-actions-secondary-active-border": "#6b7280",
    "semantic-color-actions-secondary-active-quiet-border": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-active-text": "#ffffff",
    "semantic-color-actions-secondary-active-quiet-text": "#ffffff",
    "semantic-color-actions-secondary-active-background": "#6b7280",
    "semantic-color-actions-secondary-active-quiet-background": "#6b7280",
    "semantic-color-actions-secondary-focus-border": "#4b5563",
    "semantic-color-actions-secondary-focus-quiet-border": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-focus-text": "#4b5563",
    "semantic-color-actions-secondary-focus-quiet-text": "#4b5563",
    "semantic-color-actions-secondary-focus-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-focus-quiet-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-disabled-background": "#d1d5db",
    "semantic-color-actions-secondary-disabled-text": "#6b7280",
    "semantic-color-actions-secondary-disabled-border": "#d1d5db",
    "semantic-color-inputs-default-border-color": "#d1d5db",
    "semantic-color-inputs-default-text-color": "#374151",
    "semantic-color-inputs-default-icon-color": "#374151",
    "semantic-color-inputs-default-background-color": "#ffffff",
    "semantic-color-inputs-selected-default-border-color": "#a855f7",
    "semantic-color-inputs-selected-default-text-color": "#a855f7",
    "semantic-color-inputs-selected-default-icon-color": "#a855f7",
    "semantic-color-inputs-selected-default-background-color": "#ffffff",
    "semantic-color-inputs-selected-hover-border-color": "#38bdf8",
    "semantic-color-inputs-selected-hover-text-color": "#38bdf8",
    "semantic-color-inputs-selected-hover-icon-color": "#38bdf8",
    "semantic-color-inputs-selected-hover-background-color": "#ffffff",
    "semantic-color-inputs-error-border-color": "#f87171",
    "semantic-color-inputs-error-text-color": "#f87171",
    "semantic-color-inputs-error-icon-color": "#f87171",
    "semantic-color-inputs-error-background-color": "#ffffff",
    "semantic-color-inputs-disabled-background-color": "#d1d5db",
    "semantic-color-inputs-disabled-text-color": "#6b7280",
    "semantic-color-inputs-disabled-icon-color": "#6b7280",
    "semantic-color-inputs-disabled-border-color": "#6b7280",
    "semantic-color-inputs-hover-border-color": "#d1d5db",
    "semantic-color-inputs-hover-text-color": "#374151",
    "semantic-color-inputs-hover-icon-color": "#374151",
    "semantic-color-inputs-hover-background-color": "#ffffff",
    "semantic-color-inputs-focus-border-color": "#d1d5db",
    "semantic-color-inputs-focus-text-color": "#374151",
    "semantic-color-inputs-focus-icon-color": "#374151",
    "semantic-color-inputs-focus-background-color": "#ffffff",
    "semantic-color-inputs-focus-focus-ring": "#eff6ff",
    "semantic-color-feedback-info-border-color": "#2dd4bf",
    "semantic-color-feedback-info-text-color": "#2dd4bf",
    "semantic-color-feedback-info-icon-color": "#2dd4bf",
    "semantic-color-feedback-info-background-color": "#dbeafe",
    "semantic-color-feedback-warning-border-color": "#fbbf24",
    "semantic-color-feedback-warning-text-color": "#fbbf24",
    "semantic-color-feedback-warning-icon-color": "#fbbf24",
    "semantic-color-feedback-warning-background-color": "#fef3c7",
    "semantic-color-feedback-success-border-color": "#34d399",
    "semantic-color-feedback-success-text-color": "#34d399",
    "semantic-color-feedback-success-icon-color": "#34d399",
    "semantic-color-feedback-success-background-color": "#d1fae5",
    "semantic-color-feedback-help-border-color": "#c084fc",
    "semantic-color-feedback-help-text-color": "#c084fc",
    "semantic-color-feedback-help-icon-color": "#c084fc",
    "semantic-color-feedback-help-background-color": "#f3e8ff",
    "semantic-color-feedback-neutral-border-color": "#9ca3af",
    "semantic-color-feedback-neutral-text-color": "#9ca3af",
    "semantic-color-feedback-neutral-icon-color": "#9ca3af",
    "semantic-color-feedback-neutral-background-color": "#f3f4f6",
    "semantic-color-feedback-error-border-color": "#f87171",
    "semantic-color-feedback-error-text-color": "#f87171",
    "semantic-color-feedback-error-icon-color": "#f87171",
    "semantic-color-feedback-error-background-color": "#fee2e2",
    "semantic-color-typography-default": "#374151",
    "semantic-color-typography-on-background": "#ffffff",
    "semantic-color-status-info-border-color": "#2dd4bf",
    "semantic-color-status-info-text-color": "#2dd4bf",
    "semantic-color-status-info-icon-color": "#2dd4bf",
    "semantic-color-status-info-background-color": "#dbeafe",
    "semantic-color-status-warning-border-color": "#fbbf24",
    "semantic-color-status-warning-text-color": "#fbbf24",
    "semantic-color-status-warning-icon-color": "#fbbf24",
    "semantic-color-status-warning-background-color": "#fef3c7",
    "semantic-color-status-success-border-color": "#34d399",
    "semantic-color-status-success-text-color": "#34d399",
    "semantic-color-status-success-icon-color": "#34d399",
    "semantic-color-status-success-background-color": "#d1fae5",
    "semantic-color-status-help-border-color": "#c084fc",
    "semantic-color-status-help-text-color": "#c084fc",
    "semantic-color-status-help-icon-color": "#c084fc",
    "semantic-color-status-help-background-color": "#f3e8ff",
    "semantic-color-status-neutral-border-color": "#9ca3af",
    "semantic-color-status-neutral-text-color": "#9ca3af",
    "semantic-color-status-neutral-icon-color": "#9ca3af",
    "semantic-color-status-neutral-background-color": "#f3f4f6",
    "semantic-color-status-error-border-color": "#f87171",
    "semantic-color-status-error-text-color": "#f87171",
    "semantic-color-status-error-icon-color": "#f87171",
    "semantic-color-status-error-background-color": "#fee2e2",
    "semantic-color-navigation-background": "#a855f7",
    "semantic-color-navigation-border": "#0284c7",
    "semantic-color-navigation-text": "#ffffff",
    "semantic-color-navigation-icon": "#ffffff",
    "semantic-color-focus-border": "#e0f2fe",
    "color-slate-50": "#f8fafc",
    "color-slate-100": "#f1f5f9",
    "color-slate-200": "#e2e8f0",
    "color-slate-300": "#cbd5e1",
    "color-slate-400": "#94a3b8",
    "color-slate-500": "#64748b",
    "color-slate-600": "#475569",
    "color-slate-700": "#334155",
    "color-slate-800": "#1e293b",
    "color-slate-900": "#0f172a",
    "color-gray-50": "#f9fafb",
    "color-gray-100": "#f3f4f6",
    "color-gray-200": "#e5e7eb",
    "color-gray-300": "#d1d5db",
    "color-gray-400": "#9ca3af",
    "color-gray-500": "#6b7280",
    "color-gray-600": "#4b5563",
    "color-gray-700": "#374151",
    "color-gray-800": "#1f2937",
    "color-gray-900": "#111827",
    "color-zinc-50": "#fafafa",
    "color-zinc-100": "#f4f4f5",
    "color-zinc-200": "#e4e4e7",
    "color-zinc-300": "#d4d4d8",
    "color-zinc-400": "#a1a1aa",
    "color-zinc-500": "#71717a",
    "color-zinc-600": "#52525b",
    "color-zinc-700": "#3f3f46",
    "color-zinc-800": "#27272a",
    "color-zinc-900": "#18181b",
    "color-neutral-gray-50": "#fafafa",
    "color-neutral-gray-100": "#f5f5f5",
    "color-neutral-gray-200": "#e5e5e5",
    "color-neutral-gray-300": "#d4d4d4",
    "color-neutral-gray-400": "#a3a3a3",
    "color-neutral-gray-500": "#737373",
    "color-neutral-gray-600": "#525252",
    "color-neutral-gray-700": "#404040",
    "color-neutral-gray-800": "#262626",
    "color-neutral-gray-900": "#171717",
    "color-stone-50": "#fafaf9",
    "color-stone-100": "#f5f5f4",
    "color-stone-200": "#e7e5e4",
    "color-stone-300": "#d6d3d1",
    "color-stone-400": "#a8a29e",
    "color-stone-500": "#78716c",
    "color-stone-600": "#57534e",
    "color-stone-700": "#44403c",
    "color-stone-800": "#292524",
    "color-stone-900": "#1c1917",
    "color-red-50": "#fef2f2",
    "color-red-100": "#fee2e2",
    "color-red-200": "#fecaca",
    "color-red-300": "#fca5a5",
    "color-red-400": "#f87171",
    "color-red-500": "#ef4444",
    "color-red-600": "#dc2626",
    "color-red-700": "#b91c1c",
    "color-red-800": "#991b1b",
    "color-red-900": "#7f1d1d",
    "color-orange-50": "#fff7ed",
    "color-orange-100": "#ffedd5",
    "color-orange-200": "#fed7aa",
    "color-orange-300": "#fdba74",
    "color-orange-400": "#fb923c",
    "color-orange-500": "#f97316",
    "color-orange-600": "#ea580c",
    "color-orange-700": "#c2410c",
    "color-orange-800": "#9a3412",
    "color-orange-900": "#7c2d12",
    "color-amber-50": "#fffbeb",
    "color-amber-100": "#fef3c7",
    "color-amber-200": "#fde68a",
    "color-amber-300": "#fcd34d",
    "color-amber-400": "#fbbf24",
    "color-amber-500": "#f59e0b",
    "color-amber-600": "#d97706",
    "color-amber-700": "#b45309",
    "color-amber-800": "#92400e",
    "color-amber-900": "#78350f",
    "color-yellow-50": "#fefce8",
    "color-yellow-100": "#fef9c3",
    "color-yellow-200": "#fef08a",
    "color-yellow-300": "#fde047",
    "color-yellow-400": "#facc15",
    "color-yellow-500": "#eab308",
    "color-yellow-600": "#ca8a04",
    "color-yellow-700": "#a16207",
    "color-yellow-800": "#854d0e",
    "color-yellow-900": "#713f12",
    "color-lime-50": "#f7fee7",
    "color-lime-100": "#ecfccb",
    "color-lime-200": "#d9f99d",
    "color-lime-300": "#bef264",
    "color-lime-400": "#a3e635",
    "color-lime-500": "#84cc16",
    "color-lime-600": "#65a30d",
    "color-lime-700": "#4d7c0f",
    "color-lime-800": "#3f6212",
    "color-lime-900": "#365314",
    "color-green-50": "#f0fdf4",
    "color-green-100": "#dcfce7",
    "color-green-200": "#bbf7d0",
    "color-green-300": "#86efac",
    "color-green-400": "#4ade80",
    "color-green-500": "#22c55e",
    "color-green-600": "#16a34a",
    "color-green-700": "#15803d",
    "color-green-800": "#166534",
    "color-green-900": "#14532d",
    "color-emerald-50": "#ecfdf5",
    "color-emerald-100": "#d1fae5",
    "color-emerald-200": "#a7f3d0",
    "color-emerald-300": "#6ee7b7",
    "color-emerald-400": "#34d399",
    "color-emerald-500": "#10b981",
    "color-emerald-600": "#059669",
    "color-emerald-700": "#047857",
    "color-emerald-800": "#065f46",
    "color-emerald-900": "#064e3b",
    "color-teal-50": "#f0fdfa",
    "color-teal-100": "#ccfbf1",
    "color-teal-200": "#99f6e4",
    "color-teal-300": "#5eead4",
    "color-teal-400": "#2dd4bf",
    "color-teal-500": "#14b8a6",
    "color-teal-600": "#0d9488",
    "color-teal-700": "#0f766e",
    "color-teal-800": "#115e59",
    "color-teal-900": "#134e4a",
    "color-cyan-50": "#ecfeff",
    "color-cyan-100": "#cffafe",
    "color-cyan-200": "#a5f3fc",
    "color-cyan-300": "#67e8f9",
    "color-cyan-400": "#22d3ee",
    "color-cyan-500": "#06b6d4",
    "color-cyan-600": "#0891b2",
    "color-cyan-700": "#0e7490",
    "color-cyan-800": "#155e75",
    "color-cyan-900": "#164e63",
    "color-sky-50": "#f0f9ff",
    "color-sky-100": "#e0f2fe",
    "color-sky-200": "#bae6fd",
    "color-sky-300": "#7dd3fc",
    "color-sky-400": "#38bdf8",
    "color-sky-500": "#0ea5e9",
    "color-sky-600": "#0284c7",
    "color-sky-700": "#0369a1",
    "color-sky-800": "#075985",
    "color-sky-900": "#0c4a6e",
    "color-blue-50": "#eff6ff",
    "color-blue-100": "#dbeafe",
    "color-blue-200": "#bfdbfe",
    "color-blue-300": "#93c5fd",
    "color-blue-400": "#60a5fa",
    "color-blue-500": "#3b82f6",
    "color-blue-600": "#2563eb",
    "color-blue-700": "#1d4ed8",
    "color-blue-800": "#1e40af",
    "color-blue-900": "#1e3a8a",
    "color-indigo-50": "#eef2ff",
    "color-indigo-100": "#e0e7ff",
    "color-indigo-200": "#c7d2fe",
    "color-indigo-300": "#a5b4fc",
    "color-indigo-400": "#818cf8",
    "color-indigo-500": "#6366f1",
    "color-indigo-600": "#4f46e5",
    "color-indigo-700": "#4338ca",
    "color-indigo-800": "#3730a3",
    "color-indigo-900": "#312e81",
    "color-violet-50": "#f5f3ff",
    "color-violet-100": "#ede9fe",
    "color-violet-200": "#ddd6fe",
    "color-violet-300": "#c4b5fd",
    "color-violet-400": "#a78bfa",
    "color-violet-500": "#8b5cf6",
    "color-violet-600": "#7c3aed",
    "color-violet-700": "#6d28d9",
    "color-violet-800": "#5b21b6",
    "color-violet-900": "#4c1d95",
    "color-purple-50": "#faf5ff",
    "color-purple-100": "#f3e8ff",
    "color-purple-200": "#e9d5ff",
    "color-purple-300": "#d8b4fe",
    "color-purple-400": "#c084fc",
    "color-purple-500": "#a855f7",
    "color-purple-600": "#9333ea",
    "color-purple-700": "#7e22ce",
    "color-purple-800": "#6b21a8",
    "color-purple-900": "#581c87",
    "color-fuchsia-50": "#fdf4ff",
    "color-fuchsia-100": "#fae8ff",
    "color-fuchsia-200": "#f5d0fe",
    "color-fuchsia-300": "#f0abfc",
    "color-fuchsia-400": "#e879f9",
    "color-fuchsia-500": "#d946ef",
    "color-fuchsia-600": "#c026d3",
    "color-fuchsia-700": "#a21caf",
    "color-fuchsia-800": "#86198f",
    "color-fuchsia-900": "#701a75",
    "color-pink-50": "#fdf2f8",
    "color-pink-100": "#fce7f3",
    "color-pink-200": "#fbcfe8",
    "color-pink-300": "#f9a8d4",
    "color-pink-400": "#f472b6",
    "color-pink-500": "#ec4899",
    "color-pink-600": "#db2777",
    "color-pink-700": "#be185d",
    "color-pink-800": "#9d174d",
    "color-pink-900": "#831843",
    "color-rose-50": "#fff1f2",
    "color-rose-100": "#ffe4e6",
    "color-rose-200": "#fecdd3",
    "color-rose-300": "#fda4af",
    "color-rose-400": "#fb7185",
    "color-rose-500": "#f43f5e",
    "color-rose-600": "#e11d48",
    "color-rose-700": "#be123c",
    "color-rose-800": "#9f1239",
    "color-rose-900": "#881337",
    "color-neutrals-black": "#000000",
    "color-neutrals-white": "#ffffff",
    "color-neutrals-transparent": "hsla(255,0%,100%,0.01)",
    "checkbox-unselected-default-border-color": "#a855f7",
    "checkbox-unselected-default-background-color": "#ffffff",
    "checkbox-unselected-error-border-color": "#f87171",
    "checkbox-unselected-error-background-color": "#ffffff",
    "checkbox-unselected-disabled-border-color": "#6b7280",
    "checkbox-unselected-disabled-background-color": "#d1d5db",
    "checkbox-selected-default-border-color": "#a855f7",
    "checkbox-selected-default-background-color": "#a855f7",
    "checkbox-selected-hover-border-color": "#38bdf8",
    "checkbox-selected-hover-background-color": "#38bdf8",
    "checkbox-selected-disabled-border-color": "#6b7280",
    "checkbox-selected-disabled-background-color": "#d1d5db",
    "checkbox-checkmark-selected-default-icon-color": "#ffffff",
    "checkbox-checkmark-selected-hover-icon-color": "#ffffff",
    "checkbox-checkmark-selected-disabled-icon-color": "#6b7280",
    "input-default-outlined-border-color": "#d1d5db",
    "input-default-outlined-background-color": "#ffffff",
    "input-default-outlined-text-color": "#374151",
    "input-default-outlined-icon-color": "#374151",
    "input-default-filled-background-color": "#ffffff",
    "input-default-filled-text-color": "#d1d5db",
    "input-default-filled-icon-color": "#d1d5db",
    "input-default-flushed-border-color": "#d1d5db",
    "input-default-flushed-background-color": "#ffffff",
    "input-default-flushed-text-color": "#374151",
    "input-default-flushed-icon-color": "#374151",
    "input-hover-outlined-border-color": "#d1d5db",
    "input-hover-outlined-background-color": "#ffffff",
    "input-hover-outlined-text-color": "#374151",
    "input-hover-outlined-icon-color": "#374151",
    "input-hover-filled-background-color": "#f3f4f6",
    "input-hover-filled-text-color": "#d1d5db",
    "input-hover-filled-icon-color": "#d1d5db",
    "input-hover-flushed-border-color": "#d1d5db",
    "input-hover-flushed-background-color": "#f3f4f6",
    "input-hover-flushed-text-color": "#d1d5db",
    "input-hover-flushed-icon-color": "#d1d5db",
    "input-focus-outlined-border-color": "#eff6ff",
    "input-focus-outlined-background-color": "#ffffff",
    "input-focus-outlined-text-color": "#374151",
    "input-focus-outlined-icon-color": "#374151",
    "input-focus-filled-border-color": "#eff6ff",
    "input-focus-filled-background-color": "#ffffff",
    "input-focus-filled-text-color": "#d1d5db",
    "input-focus-filled-icon-color": "#d1d5db",
    "input-focus-flushed-border-color": "#eff6ff",
    "input-focus-flushed-background-color": "#ffffff",
    "input-invalid-outlined-border-color": "#f87171",
    "input-invalid-outlined-background-color": "#ffffff",
    "input-invalid-outlined-text-color": "#f87171",
    "input-invalid-filled-border-color": "#f87171",
    "input-invalid-filled-background-color": "#ffffff",
    "input-invalid-filled-text-color": "#f87171",
    "input-invalid-flushed-border-color": "#f87171",
    "input-invalid-flushed-background-color": "#ffffff",
    "input-invalid-flushed-text-color": "#f87171",
    "input-invalid-icon-icon-color": "#f87171",
    "input-disabled-border-color": "#6b7280",
    "input-disabled-background-color": "#d1d5db",
    "input-disabled-text-color": "#6b7280",
    "input-disabled-icon-color": "#6b7280",
    "input-add-on-background-color": "#f3f4f6",
    "radio-unselected-default-border-color": "#a855f7",
    "radio-unselected-default-background-color": "#ffffff",
    "radio-unselected-error-border-color": "#f87171",
    "radio-unselected-error-background-color": "#ffffff",
    "radio-unselected-disabled-border-color": "#6b7280",
    "radio-unselected-disabled-background-color": "#d1d5db",
    "radio-selected-default-border-color": "#a855f7",
    "radio-selected-default-background-color": "#ffffff",
    "radio-selected-hover-border-color": "#38bdf8",
    "radio-selected-hover-background-color": "#ffffff",
    "radio-selected-disabled-border-color": "#6b7280",
    "radio-checkmark-selected-default-background-color": "#ffffff",
    "radio-checkmark-selected-hover-background-color": "#ffffff",
    "radio-checkmark-selected-disabled-background-color": "#d1d5db",
    "select-default-border-color": "#d1d5db",
    "select-default-background-color": "#ffffff",
    "select-default-text-color": "#374151",
    "select-default-icon-color": "#374151",
    "select-hover-border-color": "#d1d5db",
    "select-hover-background-color": "#ffffff",
    "select-hover-text-color": "#374151",
    "select-hover-icon-color": "#374151",
    "select-focus-border-color": "#eff6ff",
    "select-focus-background-color": "#ffffff",
    "select-focus-text-color": "#374151",
    "select-focus-icon-color": "#374151",
    "select-invalid-border-color": "#f87171",
    "select-invalid-background-color": "#ffffff",
    "select-invalid-text-color": "#f87171",
    "select-invalid-icon-color": "#f87171",
    "select-disabled-border-color": "#6b7280",
    "select-disabled-background-color": "#d1d5db",
    "select-disabled-text-color": "#6b7280",
    "select-disabled-icon-color": "#6b7280",
    "switch-default-border-color": "#d1d5db",
    "switch-disabled-border-color": "#6b7280",
    "switch-selected-default-border-color": "#a855f7",
    "switch-selected-disabled-border-color": "#38bdf8",
    "switch-thumb-unselected-default-background-color": "#ffffff",
    "switch-thumb-unselected-disabled-background-color": "#d1d5db",
    "switch-thumb-selected-default-background-color": "#ffffff",
    "switch-thumb-selected-disabled-background-color": "#ffffff",
    "avatar-font-color": "#ffffff",
    "avatar-icon-color": "#ffffff",
    "avatar-badge-border-color": "#0284c7",
    "avatar-background-color": "#a855f7",
    "tag-default-background-color": "#9ca3af",
    "tag-default-text-color": "#ffffff",
    "tag-default-icon-color": "#ffffff",
    "heading-text-color": "#374151",
    "icon-icon-color": "#a855f7",
    "icon-button-primary-default-solid-background-color": "#0ea5e9",
    "icon-button-primary-default-solid-icon-color": "#ffffff",
    "icon-button-primary-default-outlined-border-color": "#0ea5e9",
    "icon-button-primary-default-outlined-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-primary-default-outlined-icon-color": "#0ea5e9",
    "icon-button-primary-default-ghost-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-primary-default-ghost-icon-color": "#0ea5e9",
    "icon-button-primary-hover-solid-background-color": "#38bdf8",
    "icon-button-primary-hover-solid-icon-color": "#ffffff",
    "icon-button-primary-hover-outlined-border-color": "#0284c7",
    "icon-button-primary-hover-outlined-background-color": "#38bdf8",
    "icon-button-primary-hover-outlined-icon-color": "#ffffff",
    "icon-button-primary-hover-ghost-background-color": "#38bdf8",
    "icon-button-primary-hover-ghost-icon-color": "#ffffff",
    "icon-button-primary-active-solid-background-color": "#0284c7",
    "icon-button-primary-active-solid-icon-color": "#ffffff",
    "icon-button-primary-active-outlined-border-color": "#0284c7",
    "icon-button-primary-active-outlined-background-color": "#0284c7",
    "icon-button-primary-active-outlined-icon-color": "#ffffff",
    "icon-button-primary-active-ghost-background-color": "#0284c7",
    "icon-button-primary-active-ghost-icon-color": "#ffffff",
    "icon-button-secondary-default-solid-background-color": "#4b5563",
    "icon-button-secondary-default-solid-icon-color": "#ffffff",
    "icon-button-secondary-default-outlined-border-color": "#4b5563",
    "icon-button-secondary-default-outlined-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-secondary-default-outlined-icon-color": "#4b5563",
    "icon-button-secondary-default-ghost-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-secondary-default-ghost-icon-color": "#4b5563",
    "icon-button-secondary-hover-solid-background-color": "#d1d5db",
    "icon-button-secondary-hover-solid-icon-color": "#4b5563",
    "icon-button-secondary-hover-outlined-border-color": "#4b5563",
    "icon-button-secondary-hover-outlined-background-color": "#d1d5db",
    "icon-button-secondary-hover-outlined-icon-color": "#4b5563",
    "icon-button-secondary-hover-ghost-background-color": "#d1d5db",
    "icon-button-secondary-hover-ghost-icon-color": "#4b5563",
    "icon-button-secondary-active-solid-background-color": "#6b7280",
    "icon-button-secondary-active-solid-icon-color": "#ffffff",
    "icon-button-secondary-active-outlined-border-color": "#6b7280",
    "icon-button-secondary-active-outlined-background-color": "#6b7280",
    "icon-button-secondary-active-outlined-icon-color": "#ffffff",
    "icon-button-secondary-active-ghost-background-color": "#6b7280",
    "icon-button-secondary-active-ghost-icon-color": "#ffffff",
    "icon-button-negative-default-solid-background-color": "#f87171",
    "icon-button-negative-default-solid-icon-color": "#ffffff",
    "icon-button-negative-default-outlined-border-color": "#f87171",
    "icon-button-negative-default-outlined-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-negative-default-outlined-icon-color": "#f87171",
    "icon-button-negative-default-ghost-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-negative-default-ghost-icon-color": "#f87171",
    "icon-button-negative-hover-solid-background-color": "#fca5a5",
    "icon-button-negative-hover-solid-icon-color": "#ffffff",
    "icon-button-negative-hover-outlined-border-color": "#f87171",
    "icon-button-negative-hover-outlined-background-color": "#fca5a5",
    "icon-button-negative-hover-outlined-icon-color": "#ffffff",
    "icon-button-negative-hover-ghost-background-color": "#fca5a5",
    "icon-button-negative-hover-ghost-icon-color": "#ffffff",
    "icon-button-negative-active-solid-background-color": "#ef4444",
    "icon-button-negative-active-solid-icon-color": "#ffffff",
    "icon-button-negative-active-outlined-border-color": "#ef4444",
    "icon-button-negative-active-outlined-background-color": "#ef4444",
    "icon-button-negative-active-outlined-icon-color": "#ffffff",
    "icon-button-negative-active-ghost-background-color": "#ef4444",
    "icon-button-negative-active-ghost-icon-color": "#ffffff",
    "icon-button-disabled-solid-background-color": "#d1d5db",
    "icon-button-disabled-solid-icon-color": "#6b7280",
    "icon-button-disabled-outlined-border-color": "#d1d5db",
    "icon-button-disabled-outlined-background-color": "#d1d5db",
    "icon-button-disabled-outlined-icon-color": "#6b7280",
    "icon-button-disabled-ghost-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-disabled-ghost-icon-color": "#d1d5db",
    "icon-button-outline-border-color": "#e0f2fe",
    "tab-unselected-line-background-color": "hsla(255,0%,100%,0.01)",
    "tab-unselected-line-text-color": "#0284c7",
    "tab-unselected-soft-background-color": "hsla(255,0%,100%,0.01)",
    "tab-unselected-soft-text-color": "#0284c7",
    "tab-unselected-solid-background-color": "hsla(255,0%,100%,0.01)",
    "tab-unselected-solid-text-color": "#0284c7",
    "tab-selected-line-text-color": "#0284c7",
    "tab-selected-line-border-color": "#0284c7",
    "tab-selected-soft-background-color": "#a855f7",
    "tab-selected-soft-text-color": "#ffffff",
    "tab-selected-solid-background-color": "#0284c7",
    "tab-selected-solid-text-color": "#ffffff",
    "text-text-color": "#374151",
    "tooltip-text-color": "#f3f4f6",
    "tooltip-background-color": "#9ca3af"
  },
  dark: {
    "btn-primary-default-background-color": "#a855f7",
    "btn-primary-default-text-color": "#ffffff",
    "btn-primary-default-border-color": "#0ea5e9",
    "btn-primary-default-icon-color": "#ffffff",
    "btn-primary-hover-background-color": "#38bdf8",
    "btn-primary-hover-text-color": "#ffffff",
    "btn-primary-hover-border-color": "#38bdf8",
    "btn-primary-hover-icon-color": "#ffffff",
    "btn-primary-active-background-color": "#0284c7",
    "btn-primary-active-text-color": "#ffffff",
    "btn-primary-active-border-color": "#0284c7",
    "btn-primary-active-icon-color": "#ffffff",
    "btn-primary-disabled-background-color": "#cbd5e1",
    "btn-primary-disabled-text-color": "#94a3b8",
    "btn-primary-disabled-border-color": "#cbd5e1",
    "btn-primary-disabled-icon-color": "#94a3b8",
    "btn-secondary-default-background-color": "hsla(255,0%,100%,0.01)",
    "btn-secondary-default-text-color": "#4b5563",
    "btn-secondary-default-border-color": "#4b5563",
    "btn-secondary-default-icon-color": "#4b5563",
    "btn-secondary-hover-background-color": "#d1d5db",
    "btn-secondary-hover-text-color": "#4b5563",
    "btn-secondary-hover-border-color": "#d1d5db",
    "btn-secondary-hover-icon-color": "#4b5563",
    "btn-secondary-active-background-color": "#6b7280",
    "btn-secondary-active-text-color": "#ffffff",
    "btn-secondary-active-border-color": "#6b7280",
    "btn-secondary-active-icon-color": "#ffffff",
    "btn-secondary-disabled-background-color": "#cbd5e1",
    "btn-secondary-disabled-text-color": "#94a3b8",
    "btn-secondary-disabled-border-color": "#cbd5e1",
    "btn-secondary-disabled-icon-color": "#94a3b8",
    "btn-negative-default-background-color": "#f87171",
    "btn-negative-default-text-color": "#ffffff",
    "btn-negative-default-border-color": "#f87171",
    "btn-negative-default-icon-color": "#ffffff",
    "btn-negative-hover-background-color": "#fca5a5",
    "btn-negative-hover-text-color": "#ffffff",
    "btn-negative-hover-border-color": "#fca5a5",
    "btn-negative-hover-icon-color": "#ffffff",
    "btn-negative-active-background-color": "#ef4444",
    "btn-negative-active-text-color": "#ffffff",
    "btn-negative-active-border-color": "#ef4444",
    "btn-negative-active-icon-color": "#ffffff",
    "btn-negative-disabled-background-color": "#cbd5e1",
    "btn-negative-disabled-text-color": "#94a3b8",
    "btn-negative-disabled-border-color": "#cbd5e1",
    "btn-negative-disabled-icon-color": "#94a3b8",
    "btn-focus-ring": "#e0f2fe",
    "semantic-fg-default": "#ffffff",
    "semantic-fg-muted": "#94a3b8",
    "semantic-fg-subtle": "#cbd5e1",
    "semantic-fg-on-accent": "#ffffff",
    "semantic-fg-on-disabled": "#94a3b8",
    "semantic-fg-disabled": "#cbd5e1",
    "semantic-fg-accent": "#a855f7",
    "semantic-bg-surface": "#1e293b",
    "semantic-bg-muted": "#475569",
    "semantic-bg-subtle": "#31425C",
    "semantic-bg-canvas": "#334155",
    "semantic-cta-default": "#a855f7",
    "semantic-cta-emphasised": "#0284c7",
    "semantic-cta-muted": "#38bdf8",
    "semantic-cta-subtle": "#e0f2fe",
    "semantic-cta-disabled": "#9ca3af",
    "semantic-primary-default": "#0ea5e9",
    "semantic-primary-emphasised": "#0284c7",
    "semantic-primary-muted": "#38bdf8",
    "semantic-primary-subtle": "#e0f2fe",
    "semantic-primary-disabled": "#9ca3af",
    "semantic-secondary-default": "#4b5563",
    "semantic-secondary-emphasised": "#6b7280",
    "semantic-secondary-muted": "#d1d5db",
    "semantic-secondary-subtle": "#f3f4f6",
    "semantic-secondary-disabled": "#9ca3af",
    "semantic-warning-fg": "#fbbf24",
    "semantic-warning-emphasised": "#f59e0b",
    "semantic-warning-muted": "#fcd34d",
    "semantic-warning-subtle": "#fef3c7",
    "semantic-warning-on-warning": "#000000",
    "semantic-error-fg": "#f87171",
    "semantic-error-emphasised": "#ef4444",
    "semantic-error-muted": "#fca5a5",
    "semantic-error-subtle": "#fee2e2",
    "semantic-error-on-error": "#ffffff",
    "semantic-info-fg": "#2dd4bf",
    "semantic-info-emphasised": "#3b82f6",
    "semantic-info-muted": "#93c5fd",
    "semantic-info-subtle": "#dbeafe",
    "semantic-info-on-info": "#ffffff",
    "semantic-success-fg": "#34d399",
    "semantic-success-emphasised": "#10b981",
    "semantic-success-muted": "#6ee7b7",
    "semantic-success-subtle": "#d1fae5",
    "semantic-success-on-success": "#ffffff",
    "semantic-help-fg": "#c084fc",
    "semantic-help-emphasised": "#a855f7",
    "semantic-help-muted": "#d8b4fe",
    "semantic-help-subtle": "#f3e8ff",
    "semantic-help-on-success": "#ffffff",
    "semantic-neutral-fg": "#9ca3af",
    "semantic-neutral-emphasised": "#6b7280",
    "semantic-neutral-muted": "#d1d5db",
    "semantic-neutral-subtle": "#f3f4f6",
    "semantic-neutral-on-success": "#ffffff",
    "semantic-inputs-background": "#1e293b",
    "semantic-inputs-text": "#94a3b8",
    "semantic-inputs-placeholder": "#cbd5e1",
    "semantic-inputs-border-default": "#475569",
    "semantic-inputs-border-disabled": "#94a3b8",
    "semantic-inputs-fg-disabled": "#cbd5e1",
    "semantic-border-default": "#31425C",
    "semantic-color-actions-negative-default-border": "#f87171",
    "semantic-color-actions-negative-default-text": "#ffffff",
    "semantic-color-actions-negative-default-background": "#f87171",
    "semantic-color-actions-negative-default-icon": "#f87171",
    "semantic-color-actions-negative-default-quiet-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-negative-default-quiet-text": "#f87171",
    "semantic-color-actions-negative-hover-border": "#fca5a5",
    "semantic-color-actions-negative-hover-text": "#ffffff",
    "semantic-color-actions-negative-hover-background": "#fca5a5",
    "semantic-color-actions-negative-hover-icon": "#fca5a5",
    "semantic-color-actions-negative-hover-quiet-background": "#fca5a5",
    "semantic-color-actions-negative-hover-quiet-text": "#ffffff",
    "semantic-color-actions-negative-active-border": "#ef4444",
    "semantic-color-actions-negative-active-text": "#ffffff",
    "semantic-color-actions-negative-active-background": "#ef4444",
    "semantic-color-actions-negative-active-icon": "#ef4444",
    "semantic-color-actions-negative-active-quiet-background": "#ef4444",
    "semantic-color-actions-negative-active-quiet-text": "#ffffff",
    "semantic-color-actions-negative-focus-border": "#f87171",
    "semantic-color-actions-negative-focus-text": "#ffffff",
    "semantic-color-actions-negative-focus-background": "#f87171",
    "semantic-color-actions-negative-focus-icon": "#f87171",
    "semantic-color-actions-negative-disabled-background": "#cbd5e1",
    "semantic-color-actions-negative-disabled-text": "#94a3b8",
    "semantic-color-actions-negative-disabled-border": "#cbd5e1",
    "semantic-color-actions-negative-disabled-icon": "#cbd5e1",
    "semantic-color-actions-cta-default-border-color": "#a855f7",
    "semantic-color-actions-cta-default-text-color": "#ffffff",
    "semantic-color-actions-cta-default-background-color": "#a855f7",
    "semantic-color-actions-cta-hover-border-color": "#38bdf8",
    "semantic-color-actions-cta-hover-text-color": "#ffffff",
    "semantic-color-actions-cta-hover-background-color": "#38bdf8",
    "semantic-color-actions-cta-active-border-color": "#0284c7",
    "semantic-color-actions-cta-active-text-color": "#ffffff",
    "semantic-color-actions-cta-active-background-color": "#0284c7",
    "semantic-color-actions-cta-focus-border-color": "#a855f7",
    "semantic-color-actions-cta-focus-text-color": "#ffffff",
    "semantic-color-actions-cta-focus-background-color": "#a855f7",
    "semantic-color-actions-primary-default-border": "#0ea5e9",
    "semantic-color-actions-primary-default-text": "#ffffff",
    "semantic-color-actions-primary-default-background": "#0ea5e9",
    "semantic-color-actions-primary-default-quiet-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-primary-default-text-color": "#f4f4f5",
    "semantic-color-actions-primary-hover-border": "#38bdf8",
    "semantic-color-actions-primary-hover-text": "#ffffff",
    "semantic-color-actions-primary-hover-background": "#38bdf8",
    "semantic-color-actions-primary-hover-quiet-background": "#38bdf8",
    "semantic-color-actions-primary-active-border": "#0284c7",
    "semantic-color-actions-primary-active-text": "#ffffff",
    "semantic-color-actions-primary-active-background": "#0284c7",
    "semantic-color-actions-primary-active-quiet-background": "#0284c7",
    "semantic-color-actions-primary-focus-border": "#0ea5e9",
    "semantic-color-actions-primary-focus-quiet-border": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-primary-focus-text": "#0ea5e9",
    "semantic-color-actions-primary-focus-quiet-text": "#0ea5e9",
    "semantic-color-actions-primary-focus-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-primary-focus-quiet-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-primary-disabled-background": "#cbd5e1",
    "semantic-color-actions-primary-disabled-text": "#94a3b8",
    "semantic-color-actions-primary-disabled-border": "#cbd5e1",
    "semantic-color-actions-secondary-default-border": "#4b5563",
    "semantic-color-actions-secondary-default-quiet-border": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-default-text": "#4b5563",
    "semantic-color-actions-secondary-default-quiet-text": "#4b5563",
    "semantic-color-actions-secondary-default-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-default-quiet-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-hover-border": "#d1d5db",
    "semantic-color-actions-secondary-hover-quiet-border": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-hover-text": "#4b5563",
    "semantic-color-actions-secondary-hover-quiet-text": "#4b5563",
    "semantic-color-actions-secondary-hover-background": "#d1d5db",
    "semantic-color-actions-secondary-hover-quiet-background": "#d1d5db",
    "semantic-color-actions-secondary-active-border": "#6b7280",
    "semantic-color-actions-secondary-active-quiet-border": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-active-text": "#ffffff",
    "semantic-color-actions-secondary-active-quiet-text": "#ffffff",
    "semantic-color-actions-secondary-active-background": "#6b7280",
    "semantic-color-actions-secondary-active-quiet-background": "#6b7280",
    "semantic-color-actions-secondary-focus-border": "#4b5563",
    "semantic-color-actions-secondary-focus-quiet-border": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-focus-text": "#4b5563",
    "semantic-color-actions-secondary-focus-quiet-text": "#4b5563",
    "semantic-color-actions-secondary-focus-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-focus-quiet-background": "hsla(255,0%,100%,0.01)",
    "semantic-color-actions-secondary-disabled-background": "#cbd5e1",
    "semantic-color-actions-secondary-disabled-text": "#94a3b8",
    "semantic-color-actions-secondary-disabled-border": "#cbd5e1",
    "semantic-color-inputs-default-border-color": "#475569",
    "semantic-color-inputs-default-text-color": "#94a3b8",
    "semantic-color-inputs-default-icon-color": "#94a3b8",
    "semantic-color-inputs-default-background-color": "#1e293b",
    "semantic-color-inputs-selected-default-border-color": "#a855f7",
    "semantic-color-inputs-selected-default-text-color": "#a855f7",
    "semantic-color-inputs-selected-default-icon-color": "#a855f7",
    "semantic-color-inputs-selected-default-background-color": "#1e293b",
    "semantic-color-inputs-selected-hover-border-color": "#38bdf8",
    "semantic-color-inputs-selected-hover-text-color": "#38bdf8",
    "semantic-color-inputs-selected-hover-icon-color": "#38bdf8",
    "semantic-color-inputs-selected-hover-background-color": "#1e293b",
    "semantic-color-inputs-error-border-color": "#f87171",
    "semantic-color-inputs-error-text-color": "#f87171",
    "semantic-color-inputs-error-icon-color": "#f87171",
    "semantic-color-inputs-error-background-color": "#1e293b",
    "semantic-color-inputs-disabled-background-color": "#cbd5e1",
    "semantic-color-inputs-disabled-text-color": "#94a3b8",
    "semantic-color-inputs-disabled-icon-color": "#94a3b8",
    "semantic-color-inputs-disabled-border-color": "#94a3b8",
    "semantic-color-inputs-hover-border-color": "#475569",
    "semantic-color-inputs-hover-text-color": "#94a3b8",
    "semantic-color-inputs-hover-icon-color": "#94a3b8",
    "semantic-color-inputs-hover-background-color": "#ffffff",
    "semantic-color-inputs-focus-border-color": "#475569",
    "semantic-color-inputs-focus-text-color": "#94a3b8",
    "semantic-color-inputs-focus-icon-color": "#94a3b8",
    "semantic-color-inputs-focus-background-color": "#1e293b",
    "semantic-color-inputs-focus-focus-ring": "#eff6ff",
    "semantic-color-feedback-info-border-color": "#2dd4bf",
    "semantic-color-feedback-info-text-color": "#2dd4bf",
    "semantic-color-feedback-info-icon-color": "#2dd4bf",
    "semantic-color-feedback-info-background-color": "#dbeafe",
    "semantic-color-feedback-warning-border-color": "#fbbf24",
    "semantic-color-feedback-warning-text-color": "#fbbf24",
    "semantic-color-feedback-warning-icon-color": "#fbbf24",
    "semantic-color-feedback-warning-background-color": "#fef3c7",
    "semantic-color-feedback-success-border-color": "#34d399",
    "semantic-color-feedback-success-text-color": "#34d399",
    "semantic-color-feedback-success-icon-color": "#34d399",
    "semantic-color-feedback-success-background-color": "#d1fae5",
    "semantic-color-feedback-help-border-color": "#c084fc",
    "semantic-color-feedback-help-text-color": "#c084fc",
    "semantic-color-feedback-help-icon-color": "#c084fc",
    "semantic-color-feedback-help-background-color": "#f3e8ff",
    "semantic-color-feedback-neutral-border-color": "#9ca3af",
    "semantic-color-feedback-neutral-text-color": "#9ca3af",
    "semantic-color-feedback-neutral-icon-color": "#9ca3af",
    "semantic-color-feedback-neutral-background-color": "#f3f4f6",
    "semantic-color-feedback-error-border-color": "#f87171",
    "semantic-color-feedback-error-text-color": "#f87171",
    "semantic-color-feedback-error-icon-color": "#f87171",
    "semantic-color-feedback-error-background-color": "#fee2e2",
    "semantic-color-typography-default": "#374151",
    "semantic-color-typography-on-background": "#ffffff",
    "semantic-color-status-info-border-color": "#2dd4bf",
    "semantic-color-status-info-text-color": "#2dd4bf",
    "semantic-color-status-info-icon-color": "#2dd4bf",
    "semantic-color-status-info-background-color": "#dbeafe",
    "semantic-color-status-warning-border-color": "#fbbf24",
    "semantic-color-status-warning-text-color": "#fbbf24",
    "semantic-color-status-warning-icon-color": "#fbbf24",
    "semantic-color-status-warning-background-color": "#fef3c7",
    "semantic-color-status-success-border-color": "#34d399",
    "semantic-color-status-success-text-color": "#34d399",
    "semantic-color-status-success-icon-color": "#34d399",
    "semantic-color-status-success-background-color": "#d1fae5",
    "semantic-color-status-help-border-color": "#c084fc",
    "semantic-color-status-help-text-color": "#c084fc",
    "semantic-color-status-help-icon-color": "#c084fc",
    "semantic-color-status-help-background-color": "#f3e8ff",
    "semantic-color-status-neutral-border-color": "#9ca3af",
    "semantic-color-status-neutral-text-color": "#9ca3af",
    "semantic-color-status-neutral-icon-color": "#9ca3af",
    "semantic-color-status-neutral-background-color": "#f3f4f6",
    "semantic-color-status-error-border-color": "#f87171",
    "semantic-color-status-error-text-color": "#f87171",
    "semantic-color-status-error-icon-color": "#f87171",
    "semantic-color-status-error-background-color": "#fee2e2",
    "semantic-color-navigation-background": "#a855f7",
    "semantic-color-navigation-border": "#0284c7",
    "semantic-color-navigation-text": "#ffffff",
    "semantic-color-navigation-icon": "#ffffff",
    "semantic-color-focus-border": "#e0f2fe",
    "color-slate-50": "#f8fafc",
    "color-slate-100": "#f1f5f9",
    "color-slate-200": "#e2e8f0",
    "color-slate-300": "#cbd5e1",
    "color-slate-400": "#94a3b8",
    "color-slate-500": "#64748b",
    "color-slate-600": "#475569",
    "color-slate-700": "#334155",
    "color-slate-800": "#1e293b",
    "color-slate-900": "#0f172a",
    "color-gray-50": "#f9fafb",
    "color-gray-100": "#f3f4f6",
    "color-gray-200": "#e5e7eb",
    "color-gray-300": "#d1d5db",
    "color-gray-400": "#9ca3af",
    "color-gray-500": "#6b7280",
    "color-gray-600": "#4b5563",
    "color-gray-700": "#374151",
    "color-gray-800": "#1f2937",
    "color-gray-900": "#111827",
    "color-zinc-50": "#fafafa",
    "color-zinc-100": "#f4f4f5",
    "color-zinc-200": "#e4e4e7",
    "color-zinc-300": "#d4d4d8",
    "color-zinc-400": "#a1a1aa",
    "color-zinc-500": "#71717a",
    "color-zinc-600": "#52525b",
    "color-zinc-700": "#3f3f46",
    "color-zinc-800": "#27272a",
    "color-zinc-900": "#18181b",
    "color-neutral-gray-50": "#fafafa",
    "color-neutral-gray-100": "#f5f5f5",
    "color-neutral-gray-200": "#e5e5e5",
    "color-neutral-gray-300": "#d4d4d4",
    "color-neutral-gray-400": "#a3a3a3",
    "color-neutral-gray-500": "#737373",
    "color-neutral-gray-600": "#525252",
    "color-neutral-gray-700": "#404040",
    "color-neutral-gray-800": "#262626",
    "color-neutral-gray-900": "#171717",
    "color-stone-50": "#fafaf9",
    "color-stone-100": "#f5f5f4",
    "color-stone-200": "#e7e5e4",
    "color-stone-300": "#d6d3d1",
    "color-stone-400": "#a8a29e",
    "color-stone-500": "#78716c",
    "color-stone-600": "#57534e",
    "color-stone-700": "#44403c",
    "color-stone-800": "#292524",
    "color-stone-900": "#1c1917",
    "color-red-50": "#fef2f2",
    "color-red-100": "#fee2e2",
    "color-red-200": "#fecaca",
    "color-red-300": "#fca5a5",
    "color-red-400": "#f87171",
    "color-red-500": "#ef4444",
    "color-red-600": "#dc2626",
    "color-red-700": "#b91c1c",
    "color-red-800": "#991b1b",
    "color-red-900": "#7f1d1d",
    "color-orange-50": "#fff7ed",
    "color-orange-100": "#ffedd5",
    "color-orange-200": "#fed7aa",
    "color-orange-300": "#fdba74",
    "color-orange-400": "#fb923c",
    "color-orange-500": "#f97316",
    "color-orange-600": "#ea580c",
    "color-orange-700": "#c2410c",
    "color-orange-800": "#9a3412",
    "color-orange-900": "#7c2d12",
    "color-amber-50": "#fffbeb",
    "color-amber-100": "#fef3c7",
    "color-amber-200": "#fde68a",
    "color-amber-300": "#fcd34d",
    "color-amber-400": "#fbbf24",
    "color-amber-500": "#f59e0b",
    "color-amber-600": "#d97706",
    "color-amber-700": "#b45309",
    "color-amber-800": "#92400e",
    "color-amber-900": "#78350f",
    "color-yellow-50": "#fefce8",
    "color-yellow-100": "#fef9c3",
    "color-yellow-200": "#fef08a",
    "color-yellow-300": "#fde047",
    "color-yellow-400": "#facc15",
    "color-yellow-500": "#eab308",
    "color-yellow-600": "#ca8a04",
    "color-yellow-700": "#a16207",
    "color-yellow-800": "#854d0e",
    "color-yellow-900": "#713f12",
    "color-lime-50": "#f7fee7",
    "color-lime-100": "#ecfccb",
    "color-lime-200": "#d9f99d",
    "color-lime-300": "#bef264",
    "color-lime-400": "#a3e635",
    "color-lime-500": "#84cc16",
    "color-lime-600": "#65a30d",
    "color-lime-700": "#4d7c0f",
    "color-lime-800": "#3f6212",
    "color-lime-900": "#365314",
    "color-green-50": "#f0fdf4",
    "color-green-100": "#dcfce7",
    "color-green-200": "#bbf7d0",
    "color-green-300": "#86efac",
    "color-green-400": "#4ade80",
    "color-green-500": "#22c55e",
    "color-green-600": "#16a34a",
    "color-green-700": "#15803d",
    "color-green-800": "#166534",
    "color-green-900": "#14532d",
    "color-emerald-50": "#ecfdf5",
    "color-emerald-100": "#d1fae5",
    "color-emerald-200": "#a7f3d0",
    "color-emerald-300": "#6ee7b7",
    "color-emerald-400": "#34d399",
    "color-emerald-500": "#10b981",
    "color-emerald-600": "#059669",
    "color-emerald-700": "#047857",
    "color-emerald-800": "#065f46",
    "color-emerald-900": "#064e3b",
    "color-teal-50": "#f0fdfa",
    "color-teal-100": "#ccfbf1",
    "color-teal-200": "#99f6e4",
    "color-teal-300": "#5eead4",
    "color-teal-400": "#2dd4bf",
    "color-teal-500": "#14b8a6",
    "color-teal-600": "#0d9488",
    "color-teal-700": "#0f766e",
    "color-teal-800": "#115e59",
    "color-teal-900": "#134e4a",
    "color-cyan-50": "#ecfeff",
    "color-cyan-100": "#cffafe",
    "color-cyan-200": "#a5f3fc",
    "color-cyan-300": "#67e8f9",
    "color-cyan-400": "#22d3ee",
    "color-cyan-500": "#06b6d4",
    "color-cyan-600": "#0891b2",
    "color-cyan-700": "#0e7490",
    "color-cyan-800": "#155e75",
    "color-cyan-900": "#164e63",
    "color-sky-50": "#f0f9ff",
    "color-sky-100": "#e0f2fe",
    "color-sky-200": "#bae6fd",
    "color-sky-300": "#7dd3fc",
    "color-sky-400": "#38bdf8",
    "color-sky-500": "#0ea5e9",
    "color-sky-600": "#0284c7",
    "color-sky-700": "#0369a1",
    "color-sky-800": "#075985",
    "color-sky-900": "#0c4a6e",
    "color-blue-50": "#eff6ff",
    "color-blue-100": "#dbeafe",
    "color-blue-200": "#bfdbfe",
    "color-blue-300": "#93c5fd",
    "color-blue-400": "#60a5fa",
    "color-blue-500": "#3b82f6",
    "color-blue-600": "#2563eb",
    "color-blue-700": "#1d4ed8",
    "color-blue-800": "#1e40af",
    "color-blue-900": "#1e3a8a",
    "color-indigo-50": "#eef2ff",
    "color-indigo-100": "#e0e7ff",
    "color-indigo-200": "#c7d2fe",
    "color-indigo-300": "#a5b4fc",
    "color-indigo-400": "#818cf8",
    "color-indigo-500": "#6366f1",
    "color-indigo-600": "#4f46e5",
    "color-indigo-700": "#4338ca",
    "color-indigo-800": "#3730a3",
    "color-indigo-900": "#312e81",
    "color-violet-50": "#f5f3ff",
    "color-violet-100": "#ede9fe",
    "color-violet-200": "#ddd6fe",
    "color-violet-300": "#c4b5fd",
    "color-violet-400": "#a78bfa",
    "color-violet-500": "#8b5cf6",
    "color-violet-600": "#7c3aed",
    "color-violet-700": "#6d28d9",
    "color-violet-800": "#5b21b6",
    "color-violet-900": "#4c1d95",
    "color-purple-50": "#faf5ff",
    "color-purple-100": "#f3e8ff",
    "color-purple-200": "#e9d5ff",
    "color-purple-300": "#d8b4fe",
    "color-purple-400": "#c084fc",
    "color-purple-500": "#a855f7",
    "color-purple-600": "#9333ea",
    "color-purple-700": "#7e22ce",
    "color-purple-800": "#6b21a8",
    "color-purple-900": "#581c87",
    "color-fuchsia-50": "#fdf4ff",
    "color-fuchsia-100": "#fae8ff",
    "color-fuchsia-200": "#f5d0fe",
    "color-fuchsia-300": "#f0abfc",
    "color-fuchsia-400": "#e879f9",
    "color-fuchsia-500": "#d946ef",
    "color-fuchsia-600": "#c026d3",
    "color-fuchsia-700": "#a21caf",
    "color-fuchsia-800": "#86198f",
    "color-fuchsia-900": "#701a75",
    "color-pink-50": "#fdf2f8",
    "color-pink-100": "#fce7f3",
    "color-pink-200": "#fbcfe8",
    "color-pink-300": "#f9a8d4",
    "color-pink-400": "#f472b6",
    "color-pink-500": "#ec4899",
    "color-pink-600": "#db2777",
    "color-pink-700": "#be185d",
    "color-pink-800": "#9d174d",
    "color-pink-900": "#831843",
    "color-rose-50": "#fff1f2",
    "color-rose-100": "#ffe4e6",
    "color-rose-200": "#fecdd3",
    "color-rose-300": "#fda4af",
    "color-rose-400": "#fb7185",
    "color-rose-500": "#f43f5e",
    "color-rose-600": "#e11d48",
    "color-rose-700": "#be123c",
    "color-rose-800": "#9f1239",
    "color-rose-900": "#881337",
    "color-neutrals-black": "#000000",
    "color-neutrals-white": "#ffffff",
    "color-neutrals-transparent": "hsla(255,0%,100%,0.01)",
    "checkbox-unselected-default-border-color": "#a855f7",
    "checkbox-unselected-default-background-color": "#1e293b",
    "checkbox-unselected-error-border-color": "#f87171",
    "checkbox-unselected-error-background-color": "#1e293b",
    "checkbox-unselected-disabled-border-color": "#94a3b8",
    "checkbox-unselected-disabled-background-color": "#cbd5e1",
    "checkbox-selected-default-border-color": "#a855f7",
    "checkbox-selected-default-background-color": "#a855f7",
    "checkbox-selected-hover-border-color": "#38bdf8",
    "checkbox-selected-hover-background-color": "#38bdf8",
    "checkbox-selected-disabled-border-color": "#94a3b8",
    "checkbox-selected-disabled-background-color": "#cbd5e1",
    "checkbox-checkmark-selected-default-icon-color": "#1e293b",
    "checkbox-checkmark-selected-hover-icon-color": "#ffffff",
    "checkbox-checkmark-selected-disabled-icon-color": "#94a3b8",
    "input-default-outlined-border-color": "#475569",
    "input-default-outlined-background-color": "#1e293b",
    "input-default-outlined-text-color": "#94a3b8",
    "input-default-outlined-icon-color": "#94a3b8",
    "input-default-filled-background-color": "#1e293b",
    "input-default-filled-text-color": "#475569",
    "input-default-filled-icon-color": "#475569",
    "input-default-flushed-border-color": "#475569",
    "input-default-flushed-background-color": "#1e293b",
    "input-default-flushed-text-color": "#94a3b8",
    "input-default-flushed-icon-color": "#94a3b8",
    "input-hover-outlined-border-color": "#475569",
    "input-hover-outlined-background-color": "#ffffff",
    "input-hover-outlined-text-color": "#94a3b8",
    "input-hover-outlined-icon-color": "#94a3b8",
    "input-hover-filled-background-color": "#f3f4f6",
    "input-hover-filled-text-color": "#475569",
    "input-hover-filled-icon-color": "#475569",
    "input-hover-flushed-border-color": "#475569",
    "input-hover-flushed-background-color": "#f3f4f6",
    "input-hover-flushed-text-color": "#475569",
    "input-hover-flushed-icon-color": "#475569",
    "input-focus-outlined-border-color": "#eff6ff",
    "input-focus-outlined-background-color": "#1e293b",
    "input-focus-outlined-text-color": "#94a3b8",
    "input-focus-outlined-icon-color": "#94a3b8",
    "input-focus-filled-border-color": "#eff6ff",
    "input-focus-filled-background-color": "#1e293b",
    "input-focus-filled-text-color": "#475569",
    "input-focus-filled-icon-color": "#475569",
    "input-focus-flushed-border-color": "#eff6ff",
    "input-focus-flushed-background-color": "#1e293b",
    "input-invalid-outlined-border-color": "#f87171",
    "input-invalid-outlined-background-color": "#1e293b",
    "input-invalid-outlined-text-color": "#f87171",
    "input-invalid-filled-border-color": "#f87171",
    "input-invalid-filled-background-color": "#1e293b",
    "input-invalid-filled-text-color": "#f87171",
    "input-invalid-flushed-border-color": "#f87171",
    "input-invalid-flushed-background-color": "#1e293b",
    "input-invalid-flushed-text-color": "#f87171",
    "input-invalid-icon-icon-color": "#f87171",
    "input-disabled-border-color": "#94a3b8",
    "input-disabled-background-color": "#cbd5e1",
    "input-disabled-text-color": "#94a3b8",
    "input-disabled-icon-color": "#94a3b8",
    "input-add-on-background-color": "#f3f4f6",
    "radio-unselected-default-border-color": "#a855f7",
    "radio-unselected-default-background-color": "#1e293b",
    "radio-unselected-error-border-color": "#f87171",
    "radio-unselected-error-background-color": "#1e293b",
    "radio-unselected-disabled-border-color": "#94a3b8",
    "radio-unselected-disabled-background-color": "#cbd5e1",
    "radio-selected-default-border-color": "#a855f7",
    "radio-selected-default-background-color": "#1e293b",
    "radio-selected-hover-border-color": "#38bdf8",
    "radio-selected-hover-background-color": "#1e293b",
    "radio-selected-disabled-border-color": "#94a3b8",
    "radio-checkmark-selected-default-background-color": "#1e293b",
    "radio-checkmark-selected-hover-background-color": "#ffffff",
    "radio-checkmark-selected-disabled-background-color": "#cbd5e1",
    "select-default-border-color": "#475569",
    "select-default-background-color": "#1e293b",
    "select-default-text-color": "#94a3b8",
    "select-default-icon-color": "#94a3b8",
    "select-hover-border-color": "#475569",
    "select-hover-background-color": "#ffffff",
    "select-hover-text-color": "#94a3b8",
    "select-hover-icon-color": "#94a3b8",
    "select-focus-border-color": "#eff6ff",
    "select-focus-background-color": "#1e293b",
    "select-focus-text-color": "#94a3b8",
    "select-focus-icon-color": "#94a3b8",
    "select-invalid-border-color": "#f87171",
    "select-invalid-background-color": "#1e293b",
    "select-invalid-text-color": "#f87171",
    "select-invalid-icon-color": "#f87171",
    "select-disabled-border-color": "#94a3b8",
    "select-disabled-background-color": "#cbd5e1",
    "select-disabled-text-color": "#94a3b8",
    "select-disabled-icon-color": "#94a3b8",
    "switch-default-border-color": "#475569",
    "switch-disabled-border-color": "#94a3b8",
    "switch-selected-default-border-color": "#a855f7",
    "switch-selected-disabled-border-color": "#38bdf8",
    "switch-thumb-unselected-default-background-color": "#1e293b",
    "switch-thumb-unselected-disabled-background-color": "#cbd5e1",
    "switch-thumb-selected-default-background-color": "#1e293b",
    "switch-thumb-selected-disabled-background-color": "#ffffff",
    "avatar-font-color": "#ffffff",
    "avatar-icon-color": "#ffffff",
    "avatar-badge-border-color": "#0284c7",
    "avatar-background-color": "#a855f7",
    "tag-default-background-color": "#9ca3af",
    "tag-default-text-color": "#ffffff",
    "tag-default-icon-color": "#ffffff",
    "heading-text-color": "#374151",
    "icon-icon-color": "#a855f7",
    "icon-button-primary-default-solid-background-color": "#0ea5e9",
    "icon-button-primary-default-solid-icon-color": "#ffffff",
    "icon-button-primary-default-outlined-border-color": "#0ea5e9",
    "icon-button-primary-default-outlined-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-primary-default-outlined-icon-color": "#0ea5e9",
    "icon-button-primary-default-ghost-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-primary-default-ghost-icon-color": "#0ea5e9",
    "icon-button-primary-hover-solid-background-color": "#38bdf8",
    "icon-button-primary-hover-solid-icon-color": "#ffffff",
    "icon-button-primary-hover-outlined-border-color": "#0284c7",
    "icon-button-primary-hover-outlined-background-color": "#38bdf8",
    "icon-button-primary-hover-outlined-icon-color": "#ffffff",
    "icon-button-primary-hover-ghost-background-color": "#38bdf8",
    "icon-button-primary-hover-ghost-icon-color": "#ffffff",
    "icon-button-primary-active-solid-background-color": "#0284c7",
    "icon-button-primary-active-solid-icon-color": "#ffffff",
    "icon-button-primary-active-outlined-border-color": "#0284c7",
    "icon-button-primary-active-outlined-background-color": "#0284c7",
    "icon-button-primary-active-outlined-icon-color": "#ffffff",
    "icon-button-primary-active-ghost-background-color": "#0284c7",
    "icon-button-primary-active-ghost-icon-color": "#ffffff",
    "icon-button-secondary-default-solid-background-color": "#4b5563",
    "icon-button-secondary-default-solid-icon-color": "#ffffff",
    "icon-button-secondary-default-outlined-border-color": "#4b5563",
    "icon-button-secondary-default-outlined-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-secondary-default-outlined-icon-color": "#4b5563",
    "icon-button-secondary-default-ghost-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-secondary-default-ghost-icon-color": "#4b5563",
    "icon-button-secondary-hover-solid-background-color": "#d1d5db",
    "icon-button-secondary-hover-solid-icon-color": "#4b5563",
    "icon-button-secondary-hover-outlined-border-color": "#4b5563",
    "icon-button-secondary-hover-outlined-background-color": "#d1d5db",
    "icon-button-secondary-hover-outlined-icon-color": "#4b5563",
    "icon-button-secondary-hover-ghost-background-color": "#d1d5db",
    "icon-button-secondary-hover-ghost-icon-color": "#4b5563",
    "icon-button-secondary-active-solid-background-color": "#6b7280",
    "icon-button-secondary-active-solid-icon-color": "#ffffff",
    "icon-button-secondary-active-outlined-border-color": "#6b7280",
    "icon-button-secondary-active-outlined-background-color": "#6b7280",
    "icon-button-secondary-active-outlined-icon-color": "#ffffff",
    "icon-button-secondary-active-ghost-background-color": "#6b7280",
    "icon-button-secondary-active-ghost-icon-color": "#ffffff",
    "icon-button-negative-default-solid-background-color": "#f87171",
    "icon-button-negative-default-solid-icon-color": "#ffffff",
    "icon-button-negative-default-outlined-border-color": "#f87171",
    "icon-button-negative-default-outlined-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-negative-default-outlined-icon-color": "#f87171",
    "icon-button-negative-default-ghost-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-negative-default-ghost-icon-color": "#f87171",
    "icon-button-negative-hover-solid-background-color": "#fca5a5",
    "icon-button-negative-hover-solid-icon-color": "#ffffff",
    "icon-button-negative-hover-outlined-border-color": "#f87171",
    "icon-button-negative-hover-outlined-background-color": "#fca5a5",
    "icon-button-negative-hover-outlined-icon-color": "#ffffff",
    "icon-button-negative-hover-ghost-background-color": "#fca5a5",
    "icon-button-negative-hover-ghost-icon-color": "#ffffff",
    "icon-button-negative-active-solid-background-color": "#ef4444",
    "icon-button-negative-active-solid-icon-color": "#ffffff",
    "icon-button-negative-active-outlined-border-color": "#ef4444",
    "icon-button-negative-active-outlined-background-color": "#ef4444",
    "icon-button-negative-active-outlined-icon-color": "#ffffff",
    "icon-button-negative-active-ghost-background-color": "#ef4444",
    "icon-button-negative-active-ghost-icon-color": "#ffffff",
    "icon-button-disabled-solid-background-color": "#cbd5e1",
    "icon-button-disabled-solid-icon-color": "#94a3b8",
    "icon-button-disabled-outlined-border-color": "#cbd5e1",
    "icon-button-disabled-outlined-background-color": "#cbd5e1",
    "icon-button-disabled-outlined-icon-color": "#94a3b8",
    "icon-button-disabled-ghost-background-color": "hsla(255,0%,100%,0.01)",
    "icon-button-disabled-ghost-icon-color": "#cbd5e1",
    "icon-button-outline-border-color": "#e0f2fe",
    "tab-unselected-line-background-color": "hsla(255,0%,100%,0.01)",
    "tab-unselected-line-text-color": "#0284c7",
    "tab-unselected-soft-background-color": "hsla(255,0%,100%,0.01)",
    "tab-unselected-soft-text-color": "#0284c7",
    "tab-unselected-solid-background-color": "hsla(255,0%,100%,0.01)",
    "tab-unselected-solid-text-color": "#0284c7",
    "tab-selected-line-text-color": "#0284c7",
    "tab-selected-line-border-color": "#0284c7",
    "tab-selected-soft-background-color": "#a855f7",
    "tab-selected-soft-text-color": "#ffffff",
    "tab-selected-solid-background-color": "#0284c7",
    "tab-selected-solid-text-color": "#ffffff",
    "text-text-color": "#374151",
    "tooltip-text-color": "#f3f4f6",
    "tooltip-background-color": "#9ca3af"
  }
};
var radii2 = {
  light: {
    "btn-border-radius": "4px",
    "semantic-ui-border-radius": "0px",
    "semantic-border-radius-small": "0px",
    "semantic-border-radius-medium": "4px",
    "semantic-border-radius-large": "16px",
    "semantic-border-radius-round": "100px",
    "semantic-border-radius-actions": "4px",
    "semantic-border-radius-inputs": "4px",
    "semantic-border-radius-status": "100px",
    "semantic-border-radius-feedback": "4px",
    "semantic-border-radius-navigation-default": "0px",
    "semantic-border-radius-navigation-round": "100px",
    "semantic-border-radius-ui-card": "4px",
    "semantic-border-radius-ui": "100px",
    "border-radius-0": "0px",
    "border-radius-1": "1px",
    "border-radius-2": "2px",
    "border-radius-3": "3px",
    "border-radius-4": "4px",
    "border-radius-5": "8px",
    "border-radius-6": "16px",
    "border-radius-7": "24px",
    "border-radius-8": "32px",
    "border-radius-9": "100px",
    "input-border-radius": "4px",
    "radio-checkmark-border-radius": "16px",
    "radio-border-radius": "16px",
    "select-border-radius": "4px",
    "switch-border-radius": "100px",
    "avatar-border-radius": "100px",
    "avatar-badge-border-radius": "100px",
    "tag-border-radius": "100px",
    "icon-button-border-radius": "4px",
    "icon-button-round-border-radius": "100px",
    "tooltip-border-radius": "4px"
  },
  dark: {
    "btn-border-radius": "4px",
    "semantic-ui-border-radius": "0px",
    "semantic-border-radius-small": "0px",
    "semantic-border-radius-medium": "4px",
    "semantic-border-radius-large": "16px",
    "semantic-border-radius-round": "100px",
    "semantic-border-radius-actions": "4px",
    "semantic-border-radius-inputs": "4px",
    "semantic-border-radius-status": "100px",
    "semantic-border-radius-feedback": "4px",
    "semantic-border-radius-navigation-default": "0px",
    "semantic-border-radius-navigation-round": "100px",
    "semantic-border-radius-ui-card": "4px",
    "semantic-border-radius-ui": "100px",
    "border-radius-0": "0px",
    "border-radius-1": "1px",
    "border-radius-2": "2px",
    "border-radius-3": "3px",
    "border-radius-4": "4px",
    "border-radius-5": "8px",
    "border-radius-6": "16px",
    "border-radius-7": "24px",
    "border-radius-8": "32px",
    "border-radius-9": "100px",
    "input-border-radius": "4px",
    "radio-checkmark-border-radius": "16px",
    "radio-border-radius": "16px",
    "select-border-radius": "4px",
    "switch-border-radius": "100px",
    "avatar-border-radius": "100px",
    "avatar-badge-border-radius": "100px",
    "tag-border-radius": "100px",
    "icon-button-border-radius": "4px",
    "icon-button-round-border-radius": "100px",
    "tooltip-border-radius": "4px"
  }
};
var fonts = {
  light: {
    "btn-font-family": "Inter",
    "semantic-font-family-actions": "Inter",
    "semantic-font-family-inputs": "Inter",
    "semantic-font-family-font-family-inputs": "Inter",
    "semantic-font-family-font-family-actions": "Inter",
    "semantic-font-family-font-family-typography-serif": "Inter",
    "semantic-font-family-font-family-typography-sans-serif": "Inter",
    "semantic-font-family-font-family-typography-mono": "IBM Plex Mono",
    "semantic-font-family-font-family-feedback": "Inter",
    "semantic-font-family-font-family-status": "Inter",
    "semantic-font-family-font-family-navigation": "Inter",
    "semantic-font-family-typography-serif": "Inter",
    "semantic-font-family-typography-sans-serif": "Inter",
    "semantic-font-family-typography-mono": "IBM Plex Mono",
    "semantic-font-family-status": "Inter",
    "semantic-font-family-navigation": "Inter",
    "font-family-serif": "Inter",
    "font-family-sans-serif": "Inter",
    "font-family-mono": "IBM Plex Mono",
    "input-font-family": "Inter",
    "select-font-family": "Inter",
    "avatar-font-family": "Inter",
    "tag-font-family": "Inter",
    "heading-font-family": "Inter",
    "tab-font-family": "Inter",
    "text-font-family": "Inter",
    "tooltip-font-family": "Inter"
  },
  dark: {
    "btn-font-family": "Inter",
    "semantic-font-family-actions": "Inter",
    "semantic-font-family-inputs": "Inter",
    "semantic-font-family-font-family-inputs": "Inter",
    "semantic-font-family-font-family-actions": "Inter",
    "semantic-font-family-font-family-typography-serif": "Inter",
    "semantic-font-family-font-family-typography-sans-serif": "Inter",
    "semantic-font-family-font-family-typography-mono": "IBM Plex Mono",
    "semantic-font-family-font-family-feedback": "Inter",
    "semantic-font-family-font-family-status": "Inter",
    "semantic-font-family-font-family-navigation": "Inter",
    "semantic-font-family-typography-serif": "Inter",
    "semantic-font-family-typography-sans-serif": "Inter",
    "semantic-font-family-typography-mono": "IBM Plex Mono",
    "semantic-font-family-status": "Inter",
    "semantic-font-family-navigation": "Inter",
    "font-family-serif": "Inter",
    "font-family-sans-serif": "Inter",
    "font-family-mono": "IBM Plex Mono",
    "input-font-family": "Inter",
    "select-font-family": "Inter",
    "avatar-font-family": "Inter",
    "tag-font-family": "Inter",
    "heading-font-family": "Inter",
    "tab-font-family": "Inter",
    "text-font-family": "Inter",
    "tooltip-font-family": "Inter"
  }
};
var fontWeights = {
  light: {
    "btn-font-weight": "undefined",
    "semantic-font-weight-actions": "undefined",
    "semantic-font-weight-inputs": "undefined",
    "semantic-font-weight-feedback-regular": "undefined",
    "semantic-font-weight-feedback-bold": "undefined",
    "semantic-font-weight-typography-light": "undefined",
    "semantic-font-weight-typography-regular": "undefined",
    "semantic-font-weight-typography-semibold": "undefined",
    "semantic-font-weight-typography-bold": "undefined",
    "semantic-font-weight-status": "undefined",
    "font-weight-semi-bold": "undefined",
    "font-weight-regular": "400",
    "font-weight-light": "300",
    "font-weight-bold": "700",
    "input-font-weight": "undefined",
    "select-font-weight": "undefined",
    "tag-font-weight": "undefined",
    "heading-light-font-weight": "undefined",
    "heading-regular-font-weight": "undefined",
    "heading-semi-bold-font-weight": "undefined",
    "heading-bold-font-weight": "700",
    "tab-font-weight": "undefined",
    "text-light-font-weight": "undefined",
    "text-regular-font-weight": "undefined",
    "text-semi-bold-font-weight": "undefined",
    "text-bold-font-weight": "700",
    "tooltip-font-weight": "undefined"
  },
  dark: {
    "btn-font-weight": "undefined",
    "semantic-font-weight-actions": "undefined",
    "semantic-font-weight-inputs": "undefined",
    "semantic-font-weight-feedback-regular": "undefined",
    "semantic-font-weight-feedback-bold": "undefined",
    "semantic-font-weight-typography-light": "undefined",
    "semantic-font-weight-typography-regular": "undefined",
    "semantic-font-weight-typography-semibold": "undefined",
    "semantic-font-weight-typography-bold": "undefined",
    "semantic-font-weight-status": "undefined",
    "font-weight-semi-bold": "undefined",
    "font-weight-regular": "400",
    "font-weight-light": "300",
    "font-weight-bold": "700",
    "input-font-weight": "undefined",
    "select-font-weight": "undefined",
    "tag-font-weight": "undefined",
    "heading-light-font-weight": "undefined",
    "heading-regular-font-weight": "undefined",
    "heading-semi-bold-font-weight": "undefined",
    "heading-bold-font-weight": "700",
    "tab-font-weight": "undefined",
    "text-light-font-weight": "undefined",
    "text-regular-font-weight": "undefined",
    "text-semi-bold-font-weight": "undefined",
    "text-bold-font-weight": "700",
    "tooltip-font-weight": "undefined"
  }
};
var space2 = {
  light: {
    "btn-xs-padding-left": "16px",
    "btn-xs-padding-right": "16px",
    "btn-sm-padding-left": "16px",
    "btn-sm-padding-right": "16px",
    "btn-sm-padding-top": "12px",
    "btn-sm-padding-bottom": "12px",
    "btn-md-padding-left": "16px",
    "btn-md-padding-right": "16px",
    "btn-md-padding-top": "16px",
    "btn-md-padding-bottom": "16px",
    "btn-lg-padding-left": "16px",
    "btn-lg-padding-right": "16px",
    "btn-lg-padding-top": "20px",
    "btn-lg-padding-bottom": "20px",
    "semantic-spacing-actions-xs-padding-left": "16px",
    "semantic-spacing-actions-xs-padding-right": "16px",
    "semantic-spacing-actions-xs-padding-top": "8px",
    "semantic-spacing-actions-xs-padding-bottom": "8px",
    "semantic-spacing-actions-sm-padding-left": "16px",
    "semantic-spacing-actions-sm-padding-right": "16px",
    "semantic-spacing-actions-sm-padding-top": "12px",
    "semantic-spacing-actions-sm-padding-bottom": "12px",
    "semantic-spacing-actions-md-padding-left": "16px",
    "semantic-spacing-actions-md-padding-right": "16px",
    "semantic-spacing-actions-md-padding-top": "16px",
    "semantic-spacing-actions-md-padding-bottom": "16px",
    "semantic-spacing-actions-lg-padding-left": "16px",
    "semantic-spacing-actions-lg-padding-right": "16px",
    "semantic-spacing-actions-lg-padding-top": "20px",
    "semantic-spacing-actions-lg-padding-bottom": "20px",
    "semantic-spacing-inputs-small-padding-left": "16px",
    "semantic-spacing-inputs-small-padding-right": "16px",
    "semantic-spacing-inputs-small-padding-top": "8px",
    "semantic-spacing-inputs-small-padding-bottom": "8px",
    "semantic-spacing-inputs-medium-padding-left": "16px",
    "semantic-spacing-inputs-medium-padding-right": "16px",
    "semantic-spacing-inputs-medium-padding-top": "12px",
    "semantic-spacing-inputs-medium-padding-bottom": "12px",
    "semantic-spacing-inputs-large-padding-left": "16px",
    "semantic-spacing-inputs-large-padding-right": "16px",
    "semantic-spacing-inputs-large-padding-top": "16px",
    "semantic-spacing-inputs-large-padding-bottom": "16px",
    "semantic-spacing-inputs-extra-large-padding-left": "16px",
    "semantic-spacing-inputs-extra-large-padding-right": "16px",
    "semantic-spacing-inputs-extra-large-padding-top": "20px",
    "semantic-spacing-inputs-extra-large-padding-bottom": "20px",
    "semantic-spacing-inputs-space-between": "8px",
    "semantic-spacing-feedback-padding-left": "16px",
    "semantic-spacing-feedback-padding-right": "16px",
    "semantic-spacing-feedback-padding-top": "16px",
    "semantic-spacing-feedback-padding-bottom": "16px",
    "semantic-spacing-status-space-between": "8px",
    "semantic-spacing-status-small-padding-top": "6px",
    "semantic-spacing-status-small-padding-right": "12px",
    "semantic-spacing-status-small-padding-bottom": "6px",
    "semantic-spacing-status-small-padding-left": "12px",
    "semantic-spacing-status-medium-padding-top": "8px",
    "semantic-spacing-status-medium-padding-right": "16px",
    "semantic-spacing-status-medium-padding-bottom": "8px",
    "semantic-spacing-status-medium-padding-left": "16px",
    "semantic-spacing-status-large-padding-top": "8px",
    "semantic-spacing-status-large-padding-right": "16px",
    "semantic-spacing-status-large-padding-bottom": "8px",
    "semantic-spacing-status-large-padding-left": "16px",
    "semantic-spacing-status-extra-large-padding-top": "8px",
    "semantic-spacing-status-extra-large-padding-right": "16px",
    "semantic-spacing-status-extra-large-padding-bottom": "8px",
    "semantic-spacing-status-extra-large-padding-left": "16px",
    "semantic-spacing-ui-xxs-space-between": "4px",
    "semantic-spacing-ui-xxs-space-around": "4px",
    "semantic-spacing-ui-xs-space-between": "8px",
    "semantic-spacing-ui-xs-space-around": "6px",
    "semantic-spacing-ui-s-space-between": "16px",
    "semantic-spacing-ui-s-space-around": "8px",
    "semantic-spacing-ui-m-space-between": "24px",
    "semantic-spacing-ui-m-space-around": "12px",
    "semantic-spacing-ui-l-space-between": "32px",
    "semantic-spacing-ui-l-space-around": "16px",
    "semantic-spacing-ui-xl-space-between": "64px",
    "semantic-spacing-ui-xl-space-around": "24px",
    "semantic-spacing-ui-xxl-space-between": "96px",
    "semantic-spacing-ui-xxl-space-around": "32px",
    "semantic-spacing-ui-xxxl-space-between": "160px",
    "semantic-spacing-ui-xxxl-space-around": "64px",
    "semantic-spacing-ui-xxxxl-space-around": "96px",
    "space-0": "0px",
    "space-25": "2px",
    "space-50": "4px",
    "space-75": "6px",
    "space-100": "8px",
    "space-125": "10px",
    "space-150": "12px",
    "space-175": "14px",
    "space-200": "16px",
    "space-225": "18px",
    "space-250": "20px",
    "space-275": "22px",
    "space-300": "24px",
    "space-350": "28px",
    "space-400": "32px",
    "space-500": "40px",
    "space-600": "48px",
    "space-700": "56px",
    "space-800": "64px",
    "space-900": "72px",
    "space-1000": "80px",
    "space-1200": "96px",
    "space-1400": "112px",
    "space-1600": "128px",
    "space-1800": "144px",
    "space-2000": "160px",
    "space-2200": "176px",
    "space-2400": "192px",
    "space-2600": "208px",
    "space-2800": "224px",
    "space-3000": "240px",
    "space-3200": "256px",
    "space-3400": "288px",
    "space-3600": "320px",
    "space-3800": "384px",
    "input-sm-padding-left": "12px",
    "input-sm-padding-right": "12px",
    "input-md-padding-left": "16px",
    "input-md-padding-right": "16px",
    "input-lg-padding-left": "16px",
    "input-lg-padding-right": "16px",
    "input-space-between": "8px",
    "select-space-between": "12px",
    "switch-space-between": "8px",
    "tag-sm-padding-left": "12px",
    "tag-sm-padding-right": "12px",
    "tag-sm-padding-top": "6px",
    "tag-sm-padding-bottom": "6px",
    "tag-md-padding-left": "16px",
    "tag-md-padding-right": "16px",
    "tag-md-padding-top": "8px",
    "tag-md-padding-bottom": "8px",
    "tag-lg-padding-left": "16px",
    "tag-lg-padding-right": "16px",
    "tag-lg-padding-top": "8px",
    "tag-lg-padding-bottom": "8px",
    "tag-space-between": "8px",
    "tooltip-padding-left": "16px",
    "tooltip-padding-right": "16px",
    "tooltip-padding-top": "16px",
    "tooltip-padding-bottom": "16px"
  },
  dark: {
    "btn-xs-padding-left": "16px",
    "btn-xs-padding-right": "16px",
    "btn-sm-padding-left": "16px",
    "btn-sm-padding-right": "16px",
    "btn-sm-padding-top": "12px",
    "btn-sm-padding-bottom": "12px",
    "btn-md-padding-left": "16px",
    "btn-md-padding-right": "16px",
    "btn-md-padding-top": "16px",
    "btn-md-padding-bottom": "16px",
    "btn-lg-padding-left": "16px",
    "btn-lg-padding-right": "16px",
    "btn-lg-padding-top": "20px",
    "btn-lg-padding-bottom": "20px",
    "semantic-spacing-actions-xs-padding-left": "16px",
    "semantic-spacing-actions-xs-padding-right": "16px",
    "semantic-spacing-actions-xs-padding-top": "8px",
    "semantic-spacing-actions-xs-padding-bottom": "8px",
    "semantic-spacing-actions-sm-padding-left": "16px",
    "semantic-spacing-actions-sm-padding-right": "16px",
    "semantic-spacing-actions-sm-padding-top": "12px",
    "semantic-spacing-actions-sm-padding-bottom": "12px",
    "semantic-spacing-actions-md-padding-left": "16px",
    "semantic-spacing-actions-md-padding-right": "16px",
    "semantic-spacing-actions-md-padding-top": "16px",
    "semantic-spacing-actions-md-padding-bottom": "16px",
    "semantic-spacing-actions-lg-padding-left": "16px",
    "semantic-spacing-actions-lg-padding-right": "16px",
    "semantic-spacing-actions-lg-padding-top": "20px",
    "semantic-spacing-actions-lg-padding-bottom": "20px",
    "semantic-spacing-inputs-small-padding-left": "16px",
    "semantic-spacing-inputs-small-padding-right": "16px",
    "semantic-spacing-inputs-small-padding-top": "8px",
    "semantic-spacing-inputs-small-padding-bottom": "8px",
    "semantic-spacing-inputs-medium-padding-left": "16px",
    "semantic-spacing-inputs-medium-padding-right": "16px",
    "semantic-spacing-inputs-medium-padding-top": "12px",
    "semantic-spacing-inputs-medium-padding-bottom": "12px",
    "semantic-spacing-inputs-large-padding-left": "16px",
    "semantic-spacing-inputs-large-padding-right": "16px",
    "semantic-spacing-inputs-large-padding-top": "16px",
    "semantic-spacing-inputs-large-padding-bottom": "16px",
    "semantic-spacing-inputs-extra-large-padding-left": "16px",
    "semantic-spacing-inputs-extra-large-padding-right": "16px",
    "semantic-spacing-inputs-extra-large-padding-top": "20px",
    "semantic-spacing-inputs-extra-large-padding-bottom": "20px",
    "semantic-spacing-inputs-space-between": "8px",
    "semantic-spacing-feedback-padding-left": "16px",
    "semantic-spacing-feedback-padding-right": "16px",
    "semantic-spacing-feedback-padding-top": "16px",
    "semantic-spacing-feedback-padding-bottom": "16px",
    "semantic-spacing-status-space-between": "8px",
    "semantic-spacing-status-small-padding-top": "6px",
    "semantic-spacing-status-small-padding-right": "12px",
    "semantic-spacing-status-small-padding-bottom": "6px",
    "semantic-spacing-status-small-padding-left": "12px",
    "semantic-spacing-status-medium-padding-top": "8px",
    "semantic-spacing-status-medium-padding-right": "16px",
    "semantic-spacing-status-medium-padding-bottom": "8px",
    "semantic-spacing-status-medium-padding-left": "16px",
    "semantic-spacing-status-large-padding-top": "8px",
    "semantic-spacing-status-large-padding-right": "16px",
    "semantic-spacing-status-large-padding-bottom": "8px",
    "semantic-spacing-status-large-padding-left": "16px",
    "semantic-spacing-status-extra-large-padding-top": "8px",
    "semantic-spacing-status-extra-large-padding-right": "16px",
    "semantic-spacing-status-extra-large-padding-bottom": "8px",
    "semantic-spacing-status-extra-large-padding-left": "16px",
    "semantic-spacing-ui-xxs-space-between": "4px",
    "semantic-spacing-ui-xxs-space-around": "4px",
    "semantic-spacing-ui-xs-space-between": "8px",
    "semantic-spacing-ui-xs-space-around": "6px",
    "semantic-spacing-ui-s-space-between": "16px",
    "semantic-spacing-ui-s-space-around": "8px",
    "semantic-spacing-ui-m-space-between": "24px",
    "semantic-spacing-ui-m-space-around": "12px",
    "semantic-spacing-ui-l-space-between": "32px",
    "semantic-spacing-ui-l-space-around": "16px",
    "semantic-spacing-ui-xl-space-between": "64px",
    "semantic-spacing-ui-xl-space-around": "24px",
    "semantic-spacing-ui-xxl-space-between": "96px",
    "semantic-spacing-ui-xxl-space-around": "32px",
    "semantic-spacing-ui-xxxl-space-between": "160px",
    "semantic-spacing-ui-xxxl-space-around": "64px",
    "semantic-spacing-ui-xxxxl-space-around": "96px",
    "space-0": "0px",
    "space-25": "2px",
    "space-50": "4px",
    "space-75": "6px",
    "space-100": "8px",
    "space-125": "10px",
    "space-150": "12px",
    "space-175": "14px",
    "space-200": "16px",
    "space-225": "18px",
    "space-250": "20px",
    "space-275": "22px",
    "space-300": "24px",
    "space-350": "28px",
    "space-400": "32px",
    "space-500": "40px",
    "space-600": "48px",
    "space-700": "56px",
    "space-800": "64px",
    "space-900": "72px",
    "space-1000": "80px",
    "space-1200": "96px",
    "space-1400": "112px",
    "space-1600": "128px",
    "space-1800": "144px",
    "space-2000": "160px",
    "space-2200": "176px",
    "space-2400": "192px",
    "space-2600": "208px",
    "space-2800": "224px",
    "space-3000": "240px",
    "space-3200": "256px",
    "space-3400": "288px",
    "space-3600": "320px",
    "space-3800": "384px",
    "input-sm-padding-left": "12px",
    "input-sm-padding-right": "12px",
    "input-md-padding-left": "16px",
    "input-md-padding-right": "16px",
    "input-lg-padding-left": "16px",
    "input-lg-padding-right": "16px",
    "input-space-between": "8px",
    "select-space-between": "12px",
    "switch-space-between": "8px",
    "tag-sm-padding-left": "12px",
    "tag-sm-padding-right": "12px",
    "tag-sm-padding-top": "6px",
    "tag-sm-padding-bottom": "6px",
    "tag-md-padding-left": "16px",
    "tag-md-padding-right": "16px",
    "tag-md-padding-top": "8px",
    "tag-md-padding-bottom": "8px",
    "tag-lg-padding-left": "16px",
    "tag-lg-padding-right": "16px",
    "tag-lg-padding-top": "8px",
    "tag-lg-padding-bottom": "8px",
    "tag-space-between": "8px",
    "tooltip-padding-left": "16px",
    "tooltip-padding-right": "16px",
    "tooltip-padding-top": "16px",
    "tooltip-padding-bottom": "16px"
  }
};
var lineHeights = {
  light: {
    "btn-line-height": "100%",
    "semantic-line-height-typography-heading": "120%",
    "semantic-line-height-typography-display": "100%",
    "semantic-line-height-typography-body": "150%",
    "semantic-line-height-typography-code": "130%",
    "semantic-line-height-typography-detail": "130%",
    "line-height-1": "130%",
    "line-height-2": "150%",
    "line-height-100": "100%",
    "line-height-120": "120%",
    "heading-line-height": "120%",
    "text-line-height": "150%"
  },
  dark: {
    "btn-line-height": "100%",
    "semantic-line-height-typography-heading": "120%",
    "semantic-line-height-typography-display": "100%",
    "semantic-line-height-typography-body": "150%",
    "semantic-line-height-typography-code": "130%",
    "semantic-line-height-typography-detail": "130%",
    "line-height-1": "130%",
    "line-height-2": "150%",
    "line-height-100": "100%",
    "line-height-120": "120%",
    "heading-line-height": "120%",
    "text-line-height": "150%"
  }
};
var sizes23 = {
  light: {
    "btn-xs-icon-size": "16px",
    "btn-xs-height": "32px",
    "btn-sm-icon-size": "16px",
    "btn-sm-height": "40px",
    "btn-md-icon-size": "16px",
    "btn-md-height": "48px",
    "btn-lg-icon-size": "24px",
    "btn-lg-height": "56px",
    "semantic-component-extra-small": "24px",
    "semantic-component-small": "32px",
    "semantic-component-medium": "40px",
    "semantic-component-large": "48px",
    "semantic-component-extra-large": "56px",
    "semantic-sizing-actions-xs": "32px",
    "semantic-sizing-actions-sm": "40px",
    "semantic-sizing-actions-md": "48px",
    "semantic-sizing-actions-lg": "56px",
    "semantic-sizing-actions-icon-size-xs": "16px",
    "semantic-sizing-actions-icon-size-sm": "24px",
    "semantic-sizing-actions-icon-size-md": "32px",
    "semantic-sizing-actions-icon-size-lg": "40px",
    "semantic-sizing-inputs-xs": "32px",
    "semantic-sizing-inputs-sm": "40px",
    "semantic-sizing-inputs-md": "48px",
    "semantic-sizing-inputs-lg": "56px",
    "semantic-sizing-inputs-icon-size-small": "16px",
    "semantic-sizing-inputs-icon-size-medium": "24px",
    "semantic-sizing-inputs-icon-size-large": "32px",
    "semantic-sizing-inputs-icon-size-extra-large": "40px",
    "semantic-sizing-inputs-width": "20px",
    "semantic-sizing-feedback-icon-size": "16px",
    "semantic-sizing-feedback-width": "72px",
    "semantic-sizing-status-s-height": "24px",
    "semantic-sizing-status-s-icon-size": "8px",
    "semantic-sizing-status-m-height": "32px",
    "semantic-sizing-status-m-icon-size": "16px",
    "semantic-sizing-status-l-height": "40px",
    "semantic-sizing-status-l-icon-size": "24px",
    "semantic-sizing-status-xl-height": "48px",
    "semantic-sizing-status-xl-icon-size": "32px",
    "semantic-sizing-navigation-icon-size-xxs": "16px",
    "semantic-sizing-navigation-icon-size-xs": "20px",
    "semantic-sizing-navigation-icon-size-s": "24px",
    "semantic-sizing-navigation-icon-size-m": "32px",
    "semantic-sizing-navigation-icon-size-l": "32px",
    "semantic-sizing-navigation-icon-size-xl": "40px",
    "semantic-sizing-navigation-icon-size-xxl": "56px",
    "semantic-sizing-navigation-icon-size-xxxl": "72px",
    "semantic-sizing-navigation-xxs": "20px",
    "semantic-sizing-navigation-xs": "24px",
    "semantic-sizing-navigation-s": "32px",
    "semantic-sizing-navigation-m": "36px",
    "semantic-sizing-navigation-l": "40px",
    "semantic-sizing-navigation-xl": "48px",
    "semantic-sizing-navigation-xxl": "64px",
    "semantic-sizing-navigation-xxxl": "80px",
    "size-0": "0px",
    "size-12": "1px",
    "size-25": "2px",
    "size-50": "4px",
    "size-75": "6px",
    "size-100": "8px",
    "size-125": "10px",
    "size-150": "12px",
    "size-175": "14px",
    "size-200": "16px",
    "size-225": "18px",
    "size-250": "20px",
    "size-275": "22px",
    "size-300": "24px",
    "size-400": "32px",
    "size-450": "36px",
    "size-500": "40px",
    "size-600": "48px",
    "size-700": "56px",
    "size-800": "64px",
    "size-900": "72px",
    "size-1000": "80px",
    "size-1200": "96px",
    "size-1400": "112px",
    "size-1600": "128px",
    "size-1800": "144px",
    "size-2000": "160px",
    "size-2200": "176px",
    "size-2400": "192px",
    "size-2600": "208px",
    "size-2800": "224px",
    "size-3000": "240px",
    "size-3200": "256px",
    "size-3400": "288px",
    "size-3600": "320px",
    "size-3800": "384px",
    "checkbox-sm-width": "12px",
    "checkbox-sm-height": "12px",
    "checkbox-sm-checkmark-width": "8px",
    "checkbox-sm-checkmark-height": "8px",
    "checkbox-md-width": "16px",
    "checkbox-md-height": "16px",
    "checkbox-md-checkmark-width": "12px",
    "checkbox-md-checkmark-height": "12px",
    "checkbox-lg-width": "20px",
    "checkbox-lg-height": "20px",
    "checkbox-lg-checkmark-width": "16px",
    "checkbox-lg-checkmark-height": "16px",
    "input-sm-height": "32px",
    "input-sm-icon-size": "20px",
    "input-md-height": "40px",
    "input-md-icon-size": "20px",
    "input-lg-height": "48px",
    "input-lg-icon-size": "24px",
    "radio-sm-width": "14px",
    "radio-sm-height": "14px",
    "radio-sm-checkmark-width": "6px",
    "radio-sm-checkmark-height": "6px",
    "radio-md-width": "18px",
    "radio-md-height": "18px",
    "radio-md-checkmark-width": "10px",
    "radio-md-checkmark-height": "10px",
    "radio-lg-width": "22px",
    "radio-lg-height": "22px",
    "radio-lg-checkmark-width": "12px",
    "radio-lg-checkmark-height": "12px",
    "select-sm-height": "32px",
    "select-sm-icon-size": "20px",
    "select-md-height": "40px",
    "select-md-icon-size": "20px",
    "select-lg-height": "48px",
    "select-lg-icon-size": "20px",
    "switch-sm-width": "26px",
    "switch-sm-height": "16px",
    "switch-sm-thumb-width": "12px",
    "switch-sm-thumb-height": "12px",
    "switch-md-width": "34px",
    "switch-md-height": "20px",
    "switch-md-thumb-width": "16px",
    "switch-md-thumb-height": "16px",
    "switch-lg-width": "50px",
    "switch-lg-height": "28px",
    "switch-lg-thumb-width": "24px",
    "switch-lg-thumb-height": "24px",
    "avatar-xxs-height": "20px",
    "avatar-xxs-width": "20px",
    "avatar-xxs-icon-size": "16px",
    "avatar-xs-height": "24px",
    "avatar-xs-width": "24px",
    "avatar-xs-icon-size": "20px",
    "avatar-s-height": "32px",
    "avatar-s-width": "32px",
    "avatar-s-icon-size": "24px",
    "avatar-m-height": "36px",
    "avatar-m-width": "36px",
    "avatar-m-icon-size": "32px",
    "avatar-l-height": "40px",
    "avatar-l-width": "40px",
    "avatar-l-icon-size": "32px",
    "avatar-xl-height": "48px",
    "avatar-xl-width": "48px",
    "avatar-xl-icon-size": "40px",
    "avatar-xxl-height": "64px",
    "avatar-xxl-width": "64px",
    "avatar-xxl-icon-size": "56px",
    "avatar-xxxl-height": "80px",
    "avatar-xxxl-width": "80px",
    "avatar-xxxl-icon-size": "72px",
    "tag-sm-height": "24px",
    "tag-sm-icon-size": "8px",
    "tag-md-height": "32px",
    "tag-md-icon-size": "16px",
    "tag-lg-height": "40px",
    "tag-lg-icon-size": "24px",
    "icon-width": "24px",
    "icon-height": "24px",
    "icon-button-xs-icon-size": "12px",
    "icon-button-xs-height": "24px",
    "icon-button-xs-width": "24px",
    "icon-button-sm-icon-size": "16px",
    "icon-button-sm-height": "32px",
    "icon-button-sm-width": "32px",
    "icon-button-md-icon-size": "20px",
    "icon-button-md-height": "40px",
    "icon-button-md-width": "40px",
    "icon-button-lg-icon-size": "24px",
    "icon-button-lg-height": "48px",
    "icon-button-lg-width": "48px"
  },
  dark: {
    "btn-xs-icon-size": "16px",
    "btn-xs-height": "32px",
    "btn-sm-icon-size": "16px",
    "btn-sm-height": "40px",
    "btn-md-icon-size": "16px",
    "btn-md-height": "48px",
    "btn-lg-icon-size": "24px",
    "btn-lg-height": "56px",
    "semantic-component-extra-small": "24px",
    "semantic-component-small": "32px",
    "semantic-component-medium": "40px",
    "semantic-component-large": "48px",
    "semantic-component-extra-large": "56px",
    "semantic-sizing-actions-xs": "32px",
    "semantic-sizing-actions-sm": "40px",
    "semantic-sizing-actions-md": "48px",
    "semantic-sizing-actions-lg": "56px",
    "semantic-sizing-actions-icon-size-xs": "16px",
    "semantic-sizing-actions-icon-size-sm": "24px",
    "semantic-sizing-actions-icon-size-md": "32px",
    "semantic-sizing-actions-icon-size-lg": "40px",
    "semantic-sizing-inputs-xs": "32px",
    "semantic-sizing-inputs-sm": "40px",
    "semantic-sizing-inputs-md": "48px",
    "semantic-sizing-inputs-lg": "56px",
    "semantic-sizing-inputs-icon-size-small": "16px",
    "semantic-sizing-inputs-icon-size-medium": "24px",
    "semantic-sizing-inputs-icon-size-large": "32px",
    "semantic-sizing-inputs-icon-size-extra-large": "40px",
    "semantic-sizing-inputs-width": "20px",
    "semantic-sizing-feedback-icon-size": "16px",
    "semantic-sizing-feedback-width": "72px",
    "semantic-sizing-status-s-height": "24px",
    "semantic-sizing-status-s-icon-size": "8px",
    "semantic-sizing-status-m-height": "32px",
    "semantic-sizing-status-m-icon-size": "16px",
    "semantic-sizing-status-l-height": "40px",
    "semantic-sizing-status-l-icon-size": "24px",
    "semantic-sizing-status-xl-height": "48px",
    "semantic-sizing-status-xl-icon-size": "32px",
    "semantic-sizing-navigation-icon-size-xxs": "16px",
    "semantic-sizing-navigation-icon-size-xs": "20px",
    "semantic-sizing-navigation-icon-size-s": "24px",
    "semantic-sizing-navigation-icon-size-m": "32px",
    "semantic-sizing-navigation-icon-size-l": "32px",
    "semantic-sizing-navigation-icon-size-xl": "40px",
    "semantic-sizing-navigation-icon-size-xxl": "56px",
    "semantic-sizing-navigation-icon-size-xxxl": "72px",
    "semantic-sizing-navigation-xxs": "20px",
    "semantic-sizing-navigation-xs": "24px",
    "semantic-sizing-navigation-s": "32px",
    "semantic-sizing-navigation-m": "36px",
    "semantic-sizing-navigation-l": "40px",
    "semantic-sizing-navigation-xl": "48px",
    "semantic-sizing-navigation-xxl": "64px",
    "semantic-sizing-navigation-xxxl": "80px",
    "size-0": "0px",
    "size-12": "1px",
    "size-25": "2px",
    "size-50": "4px",
    "size-75": "6px",
    "size-100": "8px",
    "size-125": "10px",
    "size-150": "12px",
    "size-175": "14px",
    "size-200": "16px",
    "size-225": "18px",
    "size-250": "20px",
    "size-275": "22px",
    "size-300": "24px",
    "size-400": "32px",
    "size-450": "36px",
    "size-500": "40px",
    "size-600": "48px",
    "size-700": "56px",
    "size-800": "64px",
    "size-900": "72px",
    "size-1000": "80px",
    "size-1200": "96px",
    "size-1400": "112px",
    "size-1600": "128px",
    "size-1800": "144px",
    "size-2000": "160px",
    "size-2200": "176px",
    "size-2400": "192px",
    "size-2600": "208px",
    "size-2800": "224px",
    "size-3000": "240px",
    "size-3200": "256px",
    "size-3400": "288px",
    "size-3600": "320px",
    "size-3800": "384px",
    "checkbox-sm-width": "12px",
    "checkbox-sm-height": "12px",
    "checkbox-sm-checkmark-width": "8px",
    "checkbox-sm-checkmark-height": "8px",
    "checkbox-md-width": "16px",
    "checkbox-md-height": "16px",
    "checkbox-md-checkmark-width": "12px",
    "checkbox-md-checkmark-height": "12px",
    "checkbox-lg-width": "20px",
    "checkbox-lg-height": "20px",
    "checkbox-lg-checkmark-width": "16px",
    "checkbox-lg-checkmark-height": "16px",
    "input-sm-height": "32px",
    "input-sm-icon-size": "20px",
    "input-md-height": "40px",
    "input-md-icon-size": "20px",
    "input-lg-height": "48px",
    "input-lg-icon-size": "24px",
    "radio-sm-width": "14px",
    "radio-sm-height": "14px",
    "radio-sm-checkmark-width": "6px",
    "radio-sm-checkmark-height": "6px",
    "radio-md-width": "18px",
    "radio-md-height": "18px",
    "radio-md-checkmark-width": "10px",
    "radio-md-checkmark-height": "10px",
    "radio-lg-width": "22px",
    "radio-lg-height": "22px",
    "radio-lg-checkmark-width": "12px",
    "radio-lg-checkmark-height": "12px",
    "select-sm-height": "32px",
    "select-sm-icon-size": "20px",
    "select-md-height": "40px",
    "select-md-icon-size": "20px",
    "select-lg-height": "48px",
    "select-lg-icon-size": "20px",
    "switch-sm-width": "26px",
    "switch-sm-height": "16px",
    "switch-sm-thumb-width": "12px",
    "switch-sm-thumb-height": "12px",
    "switch-md-width": "34px",
    "switch-md-height": "20px",
    "switch-md-thumb-width": "16px",
    "switch-md-thumb-height": "16px",
    "switch-lg-width": "50px",
    "switch-lg-height": "28px",
    "switch-lg-thumb-width": "24px",
    "switch-lg-thumb-height": "24px",
    "avatar-xxs-height": "20px",
    "avatar-xxs-width": "20px",
    "avatar-xxs-icon-size": "16px",
    "avatar-xs-height": "24px",
    "avatar-xs-width": "24px",
    "avatar-xs-icon-size": "20px",
    "avatar-s-height": "32px",
    "avatar-s-width": "32px",
    "avatar-s-icon-size": "24px",
    "avatar-m-height": "36px",
    "avatar-m-width": "36px",
    "avatar-m-icon-size": "32px",
    "avatar-l-height": "40px",
    "avatar-l-width": "40px",
    "avatar-l-icon-size": "32px",
    "avatar-xl-height": "48px",
    "avatar-xl-width": "48px",
    "avatar-xl-icon-size": "40px",
    "avatar-xxl-height": "64px",
    "avatar-xxl-width": "64px",
    "avatar-xxl-icon-size": "56px",
    "avatar-xxxl-height": "80px",
    "avatar-xxxl-width": "80px",
    "avatar-xxxl-icon-size": "72px",
    "tag-sm-height": "24px",
    "tag-sm-icon-size": "8px",
    "tag-md-height": "32px",
    "tag-md-icon-size": "16px",
    "tag-lg-height": "40px",
    "tag-lg-icon-size": "24px",
    "icon-width": "24px",
    "icon-height": "24px",
    "icon-button-xs-icon-size": "12px",
    "icon-button-xs-height": "24px",
    "icon-button-xs-width": "24px",
    "icon-button-sm-icon-size": "16px",
    "icon-button-sm-height": "32px",
    "icon-button-sm-width": "32px",
    "icon-button-md-icon-size": "20px",
    "icon-button-md-height": "40px",
    "icon-button-md-width": "40px",
    "icon-button-lg-icon-size": "24px",
    "icon-button-lg-height": "48px",
    "icon-button-lg-width": "48px"
  }
};
var borders2 = {
  light: {
    "btn-border-width": "1px",
    "semantic-border-width-inputs": "1px",
    "semantic-border-width-actions": "1px",
    "semantic-border-width-status": "1px",
    "semantic-border-width-feedback": "1px",
    "semantic-border-width-navigation": "2px",
    "semantic-border-width-slider": "4px",
    "semantic-border-width-focus": "4px",
    "border-width-0": "0px",
    "border-width-1": "1px",
    "border-width-2": "2px",
    "border-width-3": "4px",
    "border-width-4": "5px",
    "checkbox-border-width": "1px",
    "input-border-width": "1px",
    "radio-unselected-border-width": "1px",
    "radio-selected-sm-border-width": "4px",
    "radio-selected-md-border-width": "5px",
    "radio-selected-lg-border-width": "6px",
    "select-border-width": "1px",
    "select-focus-border-width": "4px",
    "avatar-badge-2xs-border-width": "1px",
    "avatar-badge-xs-border-width": "2px",
    "avatar-badge-sm-border-width": "2px",
    "avatar-badge-md-border-width": "4px",
    "avatar-badge-lg-border-width": "5px",
    "avatar-badge-xl-border-width": "6px",
    "avatar-badge-2xl-border-width": "6px",
    "icon-button-border-width": "1px",
    "icon-button-outline-border-width": "4px"
  },
  dark: {
    "btn-border-width": "1px",
    "semantic-border-width-inputs": "1px",
    "semantic-border-width-actions": "1px",
    "semantic-border-width-status": "1px",
    "semantic-border-width-feedback": "1px",
    "semantic-border-width-navigation": "2px",
    "semantic-border-width-slider": "4px",
    "semantic-border-width-focus": "4px",
    "border-width-0": "0px",
    "border-width-1": "1px",
    "border-width-2": "2px",
    "border-width-3": "4px",
    "border-width-4": "5px",
    "checkbox-border-width": "1px",
    "input-border-width": "1px",
    "radio-unselected-border-width": "1px",
    "radio-selected-sm-border-width": "4px",
    "radio-selected-md-border-width": "5px",
    "radio-selected-lg-border-width": "6px",
    "select-border-width": "1px",
    "select-focus-border-width": "4px",
    "avatar-badge-2xs-border-width": "1px",
    "avatar-badge-xs-border-width": "2px",
    "avatar-badge-sm-border-width": "2px",
    "avatar-badge-md-border-width": "4px",
    "avatar-badge-lg-border-width": "5px",
    "avatar-badge-xl-border-width": "6px",
    "avatar-badge-2xl-border-width": "6px",
    "icon-button-border-width": "1px",
    "icon-button-outline-border-width": "4px"
  }
};
var fontSizes = {
  light: {
    "btn-xs-text-size": "14px",
    "btn-sm-text-size": "16px",
    "btn-md-text-size": "18px",
    "btn-lg-text-size": "20px",
    "semantic-font-size-actions-xs": "14px",
    "semantic-font-size-actions-sm": "16px",
    "semantic-font-size-actions-md": "18px",
    "semantic-font-size-actions-lg": "20px",
    "semantic-font-size-inputs-xs": "14px",
    "semantic-font-size-inputs-sm": "16px",
    "semantic-font-size-inputs-md": "18px",
    "semantic-font-size-inputs-lg": "20px",
    "semantic-font-size-feedback-s": "14px",
    "semantic-font-size-feedback-m": "16px",
    "semantic-font-size-feedback-l": "18px",
    "semantic-font-size-feedback-xl": "20px",
    "semantic-font-size-typography-heading-xs": "16px",
    "semantic-font-size-typography-heading-s": "18px",
    "semantic-font-size-typography-heading-m": "22px",
    "semantic-font-size-typography-heading-l": "28px",
    "semantic-font-size-typography-heading-xl": "36px",
    "semantic-font-size-typography-heading-xxl": "44px",
    "semantic-font-size-typography-heading-d-1": "140px",
    "semantic-font-size-typography-heading-d-2": "112px",
    "semantic-font-size-typography-heading-d-3": "80px",
    "semantic-font-size-typography-heading-d-4": "64px",
    "semantic-font-size-typography-body-xs": "12px",
    "semantic-font-size-typography-body-s": "14px",
    "semantic-font-size-typography-body-m": "16px",
    "semantic-font-size-typography-body-l": "18px",
    "semantic-font-size-typography-body-xl": "20px",
    "semantic-font-size-typography-body-xxl": "22px",
    "semantic-font-size-typography-body-xxxl": "24px",
    "semantic-font-size-typography-code-xs": "12px",
    "semantic-font-size-typography-code-s": "14px",
    "semantic-font-size-typography-code-m": "16px",
    "semantic-font-size-typography-code-l": "18px",
    "semantic-font-size-typography-code-xl": "20px",
    "semantic-font-size-typography-detail-s": "10px",
    "semantic-font-size-typography-detail-m": "12px",
    "semantic-font-size-typography-detail-l": "14px",
    "semantic-font-size-typography-detail-xl": "16px",
    "semantic-font-size-status-s": "14px",
    "semantic-font-size-status-m": "16px",
    "semantic-font-size-status-l": "18px",
    "semantic-font-size-status-xl": "20px",
    "semantic-font-size-navigation-xxs": "10px",
    "semantic-font-size-navigation-xs": "10px",
    "semantic-font-size-navigation-s": "10px",
    "semantic-font-size-navigation-m": "12px",
    "semantic-font-size-navigation-l": "14px",
    "semantic-font-size-navigation-xl": "16px",
    "semantic-font-size-navigation-xxl": "22px",
    "semantic-font-size-navigation-xxxl": "24px",
    "font-size-0": " 8px",
    "font-size-1": "10px",
    "font-size-2": "12px",
    "font-size-3": "14px",
    "font-size-4": "16px",
    "font-size-5": "18px",
    "font-size-6": "20px",
    "font-size-7": "22px",
    "font-size-8": "24px",
    "font-size-9": "26px",
    "font-size-10": "28px",
    "font-size-11": "30px",
    "font-size-12": "32px",
    "font-size-13": "34px",
    "font-size-14": "36px",
    "font-size-15": "38px",
    "font-size-16": "40px",
    "font-size-17": "42px",
    "font-size-18": "44px",
    "font-size-19": "46px",
    "font-size-20": "48px",
    "font-size-21": "50px",
    "font-size-22": "52px",
    "font-size-23": "54px",
    "font-size-24": "64px",
    "font-size-25": "80px",
    "font-size-26": "112px",
    "font-size-27": "140px",
    "font-size-28": "160px",
    "input-sm-text-size": "14px",
    "input-md-text-size": "16px",
    "input-lg-text-size": "18px",
    "select-sm-text-size": "14px",
    "select-md-text-size": "16px",
    "select-lg-text-size": "18px",
    "avatar-xxs-text-size": "10px",
    "avatar-xs-text-size": "10px",
    "avatar-s-text-size": "10px",
    "avatar-m-text-size": "12px",
    "avatar-l-text-size": "14px",
    "avatar-xl-text-size": "16px",
    "avatar-xxl-text-size": "22px",
    "avatar-xxxl-text-size": "24px",
    "tag-sm-text-size": "14px",
    "tag-md-text-size": "16px",
    "tag-lg-text-size": "18px",
    "heading-xs-text-size": "16px",
    "heading-sm-text-size": "18px",
    "heading-md-text-size": "22px",
    "heading-lg-text-size": "28px",
    "heading-xl-text-size": "36px",
    "heading-2xl-text-size": "44px",
    "heading-3xl-text-size": "48px",
    "heading-4xl-text-size": "60px",
    "tab-text-size": "16px",
    "text-xs-text-size": "12px",
    "text-sm-text-size": "14px",
    "text-md-text-size": "16px",
    "text-lg-text-size": "18px",
    "text-xl-text-size": "20px",
    "text-2xl-text-size": "24px",
    "text-3xl-text-size": "30px",
    "text-4xl-text-size": "36px",
    "text-5xl-text-size": "48px",
    "text-6xl-text-size": "60px",
    "tooltip-text-size": "14px"
  },
  dark: {
    "btn-xs-text-size": "14px",
    "btn-sm-text-size": "16px",
    "btn-md-text-size": "18px",
    "btn-lg-text-size": "20px",
    "semantic-font-size-actions-xs": "14px",
    "semantic-font-size-actions-sm": "16px",
    "semantic-font-size-actions-md": "18px",
    "semantic-font-size-actions-lg": "20px",
    "semantic-font-size-inputs-xs": "14px",
    "semantic-font-size-inputs-sm": "16px",
    "semantic-font-size-inputs-md": "18px",
    "semantic-font-size-inputs-lg": "20px",
    "semantic-font-size-feedback-s": "14px",
    "semantic-font-size-feedback-m": "16px",
    "semantic-font-size-feedback-l": "18px",
    "semantic-font-size-feedback-xl": "20px",
    "semantic-font-size-typography-heading-xs": "16px",
    "semantic-font-size-typography-heading-s": "18px",
    "semantic-font-size-typography-heading-m": "22px",
    "semantic-font-size-typography-heading-l": "28px",
    "semantic-font-size-typography-heading-xl": "36px",
    "semantic-font-size-typography-heading-xxl": "44px",
    "semantic-font-size-typography-heading-d-1": "140px",
    "semantic-font-size-typography-heading-d-2": "112px",
    "semantic-font-size-typography-heading-d-3": "80px",
    "semantic-font-size-typography-heading-d-4": "64px",
    "semantic-font-size-typography-body-xs": "12px",
    "semantic-font-size-typography-body-s": "14px",
    "semantic-font-size-typography-body-m": "16px",
    "semantic-font-size-typography-body-l": "18px",
    "semantic-font-size-typography-body-xl": "20px",
    "semantic-font-size-typography-body-xxl": "22px",
    "semantic-font-size-typography-body-xxxl": "24px",
    "semantic-font-size-typography-code-xs": "12px",
    "semantic-font-size-typography-code-s": "14px",
    "semantic-font-size-typography-code-m": "16px",
    "semantic-font-size-typography-code-l": "18px",
    "semantic-font-size-typography-code-xl": "20px",
    "semantic-font-size-typography-detail-s": "10px",
    "semantic-font-size-typography-detail-m": "12px",
    "semantic-font-size-typography-detail-l": "14px",
    "semantic-font-size-typography-detail-xl": "16px",
    "semantic-font-size-status-s": "14px",
    "semantic-font-size-status-m": "16px",
    "semantic-font-size-status-l": "18px",
    "semantic-font-size-status-xl": "20px",
    "semantic-font-size-navigation-xxs": "10px",
    "semantic-font-size-navigation-xs": "10px",
    "semantic-font-size-navigation-s": "10px",
    "semantic-font-size-navigation-m": "12px",
    "semantic-font-size-navigation-l": "14px",
    "semantic-font-size-navigation-xl": "16px",
    "semantic-font-size-navigation-xxl": "22px",
    "semantic-font-size-navigation-xxxl": "24px",
    "font-size-0": " 8px",
    "font-size-1": "10px",
    "font-size-2": "12px",
    "font-size-3": "14px",
    "font-size-4": "16px",
    "font-size-5": "18px",
    "font-size-6": "20px",
    "font-size-7": "22px",
    "font-size-8": "24px",
    "font-size-9": "26px",
    "font-size-10": "28px",
    "font-size-11": "30px",
    "font-size-12": "32px",
    "font-size-13": "34px",
    "font-size-14": "36px",
    "font-size-15": "38px",
    "font-size-16": "40px",
    "font-size-17": "42px",
    "font-size-18": "44px",
    "font-size-19": "46px",
    "font-size-20": "48px",
    "font-size-21": "50px",
    "font-size-22": "52px",
    "font-size-23": "54px",
    "font-size-24": "64px",
    "font-size-25": "80px",
    "font-size-26": "112px",
    "font-size-27": "140px",
    "font-size-28": "160px",
    "input-sm-text-size": "14px",
    "input-md-text-size": "16px",
    "input-lg-text-size": "18px",
    "select-sm-text-size": "14px",
    "select-md-text-size": "16px",
    "select-lg-text-size": "18px",
    "avatar-xxs-text-size": "10px",
    "avatar-xs-text-size": "10px",
    "avatar-s-text-size": "10px",
    "avatar-m-text-size": "12px",
    "avatar-l-text-size": "14px",
    "avatar-xl-text-size": "16px",
    "avatar-xxl-text-size": "22px",
    "avatar-xxxl-text-size": "24px",
    "tag-sm-text-size": "14px",
    "tag-md-text-size": "16px",
    "tag-lg-text-size": "18px",
    "heading-xs-text-size": "16px",
    "heading-sm-text-size": "18px",
    "heading-md-text-size": "22px",
    "heading-lg-text-size": "28px",
    "heading-xl-text-size": "36px",
    "heading-2xl-text-size": "44px",
    "heading-3xl-text-size": "48px",
    "heading-4xl-text-size": "60px",
    "tab-text-size": "16px",
    "text-xs-text-size": "12px",
    "text-sm-text-size": "14px",
    "text-md-text-size": "16px",
    "text-lg-text-size": "18px",
    "text-xl-text-size": "20px",
    "text-2xl-text-size": "24px",
    "text-3xl-text-size": "30px",
    "text-4xl-text-size": "36px",
    "text-5xl-text-size": "48px",
    "text-6xl-text-size": "60px",
    "tooltip-text-size": "14px"
  }
};
var figmaTokens_default = {
  colors: colors2,
  radii: radii2,
  fonts,
  fontWeights,
  space: space2,
  lineHeights,
  sizes: sizes23,
  borders: borders2,
  fontSizes
};

// src/theme/index.ts
var semanticTokens2 = getChakraSemanticTokens(figmaTokens_default);
var overrides = {
  styles: styles2,
  semanticTokens: semanticTokens2,
  components: {
    Button,
    Avatar,
    Checkbox,
    Tag,
    Switch,
    IconButton,
    Heading,
    Text
  }
};
var theme_default = extendTheme(overrides);
export {
  theme_default as default
};
