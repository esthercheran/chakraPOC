var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target2) => __defProp(target2, "__esModule", { value: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target2, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target2, key) && key !== "default")
        __defProp(target2, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target2;
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

// node_modules/react-simple-code-editor/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-simple-code-editor/lib/index.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var React3 = __importStar(require_react());
    var KEYCODE_ENTER = 13;
    var KEYCODE_TAB = 9;
    var KEYCODE_BACKSPACE = 8;
    var KEYCODE_Y = 89;
    var KEYCODE_Z = 90;
    var KEYCODE_M = 77;
    var KEYCODE_PARENS = 57;
    var KEYCODE_BRACKETS = 219;
    var KEYCODE_QUOTE = 222;
    var KEYCODE_BACK_QUOTE = 192;
    var KEYCODE_ESCAPE = 27;
    var HISTORY_LIMIT = 100;
    var HISTORY_TIME_GAP = 3e3;
    var isWindows = typeof window !== "undefined" && "navigator" in window && /Win/i.test(navigator.platform);
    var isMacLike = typeof window !== "undefined" && "navigator" in window && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
    var className = "npm__react-simple-code-editor__textarea";
    var cssText = "\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(className, ":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(className, " {\n    color: transparent !important;\n  }\n\n  .").concat(className, "::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n");
    var Editor2 = function(_super) {
      __extends(Editor3, _super);
      function Editor3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
          capture: true
        };
        _this._recordCurrentState = function() {
          var input = _this._input;
          if (!input)
            return;
          var value = input.value, selectionStart = input.selectionStart, selectionEnd = input.selectionEnd;
          _this._recordChange({
            value,
            selectionStart,
            selectionEnd
          });
        };
        _this._getLines = function(text, position) {
          return text.substring(0, position).split("\n");
        };
        _this._recordChange = function(record, overwrite2) {
          var _a, _b, _c;
          if (overwrite2 === void 0) {
            overwrite2 = false;
          }
          var _d = _this._history, stack = _d.stack, offset2 = _d.offset;
          if (stack.length && offset2 > -1) {
            _this._history.stack = stack.slice(0, offset2 + 1);
            var count = _this._history.stack.length;
            if (count > HISTORY_LIMIT) {
              var extras = count - HISTORY_LIMIT;
              _this._history.stack = stack.slice(extras, count);
              _this._history.offset = Math.max(_this._history.offset - extras, 0);
            }
          }
          var timestamp = Date.now();
          if (overwrite2) {
            var last = _this._history.stack[_this._history.offset];
            if (last && timestamp - last.timestamp < HISTORY_TIME_GAP) {
              var re = /[^a-z0-9]([a-z0-9]+)$/i;
              var previous = (_a = _this._getLines(last.value, last.selectionStart).pop()) === null || _a === void 0 ? void 0 : _a.match(re);
              var current2 = (_b = _this._getLines(record.value, record.selectionStart).pop()) === null || _b === void 0 ? void 0 : _b.match(re);
              if ((previous === null || previous === void 0 ? void 0 : previous[1]) && ((_c = current2 === null || current2 === void 0 ? void 0 : current2[1]) === null || _c === void 0 ? void 0 : _c.startsWith(previous[1]))) {
                _this._history.stack[_this._history.offset] = __assign(__assign({}, record), { timestamp });
                return;
              }
            }
          }
          _this._history.stack.push(__assign(__assign({}, record), { timestamp }));
          _this._history.offset++;
        };
        _this._updateInput = function(record) {
          var input = _this._input;
          if (!input)
            return;
          input.value = record.value;
          input.selectionStart = record.selectionStart;
          input.selectionEnd = record.selectionEnd;
          _this.props.onValueChange(record.value);
        };
        _this._applyEdits = function(record) {
          var input = _this._input;
          var last = _this._history.stack[_this._history.offset];
          if (last && input) {
            _this._history.stack[_this._history.offset] = __assign(__assign({}, last), { selectionStart: input.selectionStart, selectionEnd: input.selectionEnd });
          }
          _this._recordChange(record);
          _this._updateInput(record);
        };
        _this._undoEdit = function() {
          var _a = _this._history, stack = _a.stack, offset2 = _a.offset;
          var record = stack[offset2 - 1];
          if (record) {
            _this._updateInput(record);
            _this._history.offset = Math.max(offset2 - 1, 0);
          }
        };
        _this._redoEdit = function() {
          var _a = _this._history, stack = _a.stack, offset2 = _a.offset;
          var record = stack[offset2 + 1];
          if (record) {
            _this._updateInput(record);
            _this._history.offset = Math.min(offset2 + 1, stack.length - 1);
          }
        };
        _this._handleKeyDown = function(e) {
          var _a = _this.props, tabSize = _a.tabSize, insertSpaces = _a.insertSpaces, ignoreTabKey = _a.ignoreTabKey, onKeyDown = _a.onKeyDown;
          if (onKeyDown) {
            onKeyDown(e);
            if (e.defaultPrevented) {
              return;
            }
          }
          if (e.keyCode === KEYCODE_ESCAPE) {
            e.currentTarget.blur();
          }
          var _b = e.currentTarget, value = _b.value, selectionStart = _b.selectionStart, selectionEnd = _b.selectionEnd;
          var tabCharacter = (insertSpaces ? " " : "	").repeat(tabSize);
          if (e.keyCode === KEYCODE_TAB && !ignoreTabKey && _this.state.capture) {
            e.preventDefault();
            if (e.shiftKey) {
              var linesBeforeCaret = _this._getLines(value, selectionStart);
              var startLine_1 = linesBeforeCaret.length - 1;
              var endLine_1 = _this._getLines(value, selectionEnd).length - 1;
              var nextValue = value.split("\n").map(function(line2, i) {
                if (i >= startLine_1 && i <= endLine_1 && line2.startsWith(tabCharacter)) {
                  return line2.substring(tabCharacter.length);
                }
                return line2;
              }).join("\n");
              if (value !== nextValue) {
                var startLineText = linesBeforeCaret[startLine_1];
                _this._applyEdits({
                  value: nextValue,
                  selectionStart: (startLineText === null || startLineText === void 0 ? void 0 : startLineText.startsWith(tabCharacter)) ? selectionStart - tabCharacter.length : selectionStart,
                  selectionEnd: selectionEnd - (value.length - nextValue.length)
                });
              }
            } else if (selectionStart !== selectionEnd) {
              var linesBeforeCaret = _this._getLines(value, selectionStart);
              var startLine_2 = linesBeforeCaret.length - 1;
              var endLine_2 = _this._getLines(value, selectionEnd).length - 1;
              var startLineText = linesBeforeCaret[startLine_2];
              _this._applyEdits({
                value: value.split("\n").map(function(line2, i) {
                  if (i >= startLine_2 && i <= endLine_2) {
                    return tabCharacter + line2;
                  }
                  return line2;
                }).join("\n"),
                selectionStart: startLineText && /\S/.test(startLineText) ? selectionStart + tabCharacter.length : selectionStart,
                selectionEnd: selectionEnd + tabCharacter.length * (endLine_2 - startLine_2 + 1)
              });
            } else {
              var updatedSelection = selectionStart + tabCharacter.length;
              _this._applyEdits({
                value: value.substring(0, selectionStart) + tabCharacter + value.substring(selectionEnd),
                selectionStart: updatedSelection,
                selectionEnd: updatedSelection
              });
            }
          } else if (e.keyCode === KEYCODE_BACKSPACE) {
            var hasSelection = selectionStart !== selectionEnd;
            var textBeforeCaret = value.substring(0, selectionStart);
            if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
              e.preventDefault();
              var updatedSelection = selectionStart - tabCharacter.length;
              _this._applyEdits({
                value: value.substring(0, selectionStart - tabCharacter.length) + value.substring(selectionEnd),
                selectionStart: updatedSelection,
                selectionEnd: updatedSelection
              });
            }
          } else if (e.keyCode === KEYCODE_ENTER) {
            if (selectionStart === selectionEnd) {
              var line = _this._getLines(value, selectionStart).pop();
              var matches = line === null || line === void 0 ? void 0 : line.match(/^\s+/);
              if (matches === null || matches === void 0 ? void 0 : matches[0]) {
                e.preventDefault();
                var indent3 = "\n" + matches[0];
                var updatedSelection = selectionStart + indent3.length;
                _this._applyEdits({
                  value: value.substring(0, selectionStart) + indent3 + value.substring(selectionEnd),
                  selectionStart: updatedSelection,
                  selectionEnd: updatedSelection
                });
              }
            }
          } else if (e.keyCode === KEYCODE_PARENS || e.keyCode === KEYCODE_BRACKETS || e.keyCode === KEYCODE_QUOTE || e.keyCode === KEYCODE_BACK_QUOTE) {
            var chars2 = void 0;
            if (e.keyCode === KEYCODE_PARENS && e.shiftKey) {
              chars2 = ["(", ")"];
            } else if (e.keyCode === KEYCODE_BRACKETS) {
              if (e.shiftKey) {
                chars2 = ["{", "}"];
              } else {
                chars2 = ["[", "]"];
              }
            } else if (e.keyCode === KEYCODE_QUOTE) {
              if (e.shiftKey) {
                chars2 = ['"', '"'];
              } else {
                chars2 = ["'", "'"];
              }
            } else if (e.keyCode === KEYCODE_BACK_QUOTE && !e.shiftKey) {
              chars2 = ["`", "`"];
            }
            if (selectionStart !== selectionEnd && chars2) {
              e.preventDefault();
              _this._applyEdits({
                value: value.substring(0, selectionStart) + chars2[0] + value.substring(selectionStart, selectionEnd) + chars2[1] + value.substring(selectionEnd),
                selectionStart,
                selectionEnd: selectionEnd + 2
              });
            }
          } else if ((isMacLike ? e.metaKey && e.keyCode === KEYCODE_Z : e.ctrlKey && e.keyCode === KEYCODE_Z) && !e.shiftKey && !e.altKey) {
            e.preventDefault();
            _this._undoEdit();
          } else if ((isMacLike ? e.metaKey && e.keyCode === KEYCODE_Z && e.shiftKey : isWindows ? e.ctrlKey && e.keyCode === KEYCODE_Y : e.ctrlKey && e.keyCode === KEYCODE_Z && e.shiftKey) && !e.altKey) {
            e.preventDefault();
            _this._redoEdit();
          } else if (e.keyCode === KEYCODE_M && e.ctrlKey && (isMacLike ? e.shiftKey : true)) {
            e.preventDefault();
            _this.setState(function(state) {
              return {
                capture: !state.capture
              };
            });
          }
        };
        _this._handleChange = function(e) {
          var _a = e.currentTarget, value = _a.value, selectionStart = _a.selectionStart, selectionEnd = _a.selectionEnd;
          _this._recordChange({
            value,
            selectionStart,
            selectionEnd
          }, true);
          _this.props.onValueChange(value);
        };
        _this._history = {
          stack: [],
          offset: -1
        };
        _this._input = null;
        return _this;
      }
      Editor3.prototype.componentDidMount = function() {
        this._recordCurrentState();
      };
      Object.defineProperty(Editor3.prototype, "session", {
        get: function() {
          return {
            history: this._history
          };
        },
        set: function(session) {
          this._history = session.history;
        },
        enumerable: false,
        configurable: true
      });
      Editor3.prototype.render = function() {
        var _this = this;
        var _a = this.props, value = _a.value, style = _a.style, padding = _a.padding, highlight = _a.highlight, textareaId = _a.textareaId, textareaClassName = _a.textareaClassName, autoFocus = _a.autoFocus, disabled = _a.disabled, form = _a.form, maxLength = _a.maxLength, minLength = _a.minLength, name = _a.name, placeholder = _a.placeholder, readOnly = _a.readOnly, required = _a.required, onClick = _a.onClick, onFocus = _a.onFocus, onBlur = _a.onBlur, onKeyUp = _a.onKeyUp, onKeyDown = _a.onKeyDown, onValueChange = _a.onValueChange, tabSize = _a.tabSize, insertSpaces = _a.insertSpaces, ignoreTabKey = _a.ignoreTabKey, preClassName = _a.preClassName, rest = __rest(_a, ["value", "style", "padding", "highlight", "textareaId", "textareaClassName", "autoFocus", "disabled", "form", "maxLength", "minLength", "name", "placeholder", "readOnly", "required", "onClick", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onValueChange", "tabSize", "insertSpaces", "ignoreTabKey", "preClassName"]);
        var contentStyle = {
          paddingTop: padding,
          paddingRight: padding,
          paddingBottom: padding,
          paddingLeft: padding
        };
        var highlighted = highlight(value);
        return React3.createElement("div", __assign({}, rest, { style: __assign(__assign({}, styles.container), style) }), React3.createElement("textarea", { ref: function(c) {
          return _this._input = c;
        }, style: __assign(__assign(__assign({}, styles.editor), styles.textarea), contentStyle), className: className + (textareaClassName ? " ".concat(textareaClassName) : ""), id: textareaId, value, onChange: this._handleChange, onKeyDown: this._handleKeyDown, onClick, onKeyUp, onFocus, onBlur, disabled, form, maxLength, minLength, name, placeholder, readOnly, required, autoFocus, autoCapitalize: "off", autoComplete: "off", autoCorrect: "off", spellCheck: false, "data-gramm": false }), React3.createElement("pre", __assign({ className: preClassName, "aria-hidden": "true", style: __assign(__assign(__assign({}, styles.editor), styles.highlight), contentStyle) }, typeof highlighted === "string" ? { dangerouslySetInnerHTML: { __html: highlighted + "<br />" } } : { children: highlighted })), React3.createElement("style", { type: "text/css", dangerouslySetInnerHTML: { __html: cssText } }));
      };
      Editor3.defaultProps = {
        tabSize: 2,
        insertSpaces: true,
        ignoreTabKey: false,
        padding: 0
      };
      return Editor3;
    }(React3.Component);
    exports.default = Editor2;
    var styles = {
      container: {
        position: "relative",
        textAlign: "left",
        boxSizing: "border-box",
        padding: 0,
        overflow: "hidden"
      },
      textarea: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        resize: "none",
        color: "inherit",
        overflow: "hidden",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        WebkitTextFillColor: "transparent"
      },
      highlight: {
        position: "relative",
        pointerEvents: "none"
      },
      editor: {
        margin: 0,
        border: 0,
        background: "none",
        boxSizing: "inherit",
        display: "inherit",
        fontFamily: "inherit",
        fontSize: "inherit",
        fontStyle: "inherit",
        fontVariantLigatures: "inherit",
        fontWeight: "inherit",
        letterSpacing: "inherit",
        lineHeight: "inherit",
        tabSize: "inherit",
        textIndent: "inherit",
        textRendering: "inherit",
        textTransform: "inherit",
        whiteSpace: "pre-wrap",
        wordBreak: "keep-all",
        overflowWrap: "break-word"
      }
    };
  }
});

// node_modules/regjsgen/regjsgen.js
var require_regjsgen = __commonJS({
  "node_modules/regjsgen/regjsgen.js"(exports, module) {
    (function() {
      "use strict";
      var objectTypes = {
        "function": true,
        "object": true
      };
      var root = objectTypes[typeof window] && window || this;
      var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
      var hasFreeModule = objectTypes[typeof module] && module && !module.nodeType;
      var freeGlobal = freeExports && hasFreeModule && typeof global == "object" && global;
      if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
        root = freeGlobal;
      }
      var hasOwnProperty2 = Object.prototype.hasOwnProperty;
      function fromCodePoint() {
        var codePoint = Number(arguments[0]);
        if (!isFinite(codePoint) || codePoint < 0 || codePoint > 1114111 || Math.floor(codePoint) != codePoint) {
          throw RangeError("Invalid code point: " + codePoint);
        }
        if (codePoint <= 65535) {
          return String.fromCharCode(codePoint);
        } else {
          codePoint -= 65536;
          var highSurrogate = (codePoint >> 10) + 55296;
          var lowSurrogate = codePoint % 1024 + 56320;
          return String.fromCharCode(highSurrogate, lowSurrogate);
        }
      }
      var assertTypeRegexMap = {};
      function assertType(type, expected) {
        if (expected.indexOf("|") == -1) {
          if (type == expected) {
            return;
          }
          throw Error("Invalid node type: " + type + "; expected type: " + expected);
        }
        expected = hasOwnProperty2.call(assertTypeRegexMap, expected) ? assertTypeRegexMap[expected] : assertTypeRegexMap[expected] = RegExp("^(?:" + expected + ")$");
        if (expected.test(type)) {
          return;
        }
        throw Error("Invalid node type: " + type + "; expected types: " + expected);
      }
      function generate(node) {
        var type = node.type;
        if (hasOwnProperty2.call(generators, type)) {
          return generators[type](node);
        }
        throw Error("Invalid node type: " + type);
      }
      function generateSequence(generator, terms) {
        var i = -1, length3 = terms.length, result = "", term;
        while (++i < length3) {
          term = terms[i];
          if (i + 1 < length3 && terms[i].type == "value" && terms[i].kind == "null" && terms[i + 1].type == "value" && terms[i + 1].kind == "symbol" && terms[i + 1].codePoint >= 48 && terms[i + 1].codePoint <= 57) {
            result += "\\000";
            continue;
          }
          result += generator(term);
        }
        return result;
      }
      function generateAlternative(node) {
        assertType(node.type, "alternative");
        return generateSequence(generateTerm, node.body);
      }
      function generateAnchor(node) {
        assertType(node.type, "anchor");
        switch (node.kind) {
          case "start":
            return "^";
          case "end":
            return "$";
          case "boundary":
            return "\\b";
          case "not-boundary":
            return "\\B";
          default:
            throw Error("Invalid assertion");
        }
      }
      function generateAtom(node) {
        assertType(node.type, "anchor|characterClass|characterClassEscape|dot|group|reference|value");
        return generate(node);
      }
      function generateCharacterClass(node) {
        assertType(node.type, "characterClass");
        return "[" + (node.negative ? "^" : "") + generateSequence(generateClassAtom, node.body) + "]";
      }
      function generateCharacterClassEscape(node) {
        assertType(node.type, "characterClassEscape");
        return "\\" + node.value;
      }
      function generateCharacterClassRange(node) {
        assertType(node.type, "characterClassRange");
        var min = node.min, max = node.max;
        if (min.type == "characterClassRange" || max.type == "characterClassRange") {
          throw Error("Invalid character class range");
        }
        return generateClassAtom(min) + "-" + generateClassAtom(max);
      }
      function generateClassAtom(node) {
        assertType(node.type, "anchor|characterClassEscape|characterClassRange|dot|value");
        return generate(node);
      }
      function generateDisjunction(node) {
        assertType(node.type, "disjunction");
        var body = node.body, i = -1, length3 = body.length, result = "";
        while (++i < length3) {
          if (i != 0) {
            result += "|";
          }
          result += generate(body[i]);
        }
        return result;
      }
      function generateDot(node) {
        assertType(node.type, "dot");
        return ".";
      }
      function generateGroup(node) {
        assertType(node.type, "group");
        var result = "";
        switch (node.behavior) {
          case "normal":
            if (node.name) {
              result += "?<" + generateIdentifier(node.name) + ">";
            }
            break;
          case "ignore":
            result += "?:";
            break;
          case "lookahead":
            result += "?=";
            break;
          case "negativeLookahead":
            result += "?!";
            break;
          case "lookbehind":
            result += "?<=";
            break;
          case "negativeLookbehind":
            result += "?<!";
            break;
          default:
            throw Error("Invalid behaviour: " + node.behaviour);
        }
        result += generateSequence(generate, node.body);
        return "(" + result + ")";
      }
      function generateIdentifier(node) {
        assertType(node.type, "identifier");
        return node.value;
      }
      function generateQuantifier(node) {
        assertType(node.type, "quantifier");
        var quantifier = "", min = node.min, max = node.max;
        if (max == null) {
          if (min == 0) {
            quantifier = "*";
          } else if (min == 1) {
            quantifier = "+";
          } else {
            quantifier = "{" + min + ",}";
          }
        } else if (min == max) {
          quantifier = "{" + min + "}";
        } else if (min == 0 && max == 1) {
          quantifier = "?";
        } else {
          quantifier = "{" + min + "," + max + "}";
        }
        if (!node.greedy) {
          quantifier += "?";
        }
        return generateAtom(node.body[0]) + quantifier;
      }
      function generateReference(node) {
        assertType(node.type, "reference");
        if (node.matchIndex) {
          return "\\" + node.matchIndex;
        }
        if (node.name) {
          return "\\k<" + generateIdentifier(node.name) + ">";
        }
        throw new Error("Unknown reference type");
      }
      function generateTerm(node) {
        assertType(node.type, "anchor|characterClass|characterClassEscape|empty|group|quantifier|reference|unicodePropertyEscape|value|dot");
        return generate(node);
      }
      function generateUnicodePropertyEscape(node) {
        assertType(node.type, "unicodePropertyEscape");
        return "\\" + (node.negative ? "P" : "p") + "{" + node.value + "}";
      }
      function generateValue(node) {
        assertType(node.type, "value");
        var kind = node.kind, codePoint = node.codePoint;
        if (typeof codePoint != "number") {
          throw new Error("Invalid code point: " + codePoint);
        }
        switch (kind) {
          case "controlLetter":
            return "\\c" + fromCodePoint(codePoint + 64);
          case "hexadecimalEscape":
            return "\\x" + ("00" + codePoint.toString(16).toUpperCase()).slice(-2);
          case "identifier":
            return "\\" + fromCodePoint(codePoint);
          case "null":
            return "\\" + codePoint;
          case "octal":
            return "\\" + ("000" + codePoint.toString(8)).slice(-3);
          case "singleEscape":
            switch (codePoint) {
              case 8:
                return "\\b";
              case 9:
                return "\\t";
              case 10:
                return "\\n";
              case 11:
                return "\\v";
              case 12:
                return "\\f";
              case 13:
                return "\\r";
              case 45:
                return "\\-";
              default:
                throw Error("Invalid code point: " + codePoint);
            }
          case "symbol":
            return fromCodePoint(codePoint);
          case "unicodeEscape":
            return "\\u" + ("0000" + codePoint.toString(16).toUpperCase()).slice(-4);
          case "unicodeCodePointEscape":
            return "\\u{" + codePoint.toString(16).toUpperCase() + "}";
          default:
            throw Error("Unsupported node kind: " + kind);
        }
      }
      var generators = {
        "alternative": generateAlternative,
        "anchor": generateAnchor,
        "characterClass": generateCharacterClass,
        "characterClassEscape": generateCharacterClassEscape,
        "characterClassRange": generateCharacterClassRange,
        "disjunction": generateDisjunction,
        "dot": generateDot,
        "group": generateGroup,
        "quantifier": generateQuantifier,
        "reference": generateReference,
        "unicodePropertyEscape": generateUnicodePropertyEscape,
        "value": generateValue
      };
      var regjsgen = {
        "generate": generate
      };
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        define(function() {
          return regjsgen;
        });
        root.regjsgen = regjsgen;
      } else if (freeExports && hasFreeModule) {
        freeExports.generate = generate;
      } else {
        root.regjsgen = regjsgen;
      }
    }).call(exports);
  }
});

// node_modules/regjsparser/parser.js
var require_parser = __commonJS({
  "node_modules/regjsparser/parser.js"(exports, module) {
    (function() {
      var fromCodePoint = String.fromCodePoint || function() {
        var stringFromCharCode = String.fromCharCode;
        var floor = Math.floor;
        return function fromCodePoint2() {
          var MAX_SIZE = 16384;
          var codeUnits = [];
          var highSurrogate;
          var lowSurrogate;
          var index = -1;
          var length3 = arguments.length;
          if (!length3) {
            return "";
          }
          var result = "";
          while (++index < length3) {
            var codePoint = Number(arguments[index]);
            if (!isFinite(codePoint) || codePoint < 0 || codePoint > 1114111 || floor(codePoint) != codePoint) {
              throw RangeError("Invalid code point: " + codePoint);
            }
            if (codePoint <= 65535) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 65536;
              highSurrogate = (codePoint >> 10) + 55296;
              lowSurrogate = codePoint % 1024 + 56320;
              codeUnits.push(highSurrogate, lowSurrogate);
            }
            if (index + 1 == length3 || codeUnits.length > MAX_SIZE) {
              result += stringFromCharCode.apply(null, codeUnits);
              codeUnits.length = 0;
            }
          }
          return result;
        };
      }();
      function parse4(str, flags, features2) {
        if (!features2) {
          features2 = {};
        }
        function addRaw(node) {
          node.raw = str.substring(node.range[0], node.range[1]);
          return node;
        }
        function updateRawStart(node, start) {
          node.range[0] = start;
          return addRaw(node);
        }
        function createAnchor(kind, rawLength) {
          return addRaw({
            type: "anchor",
            kind,
            range: [
              pos - rawLength,
              pos
            ]
          });
        }
        function createValue(kind, codePoint, from2, to) {
          return addRaw({
            type: "value",
            kind,
            codePoint,
            range: [from2, to]
          });
        }
        function createEscaped(kind, codePoint, value, fromOffset) {
          fromOffset = fromOffset || 0;
          return createValue(kind, codePoint, pos - (value.length + fromOffset), pos);
        }
        function createCharacter(matches) {
          var _char = matches[0];
          var first = _char.charCodeAt(0);
          if (hasUnicodeFlag) {
            var second;
            if (_char.length === 1 && first >= 55296 && first <= 56319) {
              second = lookahead2().charCodeAt(0);
              if (second >= 56320 && second <= 57343) {
                pos++;
                return createValue("symbol", (first - 55296) * 1024 + second - 56320 + 65536, pos - 2, pos);
              }
            }
          }
          return createValue("symbol", first, pos - 1, pos);
        }
        function createDisjunction(alternatives, from2, to) {
          return addRaw({
            type: "disjunction",
            body: alternatives,
            range: [
              from2,
              to
            ]
          });
        }
        function createDot() {
          return addRaw({
            type: "dot",
            range: [
              pos - 1,
              pos
            ]
          });
        }
        function createCharacterClassEscape(value) {
          return addRaw({
            type: "characterClassEscape",
            value,
            range: [
              pos - 2,
              pos
            ]
          });
        }
        function createReference(matchIndex) {
          return addRaw({
            type: "reference",
            matchIndex: parseInt(matchIndex, 10),
            range: [
              pos - 1 - matchIndex.length,
              pos
            ]
          });
        }
        function createNamedReference(name) {
          return addRaw({
            type: "reference",
            name,
            range: [
              name.range[0] - 3,
              pos
            ]
          });
        }
        function createGroup(behavior, disjunction, from2, to) {
          return addRaw({
            type: "group",
            behavior,
            body: disjunction,
            range: [
              from2,
              to
            ]
          });
        }
        function createQuantifier(min, max, from2, to) {
          if (to == null) {
            from2 = pos - 1;
            to = pos;
          }
          return addRaw({
            type: "quantifier",
            min,
            max,
            greedy: true,
            body: null,
            range: [
              from2,
              to
            ]
          });
        }
        function createAlternative(terms, from2, to) {
          return addRaw({
            type: "alternative",
            body: terms,
            range: [
              from2,
              to
            ]
          });
        }
        function createCharacterClass(contents, negative, from2, to) {
          return addRaw({
            type: "characterClass",
            kind: contents.kind,
            body: contents.body,
            negative,
            range: [
              from2,
              to
            ]
          });
        }
        function createClassRange(min, max, from2, to) {
          if (min.codePoint > max.codePoint) {
            bail("invalid range in character class", min.raw + "-" + max.raw, from2, to);
          }
          return addRaw({
            type: "characterClassRange",
            min,
            max,
            range: [
              from2,
              to
            ]
          });
        }
        function createClassStrings(strings, from2, to) {
          return addRaw({
            type: "classStrings",
            strings,
            range: [from2, to]
          });
        }
        function createClassString(characters, from2, to) {
          return addRaw({
            type: "classString",
            characters,
            range: [from2, to]
          });
        }
        function flattenBody(body) {
          if (body.type === "alternative") {
            return body.body;
          } else {
            return [body];
          }
        }
        function incr(amount) {
          amount = amount || 1;
          var res2 = str.substring(pos, pos + amount);
          pos += amount || 1;
          return res2;
        }
        function skip(value) {
          if (!match(value)) {
            bail("character", value);
          }
        }
        function match(value) {
          if (str.indexOf(value, pos) === pos) {
            return incr(value.length);
          }
        }
        function lookahead2() {
          return str[pos];
        }
        function current2(value) {
          return str.indexOf(value, pos) === pos;
        }
        function next(value) {
          return str[pos + 1] === value;
        }
        function matchReg(regExp) {
          var subStr = str.substring(pos);
          var res2 = subStr.match(regExp);
          if (res2) {
            res2.range = [];
            res2.range[0] = pos;
            incr(res2[0].length);
            res2.range[1] = pos;
          }
          return res2;
        }
        function parseDisjunction() {
          var res2 = [], from2 = pos;
          res2.push(parseAlternative());
          while (match("|")) {
            res2.push(parseAlternative());
          }
          if (res2.length === 1) {
            return res2[0];
          }
          return createDisjunction(res2, from2, pos);
        }
        function parseAlternative() {
          var res2 = [], from2 = pos;
          var term;
          while (term = parseTerm()) {
            res2.push(term);
          }
          if (res2.length === 1) {
            return res2[0];
          }
          return createAlternative(res2, from2, pos);
        }
        function parseTerm() {
          if (pos >= str.length || current2("|") || current2(")")) {
            return null;
          }
          var anchor = parseAnchor();
          if (anchor) {
            return anchor;
          }
          var atom = parseAtomAndExtendedAtom();
          if (!atom) {
            pos_backup = pos;
            var quantifier = parseQuantifier() || false;
            if (quantifier) {
              pos = pos_backup;
              bail("Expected atom");
            }
            if (!hasUnicodeFlag && (res = matchReg(/^{/))) {
              atom = createCharacter(res);
            } else {
              bail("Expected atom");
            }
          }
          var quantifier = parseQuantifier() || false;
          if (quantifier) {
            quantifier.body = flattenBody(atom);
            updateRawStart(quantifier, atom.range[0]);
            return quantifier;
          }
          return atom;
        }
        function parseGroup(matchA, typeA, matchB, typeB) {
          var type = null, from2 = pos;
          if (match(matchA)) {
            type = typeA;
          } else if (match(matchB)) {
            type = typeB;
          } else {
            return false;
          }
          return finishGroup(type, from2);
        }
        function finishGroup(type, from2) {
          var body = parseDisjunction();
          if (!body) {
            bail("Expected disjunction");
          }
          skip(")");
          var group = createGroup(type, flattenBody(body), from2, pos);
          if (type == "normal") {
            if (firstIteration) {
              closedCaptureCounter++;
            }
          }
          return group;
        }
        function parseAnchor() {
          var res2, from2 = pos;
          if (match("^")) {
            return createAnchor("start", 1);
          } else if (match("$")) {
            return createAnchor("end", 1);
          } else if (match("\\b")) {
            return createAnchor("boundary", 2);
          } else if (match("\\B")) {
            return createAnchor("not-boundary", 2);
          } else {
            return parseGroup("(?=", "lookahead", "(?!", "negativeLookahead");
          }
        }
        function parseQuantifier() {
          var res2, from2 = pos;
          var quantifier;
          var min, max;
          if (match("*")) {
            quantifier = createQuantifier(0);
          } else if (match("+")) {
            quantifier = createQuantifier(1);
          } else if (match("?")) {
            quantifier = createQuantifier(0, 1);
          } else if (res2 = matchReg(/^\{([0-9]+)\}/)) {
            min = parseInt(res2[1], 10);
            quantifier = createQuantifier(min, min, res2.range[0], res2.range[1]);
          } else if (res2 = matchReg(/^\{([0-9]+),\}/)) {
            min = parseInt(res2[1], 10);
            quantifier = createQuantifier(min, void 0, res2.range[0], res2.range[1]);
          } else if (res2 = matchReg(/^\{([0-9]+),([0-9]+)\}/)) {
            min = parseInt(res2[1], 10);
            max = parseInt(res2[2], 10);
            if (min > max) {
              bail("numbers out of order in {} quantifier", "", from2, pos);
            }
            quantifier = createQuantifier(min, max, res2.range[0], res2.range[1]);
          }
          if (quantifier) {
            if (match("?")) {
              quantifier.greedy = false;
              quantifier.range[1] += 1;
            }
          }
          return quantifier;
        }
        function parseAtomAndExtendedAtom() {
          var res2;
          if (res2 = matchReg(/^[^^$\\.*+?()[\]{}|]/)) {
            return createCharacter(res2);
          } else if (!hasUnicodeFlag && (res2 = matchReg(/^(?:]|})/))) {
            return createCharacter(res2);
          } else if (match(".")) {
            return createDot();
          } else if (match("\\")) {
            res2 = parseAtomEscape();
            if (!res2) {
              if (!hasUnicodeFlag && lookahead2() == "c") {
                return createValue("symbol", 92, pos - 1, pos);
              }
              bail("atomEscape");
            }
            return res2;
          } else if (res2 = parseCharacterClass()) {
            return res2;
          } else if (features2.lookbehind && (res2 = parseGroup("(?<=", "lookbehind", "(?<!", "negativeLookbehind"))) {
            return res2;
          } else if (features2.namedGroups && match("(?<")) {
            var name = parseIdentifier();
            skip(">");
            var group = finishGroup("normal", name.range[0] - 3);
            group.name = name;
            return group;
          } else {
            return parseGroup("(?:", "ignore", "(", "normal");
          }
        }
        function parseUnicodeSurrogatePairEscape(firstEscape) {
          if (hasUnicodeFlag) {
            var first, second;
            if (firstEscape.kind == "unicodeEscape" && (first = firstEscape.codePoint) >= 55296 && first <= 56319 && current2("\\") && next("u")) {
              var prevPos = pos;
              pos++;
              var secondEscape = parseClassEscape();
              if (secondEscape.kind == "unicodeEscape" && (second = secondEscape.codePoint) >= 56320 && second <= 57343) {
                firstEscape.range[1] = secondEscape.range[1];
                firstEscape.codePoint = (first - 55296) * 1024 + second - 56320 + 65536;
                firstEscape.type = "value";
                firstEscape.kind = "unicodeCodePointEscape";
                addRaw(firstEscape);
              } else {
                pos = prevPos;
              }
            }
          }
          return firstEscape;
        }
        function parseClassEscape() {
          return parseAtomEscape(true);
        }
        function parseAtomEscape(insideCharacterClass) {
          var res2, from2 = pos;
          res2 = parseDecimalEscape() || parseNamedReference();
          if (res2) {
            return res2;
          }
          if (insideCharacterClass) {
            if (match("b")) {
              return createEscaped("singleEscape", 8, "\\b");
            } else if (match("B")) {
              bail("\\B not possible inside of CharacterClass", "", from2);
            } else if (!hasUnicodeFlag && (res2 = matchReg(/^c([0-9])/))) {
              return createEscaped("controlLetter", res2[1] + 16, res2[1], 2);
            } else if (!hasUnicodeFlag && (res2 = matchReg(/^c_/))) {
              return createEscaped("controlLetter", 31, "_", 2);
            }
            if (hasUnicodeFlag && match("-")) {
              return createEscaped("singleEscape", 45, "\\-");
            }
          }
          res2 = parseCharacterClassEscape() || parseCharacterEscape();
          return res2;
        }
        function parseDecimalEscape() {
          var res2, match2;
          if (res2 = matchReg(/^(?!0)\d+/)) {
            match2 = res2[0];
            var refIdx = parseInt(res2[0], 10);
            if (refIdx <= closedCaptureCounter) {
              return createReference(res2[0]);
            } else {
              backrefDenied.push(refIdx);
              incr(-res2[0].length);
              if (res2 = matchReg(/^[0-7]{1,3}/)) {
                return createEscaped("octal", parseInt(res2[0], 8), res2[0], 1);
              } else {
                res2 = createCharacter(matchReg(/^[89]/));
                return updateRawStart(res2, res2.range[0] - 1);
              }
            }
          } else if (res2 = matchReg(/^[0-7]{1,3}/)) {
            match2 = res2[0];
            if (/^0{1,3}$/.test(match2)) {
              return createEscaped("null", 0, "0", match2.length);
            } else {
              return createEscaped("octal", parseInt(match2, 8), match2, 1);
            }
          }
          return false;
        }
        function parseCharacterClassEscape() {
          var res2;
          if (res2 = matchReg(/^[dDsSwW]/)) {
            return createCharacterClassEscape(res2[0]);
          } else if (features2.unicodePropertyEscape && (hasUnicodeFlag || hasUnicodeSetFlag) && (res2 = matchReg(/^([pP])\{([^\}]+)\}/))) {
            return addRaw({
              type: "unicodePropertyEscape",
              negative: res2[1] === "P",
              value: res2[2],
              range: [res2.range[0] - 1, res2.range[1]],
              raw: res2[0]
            });
          }
          return false;
        }
        function parseNamedReference() {
          if (features2.namedGroups && matchReg(/^k<(?=.*?>)/)) {
            var name = parseIdentifier();
            skip(">");
            return createNamedReference(name);
          }
        }
        function parseRegExpUnicodeEscapeSequence() {
          var res2;
          if (res2 = matchReg(/^u([0-9a-fA-F]{4})/)) {
            return parseUnicodeSurrogatePairEscape(createEscaped("unicodeEscape", parseInt(res2[1], 16), res2[1], 2));
          } else if (hasUnicodeFlag && (res2 = matchReg(/^u\{([0-9a-fA-F]+)\}/))) {
            return createEscaped("unicodeCodePointEscape", parseInt(res2[1], 16), res2[1], 4);
          }
        }
        function parseCharacterEscape() {
          var res2;
          var from2 = pos;
          if (res2 = matchReg(/^[fnrtv]/)) {
            var codePoint = 0;
            switch (res2[0]) {
              case "t":
                codePoint = 9;
                break;
              case "n":
                codePoint = 10;
                break;
              case "v":
                codePoint = 11;
                break;
              case "f":
                codePoint = 12;
                break;
              case "r":
                codePoint = 13;
                break;
            }
            return createEscaped("singleEscape", codePoint, "\\" + res2[0]);
          } else if (res2 = matchReg(/^c([a-zA-Z])/)) {
            return createEscaped("controlLetter", res2[1].charCodeAt(0) % 32, res2[1], 2);
          } else if (res2 = matchReg(/^x([0-9a-fA-F]{2})/)) {
            return createEscaped("hexadecimalEscape", parseInt(res2[1], 16), res2[1], 2);
          } else if (res2 = parseRegExpUnicodeEscapeSequence()) {
            if (!res2 || res2.codePoint > 1114111) {
              bail("Invalid escape sequence", null, from2, pos);
            }
            return res2;
          } else {
            return parseIdentityEscape();
          }
        }
        function parseIdentifierAtom(check) {
          var ch = lookahead2();
          var from2 = pos;
          if (ch === "\\") {
            incr();
            var esc = parseRegExpUnicodeEscapeSequence();
            if (!esc || !check(esc.codePoint)) {
              bail("Invalid escape sequence", null, from2, pos);
            }
            return fromCodePoint(esc.codePoint);
          }
          var code2 = ch.charCodeAt(0);
          if (code2 >= 55296 && code2 <= 56319) {
            ch += str[pos + 1];
            var second = ch.charCodeAt(1);
            if (second >= 56320 && second <= 57343) {
              code2 = (code2 - 55296) * 1024 + second - 56320 + 65536;
            }
          }
          if (!check(code2))
            return;
          incr();
          if (code2 > 65535)
            incr();
          return ch;
        }
        function parseIdentifier() {
          var start = pos;
          var res2 = parseIdentifierAtom(isIdentifierStart2);
          if (!res2) {
            bail("Invalid identifier");
          }
          var ch;
          while (ch = parseIdentifierAtom(isIdentifierPart)) {
            res2 += ch;
          }
          return addRaw({
            type: "identifier",
            value: res2,
            range: [start, pos]
          });
        }
        function isIdentifierStart2(ch) {
          var NonAsciiIdentifierStart = /[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7B9\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFF1]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
          return ch === 36 || ch === 95 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 128 && NonAsciiIdentifierStart.test(fromCodePoint(ch));
        }
        function isIdentifierPart(ch) {
          var NonAsciiIdentifierPartOnly = /[0-9_\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD30-\uDD39\uDF46-\uDF50]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC66-\uDC6F\uDC7F-\uDC82\uDCB0-\uDCBA\uDCF0-\uDCF9\uDD00-\uDD02\uDD27-\uDD34\uDD36-\uDD3F\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDD0-\uDDD9\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC50-\uDC59\uDC5E\uDCB0-\uDCC3\uDCD0-\uDCD9\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDE50-\uDE59\uDEAB-\uDEB7\uDEC0-\uDEC9\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC2C-\uDC3A\uDCE0-\uDCE9\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC50-\uDC59\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD50-\uDD59\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDDA0-\uDDA9\uDEF3-\uDEF6]|\uD81A[\uDE60-\uDE69\uDEF0-\uDEF4\uDF30-\uDF36\uDF50-\uDF59]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A\uDD50-\uDD59]|\uDB40[\uDD00-\uDDEF]/;
          return isIdentifierStart2(ch) || ch >= 48 && ch <= 57 || ch >= 128 && NonAsciiIdentifierPartOnly.test(fromCodePoint(ch));
        }
        function parseIdentityEscape() {
          var tmp;
          var l = lookahead2();
          if (hasUnicodeFlag && /[\^\$\.\*\+\?\(\)\\\[\]\{\}\|\/]/.test(l) || !hasUnicodeFlag && l !== "c") {
            if (l === "k" && features2.lookbehind) {
              return null;
            }
            tmp = incr();
            return createEscaped("identifier", tmp.charCodeAt(0), tmp, 1);
          }
          return null;
        }
        function parseCharacterClass() {
          var res2, from2 = pos;
          if (res2 = matchReg(/^\[\^/)) {
            res2 = parseClassRanges();
            skip("]");
            return createCharacterClass(res2, true, from2, pos);
          } else if (match("[")) {
            res2 = parseClassRanges();
            skip("]");
            return createCharacterClass(res2, false, from2, pos);
          }
          return null;
        }
        function parseClassRanges() {
          var res2;
          if (current2("]")) {
            return { kind: "union", body: [] };
          } else if (hasUnicodeSetFlag) {
            return parseClassContents();
          } else {
            res2 = parseNonemptyClassRanges();
            if (!res2) {
              bail("nonEmptyClassRanges");
            }
            return { kind: "union", body: res2 };
          }
        }
        function parseHelperClassRanges(atom) {
          var from2, to, res2, atomTo, dash;
          if (current2("-") && !next("]")) {
            from2 = atom.range[0];
            dash = createCharacter(match("-"));
            atomTo = parseClassAtom();
            if (!atomTo) {
              bail("classAtom");
            }
            to = pos;
            var classRanges = parseClassRanges();
            if (!classRanges) {
              bail("classRanges");
            }
            if (!("codePoint" in atom) || !("codePoint" in atomTo)) {
              if (!hasUnicodeFlag) {
                res2 = [atom, dash, atomTo];
              } else {
                bail("invalid character class");
              }
            } else {
              res2 = [createClassRange(atom, atomTo, from2, to)];
            }
            if (classRanges.type === "empty") {
              return res2;
            }
            return res2.concat(classRanges.body);
          }
          res2 = parseNonemptyClassRangesNoDash();
          if (!res2) {
            bail("nonEmptyClassRangesNoDash");
          }
          return [atom].concat(res2);
        }
        function parseNonemptyClassRanges() {
          var atom = parseClassAtom();
          if (!atom) {
            bail("classAtom");
          }
          if (current2("]")) {
            return [atom];
          }
          return parseHelperClassRanges(atom);
        }
        function parseNonemptyClassRangesNoDash() {
          var res2 = parseClassAtom();
          if (!res2) {
            bail("classAtom");
          }
          if (current2("]")) {
            return res2;
          }
          return parseHelperClassRanges(res2);
        }
        function parseClassAtom() {
          if (match("-")) {
            return createCharacter("-");
          } else {
            return parseClassAtomNoDash();
          }
        }
        function parseClassAtomNoDash() {
          var res2;
          if (res2 = matchReg(/^[^\\\]-]/)) {
            return createCharacter(res2[0]);
          } else if (match("\\")) {
            res2 = parseClassEscape();
            if (!res2) {
              bail("classEscape");
            }
            return parseUnicodeSurrogatePairEscape(res2);
          }
        }
        function parseClassContents() {
          var body = [];
          var kind;
          var from2 = pos;
          var operand = parseClassOperand(true);
          body.push(operand);
          if (operand.type === "classRange") {
            kind = "union";
          } else if (current2("&")) {
            kind = "intersection";
          } else if (current2("-")) {
            kind = "subtraction";
          } else {
            kind = "union";
          }
          while (!current2("]")) {
            if (kind === "intersection") {
              skip("&");
              skip("&");
              if (current2("&")) {
                bail("&& cannot be followed by &. Wrap it in parentheses: &&(&).");
              }
            } else if (kind === "subtraction") {
              skip("-");
              skip("-");
            }
            operand = parseClassOperand(kind === "union");
            body.push(operand);
          }
          return { kind, body };
        }
        function parseClassOperand(allowRanges) {
          var from2 = pos;
          var start, res2;
          if (match("\\")) {
            if (res2 = parseCharacterClassEscape()) {
              start = res2;
            } else if (res2 = parseClassCharacterEscapedHelper()) {
              return res2;
            } else {
              bail("Invalid escape", "\\" + lookahead2(), from2);
            }
          } else if (res2 = parseClassCharacterUnescapedHelper()) {
            start = res2;
          } else if (res2 = parseClassStrings() || parseCharacterClass()) {
            return res2;
          } else {
            bail("Invalid character", lookahead2());
          }
          if (allowRanges && current2("-") && !next("-")) {
            skip("-");
            if (res2 = parseClassCharacter()) {
              return createClassRange(start, res2, from2, pos);
            }
            bail("Invalid range end", lookahead2());
          }
          return start;
        }
        function parseClassCharacter() {
          if (match("\\")) {
            if (res = parseClassCharacterEscapedHelper()) {
              return res;
            } else {
              bail("Invalid escape", "\\" + lookahead2(), from);
            }
          }
          return parseClassCharacterUnescapedHelper();
        }
        function parseClassCharacterUnescapedHelper() {
          var res2;
          if (res2 = matchReg(/^[^()[\]{}/\-\\|]/)) {
            return createCharacter(res2);
          }
          ;
        }
        function parseClassCharacterEscapedHelper() {
          if (match("b")) {
            return createEscaped("singleEscape", 8, "\\b");
          } else if (match("B")) {
            bail("\\B not possible inside of ClassContents", "", pos - 2);
          } else if (res = matchReg(/^[&\-!#%,:;<=>@_`~]/)) {
            return createEscaped("identifier", res[0].codePointAt(0), res[0]);
          } else if (res = parseCharacterEscape()) {
            return res;
          } else {
            return null;
          }
        }
        function parseClassStrings() {
          var res2 = [];
          var from2 = pos;
          if (!match("(")) {
            return null;
          }
          do {
            res2.push(parseClassString());
          } while (match("|"));
          skip(")");
          return createClassStrings(res2, from2, pos);
        }
        function parseClassString() {
          var res2 = [], from2 = pos;
          var char;
          while (char = parseClassCharacter()) {
            res2.push(char);
          }
          return createClassString(res2, from2, pos);
        }
        function bail(message, details, from2, to) {
          from2 = from2 == null ? pos : from2;
          to = to == null ? from2 : to;
          var contextStart = Math.max(0, from2 - 10);
          var contextEnd = Math.min(to + 10, str.length);
          var context = "    " + str.substring(contextStart, contextEnd);
          var pointer = "    " + new Array(from2 - contextStart + 1).join(" ") + "^";
          throw SyntaxError(message + " at position " + from2 + (details ? ": " + details : "") + "\n" + context + "\n" + pointer);
        }
        var backrefDenied = [];
        var closedCaptureCounter = 0;
        var firstIteration = true;
        var hasUnicodeFlag = (flags || "").indexOf("u") !== -1;
        var hasUnicodeSetFlag = (flags || "").indexOf("v") !== -1;
        var pos = 0;
        if (hasUnicodeSetFlag && !features2.unicodeSet) {
          throw new Error('The "v" flag is only supported when the .unicodeSet option is enabled.');
        }
        if (hasUnicodeFlag && hasUnicodeSetFlag) {
          throw new Error('The "u" and "v" flags are mutually exclusive.');
        }
        str = String(str);
        if (str === "") {
          str = "(?:)";
        }
        var result = parseDisjunction();
        if (result.range[1] !== str.length) {
          bail("Could not parse entire input - got stuck", "", result.range[1]);
        }
        for (var i = 0; i < backrefDenied.length; i++) {
          if (backrefDenied[i] <= closedCaptureCounter) {
            pos = 0;
            firstIteration = false;
            return parseDisjunction();
          }
        }
        return result;
      }
      var regjsparser = {
        parse: parse4
      };
      if (typeof module !== "undefined" && module.exports) {
        module.exports = regjsparser;
      } else {
        window.regjsparser = regjsparser;
      }
    })();
  }
});

// node_modules/regenerate/regenerate.js
var require_regenerate = __commonJS({
  "node_modules/regenerate/regenerate.js"(exports, module) {
    (function(root) {
      var freeExports = typeof exports == "object" && exports;
      var freeModule = typeof module == "object" && module && module.exports == freeExports && module;
      var freeGlobal = typeof global == "object" && global;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
        root = freeGlobal;
      }
      var ERRORS = {
        "rangeOrder": "A range\u2019s `stop` value must be greater than or equal to the `start` value.",
        "codePointRange": "Invalid code point value. Code points range from U+000000 to U+10FFFF."
      };
      var HIGH_SURROGATE_MIN = 55296;
      var HIGH_SURROGATE_MAX = 56319;
      var LOW_SURROGATE_MIN = 56320;
      var LOW_SURROGATE_MAX = 57343;
      var regexNull = /\\x00([^0123456789]|$)/g;
      var object = {};
      var hasOwnProperty2 = object.hasOwnProperty;
      var extend2 = function(destination, source) {
        var key;
        for (key in source) {
          if (hasOwnProperty2.call(source, key)) {
            destination[key] = source[key];
          }
        }
        return destination;
      };
      var forEach = function(array, callback) {
        var index = -1;
        var length3 = array.length;
        while (++index < length3) {
          callback(array[index], index);
        }
      };
      var toString8 = object.toString;
      var isArray2 = function(value) {
        return toString8.call(value) == "[object Array]";
      };
      var isNumber = function(value) {
        return typeof value == "number" || toString8.call(value) == "[object Number]";
      };
      var zeroes = "0000";
      var pad2 = function(number, totalCharacters) {
        var string = String(number);
        return string.length < totalCharacters ? (zeroes + string).slice(-totalCharacters) : string;
      };
      var hex = function(number) {
        return Number(number).toString(16).toUpperCase();
      };
      var slice2 = [].slice;
      var dataFromCodePoints = function(codePoints) {
        var index = -1;
        var length3 = codePoints.length;
        var max = length3 - 1;
        var result = [];
        var isStart = true;
        var tmp;
        var previous = 0;
        while (++index < length3) {
          tmp = codePoints[index];
          if (isStart) {
            result.push(tmp);
            previous = tmp;
            isStart = false;
          } else {
            if (tmp == previous + 1) {
              if (index != max) {
                previous = tmp;
                continue;
              } else {
                isStart = true;
                result.push(tmp + 1);
              }
            } else {
              result.push(previous + 1, tmp);
              previous = tmp;
            }
          }
        }
        if (!isStart) {
          result.push(tmp + 1);
        }
        return result;
      };
      var dataRemove = function(data2, codePoint) {
        var index = 0;
        var start;
        var end;
        var length3 = data2.length;
        while (index < length3) {
          start = data2[index];
          end = data2[index + 1];
          if (codePoint >= start && codePoint < end) {
            if (codePoint == start) {
              if (end == start + 1) {
                data2.splice(index, 2);
                return data2;
              } else {
                data2[index] = codePoint + 1;
                return data2;
              }
            } else if (codePoint == end - 1) {
              data2[index + 1] = codePoint;
              return data2;
            } else {
              data2.splice(index, 2, start, codePoint, codePoint + 1, end);
              return data2;
            }
          }
          index += 2;
        }
        return data2;
      };
      var dataRemoveRange = function(data2, rangeStart, rangeEnd) {
        if (rangeEnd < rangeStart) {
          throw Error(ERRORS.rangeOrder);
        }
        var index = 0;
        var start;
        var end;
        while (index < data2.length) {
          start = data2[index];
          end = data2[index + 1] - 1;
          if (start > rangeEnd) {
            return data2;
          }
          if (rangeStart <= start && rangeEnd >= end) {
            data2.splice(index, 2);
            continue;
          }
          if (rangeStart >= start && rangeEnd < end) {
            if (rangeStart == start) {
              data2[index] = rangeEnd + 1;
              data2[index + 1] = end + 1;
              return data2;
            }
            data2.splice(index, 2, start, rangeStart, rangeEnd + 1, end + 1);
            return data2;
          }
          if (rangeStart >= start && rangeStart <= end) {
            data2[index + 1] = rangeStart;
          } else if (rangeEnd >= start && rangeEnd <= end) {
            data2[index] = rangeEnd + 1;
            return data2;
          }
          index += 2;
        }
        return data2;
      };
      var dataAdd = function(data2, codePoint) {
        var index = 0;
        var start;
        var end;
        var lastIndex = null;
        var length3 = data2.length;
        if (codePoint < 0 || codePoint > 1114111) {
          throw RangeError(ERRORS.codePointRange);
        }
        while (index < length3) {
          start = data2[index];
          end = data2[index + 1];
          if (codePoint >= start && codePoint < end) {
            return data2;
          }
          if (codePoint == start - 1) {
            data2[index] = codePoint;
            return data2;
          }
          if (start > codePoint) {
            data2.splice(lastIndex != null ? lastIndex + 2 : 0, 0, codePoint, codePoint + 1);
            return data2;
          }
          if (codePoint == end) {
            if (codePoint + 1 == data2[index + 2]) {
              data2.splice(index, 4, start, data2[index + 3]);
              return data2;
            }
            data2[index + 1] = codePoint + 1;
            return data2;
          }
          lastIndex = index;
          index += 2;
        }
        data2.push(codePoint, codePoint + 1);
        return data2;
      };
      var dataAddData = function(dataA, dataB) {
        var index = 0;
        var start;
        var end;
        var data2 = dataA.slice();
        var length3 = dataB.length;
        while (index < length3) {
          start = dataB[index];
          end = dataB[index + 1] - 1;
          if (start == end) {
            data2 = dataAdd(data2, start);
          } else {
            data2 = dataAddRange(data2, start, end);
          }
          index += 2;
        }
        return data2;
      };
      var dataRemoveData = function(dataA, dataB) {
        var index = 0;
        var start;
        var end;
        var data2 = dataA.slice();
        var length3 = dataB.length;
        while (index < length3) {
          start = dataB[index];
          end = dataB[index + 1] - 1;
          if (start == end) {
            data2 = dataRemove(data2, start);
          } else {
            data2 = dataRemoveRange(data2, start, end);
          }
          index += 2;
        }
        return data2;
      };
      var dataAddRange = function(data2, rangeStart, rangeEnd) {
        if (rangeEnd < rangeStart) {
          throw Error(ERRORS.rangeOrder);
        }
        if (rangeStart < 0 || rangeStart > 1114111 || rangeEnd < 0 || rangeEnd > 1114111) {
          throw RangeError(ERRORS.codePointRange);
        }
        var index = 0;
        var start;
        var end;
        var added = false;
        var length3 = data2.length;
        while (index < length3) {
          start = data2[index];
          end = data2[index + 1];
          if (added) {
            if (start == rangeEnd + 1) {
              data2.splice(index - 1, 2);
              return data2;
            }
            if (start > rangeEnd) {
              return data2;
            }
            if (start >= rangeStart && start <= rangeEnd) {
              if (end > rangeStart && end - 1 <= rangeEnd) {
                data2.splice(index, 2);
                index -= 2;
              } else {
                data2.splice(index - 1, 2);
                index -= 2;
              }
            }
          } else if (start == rangeEnd + 1 || start == rangeEnd) {
            data2[index] = rangeStart;
            return data2;
          } else if (start > rangeEnd) {
            data2.splice(index, 0, rangeStart, rangeEnd + 1);
            return data2;
          } else if (rangeStart >= start && rangeStart < end && rangeEnd + 1 <= end) {
            return data2;
          } else if (rangeStart >= start && rangeStart < end || end == rangeStart) {
            data2[index + 1] = rangeEnd + 1;
            added = true;
          } else if (rangeStart <= start && rangeEnd + 1 >= end) {
            data2[index] = rangeStart;
            data2[index + 1] = rangeEnd + 1;
            added = true;
          }
          index += 2;
        }
        if (!added) {
          data2.push(rangeStart, rangeEnd + 1);
        }
        return data2;
      };
      var dataContains = function(data2, codePoint) {
        var index = 0;
        var length3 = data2.length;
        var start = data2[index];
        var end = data2[length3 - 1];
        if (length3 >= 2) {
          if (codePoint < start || codePoint > end) {
            return false;
          }
        }
        while (index < length3) {
          start = data2[index];
          end = data2[index + 1];
          if (codePoint >= start && codePoint < end) {
            return true;
          }
          index += 2;
        }
        return false;
      };
      var dataIntersection = function(data2, codePoints) {
        var index = 0;
        var length3 = codePoints.length;
        var codePoint;
        var result = [];
        while (index < length3) {
          codePoint = codePoints[index];
          if (dataContains(data2, codePoint)) {
            result.push(codePoint);
          }
          ++index;
        }
        return dataFromCodePoints(result);
      };
      var dataIsEmpty = function(data2) {
        return !data2.length;
      };
      var dataIsSingleton = function(data2) {
        return data2.length == 2 && data2[0] + 1 == data2[1];
      };
      var dataToArray = function(data2) {
        var index = 0;
        var start;
        var end;
        var result = [];
        var length3 = data2.length;
        while (index < length3) {
          start = data2[index];
          end = data2[index + 1];
          while (start < end) {
            result.push(start);
            ++start;
          }
          index += 2;
        }
        return result;
      };
      var floor = Math.floor;
      var highSurrogate = function(codePoint) {
        return parseInt(floor((codePoint - 65536) / 1024) + HIGH_SURROGATE_MIN, 10);
      };
      var lowSurrogate = function(codePoint) {
        return parseInt((codePoint - 65536) % 1024 + LOW_SURROGATE_MIN, 10);
      };
      var stringFromCharCode = String.fromCharCode;
      var codePointToString2 = function(codePoint) {
        var string;
        if (codePoint == 9) {
          string = "\\t";
        } else if (codePoint == 10) {
          string = "\\n";
        } else if (codePoint == 12) {
          string = "\\f";
        } else if (codePoint == 13) {
          string = "\\r";
        } else if (codePoint == 45) {
          string = "\\x2D";
        } else if (codePoint == 92) {
          string = "\\\\";
        } else if (codePoint == 36 || codePoint >= 40 && codePoint <= 43 || codePoint == 46 || codePoint == 47 || codePoint == 63 || codePoint >= 91 && codePoint <= 94 || codePoint >= 123 && codePoint <= 125) {
          string = "\\" + stringFromCharCode(codePoint);
        } else if (codePoint >= 32 && codePoint <= 126) {
          string = stringFromCharCode(codePoint);
        } else if (codePoint <= 255) {
          string = "\\x" + pad2(hex(codePoint), 2);
        } else {
          string = "\\u" + pad2(hex(codePoint), 4);
        }
        return string;
      };
      var codePointToStringUnicode = function(codePoint) {
        if (codePoint <= 65535) {
          return codePointToString2(codePoint);
        }
        return "\\u{" + codePoint.toString(16).toUpperCase() + "}";
      };
      var symbolToCodePoint = function(symbol) {
        var length3 = symbol.length;
        var first = symbol.charCodeAt(0);
        var second;
        if (first >= HIGH_SURROGATE_MIN && first <= HIGH_SURROGATE_MAX && length3 > 1) {
          second = symbol.charCodeAt(1);
          return (first - HIGH_SURROGATE_MIN) * 1024 + second - LOW_SURROGATE_MIN + 65536;
        }
        return first;
      };
      var createBMPCharacterClasses = function(data2) {
        var result = "";
        var index = 0;
        var start;
        var end;
        var length3 = data2.length;
        if (dataIsSingleton(data2)) {
          return codePointToString2(data2[0]);
        }
        while (index < length3) {
          start = data2[index];
          end = data2[index + 1] - 1;
          if (start == end) {
            result += codePointToString2(start);
          } else if (start + 1 == end) {
            result += codePointToString2(start) + codePointToString2(end);
          } else {
            result += codePointToString2(start) + "-" + codePointToString2(end);
          }
          index += 2;
        }
        return "[" + result + "]";
      };
      var createUnicodeCharacterClasses = function(data2) {
        var result = "";
        var index = 0;
        var start;
        var end;
        var length3 = data2.length;
        if (dataIsSingleton(data2)) {
          return codePointToStringUnicode(data2[0]);
        }
        while (index < length3) {
          start = data2[index];
          end = data2[index + 1] - 1;
          if (start == end) {
            result += codePointToStringUnicode(start);
          } else if (start + 1 == end) {
            result += codePointToStringUnicode(start) + codePointToStringUnicode(end);
          } else {
            result += codePointToStringUnicode(start) + "-" + codePointToStringUnicode(end);
          }
          index += 2;
        }
        return "[" + result + "]";
      };
      var splitAtBMP = function(data2) {
        var loneHighSurrogates = [];
        var loneLowSurrogates = [];
        var bmp = [];
        var astral = [];
        var index = 0;
        var start;
        var end;
        var length3 = data2.length;
        while (index < length3) {
          start = data2[index];
          end = data2[index + 1] - 1;
          if (start < HIGH_SURROGATE_MIN) {
            if (end < HIGH_SURROGATE_MIN) {
              bmp.push(start, end + 1);
            }
            if (end >= HIGH_SURROGATE_MIN && end <= HIGH_SURROGATE_MAX) {
              bmp.push(start, HIGH_SURROGATE_MIN);
              loneHighSurrogates.push(HIGH_SURROGATE_MIN, end + 1);
            }
            if (end >= LOW_SURROGATE_MIN && end <= LOW_SURROGATE_MAX) {
              bmp.push(start, HIGH_SURROGATE_MIN);
              loneHighSurrogates.push(HIGH_SURROGATE_MIN, HIGH_SURROGATE_MAX + 1);
              loneLowSurrogates.push(LOW_SURROGATE_MIN, end + 1);
            }
            if (end > LOW_SURROGATE_MAX) {
              bmp.push(start, HIGH_SURROGATE_MIN);
              loneHighSurrogates.push(HIGH_SURROGATE_MIN, HIGH_SURROGATE_MAX + 1);
              loneLowSurrogates.push(LOW_SURROGATE_MIN, LOW_SURROGATE_MAX + 1);
              if (end <= 65535) {
                bmp.push(LOW_SURROGATE_MAX + 1, end + 1);
              } else {
                bmp.push(LOW_SURROGATE_MAX + 1, 65535 + 1);
                astral.push(65535 + 1, end + 1);
              }
            }
          } else if (start >= HIGH_SURROGATE_MIN && start <= HIGH_SURROGATE_MAX) {
            if (end >= HIGH_SURROGATE_MIN && end <= HIGH_SURROGATE_MAX) {
              loneHighSurrogates.push(start, end + 1);
            }
            if (end >= LOW_SURROGATE_MIN && end <= LOW_SURROGATE_MAX) {
              loneHighSurrogates.push(start, HIGH_SURROGATE_MAX + 1);
              loneLowSurrogates.push(LOW_SURROGATE_MIN, end + 1);
            }
            if (end > LOW_SURROGATE_MAX) {
              loneHighSurrogates.push(start, HIGH_SURROGATE_MAX + 1);
              loneLowSurrogates.push(LOW_SURROGATE_MIN, LOW_SURROGATE_MAX + 1);
              if (end <= 65535) {
                bmp.push(LOW_SURROGATE_MAX + 1, end + 1);
              } else {
                bmp.push(LOW_SURROGATE_MAX + 1, 65535 + 1);
                astral.push(65535 + 1, end + 1);
              }
            }
          } else if (start >= LOW_SURROGATE_MIN && start <= LOW_SURROGATE_MAX) {
            if (end >= LOW_SURROGATE_MIN && end <= LOW_SURROGATE_MAX) {
              loneLowSurrogates.push(start, end + 1);
            }
            if (end > LOW_SURROGATE_MAX) {
              loneLowSurrogates.push(start, LOW_SURROGATE_MAX + 1);
              if (end <= 65535) {
                bmp.push(LOW_SURROGATE_MAX + 1, end + 1);
              } else {
                bmp.push(LOW_SURROGATE_MAX + 1, 65535 + 1);
                astral.push(65535 + 1, end + 1);
              }
            }
          } else if (start > LOW_SURROGATE_MAX && start <= 65535) {
            if (end <= 65535) {
              bmp.push(start, end + 1);
            } else {
              bmp.push(start, 65535 + 1);
              astral.push(65535 + 1, end + 1);
            }
          } else {
            astral.push(start, end + 1);
          }
          index += 2;
        }
        return {
          "loneHighSurrogates": loneHighSurrogates,
          "loneLowSurrogates": loneLowSurrogates,
          "bmp": bmp,
          "astral": astral
        };
      };
      var optimizeSurrogateMappings = function(surrogateMappings) {
        var result = [];
        var tmpLow = [];
        var addLow = false;
        var mapping;
        var nextMapping;
        var highSurrogates;
        var lowSurrogates;
        var nextHighSurrogates;
        var nextLowSurrogates;
        var index = -1;
        var length3 = surrogateMappings.length;
        while (++index < length3) {
          mapping = surrogateMappings[index];
          nextMapping = surrogateMappings[index + 1];
          if (!nextMapping) {
            result.push(mapping);
            continue;
          }
          highSurrogates = mapping[0];
          lowSurrogates = mapping[1];
          nextHighSurrogates = nextMapping[0];
          nextLowSurrogates = nextMapping[1];
          tmpLow = lowSurrogates;
          while (nextHighSurrogates && highSurrogates[0] == nextHighSurrogates[0] && highSurrogates[1] == nextHighSurrogates[1]) {
            if (dataIsSingleton(nextLowSurrogates)) {
              tmpLow = dataAdd(tmpLow, nextLowSurrogates[0]);
            } else {
              tmpLow = dataAddRange(tmpLow, nextLowSurrogates[0], nextLowSurrogates[1] - 1);
            }
            ++index;
            mapping = surrogateMappings[index];
            highSurrogates = mapping[0];
            lowSurrogates = mapping[1];
            nextMapping = surrogateMappings[index + 1];
            nextHighSurrogates = nextMapping && nextMapping[0];
            nextLowSurrogates = nextMapping && nextMapping[1];
            addLow = true;
          }
          result.push([
            highSurrogates,
            addLow ? tmpLow : lowSurrogates
          ]);
          addLow = false;
        }
        return optimizeByLowSurrogates(result);
      };
      var optimizeByLowSurrogates = function(surrogateMappings) {
        if (surrogateMappings.length == 1) {
          return surrogateMappings;
        }
        var index = -1;
        var innerIndex = -1;
        while (++index < surrogateMappings.length) {
          var mapping = surrogateMappings[index];
          var lowSurrogates = mapping[1];
          var lowSurrogateStart = lowSurrogates[0];
          var lowSurrogateEnd = lowSurrogates[1];
          innerIndex = index;
          while (++innerIndex < surrogateMappings.length) {
            var otherMapping = surrogateMappings[innerIndex];
            var otherLowSurrogates = otherMapping[1];
            var otherLowSurrogateStart = otherLowSurrogates[0];
            var otherLowSurrogateEnd = otherLowSurrogates[1];
            if (lowSurrogateStart == otherLowSurrogateStart && lowSurrogateEnd == otherLowSurrogateEnd && otherLowSurrogates.length === 2) {
              if (dataIsSingleton(otherMapping[0])) {
                mapping[0] = dataAdd(mapping[0], otherMapping[0][0]);
              } else {
                mapping[0] = dataAddRange(mapping[0], otherMapping[0][0], otherMapping[0][1] - 1);
              }
              surrogateMappings.splice(innerIndex, 1);
              --innerIndex;
            }
          }
        }
        return surrogateMappings;
      };
      var surrogateSet = function(data2) {
        if (!data2.length) {
          return [];
        }
        var index = 0;
        var start;
        var end;
        var startHigh;
        var startLow;
        var endHigh;
        var endLow;
        var surrogateMappings = [];
        var length3 = data2.length;
        while (index < length3) {
          start = data2[index];
          end = data2[index + 1] - 1;
          startHigh = highSurrogate(start);
          startLow = lowSurrogate(start);
          endHigh = highSurrogate(end);
          endLow = lowSurrogate(end);
          var startsWithLowestLowSurrogate = startLow == LOW_SURROGATE_MIN;
          var endsWithHighestLowSurrogate = endLow == LOW_SURROGATE_MAX;
          var complete = false;
          if (startHigh == endHigh || startsWithLowestLowSurrogate && endsWithHighestLowSurrogate) {
            surrogateMappings.push([
              [startHigh, endHigh + 1],
              [startLow, endLow + 1]
            ]);
            complete = true;
          } else {
            surrogateMappings.push([
              [startHigh, startHigh + 1],
              [startLow, LOW_SURROGATE_MAX + 1]
            ]);
          }
          if (!complete && startHigh + 1 < endHigh) {
            if (endsWithHighestLowSurrogate) {
              surrogateMappings.push([
                [startHigh + 1, endHigh + 1],
                [LOW_SURROGATE_MIN, endLow + 1]
              ]);
              complete = true;
            } else {
              surrogateMappings.push([
                [startHigh + 1, endHigh],
                [LOW_SURROGATE_MIN, LOW_SURROGATE_MAX + 1]
              ]);
            }
          }
          if (!complete) {
            surrogateMappings.push([
              [endHigh, endHigh + 1],
              [LOW_SURROGATE_MIN, endLow + 1]
            ]);
          }
          index += 2;
        }
        return optimizeSurrogateMappings(surrogateMappings);
      };
      var createSurrogateCharacterClasses = function(surrogateMappings) {
        var result = [];
        forEach(surrogateMappings, function(surrogateMapping) {
          var highSurrogates = surrogateMapping[0];
          var lowSurrogates = surrogateMapping[1];
          result.push(createBMPCharacterClasses(highSurrogates) + createBMPCharacterClasses(lowSurrogates));
        });
        return result.join("|");
      };
      var createCharacterClassesFromData = function(data2, bmpOnly, hasUnicodeFlag) {
        if (hasUnicodeFlag) {
          return createUnicodeCharacterClasses(data2);
        }
        var result = [];
        var parts = splitAtBMP(data2);
        var loneHighSurrogates = parts.loneHighSurrogates;
        var loneLowSurrogates = parts.loneLowSurrogates;
        var bmp = parts.bmp;
        var astral = parts.astral;
        var hasLoneHighSurrogates = !dataIsEmpty(loneHighSurrogates);
        var hasLoneLowSurrogates = !dataIsEmpty(loneLowSurrogates);
        var surrogateMappings = surrogateSet(astral);
        if (bmpOnly) {
          bmp = dataAddData(bmp, loneHighSurrogates);
          hasLoneHighSurrogates = false;
          bmp = dataAddData(bmp, loneLowSurrogates);
          hasLoneLowSurrogates = false;
        }
        if (!dataIsEmpty(bmp)) {
          result.push(createBMPCharacterClasses(bmp));
        }
        if (surrogateMappings.length) {
          result.push(createSurrogateCharacterClasses(surrogateMappings));
        }
        if (hasLoneHighSurrogates) {
          result.push(createBMPCharacterClasses(loneHighSurrogates) + "(?![\\uDC00-\\uDFFF])");
        }
        if (hasLoneLowSurrogates) {
          result.push("(?:[^\\uD800-\\uDBFF]|^)" + createBMPCharacterClasses(loneLowSurrogates));
        }
        return result.join("|");
      };
      var regenerate = function(value) {
        if (arguments.length > 1) {
          value = slice2.call(arguments);
        }
        if (this instanceof regenerate) {
          this.data = [];
          return value ? this.add(value) : this;
        }
        return new regenerate().add(value);
      };
      regenerate.version = "1.4.2";
      var proto = regenerate.prototype;
      extend2(proto, {
        "add": function(value) {
          var $this = this;
          if (value == null) {
            return $this;
          }
          if (value instanceof regenerate) {
            $this.data = dataAddData($this.data, value.data);
            return $this;
          }
          if (arguments.length > 1) {
            value = slice2.call(arguments);
          }
          if (isArray2(value)) {
            forEach(value, function(item) {
              $this.add(item);
            });
            return $this;
          }
          $this.data = dataAdd($this.data, isNumber(value) ? value : symbolToCodePoint(value));
          return $this;
        },
        "remove": function(value) {
          var $this = this;
          if (value == null) {
            return $this;
          }
          if (value instanceof regenerate) {
            $this.data = dataRemoveData($this.data, value.data);
            return $this;
          }
          if (arguments.length > 1) {
            value = slice2.call(arguments);
          }
          if (isArray2(value)) {
            forEach(value, function(item) {
              $this.remove(item);
            });
            return $this;
          }
          $this.data = dataRemove($this.data, isNumber(value) ? value : symbolToCodePoint(value));
          return $this;
        },
        "addRange": function(start, end) {
          var $this = this;
          $this.data = dataAddRange($this.data, isNumber(start) ? start : symbolToCodePoint(start), isNumber(end) ? end : symbolToCodePoint(end));
          return $this;
        },
        "removeRange": function(start, end) {
          var $this = this;
          var startCodePoint = isNumber(start) ? start : symbolToCodePoint(start);
          var endCodePoint = isNumber(end) ? end : symbolToCodePoint(end);
          $this.data = dataRemoveRange($this.data, startCodePoint, endCodePoint);
          return $this;
        },
        "intersection": function(argument) {
          var $this = this;
          var array = argument instanceof regenerate ? dataToArray(argument.data) : argument;
          $this.data = dataIntersection($this.data, array);
          return $this;
        },
        "contains": function(codePoint) {
          return dataContains(this.data, isNumber(codePoint) ? codePoint : symbolToCodePoint(codePoint));
        },
        "clone": function() {
          var set = new regenerate();
          set.data = this.data.slice(0);
          return set;
        },
        "toString": function(options) {
          var result = createCharacterClassesFromData(this.data, options ? options.bmpOnly : false, options ? options.hasUnicodeFlag : false);
          if (!result) {
            return "[]";
          }
          return result.replace(regexNull, "\\0$1");
        },
        "toRegExp": function(flags) {
          var pattern = this.toString(flags && flags.indexOf("u") != -1 ? { "hasUnicodeFlag": true } : null);
          return RegExp(pattern, flags || "");
        },
        "valueOf": function() {
          return dataToArray(this.data);
        }
      });
      proto.toArray = proto.valueOf;
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        define(function() {
          return regenerate;
        });
      } else if (freeExports && !freeExports.nodeType) {
        if (freeModule) {
          freeModule.exports = regenerate;
        } else {
          freeExports.regenerate = regenerate;
        }
      } else {
        root.regenerate = regenerate;
      }
    })(exports);
  }
});

// node_modules/unicode-canonical-property-names-ecmascript/index.js
var require_unicode_canonical_property_names_ecmascript = __commonJS({
  "node_modules/unicode-canonical-property-names-ecmascript/index.js"(exports, module) {
    module.exports = new Set([
      "General_Category",
      "Script",
      "Script_Extensions",
      "Alphabetic",
      "Any",
      "ASCII",
      "ASCII_Hex_Digit",
      "Assigned",
      "Bidi_Control",
      "Bidi_Mirrored",
      "Case_Ignorable",
      "Cased",
      "Changes_When_Casefolded",
      "Changes_When_Casemapped",
      "Changes_When_Lowercased",
      "Changes_When_NFKC_Casefolded",
      "Changes_When_Titlecased",
      "Changes_When_Uppercased",
      "Dash",
      "Default_Ignorable_Code_Point",
      "Deprecated",
      "Diacritic",
      "Emoji",
      "Emoji_Component",
      "Emoji_Modifier",
      "Emoji_Modifier_Base",
      "Emoji_Presentation",
      "Extended_Pictographic",
      "Extender",
      "Grapheme_Base",
      "Grapheme_Extend",
      "Hex_Digit",
      "ID_Continue",
      "ID_Start",
      "Ideographic",
      "IDS_Binary_Operator",
      "IDS_Trinary_Operator",
      "Join_Control",
      "Logical_Order_Exception",
      "Lowercase",
      "Math",
      "Noncharacter_Code_Point",
      "Pattern_Syntax",
      "Pattern_White_Space",
      "Quotation_Mark",
      "Radical",
      "Regional_Indicator",
      "Sentence_Terminal",
      "Soft_Dotted",
      "Terminal_Punctuation",
      "Unified_Ideograph",
      "Uppercase",
      "Variation_Selector",
      "White_Space",
      "XID_Continue",
      "XID_Start"
    ]);
  }
});

// node_modules/unicode-property-aliases-ecmascript/index.js
var require_unicode_property_aliases_ecmascript = __commonJS({
  "node_modules/unicode-property-aliases-ecmascript/index.js"(exports, module) {
    module.exports = new Map([
      ["scx", "Script_Extensions"],
      ["sc", "Script"],
      ["gc", "General_Category"],
      ["AHex", "ASCII_Hex_Digit"],
      ["Alpha", "Alphabetic"],
      ["Bidi_C", "Bidi_Control"],
      ["Bidi_M", "Bidi_Mirrored"],
      ["Cased", "Cased"],
      ["CI", "Case_Ignorable"],
      ["CWCF", "Changes_When_Casefolded"],
      ["CWCM", "Changes_When_Casemapped"],
      ["CWKCF", "Changes_When_NFKC_Casefolded"],
      ["CWL", "Changes_When_Lowercased"],
      ["CWT", "Changes_When_Titlecased"],
      ["CWU", "Changes_When_Uppercased"],
      ["Dash", "Dash"],
      ["Dep", "Deprecated"],
      ["DI", "Default_Ignorable_Code_Point"],
      ["Dia", "Diacritic"],
      ["EBase", "Emoji_Modifier_Base"],
      ["EComp", "Emoji_Component"],
      ["EMod", "Emoji_Modifier"],
      ["Emoji", "Emoji"],
      ["EPres", "Emoji_Presentation"],
      ["Ext", "Extender"],
      ["ExtPict", "Extended_Pictographic"],
      ["Gr_Base", "Grapheme_Base"],
      ["Gr_Ext", "Grapheme_Extend"],
      ["Hex", "Hex_Digit"],
      ["IDC", "ID_Continue"],
      ["Ideo", "Ideographic"],
      ["IDS", "ID_Start"],
      ["IDSB", "IDS_Binary_Operator"],
      ["IDST", "IDS_Trinary_Operator"],
      ["Join_C", "Join_Control"],
      ["LOE", "Logical_Order_Exception"],
      ["Lower", "Lowercase"],
      ["Math", "Math"],
      ["NChar", "Noncharacter_Code_Point"],
      ["Pat_Syn", "Pattern_Syntax"],
      ["Pat_WS", "Pattern_White_Space"],
      ["QMark", "Quotation_Mark"],
      ["Radical", "Radical"],
      ["RI", "Regional_Indicator"],
      ["SD", "Soft_Dotted"],
      ["STerm", "Sentence_Terminal"],
      ["Term", "Terminal_Punctuation"],
      ["UIdeo", "Unified_Ideograph"],
      ["Upper", "Uppercase"],
      ["VS", "Variation_Selector"],
      ["WSpace", "White_Space"],
      ["space", "White_Space"],
      ["XIDC", "XID_Continue"],
      ["XIDS", "XID_Start"]
    ]);
  }
});

// node_modules/unicode-match-property-ecmascript/index.js
var require_unicode_match_property_ecmascript = __commonJS({
  "node_modules/unicode-match-property-ecmascript/index.js"(exports, module) {
    "use strict";
    var canonicalProperties = require_unicode_canonical_property_names_ecmascript();
    var propertyAliases = require_unicode_property_aliases_ecmascript();
    var matchProperty = function(property) {
      if (canonicalProperties.has(property)) {
        return property;
      }
      if (propertyAliases.has(property)) {
        return propertyAliases.get(property);
      }
      throw new Error(`Unknown property: ${property}`);
    };
    module.exports = matchProperty;
  }
});

// node_modules/unicode-match-property-value-ecmascript/data/mappings.js
var require_mappings = __commonJS({
  "node_modules/unicode-match-property-value-ecmascript/data/mappings.js"(exports, module) {
    module.exports = new Map([
      ["General_Category", new Map([
        ["C", "Other"],
        ["Cc", "Control"],
        ["cntrl", "Control"],
        ["Cf", "Format"],
        ["Cn", "Unassigned"],
        ["Co", "Private_Use"],
        ["Cs", "Surrogate"],
        ["L", "Letter"],
        ["LC", "Cased_Letter"],
        ["Ll", "Lowercase_Letter"],
        ["Lm", "Modifier_Letter"],
        ["Lo", "Other_Letter"],
        ["Lt", "Titlecase_Letter"],
        ["Lu", "Uppercase_Letter"],
        ["M", "Mark"],
        ["Combining_Mark", "Mark"],
        ["Mc", "Spacing_Mark"],
        ["Me", "Enclosing_Mark"],
        ["Mn", "Nonspacing_Mark"],
        ["N", "Number"],
        ["Nd", "Decimal_Number"],
        ["digit", "Decimal_Number"],
        ["Nl", "Letter_Number"],
        ["No", "Other_Number"],
        ["P", "Punctuation"],
        ["punct", "Punctuation"],
        ["Pc", "Connector_Punctuation"],
        ["Pd", "Dash_Punctuation"],
        ["Pe", "Close_Punctuation"],
        ["Pf", "Final_Punctuation"],
        ["Pi", "Initial_Punctuation"],
        ["Po", "Other_Punctuation"],
        ["Ps", "Open_Punctuation"],
        ["S", "Symbol"],
        ["Sc", "Currency_Symbol"],
        ["Sk", "Modifier_Symbol"],
        ["Sm", "Math_Symbol"],
        ["So", "Other_Symbol"],
        ["Z", "Separator"],
        ["Zl", "Line_Separator"],
        ["Zp", "Paragraph_Separator"],
        ["Zs", "Space_Separator"],
        ["Other", "Other"],
        ["Control", "Control"],
        ["Format", "Format"],
        ["Unassigned", "Unassigned"],
        ["Private_Use", "Private_Use"],
        ["Surrogate", "Surrogate"],
        ["Letter", "Letter"],
        ["Cased_Letter", "Cased_Letter"],
        ["Lowercase_Letter", "Lowercase_Letter"],
        ["Modifier_Letter", "Modifier_Letter"],
        ["Other_Letter", "Other_Letter"],
        ["Titlecase_Letter", "Titlecase_Letter"],
        ["Uppercase_Letter", "Uppercase_Letter"],
        ["Mark", "Mark"],
        ["Spacing_Mark", "Spacing_Mark"],
        ["Enclosing_Mark", "Enclosing_Mark"],
        ["Nonspacing_Mark", "Nonspacing_Mark"],
        ["Number", "Number"],
        ["Decimal_Number", "Decimal_Number"],
        ["Letter_Number", "Letter_Number"],
        ["Other_Number", "Other_Number"],
        ["Punctuation", "Punctuation"],
        ["Connector_Punctuation", "Connector_Punctuation"],
        ["Dash_Punctuation", "Dash_Punctuation"],
        ["Close_Punctuation", "Close_Punctuation"],
        ["Final_Punctuation", "Final_Punctuation"],
        ["Initial_Punctuation", "Initial_Punctuation"],
        ["Other_Punctuation", "Other_Punctuation"],
        ["Open_Punctuation", "Open_Punctuation"],
        ["Symbol", "Symbol"],
        ["Currency_Symbol", "Currency_Symbol"],
        ["Modifier_Symbol", "Modifier_Symbol"],
        ["Math_Symbol", "Math_Symbol"],
        ["Other_Symbol", "Other_Symbol"],
        ["Separator", "Separator"],
        ["Line_Separator", "Line_Separator"],
        ["Paragraph_Separator", "Paragraph_Separator"],
        ["Space_Separator", "Space_Separator"]
      ])],
      ["Script", new Map([
        ["Adlm", "Adlam"],
        ["Aghb", "Caucasian_Albanian"],
        ["Ahom", "Ahom"],
        ["Arab", "Arabic"],
        ["Armi", "Imperial_Aramaic"],
        ["Armn", "Armenian"],
        ["Avst", "Avestan"],
        ["Bali", "Balinese"],
        ["Bamu", "Bamum"],
        ["Bass", "Bassa_Vah"],
        ["Batk", "Batak"],
        ["Beng", "Bengali"],
        ["Bhks", "Bhaiksuki"],
        ["Bopo", "Bopomofo"],
        ["Brah", "Brahmi"],
        ["Brai", "Braille"],
        ["Bugi", "Buginese"],
        ["Buhd", "Buhid"],
        ["Cakm", "Chakma"],
        ["Cans", "Canadian_Aboriginal"],
        ["Cari", "Carian"],
        ["Cham", "Cham"],
        ["Cher", "Cherokee"],
        ["Chrs", "Chorasmian"],
        ["Copt", "Coptic"],
        ["Qaac", "Coptic"],
        ["Cpmn", "Cypro_Minoan"],
        ["Cprt", "Cypriot"],
        ["Cyrl", "Cyrillic"],
        ["Deva", "Devanagari"],
        ["Diak", "Dives_Akuru"],
        ["Dogr", "Dogra"],
        ["Dsrt", "Deseret"],
        ["Dupl", "Duployan"],
        ["Egyp", "Egyptian_Hieroglyphs"],
        ["Elba", "Elbasan"],
        ["Elym", "Elymaic"],
        ["Ethi", "Ethiopic"],
        ["Geor", "Georgian"],
        ["Glag", "Glagolitic"],
        ["Gong", "Gunjala_Gondi"],
        ["Gonm", "Masaram_Gondi"],
        ["Goth", "Gothic"],
        ["Gran", "Grantha"],
        ["Grek", "Greek"],
        ["Gujr", "Gujarati"],
        ["Guru", "Gurmukhi"],
        ["Hang", "Hangul"],
        ["Hani", "Han"],
        ["Hano", "Hanunoo"],
        ["Hatr", "Hatran"],
        ["Hebr", "Hebrew"],
        ["Hira", "Hiragana"],
        ["Hluw", "Anatolian_Hieroglyphs"],
        ["Hmng", "Pahawh_Hmong"],
        ["Hmnp", "Nyiakeng_Puachue_Hmong"],
        ["Hrkt", "Katakana_Or_Hiragana"],
        ["Hung", "Old_Hungarian"],
        ["Ital", "Old_Italic"],
        ["Java", "Javanese"],
        ["Kali", "Kayah_Li"],
        ["Kana", "Katakana"],
        ["Khar", "Kharoshthi"],
        ["Khmr", "Khmer"],
        ["Khoj", "Khojki"],
        ["Kits", "Khitan_Small_Script"],
        ["Knda", "Kannada"],
        ["Kthi", "Kaithi"],
        ["Lana", "Tai_Tham"],
        ["Laoo", "Lao"],
        ["Latn", "Latin"],
        ["Lepc", "Lepcha"],
        ["Limb", "Limbu"],
        ["Lina", "Linear_A"],
        ["Linb", "Linear_B"],
        ["Lisu", "Lisu"],
        ["Lyci", "Lycian"],
        ["Lydi", "Lydian"],
        ["Mahj", "Mahajani"],
        ["Maka", "Makasar"],
        ["Mand", "Mandaic"],
        ["Mani", "Manichaean"],
        ["Marc", "Marchen"],
        ["Medf", "Medefaidrin"],
        ["Mend", "Mende_Kikakui"],
        ["Merc", "Meroitic_Cursive"],
        ["Mero", "Meroitic_Hieroglyphs"],
        ["Mlym", "Malayalam"],
        ["Modi", "Modi"],
        ["Mong", "Mongolian"],
        ["Mroo", "Mro"],
        ["Mtei", "Meetei_Mayek"],
        ["Mult", "Multani"],
        ["Mymr", "Myanmar"],
        ["Nand", "Nandinagari"],
        ["Narb", "Old_North_Arabian"],
        ["Nbat", "Nabataean"],
        ["Newa", "Newa"],
        ["Nkoo", "Nko"],
        ["Nshu", "Nushu"],
        ["Ogam", "Ogham"],
        ["Olck", "Ol_Chiki"],
        ["Orkh", "Old_Turkic"],
        ["Orya", "Oriya"],
        ["Osge", "Osage"],
        ["Osma", "Osmanya"],
        ["Ougr", "Old_Uyghur"],
        ["Palm", "Palmyrene"],
        ["Pauc", "Pau_Cin_Hau"],
        ["Perm", "Old_Permic"],
        ["Phag", "Phags_Pa"],
        ["Phli", "Inscriptional_Pahlavi"],
        ["Phlp", "Psalter_Pahlavi"],
        ["Phnx", "Phoenician"],
        ["Plrd", "Miao"],
        ["Prti", "Inscriptional_Parthian"],
        ["Rjng", "Rejang"],
        ["Rohg", "Hanifi_Rohingya"],
        ["Runr", "Runic"],
        ["Samr", "Samaritan"],
        ["Sarb", "Old_South_Arabian"],
        ["Saur", "Saurashtra"],
        ["Sgnw", "SignWriting"],
        ["Shaw", "Shavian"],
        ["Shrd", "Sharada"],
        ["Sidd", "Siddham"],
        ["Sind", "Khudawadi"],
        ["Sinh", "Sinhala"],
        ["Sogd", "Sogdian"],
        ["Sogo", "Old_Sogdian"],
        ["Sora", "Sora_Sompeng"],
        ["Soyo", "Soyombo"],
        ["Sund", "Sundanese"],
        ["Sylo", "Syloti_Nagri"],
        ["Syrc", "Syriac"],
        ["Tagb", "Tagbanwa"],
        ["Takr", "Takri"],
        ["Tale", "Tai_Le"],
        ["Talu", "New_Tai_Lue"],
        ["Taml", "Tamil"],
        ["Tang", "Tangut"],
        ["Tavt", "Tai_Viet"],
        ["Telu", "Telugu"],
        ["Tfng", "Tifinagh"],
        ["Tglg", "Tagalog"],
        ["Thaa", "Thaana"],
        ["Thai", "Thai"],
        ["Tibt", "Tibetan"],
        ["Tirh", "Tirhuta"],
        ["Tnsa", "Tangsa"],
        ["Toto", "Toto"],
        ["Ugar", "Ugaritic"],
        ["Vaii", "Vai"],
        ["Vith", "Vithkuqi"],
        ["Wara", "Warang_Citi"],
        ["Wcho", "Wancho"],
        ["Xpeo", "Old_Persian"],
        ["Xsux", "Cuneiform"],
        ["Yezi", "Yezidi"],
        ["Yiii", "Yi"],
        ["Zanb", "Zanabazar_Square"],
        ["Zinh", "Inherited"],
        ["Qaai", "Inherited"],
        ["Zyyy", "Common"],
        ["Zzzz", "Unknown"],
        ["Adlam", "Adlam"],
        ["Caucasian_Albanian", "Caucasian_Albanian"],
        ["Arabic", "Arabic"],
        ["Imperial_Aramaic", "Imperial_Aramaic"],
        ["Armenian", "Armenian"],
        ["Avestan", "Avestan"],
        ["Balinese", "Balinese"],
        ["Bamum", "Bamum"],
        ["Bassa_Vah", "Bassa_Vah"],
        ["Batak", "Batak"],
        ["Bengali", "Bengali"],
        ["Bhaiksuki", "Bhaiksuki"],
        ["Bopomofo", "Bopomofo"],
        ["Brahmi", "Brahmi"],
        ["Braille", "Braille"],
        ["Buginese", "Buginese"],
        ["Buhid", "Buhid"],
        ["Chakma", "Chakma"],
        ["Canadian_Aboriginal", "Canadian_Aboriginal"],
        ["Carian", "Carian"],
        ["Cherokee", "Cherokee"],
        ["Chorasmian", "Chorasmian"],
        ["Coptic", "Coptic"],
        ["Cypro_Minoan", "Cypro_Minoan"],
        ["Cypriot", "Cypriot"],
        ["Cyrillic", "Cyrillic"],
        ["Devanagari", "Devanagari"],
        ["Dives_Akuru", "Dives_Akuru"],
        ["Dogra", "Dogra"],
        ["Deseret", "Deseret"],
        ["Duployan", "Duployan"],
        ["Egyptian_Hieroglyphs", "Egyptian_Hieroglyphs"],
        ["Elbasan", "Elbasan"],
        ["Elymaic", "Elymaic"],
        ["Ethiopic", "Ethiopic"],
        ["Georgian", "Georgian"],
        ["Glagolitic", "Glagolitic"],
        ["Gunjala_Gondi", "Gunjala_Gondi"],
        ["Masaram_Gondi", "Masaram_Gondi"],
        ["Gothic", "Gothic"],
        ["Grantha", "Grantha"],
        ["Greek", "Greek"],
        ["Gujarati", "Gujarati"],
        ["Gurmukhi", "Gurmukhi"],
        ["Hangul", "Hangul"],
        ["Han", "Han"],
        ["Hanunoo", "Hanunoo"],
        ["Hatran", "Hatran"],
        ["Hebrew", "Hebrew"],
        ["Hiragana", "Hiragana"],
        ["Anatolian_Hieroglyphs", "Anatolian_Hieroglyphs"],
        ["Pahawh_Hmong", "Pahawh_Hmong"],
        ["Nyiakeng_Puachue_Hmong", "Nyiakeng_Puachue_Hmong"],
        ["Katakana_Or_Hiragana", "Katakana_Or_Hiragana"],
        ["Old_Hungarian", "Old_Hungarian"],
        ["Old_Italic", "Old_Italic"],
        ["Javanese", "Javanese"],
        ["Kayah_Li", "Kayah_Li"],
        ["Katakana", "Katakana"],
        ["Kharoshthi", "Kharoshthi"],
        ["Khmer", "Khmer"],
        ["Khojki", "Khojki"],
        ["Khitan_Small_Script", "Khitan_Small_Script"],
        ["Kannada", "Kannada"],
        ["Kaithi", "Kaithi"],
        ["Tai_Tham", "Tai_Tham"],
        ["Lao", "Lao"],
        ["Latin", "Latin"],
        ["Lepcha", "Lepcha"],
        ["Limbu", "Limbu"],
        ["Linear_A", "Linear_A"],
        ["Linear_B", "Linear_B"],
        ["Lycian", "Lycian"],
        ["Lydian", "Lydian"],
        ["Mahajani", "Mahajani"],
        ["Makasar", "Makasar"],
        ["Mandaic", "Mandaic"],
        ["Manichaean", "Manichaean"],
        ["Marchen", "Marchen"],
        ["Medefaidrin", "Medefaidrin"],
        ["Mende_Kikakui", "Mende_Kikakui"],
        ["Meroitic_Cursive", "Meroitic_Cursive"],
        ["Meroitic_Hieroglyphs", "Meroitic_Hieroglyphs"],
        ["Malayalam", "Malayalam"],
        ["Mongolian", "Mongolian"],
        ["Mro", "Mro"],
        ["Meetei_Mayek", "Meetei_Mayek"],
        ["Multani", "Multani"],
        ["Myanmar", "Myanmar"],
        ["Nandinagari", "Nandinagari"],
        ["Old_North_Arabian", "Old_North_Arabian"],
        ["Nabataean", "Nabataean"],
        ["Nko", "Nko"],
        ["Nushu", "Nushu"],
        ["Ogham", "Ogham"],
        ["Ol_Chiki", "Ol_Chiki"],
        ["Old_Turkic", "Old_Turkic"],
        ["Oriya", "Oriya"],
        ["Osage", "Osage"],
        ["Osmanya", "Osmanya"],
        ["Old_Uyghur", "Old_Uyghur"],
        ["Palmyrene", "Palmyrene"],
        ["Pau_Cin_Hau", "Pau_Cin_Hau"],
        ["Old_Permic", "Old_Permic"],
        ["Phags_Pa", "Phags_Pa"],
        ["Inscriptional_Pahlavi", "Inscriptional_Pahlavi"],
        ["Psalter_Pahlavi", "Psalter_Pahlavi"],
        ["Phoenician", "Phoenician"],
        ["Miao", "Miao"],
        ["Inscriptional_Parthian", "Inscriptional_Parthian"],
        ["Rejang", "Rejang"],
        ["Hanifi_Rohingya", "Hanifi_Rohingya"],
        ["Runic", "Runic"],
        ["Samaritan", "Samaritan"],
        ["Old_South_Arabian", "Old_South_Arabian"],
        ["Saurashtra", "Saurashtra"],
        ["SignWriting", "SignWriting"],
        ["Shavian", "Shavian"],
        ["Sharada", "Sharada"],
        ["Siddham", "Siddham"],
        ["Khudawadi", "Khudawadi"],
        ["Sinhala", "Sinhala"],
        ["Sogdian", "Sogdian"],
        ["Old_Sogdian", "Old_Sogdian"],
        ["Sora_Sompeng", "Sora_Sompeng"],
        ["Soyombo", "Soyombo"],
        ["Sundanese", "Sundanese"],
        ["Syloti_Nagri", "Syloti_Nagri"],
        ["Syriac", "Syriac"],
        ["Tagbanwa", "Tagbanwa"],
        ["Takri", "Takri"],
        ["Tai_Le", "Tai_Le"],
        ["New_Tai_Lue", "New_Tai_Lue"],
        ["Tamil", "Tamil"],
        ["Tangut", "Tangut"],
        ["Tai_Viet", "Tai_Viet"],
        ["Telugu", "Telugu"],
        ["Tifinagh", "Tifinagh"],
        ["Tagalog", "Tagalog"],
        ["Thaana", "Thaana"],
        ["Tibetan", "Tibetan"],
        ["Tirhuta", "Tirhuta"],
        ["Tangsa", "Tangsa"],
        ["Ugaritic", "Ugaritic"],
        ["Vai", "Vai"],
        ["Vithkuqi", "Vithkuqi"],
        ["Warang_Citi", "Warang_Citi"],
        ["Wancho", "Wancho"],
        ["Old_Persian", "Old_Persian"],
        ["Cuneiform", "Cuneiform"],
        ["Yezidi", "Yezidi"],
        ["Yi", "Yi"],
        ["Zanabazar_Square", "Zanabazar_Square"],
        ["Inherited", "Inherited"],
        ["Common", "Common"],
        ["Unknown", "Unknown"]
      ])],
      ["Script_Extensions", new Map([
        ["Adlm", "Adlam"],
        ["Aghb", "Caucasian_Albanian"],
        ["Ahom", "Ahom"],
        ["Arab", "Arabic"],
        ["Armi", "Imperial_Aramaic"],
        ["Armn", "Armenian"],
        ["Avst", "Avestan"],
        ["Bali", "Balinese"],
        ["Bamu", "Bamum"],
        ["Bass", "Bassa_Vah"],
        ["Batk", "Batak"],
        ["Beng", "Bengali"],
        ["Bhks", "Bhaiksuki"],
        ["Bopo", "Bopomofo"],
        ["Brah", "Brahmi"],
        ["Brai", "Braille"],
        ["Bugi", "Buginese"],
        ["Buhd", "Buhid"],
        ["Cakm", "Chakma"],
        ["Cans", "Canadian_Aboriginal"],
        ["Cari", "Carian"],
        ["Cham", "Cham"],
        ["Cher", "Cherokee"],
        ["Chrs", "Chorasmian"],
        ["Copt", "Coptic"],
        ["Qaac", "Coptic"],
        ["Cpmn", "Cypro_Minoan"],
        ["Cprt", "Cypriot"],
        ["Cyrl", "Cyrillic"],
        ["Deva", "Devanagari"],
        ["Diak", "Dives_Akuru"],
        ["Dogr", "Dogra"],
        ["Dsrt", "Deseret"],
        ["Dupl", "Duployan"],
        ["Egyp", "Egyptian_Hieroglyphs"],
        ["Elba", "Elbasan"],
        ["Elym", "Elymaic"],
        ["Ethi", "Ethiopic"],
        ["Geor", "Georgian"],
        ["Glag", "Glagolitic"],
        ["Gong", "Gunjala_Gondi"],
        ["Gonm", "Masaram_Gondi"],
        ["Goth", "Gothic"],
        ["Gran", "Grantha"],
        ["Grek", "Greek"],
        ["Gujr", "Gujarati"],
        ["Guru", "Gurmukhi"],
        ["Hang", "Hangul"],
        ["Hani", "Han"],
        ["Hano", "Hanunoo"],
        ["Hatr", "Hatran"],
        ["Hebr", "Hebrew"],
        ["Hira", "Hiragana"],
        ["Hluw", "Anatolian_Hieroglyphs"],
        ["Hmng", "Pahawh_Hmong"],
        ["Hmnp", "Nyiakeng_Puachue_Hmong"],
        ["Hrkt", "Katakana_Or_Hiragana"],
        ["Hung", "Old_Hungarian"],
        ["Ital", "Old_Italic"],
        ["Java", "Javanese"],
        ["Kali", "Kayah_Li"],
        ["Kana", "Katakana"],
        ["Khar", "Kharoshthi"],
        ["Khmr", "Khmer"],
        ["Khoj", "Khojki"],
        ["Kits", "Khitan_Small_Script"],
        ["Knda", "Kannada"],
        ["Kthi", "Kaithi"],
        ["Lana", "Tai_Tham"],
        ["Laoo", "Lao"],
        ["Latn", "Latin"],
        ["Lepc", "Lepcha"],
        ["Limb", "Limbu"],
        ["Lina", "Linear_A"],
        ["Linb", "Linear_B"],
        ["Lisu", "Lisu"],
        ["Lyci", "Lycian"],
        ["Lydi", "Lydian"],
        ["Mahj", "Mahajani"],
        ["Maka", "Makasar"],
        ["Mand", "Mandaic"],
        ["Mani", "Manichaean"],
        ["Marc", "Marchen"],
        ["Medf", "Medefaidrin"],
        ["Mend", "Mende_Kikakui"],
        ["Merc", "Meroitic_Cursive"],
        ["Mero", "Meroitic_Hieroglyphs"],
        ["Mlym", "Malayalam"],
        ["Modi", "Modi"],
        ["Mong", "Mongolian"],
        ["Mroo", "Mro"],
        ["Mtei", "Meetei_Mayek"],
        ["Mult", "Multani"],
        ["Mymr", "Myanmar"],
        ["Nand", "Nandinagari"],
        ["Narb", "Old_North_Arabian"],
        ["Nbat", "Nabataean"],
        ["Newa", "Newa"],
        ["Nkoo", "Nko"],
        ["Nshu", "Nushu"],
        ["Ogam", "Ogham"],
        ["Olck", "Ol_Chiki"],
        ["Orkh", "Old_Turkic"],
        ["Orya", "Oriya"],
        ["Osge", "Osage"],
        ["Osma", "Osmanya"],
        ["Ougr", "Old_Uyghur"],
        ["Palm", "Palmyrene"],
        ["Pauc", "Pau_Cin_Hau"],
        ["Perm", "Old_Permic"],
        ["Phag", "Phags_Pa"],
        ["Phli", "Inscriptional_Pahlavi"],
        ["Phlp", "Psalter_Pahlavi"],
        ["Phnx", "Phoenician"],
        ["Plrd", "Miao"],
        ["Prti", "Inscriptional_Parthian"],
        ["Rjng", "Rejang"],
        ["Rohg", "Hanifi_Rohingya"],
        ["Runr", "Runic"],
        ["Samr", "Samaritan"],
        ["Sarb", "Old_South_Arabian"],
        ["Saur", "Saurashtra"],
        ["Sgnw", "SignWriting"],
        ["Shaw", "Shavian"],
        ["Shrd", "Sharada"],
        ["Sidd", "Siddham"],
        ["Sind", "Khudawadi"],
        ["Sinh", "Sinhala"],
        ["Sogd", "Sogdian"],
        ["Sogo", "Old_Sogdian"],
        ["Sora", "Sora_Sompeng"],
        ["Soyo", "Soyombo"],
        ["Sund", "Sundanese"],
        ["Sylo", "Syloti_Nagri"],
        ["Syrc", "Syriac"],
        ["Tagb", "Tagbanwa"],
        ["Takr", "Takri"],
        ["Tale", "Tai_Le"],
        ["Talu", "New_Tai_Lue"],
        ["Taml", "Tamil"],
        ["Tang", "Tangut"],
        ["Tavt", "Tai_Viet"],
        ["Telu", "Telugu"],
        ["Tfng", "Tifinagh"],
        ["Tglg", "Tagalog"],
        ["Thaa", "Thaana"],
        ["Thai", "Thai"],
        ["Tibt", "Tibetan"],
        ["Tirh", "Tirhuta"],
        ["Tnsa", "Tangsa"],
        ["Toto", "Toto"],
        ["Ugar", "Ugaritic"],
        ["Vaii", "Vai"],
        ["Vith", "Vithkuqi"],
        ["Wara", "Warang_Citi"],
        ["Wcho", "Wancho"],
        ["Xpeo", "Old_Persian"],
        ["Xsux", "Cuneiform"],
        ["Yezi", "Yezidi"],
        ["Yiii", "Yi"],
        ["Zanb", "Zanabazar_Square"],
        ["Zinh", "Inherited"],
        ["Qaai", "Inherited"],
        ["Zyyy", "Common"],
        ["Zzzz", "Unknown"],
        ["Adlam", "Adlam"],
        ["Caucasian_Albanian", "Caucasian_Albanian"],
        ["Arabic", "Arabic"],
        ["Imperial_Aramaic", "Imperial_Aramaic"],
        ["Armenian", "Armenian"],
        ["Avestan", "Avestan"],
        ["Balinese", "Balinese"],
        ["Bamum", "Bamum"],
        ["Bassa_Vah", "Bassa_Vah"],
        ["Batak", "Batak"],
        ["Bengali", "Bengali"],
        ["Bhaiksuki", "Bhaiksuki"],
        ["Bopomofo", "Bopomofo"],
        ["Brahmi", "Brahmi"],
        ["Braille", "Braille"],
        ["Buginese", "Buginese"],
        ["Buhid", "Buhid"],
        ["Chakma", "Chakma"],
        ["Canadian_Aboriginal", "Canadian_Aboriginal"],
        ["Carian", "Carian"],
        ["Cherokee", "Cherokee"],
        ["Chorasmian", "Chorasmian"],
        ["Coptic", "Coptic"],
        ["Cypro_Minoan", "Cypro_Minoan"],
        ["Cypriot", "Cypriot"],
        ["Cyrillic", "Cyrillic"],
        ["Devanagari", "Devanagari"],
        ["Dives_Akuru", "Dives_Akuru"],
        ["Dogra", "Dogra"],
        ["Deseret", "Deseret"],
        ["Duployan", "Duployan"],
        ["Egyptian_Hieroglyphs", "Egyptian_Hieroglyphs"],
        ["Elbasan", "Elbasan"],
        ["Elymaic", "Elymaic"],
        ["Ethiopic", "Ethiopic"],
        ["Georgian", "Georgian"],
        ["Glagolitic", "Glagolitic"],
        ["Gunjala_Gondi", "Gunjala_Gondi"],
        ["Masaram_Gondi", "Masaram_Gondi"],
        ["Gothic", "Gothic"],
        ["Grantha", "Grantha"],
        ["Greek", "Greek"],
        ["Gujarati", "Gujarati"],
        ["Gurmukhi", "Gurmukhi"],
        ["Hangul", "Hangul"],
        ["Han", "Han"],
        ["Hanunoo", "Hanunoo"],
        ["Hatran", "Hatran"],
        ["Hebrew", "Hebrew"],
        ["Hiragana", "Hiragana"],
        ["Anatolian_Hieroglyphs", "Anatolian_Hieroglyphs"],
        ["Pahawh_Hmong", "Pahawh_Hmong"],
        ["Nyiakeng_Puachue_Hmong", "Nyiakeng_Puachue_Hmong"],
        ["Katakana_Or_Hiragana", "Katakana_Or_Hiragana"],
        ["Old_Hungarian", "Old_Hungarian"],
        ["Old_Italic", "Old_Italic"],
        ["Javanese", "Javanese"],
        ["Kayah_Li", "Kayah_Li"],
        ["Katakana", "Katakana"],
        ["Kharoshthi", "Kharoshthi"],
        ["Khmer", "Khmer"],
        ["Khojki", "Khojki"],
        ["Khitan_Small_Script", "Khitan_Small_Script"],
        ["Kannada", "Kannada"],
        ["Kaithi", "Kaithi"],
        ["Tai_Tham", "Tai_Tham"],
        ["Lao", "Lao"],
        ["Latin", "Latin"],
        ["Lepcha", "Lepcha"],
        ["Limbu", "Limbu"],
        ["Linear_A", "Linear_A"],
        ["Linear_B", "Linear_B"],
        ["Lycian", "Lycian"],
        ["Lydian", "Lydian"],
        ["Mahajani", "Mahajani"],
        ["Makasar", "Makasar"],
        ["Mandaic", "Mandaic"],
        ["Manichaean", "Manichaean"],
        ["Marchen", "Marchen"],
        ["Medefaidrin", "Medefaidrin"],
        ["Mende_Kikakui", "Mende_Kikakui"],
        ["Meroitic_Cursive", "Meroitic_Cursive"],
        ["Meroitic_Hieroglyphs", "Meroitic_Hieroglyphs"],
        ["Malayalam", "Malayalam"],
        ["Mongolian", "Mongolian"],
        ["Mro", "Mro"],
        ["Meetei_Mayek", "Meetei_Mayek"],
        ["Multani", "Multani"],
        ["Myanmar", "Myanmar"],
        ["Nandinagari", "Nandinagari"],
        ["Old_North_Arabian", "Old_North_Arabian"],
        ["Nabataean", "Nabataean"],
        ["Nko", "Nko"],
        ["Nushu", "Nushu"],
        ["Ogham", "Ogham"],
        ["Ol_Chiki", "Ol_Chiki"],
        ["Old_Turkic", "Old_Turkic"],
        ["Oriya", "Oriya"],
        ["Osage", "Osage"],
        ["Osmanya", "Osmanya"],
        ["Old_Uyghur", "Old_Uyghur"],
        ["Palmyrene", "Palmyrene"],
        ["Pau_Cin_Hau", "Pau_Cin_Hau"],
        ["Old_Permic", "Old_Permic"],
        ["Phags_Pa", "Phags_Pa"],
        ["Inscriptional_Pahlavi", "Inscriptional_Pahlavi"],
        ["Psalter_Pahlavi", "Psalter_Pahlavi"],
        ["Phoenician", "Phoenician"],
        ["Miao", "Miao"],
        ["Inscriptional_Parthian", "Inscriptional_Parthian"],
        ["Rejang", "Rejang"],
        ["Hanifi_Rohingya", "Hanifi_Rohingya"],
        ["Runic", "Runic"],
        ["Samaritan", "Samaritan"],
        ["Old_South_Arabian", "Old_South_Arabian"],
        ["Saurashtra", "Saurashtra"],
        ["SignWriting", "SignWriting"],
        ["Shavian", "Shavian"],
        ["Sharada", "Sharada"],
        ["Siddham", "Siddham"],
        ["Khudawadi", "Khudawadi"],
        ["Sinhala", "Sinhala"],
        ["Sogdian", "Sogdian"],
        ["Old_Sogdian", "Old_Sogdian"],
        ["Sora_Sompeng", "Sora_Sompeng"],
        ["Soyombo", "Soyombo"],
        ["Sundanese", "Sundanese"],
        ["Syloti_Nagri", "Syloti_Nagri"],
        ["Syriac", "Syriac"],
        ["Tagbanwa", "Tagbanwa"],
        ["Takri", "Takri"],
        ["Tai_Le", "Tai_Le"],
        ["New_Tai_Lue", "New_Tai_Lue"],
        ["Tamil", "Tamil"],
        ["Tangut", "Tangut"],
        ["Tai_Viet", "Tai_Viet"],
        ["Telugu", "Telugu"],
        ["Tifinagh", "Tifinagh"],
        ["Tagalog", "Tagalog"],
        ["Thaana", "Thaana"],
        ["Tibetan", "Tibetan"],
        ["Tirhuta", "Tirhuta"],
        ["Tangsa", "Tangsa"],
        ["Ugaritic", "Ugaritic"],
        ["Vai", "Vai"],
        ["Vithkuqi", "Vithkuqi"],
        ["Warang_Citi", "Warang_Citi"],
        ["Wancho", "Wancho"],
        ["Old_Persian", "Old_Persian"],
        ["Cuneiform", "Cuneiform"],
        ["Yezidi", "Yezidi"],
        ["Yi", "Yi"],
        ["Zanabazar_Square", "Zanabazar_Square"],
        ["Inherited", "Inherited"],
        ["Common", "Common"],
        ["Unknown", "Unknown"]
      ])]
    ]);
  }
});

// node_modules/unicode-match-property-value-ecmascript/index.js
var require_unicode_match_property_value_ecmascript = __commonJS({
  "node_modules/unicode-match-property-value-ecmascript/index.js"(exports, module) {
    "use strict";
    var propertyToValueAliases = require_mappings();
    var matchPropertyValue = function(property, value) {
      const aliasToValue = propertyToValueAliases.get(property);
      if (!aliasToValue) {
        throw new Error(`Unknown property \`${property}\`.`);
      }
      const canonicalValue = aliasToValue.get(value);
      if (canonicalValue) {
        return canonicalValue;
      }
      throw new Error(`Unknown value \`${value}\` for property \`${property}\`.`);
    };
    module.exports = matchPropertyValue;
  }
});

// node_modules/regexpu-core/data/iu-mappings.js
var require_iu_mappings = __commonJS({
  "node_modules/regexpu-core/data/iu-mappings.js"(exports, module) {
    module.exports = new Map([
      [75, 8490],
      [83, 383],
      [107, 8490],
      [115, 383],
      [181, 924],
      [197, 8491],
      [223, 7838],
      [229, 8491],
      [383, 83],
      [452, 453],
      [453, 452],
      [455, 456],
      [456, 455],
      [458, 459],
      [459, 458],
      [497, 498],
      [498, 497],
      [837, 8126],
      [914, 976],
      [917, 1013],
      [920, 1012],
      [921, 8126],
      [922, 1008],
      [924, 181],
      [928, 982],
      [929, 1009],
      [931, 962],
      [934, 981],
      [937, 8486],
      [952, 1012],
      [962, 931],
      [969, 8486],
      [976, 914],
      [977, 1012],
      [981, 934],
      [982, 928],
      [1008, 922],
      [1009, 929],
      [1012, [
        920,
        977,
        952
      ]],
      [1013, 917],
      [1042, 7296],
      [1044, 7297],
      [1054, 7298],
      [1057, 7299],
      [1058, 7301],
      [1066, 7302],
      [1122, 7303],
      [7296, 1042],
      [7297, 1044],
      [7298, 1054],
      [7299, 1057],
      [7300, 7301],
      [7301, [
        1058,
        7300
      ]],
      [7302, 1066],
      [7303, 1122],
      [7304, 42570],
      [7776, 7835],
      [7835, 7776],
      [7838, 223],
      [8064, 8072],
      [8065, 8073],
      [8066, 8074],
      [8067, 8075],
      [8068, 8076],
      [8069, 8077],
      [8070, 8078],
      [8071, 8079],
      [8072, 8064],
      [8073, 8065],
      [8074, 8066],
      [8075, 8067],
      [8076, 8068],
      [8077, 8069],
      [8078, 8070],
      [8079, 8071],
      [8080, 8088],
      [8081, 8089],
      [8082, 8090],
      [8083, 8091],
      [8084, 8092],
      [8085, 8093],
      [8086, 8094],
      [8087, 8095],
      [8088, 8080],
      [8089, 8081],
      [8090, 8082],
      [8091, 8083],
      [8092, 8084],
      [8093, 8085],
      [8094, 8086],
      [8095, 8087],
      [8096, 8104],
      [8097, 8105],
      [8098, 8106],
      [8099, 8107],
      [8100, 8108],
      [8101, 8109],
      [8102, 8110],
      [8103, 8111],
      [8104, 8096],
      [8105, 8097],
      [8106, 8098],
      [8107, 8099],
      [8108, 8100],
      [8109, 8101],
      [8110, 8102],
      [8111, 8103],
      [8115, 8124],
      [8124, 8115],
      [8126, [
        837,
        921
      ]],
      [8131, 8140],
      [8140, 8131],
      [8179, 8188],
      [8188, 8179],
      [8486, [
        937,
        969
      ]],
      [8490, 75],
      [8491, [
        197,
        229
      ]],
      [11311, 11359],
      [11359, 11311],
      [42570, 7304],
      [42944, 42945],
      [42945, 42944],
      [42960, 42961],
      [42961, 42960],
      [42966, 42967],
      [42967, 42966],
      [42968, 42969],
      [42969, 42968],
      [66560, 66600],
      [66561, 66601],
      [66562, 66602],
      [66563, 66603],
      [66564, 66604],
      [66565, 66605],
      [66566, 66606],
      [66567, 66607],
      [66568, 66608],
      [66569, 66609],
      [66570, 66610],
      [66571, 66611],
      [66572, 66612],
      [66573, 66613],
      [66574, 66614],
      [66575, 66615],
      [66576, 66616],
      [66577, 66617],
      [66578, 66618],
      [66579, 66619],
      [66580, 66620],
      [66581, 66621],
      [66582, 66622],
      [66583, 66623],
      [66584, 66624],
      [66585, 66625],
      [66586, 66626],
      [66587, 66627],
      [66588, 66628],
      [66589, 66629],
      [66590, 66630],
      [66591, 66631],
      [66592, 66632],
      [66593, 66633],
      [66594, 66634],
      [66595, 66635],
      [66596, 66636],
      [66597, 66637],
      [66598, 66638],
      [66599, 66639],
      [66600, 66560],
      [66601, 66561],
      [66602, 66562],
      [66603, 66563],
      [66604, 66564],
      [66605, 66565],
      [66606, 66566],
      [66607, 66567],
      [66608, 66568],
      [66609, 66569],
      [66610, 66570],
      [66611, 66571],
      [66612, 66572],
      [66613, 66573],
      [66614, 66574],
      [66615, 66575],
      [66616, 66576],
      [66617, 66577],
      [66618, 66578],
      [66619, 66579],
      [66620, 66580],
      [66621, 66581],
      [66622, 66582],
      [66623, 66583],
      [66624, 66584],
      [66625, 66585],
      [66626, 66586],
      [66627, 66587],
      [66628, 66588],
      [66629, 66589],
      [66630, 66590],
      [66631, 66591],
      [66632, 66592],
      [66633, 66593],
      [66634, 66594],
      [66635, 66595],
      [66636, 66596],
      [66637, 66597],
      [66638, 66598],
      [66639, 66599],
      [66736, 66776],
      [66737, 66777],
      [66738, 66778],
      [66739, 66779],
      [66740, 66780],
      [66741, 66781],
      [66742, 66782],
      [66743, 66783],
      [66744, 66784],
      [66745, 66785],
      [66746, 66786],
      [66747, 66787],
      [66748, 66788],
      [66749, 66789],
      [66750, 66790],
      [66751, 66791],
      [66752, 66792],
      [66753, 66793],
      [66754, 66794],
      [66755, 66795],
      [66756, 66796],
      [66757, 66797],
      [66758, 66798],
      [66759, 66799],
      [66760, 66800],
      [66761, 66801],
      [66762, 66802],
      [66763, 66803],
      [66764, 66804],
      [66765, 66805],
      [66766, 66806],
      [66767, 66807],
      [66768, 66808],
      [66769, 66809],
      [66770, 66810],
      [66771, 66811],
      [66776, 66736],
      [66777, 66737],
      [66778, 66738],
      [66779, 66739],
      [66780, 66740],
      [66781, 66741],
      [66782, 66742],
      [66783, 66743],
      [66784, 66744],
      [66785, 66745],
      [66786, 66746],
      [66787, 66747],
      [66788, 66748],
      [66789, 66749],
      [66790, 66750],
      [66791, 66751],
      [66792, 66752],
      [66793, 66753],
      [66794, 66754],
      [66795, 66755],
      [66796, 66756],
      [66797, 66757],
      [66798, 66758],
      [66799, 66759],
      [66800, 66760],
      [66801, 66761],
      [66802, 66762],
      [66803, 66763],
      [66804, 66764],
      [66805, 66765],
      [66806, 66766],
      [66807, 66767],
      [66808, 66768],
      [66809, 66769],
      [66810, 66770],
      [66811, 66771],
      [66928, 66967],
      [66929, 66968],
      [66930, 66969],
      [66931, 66970],
      [66932, 66971],
      [66933, 66972],
      [66934, 66973],
      [66935, 66974],
      [66936, 66975],
      [66937, 66976],
      [66938, 66977],
      [66940, 66979],
      [66941, 66980],
      [66942, 66981],
      [66943, 66982],
      [66944, 66983],
      [66945, 66984],
      [66946, 66985],
      [66947, 66986],
      [66948, 66987],
      [66949, 66988],
      [66950, 66989],
      [66951, 66990],
      [66952, 66991],
      [66953, 66992],
      [66954, 66993],
      [66956, 66995],
      [66957, 66996],
      [66958, 66997],
      [66959, 66998],
      [66960, 66999],
      [66961, 67e3],
      [66962, 67001],
      [66964, 67003],
      [66965, 67004],
      [66967, 66928],
      [66968, 66929],
      [66969, 66930],
      [66970, 66931],
      [66971, 66932],
      [66972, 66933],
      [66973, 66934],
      [66974, 66935],
      [66975, 66936],
      [66976, 66937],
      [66977, 66938],
      [66979, 66940],
      [66980, 66941],
      [66981, 66942],
      [66982, 66943],
      [66983, 66944],
      [66984, 66945],
      [66985, 66946],
      [66986, 66947],
      [66987, 66948],
      [66988, 66949],
      [66989, 66950],
      [66990, 66951],
      [66991, 66952],
      [66992, 66953],
      [66993, 66954],
      [66995, 66956],
      [66996, 66957],
      [66997, 66958],
      [66998, 66959],
      [66999, 66960],
      [67e3, 66961],
      [67001, 66962],
      [67003, 66964],
      [67004, 66965],
      [68736, 68800],
      [68737, 68801],
      [68738, 68802],
      [68739, 68803],
      [68740, 68804],
      [68741, 68805],
      [68742, 68806],
      [68743, 68807],
      [68744, 68808],
      [68745, 68809],
      [68746, 68810],
      [68747, 68811],
      [68748, 68812],
      [68749, 68813],
      [68750, 68814],
      [68751, 68815],
      [68752, 68816],
      [68753, 68817],
      [68754, 68818],
      [68755, 68819],
      [68756, 68820],
      [68757, 68821],
      [68758, 68822],
      [68759, 68823],
      [68760, 68824],
      [68761, 68825],
      [68762, 68826],
      [68763, 68827],
      [68764, 68828],
      [68765, 68829],
      [68766, 68830],
      [68767, 68831],
      [68768, 68832],
      [68769, 68833],
      [68770, 68834],
      [68771, 68835],
      [68772, 68836],
      [68773, 68837],
      [68774, 68838],
      [68775, 68839],
      [68776, 68840],
      [68777, 68841],
      [68778, 68842],
      [68779, 68843],
      [68780, 68844],
      [68781, 68845],
      [68782, 68846],
      [68783, 68847],
      [68784, 68848],
      [68785, 68849],
      [68786, 68850],
      [68800, 68736],
      [68801, 68737],
      [68802, 68738],
      [68803, 68739],
      [68804, 68740],
      [68805, 68741],
      [68806, 68742],
      [68807, 68743],
      [68808, 68744],
      [68809, 68745],
      [68810, 68746],
      [68811, 68747],
      [68812, 68748],
      [68813, 68749],
      [68814, 68750],
      [68815, 68751],
      [68816, 68752],
      [68817, 68753],
      [68818, 68754],
      [68819, 68755],
      [68820, 68756],
      [68821, 68757],
      [68822, 68758],
      [68823, 68759],
      [68824, 68760],
      [68825, 68761],
      [68826, 68762],
      [68827, 68763],
      [68828, 68764],
      [68829, 68765],
      [68830, 68766],
      [68831, 68767],
      [68832, 68768],
      [68833, 68769],
      [68834, 68770],
      [68835, 68771],
      [68836, 68772],
      [68837, 68773],
      [68838, 68774],
      [68839, 68775],
      [68840, 68776],
      [68841, 68777],
      [68842, 68778],
      [68843, 68779],
      [68844, 68780],
      [68845, 68781],
      [68846, 68782],
      [68847, 68783],
      [68848, 68784],
      [68849, 68785],
      [68850, 68786],
      [71840, 71872],
      [71841, 71873],
      [71842, 71874],
      [71843, 71875],
      [71844, 71876],
      [71845, 71877],
      [71846, 71878],
      [71847, 71879],
      [71848, 71880],
      [71849, 71881],
      [71850, 71882],
      [71851, 71883],
      [71852, 71884],
      [71853, 71885],
      [71854, 71886],
      [71855, 71887],
      [71856, 71888],
      [71857, 71889],
      [71858, 71890],
      [71859, 71891],
      [71860, 71892],
      [71861, 71893],
      [71862, 71894],
      [71863, 71895],
      [71864, 71896],
      [71865, 71897],
      [71866, 71898],
      [71867, 71899],
      [71868, 71900],
      [71869, 71901],
      [71870, 71902],
      [71871, 71903],
      [71872, 71840],
      [71873, 71841],
      [71874, 71842],
      [71875, 71843],
      [71876, 71844],
      [71877, 71845],
      [71878, 71846],
      [71879, 71847],
      [71880, 71848],
      [71881, 71849],
      [71882, 71850],
      [71883, 71851],
      [71884, 71852],
      [71885, 71853],
      [71886, 71854],
      [71887, 71855],
      [71888, 71856],
      [71889, 71857],
      [71890, 71858],
      [71891, 71859],
      [71892, 71860],
      [71893, 71861],
      [71894, 71862],
      [71895, 71863],
      [71896, 71864],
      [71897, 71865],
      [71898, 71866],
      [71899, 71867],
      [71900, 71868],
      [71901, 71869],
      [71902, 71870],
      [71903, 71871],
      [93760, 93792],
      [93761, 93793],
      [93762, 93794],
      [93763, 93795],
      [93764, 93796],
      [93765, 93797],
      [93766, 93798],
      [93767, 93799],
      [93768, 93800],
      [93769, 93801],
      [93770, 93802],
      [93771, 93803],
      [93772, 93804],
      [93773, 93805],
      [93774, 93806],
      [93775, 93807],
      [93776, 93808],
      [93777, 93809],
      [93778, 93810],
      [93779, 93811],
      [93780, 93812],
      [93781, 93813],
      [93782, 93814],
      [93783, 93815],
      [93784, 93816],
      [93785, 93817],
      [93786, 93818],
      [93787, 93819],
      [93788, 93820],
      [93789, 93821],
      [93790, 93822],
      [93791, 93823],
      [93792, 93760],
      [93793, 93761],
      [93794, 93762],
      [93795, 93763],
      [93796, 93764],
      [93797, 93765],
      [93798, 93766],
      [93799, 93767],
      [93800, 93768],
      [93801, 93769],
      [93802, 93770],
      [93803, 93771],
      [93804, 93772],
      [93805, 93773],
      [93806, 93774],
      [93807, 93775],
      [93808, 93776],
      [93809, 93777],
      [93810, 93778],
      [93811, 93779],
      [93812, 93780],
      [93813, 93781],
      [93814, 93782],
      [93815, 93783],
      [93816, 93784],
      [93817, 93785],
      [93818, 93786],
      [93819, 93787],
      [93820, 93788],
      [93821, 93789],
      [93822, 93790],
      [93823, 93791],
      [125184, 125218],
      [125185, 125219],
      [125186, 125220],
      [125187, 125221],
      [125188, 125222],
      [125189, 125223],
      [125190, 125224],
      [125191, 125225],
      [125192, 125226],
      [125193, 125227],
      [125194, 125228],
      [125195, 125229],
      [125196, 125230],
      [125197, 125231],
      [125198, 125232],
      [125199, 125233],
      [125200, 125234],
      [125201, 125235],
      [125202, 125236],
      [125203, 125237],
      [125204, 125238],
      [125205, 125239],
      [125206, 125240],
      [125207, 125241],
      [125208, 125242],
      [125209, 125243],
      [125210, 125244],
      [125211, 125245],
      [125212, 125246],
      [125213, 125247],
      [125214, 125248],
      [125215, 125249],
      [125216, 125250],
      [125217, 125251],
      [125218, 125184],
      [125219, 125185],
      [125220, 125186],
      [125221, 125187],
      [125222, 125188],
      [125223, 125189],
      [125224, 125190],
      [125225, 125191],
      [125226, 125192],
      [125227, 125193],
      [125228, 125194],
      [125229, 125195],
      [125230, 125196],
      [125231, 125197],
      [125232, 125198],
      [125233, 125199],
      [125234, 125200],
      [125235, 125201],
      [125236, 125202],
      [125237, 125203],
      [125238, 125204],
      [125239, 125205],
      [125240, 125206],
      [125241, 125207],
      [125242, 125208],
      [125243, 125209],
      [125244, 125210],
      [125245, 125211],
      [125246, 125212],
      [125247, 125213],
      [125248, 125214],
      [125249, 125215],
      [125250, 125216],
      [125251, 125217]
    ]);
  }
});

// node_modules/regexpu-core/data/character-class-escape-sets.js
var require_character_class_escape_sets = __commonJS({
  "node_modules/regexpu-core/data/character-class-escape-sets.js"(exports) {
    "use strict";
    var regenerate = require_regenerate();
    exports.REGULAR = new Map([
      ["d", regenerate().addRange(48, 57)],
      ["D", regenerate().addRange(0, 47).addRange(58, 65535)],
      ["s", regenerate(32, 160, 5760, 8239, 8287, 12288, 65279).addRange(9, 13).addRange(8192, 8202).addRange(8232, 8233)],
      ["S", regenerate().addRange(0, 8).addRange(14, 31).addRange(33, 159).addRange(161, 5759).addRange(5761, 8191).addRange(8203, 8231).addRange(8234, 8238).addRange(8240, 8286).addRange(8288, 12287).addRange(12289, 65278).addRange(65280, 65535)],
      ["w", regenerate(95).addRange(48, 57).addRange(65, 90).addRange(97, 122)],
      ["W", regenerate(96).addRange(0, 47).addRange(58, 64).addRange(91, 94).addRange(123, 65535)]
    ]);
    exports.UNICODE = new Map([
      ["d", regenerate().addRange(48, 57)],
      ["D", regenerate().addRange(0, 47).addRange(58, 1114111)],
      ["s", regenerate(32, 160, 5760, 8239, 8287, 12288, 65279).addRange(9, 13).addRange(8192, 8202).addRange(8232, 8233)],
      ["S", regenerate().addRange(0, 8).addRange(14, 31).addRange(33, 159).addRange(161, 5759).addRange(5761, 8191).addRange(8203, 8231).addRange(8234, 8238).addRange(8240, 8286).addRange(8288, 12287).addRange(12289, 65278).addRange(65280, 1114111)],
      ["w", regenerate(95).addRange(48, 57).addRange(65, 90).addRange(97, 122)],
      ["W", regenerate(96).addRange(0, 47).addRange(58, 64).addRange(91, 94).addRange(123, 1114111)]
    ]);
    exports.UNICODE_IGNORE_CASE = new Map([
      ["d", regenerate().addRange(48, 57)],
      ["D", regenerate().addRange(0, 47).addRange(58, 1114111)],
      ["s", regenerate(32, 160, 5760, 8239, 8287, 12288, 65279).addRange(9, 13).addRange(8192, 8202).addRange(8232, 8233)],
      ["S", regenerate().addRange(0, 8).addRange(14, 31).addRange(33, 159).addRange(161, 5759).addRange(5761, 8191).addRange(8203, 8231).addRange(8234, 8238).addRange(8240, 8286).addRange(8288, 12287).addRange(12289, 65278).addRange(65280, 1114111)],
      ["w", regenerate(95, 383, 8490).addRange(48, 57).addRange(65, 90).addRange(97, 122)],
      ["W", regenerate(96).addRange(0, 47).addRange(58, 64).addRange(91, 94).addRange(123, 382).addRange(384, 8489).addRange(8491, 1114111)]
    ]);
  }
});

// node_modules/regexpu-core/rewrite-pattern.js
var require_rewrite_pattern = __commonJS({
  "node_modules/regexpu-core/rewrite-pattern.js"(exports, module) {
    "use strict";
    var generate = require_regjsgen().generate;
    var parse4 = require_parser().parse;
    var regenerate = require_regenerate();
    var unicodeMatchProperty = require_unicode_match_property_ecmascript();
    var unicodeMatchPropertyValue = require_unicode_match_property_value_ecmascript();
    var iuMappings = require_iu_mappings();
    var ESCAPE_SETS = require_character_class_escape_sets();
    var UNICODE_SET = regenerate().addRange(0, 1114111);
    var BMP_SET = regenerate().addRange(0, 65535);
    var DOT_SET_UNICODE = UNICODE_SET.clone().remove(10, 13, 8232, 8233);
    var getCharacterClassEscapeSet = (character, unicode, ignoreCase) => {
      if (unicode) {
        if (ignoreCase) {
          return ESCAPE_SETS.UNICODE_IGNORE_CASE.get(character);
        }
        return ESCAPE_SETS.UNICODE.get(character);
      }
      return ESCAPE_SETS.REGULAR.get(character);
    };
    var getUnicodeDotSet = (dotAll) => {
      return dotAll ? UNICODE_SET : DOT_SET_UNICODE;
    };
    var getUnicodePropertyValueSet = (property, value) => {
      const path = value ? `${property}/${value}` : `Binary_Property/${property}`;
      try {
        return __require(`regenerate-unicode-properties/${path}.js`);
      } catch (exception) {
        throw new Error(`Failed to recognize value \`${value}\` for property \`${property}\`.`);
      }
    };
    var handleLoneUnicodePropertyNameOrValue = (value) => {
      try {
        const property2 = "General_Category";
        const category = unicodeMatchPropertyValue(property2, value);
        return getUnicodePropertyValueSet(property2, category);
      } catch (exception) {
      }
      const property = unicodeMatchProperty(value);
      return getUnicodePropertyValueSet(property);
    };
    var getUnicodePropertyEscapeSet = (value, isNegative) => {
      const parts = value.split("=");
      const firstPart = parts[0];
      let set;
      if (parts.length == 1) {
        set = handleLoneUnicodePropertyNameOrValue(firstPart);
      } else {
        const property = unicodeMatchProperty(firstPart);
        const value2 = unicodeMatchPropertyValue(property, parts[1]);
        set = getUnicodePropertyValueSet(property, value2);
      }
      if (isNegative) {
        return UNICODE_SET.clone().remove(set);
      }
      return set.clone();
    };
    regenerate.prototype.iuAddRange = function(min, max) {
      const $this = this;
      do {
        const folded = caseFold(min);
        if (folded) {
          $this.add(folded);
        }
      } while (++min <= max);
      return $this;
    };
    var update = (item, pattern) => {
      let tree = parse4(pattern, config.useUnicodeFlag ? "u" : "");
      switch (tree.type) {
        case "characterClass":
        case "group":
        case "value":
          break;
        default:
          tree = wrap2(tree, pattern);
      }
      Object.assign(item, tree);
    };
    var wrap2 = (tree, pattern) => {
      return {
        "type": "group",
        "behavior": "ignore",
        "body": [tree],
        "raw": `(?:${pattern})`
      };
    };
    var caseFold = (codePoint) => {
      return iuMappings.get(codePoint) || false;
    };
    var processCharacterClass = (characterClassItem, regenerateOptions) => {
      const set = regenerate();
      for (const item of characterClassItem.body) {
        switch (item.type) {
          case "value":
            set.add(item.codePoint);
            if (config.ignoreCase && config.unicode && !config.useUnicodeFlag) {
              const folded = caseFold(item.codePoint);
              if (folded) {
                set.add(folded);
              }
            }
            break;
          case "characterClassRange":
            const min = item.min.codePoint;
            const max = item.max.codePoint;
            set.addRange(min, max);
            if (config.ignoreCase && config.unicode && !config.useUnicodeFlag) {
              set.iuAddRange(min, max);
            }
            break;
          case "characterClassEscape":
            set.add(getCharacterClassEscapeSet(item.value, config.unicode, config.ignoreCase));
            break;
          case "unicodePropertyEscape":
            set.add(getUnicodePropertyEscapeSet(item.value, item.negative));
            break;
          default:
            throw new Error(`Unknown term type: ${item.type}`);
        }
      }
      if (characterClassItem.negative) {
        update(characterClassItem, `(?!${set.toString(regenerateOptions)})[\\s\\S]`);
      } else {
        update(characterClassItem, set.toString(regenerateOptions));
      }
      return characterClassItem;
    };
    var updateNamedReference = (item, index) => {
      delete item.name;
      item.matchIndex = index;
    };
    var assertNoUnmatchedReferences = (groups) => {
      const unmatchedReferencesNames = Object.keys(groups.unmatchedReferences);
      if (unmatchedReferencesNames.length > 0) {
        throw new Error(`Unknown group names: ${unmatchedReferencesNames}`);
      }
    };
    var processTerm = (item, regenerateOptions, groups) => {
      switch (item.type) {
        case "dot":
          if (config.useDotAllFlag) {
            break;
          } else if (config.unicode) {
            update(item, getUnicodeDotSet(config.dotAll).toString(regenerateOptions));
          } else if (config.dotAll) {
            update(item, "[\\s\\S]");
          }
          break;
        case "characterClass":
          item = processCharacterClass(item, regenerateOptions);
          break;
        case "unicodePropertyEscape":
          if (config.unicodePropertyEscape) {
            update(item, getUnicodePropertyEscapeSet(item.value, item.negative).toString(regenerateOptions));
          }
          break;
        case "characterClassEscape":
          update(item, getCharacterClassEscapeSet(item.value, config.unicode, config.ignoreCase).toString(regenerateOptions));
          break;
        case "group":
          if (item.behavior == "normal") {
            groups.lastIndex++;
          }
          if (item.name && config.namedGroup) {
            const name = item.name.value;
            if (groups.names[name]) {
              throw new Error(`Multiple groups with the same name (${name}) are not allowed.`);
            }
            const index = groups.lastIndex;
            delete item.name;
            groups.names[name] = index;
            if (groups.onNamedGroup) {
              groups.onNamedGroup.call(null, name, index);
            }
            if (groups.unmatchedReferences[name]) {
              groups.unmatchedReferences[name].forEach((reference) => {
                updateNamedReference(reference, index);
              });
              delete groups.unmatchedReferences[name];
            }
          }
        case "alternative":
        case "disjunction":
        case "quantifier":
          item.body = item.body.map((term) => {
            return processTerm(term, regenerateOptions, groups);
          });
          break;
        case "value":
          const codePoint = item.codePoint;
          const set = regenerate(codePoint);
          if (config.ignoreCase && config.unicode && !config.useUnicodeFlag) {
            const folded = caseFold(codePoint);
            if (folded) {
              set.add(folded);
            }
          }
          update(item, set.toString(regenerateOptions));
          break;
        case "reference":
          if (item.name) {
            const name = item.name.value;
            const index = groups.names[name];
            if (index) {
              updateNamedReference(item, index);
              break;
            }
            if (!groups.unmatchedReferences[name]) {
              groups.unmatchedReferences[name] = [];
            }
            groups.unmatchedReferences[name].push(item);
          }
          break;
        case "anchor":
        case "empty":
        case "group":
          break;
        default:
          throw new Error(`Unknown term type: ${item.type}`);
      }
      return item;
    };
    var config = {
      "ignoreCase": false,
      "unicode": false,
      "dotAll": false,
      "useDotAllFlag": false,
      "useUnicodeFlag": false,
      "unicodePropertyEscape": false,
      "namedGroup": false
    };
    var rewritePattern2 = (pattern, flags, options) => {
      config.unicode = flags && flags.includes("u");
      const regjsparserFeatures = {
        "unicodePropertyEscape": config.unicode,
        "namedGroups": true,
        "lookbehind": options && options.lookbehind
      };
      config.ignoreCase = flags && flags.includes("i");
      const supportDotAllFlag = options && options.dotAllFlag;
      config.dotAll = supportDotAllFlag && flags && flags.includes("s");
      config.namedGroup = options && options.namedGroup;
      config.useDotAllFlag = options && options.useDotAllFlag;
      config.useUnicodeFlag = options && options.useUnicodeFlag;
      config.unicodePropertyEscape = options && options.unicodePropertyEscape;
      if (supportDotAllFlag && config.useDotAllFlag) {
        throw new Error("`useDotAllFlag` and `dotAllFlag` cannot both be true!");
      }
      const regenerateOptions = {
        "hasUnicodeFlag": config.useUnicodeFlag,
        "bmpOnly": !config.unicode
      };
      const groups = {
        "onNamedGroup": options && options.onNamedGroup,
        "lastIndex": 0,
        "names": Object.create(null),
        "unmatchedReferences": Object.create(null)
      };
      const tree = parse4(pattern, flags, regjsparserFeatures);
      processTerm(tree, regenerateOptions, groups);
      assertNoUnmatchedReferences(groups);
      return generate(tree);
    };
    module.exports = rewritePattern2;
  }
});

// node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/core-js/internals/global.js"(exports, module) {
    var check = function(it) {
      return it && it.Math == Math && it;
    };
    module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/core-js/internals/fails.js"(exports, module) {
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/internals/descriptors.js"(exports, module) {
    var fails = require_fails();
    module.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] != 7;
    });
  }
});

// node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/core-js/internals/function-bind-native.js"(exports, module) {
    var fails = require_fails();
    module.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/core-js/internals/function-call.js"(exports, module) {
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var bind = FunctionPrototype.bind;
    var call = FunctionPrototype.call;
    var uncurryThis = NATIVE_BIND && bind.bind(call, call);
    module.exports = NATIVE_BIND ? function(fn) {
      return fn && uncurryThis(fn);
    } : function(fn) {
      return fn && function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/core-js/internals/classof-raw.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var toString8 = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module.exports = function(it) {
      return stringSlice(toString8(it), 8, -1);
    };
  }
});

// node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/core-js/internals/indexed-object.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split2 = uncurryThis("".split);
    module.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) == "String" ? split2(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
    module.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module.exports = function(it) {
      if (isNullOrUndefined(it))
        throw $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/core-js/internals/is-callable.js"(exports, module) {
    module.exports = function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/internals/is-object.js"(exports, module) {
    var isCallable = require_is_callable();
    var documentAll = typeof document == "object" && document.all;
    var SPECIAL_DOCUMENT_ALL = typeof documentAll == "undefined" && documentAll !== void 0;
    module.exports = SPECIAL_DOCUMENT_ALL ? function(it) {
      return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
    } : function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/core-js/internals/get-built-in.js"(exports, module) {
    var global2 = require_global();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
    };
  }
});

// node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    module.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    module.exports = getBuiltIn("navigator", "userAgent") || "";
  }
});

// node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
    var global2 = require_global();
    var userAgent = require_engine_user_agent();
    var process = global2.process;
    var Deno = global2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version2;
    if (v8) {
      match = v8.split(".");
      version2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version2 && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version2 = +match[1];
      }
    }
    module.exports = version2;
  }
});

// node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
    var V8_VERSION = require_engine_v8_version();
    var fails = require_fails();
    module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol();
      return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/core-js/internals/is-symbol.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/core-js/internals/try-to-string.js"(exports, module) {
    var $String = String;
    module.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/core-js/internals/a-callable.js"(exports, module) {
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/core-js/internals/get-method.js"(exports, module) {
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject2 = require_is_object();
    var $TypeError = TypeError;
    module.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject2(val = call(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input)))
        return val;
      throw $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/core-js/internals/is-pure.js"(exports, module) {
    module.exports = false;
  }
});

// node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/core-js/internals/define-global-property.js"(exports, module) {
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module.exports = function(key, value) {
      try {
        defineProperty(global2, key, { value, configurable: true, writable: true });
      } catch (error) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/core-js/internals/shared-store.js"(exports, module) {
    var global2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module.exports = store;
  }
});

// node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/core-js/internals/shared.js"(exports, module) {
    var IS_PURE = require_is_pure();
    var store = require_shared_store();
    (module.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.25.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.25.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/internals/to-object.js"(exports, module) {
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/core-js/internals/has-own-property.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty2 = uncurryThis({}.hasOwnProperty);
    module.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty2(toObject(it), key);
    };
  }
});

// node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/core-js/internals/uid.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString8 = uncurryThis(1 .toString);
    module.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString8(++id + postfix, 36);
    };
  }
});

// node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
    var global2 = require_global();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var WellKnownSymbolsStore = shared("wks");
    var Symbol2 = global2.Symbol;
    var symbolFor = Symbol2 && Symbol2["for"];
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol2, name)) {
          WellKnownSymbolsStore[name] = Symbol2[name];
        } else if (USE_SYMBOL_AS_UID && symbolFor) {
          WellKnownSymbolsStore[name] = symbolFor(description);
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
        }
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/internals/to-primitive.js"(exports, module) {
    var call = require_function_call();
    var isObject2 = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module.exports = function(input, pref) {
      if (!isObject2(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject2(result) || isSymbol(result))
          return result;
        throw $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/core-js/internals/to-property-key.js"(exports, module) {
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/core-js/internals/document-create-element.js"(exports, module) {
    var global2 = require_global();
    var isObject2 = require_is_object();
    var document2 = global2.document;
    var EXISTS = isObject2(document2) && isObject2(document2.createElement);
    module.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a != 7;
    });
  }
});

// node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype != 42;
    });
  }
});

// node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/internals/an-object.js"(exports, module) {
    var isObject2 = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isObject2(argument))
        return argument;
      throw $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/core-js/internals/object-define-property.js"(exports) {
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current2 = $getOwnPropertyDescriptor(O, P);
        if (current2 && current2[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current2[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current2[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw $TypeError("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/core-js/internals/function-name.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/core-js/internals/inspect-source.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module.exports = store.inspectSource;
  }
});

// node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module) {
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js/internals/shared-key.js"(exports, module) {
    var shared = require_shared();
    var uid = require_uid();
    var keys2 = shared("keys");
    module.exports = function(key) {
      return keys2[key] || (keys2[key] = uid(key));
    };
  }
});

// node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
    module.exports = {};
  }
});

// node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/core-js/internals/internal-state.js"(exports, module) {
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var global2 = require_global();
    var uncurryThis = require_function_uncurry_this();
    var isObject2 = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global2.TypeError;
    var WeakMap = global2.WeakMap;
    var set;
    var get;
    var has3;
    var enforce = function(it) {
      return has3(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject2(it) || (state = get(it)).type !== TYPE) {
          throw TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      wmget = uncurryThis(store.get);
      wmhas = uncurryThis(store.has);
      wmset = uncurryThis(store.set);
      set = function(it, metadata) {
        if (wmhas(store, it))
          throw TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset(store, it, metadata);
        return metadata;
      };
      get = function(it) {
        return wmget(store, it) || {};
      };
      has3 = function(it) {
        return wmhas(store, it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE))
          throw TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has3 = function(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var wmget;
    var wmhas;
    var wmset;
    var STATE;
    module.exports = {
      set,
      get,
      has: has3,
      enforce,
      getterFor
    };
  }
});

// node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/core-js/internals/make-built-in.js"(exports, module) {
    var fails = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var defineProperty = Object.defineProperty;
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module.exports = function(value, name, options) {
      if (String(name).slice(0, 7) === "Symbol(") {
        name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
      }
      if (options && options.getter)
        name = "get " + name;
      if (options && options.setter)
        name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS)
          defineProperty(value, "name", { value: name, configurable: true });
        else
          value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS)
            defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype)
          value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = TEMPLATE.join(typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString8() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/core-js/internals/define-built-in.js"(exports, module) {
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module.exports = function(O, key, value, options) {
      if (!options)
        options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value))
        makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple)
          O[key] = value;
        else
          defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe)
            delete O[key];
          else if (O[key])
            simple = true;
        } catch (error) {
        }
        if (simple)
          O[key] = value;
        else
          definePropertyModule.f(O, key, {
            value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          });
      }
      return O;
    };
  }
});

// node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/core-js/internals/math-trunc.js"(exports, module) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = Math.trunc || function trunc(x) {
      var n2 = +x;
      return (n2 > 0 ? floor : ceil)(n2);
    };
  }
});

// node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
    var trunc = require_math_trunc();
    module.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module.exports = function(index, length3) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length3, 0) : min(integer, length3);
    };
  }
});

// node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js/internals/to-length.js"(exports, module) {
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
    var toLength = require_to_length();
    module.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js/internals/array-includes.js"(exports, module) {
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length3 = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length3);
        var value;
        if (IS_INCLUDES && el != el)
          while (length3 > index) {
            value = O[index++];
            if (value != value)
              return true;
          }
        else
          for (; length3 > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
          }
        return !IS_INCLUDES && -1;
      };
    };
    module.exports = {
      includes: createMethod(true),
      indexOf: createMethod(false)
    };
  }
});

// node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i)
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      return result;
    };
  }
});

// node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
    module.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/core-js/internals/own-keys.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys2(it) {
      var keys2 = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys2, getOwnPropertySymbols(it)) : keys2;
    };
  }
});

// node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
    var hasOwn = require_has_own_property();
    var ownKeys2 = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module.exports = function(target2, source, exceptions) {
      var keys2 = ownKeys2(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys2.length; i++) {
        var key = keys2[i];
        if (!hasOwn(target2, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target2, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/core-js/internals/is-forced.js"(exports, module) {
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data2[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data2 = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module.exports = isForced;
  }
});

// node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/core-js/internals/export.js"(exports, module) {
    var global2 = require_global();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target2, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target2 = global2;
      } else if (STATIC) {
        target2 = global2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target2 = (global2[TARGET] || {}).prototype;
      }
      if (target2)
        for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target2, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target2[key];
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
          }
          defineBuiltIn(target2, key, sourceProperty, options);
        }
    };
  }
});

// node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/core-js/internals/object-keys.js"(exports, module) {
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module.exports = Object.keys || function keys2(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js/internals/object-assign.js
var require_object_assign = __commonJS({
  "node_modules/core-js/internals/object-assign.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var uncurryThis = require_function_uncurry_this();
    var call = require_function_call();
    var fails = require_fails();
    var objectKeys = require_object_keys();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var toObject = require_to_object();
    var IndexedObject = require_indexed_object();
    var $assign = Object.assign;
    var defineProperty = Object.defineProperty;
    var concat = uncurryThis([].concat);
    module.exports = !$assign || fails(function() {
      if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, "a", {
        enumerable: true,
        get: function() {
          defineProperty(this, "b", {
            value: 3,
            enumerable: false
          });
        }
      }), { b: 2 })).b !== 1)
        return true;
      var A = {};
      var B = {};
      var symbol = Symbol();
      var alphabet = "abcdefghijklmnopqrst";
      A[symbol] = 7;
      alphabet.split("").forEach(function(chr) {
        B[chr] = chr;
      });
      return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join("") != alphabet;
    }) ? function assign2(target2, source) {
      var T = toObject(target2);
      var argumentsLength = arguments.length;
      var index = 1;
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      var propertyIsEnumerable = propertyIsEnumerableModule.f;
      while (argumentsLength > index) {
        var S = IndexedObject(arguments[index++]);
        var keys2 = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
        var length3 = keys2.length;
        var j = 0;
        var key;
        while (length3 > j) {
          key = keys2[j++];
          if (!DESCRIPTORS || call(propertyIsEnumerable, S, key))
            T[key] = S[key];
        }
      }
      return T;
    } : $assign;
  }
});

// node_modules/core-js/modules/es.object.assign.js
var require_es_object_assign = __commonJS({
  "node_modules/core-js/modules/es.object.assign.js"() {
    var $ = require_export();
    var assign2 = require_object_assign();
    $({ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign2 }, {
      assign: assign2
    });
  }
});

// node_modules/core-js/internals/path.js
var require_path = __commonJS({
  "node_modules/core-js/internals/path.js"(exports, module) {
    var global2 = require_global();
    module.exports = global2;
  }
});

// node_modules/core-js/es/object/assign.js
var require_assign = __commonJS({
  "node_modules/core-js/es/object/assign.js"(exports, module) {
    require_es_object_assign();
    var path = require_path();
    module.exports = path.Object.assign;
  }
});

// node_modules/core-js/stable/object/assign.js
var require_assign2 = __commonJS({
  "node_modules/core-js/stable/object/assign.js"(exports, module) {
    var parent = require_assign();
    module.exports = parent;
  }
});

// node_modules/core-js/actual/object/assign.js
var require_assign3 = __commonJS({
  "node_modules/core-js/actual/object/assign.js"(exports, module) {
    var parent = require_assign2();
    module.exports = parent;
  }
});

// node_modules/core-js/full/object/assign.js
var require_assign4 = __commonJS({
  "node_modules/core-js/full/object/assign.js"(exports, module) {
    var parent = require_assign3();
    module.exports = parent;
  }
});

// node_modules/core-js/features/object/assign.js
var require_assign5 = __commonJS({
  "node_modules/core-js/features/object/assign.js"(exports, module) {
    module.exports = require_assign4();
  }
});

// src/TagPreview.tsx
var import_react3 = __toModule(require_react());
import { TagChakra } from "./Tag.js";

// node_modules/react-live/dist/react-live.es.js
var import_react2 = __toModule(require_react());
var import_react_simple_code_editor = __toModule(require_lib());

// node_modules/prism-react-renderer/prism/index.js
var Prism = function() {
  var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  var uniqueId = 0;
  var plainTextGrammar = {};
  var _ = {
    util: {
      encode: function encode2(tokens) {
        if (tokens instanceof Token3) {
          return new Token3(tokens.type, encode2(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(encode2);
        } else {
          return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function(o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },
      objId: function(obj) {
        if (!obj["__id"]) {
          Object.defineProperty(obj, "__id", { value: ++uniqueId });
        }
        return obj["__id"];
      },
      clone: function deepClone(o, visited) {
        visited = visited || {};
        var clone4;
        var id;
        switch (_.util.type(o)) {
          case "Object":
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone4 = {};
            visited[id] = clone4;
            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone4[key] = deepClone(o[key], visited);
              }
            }
            return clone4;
          case "Array":
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone4 = [];
            visited[id] = clone4;
            o.forEach(function(v, i) {
              clone4[i] = deepClone(v, visited);
            });
            return clone4;
          default:
            return o;
        }
      },
      getLanguage: function(element) {
        while (element) {
          var m = lang.exec(element.className);
          if (m) {
            return m[1].toLowerCase();
          }
          element = element.parentElement;
        }
        return "none";
      },
      setLanguage: function(element, language) {
        element.className = element.className.replace(RegExp(lang, "gi"), "");
        element.classList.add("language-" + language);
      },
      isActive: function(element, className, defaultActivation) {
        var no = "no-" + className;
        while (element) {
          var classList = element.classList;
          if (classList.contains(className)) {
            return true;
          }
          if (classList.contains(no)) {
            return false;
          }
          element = element.parentElement;
        }
        return !!defaultActivation;
      }
    },
    languages: {
      plain: plainTextGrammar,
      plaintext: plainTextGrammar,
      text: plainTextGrammar,
      txt: plainTextGrammar,
      extend: function(id, redef) {
        var lang2 = _.util.clone(_.languages[id]);
        for (var key in redef) {
          lang2[key] = redef[key];
        }
        return lang2;
      },
      insertBefore: function(inside, before, insert2, root) {
        root = root || _.languages;
        var grammar = root[inside];
        var ret = {};
        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert2) {
                if (insert2.hasOwnProperty(newToken)) {
                  ret[newToken] = insert2[newToken];
                }
              }
            }
            if (!insert2.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }
        var old = root[inside];
        root[inside] = ret;
        _.languages.DFS(_.languages, function(key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });
        return ret;
      },
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};
        var objId = _.util.objId;
        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);
            var property = o[i];
            var propertyType = _.util.type(property);
            if (propertyType === "Object" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === "Array" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlight: function(text, grammar, language) {
      var env = {
        code: text,
        grammar,
        language
      };
      _.hooks.run("before-tokenize", env);
      env.tokens = _.tokenize(env.code, env.grammar);
      _.hooks.run("after-tokenize", env);
      return Token3.stringify(_.util.encode(env.tokens), env.language);
    },
    tokenize: function(text, grammar) {
      var rest = grammar.rest;
      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }
        delete grammar.rest;
      }
      var tokenList = new LinkedList();
      addAfter(tokenList, tokenList.head, text);
      matchGrammar(text, tokenList, grammar, tokenList.head, 0);
      return toArray(tokenList);
    },
    hooks: {
      all: {},
      add: function(name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      run: function(name, env) {
        var callbacks = _.hooks.all[name];
        if (!callbacks || !callbacks.length) {
          return;
        }
        for (var i = 0, callback; callback = callbacks[i++]; ) {
          callback(env);
        }
      }
    },
    Token: Token3
  };
  function Token3(type, content, alias, matchedStr) {
    this.type = type;
    this.content = content;
    this.alias = alias;
    this.length = (matchedStr || "").length | 0;
  }
  Token3.stringify = function stringify(o, language) {
    if (typeof o == "string") {
      return o;
    }
    if (Array.isArray(o)) {
      var s = "";
      o.forEach(function(e) {
        s += stringify(e, language);
      });
      return s;
    }
    var env = {
      type: o.type,
      content: stringify(o.content, language),
      tag: "span",
      classes: ["token", o.type],
      attributes: {},
      language
    };
    var aliases = o.alias;
    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }
    _.hooks.run("wrap", env);
    var attributes = "";
    for (var name in env.attributes) {
      attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
    }
    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
  };
  function matchPattern(pattern, pos, text, lookbehind) {
    pattern.lastIndex = pos;
    var match = pattern.exec(text);
    if (match && lookbehind && match[1]) {
      var lookbehindLength = match[1].length;
      match.index += lookbehindLength;
      match[0] = match[0].slice(lookbehindLength);
    }
    return match;
  }
  function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
    for (var token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }
      var patterns = grammar[token];
      patterns = Array.isArray(patterns) ? patterns : [patterns];
      for (var j = 0; j < patterns.length; ++j) {
        if (rematch && rematch.cause == token + "," + j) {
          return;
        }
        var patternObj = patterns[j];
        var inside = patternObj.inside;
        var lookbehind = !!patternObj.lookbehind;
        var greedy = !!patternObj.greedy;
        var alias = patternObj.alias;
        if (greedy && !patternObj.pattern.global) {
          var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
          patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
        }
        var pattern = patternObj.pattern || patternObj;
        for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
          if (rematch && pos >= rematch.reach) {
            break;
          }
          var str = currentNode.value;
          if (tokenList.length > text.length) {
            return;
          }
          if (str instanceof Token3) {
            continue;
          }
          var removeCount = 1;
          var match;
          if (greedy) {
            match = matchPattern(pattern, pos, text, lookbehind);
            if (!match || match.index >= text.length) {
              break;
            }
            var from2 = match.index;
            var to = match.index + match[0].length;
            var p = pos;
            p += currentNode.value.length;
            while (from2 >= p) {
              currentNode = currentNode.next;
              p += currentNode.value.length;
            }
            p -= currentNode.value.length;
            pos = p;
            if (currentNode.value instanceof Token3) {
              continue;
            }
            for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
              removeCount++;
              p += k.value.length;
            }
            removeCount--;
            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            match = matchPattern(pattern, 0, str, lookbehind);
            if (!match) {
              continue;
            }
          }
          var from2 = match.index;
          var matchStr = match[0];
          var before = str.slice(0, from2);
          var after = str.slice(from2 + matchStr.length);
          var reach = pos + str.length;
          if (rematch && reach > rematch.reach) {
            rematch.reach = reach;
          }
          var removeFrom = currentNode.prev;
          if (before) {
            removeFrom = addAfter(tokenList, removeFrom, before);
            pos += before.length;
          }
          removeRange(tokenList, removeFrom, removeCount);
          var wrapped = new Token3(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
          currentNode = addAfter(tokenList, removeFrom, wrapped);
          if (after) {
            addAfter(tokenList, currentNode, after);
          }
          if (removeCount > 1) {
            var nestedRematch = {
              cause: token + "," + j,
              reach
            };
            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
            if (rematch && nestedRematch.reach > rematch.reach) {
              rematch.reach = nestedRematch.reach;
            }
          }
        }
      }
    }
  }
  function LinkedList() {
    var head = { value: null, prev: null, next: null };
    var tail = { value: null, prev: head, next: null };
    head.next = tail;
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }
  function addAfter(list, node, value) {
    var next = node.next;
    var newNode = { value, prev: node, next };
    node.next = newNode;
    next.prev = newNode;
    list.length++;
    return newNode;
  }
  function removeRange(list, node, count) {
    var next = node.next;
    for (var i = 0; i < count && next !== list.tail; i++) {
      next = next.next;
    }
    node.next = next;
    next.prev = node;
    list.length -= i;
  }
  function toArray(list) {
    var array = [];
    var node = list.head.next;
    while (node !== list.tail) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
  return _;
}();
var prism = Prism;
Prism.default = Prism;
prism.languages.markup = {
  "comment": {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  "prolog": {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  "doctype": {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null
      },
      "string": {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      "punctuation": /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      "name": /[^\s<>'"]+/
    }
  },
  "cdata": {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  "tag": {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      "tag": {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          "punctuation": /^<\/?/,
          "namespace": /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          "punctuation": [{
            pattern: /^=/,
            alias: "attr-equals"
          }, /"|'/]
        }
      },
      "punctuation": /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          "namespace": /^[^\s>\/:]+:/
        }
      }
    }
  },
  "entity": [{
    pattern: /&[\da-z]{1,8};/i,
    alias: "named-entity"
  }, /&#x?[\da-f]{1,8};/i]
};
prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = prism.languages.markup["entity"];
prism.languages.markup["doctype"].inside["internal-subset"].inside = prism.languages.markup;
prism.hooks.add("wrap", function(env) {
  if (env.type === "entity") {
    env.attributes["title"] = env.content.replace(/&amp;/, "&");
  }
});
Object.defineProperty(prism.languages.markup.tag, "addInlined", {
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside["language-" + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: prism.languages[lang]
    };
    includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside["language-" + lang] = {
      pattern: /[\s\S]+/,
      inside: prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return tagName;
      }), "i"),
      lookbehind: true,
      greedy: true,
      inside
    };
    prism.languages.insertBefore("markup", "cdata", def);
  }
});
Object.defineProperty(prism.languages.markup.tag, "addAttribute", {
  value: function(attrName, lang) {
    prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
      lookbehind: true,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            "value": {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, "language-" + lang],
              inside: prism.languages[lang]
            },
            "punctuation": [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        }
      }
    });
  }
});
prism.languages.html = prism.languages.markup;
prism.languages.mathml = prism.languages.markup;
prism.languages.svg = prism.languages.markup;
prism.languages.xml = prism.languages.extend("markup", {});
prism.languages.ssml = prism.languages.xml;
prism.languages.atom = prism.languages.xml;
prism.languages.rss = prism.languages.xml;
(function(Prism2) {
  var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: "punctuation",
    inside: null
  };
  var insideString = {
    "bash": commandAfterHeredoc,
    "environment": {
      pattern: RegExp("\\$" + envVars),
      alias: "constant"
    },
    "variable": [
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: true,
        inside: {
          "variable": [{
            pattern: /(^\$\(\([\s\S]+)\)\)/,
            lookbehind: true
          }, /^\$\(\(/],
          "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          "operator": /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          "punctuation": /\(\(?|\)\)?|,|;/
        }
      },
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: true,
        inside: {
          "variable": /^\$\(|^`|\)$|`$/
        }
      },
      {
        pattern: /\$\{[^}]+\}/,
        greedy: true,
        inside: {
          "operator": /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          "punctuation": /[\[\]]/,
          "environment": {
            pattern: RegExp("(\\{)" + envVars),
            lookbehind: true,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    "entity": /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism2.languages.bash = {
    "shebang": {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    "comment": {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    "function-name": [
      {
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: true,
        alias: "function"
      },
      {
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: true
    },
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        "environment": {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
          lookbehind: true,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: true
    },
    "string": [
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: true,
        greedy: true,
        inside: insideString
      },
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: true,
        greedy: true,
        inside: {
          "bash": commandAfterHeredoc
        }
      },
      {
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: true,
        greedy: true,
        inside: insideString
      },
      {
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: true,
        inside: {
          "entity": insideString.entity
        }
      }
    ],
    "environment": {
      pattern: RegExp("\\$?" + envVars),
      alias: "constant"
    },
    "variable": insideString.variable,
    "function": {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "keyword": {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "builtin": {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      alias: "class-name"
    },
    "boolean": {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    "operator": {
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    "punctuation": /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    "number": {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism2.languages.bash;
  var toBeCopied = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"];
  var inside = insideString.variable[1].inside;
  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism2.languages.bash[toBeCopied[i]];
  }
  Prism2.languages.shell = Prism2.languages.bash;
})(prism);
prism.languages.clike = {
  "comment": [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  "string": {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      "punctuation": /[.\\]/
    }
  },
  "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  "boolean": /\b(?:false|true)\b/,
  "function": /\b\w+(?=\()/,
  "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  "punctuation": /[{}[\];(),.:]/
};
prism.languages.c = prism.languages.extend("clike", {
  "comment": {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "string": {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  "keyword": /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  "function": /\b[a-z_]\w*(?=\s*\()/i,
  "number": /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  "operator": />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
prism.languages.insertBefore("c", "string", {
  "char": {
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: true
  }
});
prism.languages.insertBefore("c", "string", {
  "macro": {
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: "property",
    inside: {
      "string": [{
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, prism.languages.c["string"]],
      "char": prism.languages.c["char"],
      "comment": prism.languages.c["comment"],
      "macro-name": [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: "function"
      }],
      "directive": {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      "punctuation": /##|\\(?=[\r\n])/,
      "expression": {
        pattern: /\S[\s\S]*/,
        inside: prism.languages.c
      }
    }
  }
});
prism.languages.insertBefore("c", "function", {
  "constant": /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete prism.languages.c["boolean"];
(function(Prism2) {
  var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return keyword.source;
  });
  Prism2.languages.cpp = Prism2.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return keyword.source;
        })),
        lookbehind: true
      },
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    "keyword": keyword,
    "number": {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    "operator": />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    "boolean": /\b(?:false|true)\b/
  });
  Prism2.languages.insertBefore("cpp", "string", {
    "module": {
      pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
        return modName;
      }) + ")"),
      lookbehind: true,
      greedy: true,
      inside: {
        "string": /^[<"][\s\S]+/,
        "operator": /:/,
        "punctuation": /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: true
    }
  });
  Prism2.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        "function": /^\w+/,
        "generic": {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: Prism2.languages.cpp
        }
      }
    }
  });
  Prism2.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  });
  Prism2.languages.insertBefore("cpp", "class-name", {
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism2.languages.extend("cpp", {})
    }
  });
  Prism2.languages.insertBefore("inside", "double-colon", {
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, Prism2.languages.cpp["base-clause"]);
})(prism);
(function(Prism2) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism2.languages.css = {
    "comment": /\/\*[\s\S]*?\*\//,
    "atrule": {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        "rule": /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: "selector"
        },
        "keyword": {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
      }
    },
    "url": {
      pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: true,
      inside: {
        "function": /^url/i,
        "punctuation": /^\(|\)$/,
        "string": {
          pattern: RegExp("^" + string.source + "$"),
          alias: "url"
        }
      }
    },
    "selector": {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
      lookbehind: true
    },
    "string": {
      pattern: string,
      greedy: true
    },
    "property": {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    "important": /!important\b/i,
    "function": {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    "punctuation": /[(){};:,]/
  };
  Prism2.languages.css["atrule"].inside.rest = Prism2.languages.css;
  var markup = Prism2.languages.markup;
  if (markup) {
    markup.tag.addInlined("style", "css");
    markup.tag.addAttribute("style", "css");
  }
})(prism);
(function(Prism2) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism2.languages.css.selector = {
    pattern: Prism2.languages.css.selector.pattern,
    lookbehind: true,
    inside: selectorInside = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      "class": /\.[-\w]+/,
      "id": /#[-\w]+/,
      "attribute": {
        pattern: RegExp(`\\[(?:[^[\\]"']|` + string.source + ")*\\]"),
        greedy: true,
        inside: {
          "punctuation": /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: "keyword"
          },
          "namespace": {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              "punctuation": /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          "attr-value": [string, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          "operator": /[|~*^$]?=/
        }
      },
      "n-th": [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          "number": /[\dn]+/,
          "operator": /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      "combinator": />|\+|~|\|\|/,
      "punctuation": /[(),]/
    }
  };
  Prism2.languages.css["atrule"].inside["selector-function-argument"].inside = selectorInside;
  Prism2.languages.insertBefore("css", "property", {
    "variable": {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: true
  };
  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism2.languages.insertBefore("css", "function", {
    "operator": {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    "hexcode": {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: "color"
    },
    "color": [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: true
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        "unit": unit,
        "number": number,
        "function": /[\w-]+(?=\()/,
        "punctuation": /[(),]/
      }
    }],
    "entity": /\\[\da-f]{1,8}/i,
    "unit": unit,
    "number": number
  });
})(prism);
prism.languages.javascript = prism.languages.extend("clike", {
  "class-name": [prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  "keyword": [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  "number": {
    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
    lookbehind: true
  },
  "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
prism.languages.insertBefore("javascript", "keyword", {
  "regex": {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: "language-regex",
        inside: prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  "parameter": [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }],
  "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
prism.languages.insertBefore("javascript", "string", {
  "hashbang": {
    pattern: /^#!.*/,
    greedy: true,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      "interpolation": {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: prism.languages.javascript
        }
      },
      "string": /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: "property"
  }
});
prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: "property"
  }
});
if (prism.languages.markup) {
  prism.languages.markup.tag.addInlined("script", "javascript");
  prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
}
prism.languages.js = prism.languages.javascript;
(function(Prism2) {
  var comment = /#(?!\{).+/;
  var interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: "variable"
  };
  Prism2.languages.coffeescript = Prism2.languages.extend("javascript", {
    "comment": comment,
    "string": [
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        greedy: true
      },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        greedy: true,
        inside: {
          "interpolation": interpolation
        }
      }
    ],
    "keyword": /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    "class-member": {
      pattern: /@(?!\d)\w+/,
      alias: "variable"
    }
  });
  Prism2.languages.insertBefore("coffeescript", "comment", {
    "multiline-comment": {
      pattern: /###[\s\S]+?###/,
      alias: "comment"
    },
    "block-regex": {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: "regex",
      inside: {
        "comment": comment,
        "interpolation": interpolation
      }
    }
  });
  Prism2.languages.insertBefore("coffeescript", "string", {
    "inline-javascript": {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        "delimiter": {
          pattern: /^`|`$/,
          alias: "punctuation"
        },
        "script": {
          pattern: /[\s\S]+/,
          alias: "language-javascript",
          inside: Prism2.languages.javascript
        }
      }
    },
    "multiline-string": [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: "string"
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: "string",
      inside: {
        interpolation
      }
    }]
  });
  Prism2.languages.insertBefore("coffeescript", "keyword", {
    "property": /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism2.languages.coffeescript["template-string"];
  Prism2.languages.coffee = Prism2.languages.coffeescript;
})(prism);
(function(Prism2) {
  var anchorOrAlias = /[*&][^\s[\]{},]+/;
  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
  var properties = "(?:" + tag.source + "(?:[ 	]+" + anchorOrAlias.source + ")?|" + anchorOrAlias.source + "(?:[ 	]+" + tag.source + ")?)";
  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function createValuePattern(value, flags) {
    flags = (flags || "").replace(/m/g, "") + "m";
    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return properties;
    }).replace(/<<value>>/g, function() {
      return value;
    });
    return RegExp(pattern, flags);
  }
  Prism2.languages.yaml = {
    "scalar": {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return properties;
      })),
      lookbehind: true,
      alias: "string"
    },
    "comment": /#.*/,
    "key": {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return properties;
      }).replace(/<<key>>/g, function() {
        return "(?:" + plainKey + "|" + string + ")";
      })),
      lookbehind: true,
      greedy: true,
      alias: "atrule"
    },
    "directive": {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: "important"
    },
    "datetime": {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: "number"
    },
    "boolean": {
      pattern: createValuePattern(/false|true/.source, "i"),
      lookbehind: true,
      alias: "important"
    },
    "null": {
      pattern: createValuePattern(/null|~/.source, "i"),
      lookbehind: true,
      alias: "important"
    },
    "string": {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    "number": {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
      lookbehind: true
    },
    "tag": tag,
    "important": anchorOrAlias,
    "punctuation": /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism2.languages.yml = Prism2.languages.yaml;
})(prism);
(function(Prism2) {
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function() {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
  }
  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism2.languages.markdown = Prism2.languages.extend("markup", {});
  Prism2.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        "punctuation": /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: Prism2.languages.yaml
        }
      }
    },
    "blockquote": {
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    "table": {
      pattern: RegExp("^" + tableRow + tableLine + "(?:" + tableRow + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"),
          lookbehind: true,
          inside: {
            "table-data": {
              pattern: RegExp(tableCell),
              inside: Prism2.languages.markdown
            },
            "punctuation": /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"),
          lookbehind: true,
          inside: {
            "punctuation": /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + tableRow + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(tableCell),
              alias: "important",
              inside: Prism2.languages.markdown
            },
            "punctuation": /\|/
          }
        }
      }
    },
    "code": [{
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: "keyword"
    }, {
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        "code-block": {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        "code-language": {
          pattern: /^(```).+/,
          lookbehind: true
        },
        "punctuation": /```/
      }
    }],
    "title": [{
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: "important",
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    "hr": {
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: "punctuation"
    },
    "list": {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: "punctuation"
    },
    "url-reference": {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        "variable": {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        "string": /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        "punctuation": /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    "bold": {
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /\*\*|__/
      }
    },
    "italic": {
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /[*_]/
      }
    },
    "strike": {
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /~~?/
      }
    },
    "code-snippet": {
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ["code", "keyword"]
    },
    "url": {
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "operator": /^!/,
        "content": {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {}
        },
        "variable": {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        "url": {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        "string": {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ["url", "bold", "italic", "strike"].forEach(function(token) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(inside) {
      if (token !== inside) {
        Prism2.languages.markdown[token].inside.content.inside[inside] = Prism2.languages.markdown[inside];
      }
    });
  });
  Prism2.hooks.add("after-tokenize", function(env) {
    if (env.language !== "markdown" && env.language !== "md") {
      return;
    }
    function walkTokens(tokens) {
      if (!tokens || typeof tokens === "string") {
        return;
      }
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        if (token.type !== "code") {
          walkTokens(token.content);
          continue;
        }
        var codeLang = token.content[1];
        var codeBlock = token.content[3];
        if (codeLang && codeBlock && codeLang.type === "code-language" && codeBlock.type === "code-block" && typeof codeLang.content === "string") {
          var lang = codeLang.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
          lang = (/[a-z][\w-]*/i.exec(lang) || [""])[0].toLowerCase();
          var alias = "language-" + lang;
          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === "string") {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }
    walkTokens(env.tokens);
  });
  Prism2.hooks.add("wrap", function(env) {
    if (env.type !== "code-block") {
      return;
    }
    var codeLang = "";
    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);
      if (match) {
        codeLang = match[1];
        break;
      }
    }
    var grammar = Prism2.languages[codeLang];
    if (!grammar) {
      if (codeLang && codeLang !== "none" && Prism2.plugins.autoloader) {
        var id = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
        env.attributes["id"] = id;
        Prism2.plugins.autoloader.loadLanguages(codeLang, function() {
          var ele = document.getElementById(id);
          if (ele) {
            ele.innerHTML = Prism2.highlight(ele.textContent, Prism2.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      env.content = Prism2.highlight(textContent(env.content), grammar, codeLang);
    }
  });
  var tagPattern = RegExp(Prism2.languages.markup.tag.pattern.source, "gi");
  var KNOWN_ENTITY_NAMES = {
    "amp": "&",
    "lt": "<",
    "gt": ">",
    "quot": '"'
  };
  var fromCodePoint = String.fromCodePoint || String.fromCharCode;
  function textContent(html) {
    var text = html.replace(tagPattern, "");
    text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m, code2) {
      code2 = code2.toLowerCase();
      if (code2[0] === "#") {
        var value;
        if (code2[1] === "x") {
          value = parseInt(code2.slice(2), 16);
        } else {
          value = Number(code2.slice(1));
        }
        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code2];
        if (known) {
          return known;
        }
        return m;
      }
    });
    return text;
  }
  Prism2.languages.md = Prism2.languages.markdown;
})(prism);
prism.languages.graphql = {
  "comment": /#.*/,
  "description": {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: prism.languages.markdown
      }
    }
  },
  "string": {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  "number": /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  "boolean": /\b(?:false|true)\b/,
  "variable": /\$[a-z_]\w*/i,
  "directive": {
    pattern: /@[a-z_]\w*/i,
    alias: "function"
  },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  "atom-input": {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: "class-name"
  },
  "scalar": /\b(?:Boolean|Float|ID|Int|String)\b/,
  "constant": /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: true
  },
  "fragment": {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "definition-query": {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "keyword": /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  "operator": /[!=|&]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  "object": /\w+(?=\s*\{)/,
  "punctuation": /[!(){}\[\]:=,]/,
  "property": /\w+/
};
prism.hooks.add("after-tokenize", function afterTokenizeGraphql(env) {
  if (env.language !== "graphql") {
    return;
  }
  var validTokens = env.tokens.filter(function(token) {
    return typeof token !== "string" && token.type !== "comment" && token.type !== "scalar";
  });
  var currentIndex = 0;
  function getToken(offset2) {
    return validTokens[currentIndex + offset2];
  }
  function isTokenType(types2, offset2) {
    offset2 = offset2 || 0;
    for (var i2 = 0; i2 < types2.length; i2++) {
      var token = getToken(i2 + offset2);
      if (!token || token.type !== types2[i2]) {
        return false;
      }
    }
    return true;
  }
  function findClosingBracket(open, close) {
    var stackHeight = 1;
    for (var i2 = currentIndex; i2 < validTokens.length; i2++) {
      var token = validTokens[i2];
      var content = token.content;
      if (token.type === "punctuation" && typeof content === "string") {
        if (open.test(content)) {
          stackHeight++;
        } else if (close.test(content)) {
          stackHeight--;
          if (stackHeight === 0) {
            return i2;
          }
        }
      }
    }
    return -1;
  }
  function addAlias(token, alias) {
    var aliases = token.alias;
    if (!aliases) {
      token.alias = aliases = [];
    } else if (!Array.isArray(aliases)) {
      token.alias = aliases = [aliases];
    }
    aliases.push(alias);
  }
  for (; currentIndex < validTokens.length; ) {
    var startToken = validTokens[currentIndex++];
    if (startToken.type === "keyword" && startToken.content === "mutation") {
      var inputVariables = [];
      if (isTokenType(["definition-mutation", "punctuation"]) && getToken(1).content === "(") {
        currentIndex += 2;
        var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
        if (definitionEnd === -1) {
          continue;
        }
        for (; currentIndex < definitionEnd; currentIndex++) {
          var t = getToken(0);
          if (t.type === "variable") {
            addAlias(t, "variable-input");
            inputVariables.push(t.content);
          }
        }
        currentIndex = definitionEnd + 1;
      }
      if (isTokenType(["punctuation", "property-query"]) && getToken(0).content === "{") {
        currentIndex++;
        addAlias(getToken(0), "property-mutation");
        if (inputVariables.length > 0) {
          var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
          if (mutationEnd === -1) {
            continue;
          }
          for (var i = currentIndex; i < mutationEnd; i++) {
            var varToken = validTokens[i];
            if (varToken.type === "variable" && inputVariables.indexOf(varToken.content) >= 0) {
              addAlias(varToken, "variable-input");
            }
          }
        }
      }
    }
  }
});
prism.languages.sql = {
  "comment": {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  "variable": [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  "string": {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  "identifier": {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      "punctuation": /^`|`$/
    }
  },
  "function": /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  "keyword": /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  "boolean": /\b(?:FALSE|NULL|TRUE)\b/i,
  "number": /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  "operator": /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  "punctuation": /[;[\]()`,.]/
};
(function(Prism2) {
  var templateString = Prism2.languages.javascript["template-string"];
  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside["interpolation"];
  var interpolationPunctuationObject = interpolationObject.inside["interpolation-punctuation"];
  var interpolationPattern = interpolationObject.pattern.source;
  function createTemplate(language, tag) {
    if (!Prism2.languages[language]) {
      return void 0;
    }
    return {
      pattern: RegExp("((?:" + tag + ")\\s*)" + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "embedded-code": {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }
  Prism2.languages.javascript["template-string"] = [
    createTemplate("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),
    createTemplate("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
    createTemplate("svg", /\bsvg/.source),
    createTemplate("markdown", /\b(?:markdown|md)/.source),
    createTemplate("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
    createTemplate("sql", /\bsql/.source),
    templateString
  ].filter(Boolean);
  function getPlaceholder(counter, language) {
    return "___" + language.toUpperCase() + "_" + counter + "___";
  }
  function tokenizeWithHooks(code2, grammar, language) {
    var env = {
      code: code2,
      grammar,
      language
    };
    Prism2.hooks.run("before-tokenize", env);
    env.tokens = Prism2.tokenize(env.code, env.grammar);
    Prism2.hooks.run("after-tokenize", env);
    return env.tokens;
  }
  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar["interpolation-punctuation"] = interpolationPunctuationObject;
    var tokens = Prism2.tokenize(expression, tempGrammar);
    if (tokens.length === 3) {
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism2.languages.javascript, "javascript"));
      tokens.splice.apply(tokens, args);
    }
    return new Prism2.Token("interpolation", tokens, interpolationObject.alias, expression);
  }
  function tokenizeEmbedded(code2, grammar, language) {
    var _tokens = Prism2.tokenize(code2, {
      "interpolation": {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    });
    var placeholderCounter = 0;
    var placeholderMap = {};
    var embeddedCode = _tokens.map(function(token) {
      if (typeof token === "string") {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;
        while (code2.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {
        }
        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join("");
    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language);
    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }
        var token = tokens[i];
        if (typeof token === "string" || typeof token.content === "string") {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === "string" ? token : token.content;
          var index = s.indexOf(placeholder);
          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];
            if (before) {
              replacement.push(before);
            }
            replacement.push(middle);
            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }
            if (typeof token === "string") {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;
          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }
    walkTokens(embeddedTokens);
    return new Prism2.Token(language, embeddedTokens, "language-" + language, code2);
  }
  var supportedLanguages = {
    "javascript": true,
    "js": true,
    "typescript": true,
    "ts": true,
    "jsx": true,
    "tsx": true
  };
  Prism2.hooks.add("after-tokenize", function(env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        if (typeof token === "string") {
          continue;
        }
        var content = token.content;
        if (!Array.isArray(content)) {
          if (typeof content !== "string") {
            findTemplateStrings([content]);
          }
          continue;
        }
        if (token.type === "template-string") {
          var embedded = content[1];
          if (content.length === 3 && typeof embedded !== "string" && embedded.type === "embedded-code") {
            var code2 = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism2.languages[language];
            if (!grammar) {
              continue;
            }
            content[1] = tokenizeEmbedded(code2, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }
    findTemplateStrings(env.tokens);
  });
  function stringContent(value) {
    if (typeof value === "string") {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join("");
    } else {
      return stringContent(value.content);
    }
  }
})(prism);
(function(Prism2) {
  Prism2.languages.typescript = Prism2.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null
    },
    "builtin": /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  });
  Prism2.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
  delete Prism2.languages.typescript["parameter"];
  delete Prism2.languages.typescript["literal-property"];
  var typeInside = Prism2.languages.extend("typescript", {});
  delete typeInside["class-name"];
  Prism2.languages.typescript["class-name"].inside = typeInside;
  Prism2.languages.insertBefore("typescript", "function", {
    "decorator": {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        "at": {
          pattern: /^@/,
          alias: "operator"
        },
        "function": /^[\s\S]+/
      }
    },
    "generic-function": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        "function": /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        "generic": {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: typeInside
        }
      }
    }
  });
  Prism2.languages.ts = Prism2.languages.typescript;
})(prism);
(function(Prism2) {
  Prism2.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript["function-variable"].pattern.source),
      lookbehind: true,
      alias: ["function-variable", "method", "function", "property-access"]
    }
  });
  Prism2.languages.insertBefore("javascript", "function", {
    "method": {
      pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript["function"].source),
      lookbehind: true,
      alias: ["function", "property-access"]
    }
  });
  Prism2.languages.insertBefore("javascript", "constant", {
    "known-class-name": [{
      pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
      alias: "class-name"
    }, {
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: "class-name"
    }]
  });
  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function() {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), flags);
  }
  Prism2.languages.insertBefore("javascript", "keyword", {
    "imports": {
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism2.languages.javascript
    },
    "exports": {
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism2.languages.javascript
    }
  });
  Prism2.languages.javascript["keyword"].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: "module"
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
    alias: "control-flow"
  }, {
    pattern: /\bnull\b/,
    alias: ["null", "nil"]
  }, {
    pattern: /\bundefined\b/,
    alias: "nil"
  });
  Prism2.languages.insertBefore("javascript", "operator", {
    "spread": {
      pattern: /\.{3}/,
      alias: "operator"
    },
    "arrow": {
      pattern: /=>/,
      alias: "operator"
    }
  });
  Prism2.languages.insertBefore("javascript", "punctuation", {
    "property-access": {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    "maybe-class-name": {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    "dom": {
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: "variable"
    },
    "console": {
      pattern: /\bconsole(?=\s*\.)/,
      alias: "class-name"
    }
  });
  var maybeClassNameTokens = ["function", "function-variable", "method", "method-variable", "property-access"];
  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism2.languages.javascript[token];
    if (Prism2.util.type(value) === "RegExp") {
      value = Prism2.languages.javascript[token] = {
        pattern: value
      };
    }
    var inside = value.inside || {};
    value.inside = inside;
    inside["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
})(prism);
(function(Prism2) {
  var javascript = Prism2.util.clone(Prism2.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread2 = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function re(source, flags) {
    source = source.replace(/<S>/g, function() {
      return space;
    }).replace(/<BRACES>/g, function() {
      return braces;
    }).replace(/<SPREAD>/g, function() {
      return spread2;
    });
    return RegExp(source, flags);
  }
  spread2 = re(spread2).source;
  Prism2.languages.jsx = Prism2.languages.extend("markup", javascript);
  Prism2.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  Prism2.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/;
  Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism2.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism2.languages.jsx.tag.inside["comment"] = javascript["comment"];
  Prism2.languages.insertBefore("inside", "attr-name", {
    "spread": {
      pattern: re(/<SPREAD>/.source),
      inside: Prism2.languages.jsx
    }
  }, Prism2.languages.jsx.tag);
  Prism2.languages.insertBefore("inside", "special-attr", {
    "script": {
      pattern: re(/=<BRACES>/.source),
      alias: "language-javascript",
      inside: {
        "script-punctuation": {
          pattern: /^=(?=\{)/,
          alias: "punctuation"
        },
        rest: Prism2.languages.jsx
      }
    }
  }, Prism2.languages.jsx.tag);
  var stringifyToken = function(token) {
    if (!token) {
      return "";
    }
    if (typeof token === "string") {
      return token;
    }
    if (typeof token.content === "string") {
      return token.content;
    }
    return token.content.map(stringifyToken).join("");
  };
  var walkTokens = function(tokens) {
    var openedTags = [];
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;
      if (typeof token !== "string") {
        if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
          if (token.content[0].content[0].content === "</") {
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === "/>")
              ;
            else {
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }
      if (notTagNorBrace || typeof token === "string") {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          var plainText = stringifyToken(token);
          if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }
          if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }
          tokens[i] = new Prism2.Token("plain-text", plainText, null, plainText);
        }
      }
      if (token.content && typeof token.content !== "string") {
        walkTokens(token.content);
      }
    }
  };
  Prism2.hooks.add("after-tokenize", function(env) {
    if (env.language !== "jsx" && env.language !== "tsx") {
      return;
    }
    walkTokens(env.tokens);
  });
})(prism);
(function(Prism2) {
  Prism2.languages.diff = {
    "coord": [
      /^(?:\*{3}|-{3}|\+{3}).*$/m,
      /^@@.*@@$/m,
      /^\d.*$/m
    ]
  };
  var PREFIXES = {
    "deleted-sign": "-",
    "deleted-arrow": "<",
    "inserted-sign": "+",
    "inserted-arrow": ">",
    "unchanged": " ",
    "diff": "!"
  };
  Object.keys(PREFIXES).forEach(function(name) {
    var prefix = PREFIXES[name];
    var alias = [];
    if (!/^\w+$/.test(name)) {
      alias.push(/\w+/.exec(name)[0]);
    }
    if (name === "diff") {
      alias.push("bold");
    }
    Prism2.languages.diff[name] = {
      pattern: RegExp("^(?:[" + prefix + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
      alias,
      inside: {
        "line": {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        "prefix": {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  });
  Object.defineProperty(Prism2.languages.diff, "PREFIXES", {
    value: PREFIXES
  });
})(prism);
prism.languages.git = {
  "comment": /^#.*/m,
  "deleted": /^[-–].*/m,
  "inserted": /^\+.*/m,
  "string": /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
  "command": {
    pattern: /^.*\$ git .*$/m,
    inside: {
      "parameter": /\s--?\w+/
    }
  },
  "coord": /^@@.*@@$/m,
  "commit-sha1": /^commit \w{40}$/m
};
prism.languages.go = prism.languages.extend("clike", {
  "string": {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: true,
    greedy: true
  },
  "keyword": /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  "boolean": /\b(?:_|false|iota|nil|true)\b/,
  "number": [
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
  ],
  "operator": /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  "builtin": /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
prism.languages.insertBefore("go", "string", {
  "char": {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: true
  }
});
delete prism.languages.go["class-name"];
(function(Prism2) {
  function getPlaceholder(language, index) {
    return "___" + language.toUpperCase() + index + "___";
  }
  Object.defineProperties(Prism2.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      value: function(env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }
        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function(match) {
          if (typeof replaceFilter === "function" && !replaceFilter(match)) {
            return match;
          }
          var i = tokenStack.length;
          var placeholder;
          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          }
          tokenStack[i] = match;
          return placeholder;
        });
        env.grammar = Prism2.languages.markup;
      }
    },
    tokenizePlaceholders: {
      value: function(env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        }
        env.grammar = Prism2.languages[language];
        var j = 0;
        var keys2 = Object.keys(env.tokenStack);
        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            if (j >= keys2.length) {
              break;
            }
            var token = tokens[i];
            if (typeof token === "string" || token.content && typeof token.content === "string") {
              var k = keys2[j];
              var t = env.tokenStack[k];
              var s = typeof token === "string" ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);
              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism2.Token(language, Prism2.tokenize(t, env.grammar), "language-" + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];
                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }
                replacement.push(middle);
                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }
                if (typeof token === "string") {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content) {
              walkTokens(token.content);
            }
          }
          return tokens;
        }
        walkTokens(env.tokens);
      }
    }
  });
})(prism);
(function(Prism2) {
  Prism2.languages.handlebars = {
    "comment": /\{\{![\s\S]*?\}\}/,
    "delimiter": {
      pattern: /^\{\{\{?|\}\}\}?$/,
      alias: "punctuation"
    },
    "string": /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    "boolean": /\b(?:false|true)\b/,
    "block": {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: true,
      alias: "keyword"
    },
    "brackets": {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    "punctuation": /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    "variable": /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism2.hooks.add("before-tokenize", function(env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism2.languages["markup-templating"].buildPlaceholders(env, "handlebars", handlebarsPattern);
  });
  Prism2.hooks.add("after-tokenize", function(env) {
    Prism2.languages["markup-templating"].tokenizePlaceholders(env, "handlebars");
  });
  Prism2.languages.hbs = Prism2.languages.handlebars;
})(prism);
prism.languages.json = {
  "property": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "string": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "comment": {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "number": /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  "punctuation": /[{}[\],]/,
  "operator": /:/,
  "boolean": /\b(?:false|true)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
prism.languages.webmanifest = prism.languages.json;
prism.languages.less = prism.languages.extend("css", {
  "comment": [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  "atrule": {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      "punctuation": /[:()]/
    }
  },
  "selector": {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      "variable": /@+[\w-]+/
    }
  },
  "property": /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  "operator": /[+\-*\/]/
});
prism.languages.insertBefore("less", "property", {
  "variable": [
    {
      pattern: /@[\w-]+\s*:/,
      inside: {
        "punctuation": /:/
      }
    },
    /@@?[\w-]+/
  ],
  "mixin-usage": {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: "function"
  }
});
prism.languages.makefile = {
  "comment": {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  "string": {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "builtin-target": {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: "builtin"
  },
  "target": {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: "symbol",
    inside: {
      "variable": /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  "variable": /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  "keyword": /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  "function": {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: true
  },
  "operator": /(?:::|[?:+!])?=|[|@]/,
  "punctuation": /[:;(){}]/
};
prism.languages.objectivec = prism.languages.extend("c", {
  "string": {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  "keyword": /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  "operator": /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete prism.languages.objectivec["class-name"];
prism.languages.objc = prism.languages.objectivec;
prism.languages.ocaml = {
  "comment": {
    pattern: /\(\*[\s\S]*?\*\)/,
    greedy: true
  },
  "char": {
    pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
    greedy: true
  },
  "string": [{
    pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
    greedy: true
  }],
  "number": [
    /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
    /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
    /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i
  ],
  "directive": {
    pattern: /\B#\w+/,
    alias: "property"
  },
  "label": {
    pattern: /\B~\w+/,
    alias: "property"
  },
  "type-variable": {
    pattern: /\B'\w+/,
    alias: "function"
  },
  "variant": {
    pattern: /`\w+/,
    alias: "symbol"
  },
  "keyword": /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  "boolean": /\b(?:false|true)\b/,
  "operator-like-punctuation": {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: "punctuation"
  },
  "operator": /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  "punctuation": /;;|::|[(){}\[\].,:;#]|\b_\b/
};
prism.languages.python = {
  "comment": {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      "interpolation": {
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: true,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: true
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      "string": /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: "string"
  },
  "string": {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  "function": {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  "decorator": {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: true,
    alias: ["annotation", "punctuation"],
    inside: {
      "punctuation": /\./
    }
  },
  "keyword": /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  "builtin": /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  "boolean": /\b(?:False|None|True)\b/,
  "number": /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  "operator": /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  "punctuation": /[{}[\];(),.:]/
};
prism.languages.python["string-interpolation"].inside["interpolation"].inside.rest = prism.languages.python;
prism.languages.py = prism.languages.python;
prism.languages.reason = prism.languages.extend("clike", {
  "string": {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  "class-name": /\b[A-Z]\w*/,
  "keyword": /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  "operator": /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
});
prism.languages.insertBefore("reason", "class-name", {
  "char": {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: true
  },
  "constructor": /\b[A-Z]\w*\b(?!\s*\.)/,
  "label": {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: "symbol"
  }
});
delete prism.languages.reason.function;
(function(Prism2) {
  Prism2.languages.sass = Prism2.languages.extend("css", {
    "comment": {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: true,
      greedy: true
    }
  });
  Prism2.languages.insertBefore("sass", "atrule", {
    "atrule-line": {
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: true,
      inside: {
        "atrule": /(?:@[\w-]+|[+=])/
      }
    }
  });
  delete Prism2.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
    pattern: /(\s)-(?=\s)/,
    lookbehind: true
  }];
  Prism2.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      greedy: true,
      inside: {
        "punctuation": /:/,
        "variable": variable,
        "operator": operator
      }
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: true,
      inside: {
        "property": [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        "punctuation": /:/,
        "variable": variable,
        "operator": operator,
        "important": Prism2.languages.sass.important
      }
    }
  });
  delete Prism2.languages.sass.property;
  delete Prism2.languages.sass.important;
  Prism2.languages.insertBefore("sass", "punctuation", {
    "selector": {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: true,
      greedy: true
    }
  });
})(prism);
prism.languages.scss = prism.languages.extend("css", {
  "comment": {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  "atrule": {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      "rule": /@[\w-]+/
    }
  },
  "url": /(?:[-a-z]+-)?url(?=\()/i,
  "selector": {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      "parent": {
        pattern: /&/,
        alias: "important"
      },
      "placeholder": /%[-\w]+/,
      "variable": /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  "property": {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      "variable": /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
prism.languages.insertBefore("scss", "atrule", {
  "keyword": [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: true
  }]
});
prism.languages.insertBefore("scss", "important", {
  "variable": /\$[-\w]+|#\{\$[-\w]+\}/
});
prism.languages.insertBefore("scss", "function", {
  "module-modifier": {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: "keyword"
  },
  "placeholder": {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  "statement": {
    pattern: /\B!(?:default|optional)\b/i,
    alias: "keyword"
  },
  "boolean": /\b(?:false|true)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  },
  "operator": {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: true
  }
});
prism.languages.scss["atrule"].inside.rest = prism.languages.scss;
(function(Prism2) {
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+)/,
    lookbehind: true
  };
  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  var inside = {
    "comment": {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    "url": {
      pattern: /\burl\((["']?).*?\1\)/i,
      greedy: true
    },
    "string": {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    "interpolation": null,
    "func": null,
    "important": /\B!(?:important|optional)\b/i,
    "keyword": {
      pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
      lookbehind: true
    },
    "hexcode": /#[\da-f]{3,6}/i,
    "color": [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        "unit": unit,
        "number": number,
        "function": /[\w-]+(?=\()/,
        "punctuation": /[(),]/
      }
    }],
    "entity": /\\[\da-f]{1,8}/i,
    "unit": unit,
    "boolean": /\b(?:false|true)\b/,
    "operator": [
      /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
    ],
    "number": number,
    "punctuation": /[{}()\[\];:,]/
  };
  inside["interpolation"] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: "variable",
    inside: {
      "delimiter": {
        pattern: /^\{|\}$/,
        alias: "punctuation"
      },
      rest: inside
    }
  };
  inside["func"] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      "function": /^[^(]+/,
      rest: inside
    }
  };
  Prism2.languages.stylus = {
    "atrule-declaration": {
      pattern: /(^[ \t]*)@.+/m,
      lookbehind: true,
      inside: {
        "atrule": /^@[\w-]+/,
        rest: inside
      }
    },
    "variable-declaration": {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: true,
      inside: {
        "variable": /^\S+/,
        rest: inside
      }
    },
    "statement": {
      pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
      lookbehind: true,
      inside: {
        "keyword": /^\S+/,
        rest: inside
      }
    },
    "property-declaration": {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
      lookbehind: true,
      inside: {
        "property": {
          pattern: /^[^\s:]+/,
          inside: {
            "interpolation": inside.interpolation
          }
        },
        rest: inside
      }
    },
    "selector": {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
      lookbehind: true,
      inside: {
        "interpolation": inside.interpolation,
        "comment": inside.comment,
        "punctuation": /[{},]/
      }
    },
    "func": inside.func,
    "string": inside.string,
    "comment": {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true,
      greedy: true
    },
    "interpolation": inside.interpolation,
    "punctuation": /[{}()\[\];:.]/
  };
})(prism);
(function(Prism2) {
  var typescript = Prism2.util.clone(Prism2.languages.typescript);
  Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript);
  delete Prism2.languages.tsx["parameter"];
  delete Prism2.languages.tsx["literal-property"];
  var tag = Prism2.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
  tag.lookbehind = true;
})(prism);
prism.languages.wasm = {
  "comment": [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  "string": {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  "keyword": [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      "operator": /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      "punctuation": /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  "variable": /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  "number": /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  "punctuation": /[()]/
};
var prism_default = prism;

// node_modules/prism-react-renderer/dist/index.js
var import_react = __toModule(require_react());
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target2) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target2[key] = source[key];
        }
      }
    }
    return target2;
  };
  return _extends.apply(this, arguments);
}
var newlineRe = /\r\n|\r|\n/;
var normalizeEmptyLines = function(line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};
var appendTypes = function(types2, add2) {
  var typesSize = types2.length;
  if (typesSize > 0 && types2[typesSize - 1] === add2) {
    return types2;
  }
  return types2.concat(add2);
};
var normalizeTokens = function(tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];
  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types2 = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i];
      if (typeof token === "string") {
        types2 = stackIndex > 0 ? types2 : ["plain"];
        content = token;
      } else {
        types2 = appendTypes(types2, token.type);
        if (token.alias) {
          types2 = appendTypes(types2, token.alias);
        }
        content = token.content;
      }
      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types2);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      }
      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types2,
        content: splitByNewlines[0]
      });
      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types2,
          content: splitByNewlines[i$1]
        });
      }
    }
    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }
  normalizeEmptyLines(currentLine);
  return acc;
};
var themeToDict = function(theme2, language) {
  var plain = theme2.plain;
  var base = Object.create(null);
  var themeDict = theme2.styles.reduce(function(acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;
    if (languages && !languages.includes(language)) {
      return acc;
    }
    themeEntry.types.forEach(function(type) {
      var accStyle = _extends({}, acc[type], style);
      acc[type] = accStyle;
    });
    return acc;
  }, base);
  themeDict.root = plain;
  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};
function objectWithoutProperties(obj, exclude) {
  var target2 = {};
  for (var k in obj)
    if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
      target2[k] = obj[k];
  return target2;
}
var Highlight = /* @__PURE__ */ function(Component3) {
  function Highlight2() {
    var this$1 = this;
    var args = [], len = arguments.length;
    while (len--)
      args[len] = arguments[len];
    Component3.apply(this, args);
    _defineProperty(this, "getThemeDict", function(props) {
      if (this$1.themeDict !== void 0 && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }
      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : void 0;
      return this$1.themeDict = themeDict;
    });
    _defineProperty(this, "getLineProps", function(ref2) {
      var key = ref2.key;
      var className = ref2.className;
      var style = ref2.style;
      var rest$1 = objectWithoutProperties(ref2, ["key", "className", "style", "line"]);
      var rest = rest$1;
      var output = _extends({}, rest, {
        className: "token-line",
        style: void 0,
        key: void 0
      });
      var themeDict = this$1.getThemeDict(this$1.props);
      if (themeDict !== void 0) {
        output.style = themeDict.plain;
      }
      if (style !== void 0) {
        output.style = output.style !== void 0 ? _extends({}, output.style, style) : style;
      }
      if (key !== void 0) {
        output.key = key;
      }
      if (className) {
        output.className += " " + className;
      }
      return output;
    });
    _defineProperty(this, "getStyleForToken", function(ref2) {
      var types2 = ref2.types;
      var empty2 = ref2.empty;
      var typesSize = types2.length;
      var themeDict = this$1.getThemeDict(this$1.props);
      if (themeDict === void 0) {
        return void 0;
      } else if (typesSize === 1 && types2[0] === "plain") {
        return empty2 ? {
          display: "inline-block"
        } : void 0;
      } else if (typesSize === 1 && !empty2) {
        return themeDict[types2[0]];
      }
      var baseStyle = empty2 ? {
        display: "inline-block"
      } : {};
      var typeStyles = types2.map(function(type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });
    _defineProperty(this, "getTokenProps", function(ref2) {
      var key = ref2.key;
      var className = ref2.className;
      var style = ref2.style;
      var token = ref2.token;
      var rest$1 = objectWithoutProperties(ref2, ["key", "className", "style", "token"]);
      var rest = rest$1;
      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: void 0
      });
      if (style !== void 0) {
        output.style = output.style !== void 0 ? _extends({}, output.style, style) : style;
      }
      if (key !== void 0) {
        output.key = key;
      }
      if (className) {
        output.className += " " + className;
      }
      return output;
    });
    _defineProperty(this, "tokenize", function(Prism2, code2, grammar, language) {
      var env = {
        code: code2,
        grammar,
        language,
        tokens: []
      };
      Prism2.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism2.tokenize(env.code, env.grammar, env.language);
      Prism2.hooks.run("after-tokenize", env);
      return tokens;
    });
  }
  if (Component3)
    Highlight2.__proto__ = Component3;
  Highlight2.prototype = Object.create(Component3 && Component3.prototype);
  Highlight2.prototype.constructor = Highlight2;
  Highlight2.prototype.render = function render() {
    var ref2 = this.props;
    var Prism2 = ref2.Prism;
    var language = ref2.language;
    var code2 = ref2.code;
    var children = ref2.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism2.languages[language];
    var mixedTokens = grammar !== void 0 ? this.tokenize(Prism2, code2, grammar, language) : [code2];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens,
      className: "prism-code language-" + language,
      style: themeDict !== void 0 ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };
  return Highlight2;
}(import_react.Component);
var dist_default = Highlight;

// node_modules/buble/dist/buble-browser.es.js
var import_regexpu_core = __toModule(require_rewrite_pattern());

// node_modules/sourcemap-codec/dist/sourcemap-codec.es.js
var charToInteger = {};
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
for (i = 0; i < chars.length; i++) {
  charToInteger[chars.charCodeAt(i)] = i;
}
var i;
function encode(decoded) {
  var sourceFileIndex = 0;
  var sourceCodeLine = 0;
  var sourceCodeColumn = 0;
  var nameIndex = 0;
  var mappings = "";
  for (var i = 0; i < decoded.length; i++) {
    var line = decoded[i];
    if (i > 0)
      mappings += ";";
    if (line.length === 0)
      continue;
    var generatedCodeColumn = 0;
    var lineMappings = [];
    for (var _i = 0, line_1 = line; _i < line_1.length; _i++) {
      var segment = line_1[_i];
      var segmentMappings = encodeInteger(segment[0] - generatedCodeColumn);
      generatedCodeColumn = segment[0];
      if (segment.length > 1) {
        segmentMappings += encodeInteger(segment[1] - sourceFileIndex) + encodeInteger(segment[2] - sourceCodeLine) + encodeInteger(segment[3] - sourceCodeColumn);
        sourceFileIndex = segment[1];
        sourceCodeLine = segment[2];
        sourceCodeColumn = segment[3];
      }
      if (segment.length === 5) {
        segmentMappings += encodeInteger(segment[4] - nameIndex);
        nameIndex = segment[4];
      }
      lineMappings.push(segmentMappings);
    }
    mappings += lineMappings.join(",");
  }
  return mappings;
}
function encodeInteger(num) {
  var result = "";
  num = num < 0 ? -num << 1 | 1 : num << 1;
  do {
    var clamped = num & 31;
    num >>>= 5;
    if (num > 0) {
      clamped |= 32;
    }
    result += chars[clamped];
  } while (num > 0);
  return result;
}

// node_modules/magic-string/dist/magic-string.es.js
var BitSet = function BitSet2(arg) {
  this.bits = arg instanceof BitSet2 ? arg.bits.slice() : [];
};
BitSet.prototype.add = function add(n2) {
  this.bits[n2 >> 5] |= 1 << (n2 & 31);
};
BitSet.prototype.has = function has(n2) {
  return !!(this.bits[n2 >> 5] & 1 << (n2 & 31));
};
var Chunk = function Chunk2(start, end, content) {
  this.start = start;
  this.end = end;
  this.original = content;
  this.intro = "";
  this.outro = "";
  this.content = content;
  this.storeName = false;
  this.edited = false;
  Object.defineProperties(this, {
    previous: { writable: true, value: null },
    next: { writable: true, value: null }
  });
};
Chunk.prototype.appendLeft = function appendLeft(content) {
  this.outro += content;
};
Chunk.prototype.appendRight = function appendRight(content) {
  this.intro = this.intro + content;
};
Chunk.prototype.clone = function clone() {
  var chunk = new Chunk(this.start, this.end, this.original);
  chunk.intro = this.intro;
  chunk.outro = this.outro;
  chunk.content = this.content;
  chunk.storeName = this.storeName;
  chunk.edited = this.edited;
  return chunk;
};
Chunk.prototype.contains = function contains(index) {
  return this.start < index && index < this.end;
};
Chunk.prototype.eachNext = function eachNext(fn) {
  var chunk = this;
  while (chunk) {
    fn(chunk);
    chunk = chunk.next;
  }
};
Chunk.prototype.eachPrevious = function eachPrevious(fn) {
  var chunk = this;
  while (chunk) {
    fn(chunk);
    chunk = chunk.previous;
  }
};
Chunk.prototype.edit = function edit(content, storeName, contentOnly) {
  this.content = content;
  if (!contentOnly) {
    this.intro = "";
    this.outro = "";
  }
  this.storeName = storeName;
  this.edited = true;
  return this;
};
Chunk.prototype.prependLeft = function prependLeft(content) {
  this.outro = content + this.outro;
};
Chunk.prototype.prependRight = function prependRight(content) {
  this.intro = content + this.intro;
};
Chunk.prototype.split = function split(index) {
  var sliceIndex = index - this.start;
  var originalBefore = this.original.slice(0, sliceIndex);
  var originalAfter = this.original.slice(sliceIndex);
  this.original = originalBefore;
  var newChunk = new Chunk(index, this.end, originalAfter);
  newChunk.outro = this.outro;
  this.outro = "";
  this.end = index;
  if (this.edited) {
    newChunk.edit("", false);
    this.content = "";
  } else {
    this.content = originalBefore;
  }
  newChunk.next = this.next;
  if (newChunk.next) {
    newChunk.next.previous = newChunk;
  }
  newChunk.previous = this;
  this.next = newChunk;
  return newChunk;
};
Chunk.prototype.toString = function toString() {
  return this.intro + this.content + this.outro;
};
Chunk.prototype.trimEnd = function trimEnd(rx) {
  this.outro = this.outro.replace(rx, "");
  if (this.outro.length) {
    return true;
  }
  var trimmed = this.content.replace(rx, "");
  if (trimmed.length) {
    if (trimmed !== this.content) {
      this.split(this.start + trimmed.length).edit("", void 0, true);
    }
    return true;
  } else {
    this.edit("", void 0, true);
    this.intro = this.intro.replace(rx, "");
    if (this.intro.length) {
      return true;
    }
  }
};
Chunk.prototype.trimStart = function trimStart(rx) {
  this.intro = this.intro.replace(rx, "");
  if (this.intro.length) {
    return true;
  }
  var trimmed = this.content.replace(rx, "");
  if (trimmed.length) {
    if (trimmed !== this.content) {
      this.split(this.end - trimmed.length);
      this.edit("", void 0, true);
    }
    return true;
  } else {
    this.edit("", void 0, true);
    this.outro = this.outro.replace(rx, "");
    if (this.outro.length) {
      return true;
    }
  }
};
var btoa = function() {
  throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
};
if (typeof window !== "undefined" && typeof window.btoa === "function") {
  btoa = function(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  };
} else if (typeof Buffer === "function") {
  btoa = function(str) {
    return Buffer.from(str, "utf-8").toString("base64");
  };
}
var SourceMap = function SourceMap2(properties) {
  this.version = 3;
  this.file = properties.file;
  this.sources = properties.sources;
  this.sourcesContent = properties.sourcesContent;
  this.names = properties.names;
  this.mappings = encode(properties.mappings);
};
SourceMap.prototype.toString = function toString2() {
  return JSON.stringify(this);
};
SourceMap.prototype.toUrl = function toUrl() {
  return "data:application/json;charset=utf-8;base64," + btoa(this.toString());
};
function guessIndent(code2) {
  var lines = code2.split("\n");
  var tabbed = lines.filter(function(line) {
    return /^\t+/.test(line);
  });
  var spaced = lines.filter(function(line) {
    return /^ {2,}/.test(line);
  });
  if (tabbed.length === 0 && spaced.length === 0) {
    return null;
  }
  if (tabbed.length >= spaced.length) {
    return "	";
  }
  var min = spaced.reduce(function(previous, current2) {
    var numSpaces = /^ +/.exec(current2)[0].length;
    return Math.min(numSpaces, previous);
  }, Infinity);
  return new Array(min + 1).join(" ");
}
function getRelativePath(from2, to) {
  var fromParts = from2.split(/[/\\]/);
  var toParts = to.split(/[/\\]/);
  fromParts.pop();
  while (fromParts[0] === toParts[0]) {
    fromParts.shift();
    toParts.shift();
  }
  if (fromParts.length) {
    var i = fromParts.length;
    while (i--) {
      fromParts[i] = "..";
    }
  }
  return fromParts.concat(toParts).join("/");
}
var toString3 = Object.prototype.toString;
function isObject(thing) {
  return toString3.call(thing) === "[object Object]";
}
function getLocator(source) {
  var originalLines = source.split("\n");
  var lineOffsets = [];
  for (var i = 0, pos = 0; i < originalLines.length; i++) {
    lineOffsets.push(pos);
    pos += originalLines[i].length + 1;
  }
  return function locate2(index) {
    var i2 = 0;
    var j = lineOffsets.length;
    while (i2 < j) {
      var m = i2 + j >> 1;
      if (index < lineOffsets[m]) {
        j = m;
      } else {
        i2 = m + 1;
      }
    }
    var line = i2 - 1;
    var column = index - lineOffsets[line];
    return { line, column };
  };
}
var Mappings = function Mappings2(hires) {
  this.hires = hires;
  this.generatedCodeLine = 0;
  this.generatedCodeColumn = 0;
  this.raw = [];
  this.rawSegments = this.raw[this.generatedCodeLine] = [];
  this.pending = null;
};
Mappings.prototype.addEdit = function addEdit(sourceIndex, content, loc, nameIndex) {
  if (content.length) {
    var segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
    if (nameIndex >= 0) {
      segment.push(nameIndex);
    }
    this.rawSegments.push(segment);
  } else if (this.pending) {
    this.rawSegments.push(this.pending);
  }
  this.advance(content);
  this.pending = null;
};
Mappings.prototype.addUneditedChunk = function addUneditedChunk(sourceIndex, chunk, original, loc, sourcemapLocations) {
  var originalCharIndex = chunk.start;
  var first = true;
  while (originalCharIndex < chunk.end) {
    if (this.hires || first || sourcemapLocations.has(originalCharIndex)) {
      this.rawSegments.push([this.generatedCodeColumn, sourceIndex, loc.line, loc.column]);
    }
    if (original[originalCharIndex] === "\n") {
      loc.line += 1;
      loc.column = 0;
      this.generatedCodeLine += 1;
      this.raw[this.generatedCodeLine] = this.rawSegments = [];
      this.generatedCodeColumn = 0;
      first = true;
    } else {
      loc.column += 1;
      this.generatedCodeColumn += 1;
      first = false;
    }
    originalCharIndex += 1;
  }
  this.pending = null;
};
Mappings.prototype.advance = function advance(str) {
  if (!str) {
    return;
  }
  var lines = str.split("\n");
  if (lines.length > 1) {
    for (var i = 0; i < lines.length - 1; i++) {
      this.generatedCodeLine++;
      this.raw[this.generatedCodeLine] = this.rawSegments = [];
    }
    this.generatedCodeColumn = 0;
  }
  this.generatedCodeColumn += lines[lines.length - 1].length;
};
var n = "\n";
var warned = {
  insertLeft: false,
  insertRight: false,
  storeName: false
};
var MagicString = function MagicString2(string, options) {
  if (options === void 0)
    options = {};
  var chunk = new Chunk(0, string.length, string);
  Object.defineProperties(this, {
    original: { writable: true, value: string },
    outro: { writable: true, value: "" },
    intro: { writable: true, value: "" },
    firstChunk: { writable: true, value: chunk },
    lastChunk: { writable: true, value: chunk },
    lastSearchedChunk: { writable: true, value: chunk },
    byStart: { writable: true, value: {} },
    byEnd: { writable: true, value: {} },
    filename: { writable: true, value: options.filename },
    indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
    sourcemapLocations: { writable: true, value: new BitSet() },
    storedNames: { writable: true, value: {} },
    indentStr: { writable: true, value: guessIndent(string) }
  });
  this.byStart[0] = chunk;
  this.byEnd[string.length] = chunk;
};
MagicString.prototype.addSourcemapLocation = function addSourcemapLocation(char) {
  this.sourcemapLocations.add(char);
};
MagicString.prototype.append = function append(content) {
  if (typeof content !== "string") {
    throw new TypeError("outro content must be a string");
  }
  this.outro += content;
  return this;
};
MagicString.prototype.appendLeft = function appendLeft2(index, content) {
  if (typeof content !== "string") {
    throw new TypeError("inserted content must be a string");
  }
  this._split(index);
  var chunk = this.byEnd[index];
  if (chunk) {
    chunk.appendLeft(content);
  } else {
    this.intro += content;
  }
  return this;
};
MagicString.prototype.appendRight = function appendRight2(index, content) {
  if (typeof content !== "string") {
    throw new TypeError("inserted content must be a string");
  }
  this._split(index);
  var chunk = this.byStart[index];
  if (chunk) {
    chunk.appendRight(content);
  } else {
    this.outro += content;
  }
  return this;
};
MagicString.prototype.clone = function clone2() {
  var cloned = new MagicString(this.original, { filename: this.filename });
  var originalChunk = this.firstChunk;
  var clonedChunk = cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone();
  while (originalChunk) {
    cloned.byStart[clonedChunk.start] = clonedChunk;
    cloned.byEnd[clonedChunk.end] = clonedChunk;
    var nextOriginalChunk = originalChunk.next;
    var nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();
    if (nextClonedChunk) {
      clonedChunk.next = nextClonedChunk;
      nextClonedChunk.previous = clonedChunk;
      clonedChunk = nextClonedChunk;
    }
    originalChunk = nextOriginalChunk;
  }
  cloned.lastChunk = clonedChunk;
  if (this.indentExclusionRanges) {
    cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
  }
  cloned.sourcemapLocations = new BitSet(this.sourcemapLocations);
  cloned.intro = this.intro;
  cloned.outro = this.outro;
  return cloned;
};
MagicString.prototype.generateDecodedMap = function generateDecodedMap(options) {
  var this$1$1 = this;
  options = options || {};
  var sourceIndex = 0;
  var names = Object.keys(this.storedNames);
  var mappings = new Mappings(options.hires);
  var locate2 = getLocator(this.original);
  if (this.intro) {
    mappings.advance(this.intro);
  }
  this.firstChunk.eachNext(function(chunk) {
    var loc = locate2(chunk.start);
    if (chunk.intro.length) {
      mappings.advance(chunk.intro);
    }
    if (chunk.edited) {
      mappings.addEdit(sourceIndex, chunk.content, loc, chunk.storeName ? names.indexOf(chunk.original) : -1);
    } else {
      mappings.addUneditedChunk(sourceIndex, chunk, this$1$1.original, loc, this$1$1.sourcemapLocations);
    }
    if (chunk.outro.length) {
      mappings.advance(chunk.outro);
    }
  });
  return {
    file: options.file ? options.file.split(/[/\\]/).pop() : null,
    sources: [options.source ? getRelativePath(options.file || "", options.source) : null],
    sourcesContent: options.includeContent ? [this.original] : [null],
    names,
    mappings: mappings.raw
  };
};
MagicString.prototype.generateMap = function generateMap(options) {
  return new SourceMap(this.generateDecodedMap(options));
};
MagicString.prototype.getIndentString = function getIndentString() {
  return this.indentStr === null ? "	" : this.indentStr;
};
MagicString.prototype.indent = function indent(indentStr, options) {
  var pattern = /^[^\r\n]/gm;
  if (isObject(indentStr)) {
    options = indentStr;
    indentStr = void 0;
  }
  indentStr = indentStr !== void 0 ? indentStr : this.indentStr || "	";
  if (indentStr === "") {
    return this;
  }
  options = options || {};
  var isExcluded = {};
  if (options.exclude) {
    var exclusions = typeof options.exclude[0] === "number" ? [options.exclude] : options.exclude;
    exclusions.forEach(function(exclusion) {
      for (var i = exclusion[0]; i < exclusion[1]; i += 1) {
        isExcluded[i] = true;
      }
    });
  }
  var shouldIndentNextCharacter = options.indentStart !== false;
  var replacer = function(match) {
    if (shouldIndentNextCharacter) {
      return "" + indentStr + match;
    }
    shouldIndentNextCharacter = true;
    return match;
  };
  this.intro = this.intro.replace(pattern, replacer);
  var charIndex = 0;
  var chunk = this.firstChunk;
  while (chunk) {
    var end = chunk.end;
    if (chunk.edited) {
      if (!isExcluded[charIndex]) {
        chunk.content = chunk.content.replace(pattern, replacer);
        if (chunk.content.length) {
          shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === "\n";
        }
      }
    } else {
      charIndex = chunk.start;
      while (charIndex < end) {
        if (!isExcluded[charIndex]) {
          var char = this.original[charIndex];
          if (char === "\n") {
            shouldIndentNextCharacter = true;
          } else if (char !== "\r" && shouldIndentNextCharacter) {
            shouldIndentNextCharacter = false;
            if (charIndex === chunk.start) {
              chunk.prependRight(indentStr);
            } else {
              this._splitChunk(chunk, charIndex);
              chunk = chunk.next;
              chunk.prependRight(indentStr);
            }
          }
        }
        charIndex += 1;
      }
    }
    charIndex = chunk.end;
    chunk = chunk.next;
  }
  this.outro = this.outro.replace(pattern, replacer);
  return this;
};
MagicString.prototype.insert = function insert() {
  throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)");
};
MagicString.prototype.insertLeft = function insertLeft(index, content) {
  if (!warned.insertLeft) {
    console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead");
    warned.insertLeft = true;
  }
  return this.appendLeft(index, content);
};
MagicString.prototype.insertRight = function insertRight(index, content) {
  if (!warned.insertRight) {
    console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead");
    warned.insertRight = true;
  }
  return this.prependRight(index, content);
};
MagicString.prototype.move = function move(start, end, index) {
  if (index >= start && index <= end) {
    throw new Error("Cannot move a selection inside itself");
  }
  this._split(start);
  this._split(end);
  this._split(index);
  var first = this.byStart[start];
  var last = this.byEnd[end];
  var oldLeft = first.previous;
  var oldRight = last.next;
  var newRight = this.byStart[index];
  if (!newRight && last === this.lastChunk) {
    return this;
  }
  var newLeft = newRight ? newRight.previous : this.lastChunk;
  if (oldLeft) {
    oldLeft.next = oldRight;
  }
  if (oldRight) {
    oldRight.previous = oldLeft;
  }
  if (newLeft) {
    newLeft.next = first;
  }
  if (newRight) {
    newRight.previous = last;
  }
  if (!first.previous) {
    this.firstChunk = last.next;
  }
  if (!last.next) {
    this.lastChunk = first.previous;
    this.lastChunk.next = null;
  }
  first.previous = newLeft;
  last.next = newRight || null;
  if (!newLeft) {
    this.firstChunk = first;
  }
  if (!newRight) {
    this.lastChunk = last;
  }
  return this;
};
MagicString.prototype.overwrite = function overwrite(start, end, content, options) {
  if (typeof content !== "string") {
    throw new TypeError("replacement content must be a string");
  }
  while (start < 0) {
    start += this.original.length;
  }
  while (end < 0) {
    end += this.original.length;
  }
  if (end > this.original.length) {
    throw new Error("end is out of bounds");
  }
  if (start === end) {
    throw new Error("Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead");
  }
  this._split(start);
  this._split(end);
  if (options === true) {
    if (!warned.storeName) {
      console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string");
      warned.storeName = true;
    }
    options = { storeName: true };
  }
  var storeName = options !== void 0 ? options.storeName : false;
  var contentOnly = options !== void 0 ? options.contentOnly : false;
  if (storeName) {
    var original = this.original.slice(start, end);
    Object.defineProperty(this.storedNames, original, { writable: true, value: true, enumerable: true });
  }
  var first = this.byStart[start];
  var last = this.byEnd[end];
  if (first) {
    var chunk = first;
    while (chunk !== last) {
      if (chunk.next !== this.byStart[chunk.end]) {
        throw new Error("Cannot overwrite across a split point");
      }
      chunk = chunk.next;
      chunk.edit("", false);
    }
    first.edit(content, storeName, contentOnly);
  } else {
    var newChunk = new Chunk(start, end, "").edit(content, storeName);
    last.next = newChunk;
    newChunk.previous = last;
  }
  return this;
};
MagicString.prototype.prepend = function prepend(content) {
  if (typeof content !== "string") {
    throw new TypeError("outro content must be a string");
  }
  this.intro = content + this.intro;
  return this;
};
MagicString.prototype.prependLeft = function prependLeft2(index, content) {
  if (typeof content !== "string") {
    throw new TypeError("inserted content must be a string");
  }
  this._split(index);
  var chunk = this.byEnd[index];
  if (chunk) {
    chunk.prependLeft(content);
  } else {
    this.intro = content + this.intro;
  }
  return this;
};
MagicString.prototype.prependRight = function prependRight2(index, content) {
  if (typeof content !== "string") {
    throw new TypeError("inserted content must be a string");
  }
  this._split(index);
  var chunk = this.byStart[index];
  if (chunk) {
    chunk.prependRight(content);
  } else {
    this.outro = content + this.outro;
  }
  return this;
};
MagicString.prototype.remove = function remove(start, end) {
  while (start < 0) {
    start += this.original.length;
  }
  while (end < 0) {
    end += this.original.length;
  }
  if (start === end) {
    return this;
  }
  if (start < 0 || end > this.original.length) {
    throw new Error("Character is out of bounds");
  }
  if (start > end) {
    throw new Error("end must be greater than start");
  }
  this._split(start);
  this._split(end);
  var chunk = this.byStart[start];
  while (chunk) {
    chunk.intro = "";
    chunk.outro = "";
    chunk.edit("");
    chunk = end > chunk.end ? this.byStart[chunk.end] : null;
  }
  return this;
};
MagicString.prototype.lastChar = function lastChar() {
  if (this.outro.length) {
    return this.outro[this.outro.length - 1];
  }
  var chunk = this.lastChunk;
  do {
    if (chunk.outro.length) {
      return chunk.outro[chunk.outro.length - 1];
    }
    if (chunk.content.length) {
      return chunk.content[chunk.content.length - 1];
    }
    if (chunk.intro.length) {
      return chunk.intro[chunk.intro.length - 1];
    }
  } while (chunk = chunk.previous);
  if (this.intro.length) {
    return this.intro[this.intro.length - 1];
  }
  return "";
};
MagicString.prototype.lastLine = function lastLine() {
  var lineIndex = this.outro.lastIndexOf(n);
  if (lineIndex !== -1) {
    return this.outro.substr(lineIndex + 1);
  }
  var lineStr = this.outro;
  var chunk = this.lastChunk;
  do {
    if (chunk.outro.length > 0) {
      lineIndex = chunk.outro.lastIndexOf(n);
      if (lineIndex !== -1) {
        return chunk.outro.substr(lineIndex + 1) + lineStr;
      }
      lineStr = chunk.outro + lineStr;
    }
    if (chunk.content.length > 0) {
      lineIndex = chunk.content.lastIndexOf(n);
      if (lineIndex !== -1) {
        return chunk.content.substr(lineIndex + 1) + lineStr;
      }
      lineStr = chunk.content + lineStr;
    }
    if (chunk.intro.length > 0) {
      lineIndex = chunk.intro.lastIndexOf(n);
      if (lineIndex !== -1) {
        return chunk.intro.substr(lineIndex + 1) + lineStr;
      }
      lineStr = chunk.intro + lineStr;
    }
  } while (chunk = chunk.previous);
  lineIndex = this.intro.lastIndexOf(n);
  if (lineIndex !== -1) {
    return this.intro.substr(lineIndex + 1) + lineStr;
  }
  return this.intro + lineStr;
};
MagicString.prototype.slice = function slice(start, end) {
  if (start === void 0)
    start = 0;
  if (end === void 0)
    end = this.original.length;
  while (start < 0) {
    start += this.original.length;
  }
  while (end < 0) {
    end += this.original.length;
  }
  var result = "";
  var chunk = this.firstChunk;
  while (chunk && (chunk.start > start || chunk.end <= start)) {
    if (chunk.start < end && chunk.end >= end) {
      return result;
    }
    chunk = chunk.next;
  }
  if (chunk && chunk.edited && chunk.start !== start) {
    throw new Error("Cannot use replaced character " + start + " as slice start anchor.");
  }
  var startChunk = chunk;
  while (chunk) {
    if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
      result += chunk.intro;
    }
    var containsEnd = chunk.start < end && chunk.end >= end;
    if (containsEnd && chunk.edited && chunk.end !== end) {
      throw new Error("Cannot use replaced character " + end + " as slice end anchor.");
    }
    var sliceStart = startChunk === chunk ? start - chunk.start : 0;
    var sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;
    result += chunk.content.slice(sliceStart, sliceEnd);
    if (chunk.outro && (!containsEnd || chunk.end === end)) {
      result += chunk.outro;
    }
    if (containsEnd) {
      break;
    }
    chunk = chunk.next;
  }
  return result;
};
MagicString.prototype.snip = function snip(start, end) {
  var clone4 = this.clone();
  clone4.remove(0, start);
  clone4.remove(end, clone4.original.length);
  return clone4;
};
MagicString.prototype._split = function _split(index) {
  if (this.byStart[index] || this.byEnd[index]) {
    return;
  }
  var chunk = this.lastSearchedChunk;
  var searchForward = index > chunk.end;
  while (chunk) {
    if (chunk.contains(index)) {
      return this._splitChunk(chunk, index);
    }
    chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];
  }
};
MagicString.prototype._splitChunk = function _splitChunk(chunk, index) {
  if (chunk.edited && chunk.content.length) {
    var loc = getLocator(this.original)(index);
    throw new Error("Cannot split a chunk that has already been edited (" + loc.line + ":" + loc.column + ' \u2013 "' + chunk.original + '")');
  }
  var newChunk = chunk.split(index);
  this.byEnd[index] = chunk;
  this.byStart[index] = newChunk;
  this.byEnd[newChunk.end] = newChunk;
  if (chunk === this.lastChunk) {
    this.lastChunk = newChunk;
  }
  this.lastSearchedChunk = chunk;
  return true;
};
MagicString.prototype.toString = function toString4() {
  var str = this.intro;
  var chunk = this.firstChunk;
  while (chunk) {
    str += chunk.toString();
    chunk = chunk.next;
  }
  return str + this.outro;
};
MagicString.prototype.isEmpty = function isEmpty() {
  var chunk = this.firstChunk;
  do {
    if (chunk.intro.length && chunk.intro.trim() || chunk.content.length && chunk.content.trim() || chunk.outro.length && chunk.outro.trim()) {
      return false;
    }
  } while (chunk = chunk.next);
  return true;
};
MagicString.prototype.length = function length() {
  var chunk = this.firstChunk;
  var length3 = 0;
  do {
    length3 += chunk.intro.length + chunk.content.length + chunk.outro.length;
  } while (chunk = chunk.next);
  return length3;
};
MagicString.prototype.trimLines = function trimLines() {
  return this.trim("[\\r\\n]");
};
MagicString.prototype.trim = function trim(charType) {
  return this.trimStart(charType).trimEnd(charType);
};
MagicString.prototype.trimEndAborted = function trimEndAborted(charType) {
  var rx = new RegExp((charType || "\\s") + "+$");
  this.outro = this.outro.replace(rx, "");
  if (this.outro.length) {
    return true;
  }
  var chunk = this.lastChunk;
  do {
    var end = chunk.end;
    var aborted = chunk.trimEnd(rx);
    if (chunk.end !== end) {
      if (this.lastChunk === chunk) {
        this.lastChunk = chunk.next;
      }
      this.byEnd[chunk.end] = chunk;
      this.byStart[chunk.next.start] = chunk.next;
      this.byEnd[chunk.next.end] = chunk.next;
    }
    if (aborted) {
      return true;
    }
    chunk = chunk.previous;
  } while (chunk);
  return false;
};
MagicString.prototype.trimEnd = function trimEnd2(charType) {
  this.trimEndAborted(charType);
  return this;
};
MagicString.prototype.trimStartAborted = function trimStartAborted(charType) {
  var rx = new RegExp("^" + (charType || "\\s") + "+");
  this.intro = this.intro.replace(rx, "");
  if (this.intro.length) {
    return true;
  }
  var chunk = this.firstChunk;
  do {
    var end = chunk.end;
    var aborted = chunk.trimStart(rx);
    if (chunk.end !== end) {
      if (chunk === this.lastChunk) {
        this.lastChunk = chunk.next;
      }
      this.byEnd[chunk.end] = chunk;
      this.byStart[chunk.next.start] = chunk.next;
      this.byEnd[chunk.next.end] = chunk.next;
    }
    if (aborted) {
      return true;
    }
    chunk = chunk.next;
  } while (chunk);
  return false;
};
MagicString.prototype.trimStart = function trimStart2(charType) {
  this.trimStartAborted(charType);
  return this;
};
var hasOwnProp = Object.prototype.hasOwnProperty;
var Bundle = function Bundle2(options) {
  if (options === void 0)
    options = {};
  this.intro = options.intro || "";
  this.separator = options.separator !== void 0 ? options.separator : "\n";
  this.sources = [];
  this.uniqueSources = [];
  this.uniqueSourceIndexByFilename = {};
};
Bundle.prototype.addSource = function addSource(source) {
  if (source instanceof MagicString) {
    return this.addSource({
      content: source,
      filename: source.filename,
      separator: this.separator
    });
  }
  if (!isObject(source) || !source.content) {
    throw new Error("bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`");
  }
  ["filename", "indentExclusionRanges", "separator"].forEach(function(option) {
    if (!hasOwnProp.call(source, option)) {
      source[option] = source.content[option];
    }
  });
  if (source.separator === void 0) {
    source.separator = this.separator;
  }
  if (source.filename) {
    if (!hasOwnProp.call(this.uniqueSourceIndexByFilename, source.filename)) {
      this.uniqueSourceIndexByFilename[source.filename] = this.uniqueSources.length;
      this.uniqueSources.push({ filename: source.filename, content: source.content.original });
    } else {
      var uniqueSource = this.uniqueSources[this.uniqueSourceIndexByFilename[source.filename]];
      if (source.content.original !== uniqueSource.content) {
        throw new Error("Illegal source: same filename (" + source.filename + "), different contents");
      }
    }
  }
  this.sources.push(source);
  return this;
};
Bundle.prototype.append = function append2(str, options) {
  this.addSource({
    content: new MagicString(str),
    separator: options && options.separator || ""
  });
  return this;
};
Bundle.prototype.clone = function clone3() {
  var bundle = new Bundle({
    intro: this.intro,
    separator: this.separator
  });
  this.sources.forEach(function(source) {
    bundle.addSource({
      filename: source.filename,
      content: source.content.clone(),
      separator: source.separator
    });
  });
  return bundle;
};
Bundle.prototype.generateDecodedMap = function generateDecodedMap2(options) {
  var this$1$1 = this;
  if (options === void 0)
    options = {};
  var names = [];
  this.sources.forEach(function(source) {
    Object.keys(source.content.storedNames).forEach(function(name) {
      if (!~names.indexOf(name)) {
        names.push(name);
      }
    });
  });
  var mappings = new Mappings(options.hires);
  if (this.intro) {
    mappings.advance(this.intro);
  }
  this.sources.forEach(function(source, i) {
    if (i > 0) {
      mappings.advance(this$1$1.separator);
    }
    var sourceIndex = source.filename ? this$1$1.uniqueSourceIndexByFilename[source.filename] : -1;
    var magicString = source.content;
    var locate2 = getLocator(magicString.original);
    if (magicString.intro) {
      mappings.advance(magicString.intro);
    }
    magicString.firstChunk.eachNext(function(chunk) {
      var loc = locate2(chunk.start);
      if (chunk.intro.length) {
        mappings.advance(chunk.intro);
      }
      if (source.filename) {
        if (chunk.edited) {
          mappings.addEdit(sourceIndex, chunk.content, loc, chunk.storeName ? names.indexOf(chunk.original) : -1);
        } else {
          mappings.addUneditedChunk(sourceIndex, chunk, magicString.original, loc, magicString.sourcemapLocations);
        }
      } else {
        mappings.advance(chunk.content);
      }
      if (chunk.outro.length) {
        mappings.advance(chunk.outro);
      }
    });
    if (magicString.outro) {
      mappings.advance(magicString.outro);
    }
  });
  return {
    file: options.file ? options.file.split(/[/\\]/).pop() : null,
    sources: this.uniqueSources.map(function(source) {
      return options.file ? getRelativePath(options.file, source.filename) : source.filename;
    }),
    sourcesContent: this.uniqueSources.map(function(source) {
      return options.includeContent ? source.content : null;
    }),
    names,
    mappings: mappings.raw
  };
};
Bundle.prototype.generateMap = function generateMap2(options) {
  return new SourceMap(this.generateDecodedMap(options));
};
Bundle.prototype.getIndentString = function getIndentString2() {
  var indentStringCounts = {};
  this.sources.forEach(function(source) {
    var indentStr = source.content.indentStr;
    if (indentStr === null) {
      return;
    }
    if (!indentStringCounts[indentStr]) {
      indentStringCounts[indentStr] = 0;
    }
    indentStringCounts[indentStr] += 1;
  });
  return Object.keys(indentStringCounts).sort(function(a, b) {
    return indentStringCounts[a] - indentStringCounts[b];
  })[0] || "	";
};
Bundle.prototype.indent = function indent2(indentStr) {
  var this$1$1 = this;
  if (!arguments.length) {
    indentStr = this.getIndentString();
  }
  if (indentStr === "") {
    return this;
  }
  var trailingNewline = !this.intro || this.intro.slice(-1) === "\n";
  this.sources.forEach(function(source, i) {
    var separator = source.separator !== void 0 ? source.separator : this$1$1.separator;
    var indentStart = trailingNewline || i > 0 && /\r?\n$/.test(separator);
    source.content.indent(indentStr, {
      exclude: source.indentExclusionRanges,
      indentStart
    });
    trailingNewline = source.content.lastChar() === "\n";
  });
  if (this.intro) {
    this.intro = indentStr + this.intro.replace(/^[^\n]/gm, function(match, index) {
      return index > 0 ? indentStr + match : match;
    });
  }
  return this;
};
Bundle.prototype.prepend = function prepend2(str) {
  this.intro = str + this.intro;
  return this;
};
Bundle.prototype.toString = function toString5() {
  var this$1$1 = this;
  var body = this.sources.map(function(source, i) {
    var separator = source.separator !== void 0 ? source.separator : this$1$1.separator;
    var str = (i > 0 ? separator : "") + source.content.toString();
    return str;
  }).join("");
  return this.intro + body;
};
Bundle.prototype.isEmpty = function isEmpty2() {
  if (this.intro.length && this.intro.trim()) {
    return false;
  }
  if (this.sources.some(function(source) {
    return !source.content.isEmpty();
  })) {
    return false;
  }
  return true;
};
Bundle.prototype.length = function length2() {
  return this.sources.reduce(function(length3, source) {
    return length3 + source.content.length();
  }, this.intro.length);
};
Bundle.prototype.trimLines = function trimLines2() {
  return this.trim("[\\r\\n]");
};
Bundle.prototype.trim = function trim2(charType) {
  return this.trimStart(charType).trimEnd(charType);
};
Bundle.prototype.trimStart = function trimStart3(charType) {
  var rx = new RegExp("^" + (charType || "\\s") + "+");
  this.intro = this.intro.replace(rx, "");
  if (!this.intro) {
    var source;
    var i = 0;
    do {
      source = this.sources[i++];
      if (!source) {
        break;
      }
    } while (!source.content.trimStartAborted(charType));
  }
  return this;
};
Bundle.prototype.trimEnd = function trimEnd3(charType) {
  var rx = new RegExp((charType || "\\s") + "+$");
  var source;
  var i = this.sources.length - 1;
  do {
    source = this.sources[i--];
    if (!source) {
      this.intro = this.intro.replace(rx, "");
      break;
    }
  } while (!source.content.trimEndAborted(charType));
  return this;
};

// node_modules/buble/dist/buble-browser.es.js
var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};
var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
var keywords = {
  5: ecma5AndLessKeywords,
  6: ecma5AndLessKeywords + " const class extends export import super"
};
var keywordRelationalOperator = /^in(stanceof)?$/;
var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7B9\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 477, 28, 11, 0, 9, 21, 190, 52, 76, 44, 33, 24, 27, 35, 30, 0, 12, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 26, 230, 43, 117, 63, 32, 0, 257, 0, 11, 39, 8, 0, 22, 0, 12, 39, 3, 3, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 270, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 68, 12, 0, 67, 12, 65, 1, 31, 6129, 15, 754, 9486, 286, 82, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60, 67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541];
var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 525, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 280, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239];
function isInAstralSet(code2, set) {
  var pos = 65536;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code2) {
      return false;
    }
    pos += set[i + 1];
    if (pos >= code2) {
      return true;
    }
  }
}
function isIdentifierStart(code2, astral) {
  if (code2 < 65) {
    return code2 === 36;
  }
  if (code2 < 91) {
    return true;
  }
  if (code2 < 97) {
    return code2 === 95;
  }
  if (code2 < 123) {
    return true;
  }
  if (code2 <= 65535) {
    return code2 >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code2));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code2, astralIdentifierStartCodes);
}
function isIdentifierChar(code2, astral) {
  if (code2 < 48) {
    return code2 === 36;
  }
  if (code2 < 58) {
    return true;
  }
  if (code2 < 65) {
    return false;
  }
  if (code2 < 91) {
    return true;
  }
  if (code2 < 97) {
    return code2 === 95;
  }
  if (code2 < 123) {
    return true;
  }
  if (code2 <= 65535) {
    return code2 >= 170 && nonASCIIidentifier.test(String.fromCharCode(code2));
  }
  if (astral === false) {
    return false;
  }
  return isInAstralSet(code2, astralIdentifierStartCodes) || isInAstralSet(code2, astralIdentifierCodes);
}
var TokenType = function TokenType2(label, conf) {
  if (conf === void 0)
    conf = {};
  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};
function binop(name, prec) {
  return new TokenType(name, { beforeExpr: true, binop: prec });
}
var beforeExpr = { beforeExpr: true };
var startsExpr = { startsExpr: true };
var keywords$1 = {};
function kw(name, options) {
  if (options === void 0)
    options = {};
  options.keyword = name;
  return keywords$1[name] = new TokenType(name, options);
}
var types = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  eof: new TokenType("eof"),
  bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
  eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
  assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
  incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
  prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true }),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", { beforeExpr: true }),
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", { isLoop: true, beforeExpr: true }),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", { isLoop: true }),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", { isLoop: true }),
  _with: kw("with"),
  _new: kw("new", { beforeExpr: true, startsExpr: true }),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import"),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", { beforeExpr: true, binop: 7 }),
  _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
  _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
  _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
  _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
};
var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");
function isNewLine(code2, ecma2019String) {
  return code2 === 10 || code2 === 13 || !ecma2019String && (code2 === 8232 || code2 === 8233);
}
var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
var toString6 = ref.toString;
function has2(obj, propName) {
  return hasOwnProperty.call(obj, propName);
}
var isArray = Array.isArray || function(obj) {
  return toString6.call(obj) === "[object Array]";
};
var Position = function Position2(line, col) {
  this.line = line;
  this.column = col;
};
Position.prototype.offset = function offset(n2) {
  return new Position(this.line, this.column + n2);
};
var SourceLocation = function SourceLocation2(p, start, end) {
  this.start = start;
  this.end = end;
  if (p.sourceFile !== null) {
    this.source = p.sourceFile;
  }
};
function getLineInfo(input, offset2) {
  for (var line = 1, cur = 0; ; ) {
    lineBreakG.lastIndex = cur;
    var match = lineBreakG.exec(input);
    if (match && match.index < offset2) {
      ++line;
      cur = match.index + match[0].length;
    } else {
      return new Position(line, offset2 - cur);
    }
  }
}
var defaultOptions = {
  ecmaVersion: 9,
  sourceType: "script",
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: false,
  allowImportExportEverywhere: false,
  allowAwaitOutsideFunction: false,
  allowHashBang: false,
  locations: false,
  onToken: null,
  onComment: null,
  ranges: false,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: false
};
function getOptions(opts) {
  var options = {};
  for (var opt in defaultOptions) {
    options[opt] = opts && has2(opts, opt) ? opts[opt] : defaultOptions[opt];
  }
  if (options.ecmaVersion >= 2015) {
    options.ecmaVersion -= 2009;
  }
  if (options.allowReserved == null) {
    options.allowReserved = options.ecmaVersion < 5;
  }
  if (isArray(options.onToken)) {
    var tokens = options.onToken;
    options.onToken = function(token) {
      return tokens.push(token);
    };
  }
  if (isArray(options.onComment)) {
    options.onComment = pushComment(options, options.onComment);
  }
  return options;
}
function pushComment(options, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start,
      end
    };
    if (options.locations) {
      comment.loc = new SourceLocation(this, startLoc, endLoc);
    }
    if (options.ranges) {
      comment.range = [start, end];
    }
    array.push(comment);
  };
}
var SCOPE_TOP = 1;
var SCOPE_FUNCTION = 2;
var SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION;
var SCOPE_ASYNC = 4;
var SCOPE_GENERATOR = 8;
var SCOPE_ARROW = 16;
var SCOPE_SIMPLE_CATCH = 32;
function functionFlags(async, generator) {
  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
}
var BIND_NONE = 0;
var BIND_VAR = 1;
var BIND_LEXICAL = 2;
var BIND_FUNCTION = 3;
var BIND_SIMPLE_CATCH = 4;
var BIND_OUTSIDE = 5;
function keywordRegexp(words) {
  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$");
}
var Parser = function Parser2(options, input, startPos) {
  this.options = options = getOptions(options);
  this.sourceFile = options.sourceFile;
  this.keywords = keywordRegexp(keywords[options.ecmaVersion >= 6 ? 6 : 5]);
  var reserved2 = "";
  if (!options.allowReserved) {
    for (var v = options.ecmaVersion; ; v--) {
      if (reserved2 = reservedWords[v]) {
        break;
      }
    }
    if (options.sourceType === "module") {
      reserved2 += " await";
    }
  }
  this.reservedWords = keywordRegexp(reserved2);
  var reservedStrict = (reserved2 ? reserved2 + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = keywordRegexp(reservedStrict);
  this.reservedWordsStrictBind = keywordRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);
  this.containsEsc = false;
  if (startPos) {
    this.pos = startPos;
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }
  this.type = types.eof;
  this.value = null;
  this.start = this.end = this.pos;
  this.startLoc = this.endLoc = this.curPosition();
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;
  this.context = this.initialContext();
  this.exprAllowed = true;
  this.inModule = options.sourceType === "module";
  this.strict = this.inModule || this.strictDirective(this.pos);
  this.potentialArrowAt = -1;
  this.yieldPos = this.awaitPos = 0;
  this.labels = [];
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
    this.skipLineComment(2);
  }
  this.scopeStack = [];
  this.enterScope(SCOPE_TOP);
  this.regexpState = null;
};
var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true } };
Parser.prototype.parse = function parse() {
  var node = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(node);
};
prototypeAccessors.inFunction.get = function() {
  return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
};
prototypeAccessors.inGenerator.get = function() {
  return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0;
};
prototypeAccessors.inAsync.get = function() {
  return (this.currentVarScope().flags & SCOPE_ASYNC) > 0;
};
Parser.extend = function extend() {
  var plugins = [], len = arguments.length;
  while (len--)
    plugins[len] = arguments[len];
  var cls = this;
  for (var i = 0; i < plugins.length; i++) {
    cls = plugins[i](cls);
  }
  return cls;
};
Parser.parse = function parse2(input, options) {
  return new this(options, input).parse();
};
Parser.parseExpressionAt = function parseExpressionAt(input, pos, options) {
  var parser2 = new this(options, input, pos);
  parser2.nextToken();
  return parser2.parseExpression();
};
Parser.tokenizer = function tokenizer(input, options) {
  return new this(options, input);
};
Object.defineProperties(Parser.prototype, prototypeAccessors);
var pp = Parser.prototype;
var literal = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)"|;)/;
pp.strictDirective = function(start) {
  var this$1 = this;
  for (; ; ) {
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this$1.input)[0].length;
    var match = literal.exec(this$1.input.slice(start));
    if (!match) {
      return false;
    }
    if ((match[1] || match[2]) === "use strict") {
      return true;
    }
    start += match[0].length;
  }
};
pp.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true;
  } else {
    return false;
  }
};
pp.isContextual = function(name) {
  return this.type === types.name && this.value === name && !this.containsEsc;
};
pp.eatContextual = function(name) {
  if (!this.isContextual(name)) {
    return false;
  }
  this.next();
  return true;
};
pp.expectContextual = function(name) {
  if (!this.eatContextual(name)) {
    this.unexpected();
  }
};
pp.canInsertSemicolon = function() {
  return this.type === types.eof || this.type === types.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon) {
      this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
    }
    return true;
  }
};
pp.semicolon = function() {
  if (!this.eat(types.semi) && !this.insertSemicolon()) {
    this.unexpected();
  }
};
pp.afterTrailingComma = function(tokType, notNext) {
  if (this.type === tokType) {
    if (this.options.onTrailingComma) {
      this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
    }
    if (!notNext) {
      this.next();
    }
    return true;
  }
};
pp.expect = function(type) {
  this.eat(type) || this.unexpected();
};
pp.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};
function DestructuringErrors() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
}
pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) {
    return;
  }
  if (refDestructuringErrors.trailingComma > -1) {
    this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
  }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) {
    this.raiseRecoverable(parens, "Parenthesized pattern");
  }
};
pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  if (!refDestructuringErrors) {
    return false;
  }
  var shorthandAssign = refDestructuringErrors.shorthandAssign;
  var doubleProto = refDestructuringErrors.doubleProto;
  if (!andThrow) {
    return shorthandAssign >= 0 || doubleProto >= 0;
  }
  if (shorthandAssign >= 0) {
    this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
  }
  if (doubleProto >= 0) {
    this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
  }
};
pp.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
    this.raise(this.yieldPos, "Yield expression cannot be a default value");
  }
  if (this.awaitPos) {
    this.raise(this.awaitPos, "Await expression cannot be a default value");
  }
};
pp.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression") {
    return this.isSimpleAssignTarget(expr.expression);
  }
  return expr.type === "Identifier" || expr.type === "MemberExpression";
};
var pp$1 = Parser.prototype;
pp$1.parseTopLevel = function(node) {
  var this$1 = this;
  var exports = {};
  if (!node.body) {
    node.body = [];
  }
  while (this.type !== types.eof) {
    var stmt = this$1.parseStatement(null, true, exports);
    node.body.push(stmt);
  }
  this.adaptDirectivePrologue(node.body);
  this.next();
  if (this.options.ecmaVersion >= 6) {
    node.sourceType = this.options.sourceType;
  }
  return this.finishNode(node, "Program");
};
var loopLabel = { kind: "loop" };
var switchLabel = { kind: "switch" };
pp$1.isLet = function() {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
  if (nextCh === 91 || nextCh === 123) {
    return true;
  }
  if (isIdentifierStart(nextCh, true)) {
    var pos = next + 1;
    while (isIdentifierChar(this.input.charCodeAt(pos), true)) {
      ++pos;
    }
    var ident = this.input.slice(next, pos);
    if (!keywordRelationalOperator.test(ident)) {
      return true;
    }
  }
  return false;
};
pp$1.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
    return false;
  }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length;
  return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !isIdentifierChar(this.input.charAt(next + 8)));
};
pp$1.parseStatement = function(context, topLevel, exports) {
  var starttype = this.type, node = this.startNode(), kind;
  if (this.isLet()) {
    starttype = types._var;
    kind = "let";
  }
  switch (starttype) {
    case types._break:
    case types._continue:
      return this.parseBreakContinueStatement(node, starttype.keyword);
    case types._debugger:
      return this.parseDebuggerStatement(node);
    case types._do:
      return this.parseDoStatement(node);
    case types._for:
      return this.parseForStatement(node);
    case types._function:
      if (context && (this.strict || context !== "if") && this.options.ecmaVersion >= 6) {
        this.unexpected();
      }
      return this.parseFunctionStatement(node, false, !context);
    case types._class:
      if (context) {
        this.unexpected();
      }
      return this.parseClass(node, true);
    case types._if:
      return this.parseIfStatement(node);
    case types._return:
      return this.parseReturnStatement(node);
    case types._switch:
      return this.parseSwitchStatement(node);
    case types._throw:
      return this.parseThrowStatement(node);
    case types._try:
      return this.parseTryStatement(node);
    case types._const:
    case types._var:
      kind = kind || this.value;
      if (context && kind !== "var") {
        this.unexpected();
      }
      return this.parseVarStatement(node, kind);
    case types._while:
      return this.parseWhileStatement(node);
    case types._with:
      return this.parseWithStatement(node);
    case types.braceL:
      return this.parseBlock(true, node);
    case types.semi:
      return this.parseEmptyStatement(node);
    case types._export:
    case types._import:
      if (!this.options.allowImportExportEverywhere) {
        if (!topLevel) {
          this.raise(this.start, "'import' and 'export' may only appear at the top level");
        }
        if (!this.inModule) {
          this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
        }
      }
      return starttype === types._import ? this.parseImport(node) : this.parseExport(node, exports);
    default:
      if (this.isAsyncFunction()) {
        if (context) {
          this.unexpected();
        }
        this.next();
        return this.parseFunctionStatement(node, true, !context);
      }
      var maybeName = this.value, expr = this.parseExpression();
      if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
        return this.parseLabeledStatement(node, maybeName, expr, context);
      } else {
        return this.parseExpressionStatement(node, expr);
      }
  }
};
pp$1.parseBreakContinueStatement = function(node, keyword) {
  var this$1 = this;
  var isBreak = keyword === "break";
  this.next();
  if (this.eat(types.semi) || this.insertSemicolon()) {
    node.label = null;
  } else if (this.type !== types.name) {
    this.unexpected();
  } else {
    node.label = this.parseIdent();
    this.semicolon();
  }
  var i = 0;
  for (; i < this.labels.length; ++i) {
    var lab = this$1.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) {
        break;
      }
      if (node.label && isBreak) {
        break;
      }
    }
  }
  if (i === this.labels.length) {
    this.raise(node.start, "Unsyntactic " + keyword);
  }
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
};
pp$1.parseDebuggerStatement = function(node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement");
};
pp$1.parseDoStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("do");
  this.labels.pop();
  this.expect(types._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6) {
    this.eat(types.semi);
  } else {
    this.semicolon();
  }
  return this.finishNode(node, "DoWhileStatement");
};
pp$1.parseForStatement = function(node) {
  this.next();
  var awaitAt = this.options.ecmaVersion >= 9 && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction) && this.eatContextual("await") ? this.lastTokStart : -1;
  this.labels.push(loopLabel);
  this.enterScope(0);
  this.expect(types.parenL);
  if (this.type === types.semi) {
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, null);
  }
  var isLet = this.isLet();
  if (this.type === types._var || this.type === types._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    if ((this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init$1.declarations.length === 1 && !(kind !== "var" && init$1.declarations[0].init)) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types._in) {
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
        } else {
          node.await = awaitAt > -1;
        }
      }
      return this.parseForIn(node, init$1);
    }
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, init$1);
  }
  var refDestructuringErrors = new DestructuringErrors();
  var init = this.parseExpression(true, refDestructuringErrors);
  if (this.type === types._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) {
    if (this.options.ecmaVersion >= 9) {
      if (this.type === types._in) {
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
      } else {
        node.await = awaitAt > -1;
      }
    }
    this.toAssignable(init, false, refDestructuringErrors);
    this.checkLVal(init);
    return this.parseForIn(node, init);
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  if (awaitAt > -1) {
    this.unexpected(awaitAt);
  }
  return this.parseFor(node, init);
};
pp$1.parseFunctionStatement = function(node, isAsync, declarationPosition) {
  this.next();
  return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
};
pp$1.parseIfStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  node.consequent = this.parseStatement("if");
  node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
  return this.finishNode(node, "IfStatement");
};
pp$1.parseReturnStatement = function(node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
    this.raise(this.start, "'return' outside of function");
  }
  this.next();
  if (this.eat(types.semi) || this.insertSemicolon()) {
    node.argument = null;
  } else {
    node.argument = this.parseExpression();
    this.semicolon();
  }
  return this.finishNode(node, "ReturnStatement");
};
pp$1.parseSwitchStatement = function(node) {
  var this$1 = this;
  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types.braceL);
  this.labels.push(switchLabel);
  this.enterScope(0);
  var cur;
  for (var sawDefault = false; this.type !== types.braceR; ) {
    if (this$1.type === types._case || this$1.type === types._default) {
      var isCase = this$1.type === types._case;
      if (cur) {
        this$1.finishNode(cur, "SwitchCase");
      }
      node.cases.push(cur = this$1.startNode());
      cur.consequent = [];
      this$1.next();
      if (isCase) {
        cur.test = this$1.parseExpression();
      } else {
        if (sawDefault) {
          this$1.raiseRecoverable(this$1.lastTokStart, "Multiple default clauses");
        }
        sawDefault = true;
        cur.test = null;
      }
      this$1.expect(types.colon);
    } else {
      if (!cur) {
        this$1.unexpected();
      }
      cur.consequent.push(this$1.parseStatement(null));
    }
  }
  this.exitScope();
  if (cur) {
    this.finishNode(cur, "SwitchCase");
  }
  this.next();
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement");
};
pp$1.parseThrowStatement = function(node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
    this.raise(this.lastTokEnd, "Illegal newline after throw");
  }
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement");
};
var empty = [];
pp$1.parseTryStatement = function(node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === types._catch) {
    var clause = this.startNode();
    this.next();
    if (this.eat(types.parenL)) {
      clause.param = this.parseBindingAtom();
      var simple = clause.param.type === "Identifier";
      this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
      this.checkLVal(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
      this.expect(types.parenR);
    } else {
      if (this.options.ecmaVersion < 10) {
        this.unexpected();
      }
      clause.param = null;
      this.enterScope(0);
    }
    clause.body = this.parseBlock(false);
    this.exitScope();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer) {
    this.raise(node.start, "Missing catch or finally clause");
  }
  return this.finishNode(node, "TryStatement");
};
pp$1.parseVarStatement = function(node, kind) {
  this.next();
  this.parseVar(node, false, kind);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration");
};
pp$1.parseWhileStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("while");
  this.labels.pop();
  return this.finishNode(node, "WhileStatement");
};
pp$1.parseWithStatement = function(node) {
  if (this.strict) {
    this.raise(this.start, "'with' in strict mode");
  }
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement("with");
  return this.finishNode(node, "WithStatement");
};
pp$1.parseEmptyStatement = function(node) {
  this.next();
  return this.finishNode(node, "EmptyStatement");
};
pp$1.parseLabeledStatement = function(node, maybeName, expr, context) {
  var this$1 = this;
  for (var i$1 = 0, list = this$1.labels; i$1 < list.length; i$1 += 1) {
    var label = list[i$1];
    if (label.name === maybeName) {
      this$1.raise(expr.start, "Label '" + maybeName + "' is already declared");
    }
  }
  var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
  for (var i = this.labels.length - 1; i >= 0; i--) {
    var label$1 = this$1.labels[i];
    if (label$1.statementStart === node.start) {
      label$1.statementStart = this$1.start;
      label$1.kind = kind;
    } else {
      break;
    }
  }
  this.labels.push({ name: maybeName, kind, statementStart: this.start });
  node.body = this.parseStatement(context);
  if (node.body.type === "ClassDeclaration" || node.body.type === "VariableDeclaration" && node.body.kind !== "var" || node.body.type === "FunctionDeclaration" && (this.strict || node.body.generator || node.body.async)) {
    this.raiseRecoverable(node.body.start, "Invalid labeled declaration");
  }
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement");
};
pp$1.parseExpressionStatement = function(node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement");
};
pp$1.parseBlock = function(createNewLexicalScope, node) {
  var this$1 = this;
  if (createNewLexicalScope === void 0)
    createNewLexicalScope = true;
  if (node === void 0)
    node = this.startNode();
  node.body = [];
  this.expect(types.braceL);
  if (createNewLexicalScope) {
    this.enterScope(0);
  }
  while (!this.eat(types.braceR)) {
    var stmt = this$1.parseStatement(null);
    node.body.push(stmt);
  }
  if (createNewLexicalScope) {
    this.exitScope();
  }
  return this.finishNode(node, "BlockStatement");
};
pp$1.parseFor = function(node, init) {
  node.init = init;
  this.expect(types.semi);
  node.test = this.type === types.semi ? null : this.parseExpression();
  this.expect(types.semi);
  node.update = this.type === types.parenR ? null : this.parseExpression();
  this.expect(types.parenR);
  this.exitScope();
  node.body = this.parseStatement("for");
  this.labels.pop();
  return this.finishNode(node, "ForStatement");
};
pp$1.parseForIn = function(node, init) {
  var type = this.type === types._in ? "ForInStatement" : "ForOfStatement";
  this.next();
  if (type === "ForInStatement") {
    if (init.type === "AssignmentPattern" || init.type === "VariableDeclaration" && init.declarations[0].init != null && (this.strict || init.declarations[0].id.type !== "Identifier")) {
      this.raise(init.start, "Invalid assignment in for-in loop head");
    }
  }
  node.left = init;
  node.right = type === "ForInStatement" ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(types.parenR);
  this.exitScope();
  node.body = this.parseStatement("for");
  this.labels.pop();
  return this.finishNode(node, type);
};
pp$1.parseVar = function(node, isFor, kind) {
  var this$1 = this;
  node.declarations = [];
  node.kind = kind;
  for (; ; ) {
    var decl = this$1.startNode();
    this$1.parseVarId(decl, kind);
    if (this$1.eat(types.eq)) {
      decl.init = this$1.parseMaybeAssign(isFor);
    } else if (kind === "const" && !(this$1.type === types._in || this$1.options.ecmaVersion >= 6 && this$1.isContextual("of"))) {
      this$1.unexpected();
    } else if (decl.id.type !== "Identifier" && !(isFor && (this$1.type === types._in || this$1.isContextual("of")))) {
      this$1.raise(this$1.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this$1.finishNode(decl, "VariableDeclarator"));
    if (!this$1.eat(types.comma)) {
      break;
    }
  }
  return node;
};
pp$1.parseVarId = function(decl, kind) {
  decl.id = this.parseBindingAtom(kind);
  this.checkLVal(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
};
var FUNC_STATEMENT = 1;
var FUNC_HANGING_STATEMENT = 2;
var FUNC_NULLABLE_ID = 4;
pp$1.parseFunction = function(node, statement, allowExpressionBody, isAsync) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
    node.generator = this.eat(types.star);
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  if (statement & FUNC_STATEMENT) {
    node.id = statement & FUNC_NULLABLE_ID && this.type !== types.name ? null : this.parseIdent();
    if (node.id && !(statement & FUNC_HANGING_STATEMENT)) {
      this.checkLVal(node.id, this.inModule && !this.inFunction ? BIND_LEXICAL : BIND_FUNCTION);
    }
  }
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.enterScope(functionFlags(node.async, node.generator));
  if (!(statement & FUNC_STATEMENT)) {
    node.id = this.type === types.name ? this.parseIdent() : null;
  }
  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
};
pp$1.parseFunctionParams = function(node) {
  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};
pp$1.parseClass = function(node, isStatement) {
  var this$1 = this;
  this.next();
  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    var element = this$1.parseClassElement();
    if (element) {
      classBody.body.push(element);
      if (element.type === "MethodDefinition" && element.kind === "constructor") {
        if (hadConstructor) {
          this$1.raise(element.start, "Duplicate constructor in the same class");
        }
        hadConstructor = true;
      }
    }
  }
  node.body = this.finishNode(classBody, "ClassBody");
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
};
pp$1.parseClassElement = function() {
  var this$1 = this;
  if (this.eat(types.semi)) {
    return null;
  }
  var method = this.startNode();
  var tryContextual = function(k, noLineBreak) {
    if (noLineBreak === void 0)
      noLineBreak = false;
    var start = this$1.start, startLoc = this$1.startLoc;
    if (!this$1.eatContextual(k)) {
      return false;
    }
    if (this$1.type !== types.parenL && (!noLineBreak || !this$1.canInsertSemicolon())) {
      return true;
    }
    if (method.key) {
      this$1.unexpected();
    }
    method.computed = false;
    method.key = this$1.startNodeAt(start, startLoc);
    method.key.name = k;
    this$1.finishNode(method.key, "Identifier");
    return false;
  };
  method.kind = "method";
  method.static = tryContextual("static");
  var isGenerator = this.eat(types.star);
  var isAsync = false;
  if (!isGenerator) {
    if (this.options.ecmaVersion >= 8 && tryContextual("async", true)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    } else if (tryContextual("get")) {
      method.kind = "get";
    } else if (tryContextual("set")) {
      method.kind = "set";
    }
  }
  if (!method.key) {
    this.parsePropertyName(method);
  }
  var key = method.key;
  if (!method.computed && !method.static && (key.type === "Identifier" && key.name === "constructor" || key.type === "Literal" && key.value === "constructor")) {
    if (method.kind !== "method") {
      this.raise(key.start, "Constructor can't have get/set modifier");
    }
    if (isGenerator) {
      this.raise(key.start, "Constructor can't be a generator");
    }
    if (isAsync) {
      this.raise(key.start, "Constructor can't be an async method");
    }
    method.kind = "constructor";
  } else if (method.static && key.type === "Identifier" && key.name === "prototype") {
    this.raise(key.start, "Classes may not have a static property named prototype");
  }
  this.parseClassMethod(method, isGenerator, isAsync);
  if (method.kind === "get" && method.value.params.length !== 0) {
    this.raiseRecoverable(method.value.start, "getter should have no params");
  }
  if (method.kind === "set" && method.value.params.length !== 1) {
    this.raiseRecoverable(method.value.start, "setter should have exactly one param");
  }
  if (method.kind === "set" && method.value.params[0].type === "RestElement") {
    this.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params");
  }
  return method;
};
pp$1.parseClassMethod = function(method, isGenerator, isAsync) {
  method.value = this.parseMethod(isGenerator, isAsync);
  return this.finishNode(method, "MethodDefinition");
};
pp$1.parseClassId = function(node, isStatement) {
  node.id = this.type === types.name ? this.parseIdent() : isStatement === true ? this.unexpected() : null;
};
pp$1.parseClassSuper = function(node) {
  node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
};
pp$1.parseExport = function(node, exports) {
  var this$1 = this;
  this.next();
  if (this.eat(types.star)) {
    this.expectContextual("from");
    if (this.type !== types.string) {
      this.unexpected();
    }
    node.source = this.parseExprAtom();
    this.semicolon();
    return this.finishNode(node, "ExportAllDeclaration");
  }
  if (this.eat(types._default)) {
    this.checkExport(exports, "default", this.lastTokStart);
    var isAsync;
    if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) {
        this.next();
      }
      node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync, true);
    } else if (this.type === types._class) {
      var cNode = this.startNode();
      node.declaration = this.parseClass(cNode, "nullableID");
    } else {
      node.declaration = this.parseMaybeAssign();
      this.semicolon();
    }
    return this.finishNode(node, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseStatement(null);
    if (node.declaration.type === "VariableDeclaration") {
      this.checkVariableExport(exports, node.declaration.declarations);
    } else {
      this.checkExport(exports, node.declaration.id.name, node.declaration.id.start);
    }
    node.specifiers = [];
    node.source = null;
  } else {
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers(exports);
    if (this.eatContextual("from")) {
      if (this.type !== types.string) {
        this.unexpected();
      }
      node.source = this.parseExprAtom();
    } else {
      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
        var spec = list[i];
        this$1.checkUnreserved(spec.local);
      }
      node.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration");
};
pp$1.checkExport = function(exports, name, pos) {
  if (!exports) {
    return;
  }
  if (has2(exports, name)) {
    this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
  }
  exports[name] = true;
};
pp$1.checkPatternExport = function(exports, pat) {
  var this$1 = this;
  var type = pat.type;
  if (type === "Identifier") {
    this.checkExport(exports, pat.name, pat.start);
  } else if (type === "ObjectPattern") {
    for (var i = 0, list = pat.properties; i < list.length; i += 1) {
      var prop = list[i];
      this$1.checkPatternExport(exports, prop);
    }
  } else if (type === "ArrayPattern") {
    for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];
      if (elt) {
        this$1.checkPatternExport(exports, elt);
      }
    }
  } else if (type === "Property") {
    this.checkPatternExport(exports, pat.value);
  } else if (type === "AssignmentPattern") {
    this.checkPatternExport(exports, pat.left);
  } else if (type === "RestElement") {
    this.checkPatternExport(exports, pat.argument);
  } else if (type === "ParenthesizedExpression") {
    this.checkPatternExport(exports, pat.expression);
  }
};
pp$1.checkVariableExport = function(exports, decls) {
  var this$1 = this;
  if (!exports) {
    return;
  }
  for (var i = 0, list = decls; i < list.length; i += 1) {
    var decl = list[i];
    this$1.checkPatternExport(exports, decl.id);
  }
};
pp$1.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
pp$1.parseExportSpecifiers = function(exports) {
  var this$1 = this;
  var nodes = [], first = true;
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this$1.expect(types.comma);
      if (this$1.afterTrailingComma(types.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var node = this$1.startNode();
    node.local = this$1.parseIdent(true);
    node.exported = this$1.eatContextual("as") ? this$1.parseIdent(true) : node.local;
    this$1.checkExport(exports, node.exported.name, node.exported.start);
    nodes.push(this$1.finishNode(node, "ExportSpecifier"));
  }
  return nodes;
};
pp$1.parseImport = function(node) {
  this.next();
  if (this.type === types.string) {
    node.specifiers = empty;
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration");
};
pp$1.parseImportSpecifiers = function() {
  var this$1 = this;
  var nodes = [], first = true;
  if (this.type === types.name) {
    var node = this.startNode();
    node.local = this.parseIdent();
    this.checkLVal(node.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
    if (!this.eat(types.comma)) {
      return nodes;
    }
  }
  if (this.type === types.star) {
    var node$1 = this.startNode();
    this.next();
    this.expectContextual("as");
    node$1.local = this.parseIdent();
    this.checkLVal(node$1.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
    return nodes;
  }
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this$1.expect(types.comma);
      if (this$1.afterTrailingComma(types.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var node$2 = this$1.startNode();
    node$2.imported = this$1.parseIdent(true);
    if (this$1.eatContextual("as")) {
      node$2.local = this$1.parseIdent();
    } else {
      this$1.checkUnreserved(node$2.imported);
      node$2.local = node$2.imported;
    }
    this$1.checkLVal(node$2.local, BIND_LEXICAL);
    nodes.push(this$1.finishNode(node$2, "ImportSpecifier"));
  }
  return nodes;
};
pp$1.adaptDirectivePrologue = function(statements) {
  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$1.isDirectiveCandidate = function(statement) {
  return statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && (this.input[statement.start] === '"' || this.input[statement.start] === "'");
};
var pp$2 = Parser.prototype;
pp$2.toAssignable = function(node, isBinding, refDestructuringErrors) {
  var this$1 = this;
  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
      case "Identifier":
        if (this.inAsync && node.name === "await") {
          this.raise(node.start, "Can not use 'await' as identifier inside an async function");
        }
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        node.type = "ObjectPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        for (var i = 0, list = node.properties; i < list.length; i += 1) {
          var prop = list[i];
          this$1.toAssignable(prop, isBinding);
          if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
            this$1.raise(prop.argument.start, "Unexpected token");
          }
        }
        break;
      case "Property":
        if (node.kind !== "init") {
          this.raise(node.key.start, "Object pattern can't contain getter or setter");
        }
        this.toAssignable(node.value, isBinding);
        break;
      case "ArrayExpression":
        node.type = "ArrayPattern";
        if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        this.toAssignableList(node.elements, isBinding);
        break;
      case "SpreadElement":
        node.type = "RestElement";
        this.toAssignable(node.argument, isBinding);
        if (node.argument.type === "AssignmentPattern") {
          this.raise(node.argument.start, "Rest elements cannot have a default value");
        }
        break;
      case "AssignmentExpression":
        if (node.operator !== "=") {
          this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
        }
        node.type = "AssignmentPattern";
        delete node.operator;
        this.toAssignable(node.left, isBinding);
      case "AssignmentPattern":
        break;
      case "ParenthesizedExpression":
        this.toAssignable(node.expression, isBinding);
        break;
      case "MemberExpression":
        if (!isBinding) {
          break;
        }
      default:
        this.raise(node.start, "Assigning to rvalue");
    }
  } else if (refDestructuringErrors) {
    this.checkPatternErrors(refDestructuringErrors, true);
  }
  return node;
};
pp$2.toAssignableList = function(exprList, isBinding) {
  var this$1 = this;
  var end = exprList.length;
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) {
      this$1.toAssignable(elt, isBinding);
    }
  }
  if (end) {
    var last = exprList[end - 1];
    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
      this.unexpected(last.argument.start);
    }
  }
  return exprList;
};
pp$2.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node, "SpreadElement");
};
pp$2.parseRestBinding = function() {
  var node = this.startNode();
  this.next();
  if (this.options.ecmaVersion === 6 && this.type !== types.name) {
    this.unexpected();
  }
  node.argument = this.parseBindingAtom();
  return this.finishNode(node, "RestElement");
};
pp$2.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
      case types.bracketL:
        var node = this.startNode();
        this.next();
        node.elements = this.parseBindingList(types.bracketR, true, true);
        return this.finishNode(node, "ArrayPattern");
      case types.braceL:
        return this.parseObj(true);
    }
  }
  return this.parseIdent();
};
pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
  var this$1 = this;
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) {
      first = false;
    } else {
      this$1.expect(types.comma);
    }
    if (allowEmpty && this$1.type === types.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this$1.afterTrailingComma(close)) {
      break;
    } else if (this$1.type === types.ellipsis) {
      var rest = this$1.parseRestBinding();
      this$1.parseBindingListItem(rest);
      elts.push(rest);
      if (this$1.type === types.comma) {
        this$1.raise(this$1.start, "Comma is not permitted after the rest element");
      }
      this$1.expect(close);
      break;
    } else {
      var elem = this$1.parseMaybeDefault(this$1.start, this$1.startLoc);
      this$1.parseBindingListItem(elem);
      elts.push(elem);
    }
  }
  return elts;
};
pp$2.parseBindingListItem = function(param) {
  return param;
};
pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) {
    return left;
  }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern");
};
pp$2.checkLVal = function(expr, bindingType, checkClashes) {
  var this$1 = this;
  if (bindingType === void 0)
    bindingType = BIND_NONE;
  switch (expr.type) {
    case "Identifier":
      if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
        this.raiseRecoverable(expr.start, (bindingType ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
      }
      if (checkClashes) {
        if (has2(checkClashes, expr.name)) {
          this.raiseRecoverable(expr.start, "Argument name clash");
        }
        checkClashes[expr.name] = true;
      }
      if (bindingType !== BIND_NONE && bindingType !== BIND_OUTSIDE) {
        this.declareName(expr.name, bindingType, expr.start);
      }
      break;
    case "MemberExpression":
      if (bindingType) {
        this.raiseRecoverable(expr.start, "Binding member expression");
      }
      break;
    case "ObjectPattern":
      for (var i = 0, list = expr.properties; i < list.length; i += 1) {
        var prop = list[i];
        this$1.checkLVal(prop, bindingType, checkClashes);
      }
      break;
    case "Property":
      this.checkLVal(expr.value, bindingType, checkClashes);
      break;
    case "ArrayPattern":
      for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
        var elem = list$1[i$1];
        if (elem) {
          this$1.checkLVal(elem, bindingType, checkClashes);
        }
      }
      break;
    case "AssignmentPattern":
      this.checkLVal(expr.left, bindingType, checkClashes);
      break;
    case "RestElement":
      this.checkLVal(expr.argument, bindingType, checkClashes);
      break;
    case "ParenthesizedExpression":
      this.checkLVal(expr.expression, bindingType, checkClashes);
      break;
    default:
      this.raise(expr.start, (bindingType ? "Binding" : "Assigning to") + " rvalue");
  }
};
var pp$3 = Parser.prototype;
pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
    return;
  }
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
    return;
  }
  var key = prop.key;
  var name;
  switch (key.type) {
    case "Identifier":
      name = key.name;
      break;
    case "Literal":
      name = String(key.value);
      break;
    default:
      return;
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) {
        if (refDestructuringErrors && refDestructuringErrors.doubleProto < 0) {
          refDestructuringErrors.doubleProto = key.start;
        } else {
          this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
        }
      }
      propHash.proto = true;
    }
    return;
  }
  name = "$" + name;
  var other = propHash[name];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition) {
      this.raiseRecoverable(key.start, "Redefinition of property");
    }
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};
pp$3.parseExpression = function(noIn, refDestructuringErrors) {
  var this$1 = this;
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
  if (this.type === types.comma) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(types.comma)) {
      node.expressions.push(this$1.parseMaybeAssign(noIn, refDestructuringErrors));
    }
    return this.finishNode(node, "SequenceExpression");
  }
  return expr;
};
pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) {
      return this.parseYield();
    } else {
      this.exprAllowed = false;
    }
  }
  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldShorthandAssign = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    oldShorthandAssign = refDestructuringErrors.shorthandAssign;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.shorthandAssign = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors();
    ownDestructuringErrors = true;
  }
  var startPos = this.start, startLoc = this.startLoc;
  if (this.type === types.parenL || this.type === types.name) {
    this.potentialArrowAt = this.start;
  }
  var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
  if (afterLeftParse) {
    left = afterLeftParse.call(this, left, startPos, startLoc);
  }
  if (this.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    node.left = this.type === types.eq ? this.toAssignable(left, false, refDestructuringErrors) : left;
    if (!ownDestructuringErrors) {
      DestructuringErrors.call(refDestructuringErrors);
    }
    refDestructuringErrors.shorthandAssign = -1;
    this.checkLVal(left);
    this.next();
    node.right = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "AssignmentExpression");
  } else {
    if (ownDestructuringErrors) {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
  }
  if (oldParenAssign > -1) {
    refDestructuringErrors.parenthesizedAssign = oldParenAssign;
  }
  if (oldTrailingComma > -1) {
    refDestructuringErrors.trailingComma = oldTrailingComma;
  }
  if (oldShorthandAssign > -1) {
    refDestructuringErrors.shorthandAssign = oldShorthandAssign;
  }
  return left;
};
pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(noIn, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  if (this.eat(types.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types.colon);
    node.alternate = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "ConditionalExpression");
  }
  return expr;
};
pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false);
  if (this.checkExpressionErrors(refDestructuringErrors)) {
    return expr;
  }
  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn);
};
pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
  var prec = this.type.binop;
  if (prec != null && (!noIn || this.type !== types._in)) {
    if (prec > minPrec) {
      var logical = this.type === types.logicalOR || this.type === types.logicalAND;
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical);
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn);
    }
  }
  return left;
};
pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.operator = op;
  node.right = right;
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
};
pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
  var this$1 = this;
  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.isContextual("await") && (this.inAsync || !this.inFunction && this.options.allowAwaitOutsideFunction)) {
    expr = this.parseAwait();
    sawUnary = true;
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === types.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(null, true);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) {
      this.checkLVal(node.argument);
    } else if (this.strict && node.operator === "delete" && node.argument.type === "Identifier") {
      this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
    } else {
      sawUnary = true;
    }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) {
      return expr;
    }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this$1.startNodeAt(startPos, startLoc);
      node$1.operator = this$1.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this$1.checkLVal(expr);
      this$1.next();
      expr = this$1.finishNode(node$1, "UpdateExpression");
    }
  }
  if (!sawUnary && this.eat(types.starstar)) {
    return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false);
  } else {
    return expr;
  }
};
pp$3.parseExprSubscripts = function(refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprAtom(refDestructuringErrors);
  var skipArrowSubscripts = expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")";
  if (this.checkExpressionErrors(refDestructuringErrors) || skipArrowSubscripts) {
    return expr;
  }
  var result = this.parseSubscripts(expr, startPos, startLoc);
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) {
      refDestructuringErrors.parenthesizedAssign = -1;
    }
    if (refDestructuringErrors.parenthesizedBind >= result.start) {
      refDestructuringErrors.parenthesizedBind = -1;
    }
  }
  return result;
};
pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
  var this$1 = this;
  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && this.input.slice(base.start, base.end) === "async";
  for (var computed = void 0; ; ) {
    if ((computed = this$1.eat(types.bracketL)) || this$1.eat(types.dot)) {
      var node = this$1.startNodeAt(startPos, startLoc);
      node.object = base;
      node.property = computed ? this$1.parseExpression() : this$1.parseIdent(true);
      node.computed = !!computed;
      if (computed) {
        this$1.expect(types.bracketR);
      }
      base = this$1.finishNode(node, "MemberExpression");
    } else if (!noCalls && this$1.eat(types.parenL)) {
      var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this$1.yieldPos, oldAwaitPos = this$1.awaitPos;
      this$1.yieldPos = 0;
      this$1.awaitPos = 0;
      var exprList = this$1.parseExprList(types.parenR, this$1.options.ecmaVersion >= 8, false, refDestructuringErrors);
      if (maybeAsyncArrow && !this$1.canInsertSemicolon() && this$1.eat(types.arrow)) {
        this$1.checkPatternErrors(refDestructuringErrors, false);
        this$1.checkYieldAwaitInDefaultParams();
        this$1.yieldPos = oldYieldPos;
        this$1.awaitPos = oldAwaitPos;
        return this$1.parseArrowExpression(this$1.startNodeAt(startPos, startLoc), exprList, true);
      }
      this$1.checkExpressionErrors(refDestructuringErrors, true);
      this$1.yieldPos = oldYieldPos || this$1.yieldPos;
      this$1.awaitPos = oldAwaitPos || this$1.awaitPos;
      var node$1 = this$1.startNodeAt(startPos, startLoc);
      node$1.callee = base;
      node$1.arguments = exprList;
      base = this$1.finishNode(node$1, "CallExpression");
    } else if (this$1.type === types.backQuote) {
      var node$2 = this$1.startNodeAt(startPos, startLoc);
      node$2.tag = base;
      node$2.quasi = this$1.parseTemplate({ isTagged: true });
      base = this$1.finishNode(node$2, "TaggedTemplateExpression");
    } else {
      return base;
    }
  }
};
pp$3.parseExprAtom = function(refDestructuringErrors) {
  var node, canBeArrow = this.potentialArrowAt === this.start;
  switch (this.type) {
    case types._super:
      if (!this.inFunction) {
        this.raise(this.start, "'super' outside of function or class");
      }
      node = this.startNode();
      this.next();
      if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL) {
        this.unexpected();
      }
      return this.finishNode(node, "Super");
    case types._this:
      node = this.startNode();
      this.next();
      return this.finishNode(node, "ThisExpression");
    case types.name:
      var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
      var id = this.parseIdent(this.type !== types.name);
      if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types._function)) {
        return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true);
      }
      if (canBeArrow && !this.canInsertSemicolon()) {
        if (this.eat(types.arrow)) {
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false);
        }
        if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types.name && !containsEsc) {
          id = this.parseIdent();
          if (this.canInsertSemicolon() || !this.eat(types.arrow)) {
            this.unexpected();
          }
          return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true);
        }
      }
      return id;
    case types.regexp:
      var value = this.value;
      node = this.parseLiteral(value.value);
      node.regex = { pattern: value.pattern, flags: value.flags };
      return node;
    case types.num:
    case types.string:
      return this.parseLiteral(this.value);
    case types._null:
    case types._true:
    case types._false:
      node = this.startNode();
      node.value = this.type === types._null ? null : this.type === types._true;
      node.raw = this.type.keyword;
      this.next();
      return this.finishNode(node, "Literal");
    case types.parenL:
      var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
      if (refDestructuringErrors) {
        if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
          refDestructuringErrors.parenthesizedAssign = start;
        }
        if (refDestructuringErrors.parenthesizedBind < 0) {
          refDestructuringErrors.parenthesizedBind = start;
        }
      }
      return expr;
    case types.bracketL:
      node = this.startNode();
      this.next();
      node.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
      return this.finishNode(node, "ArrayExpression");
    case types.braceL:
      return this.parseObj(false, refDestructuringErrors);
    case types._function:
      node = this.startNode();
      this.next();
      return this.parseFunction(node, 0);
    case types._class:
      return this.parseClass(this.startNode(), false);
    case types._new:
      return this.parseNew();
    case types.backQuote:
      return this.parseTemplate();
    default:
      this.unexpected();
  }
};
pp$3.parseLiteral = function(value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  this.next();
  return this.finishNode(node, "Literal");
};
pp$3.parseParenExpression = function() {
  this.expect(types.parenL);
  var val = this.parseExpression();
  this.expect(types.parenR);
  return val;
};
pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
  var this$1 = this;
  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    while (this.type !== types.parenR) {
      first ? first = false : this$1.expect(types.comma);
      if (allowTrailingComma && this$1.afterTrailingComma(types.parenR, true)) {
        lastIsComma = true;
        break;
      } else if (this$1.type === types.ellipsis) {
        spreadStart = this$1.start;
        exprList.push(this$1.parseParenItem(this$1.parseRestBinding()));
        if (this$1.type === types.comma) {
          this$1.raise(this$1.start, "Comma is not permitted after the rest element");
        }
        break;
      } else {
        exprList.push(this$1.parseMaybeAssign(false, refDestructuringErrors, this$1.parseParenItem));
      }
    }
    var innerEndPos = this.start, innerEndLoc = this.startLoc;
    this.expect(types.parenR);
    if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList);
    }
    if (!exprList.length || lastIsComma) {
      this.unexpected(this.lastTokStart);
    }
    if (spreadStart) {
      this.unexpected(spreadStart);
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }
  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression");
  } else {
    return val;
  }
};
pp$3.parseParenItem = function(item) {
  return item;
};
pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList);
};
var empty$1 = [];
pp$3.parseNew = function() {
  var node = this.startNode();
  var meta = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
    node.meta = meta;
    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target" || containsEsc) {
      this.raiseRecoverable(node.property.start, "The only valid meta property for new is new.target");
    }
    if (!this.inNonArrowFunction()) {
      this.raiseRecoverable(node.start, "new.target can only be used in functions");
    }
    return this.finishNode(node, "MetaProperty");
  }
  var startPos = this.start, startLoc = this.startLoc;
  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  if (this.eat(types.parenL)) {
    node.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false);
  } else {
    node.arguments = empty$1;
  }
  return this.finishNode(node, "NewExpression");
};
pp$3.parseTemplateElement = function(ref2) {
  var isTagged = ref2.isTagged;
  var elem = this.startNode();
  if (this.type === types.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types.backQuote;
  return this.finishNode(elem, "TemplateElement");
};
pp$3.parseTemplate = function(ref2) {
  var this$1 = this;
  if (ref2 === void 0)
    ref2 = {};
  var isTagged = ref2.isTagged;
  if (isTagged === void 0)
    isTagged = false;
  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement({ isTagged });
  node.quasis = [curElt];
  while (!curElt.tail) {
    if (this$1.type === types.eof) {
      this$1.raise(this$1.pos, "Unterminated template literal");
    }
    this$1.expect(types.dollarBraceL);
    node.expressions.push(this$1.parseExpression());
    this$1.expect(types.braceR);
    node.quasis.push(curElt = this$1.parseTemplateElement({ isTagged }));
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral");
};
pp$3.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
};
pp$3.parseObj = function(isPattern, refDestructuringErrors) {
  var this$1 = this;
  var node = this.startNode(), first = true, propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(types.braceR)) {
    if (!first) {
      this$1.expect(types.comma);
      if (this$1.afterTrailingComma(types.braceR)) {
        break;
      }
    } else {
      first = false;
    }
    var prop = this$1.parseProperty(isPattern, refDestructuringErrors);
    if (!isPattern) {
      this$1.checkPropClash(prop, propHash, refDestructuringErrors);
    }
    node.properties.push(prop);
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
};
pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
    if (isPattern) {
      prop.argument = this.parseIdent(false);
      if (this.type === types.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      return this.finishNode(prop, "RestElement");
    }
    if (this.type === types.parenL && refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0) {
        refDestructuringErrors.parenthesizedAssign = this.start;
      }
      if (refDestructuringErrors.parenthesizedBind < 0) {
        refDestructuringErrors.parenthesizedBind = this.start;
      }
    }
    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
      refDestructuringErrors.trailingComma = this.start;
    }
    return this.finishNode(prop, "SpreadElement");
  }
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern) {
      isGenerator = this.eat(types.star);
    }
  }
  var containsEsc = this.containsEsc;
  this.parsePropertyName(prop);
  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    this.parsePropertyName(prop, refDestructuringErrors);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
  return this.finishNode(prop, "Property");
};
pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
  if ((isGenerator || isAsync) && this.type === types.colon) {
    this.unexpected();
  }
  if (this.eat(types.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
    if (isPattern) {
      this.unexpected();
    }
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
  } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types.comma && this.type !== types.braceR)) {
    if (isGenerator || isAsync) {
      this.unexpected();
    }
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
    var paramCount = prop.kind === "get" ? 0 : 1;
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start;
      if (prop.kind === "get") {
        this.raiseRecoverable(start, "getter should have no params");
      } else {
        this.raiseRecoverable(start, "setter should have exactly one param");
      }
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
        this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
      }
    }
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    this.checkUnreserved(prop.key);
    prop.kind = "init";
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else if (this.type === types.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0) {
        refDestructuringErrors.shorthandAssign = this.start;
      }
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else {
      prop.value = prop.key;
    }
    prop.shorthand = true;
  } else {
    this.unexpected();
  }
};
pp$3.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types.bracketR);
      return prop.key;
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(true);
};
pp$3.initFunction = function(node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) {
    node.generator = node.expression = false;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = false;
  }
};
pp$3.parseMethod = function(isGenerator, isAsync) {
  var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos;
  this.initFunction(node);
  if (this.options.ecmaVersion >= 6) {
    node.generator = isGenerator;
  }
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.enterScope(functionFlags(isAsync, node.generator));
  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node, false);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  return this.finishNode(node, "FunctionExpression");
};
pp$3.parseArrowExpression = function(node, params, isAsync) {
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos;
  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8) {
    node.async = !!isAsync;
  }
  this.yieldPos = 0;
  this.awaitPos = 0;
  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true);
  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  return this.finishNode(node, "ArrowFunctionExpression");
};
pp$3.parseFunctionBody = function(node, isArrowFunction) {
  var isExpression = isArrowFunction && this.type !== types.braceL;
  var oldStrict = this.strict, useStrict = false;
  if (isExpression) {
    node.body = this.parseMaybeAssign();
    node.expression = true;
    this.checkParams(node, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      if (useStrict && nonSimple) {
        this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
      }
    }
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) {
      this.strict = true;
    }
    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && this.isSimpleParamList(node.params));
    node.body = this.parseBlock(false);
    node.expression = false;
    this.adaptDirectivePrologue(node.body.body);
    this.labels = oldLabels;
  }
  this.exitScope();
  if (this.strict && node.id) {
    this.checkLVal(node.id, BIND_OUTSIDE);
  }
  this.strict = oldStrict;
};
pp$3.isSimpleParamList = function(params) {
  for (var i = 0, list = params; i < list.length; i += 1) {
    var param = list[i];
    if (param.type !== "Identifier") {
      return false;
    }
  }
  return true;
};
pp$3.checkParams = function(node, allowDuplicates) {
  var this$1 = this;
  var nameHash = {};
  for (var i = 0, list = node.params; i < list.length; i += 1) {
    var param = list[i];
    this$1.checkLVal(param, BIND_VAR, allowDuplicates ? null : nameHash);
  }
};
pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var this$1 = this;
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this$1.expect(types.comma);
      if (allowTrailingComma && this$1.afterTrailingComma(close)) {
        break;
      }
    } else {
      first = false;
    }
    var elt = void 0;
    if (allowEmpty && this$1.type === types.comma) {
      elt = null;
    } else if (this$1.type === types.ellipsis) {
      elt = this$1.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this$1.type === types.comma && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this$1.start;
      }
    } else {
      elt = this$1.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts;
};
pp$3.checkUnreserved = function(ref2) {
  var start = ref2.start;
  var end = ref2.end;
  var name = ref2.name;
  if (this.inGenerator && name === "yield") {
    this.raiseRecoverable(start, "Can not use 'yield' as identifier inside a generator");
  }
  if (this.inAsync && name === "await") {
    this.raiseRecoverable(start, "Can not use 'await' as identifier inside an async function");
  }
  if (this.keywords.test(name)) {
    this.raise(start, "Unexpected keyword '" + name + "'");
  }
  if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
    return;
  }
  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re.test(name)) {
    if (!this.inAsync && name === "await") {
      this.raiseRecoverable(start, "Can not use keyword 'await' outside an async function");
    }
    this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
  }
};
pp$3.parseIdent = function(liberal, isBinding) {
  var node = this.startNode();
  if (liberal && this.options.allowReserved === "never") {
    liberal = false;
  }
  if (this.type === types.name) {
    node.name = this.value;
  } else if (this.type.keyword) {
    node.name = this.type.keyword;
    if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
  } else {
    this.unexpected();
  }
  this.next();
  this.finishNode(node, "Identifier");
  if (!liberal) {
    this.checkUnreserved(node);
  }
  return node;
};
pp$3.parseYield = function() {
  if (!this.yieldPos) {
    this.yieldPos = this.start;
  }
  var node = this.startNode();
  this.next();
  if (this.type === types.semi || this.canInsertSemicolon() || this.type !== types.star && !this.type.startsExpr) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types.star);
    node.argument = this.parseMaybeAssign();
  }
  return this.finishNode(node, "YieldExpression");
};
pp$3.parseAwait = function() {
  if (!this.awaitPos) {
    this.awaitPos = this.start;
  }
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary(null, true);
  return this.finishNode(node, "AwaitExpression");
};
var pp$4 = Parser.prototype;
pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos;
  err.loc = loc;
  err.raisedAt = this.pos;
  throw err;
};
pp$4.raiseRecoverable = pp$4.raise;
pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart);
  }
};
var pp$5 = Parser.prototype;
var Scope = function Scope2(flags) {
  this.flags = flags;
  this.var = [];
  this.lexical = [];
};
pp$5.enterScope = function(flags) {
  this.scopeStack.push(new Scope(flags));
};
pp$5.exitScope = function() {
  this.scopeStack.pop();
};
pp$5.declareName = function(name, bindingType, pos) {
  var this$1 = this;
  var redeclared = false;
  if (bindingType === BIND_LEXICAL) {
    var scope2 = this.currentScope();
    redeclared = scope2.lexical.indexOf(name) > -1 || scope2.var.indexOf(name) > -1;
    scope2.lexical.push(name);
  } else if (bindingType === BIND_SIMPLE_CATCH) {
    var scope$1 = this.currentScope();
    scope$1.lexical.push(name);
  } else if (bindingType === BIND_FUNCTION) {
    var scope$2 = this.currentScope();
    redeclared = scope$2.lexical.indexOf(name) > -1;
    scope$2.var.push(name);
  } else {
    for (var i = this.scopeStack.length - 1; i >= 0; --i) {
      var scope$3 = this$1.scopeStack[i];
      if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH) && scope$3.lexical[0] === name) {
        redeclared = true;
      }
      scope$3.var.push(name);
      if (scope$3.flags & SCOPE_VAR) {
        break;
      }
    }
  }
  if (redeclared) {
    this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
  }
};
pp$5.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
pp$5.currentVarScope = function() {
  var this$1 = this;
  for (var i = this.scopeStack.length - 1; ; i--) {
    var scope2 = this$1.scopeStack[i];
    if (scope2.flags & SCOPE_VAR) {
      return scope2;
    }
  }
};
pp$5.inNonArrowFunction = function() {
  var this$1 = this;
  for (var i = this.scopeStack.length - 1; i >= 0; i--) {
    if (this$1.scopeStack[i].flags & SCOPE_FUNCTION && !(this$1.scopeStack[i].flags & SCOPE_ARROW)) {
      return true;
    }
  }
  return false;
};
var Node = function Node2(parser2, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser2.options.locations) {
    this.loc = new SourceLocation(parser2, loc);
  }
  if (parser2.options.directSourceFile) {
    this.sourceFile = parser2.options.directSourceFile;
  }
  if (parser2.options.ranges) {
    this.range = [pos, 0];
  }
};
var pp$6 = Parser.prototype;
pp$6.startNode = function() {
  return new Node(this, this.start, this.startLoc);
};
pp$6.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc);
};
function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  if (this.options.locations) {
    node.loc.end = loc;
  }
  if (this.options.ranges) {
    node.range[1] = pos;
  }
  return node;
}
pp$6.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
};
pp$6.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc);
};
var TokContext = function TokContext2(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
};
var types$1 = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function(p) {
    return p.tryReadTemplateToken();
  }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};
var pp$7 = Parser.prototype;
pp$7.initialContext = function() {
  return [types$1.b_stat];
};
pp$7.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types$1.f_expr || parent === types$1.f_stat) {
    return true;
  }
  if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr)) {
    return !parent.isExpr;
  }
  if (prevType === types._return || prevType === types.name && this.exprAllowed) {
    return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  }
  if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow) {
    return true;
  }
  if (prevType === types.braceL) {
    return parent === types$1.b_stat;
  }
  if (prevType === types._var || prevType === types.name) {
    return false;
  }
  return !this.exprAllowed;
};
pp$7.inGeneratorContext = function() {
  var this$1 = this;
  for (var i = this.context.length - 1; i >= 1; i--) {
    var context = this$1.context[i];
    if (context.token === "function") {
      return context.generator;
    }
  }
  return false;
};
pp$7.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType === types.dot) {
    this.exprAllowed = false;
  } else if (update = type.updateContext) {
    update.call(this, prevType);
  } else {
    this.exprAllowed = type.beforeExpr;
  }
};
types.parenR.updateContext = types.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return;
  }
  var out = this.context.pop();
  if (out === types$1.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};
types.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
  this.exprAllowed = true;
};
types.dollarBraceL.updateContext = function() {
  this.context.push(types$1.b_tmpl);
  this.exprAllowed = true;
};
types.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
  this.exprAllowed = true;
};
types.incDec.updateContext = function() {
};
types._function.updateContext = types._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else && !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat)) {
    this.context.push(types$1.f_expr);
  } else {
    this.context.push(types$1.f_stat);
  }
  this.exprAllowed = false;
};
types.backQuote.updateContext = function() {
  if (this.curContext() === types$1.q_tmpl) {
    this.context.pop();
  } else {
    this.context.push(types$1.q_tmpl);
  }
  this.exprAllowed = false;
};
types.star.updateContext = function(prevType) {
  if (prevType === types._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types$1.f_expr) {
      this.context[index] = types$1.f_expr_gen;
    } else {
      this.context[index] = types$1.f_gen;
    }
  }
  this.exprAllowed = true;
};
types.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6 && prevType !== types.dot) {
    if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
      allowed = true;
    }
  }
  this.exprAllowed = allowed;
};
var data = {
  "$LONE": [
    "ASCII",
    "ASCII_Hex_Digit",
    "AHex",
    "Alphabetic",
    "Alpha",
    "Any",
    "Assigned",
    "Bidi_Control",
    "Bidi_C",
    "Bidi_Mirrored",
    "Bidi_M",
    "Case_Ignorable",
    "CI",
    "Cased",
    "Changes_When_Casefolded",
    "CWCF",
    "Changes_When_Casemapped",
    "CWCM",
    "Changes_When_Lowercased",
    "CWL",
    "Changes_When_NFKC_Casefolded",
    "CWKCF",
    "Changes_When_Titlecased",
    "CWT",
    "Changes_When_Uppercased",
    "CWU",
    "Dash",
    "Default_Ignorable_Code_Point",
    "DI",
    "Deprecated",
    "Dep",
    "Diacritic",
    "Dia",
    "Emoji",
    "Emoji_Component",
    "Emoji_Modifier",
    "Emoji_Modifier_Base",
    "Emoji_Presentation",
    "Extender",
    "Ext",
    "Grapheme_Base",
    "Gr_Base",
    "Grapheme_Extend",
    "Gr_Ext",
    "Hex_Digit",
    "Hex",
    "IDS_Binary_Operator",
    "IDSB",
    "IDS_Trinary_Operator",
    "IDST",
    "ID_Continue",
    "IDC",
    "ID_Start",
    "IDS",
    "Ideographic",
    "Ideo",
    "Join_Control",
    "Join_C",
    "Logical_Order_Exception",
    "LOE",
    "Lowercase",
    "Lower",
    "Math",
    "Noncharacter_Code_Point",
    "NChar",
    "Pattern_Syntax",
    "Pat_Syn",
    "Pattern_White_Space",
    "Pat_WS",
    "Quotation_Mark",
    "QMark",
    "Radical",
    "Regional_Indicator",
    "RI",
    "Sentence_Terminal",
    "STerm",
    "Soft_Dotted",
    "SD",
    "Terminal_Punctuation",
    "Term",
    "Unified_Ideograph",
    "UIdeo",
    "Uppercase",
    "Upper",
    "Variation_Selector",
    "VS",
    "White_Space",
    "space",
    "XID_Continue",
    "XIDC",
    "XID_Start",
    "XIDS"
  ],
  "General_Category": [
    "Cased_Letter",
    "LC",
    "Close_Punctuation",
    "Pe",
    "Connector_Punctuation",
    "Pc",
    "Control",
    "Cc",
    "cntrl",
    "Currency_Symbol",
    "Sc",
    "Dash_Punctuation",
    "Pd",
    "Decimal_Number",
    "Nd",
    "digit",
    "Enclosing_Mark",
    "Me",
    "Final_Punctuation",
    "Pf",
    "Format",
    "Cf",
    "Initial_Punctuation",
    "Pi",
    "Letter",
    "L",
    "Letter_Number",
    "Nl",
    "Line_Separator",
    "Zl",
    "Lowercase_Letter",
    "Ll",
    "Mark",
    "M",
    "Combining_Mark",
    "Math_Symbol",
    "Sm",
    "Modifier_Letter",
    "Lm",
    "Modifier_Symbol",
    "Sk",
    "Nonspacing_Mark",
    "Mn",
    "Number",
    "N",
    "Open_Punctuation",
    "Ps",
    "Other",
    "C",
    "Other_Letter",
    "Lo",
    "Other_Number",
    "No",
    "Other_Punctuation",
    "Po",
    "Other_Symbol",
    "So",
    "Paragraph_Separator",
    "Zp",
    "Private_Use",
    "Co",
    "Punctuation",
    "P",
    "punct",
    "Separator",
    "Z",
    "Space_Separator",
    "Zs",
    "Spacing_Mark",
    "Mc",
    "Surrogate",
    "Cs",
    "Symbol",
    "S",
    "Titlecase_Letter",
    "Lt",
    "Unassigned",
    "Cn",
    "Uppercase_Letter",
    "Lu"
  ],
  "Script": [
    "Adlam",
    "Adlm",
    "Ahom",
    "Anatolian_Hieroglyphs",
    "Hluw",
    "Arabic",
    "Arab",
    "Armenian",
    "Armn",
    "Avestan",
    "Avst",
    "Balinese",
    "Bali",
    "Bamum",
    "Bamu",
    "Bassa_Vah",
    "Bass",
    "Batak",
    "Batk",
    "Bengali",
    "Beng",
    "Bhaiksuki",
    "Bhks",
    "Bopomofo",
    "Bopo",
    "Brahmi",
    "Brah",
    "Braille",
    "Brai",
    "Buginese",
    "Bugi",
    "Buhid",
    "Buhd",
    "Canadian_Aboriginal",
    "Cans",
    "Carian",
    "Cari",
    "Caucasian_Albanian",
    "Aghb",
    "Chakma",
    "Cakm",
    "Cham",
    "Cherokee",
    "Cher",
    "Common",
    "Zyyy",
    "Coptic",
    "Copt",
    "Qaac",
    "Cuneiform",
    "Xsux",
    "Cypriot",
    "Cprt",
    "Cyrillic",
    "Cyrl",
    "Deseret",
    "Dsrt",
    "Devanagari",
    "Deva",
    "Duployan",
    "Dupl",
    "Egyptian_Hieroglyphs",
    "Egyp",
    "Elbasan",
    "Elba",
    "Ethiopic",
    "Ethi",
    "Georgian",
    "Geor",
    "Glagolitic",
    "Glag",
    "Gothic",
    "Goth",
    "Grantha",
    "Gran",
    "Greek",
    "Grek",
    "Gujarati",
    "Gujr",
    "Gurmukhi",
    "Guru",
    "Han",
    "Hani",
    "Hangul",
    "Hang",
    "Hanunoo",
    "Hano",
    "Hatran",
    "Hatr",
    "Hebrew",
    "Hebr",
    "Hiragana",
    "Hira",
    "Imperial_Aramaic",
    "Armi",
    "Inherited",
    "Zinh",
    "Qaai",
    "Inscriptional_Pahlavi",
    "Phli",
    "Inscriptional_Parthian",
    "Prti",
    "Javanese",
    "Java",
    "Kaithi",
    "Kthi",
    "Kannada",
    "Knda",
    "Katakana",
    "Kana",
    "Kayah_Li",
    "Kali",
    "Kharoshthi",
    "Khar",
    "Khmer",
    "Khmr",
    "Khojki",
    "Khoj",
    "Khudawadi",
    "Sind",
    "Lao",
    "Laoo",
    "Latin",
    "Latn",
    "Lepcha",
    "Lepc",
    "Limbu",
    "Limb",
    "Linear_A",
    "Lina",
    "Linear_B",
    "Linb",
    "Lisu",
    "Lycian",
    "Lyci",
    "Lydian",
    "Lydi",
    "Mahajani",
    "Mahj",
    "Malayalam",
    "Mlym",
    "Mandaic",
    "Mand",
    "Manichaean",
    "Mani",
    "Marchen",
    "Marc",
    "Masaram_Gondi",
    "Gonm",
    "Meetei_Mayek",
    "Mtei",
    "Mende_Kikakui",
    "Mend",
    "Meroitic_Cursive",
    "Merc",
    "Meroitic_Hieroglyphs",
    "Mero",
    "Miao",
    "Plrd",
    "Modi",
    "Mongolian",
    "Mong",
    "Mro",
    "Mroo",
    "Multani",
    "Mult",
    "Myanmar",
    "Mymr",
    "Nabataean",
    "Nbat",
    "New_Tai_Lue",
    "Talu",
    "Newa",
    "Nko",
    "Nkoo",
    "Nushu",
    "Nshu",
    "Ogham",
    "Ogam",
    "Ol_Chiki",
    "Olck",
    "Old_Hungarian",
    "Hung",
    "Old_Italic",
    "Ital",
    "Old_North_Arabian",
    "Narb",
    "Old_Permic",
    "Perm",
    "Old_Persian",
    "Xpeo",
    "Old_South_Arabian",
    "Sarb",
    "Old_Turkic",
    "Orkh",
    "Oriya",
    "Orya",
    "Osage",
    "Osge",
    "Osmanya",
    "Osma",
    "Pahawh_Hmong",
    "Hmng",
    "Palmyrene",
    "Palm",
    "Pau_Cin_Hau",
    "Pauc",
    "Phags_Pa",
    "Phag",
    "Phoenician",
    "Phnx",
    "Psalter_Pahlavi",
    "Phlp",
    "Rejang",
    "Rjng",
    "Runic",
    "Runr",
    "Samaritan",
    "Samr",
    "Saurashtra",
    "Saur",
    "Sharada",
    "Shrd",
    "Shavian",
    "Shaw",
    "Siddham",
    "Sidd",
    "SignWriting",
    "Sgnw",
    "Sinhala",
    "Sinh",
    "Sora_Sompeng",
    "Sora",
    "Soyombo",
    "Soyo",
    "Sundanese",
    "Sund",
    "Syloti_Nagri",
    "Sylo",
    "Syriac",
    "Syrc",
    "Tagalog",
    "Tglg",
    "Tagbanwa",
    "Tagb",
    "Tai_Le",
    "Tale",
    "Tai_Tham",
    "Lana",
    "Tai_Viet",
    "Tavt",
    "Takri",
    "Takr",
    "Tamil",
    "Taml",
    "Tangut",
    "Tang",
    "Telugu",
    "Telu",
    "Thaana",
    "Thaa",
    "Thai",
    "Tibetan",
    "Tibt",
    "Tifinagh",
    "Tfng",
    "Tirhuta",
    "Tirh",
    "Ugaritic",
    "Ugar",
    "Vai",
    "Vaii",
    "Warang_Citi",
    "Wara",
    "Yi",
    "Yiii",
    "Zanabazar_Square",
    "Zanb"
  ]
};
Array.prototype.push.apply(data.$LONE, data.General_Category);
data.gc = data.General_Category;
data.sc = data.Script_Extensions = data.scx = data.Script;
var pp$9 = Parser.prototype;
var RegExpValidationState = function RegExpValidationState2(parser2) {
  this.parser = parser2;
  this.validFlags = "gim" + (parser2.options.ecmaVersion >= 6 ? "uy" : "") + (parser2.options.ecmaVersion >= 9 ? "s" : "");
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = false;
  this.switchN = false;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = false;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = [];
  this.backReferenceNames = [];
};
RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
  var unicode = flags.indexOf("u") !== -1;
  this.start = start | 0;
  this.source = pattern + "";
  this.flags = flags;
  this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
  this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
};
RegExpValidationState.prototype.raise = function raise(message) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
};
RegExpValidationState.prototype.at = function at(i) {
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return -1;
  }
  var c = s.charCodeAt(i);
  if (!this.switchU || c <= 55295 || c >= 57344 || i + 1 >= l) {
    return c;
  }
  return (c << 10) + s.charCodeAt(i + 1) - 56613888;
};
RegExpValidationState.prototype.nextIndex = function nextIndex(i) {
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return l;
  }
  var c = s.charCodeAt(i);
  if (!this.switchU || c <= 55295 || c >= 57344 || i + 1 >= l) {
    return i + 1;
  }
  return i + 2;
};
RegExpValidationState.prototype.current = function current() {
  return this.at(this.pos);
};
RegExpValidationState.prototype.lookahead = function lookahead() {
  return this.at(this.nextIndex(this.pos));
};
RegExpValidationState.prototype.advance = function advance2() {
  this.pos = this.nextIndex(this.pos);
};
RegExpValidationState.prototype.eat = function eat(ch) {
  if (this.current() === ch) {
    this.advance();
    return true;
  }
  return false;
};
function codePointToString$1(ch) {
  if (ch <= 65535) {
    return String.fromCharCode(ch);
  }
  ch -= 65536;
  return String.fromCharCode((ch >> 10) + 55296, (ch & 1023) + 56320);
}
pp$9.validateRegExpFlags = function(state) {
  var this$1 = this;
  var validFlags = state.validFlags;
  var flags = state.flags;
  for (var i = 0; i < flags.length; i++) {
    var flag = flags.charAt(i);
    if (validFlags.indexOf(flag) === -1) {
      this$1.raise(state.start, "Invalid regular expression flag");
    }
    if (flags.indexOf(flag, i + 1) > -1) {
      this$1.raise(state.start, "Duplicate regular expression flag");
    }
  }
};
pp$9.validateRegExpPattern = function(state) {
  this.regexp_pattern(state);
  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
    state.switchN = true;
    this.regexp_pattern(state);
  }
};
pp$9.regexp_pattern = function(state) {
  state.pos = 0;
  state.lastIntValue = 0;
  state.lastStringValue = "";
  state.lastAssertionIsQuantifiable = false;
  state.numCapturingParens = 0;
  state.maxBackReference = 0;
  state.groupNames.length = 0;
  state.backReferenceNames.length = 0;
  this.regexp_disjunction(state);
  if (state.pos !== state.source.length) {
    if (state.eat(41)) {
      state.raise("Unmatched ')'");
    }
    if (state.eat(93) || state.eat(125)) {
      state.raise("Lone quantifier brackets");
    }
  }
  if (state.maxBackReference > state.numCapturingParens) {
    state.raise("Invalid escape");
  }
  for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
    var name = list[i];
    if (state.groupNames.indexOf(name) === -1) {
      state.raise("Invalid named capture referenced");
    }
  }
};
pp$9.regexp_disjunction = function(state) {
  var this$1 = this;
  this.regexp_alternative(state);
  while (state.eat(124)) {
    this$1.regexp_alternative(state);
  }
  if (this.regexp_eatQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  if (state.eat(123)) {
    state.raise("Lone quantifier brackets");
  }
};
pp$9.regexp_alternative = function(state) {
  while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
  }
};
pp$9.regexp_eatTerm = function(state) {
  if (this.regexp_eatAssertion(state)) {
    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
      if (state.switchU) {
        state.raise("Invalid quantifier");
      }
    }
    return true;
  }
  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
    this.regexp_eatQuantifier(state);
    return true;
  }
  return false;
};
pp$9.regexp_eatAssertion = function(state) {
  var start = state.pos;
  state.lastAssertionIsQuantifiable = false;
  if (state.eat(94) || state.eat(36)) {
    return true;
  }
  if (state.eat(92)) {
    if (state.eat(66) || state.eat(98)) {
      return true;
    }
    state.pos = start;
  }
  if (state.eat(40) && state.eat(63)) {
    var lookbehind = false;
    if (this.options.ecmaVersion >= 9) {
      lookbehind = state.eat(60);
    }
    if (state.eat(61) || state.eat(33)) {
      this.regexp_disjunction(state);
      if (!state.eat(41)) {
        state.raise("Unterminated group");
      }
      state.lastAssertionIsQuantifiable = !lookbehind;
      return true;
    }
  }
  state.pos = start;
  return false;
};
pp$9.regexp_eatQuantifier = function(state, noError) {
  if (noError === void 0)
    noError = false;
  if (this.regexp_eatQuantifierPrefix(state, noError)) {
    state.eat(63);
    return true;
  }
  return false;
};
pp$9.regexp_eatQuantifierPrefix = function(state, noError) {
  return state.eat(42) || state.eat(43) || state.eat(63) || this.regexp_eatBracedQuantifier(state, noError);
};
pp$9.regexp_eatBracedQuantifier = function(state, noError) {
  var start = state.pos;
  if (state.eat(123)) {
    var min = 0, max = -1;
    if (this.regexp_eatDecimalDigits(state)) {
      min = state.lastIntValue;
      if (state.eat(44) && this.regexp_eatDecimalDigits(state)) {
        max = state.lastIntValue;
      }
      if (state.eat(125)) {
        if (max !== -1 && max < min && !noError) {
          state.raise("numbers out of order in {} quantifier");
        }
        return true;
      }
    }
    if (state.switchU && !noError) {
      state.raise("Incomplete quantifier");
    }
    state.pos = start;
  }
  return false;
};
pp$9.regexp_eatAtom = function(state) {
  return this.regexp_eatPatternCharacters(state) || state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
};
pp$9.regexp_eatReverseSolidusAtomEscape = function(state) {
  var start = state.pos;
  if (state.eat(92)) {
    if (this.regexp_eatAtomEscape(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$9.regexp_eatUncapturingGroup = function(state) {
  var start = state.pos;
  if (state.eat(40)) {
    if (state.eat(63) && state.eat(58)) {
      this.regexp_disjunction(state);
      if (state.eat(41)) {
        return true;
      }
      state.raise("Unterminated group");
    }
    state.pos = start;
  }
  return false;
};
pp$9.regexp_eatCapturingGroup = function(state) {
  if (state.eat(40)) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(state);
    } else if (state.current() === 63) {
      state.raise("Invalid group");
    }
    this.regexp_disjunction(state);
    if (state.eat(41)) {
      state.numCapturingParens += 1;
      return true;
    }
    state.raise("Unterminated group");
  }
  return false;
};
pp$9.regexp_eatExtendedAtom = function(state) {
  return state.eat(46) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
};
pp$9.regexp_eatInvalidBracedQuantifier = function(state) {
  if (this.regexp_eatBracedQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  return false;
};
pp$9.regexp_eatSyntaxCharacter = function(state) {
  var ch = state.current();
  if (isSyntaxCharacter(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
function isSyntaxCharacter(ch) {
  return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
}
pp$9.regexp_eatPatternCharacters = function(state) {
  var start = state.pos;
  var ch = 0;
  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
    state.advance();
  }
  return state.pos !== start;
};
pp$9.regexp_eatExtendedPatternCharacter = function(state) {
  var ch = state.current();
  if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
    state.advance();
    return true;
  }
  return false;
};
pp$9.regexp_groupSpecifier = function(state) {
  if (state.eat(63)) {
    if (this.regexp_eatGroupName(state)) {
      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
        state.raise("Duplicate capture group name");
      }
      state.groupNames.push(state.lastStringValue);
      return;
    }
    state.raise("Invalid group");
  }
};
pp$9.regexp_eatGroupName = function(state) {
  state.lastStringValue = "";
  if (state.eat(60)) {
    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(62)) {
      return true;
    }
    state.raise("Invalid capture group name");
  }
  return false;
};
pp$9.regexp_eatRegExpIdentifierName = function(state) {
  state.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(state)) {
    state.lastStringValue += codePointToString$1(state.lastIntValue);
    while (this.regexp_eatRegExpIdentifierPart(state)) {
      state.lastStringValue += codePointToString$1(state.lastIntValue);
    }
    return true;
  }
  return false;
};
pp$9.regexp_eatRegExpIdentifierStart = function(state) {
  var start = state.pos;
  var ch = state.current();
  state.advance();
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierStart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierStart(ch) {
  return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
}
pp$9.regexp_eatRegExpIdentifierPart = function(state) {
  var start = state.pos;
  var ch = state.current();
  state.advance();
  if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierPart(ch)) {
    state.lastIntValue = ch;
    return true;
  }
  state.pos = start;
  return false;
};
function isRegExpIdentifierPart(ch) {
  return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
}
pp$9.regexp_eatAtomEscape = function(state) {
  if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
    return true;
  }
  if (state.switchU) {
    if (state.current() === 99) {
      state.raise("Invalid unicode escape");
    }
    state.raise("Invalid escape");
  }
  return false;
};
pp$9.regexp_eatBackReference = function(state) {
  var start = state.pos;
  if (this.regexp_eatDecimalEscape(state)) {
    var n2 = state.lastIntValue;
    if (state.switchU) {
      if (n2 > state.maxBackReference) {
        state.maxBackReference = n2;
      }
      return true;
    }
    if (n2 <= state.numCapturingParens) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$9.regexp_eatKGroupName = function(state) {
  if (state.eat(107)) {
    if (this.regexp_eatGroupName(state)) {
      state.backReferenceNames.push(state.lastStringValue);
      return true;
    }
    state.raise("Invalid named reference");
  }
  return false;
};
pp$9.regexp_eatCharacterEscape = function(state) {
  return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
};
pp$9.regexp_eatCControlLetter = function(state) {
  var start = state.pos;
  if (state.eat(99)) {
    if (this.regexp_eatControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return false;
};
pp$9.regexp_eatZero = function(state) {
  if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
    state.lastIntValue = 0;
    state.advance();
    return true;
  }
  return false;
};
pp$9.regexp_eatControlEscape = function(state) {
  var ch = state.current();
  if (ch === 116) {
    state.lastIntValue = 9;
    state.advance();
    return true;
  }
  if (ch === 110) {
    state.lastIntValue = 10;
    state.advance();
    return true;
  }
  if (ch === 118) {
    state.lastIntValue = 11;
    state.advance();
    return true;
  }
  if (ch === 102) {
    state.lastIntValue = 12;
    state.advance();
    return true;
  }
  if (ch === 114) {
    state.lastIntValue = 13;
    state.advance();
    return true;
  }
  return false;
};
pp$9.regexp_eatControlLetter = function(state) {
  var ch = state.current();
  if (isControlLetter(ch)) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
function isControlLetter(ch) {
  return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
}
pp$9.regexp_eatRegExpUnicodeEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(117)) {
    if (this.regexp_eatFixedHexDigits(state, 4)) {
      var lead = state.lastIntValue;
      if (state.switchU && lead >= 55296 && lead <= 56319) {
        var leadSurrogateEnd = state.pos;
        if (state.eat(92) && state.eat(117) && this.regexp_eatFixedHexDigits(state, 4)) {
          var trail = state.lastIntValue;
          if (trail >= 56320 && trail <= 57343) {
            state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
            return true;
          }
        }
        state.pos = leadSurrogateEnd;
        state.lastIntValue = lead;
      }
      return true;
    }
    if (state.switchU && state.eat(123) && this.regexp_eatHexDigits(state) && state.eat(125) && isValidUnicode(state.lastIntValue)) {
      return true;
    }
    if (state.switchU) {
      state.raise("Invalid unicode escape");
    }
    state.pos = start;
  }
  return false;
};
function isValidUnicode(ch) {
  return ch >= 0 && ch <= 1114111;
}
pp$9.regexp_eatIdentityEscape = function(state) {
  if (state.switchU) {
    if (this.regexp_eatSyntaxCharacter(state)) {
      return true;
    }
    if (state.eat(47)) {
      state.lastIntValue = 47;
      return true;
    }
    return false;
  }
  var ch = state.current();
  if (ch !== 99 && (!state.switchN || ch !== 107)) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$9.regexp_eatDecimalEscape = function(state) {
  state.lastIntValue = 0;
  var ch = state.current();
  if (ch >= 49 && ch <= 57) {
    do {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
      state.advance();
    } while ((ch = state.current()) >= 48 && ch <= 57);
    return true;
  }
  return false;
};
pp$9.regexp_eatCharacterClassEscape = function(state) {
  var ch = state.current();
  if (isCharacterClassEscape(ch)) {
    state.lastIntValue = -1;
    state.advance();
    return true;
  }
  if (state.switchU && this.options.ecmaVersion >= 9 && (ch === 80 || ch === 112)) {
    state.lastIntValue = -1;
    state.advance();
    if (state.eat(123) && this.regexp_eatUnicodePropertyValueExpression(state) && state.eat(125)) {
      return true;
    }
    state.raise("Invalid property name");
  }
  return false;
};
function isCharacterClassEscape(ch) {
  return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
}
pp$9.regexp_eatUnicodePropertyValueExpression = function(state) {
  var start = state.pos;
  if (this.regexp_eatUnicodePropertyName(state) && state.eat(61)) {
    var name = state.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(state)) {
      var value = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
      return true;
    }
  }
  state.pos = start;
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
    var nameOrValue = state.lastStringValue;
    this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
    return true;
  }
  return false;
};
pp$9.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
  if (!data.hasOwnProperty(name) || data[name].indexOf(value) === -1) {
    state.raise("Invalid property name");
  }
};
pp$9.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
  if (data.$LONE.indexOf(nameOrValue) === -1) {
    state.raise("Invalid property name");
  }
};
pp$9.regexp_eatUnicodePropertyName = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyNameCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString$1(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyNameCharacter(ch) {
  return isControlLetter(ch) || ch === 95;
}
pp$9.regexp_eatUnicodePropertyValue = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyValueCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString$1(ch);
    state.advance();
  }
  return state.lastStringValue !== "";
};
function isUnicodePropertyValueCharacter(ch) {
  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
}
pp$9.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
  return this.regexp_eatUnicodePropertyValue(state);
};
pp$9.regexp_eatCharacterClass = function(state) {
  if (state.eat(91)) {
    state.eat(94);
    this.regexp_classRanges(state);
    if (state.eat(93)) {
      return true;
    }
    state.raise("Unterminated character class");
  }
  return false;
};
pp$9.regexp_classRanges = function(state) {
  var this$1 = this;
  while (this.regexp_eatClassAtom(state)) {
    var left = state.lastIntValue;
    if (state.eat(45) && this$1.regexp_eatClassAtom(state)) {
      var right = state.lastIntValue;
      if (state.switchU && (left === -1 || right === -1)) {
        state.raise("Invalid character class");
      }
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
    }
  }
};
pp$9.regexp_eatClassAtom = function(state) {
  var start = state.pos;
  if (state.eat(92)) {
    if (this.regexp_eatClassEscape(state)) {
      return true;
    }
    if (state.switchU) {
      var ch$1 = state.current();
      if (ch$1 === 99 || isOctalDigit(ch$1)) {
        state.raise("Invalid class escape");
      }
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  var ch = state.current();
  if (ch !== 93) {
    state.lastIntValue = ch;
    state.advance();
    return true;
  }
  return false;
};
pp$9.regexp_eatClassEscape = function(state) {
  var start = state.pos;
  if (state.eat(98)) {
    state.lastIntValue = 8;
    return true;
  }
  if (state.switchU && state.eat(45)) {
    state.lastIntValue = 45;
    return true;
  }
  if (!state.switchU && state.eat(99)) {
    if (this.regexp_eatClassControlLetter(state)) {
      return true;
    }
    state.pos = start;
  }
  return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
};
pp$9.regexp_eatClassControlLetter = function(state) {
  var ch = state.current();
  if (isDecimalDigit(ch) || ch === 95) {
    state.lastIntValue = ch % 32;
    state.advance();
    return true;
  }
  return false;
};
pp$9.regexp_eatHexEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(120)) {
    if (this.regexp_eatFixedHexDigits(state, 2)) {
      return true;
    }
    if (state.switchU) {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return false;
};
pp$9.regexp_eatDecimalDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isDecimalDigit(ch = state.current())) {
    state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
    state.advance();
  }
  return state.pos !== start;
};
function isDecimalDigit(ch) {
  return ch >= 48 && ch <= 57;
}
pp$9.regexp_eatHexDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isHexDigit(ch = state.current())) {
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return state.pos !== start;
};
function isHexDigit(ch) {
  return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
}
function hexToInt(ch) {
  if (ch >= 65 && ch <= 70) {
    return 10 + (ch - 65);
  }
  if (ch >= 97 && ch <= 102) {
    return 10 + (ch - 97);
  }
  return ch - 48;
}
pp$9.regexp_eatLegacyOctalEscapeSequence = function(state) {
  if (this.regexp_eatOctalDigit(state)) {
    var n1 = state.lastIntValue;
    if (this.regexp_eatOctalDigit(state)) {
      var n2 = state.lastIntValue;
      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
      } else {
        state.lastIntValue = n1 * 8 + n2;
      }
    } else {
      state.lastIntValue = n1;
    }
    return true;
  }
  return false;
};
pp$9.regexp_eatOctalDigit = function(state) {
  var ch = state.current();
  if (isOctalDigit(ch)) {
    state.lastIntValue = ch - 48;
    state.advance();
    return true;
  }
  state.lastIntValue = 0;
  return false;
};
function isOctalDigit(ch) {
  return ch >= 48 && ch <= 55;
}
pp$9.regexp_eatFixedHexDigits = function(state, length3) {
  var start = state.pos;
  state.lastIntValue = 0;
  for (var i = 0; i < length3; ++i) {
    var ch = state.current();
    if (!isHexDigit(ch)) {
      state.pos = start;
      return false;
    }
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return true;
};
var Token = function Token2(p) {
  this.type = p.type;
  this.value = p.value;
  this.start = p.start;
  this.end = p.end;
  if (p.options.locations) {
    this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
  }
  if (p.options.ranges) {
    this.range = [p.start, p.end];
  }
};
var pp$8 = Parser.prototype;
pp$8.next = function() {
  if (this.options.onToken) {
    this.options.onToken(new Token(this));
  }
  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};
pp$8.getToken = function() {
  this.next();
  return new Token(this);
};
if (typeof Symbol !== "undefined") {
  pp$8[Symbol.iterator] = function() {
    var this$1 = this;
    return {
      next: function() {
        var token = this$1.getToken();
        return {
          done: token.type === types.eof,
          value: token
        };
      }
    };
  };
}
pp$8.curContext = function() {
  return this.context[this.context.length - 1];
};
pp$8.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) {
    this.skipSpace();
  }
  this.start = this.pos;
  if (this.options.locations) {
    this.startLoc = this.curPosition();
  }
  if (this.pos >= this.input.length) {
    return this.finishToken(types.eof);
  }
  if (curContext.override) {
    return curContext.override(this);
  } else {
    this.readToken(this.fullCharCodeAtPos());
  }
};
pp$8.readToken = function(code2) {
  if (isIdentifierStart(code2, this.options.ecmaVersion >= 6) || code2 === 92) {
    return this.readWord();
  }
  return this.getTokenFromCode(code2);
};
pp$8.fullCharCodeAtPos = function() {
  var code2 = this.input.charCodeAt(this.pos);
  if (code2 <= 55295 || code2 >= 57344) {
    return code2;
  }
  var next = this.input.charCodeAt(this.pos + 1);
  return (code2 << 10) + next - 56613888;
};
pp$8.skipBlockComment = function() {
  var this$1 = this;
  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) {
    this.raise(this.pos - 2, "Unterminated comment");
  }
  this.pos = end + 2;
  if (this.options.locations) {
    lineBreakG.lastIndex = start;
    var match;
    while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
      ++this$1.curLine;
      this$1.lineStart = match.index + match[0].length;
    }
  }
  if (this.options.onComment) {
    this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos, startLoc, this.curPosition());
  }
};
pp$8.skipLineComment = function(startSkip) {
  var this$1 = this;
  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch)) {
    ch = this$1.input.charCodeAt(++this$1.pos);
  }
  if (this.options.onComment) {
    this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos, startLoc, this.curPosition());
  }
};
pp$8.skipSpace = function() {
  var this$1 = this;
  loop:
    while (this.pos < this.input.length) {
      var ch = this$1.input.charCodeAt(this$1.pos);
      switch (ch) {
        case 32:
        case 160:
          ++this$1.pos;
          break;
        case 13:
          if (this$1.input.charCodeAt(this$1.pos + 1) === 10) {
            ++this$1.pos;
          }
        case 10:
        case 8232:
        case 8233:
          ++this$1.pos;
          if (this$1.options.locations) {
            ++this$1.curLine;
            this$1.lineStart = this$1.pos;
          }
          break;
        case 47:
          switch (this$1.input.charCodeAt(this$1.pos + 1)) {
            case 42:
              this$1.skipBlockComment();
              break;
            case 47:
              this$1.skipLineComment(2);
              break;
            default:
              break loop;
          }
          break;
        default:
          if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
            ++this$1.pos;
          } else {
            break loop;
          }
      }
    }
};
pp$8.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) {
    this.endLoc = this.curPosition();
  }
  var prevType = this.type;
  this.type = type;
  this.value = val;
  this.updateContext(prevType);
};
pp$8.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) {
    return this.readNumber(true);
  }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
    this.pos += 3;
    return this.finishToken(types.ellipsis);
  } else {
    ++this.pos;
    return this.finishToken(types.dot);
  }
};
pp$8.readToken_slash = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) {
    ++this.pos;
    return this.readRegexp();
  }
  if (next === 61) {
    return this.finishOp(types.assign, 2);
  }
  return this.finishOp(types.slash, 1);
};
pp$8.readToken_mult_modulo_exp = function(code2) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code2 === 42 ? types.star : types.modulo;
  if (this.options.ecmaVersion >= 7 && code2 === 42 && next === 42) {
    ++size;
    tokentype = types.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }
  if (next === 61) {
    return this.finishOp(types.assign, size + 1);
  }
  return this.finishOp(tokentype, size);
};
pp$8.readToken_pipe_amp = function(code2) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code2) {
    return this.finishOp(code2 === 124 ? types.logicalOR : types.logicalAND, 2);
  }
  if (next === 61) {
    return this.finishOp(types.assign, 2);
  }
  return this.finishOp(code2 === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
};
pp$8.readToken_caret = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types.assign, 2);
  }
  return this.finishOp(types.bitwiseXOR, 1);
};
pp$8.readToken_plus_min = function(code2) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code2) {
    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken();
    }
    return this.finishOp(types.incDec, 2);
  }
  if (next === 61) {
    return this.finishOp(types.assign, 2);
  }
  return this.finishOp(types.plusMin, 1);
};
pp$8.readToken_lt_gt = function(code2) {
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code2) {
    size = code2 === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) {
      return this.finishOp(types.assign, size + 1);
    }
    return this.finishOp(types.bitShift, size);
  }
  if (next === 33 && code2 === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken();
  }
  if (next === 61) {
    size = 2;
  }
  return this.finishOp(types.relational, size);
};
pp$8.readToken_eq_excl = function(code2) {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) {
    return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
  }
  if (code2 === 61 && next === 62 && this.options.ecmaVersion >= 6) {
    this.pos += 2;
    return this.finishToken(types.arrow);
  }
  return this.finishOp(code2 === 61 ? types.eq : types.prefix, 1);
};
pp$8.getTokenFromCode = function(code2) {
  switch (code2) {
    case 46:
      return this.readToken_dot();
    case 40:
      ++this.pos;
      return this.finishToken(types.parenL);
    case 41:
      ++this.pos;
      return this.finishToken(types.parenR);
    case 59:
      ++this.pos;
      return this.finishToken(types.semi);
    case 44:
      ++this.pos;
      return this.finishToken(types.comma);
    case 91:
      ++this.pos;
      return this.finishToken(types.bracketL);
    case 93:
      ++this.pos;
      return this.finishToken(types.bracketR);
    case 123:
      ++this.pos;
      return this.finishToken(types.braceL);
    case 125:
      ++this.pos;
      return this.finishToken(types.braceR);
    case 58:
      ++this.pos;
      return this.finishToken(types.colon);
    case 63:
      ++this.pos;
      return this.finishToken(types.question);
    case 96:
      if (this.options.ecmaVersion < 6) {
        break;
      }
      ++this.pos;
      return this.finishToken(types.backQuote);
    case 48:
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 120 || next === 88) {
        return this.readRadixNumber(16);
      }
      if (this.options.ecmaVersion >= 6) {
        if (next === 111 || next === 79) {
          return this.readRadixNumber(8);
        }
        if (next === 98 || next === 66) {
          return this.readRadixNumber(2);
        }
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(false);
    case 34:
    case 39:
      return this.readString(code2);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(code2);
    case 124:
    case 38:
      return this.readToken_pipe_amp(code2);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(code2);
    case 60:
    case 62:
      return this.readToken_lt_gt(code2);
    case 61:
    case 33:
      return this.readToken_eq_excl(code2);
    case 126:
      return this.finishOp(types.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + codePointToString(code2) + "'");
};
pp$8.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str);
};
pp$8.readRegexp = function() {
  var this$1 = this;
  var escaped, inClass, start = this.pos;
  for (; ; ) {
    if (this$1.pos >= this$1.input.length) {
      this$1.raise(start, "Unterminated regular expression");
    }
    var ch = this$1.input.charAt(this$1.pos);
    if (lineBreak.test(ch)) {
      this$1.raise(start, "Unterminated regular expression");
    }
    if (!escaped) {
      if (ch === "[") {
        inClass = true;
      } else if (ch === "]" && inClass) {
        inClass = false;
      } else if (ch === "/" && !inClass) {
        break;
      }
      escaped = ch === "\\";
    } else {
      escaped = false;
    }
    ++this$1.pos;
  }
  var pattern = this.input.slice(start, this.pos);
  ++this.pos;
  var flagsStart = this.pos;
  var flags = this.readWord1();
  if (this.containsEsc) {
    this.unexpected(flagsStart);
  }
  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
  state.reset(start, pattern, flags);
  this.validateRegExpFlags(state);
  this.validateRegExpPattern(state);
  var value = null;
  try {
    value = new RegExp(pattern, flags);
  } catch (e) {
  }
  return this.finishToken(types.regexp, { pattern, flags, value });
};
pp$8.readInt = function(radix, len) {
  var this$1 = this;
  var start = this.pos, total = 0;
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
    var code2 = this$1.input.charCodeAt(this$1.pos), val = void 0;
    if (code2 >= 97) {
      val = code2 - 97 + 10;
    } else if (code2 >= 65) {
      val = code2 - 65 + 10;
    } else if (code2 >= 48 && code2 <= 57) {
      val = code2 - 48;
    } else {
      val = Infinity;
    }
    if (val >= radix) {
      break;
    }
    ++this$1.pos;
    total = total * radix + val;
  }
  if (this.pos === start || len != null && this.pos - start !== len) {
    return null;
  }
  return total;
};
pp$8.readRadixNumber = function(radix) {
  this.pos += 2;
  var val = this.readInt(radix);
  if (val == null) {
    this.raise(this.start + 2, "Expected number in radix " + radix);
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  return this.finishToken(types.num, val);
};
pp$8.readNumber = function(startsWithDot) {
  var start = this.pos;
  if (!startsWithDot && this.readInt(10) === null) {
    this.raise(start, "Invalid number");
  }
  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
  if (octal && this.strict) {
    this.raise(start, "Invalid number");
  }
  if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
    octal = false;
  }
  var next = this.input.charCodeAt(this.pos);
  if (next === 46 && !octal) {
    ++this.pos;
    this.readInt(10);
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) {
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) {
      ++this.pos;
    }
    if (this.readInt(10) === null) {
      this.raise(start, "Invalid number");
    }
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) {
    this.raise(this.pos, "Identifier directly after number");
  }
  var str = this.input.slice(start, this.pos);
  var val = octal ? parseInt(str, 8) : parseFloat(str);
  return this.finishToken(types.num, val);
};
pp$8.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code2;
  if (ch === 123) {
    if (this.options.ecmaVersion < 6) {
      this.unexpected();
    }
    var codePos = ++this.pos;
    code2 = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code2 > 1114111) {
      this.invalidStringToken(codePos, "Code point out of bounds");
    }
  } else {
    code2 = this.readHexChar(4);
  }
  return code2;
};
function codePointToString(code2) {
  if (code2 <= 65535) {
    return String.fromCharCode(code2);
  }
  code2 -= 65536;
  return String.fromCharCode((code2 >> 10) + 55296, (code2 & 1023) + 56320);
}
pp$8.readString = function(quote) {
  var this$1 = this;
  var out = "", chunkStart = ++this.pos;
  for (; ; ) {
    if (this$1.pos >= this$1.input.length) {
      this$1.raise(this$1.start, "Unterminated string constant");
    }
    var ch = this$1.input.charCodeAt(this$1.pos);
    if (ch === quote) {
      break;
    }
    if (ch === 92) {
      out += this$1.input.slice(chunkStart, this$1.pos);
      out += this$1.readEscapedChar(false);
      chunkStart = this$1.pos;
    } else {
      if (isNewLine(ch, this$1.options.ecmaVersion >= 10)) {
        this$1.raise(this$1.start, "Unterminated string constant");
      }
      ++this$1.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types.string, out);
};
var INVALID_TEMPLATE_ESCAPE_ERROR = {};
pp$8.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err;
    }
  }
  this.inTemplateElement = false;
};
pp$8.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR;
  } else {
    this.raise(position, message);
  }
};
pp$8.readTmplToken = function() {
  var this$1 = this;
  var out = "", chunkStart = this.pos;
  for (; ; ) {
    if (this$1.pos >= this$1.input.length) {
      this$1.raise(this$1.start, "Unterminated template");
    }
    var ch = this$1.input.charCodeAt(this$1.pos);
    if (ch === 96 || ch === 36 && this$1.input.charCodeAt(this$1.pos + 1) === 123) {
      if (this$1.pos === this$1.start && (this$1.type === types.template || this$1.type === types.invalidTemplate)) {
        if (ch === 36) {
          this$1.pos += 2;
          return this$1.finishToken(types.dollarBraceL);
        } else {
          ++this$1.pos;
          return this$1.finishToken(types.backQuote);
        }
      }
      out += this$1.input.slice(chunkStart, this$1.pos);
      return this$1.finishToken(types.template, out);
    }
    if (ch === 92) {
      out += this$1.input.slice(chunkStart, this$1.pos);
      out += this$1.readEscapedChar(true);
      chunkStart = this$1.pos;
    } else if (isNewLine(ch)) {
      out += this$1.input.slice(chunkStart, this$1.pos);
      ++this$1.pos;
      switch (ch) {
        case 13:
          if (this$1.input.charCodeAt(this$1.pos) === 10) {
            ++this$1.pos;
          }
        case 10:
          out += "\n";
          break;
        default:
          out += String.fromCharCode(ch);
          break;
      }
      if (this$1.options.locations) {
        ++this$1.curLine;
        this$1.lineStart = this$1.pos;
      }
      chunkStart = this$1.pos;
    } else {
      ++this$1.pos;
    }
  }
};
pp$8.readInvalidTemplateToken = function() {
  var this$1 = this;
  for (; this.pos < this.input.length; this.pos++) {
    switch (this$1.input[this$1.pos]) {
      case "\\":
        ++this$1.pos;
        break;
      case "$":
        if (this$1.input[this$1.pos + 1] !== "{") {
          break;
        }
      case "`":
        return this$1.finishToken(types.invalidTemplate, this$1.input.slice(this$1.start, this$1.pos));
    }
  }
  this.raise(this.start, "Unterminated template");
};
pp$8.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch) {
    case 110:
      return "\n";
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return codePointToString(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      if (this.input.charCodeAt(this.pos) === 10) {
        ++this.pos;
      }
    case 10:
      if (this.options.locations) {
        this.lineStart = this.pos;
        ++this.curLine;
      }
      return "";
    default:
      if (ch >= 48 && ch <= 55) {
        var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
        var octal = parseInt(octalStr, 8);
        if (octal > 255) {
          octalStr = octalStr.slice(0, -1);
          octal = parseInt(octalStr, 8);
        }
        this.pos += octalStr.length - 1;
        ch = this.input.charCodeAt(this.pos);
        if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
          this.invalidStringToken(this.pos - 1 - octalStr.length, inTemplate ? "Octal literal in template string" : "Octal literal in strict mode");
        }
        return String.fromCharCode(octal);
      }
      return String.fromCharCode(ch);
  }
};
pp$8.readHexChar = function(len) {
  var codePos = this.pos;
  var n2 = this.readInt(16, len);
  if (n2 === null) {
    this.invalidStringToken(codePos, "Bad character escape sequence");
  }
  return n2;
};
pp$8.readWord1 = function() {
  var this$1 = this;
  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this$1.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this$1.pos += ch <= 65535 ? 1 : 2;
    } else if (ch === 92) {
      this$1.containsEsc = true;
      word += this$1.input.slice(chunkStart, this$1.pos);
      var escStart = this$1.pos;
      if (this$1.input.charCodeAt(++this$1.pos) !== 117) {
        this$1.invalidStringToken(this$1.pos, "Expecting Unicode escape sequence \\uXXXX");
      }
      ++this$1.pos;
      var esc = this$1.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
        this$1.invalidStringToken(escStart, "Invalid Unicode escape");
      }
      word += codePointToString(esc);
      chunkStart = this$1.pos;
    } else {
      break;
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos);
};
pp$8.readWord = function() {
  var word = this.readWord1();
  var type = types.name;
  if (this.keywords.test(word)) {
    if (this.containsEsc) {
      this.raiseRecoverable(this.start, "Escape sequence in keyword " + word);
    }
    type = keywords$1[word];
  }
  return this.finishToken(type, word);
};
var version = "6.0.2";
function parse3(input, options) {
  return Parser.parse(input, options);
}
function parseExpressionAt2(input, pos, options) {
  return Parser.parseExpressionAt(input, pos, options);
}
function tokenizer2(input, options) {
  return Parser.tokenizer(input, options);
}
var acorn = /* @__PURE__ */ Object.freeze({
  version,
  parse: parse3,
  parseExpressionAt: parseExpressionAt2,
  tokenizer: tokenizer2,
  Parser,
  defaultOptions,
  Position,
  SourceLocation,
  getLineInfo,
  Node,
  TokenType,
  tokTypes: types,
  keywordTypes: keywords$1,
  TokContext,
  tokContexts: types$1,
  isIdentifierChar,
  isIdentifierStart,
  Token,
  isNewLine,
  lineBreak,
  lineBreakG,
  nonASCIIwhitespace
});
var xhtml = {
  quot: '"',
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  fnof: "\u0192",
  circ: "\u02C6",
  tilde: "\u02DC",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  bull: "\u2022",
  hellip: "\u2026",
  permil: "\u2030",
  prime: "\u2032",
  Prime: "\u2033",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  oline: "\u203E",
  frasl: "\u2044",
  euro: "\u20AC",
  image: "\u2111",
  weierp: "\u2118",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  "int": "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666"
};
var hexNumber = /^[\da-fA-F]+$/;
var decimalNumber = /^\d+$/;
var tt = acorn.tokTypes;
var TokContext$1 = acorn.TokContext;
var tokContexts = acorn.tokContexts;
var TokenType$1 = acorn.TokenType;
var isNewLine$1 = acorn.isNewLine;
var isIdentifierStart$1 = acorn.isIdentifierStart;
var isIdentifierChar$1 = acorn.isIdentifierChar;
var tc_oTag = new TokContext$1("<tag", false);
var tc_cTag = new TokContext$1("</tag", false);
var tc_expr = new TokContext$1("<tag>...</tag>", true, true);
var tok = {
  jsxName: new TokenType$1("jsxName"),
  jsxText: new TokenType$1("jsxText", { beforeExpr: true }),
  jsxTagStart: new TokenType$1("jsxTagStart"),
  jsxTagEnd: new TokenType$1("jsxTagEnd")
};
tok.jsxTagStart.updateContext = function() {
  this.context.push(tc_expr);
  this.context.push(tc_oTag);
  this.exprAllowed = false;
};
tok.jsxTagEnd.updateContext = function(prevType) {
  var out = this.context.pop();
  if (out === tc_oTag && prevType === tt.slash || out === tc_cTag) {
    this.context.pop();
    this.exprAllowed = this.curContext() === tc_expr;
  } else {
    this.exprAllowed = true;
  }
};
function getQualifiedJSXName(object) {
  if (!object) {
    return object;
  }
  if (object.type === "JSXIdentifier") {
    return object.name;
  }
  if (object.type === "JSXNamespacedName") {
    return object.namespace.name + ":" + object.name.name;
  }
  if (object.type === "JSXMemberExpression") {
    return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
  }
}
var acornJsx = function(options) {
  if (options === void 0)
    options = {};
  return function(Parser3) {
    return plugin({
      allowNamespaces: options.allowNamespaces !== false,
      allowNamespacedObjects: !!options.allowNamespacedObjects
    }, Parser3);
  };
};
var tokTypes = tok;
function plugin(options, Parser3) {
  return function(Parser4) {
    function anonymous() {
      Parser4.apply(this, arguments);
    }
    if (Parser4)
      anonymous.__proto__ = Parser4;
    anonymous.prototype = Object.create(Parser4 && Parser4.prototype);
    anonymous.prototype.constructor = anonymous;
    anonymous.prototype.jsx_readToken = function jsx_readToken() {
      var this$1 = this;
      var out = "", chunkStart = this.pos;
      for (; ; ) {
        if (this$1.pos >= this$1.input.length) {
          this$1.raise(this$1.start, "Unterminated JSX contents");
        }
        var ch = this$1.input.charCodeAt(this$1.pos);
        switch (ch) {
          case 60:
          case 123:
            if (this$1.pos === this$1.start) {
              if (ch === 60 && this$1.exprAllowed) {
                ++this$1.pos;
                return this$1.finishToken(tok.jsxTagStart);
              }
              return this$1.getTokenFromCode(ch);
            }
            out += this$1.input.slice(chunkStart, this$1.pos);
            return this$1.finishToken(tok.jsxText, out);
          case 38:
            out += this$1.input.slice(chunkStart, this$1.pos);
            out += this$1.jsx_readEntity();
            chunkStart = this$1.pos;
            break;
          default:
            if (isNewLine$1(ch)) {
              out += this$1.input.slice(chunkStart, this$1.pos);
              out += this$1.jsx_readNewLine(true);
              chunkStart = this$1.pos;
            } else {
              ++this$1.pos;
            }
        }
      }
    };
    anonymous.prototype.jsx_readNewLine = function jsx_readNewLine(normalizeCRLF) {
      var ch = this.input.charCodeAt(this.pos);
      var out;
      ++this.pos;
      if (ch === 13 && this.input.charCodeAt(this.pos) === 10) {
        ++this.pos;
        out = normalizeCRLF ? "\n" : "\r\n";
      } else {
        out = String.fromCharCode(ch);
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      return out;
    };
    anonymous.prototype.jsx_readString = function jsx_readString(quote) {
      var this$1 = this;
      var out = "", chunkStart = ++this.pos;
      for (; ; ) {
        if (this$1.pos >= this$1.input.length) {
          this$1.raise(this$1.start, "Unterminated string constant");
        }
        var ch = this$1.input.charCodeAt(this$1.pos);
        if (ch === quote) {
          break;
        }
        if (ch === 38) {
          out += this$1.input.slice(chunkStart, this$1.pos);
          out += this$1.jsx_readEntity();
          chunkStart = this$1.pos;
        } else if (isNewLine$1(ch)) {
          out += this$1.input.slice(chunkStart, this$1.pos);
          out += this$1.jsx_readNewLine(false);
          chunkStart = this$1.pos;
        } else {
          ++this$1.pos;
        }
      }
      out += this.input.slice(chunkStart, this.pos++);
      return this.finishToken(tt.string, out);
    };
    anonymous.prototype.jsx_readEntity = function jsx_readEntity() {
      var this$1 = this;
      var str = "", count = 0, entity;
      var ch = this.input[this.pos];
      if (ch !== "&") {
        this.raise(this.pos, "Entity must start with an ampersand");
      }
      var startPos = ++this.pos;
      while (this.pos < this.input.length && count++ < 10) {
        ch = this$1.input[this$1.pos++];
        if (ch === ";") {
          if (str[0] === "#") {
            if (str[1] === "x") {
              str = str.substr(2);
              if (hexNumber.test(str)) {
                entity = String.fromCharCode(parseInt(str, 16));
              }
            } else {
              str = str.substr(1);
              if (decimalNumber.test(str)) {
                entity = String.fromCharCode(parseInt(str, 10));
              }
            }
          } else {
            entity = xhtml[str];
          }
          break;
        }
        str += ch;
      }
      if (!entity) {
        this.pos = startPos;
        return "&";
      }
      return entity;
    };
    anonymous.prototype.jsx_readWord = function jsx_readWord() {
      var this$1 = this;
      var ch, start = this.pos;
      do {
        ch = this$1.input.charCodeAt(++this$1.pos);
      } while (isIdentifierChar$1(ch) || ch === 45);
      return this.finishToken(tok.jsxName, this.input.slice(start, this.pos));
    };
    anonymous.prototype.jsx_parseIdentifier = function jsx_parseIdentifier() {
      var node = this.startNode();
      if (this.type === tok.jsxName) {
        node.name = this.value;
      } else if (this.type.keyword) {
        node.name = this.type.keyword;
      } else {
        this.unexpected();
      }
      this.next();
      return this.finishNode(node, "JSXIdentifier");
    };
    anonymous.prototype.jsx_parseNamespacedName = function jsx_parseNamespacedName() {
      var startPos = this.start, startLoc = this.startLoc;
      var name = this.jsx_parseIdentifier();
      if (!options.allowNamespaces || !this.eat(tt.colon)) {
        return name;
      }
      var node = this.startNodeAt(startPos, startLoc);
      node.namespace = name;
      node.name = this.jsx_parseIdentifier();
      return this.finishNode(node, "JSXNamespacedName");
    };
    anonymous.prototype.jsx_parseElementName = function jsx_parseElementName() {
      var this$1 = this;
      if (this.type === tok.jsxTagEnd) {
        return "";
      }
      var startPos = this.start, startLoc = this.startLoc;
      var node = this.jsx_parseNamespacedName();
      if (this.type === tt.dot && node.type === "JSXNamespacedName" && !options.allowNamespacedObjects) {
        this.unexpected();
      }
      while (this.eat(tt.dot)) {
        var newNode = this$1.startNodeAt(startPos, startLoc);
        newNode.object = node;
        newNode.property = this$1.jsx_parseIdentifier();
        node = this$1.finishNode(newNode, "JSXMemberExpression");
      }
      return node;
    };
    anonymous.prototype.jsx_parseAttributeValue = function jsx_parseAttributeValue() {
      switch (this.type) {
        case tt.braceL:
          var node = this.jsx_parseExpressionContainer();
          if (node.expression.type === "JSXEmptyExpression") {
            this.raise(node.start, "JSX attributes must only be assigned a non-empty expression");
          }
          return node;
        case tok.jsxTagStart:
        case tt.string:
          return this.parseExprAtom();
        default:
          this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
      }
    };
    anonymous.prototype.jsx_parseEmptyExpression = function jsx_parseEmptyExpression() {
      var node = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
      return this.finishNodeAt(node, "JSXEmptyExpression", this.start, this.startLoc);
    };
    anonymous.prototype.jsx_parseExpressionContainer = function jsx_parseExpressionContainer() {
      var node = this.startNode();
      this.next();
      node.expression = this.type === tt.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression();
      this.expect(tt.braceR);
      return this.finishNode(node, "JSXExpressionContainer");
    };
    anonymous.prototype.jsx_parseAttribute = function jsx_parseAttribute() {
      var node = this.startNode();
      if (this.eat(tt.braceL)) {
        this.expect(tt.ellipsis);
        node.argument = this.parseMaybeAssign();
        this.expect(tt.braceR);
        return this.finishNode(node, "JSXSpreadAttribute");
      }
      node.name = this.jsx_parseNamespacedName();
      node.value = this.eat(tt.eq) ? this.jsx_parseAttributeValue() : null;
      return this.finishNode(node, "JSXAttribute");
    };
    anonymous.prototype.jsx_parseOpeningElementAt = function jsx_parseOpeningElementAt(startPos, startLoc) {
      var this$1 = this;
      var node = this.startNodeAt(startPos, startLoc);
      node.attributes = [];
      var nodeName = this.jsx_parseElementName();
      if (nodeName) {
        node.name = nodeName;
      }
      while (this.type !== tt.slash && this.type !== tok.jsxTagEnd) {
        node.attributes.push(this$1.jsx_parseAttribute());
      }
      node.selfClosing = this.eat(tt.slash);
      this.expect(tok.jsxTagEnd);
      return this.finishNode(node, nodeName ? "JSXOpeningElement" : "JSXOpeningFragment");
    };
    anonymous.prototype.jsx_parseClosingElementAt = function jsx_parseClosingElementAt(startPos, startLoc) {
      var node = this.startNodeAt(startPos, startLoc);
      var nodeName = this.jsx_parseElementName();
      if (nodeName) {
        node.name = nodeName;
      }
      this.expect(tok.jsxTagEnd);
      return this.finishNode(node, nodeName ? "JSXClosingElement" : "JSXClosingFragment");
    };
    anonymous.prototype.jsx_parseElementAt = function jsx_parseElementAt(startPos, startLoc) {
      var this$1 = this;
      var node = this.startNodeAt(startPos, startLoc);
      var children = [];
      var openingElement = this.jsx_parseOpeningElementAt(startPos, startLoc);
      var closingElement = null;
      if (!openingElement.selfClosing) {
        contents:
          for (; ; ) {
            switch (this$1.type) {
              case tok.jsxTagStart:
                startPos = this$1.start;
                startLoc = this$1.startLoc;
                this$1.next();
                if (this$1.eat(tt.slash)) {
                  closingElement = this$1.jsx_parseClosingElementAt(startPos, startLoc);
                  break contents;
                }
                children.push(this$1.jsx_parseElementAt(startPos, startLoc));
                break;
              case tok.jsxText:
                children.push(this$1.parseExprAtom());
                break;
              case tt.braceL:
                children.push(this$1.jsx_parseExpressionContainer());
                break;
              default:
                this$1.unexpected();
            }
          }
        if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
          this.raise(closingElement.start, "Expected corresponding JSX closing tag for <" + getQualifiedJSXName(openingElement.name) + ">");
        }
      }
      var fragmentOrElement = openingElement.name ? "Element" : "Fragment";
      node["opening" + fragmentOrElement] = openingElement;
      node["closing" + fragmentOrElement] = closingElement;
      node.children = children;
      if (this.type === tt.relational && this.value === "<") {
        this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag");
      }
      return this.finishNode(node, "JSX" + fragmentOrElement);
    };
    anonymous.prototype.jsx_parseText = function jsx_parseText(value) {
      var node = this.parseLiteral(value);
      node.type = "JSXText";
      return node;
    };
    anonymous.prototype.jsx_parseElement = function jsx_parseElement() {
      var startPos = this.start, startLoc = this.startLoc;
      this.next();
      return this.jsx_parseElementAt(startPos, startLoc);
    };
    anonymous.prototype.parseExprAtom = function parseExprAtom(refShortHandDefaultPos) {
      if (this.type === tok.jsxText) {
        return this.jsx_parseText(this.value);
      } else if (this.type === tok.jsxTagStart) {
        return this.jsx_parseElement();
      } else {
        return Parser4.prototype.parseExprAtom.call(this, refShortHandDefaultPos);
      }
    };
    anonymous.prototype.readToken = function readToken(code2) {
      var context = this.curContext();
      if (context === tc_expr) {
        return this.jsx_readToken();
      }
      if (context === tc_oTag || context === tc_cTag) {
        if (isIdentifierStart$1(code2)) {
          return this.jsx_readWord();
        }
        if (code2 == 62) {
          ++this.pos;
          return this.finishToken(tok.jsxTagEnd);
        }
        if ((code2 === 34 || code2 === 39) && context == tc_oTag) {
          return this.jsx_readString(code2);
        }
      }
      if (code2 === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) {
        ++this.pos;
        return this.finishToken(tok.jsxTagStart);
      }
      return Parser4.prototype.readToken.call(this, code2);
    };
    anonymous.prototype.updateContext = function updateContext(prevType) {
      if (this.type == tt.braceL) {
        var curContext = this.curContext();
        if (curContext == tc_oTag) {
          this.context.push(tokContexts.b_expr);
        } else if (curContext == tc_expr) {
          this.context.push(tokContexts.b_tmpl);
        } else {
          Parser4.prototype.updateContext.call(this, prevType);
        }
        this.exprAllowed = true;
      } else if (this.type === tt.slash && prevType === tok.jsxTagStart) {
        this.context.length -= 2;
        this.context.push(tc_cTag);
        this.exprAllowed = false;
      } else {
        return Parser4.prototype.updateContext.call(this, prevType);
      }
    };
    return anonymous;
  }(Parser3);
}
acornJsx.tokTypes = tokTypes;
function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var lib = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DynamicImportKey = void 0;
  var _createClass = function() {
    function defineProperties(target2, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target2, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _get = function() {
    function get(object, property, receiver) {
      if (object === null)
        object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);
      if (desc === void 0) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return void 0;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === void 0) {
          return void 0;
        }
        return getter.call(receiver);
      }
    }
    return get;
  }();
  exports["default"] = dynamicImport;
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var DynamicImportKey = exports.DynamicImportKey = "Import";
  acorn.tokTypes._import.startsExpr = true;
  function parseDynamicImport() {
    var node = this.startNode();
    this.next();
    if (this.type !== acorn.tokTypes.parenL) {
      this.unexpected();
    }
    return this.finishNode(node, DynamicImportKey);
  }
  function parenAfter() {
    return /^(\s|\/\/.*|\/\*[^]*?\*\/)*\(/.test(this.input.slice(this.pos));
  }
  function dynamicImport(Parser3) {
    return function(_Parser) {
      _inherits(_class, _Parser);
      function _class() {
        _classCallCheck(this, _class);
        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }
      _createClass(_class, [{
        key: "parseStatement",
        value: function() {
          function parseStatement(context, topLevel, exports2) {
            if (this.type === acorn.tokTypes._import && parenAfter.call(this)) {
              return this.parseExpressionStatement(this.startNode(), this.parseExpression());
            }
            return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "parseStatement", this).call(this, context, topLevel, exports2);
          }
          return parseStatement;
        }()
      }, {
        key: "parseExprAtom",
        value: function() {
          function parseExprAtom(refDestructuringErrors) {
            if (this.type === acorn.tokTypes._import) {
              return parseDynamicImport.call(this);
            }
            return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), "parseExprAtom", this).call(this, refDestructuringErrors);
          }
          return parseExprAtom;
        }()
      }]);
      return _class;
    }(Parser3);
  }
});
var acornDynamicImport = unwrapExports(lib);
var lib_1 = lib.DynamicImportKey;
function toJSON(node) {
  var obj = {};
  Object.keys(node).forEach(function(key) {
    if (key === "parent" || key === "program" || key === "keys" || key === "__wrapped") {
      return;
    }
    if (Array.isArray(node[key])) {
      obj[key] = node[key].map(toJSON);
    } else if (node[key] && node[key].toJSON) {
      obj[key] = node[key].toJSON();
    } else {
      obj[key] = node[key];
    }
  });
  return obj;
}
var Node$1 = function Node3() {
};
Node$1.prototype.ancestor = function ancestor(level) {
  var node = this;
  while (level--) {
    node = node.parent;
    if (!node) {
      return null;
    }
  }
  return node;
};
Node$1.prototype.contains = function contains2(node) {
  var this$1 = this;
  while (node) {
    if (node === this$1) {
      return true;
    }
    node = node.parent;
  }
  return false;
};
Node$1.prototype.findLexicalBoundary = function findLexicalBoundary() {
  return this.parent.findLexicalBoundary();
};
Node$1.prototype.findNearest = function findNearest(type) {
  if (typeof type === "string") {
    type = new RegExp("^" + type + "$");
  }
  if (type.test(this.type)) {
    return this;
  }
  return this.parent.findNearest(type);
};
Node$1.prototype.unparenthesizedParent = function unparenthesizedParent() {
  var node = this.parent;
  while (node && node.type === "ParenthesizedExpression") {
    node = node.parent;
  }
  return node;
};
Node$1.prototype.unparenthesize = function unparenthesize() {
  var node = this;
  while (node.type === "ParenthesizedExpression") {
    node = node.expression;
  }
  return node;
};
Node$1.prototype.findScope = function findScope(functionScope) {
  return this.parent.findScope(functionScope);
};
Node$1.prototype.getIndentation = function getIndentation() {
  return this.parent.getIndentation();
};
Node$1.prototype.initialise = function initialise(transforms) {
  var this$1 = this;
  for (var i = 0, list = this$1.keys; i < list.length; i += 1) {
    var key = list[i];
    var value = this$1[key];
    if (Array.isArray(value)) {
      value.forEach(function(node) {
        return node && node.initialise(transforms);
      });
    } else if (value && typeof value === "object") {
      value.initialise(transforms);
    }
  }
};
Node$1.prototype.toJSON = function toJSON$1() {
  return toJSON(this);
};
Node$1.prototype.toString = function toString7() {
  return this.program.magicString.original.slice(this.start, this.end);
};
Node$1.prototype.transpile = function transpile(code2, transforms) {
  var this$1 = this;
  for (var i = 0, list = this$1.keys; i < list.length; i += 1) {
    var key = list[i];
    var value = this$1[key];
    if (Array.isArray(value)) {
      value.forEach(function(node) {
        return node && node.transpile(code2, transforms);
      });
    } else if (value && typeof value === "object") {
      value.transpile(code2, transforms);
    }
  }
};
function extractNames(node) {
  var names = [];
  extractors[node.type](names, node);
  return names;
}
var extractors = {
  Identifier: function Identifier(names, node) {
    names.push(node);
  },
  ObjectPattern: function ObjectPattern(names, node) {
    for (var i = 0, list = node.properties; i < list.length; i += 1) {
      var prop = list[i];
      extractors[prop.type](names, prop);
    }
  },
  Property: function Property(names, node) {
    extractors[node.value.type](names, node.value);
  },
  ArrayPattern: function ArrayPattern(names, node) {
    for (var i = 0, list = node.elements; i < list.length; i += 1) {
      var element = list[i];
      if (element) {
        extractors[element.type](names, element);
      }
    }
  },
  RestElement: function RestElement(names, node) {
    extractors[node.argument.type](names, node.argument);
  },
  AssignmentPattern: function AssignmentPattern(names, node) {
    extractors[node.left.type](names, node.left);
  }
};
var reserved = Object.create(null);
"do if in for let new try var case else enum eval null this true void with await break catch class const false super throw while yield delete export import public return static switch typeof default extends finally package private continue debugger function arguments interface protected implements instanceof".split(" ").forEach(function(word) {
  return reserved[word] = true;
});
function Scope$1(options) {
  options = options || {};
  this.parent = options.parent;
  this.isBlockScope = !!options.block;
  this.createDeclarationCallback = options.declare;
  var scope2 = this;
  while (scope2.isBlockScope) {
    scope2 = scope2.parent;
  }
  this.functionScope = scope2;
  this.identifiers = [];
  this.declarations = Object.create(null);
  this.references = Object.create(null);
  this.blockScopedDeclarations = this.isBlockScope ? null : Object.create(null);
  this.aliases = Object.create(null);
}
Scope$1.prototype = {
  addDeclaration: function addDeclaration(node, kind) {
    var this$1 = this;
    for (var i = 0, list = extractNames(node); i < list.length; i += 1) {
      var identifier = list[i];
      var name = identifier.name;
      var declaration = { name, node: identifier, kind, instances: [] };
      this$1.declarations[name] = declaration;
      if (this$1.isBlockScope) {
        if (!this$1.functionScope.blockScopedDeclarations[name]) {
          this$1.functionScope.blockScopedDeclarations[name] = [];
        }
        this$1.functionScope.blockScopedDeclarations[name].push(declaration);
      }
    }
  },
  addReference: function addReference(identifier) {
    if (this.consolidated) {
      this.consolidateReference(identifier);
    } else {
      this.identifiers.push(identifier);
    }
  },
  consolidate: function consolidate() {
    var this$1 = this;
    for (var i = 0; i < this.identifiers.length; i += 1) {
      var identifier = this$1.identifiers[i];
      this$1.consolidateReference(identifier);
    }
    this.consolidated = true;
  },
  consolidateReference: function consolidateReference(identifier) {
    var declaration = this.declarations[identifier.name];
    if (declaration) {
      declaration.instances.push(identifier);
    } else {
      this.references[identifier.name] = true;
      if (this.parent) {
        this.parent.addReference(identifier);
      }
    }
  },
  contains: function contains3(name) {
    return this.declarations[name] || (this.parent ? this.parent.contains(name) : false);
  },
  createIdentifier: function createIdentifier(base) {
    if (typeof base === "number") {
      base = base.toString();
    }
    base = base.replace(/\s/g, "").replace(/\[([^\]]+)\]/g, "_$1").replace(/[^a-zA-Z0-9_$]/g, "_").replace(/_{2,}/, "_");
    var name = base;
    var counter = 1;
    while (this.declarations[name] || this.references[name] || this.aliases[name] || name in reserved) {
      name = base + "$" + counter++;
    }
    this.aliases[name] = true;
    return name;
  },
  createDeclaration: function createDeclaration(base) {
    var id = this.createIdentifier(base);
    this.createDeclarationCallback(id);
    return id;
  },
  findDeclaration: function findDeclaration(name) {
    return this.declarations[name] || this.parent && this.parent.findDeclaration(name);
  },
  resolveName: function resolveName(name) {
    var declaration = this.findDeclaration(name);
    return declaration ? declaration.name : name;
  }
};
function locate(source, index) {
  var lines = source.split("\n");
  var len = lines.length;
  var lineStart = 0;
  var i;
  for (i = 0; i < len; i += 1) {
    var line = lines[i];
    var lineEnd = lineStart + line.length + 1;
    if (lineEnd > index) {
      return { line: i + 1, column: index - lineStart, char: i };
    }
    lineStart = lineEnd;
  }
  throw new Error("Could not determine location of character");
}
function pad(num, len) {
  var result = String(num);
  return result + repeat(" ", len - result.length);
}
function repeat(str, times) {
  var result = "";
  while (times--) {
    result += str;
  }
  return result;
}
function getSnippet(source, loc, length3) {
  if (length3 === void 0)
    length3 = 1;
  var first = Math.max(loc.line - 5, 0);
  var last = loc.line;
  var numDigits = String(last).length;
  var lines = source.split("\n").slice(first, last);
  var lastLine2 = lines[lines.length - 1];
  var offset2 = lastLine2.slice(0, loc.column).replace(/\t/g, "  ").length;
  var snippet = lines.map(function(line, i) {
    return pad(i + first + 1, numDigits) + " : " + line.replace(/\t/g, "  ");
  }).join("\n");
  snippet += "\n" + repeat(" ", numDigits + 3 + offset2) + repeat("^", length3);
  return snippet;
}
var CompileError = function(Error2) {
  function CompileError2(message, node) {
    Error2.call(this, message);
    this.name = "CompileError";
    if (!node) {
      return;
    }
    var source = node.program.magicString.original;
    var loc = locate(source, node.start);
    this.message = message + " (" + loc.line + ":" + loc.column + ")";
    this.stack = new Error2().stack.replace(new RegExp(".+new " + this.name + ".+\\n", "m"), "");
    this.loc = loc;
    this.snippet = getSnippet(source, loc, node.end - node.start);
  }
  if (Error2)
    CompileError2.__proto__ = Error2;
  CompileError2.prototype = Object.create(Error2 && Error2.prototype);
  CompileError2.prototype.constructor = CompileError2;
  CompileError2.prototype.toString = function toString8() {
    return this.name + ": " + this.message + "\n" + this.snippet;
  };
  return CompileError2;
}(Error);
function findIndex(array, fn) {
  for (var i = 0; i < array.length; i += 1) {
    if (fn(array[i], i)) {
      return i;
    }
  }
  return -1;
}
var handlers = {
  Identifier: destructureIdentifier,
  AssignmentPattern: destructureAssignmentPattern,
  ArrayPattern: destructureArrayPattern,
  ObjectPattern: destructureObjectPattern
};
function destructure(code2, createIdentifier2, resolveName2, node, ref2, inline, statementGenerators) {
  handlers[node.type](code2, createIdentifier2, resolveName2, node, ref2, inline, statementGenerators);
}
function destructureIdentifier(code2, createIdentifier2, resolveName2, node, ref2, inline, statementGenerators) {
  statementGenerators.push(function(start, prefix, suffix) {
    code2.overwrite(node.start, node.end, (inline ? prefix : prefix + "var ") + resolveName2(node) + " = " + ref2 + suffix);
    code2.move(node.start, node.end, start);
  });
}
function destructureMemberExpression(code2, createIdentifier2, resolveName2, node, ref2, inline, statementGenerators) {
  statementGenerators.push(function(start, prefix, suffix) {
    code2.prependRight(node.start, inline ? prefix : prefix + "var ");
    code2.appendLeft(node.end, " = " + ref2 + suffix);
    code2.move(node.start, node.end, start);
  });
}
function destructureAssignmentPattern(code2, createIdentifier2, resolveName2, node, ref2, inline, statementGenerators) {
  var isIdentifier = node.left.type === "Identifier";
  var name = isIdentifier ? node.left.name : ref2;
  if (!inline) {
    statementGenerators.push(function(start, prefix, suffix) {
      code2.prependRight(node.left.end, prefix + "if ( " + name + " === void 0 ) " + name);
      code2.move(node.left.end, node.right.end, start);
      code2.appendLeft(node.right.end, suffix);
    });
  }
  if (!isIdentifier) {
    destructure(code2, createIdentifier2, resolveName2, node.left, ref2, inline, statementGenerators);
  }
}
function destructureArrayPattern(code2, createIdentifier2, resolveName2, node, ref2, inline, statementGenerators) {
  var c = node.start;
  node.elements.forEach(function(element, i) {
    if (!element) {
      return;
    }
    if (element.type === "RestElement") {
      handleProperty(code2, createIdentifier2, resolveName2, c, element.argument, ref2 + ".slice(" + i + ")", inline, statementGenerators);
    } else {
      handleProperty(code2, createIdentifier2, resolveName2, c, element, ref2 + "[" + i + "]", inline, statementGenerators);
    }
    c = element.end;
  });
  code2.remove(c, node.end);
}
function destructureObjectPattern(code2, createIdentifier2, resolveName2, node, ref2, inline, statementGenerators) {
  var this$1 = this;
  var c = node.start;
  var nonRestKeys = [];
  node.properties.forEach(function(prop) {
    var value;
    var content;
    if (prop.type === "Property") {
      var isComputedKey = prop.computed || prop.key.type !== "Identifier";
      var key = isComputedKey ? code2.slice(prop.key.start, prop.key.end) : prop.key.name;
      value = isComputedKey ? ref2 + "[" + key + "]" : ref2 + "." + key;
      content = prop.value;
      nonRestKeys.push(isComputedKey ? key : '"' + key + '"');
    } else if (prop.type === "RestElement") {
      content = prop.argument;
      value = createIdentifier2("rest");
      statementGenerators.push(function(start, prefix, suffix) {
        var helper = prop.program.getObjectWithoutPropertiesHelper(code2);
        code2.overwrite(prop.start, c = prop.argument.start, (inline ? prefix : prefix + "var ") + value + " = " + helper + "( " + ref2 + ", [" + nonRestKeys.join(", ") + "] )" + suffix);
        code2.move(prop.start, c, start);
      });
    } else {
      throw new CompileError(this$1, "Unexpected node of type " + prop.type + " in object pattern");
    }
    handleProperty(code2, createIdentifier2, resolveName2, c, content, value, inline, statementGenerators);
    c = prop.end;
  });
  code2.remove(c, node.end);
}
function handleProperty(code2, createIdentifier2, resolveName2, c, node, value, inline, statementGenerators) {
  switch (node.type) {
    case "Identifier": {
      code2.remove(c, node.start);
      destructureIdentifier(code2, createIdentifier2, resolveName2, node, value, inline, statementGenerators);
      break;
    }
    case "MemberExpression":
      code2.remove(c, node.start);
      destructureMemberExpression(code2, createIdentifier2, resolveName2, node, value, true, statementGenerators);
      break;
    case "AssignmentPattern": {
      var name;
      var isIdentifier = node.left.type === "Identifier";
      if (isIdentifier) {
        name = resolveName2(node.left);
      } else {
        name = createIdentifier2(value);
      }
      statementGenerators.push(function(start, prefix, suffix) {
        if (inline) {
          code2.prependRight(node.right.start, name + " = " + value + ", " + name + " = " + name + " === void 0 ? ");
          code2.appendLeft(node.right.end, " : " + name + suffix);
        } else {
          code2.prependRight(node.right.start, prefix + "var " + name + " = " + value + "; if ( " + name + " === void 0 ) " + name + " = ");
          code2.appendLeft(node.right.end, suffix);
        }
        code2.move(node.right.start, node.right.end, start);
      });
      if (isIdentifier) {
        code2.remove(c, node.right.start);
      } else {
        code2.remove(c, node.left.start);
        code2.remove(node.left.end, node.right.start);
        handleProperty(code2, createIdentifier2, resolveName2, c, node.left, name, inline, statementGenerators);
      }
      break;
    }
    case "ObjectPattern": {
      code2.remove(c, c = node.start);
      var ref2 = value;
      if (node.properties.length > 1) {
        ref2 = createIdentifier2(value);
        statementGenerators.push(function(start, prefix, suffix) {
          code2.prependRight(node.start, (inline ? "" : prefix + "var ") + ref2 + " = ");
          code2.overwrite(node.start, c = node.start + 1, value);
          code2.appendLeft(c, suffix);
          code2.overwrite(node.start, c = node.start + 1, (inline ? "" : prefix + "var ") + ref2 + " = " + value + suffix);
          code2.move(node.start, c, start);
        });
      }
      destructureObjectPattern(code2, createIdentifier2, resolveName2, node, ref2, inline, statementGenerators);
      break;
    }
    case "ArrayPattern": {
      code2.remove(c, c = node.start);
      if (node.elements.filter(Boolean).length > 1) {
        var ref$1 = createIdentifier2(value);
        statementGenerators.push(function(start, prefix, suffix) {
          code2.prependRight(node.start, (inline ? "" : prefix + "var ") + ref$1 + " = ");
          code2.overwrite(node.start, c = node.start + 1, value, {
            contentOnly: true
          });
          code2.appendLeft(c, suffix);
          code2.move(node.start, c, start);
        });
        node.elements.forEach(function(element2, i) {
          if (!element2) {
            return;
          }
          if (element2.type === "RestElement") {
            handleProperty(code2, createIdentifier2, resolveName2, c, element2.argument, ref$1 + ".slice(" + i + ")", inline, statementGenerators);
          } else {
            handleProperty(code2, createIdentifier2, resolveName2, c, element2, ref$1 + "[" + i + "]", inline, statementGenerators);
          }
          c = element2.end;
        });
      } else {
        var index = findIndex(node.elements, Boolean);
        var element = node.elements[index];
        if (element.type === "RestElement") {
          handleProperty(code2, createIdentifier2, resolveName2, c, element.argument, value + ".slice(" + index + ")", inline, statementGenerators);
        } else {
          handleProperty(code2, createIdentifier2, resolveName2, c, element, value + "[" + index + "]", inline, statementGenerators);
        }
        c = element.end;
      }
      code2.remove(c, node.end);
      break;
    }
    default: {
      throw new Error("Unexpected node type in destructuring (" + node.type + ")");
    }
  }
}
function isUseStrict(node) {
  if (!node) {
    return false;
  }
  if (node.type !== "ExpressionStatement") {
    return false;
  }
  if (node.expression.type !== "Literal") {
    return false;
  }
  return node.expression.value === "use strict";
}
var BlockStatement = function(Node4) {
  function BlockStatement2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    BlockStatement2.__proto__ = Node4;
  BlockStatement2.prototype = Object.create(Node4 && Node4.prototype);
  BlockStatement2.prototype.constructor = BlockStatement2;
  BlockStatement2.prototype.createScope = function createScope() {
    var this$1 = this;
    this.parentIsFunction = /Function/.test(this.parent.type);
    this.isFunctionBlock = this.parentIsFunction || this.parent.type === "Root";
    this.scope = new Scope$1({
      block: !this.isFunctionBlock,
      parent: this.parent.findScope(false),
      declare: function(id) {
        return this$1.createdDeclarations.push(id);
      }
    });
    if (this.parentIsFunction) {
      this.parent.params.forEach(function(node) {
        this$1.scope.addDeclaration(node, "param");
      });
    }
  };
  BlockStatement2.prototype.initialise = function initialise2(transforms) {
    this.thisAlias = null;
    this.argumentsAlias = null;
    this.defaultParameters = [];
    this.createdDeclarations = [];
    if (!this.scope) {
      this.createScope();
    }
    this.body.forEach(function(node) {
      return node.initialise(transforms);
    });
    this.scope.consolidate();
  };
  BlockStatement2.prototype.findLexicalBoundary = function findLexicalBoundary2() {
    if (this.type === "Program") {
      return this;
    }
    if (/^Function/.test(this.parent.type)) {
      return this;
    }
    return this.parent.findLexicalBoundary();
  };
  BlockStatement2.prototype.findScope = function findScope3(functionScope) {
    if (functionScope && !this.isFunctionBlock) {
      return this.parent.findScope(functionScope);
    }
    return this.scope;
  };
  BlockStatement2.prototype.getArgumentsAlias = function getArgumentsAlias() {
    if (!this.argumentsAlias) {
      this.argumentsAlias = this.scope.createIdentifier("arguments");
    }
    return this.argumentsAlias;
  };
  BlockStatement2.prototype.getArgumentsArrayAlias = function getArgumentsArrayAlias() {
    if (!this.argumentsArrayAlias) {
      this.argumentsArrayAlias = this.scope.createIdentifier("argsArray");
    }
    return this.argumentsArrayAlias;
  };
  BlockStatement2.prototype.getThisAlias = function getThisAlias() {
    if (!this.thisAlias) {
      this.thisAlias = this.scope.createIdentifier("this");
    }
    return this.thisAlias;
  };
  BlockStatement2.prototype.getIndentation = function getIndentation2() {
    var this$1 = this;
    if (this.indentation === void 0) {
      var source = this.program.magicString.original;
      var useOuter = this.synthetic || !this.body.length;
      var c = useOuter ? this.start : this.body[0].start;
      while (c && source[c] !== "\n") {
        c -= 1;
      }
      this.indentation = "";
      while (true) {
        c += 1;
        var char = source[c];
        if (char !== " " && char !== "	") {
          break;
        }
        this$1.indentation += char;
      }
      var indentString = this.program.magicString.getIndentString();
      var parent = this.parent;
      while (parent) {
        if (parent.kind === "constructor" && !parent.parent.parent.superClass) {
          this$1.indentation = this$1.indentation.replace(indentString, "");
        }
        parent = parent.parent;
      }
      if (useOuter) {
        this.indentation += indentString;
      }
    }
    return this.indentation;
  };
  BlockStatement2.prototype.transpile = function transpile2(code2, transforms) {
    var this$1 = this;
    var indentation = this.getIndentation();
    var introStatementGenerators = [];
    if (this.argumentsAlias) {
      introStatementGenerators.push(function(start2, prefix2, suffix2) {
        var assignment = prefix2 + "var " + this$1.argumentsAlias + " = arguments" + suffix2;
        code2.appendLeft(start2, assignment);
      });
    }
    if (this.thisAlias) {
      introStatementGenerators.push(function(start2, prefix2, suffix2) {
        var assignment = prefix2 + "var " + this$1.thisAlias + " = this" + suffix2;
        code2.appendLeft(start2, assignment);
      });
    }
    if (this.argumentsArrayAlias) {
      introStatementGenerators.push(function(start2, prefix2, suffix2) {
        var i = this$1.scope.createIdentifier("i");
        var assignment = prefix2 + "var " + i + " = arguments.length, " + this$1.argumentsArrayAlias + " = Array(" + i + ");\n" + indentation + "while ( " + i + "-- ) " + this$1.argumentsArrayAlias + "[" + i + "] = arguments[" + i + "]" + suffix2;
        code2.appendLeft(start2, assignment);
      });
    }
    if (/Function/.test(this.parent.type)) {
      this.transpileParameters(this.parent.params, code2, transforms, indentation, introStatementGenerators);
    } else if (this.parent.type === "CatchClause") {
      this.transpileParameters([this.parent.param], code2, transforms, indentation, introStatementGenerators);
    }
    if (transforms.letConst && this.isFunctionBlock) {
      this.transpileBlockScopedIdentifiers(code2);
    }
    Node4.prototype.transpile.call(this, code2, transforms);
    if (this.createdDeclarations.length) {
      introStatementGenerators.push(function(start2, prefix2, suffix2) {
        var assignment = prefix2 + "var " + this$1.createdDeclarations.join(", ") + suffix2;
        code2.appendLeft(start2, assignment);
      });
    }
    if (this.synthetic) {
      if (this.parent.type === "ArrowFunctionExpression") {
        var expr = this.body[0];
        if (introStatementGenerators.length) {
          code2.appendLeft(this.start, "{").prependRight(this.end, this.parent.getIndentation() + "}");
          code2.prependRight(expr.start, "\n" + indentation + "return ");
          code2.appendLeft(expr.end, ";\n");
        } else if (transforms.arrow) {
          code2.prependRight(expr.start, "{ return ");
          code2.appendLeft(expr.end, "; }");
        }
      } else if (introStatementGenerators.length) {
        code2.prependRight(this.start, "{").appendLeft(this.end, "}");
      }
    }
    var start;
    if (isUseStrict(this.body[0])) {
      start = this.body[0].end;
    } else if (this.synthetic || this.parent.type === "Root") {
      start = this.start;
    } else {
      start = this.start + 1;
    }
    var prefix = "\n" + indentation;
    var suffix = ";";
    introStatementGenerators.forEach(function(fn, i) {
      if (i === introStatementGenerators.length - 1) {
        suffix = ";\n";
      }
      fn(start, prefix, suffix);
    });
  };
  BlockStatement2.prototype.transpileParameters = function transpileParameters(params, code2, transforms, indentation, introStatementGenerators) {
    var this$1 = this;
    params.forEach(function(param) {
      if (param.type === "AssignmentPattern" && param.left.type === "Identifier") {
        if (transforms.defaultParameter) {
          introStatementGenerators.push(function(start, prefix, suffix) {
            var lhs = prefix + "if ( " + param.left.name + " === void 0 ) " + param.left.name;
            code2.prependRight(param.left.end, lhs).move(param.left.end, param.right.end, start).appendLeft(param.right.end, suffix);
          });
        }
      } else if (param.type === "RestElement") {
        if (transforms.spreadRest) {
          introStatementGenerators.push(function(start, prefix, suffix) {
            var penultimateParam = params[params.length - 2];
            if (penultimateParam) {
              code2.remove(penultimateParam ? penultimateParam.end : param.start, param.end);
            } else {
              var start$1 = param.start, end = param.end;
              while (/\s/.test(code2.original[start$1 - 1])) {
                start$1 -= 1;
              }
              while (/\s/.test(code2.original[end])) {
                end += 1;
              }
              code2.remove(start$1, end);
            }
            var name = param.argument.name;
            var len = this$1.scope.createIdentifier("len");
            var count = params.length - 1;
            if (count) {
              code2.prependRight(start, prefix + "var " + name + " = [], " + len + " = arguments.length - " + count + ";\n" + indentation + "while ( " + len + "-- > 0 ) " + name + "[ " + len + " ] = arguments[ " + len + " + " + count + " ]" + suffix);
            } else {
              code2.prependRight(start, prefix + "var " + name + " = [], " + len + " = arguments.length;\n" + indentation + "while ( " + len + "-- ) " + name + "[ " + len + " ] = arguments[ " + len + " ]" + suffix);
            }
          });
        }
      } else if (param.type !== "Identifier") {
        if (transforms.parameterDestructuring) {
          var ref2 = this$1.scope.createIdentifier("ref");
          destructure(code2, function(id) {
            return this$1.scope.createIdentifier(id);
          }, function(ref3) {
            var name = ref3.name;
            return this$1.scope.resolveName(name);
          }, param, ref2, false, introStatementGenerators);
          code2.prependRight(param.start, ref2);
        }
      }
    });
  };
  BlockStatement2.prototype.transpileBlockScopedIdentifiers = function transpileBlockScopedIdentifiers(code2) {
    var this$1 = this;
    Object.keys(this.scope.blockScopedDeclarations).forEach(function(name) {
      var declarations = this$1.scope.blockScopedDeclarations[name];
      for (var i$2 = 0, list$2 = declarations; i$2 < list$2.length; i$2 += 1) {
        var declaration = list$2[i$2];
        var cont = false;
        if (declaration.kind === "for.let") {
          var forStatement = declaration.node.findNearest("ForStatement");
          if (forStatement.shouldRewriteAsFunction) {
            var outerAlias = this$1.scope.createIdentifier(name);
            var innerAlias = forStatement.reassigned[name] ? this$1.scope.createIdentifier(name) : name;
            declaration.name = outerAlias;
            code2.overwrite(declaration.node.start, declaration.node.end, outerAlias, { storeName: true });
            forStatement.aliases[name] = {
              outer: outerAlias,
              inner: innerAlias
            };
            for (var i = 0, list = declaration.instances; i < list.length; i += 1) {
              var identifier = list[i];
              var alias = forStatement.body.contains(identifier) ? innerAlias : outerAlias;
              if (name !== alias) {
                code2.overwrite(identifier.start, identifier.end, alias, {
                  storeName: true
                });
              }
            }
            cont = true;
          }
        }
        if (!cont) {
          var alias$1 = this$1.scope.createIdentifier(name);
          if (name !== alias$1) {
            declaration.name = alias$1;
            code2.overwrite(declaration.node.start, declaration.node.end, alias$1, { storeName: true });
            for (var i$1 = 0, list$1 = declaration.instances; i$1 < list$1.length; i$1 += 1) {
              var identifier$1 = list$1[i$1];
              identifier$1.rewritten = true;
              code2.overwrite(identifier$1.start, identifier$1.end, alias$1, {
                storeName: true
              });
            }
          }
        }
      }
    });
  };
  return BlockStatement2;
}(Node$1);
function isArguments(node) {
  return node.type === "Identifier" && node.name === "arguments";
}
function spread(code2, elements, start, argumentsArrayAlias, isNew) {
  var i = elements.length;
  var firstSpreadIndex = -1;
  while (i--) {
    var element$1 = elements[i];
    if (element$1 && element$1.type === "SpreadElement") {
      if (isArguments(element$1.argument)) {
        code2.overwrite(element$1.argument.start, element$1.argument.end, argumentsArrayAlias);
      }
      firstSpreadIndex = i;
    }
  }
  if (firstSpreadIndex === -1) {
    return false;
  }
  if (isNew) {
    for (i = 0; i < elements.length; i += 1) {
      var element$2 = elements[i];
      if (element$2.type === "SpreadElement") {
        code2.remove(element$2.start, element$2.argument.start);
      } else {
        code2.prependRight(element$2.start, "[");
        code2.prependRight(element$2.end, "]");
      }
    }
    return true;
  }
  var element = elements[firstSpreadIndex];
  var previousElement = elements[firstSpreadIndex - 1];
  if (!previousElement) {
    code2.remove(start, element.start);
    code2.overwrite(element.end, elements[1].start, ".concat( ");
  } else {
    code2.overwrite(previousElement.end, element.start, " ].concat( ");
  }
  for (i = firstSpreadIndex; i < elements.length; i += 1) {
    element = elements[i];
    if (element) {
      if (element.type === "SpreadElement") {
        code2.remove(element.start, element.argument.start);
      } else {
        code2.appendLeft(element.start, "[");
        code2.appendLeft(element.end, "]");
      }
    }
  }
  return true;
}
var ArrayExpression = function(Node4) {
  function ArrayExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ArrayExpression2.__proto__ = Node4;
  ArrayExpression2.prototype = Object.create(Node4 && Node4.prototype);
  ArrayExpression2.prototype.constructor = ArrayExpression2;
  ArrayExpression2.prototype.initialise = function initialise2(transforms) {
    var this$1 = this;
    if (transforms.spreadRest && this.elements.length) {
      var lexicalBoundary = this.findLexicalBoundary();
      var i = this.elements.length;
      while (i--) {
        var element = this$1.elements[i];
        if (element && element.type === "SpreadElement" && isArguments(element.argument)) {
          this$1.argumentsArrayAlias = lexicalBoundary.getArgumentsArrayAlias();
        }
      }
    }
    Node4.prototype.initialise.call(this, transforms);
  };
  ArrayExpression2.prototype.transpile = function transpile2(code2, transforms) {
    Node4.prototype.transpile.call(this, code2, transforms);
    if (transforms.spreadRest) {
      if (this.elements.length) {
        var lastElement = this.elements[this.elements.length - 1];
        if (lastElement && /\s*,/.test(code2.original.slice(lastElement.end, this.end))) {
          code2.overwrite(lastElement.end, this.end - 1, " ");
        }
      }
      if (this.elements.length === 1) {
        var element = this.elements[0];
        if (element && element.type === "SpreadElement") {
          if (isArguments(element.argument)) {
            code2.overwrite(this.start, this.end, "[].concat( " + this.argumentsArrayAlias + " )");
          } else {
            code2.overwrite(this.start, element.argument.start, "[].concat( ");
            code2.overwrite(element.end, this.end, " )");
          }
        }
      } else {
        var hasSpreadElements = spread(code2, this.elements, this.start, this.argumentsArrayAlias);
        if (hasSpreadElements) {
          code2.overwrite(this.end - 1, this.end, ")");
        }
      }
    }
  };
  return ArrayExpression2;
}(Node$1);
function removeTrailingComma(code2, c) {
  while (code2.original[c] !== ")") {
    if (code2.original[c] === ",") {
      code2.remove(c, c + 1);
      return;
    }
    if (code2.original[c] === "/") {
      c = code2.original.indexOf(code2.original[c + 1] === "/" ? "\n" : "*/", c) + 1;
    }
    c += 1;
  }
}
var ArrowFunctionExpression = function(Node4) {
  function ArrowFunctionExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ArrowFunctionExpression2.__proto__ = Node4;
  ArrowFunctionExpression2.prototype = Object.create(Node4 && Node4.prototype);
  ArrowFunctionExpression2.prototype.constructor = ArrowFunctionExpression2;
  ArrowFunctionExpression2.prototype.initialise = function initialise2(transforms) {
    this.body.createScope();
    Node4.prototype.initialise.call(this, transforms);
  };
  ArrowFunctionExpression2.prototype.transpile = function transpile2(code2, transforms) {
    var naked = this.params.length === 1 && this.start === this.params[0].start;
    if (transforms.arrow || this.needsArguments(transforms)) {
      var charIndex = this.body.start;
      while (code2.original[charIndex] !== "=") {
        charIndex -= 1;
      }
      code2.remove(charIndex, this.body.start);
      Node4.prototype.transpile.call(this, code2, transforms);
      if (naked) {
        code2.prependRight(this.params[0].start, "(");
        code2.appendLeft(this.params[0].end, ")");
      }
      if (this.parent && this.parent.type === "ExpressionStatement") {
        code2.prependRight(this.start, "!function");
      } else {
        code2.prependRight(this.start, "function ");
      }
    } else {
      Node4.prototype.transpile.call(this, code2, transforms);
    }
    if (transforms.trailingFunctionCommas && this.params.length && !naked) {
      removeTrailingComma(code2, this.params[this.params.length - 1].end);
    }
  };
  ArrowFunctionExpression2.prototype.needsArguments = function needsArguments(transforms) {
    return transforms.spreadRest && this.params.filter(function(param) {
      return param.type === "RestElement";
    }).length > 0;
  };
  return ArrowFunctionExpression2;
}(Node$1);
function checkConst(identifier, scope2) {
  var declaration = scope2.findDeclaration(identifier.name);
  if (declaration && declaration.kind === "const") {
    throw new CompileError(identifier.name + " is read-only", identifier);
  }
}
var AssignmentExpression = function(Node4) {
  function AssignmentExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    AssignmentExpression2.__proto__ = Node4;
  AssignmentExpression2.prototype = Object.create(Node4 && Node4.prototype);
  AssignmentExpression2.prototype.constructor = AssignmentExpression2;
  AssignmentExpression2.prototype.initialise = function initialise2(transforms) {
    if (this.left.type === "Identifier") {
      var declaration = this.findScope(false).findDeclaration(this.left.name);
      var statement = declaration && declaration.node.ancestor(3);
      if (statement && statement.type === "ForStatement" && statement.body.contains(this)) {
        statement.reassigned[this.left.name] = true;
      }
    }
    Node4.prototype.initialise.call(this, transforms);
  };
  AssignmentExpression2.prototype.transpile = function transpile2(code2, transforms) {
    if (this.left.type === "Identifier") {
      checkConst(this.left, this.findScope(false));
    }
    if (this.operator === "**=" && transforms.exponentiation) {
      this.transpileExponentiation(code2, transforms);
    } else if (/Pattern/.test(this.left.type) && transforms.destructuring) {
      this.transpileDestructuring(code2);
    }
    Node4.prototype.transpile.call(this, code2, transforms);
  };
  AssignmentExpression2.prototype.transpileDestructuring = function transpileDestructuring(code2) {
    var this$1 = this;
    var writeScope = this.findScope(true);
    var lookupScope = this.findScope(false);
    var assign2 = writeScope.createDeclaration("assign");
    code2.appendRight(this.left.end, "(" + assign2);
    code2.appendLeft(this.right.end, ", ");
    var statementGenerators = [];
    destructure(code2, function(id) {
      return writeScope.createDeclaration(id);
    }, function(node) {
      var name = lookupScope.resolveName(node.name);
      checkConst(node, lookupScope);
      return name;
    }, this.left, assign2, true, statementGenerators);
    var suffix = ", ";
    statementGenerators.forEach(function(fn, j) {
      if (j === statementGenerators.length - 1) {
        suffix = "";
      }
      fn(this$1.end, "", suffix);
    });
    if (this.unparenthesizedParent().type === "ExpressionStatement") {
      code2.prependRight(this.end, ")");
    } else {
      code2.appendRight(this.end, ", " + assign2 + ")");
    }
  };
  AssignmentExpression2.prototype.transpileExponentiation = function transpileExponentiation(code2) {
    var scope2 = this.findScope(false);
    var charIndex = this.left.end;
    while (code2.original[charIndex] !== "*") {
      charIndex += 1;
    }
    code2.remove(charIndex, charIndex + 2);
    var base;
    var left = this.left.unparenthesize();
    if (left.type === "Identifier") {
      base = scope2.resolveName(left.name);
    } else if (left.type === "MemberExpression") {
      var object;
      var needsObjectVar = false;
      var property;
      var needsPropertyVar = false;
      var statement = this.findNearest(/(?:Statement|Declaration)$/);
      var i0 = statement.getIndentation();
      if (left.property.type === "Identifier") {
        property = left.computed ? scope2.resolveName(left.property.name) : left.property.name;
      } else {
        property = scope2.createDeclaration("property");
        needsPropertyVar = true;
      }
      if (left.object.type === "Identifier") {
        object = scope2.resolveName(left.object.name);
      } else {
        object = scope2.createDeclaration("object");
        needsObjectVar = true;
      }
      if (left.start === statement.start) {
        if (needsObjectVar && needsPropertyVar) {
          code2.prependRight(statement.start, object + " = ");
          code2.overwrite(left.object.end, left.property.start, ";\n" + i0 + property + " = ");
          code2.overwrite(left.property.end, left.end, ";\n" + i0 + object + "[" + property + "]");
        } else if (needsObjectVar) {
          code2.prependRight(statement.start, object + " = ");
          code2.appendLeft(left.object.end, ";\n" + i0);
          code2.appendLeft(left.object.end, object);
        } else if (needsPropertyVar) {
          code2.prependRight(left.property.start, property + " = ");
          code2.appendLeft(left.property.end, ";\n" + i0);
          code2.move(left.property.start, left.property.end, this.start);
          code2.appendLeft(left.object.end, "[" + property + "]");
          code2.remove(left.object.end, left.property.start);
          code2.remove(left.property.end, left.end);
        }
      } else {
        if (needsObjectVar && needsPropertyVar) {
          code2.prependRight(left.start, "( " + object + " = ");
          code2.overwrite(left.object.end, left.property.start, ", " + property + " = ");
          code2.overwrite(left.property.end, left.end, ", " + object + "[" + property + "]");
        } else if (needsObjectVar) {
          code2.prependRight(left.start, "( " + object + " = ");
          code2.appendLeft(left.object.end, ", " + object);
        } else if (needsPropertyVar) {
          code2.prependRight(left.property.start, "( " + property + " = ");
          code2.appendLeft(left.property.end, ", ");
          code2.move(left.property.start, left.property.end, left.start);
          code2.overwrite(left.object.end, left.property.start, "[" + property + "]");
          code2.remove(left.property.end, left.end);
        }
        if (needsPropertyVar) {
          code2.appendLeft(this.end, " )");
        }
      }
      base = object + (left.computed || needsPropertyVar ? "[" + property + "]" : "." + property);
    }
    code2.prependRight(this.right.start, "Math.pow( " + base + ", ");
    code2.appendLeft(this.right.end, " )");
  };
  return AssignmentExpression2;
}(Node$1);
var BinaryExpression = function(Node4) {
  function BinaryExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    BinaryExpression2.__proto__ = Node4;
  BinaryExpression2.prototype = Object.create(Node4 && Node4.prototype);
  BinaryExpression2.prototype.constructor = BinaryExpression2;
  BinaryExpression2.prototype.transpile = function transpile2(code2, transforms) {
    if (this.operator === "**" && transforms.exponentiation) {
      code2.prependRight(this.start, "Math.pow( ");
      code2.overwrite(this.left.end, this.right.start, ", ");
      code2.appendLeft(this.end, " )");
    }
    Node4.prototype.transpile.call(this, code2, transforms);
  };
  return BinaryExpression2;
}(Node$1);
var loopStatement = /(?:For(?:In|Of)?|While)Statement/;
var BreakStatement = function(Node4) {
  function BreakStatement2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    BreakStatement2.__proto__ = Node4;
  BreakStatement2.prototype = Object.create(Node4 && Node4.prototype);
  BreakStatement2.prototype.constructor = BreakStatement2;
  BreakStatement2.prototype.initialise = function initialise2() {
    var loop = this.findNearest(loopStatement);
    var switchCase = this.findNearest("SwitchCase");
    if (loop && (!switchCase || loop.depth > switchCase.depth)) {
      loop.canBreak = true;
      this.loop = loop;
    }
  };
  BreakStatement2.prototype.transpile = function transpile2(code2) {
    if (this.loop && this.loop.shouldRewriteAsFunction) {
      if (this.label) {
        throw new CompileError("Labels are not currently supported in a loop with locally-scoped variables", this);
      }
      code2.overwrite(this.start, this.start + 5, "return 'break'");
    }
  };
  return BreakStatement2;
}(Node$1);
var CallExpression = function(Node4) {
  function CallExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    CallExpression2.__proto__ = Node4;
  CallExpression2.prototype = Object.create(Node4 && Node4.prototype);
  CallExpression2.prototype.constructor = CallExpression2;
  CallExpression2.prototype.initialise = function initialise2(transforms) {
    var this$1 = this;
    if (transforms.spreadRest && this.arguments.length > 1) {
      var lexicalBoundary = this.findLexicalBoundary();
      var i = this.arguments.length;
      while (i--) {
        var arg = this$1.arguments[i];
        if (arg.type === "SpreadElement" && isArguments(arg.argument)) {
          this$1.argumentsArrayAlias = lexicalBoundary.getArgumentsArrayAlias();
        }
      }
    }
    Node4.prototype.initialise.call(this, transforms);
  };
  CallExpression2.prototype.transpile = function transpile2(code2, transforms) {
    if (transforms.spreadRest && this.arguments.length) {
      var hasSpreadElements = false;
      var context;
      var firstArgument = this.arguments[0];
      if (this.arguments.length === 1) {
        if (firstArgument.type === "SpreadElement") {
          code2.remove(firstArgument.start, firstArgument.argument.start);
          hasSpreadElements = true;
        }
      } else {
        hasSpreadElements = spread(code2, this.arguments, firstArgument.start, this.argumentsArrayAlias);
      }
      if (hasSpreadElements) {
        var _super = null;
        if (this.callee.type === "Super") {
          _super = this.callee;
        } else if (this.callee.type === "MemberExpression" && this.callee.object.type === "Super") {
          _super = this.callee.object;
        }
        if (!_super && this.callee.type === "MemberExpression") {
          if (this.callee.object.type === "Identifier") {
            context = this.callee.object.name;
          } else {
            context = this.findScope(true).createDeclaration("ref");
            var callExpression = this.callee.object;
            code2.prependRight(callExpression.start, "(" + context + " = ");
            code2.appendLeft(callExpression.end, ")");
          }
        } else {
          context = "void 0";
        }
        code2.appendLeft(this.callee.end, ".apply");
        if (_super) {
          _super.noCall = true;
          if (this.arguments.length > 1) {
            if (firstArgument.type !== "SpreadElement") {
              code2.prependRight(firstArgument.start, "[ ");
            }
            code2.appendLeft(this.arguments[this.arguments.length - 1].end, " )");
          }
        } else if (this.arguments.length === 1) {
          code2.prependRight(firstArgument.start, context + ", ");
        } else {
          if (firstArgument.type === "SpreadElement") {
            code2.appendLeft(firstArgument.start, context + ", ");
          } else {
            code2.appendLeft(firstArgument.start, context + ", [ ");
          }
          code2.appendLeft(this.arguments[this.arguments.length - 1].end, " )");
        }
      }
    }
    if (transforms.trailingFunctionCommas && this.arguments.length) {
      removeTrailingComma(code2, this.arguments[this.arguments.length - 1].end);
    }
    Node4.prototype.transpile.call(this, code2, transforms);
  };
  return CallExpression2;
}(Node$1);
var ClassBody = function(Node4) {
  function ClassBody2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ClassBody2.__proto__ = Node4;
  ClassBody2.prototype = Object.create(Node4 && Node4.prototype);
  ClassBody2.prototype.constructor = ClassBody2;
  ClassBody2.prototype.transpile = function transpile2(code2, transforms, inFunctionExpression, superName) {
    var this$1 = this;
    if (transforms.classes) {
      var name = this.parent.name;
      var indentStr = code2.getIndentString();
      var i0 = this.getIndentation() + (inFunctionExpression ? indentStr : "");
      var i1 = i0 + indentStr;
      var constructorIndex = findIndex(this.body, function(node) {
        return node.kind === "constructor";
      });
      var constructor = this.body[constructorIndex];
      var introBlock = "";
      var outroBlock = "";
      if (this.body.length) {
        code2.remove(this.start, this.body[0].start);
        code2.remove(this.body[this.body.length - 1].end, this.end);
      } else {
        code2.remove(this.start, this.end);
      }
      if (constructor) {
        constructor.value.body.isConstructorBody = true;
        var previousMethod = this.body[constructorIndex - 1];
        var nextMethod = this.body[constructorIndex + 1];
        if (constructorIndex > 0) {
          code2.remove(previousMethod.end, constructor.start);
          code2.move(constructor.start, nextMethod ? nextMethod.start : this.end - 1, this.body[0].start);
        }
        if (!inFunctionExpression) {
          code2.appendLeft(constructor.end, ";");
        }
      }
      var namedFunctions = this.program.options.namedFunctionExpressions !== false;
      var namedConstructor = namedFunctions || this.parent.superClass || this.parent.type !== "ClassDeclaration";
      if (this.parent.superClass) {
        var inheritanceBlock = "if ( " + superName + " ) " + name + ".__proto__ = " + superName + ";\n" + i0 + name + ".prototype = Object.create( " + superName + " && " + superName + ".prototype );\n" + i0 + name + ".prototype.constructor = " + name + ";";
        if (constructor) {
          introBlock += "\n\n" + i0 + inheritanceBlock;
        } else {
          var fn = "function " + name + " () {" + (superName ? "\n" + i1 + superName + ".apply(this, arguments);\n" + i0 + "}" : "}") + (inFunctionExpression ? "" : ";") + (this.body.length ? "\n\n" + i0 : "");
          inheritanceBlock = fn + inheritanceBlock;
          introBlock += inheritanceBlock + "\n\n" + i0;
        }
      } else if (!constructor) {
        var fn$1 = "function " + (namedConstructor ? name + " " : "") + "() {}";
        if (this.parent.type === "ClassDeclaration") {
          fn$1 += ";";
        }
        if (this.body.length) {
          fn$1 += "\n\n" + i0;
        }
        introBlock += fn$1;
      }
      var scope2 = this.findScope(false);
      var prototypeGettersAndSetters = [];
      var staticGettersAndSetters = [];
      var prototypeAccessors2;
      var staticAccessors;
      this.body.forEach(function(method, i) {
        if ((method.kind === "get" || method.kind === "set") && transforms.getterSetter) {
          throw new CompileError("getters and setters are not supported. Use `transforms: { getterSetter: false }` to skip transformation and disable this error", method);
        }
        if (method.kind === "constructor") {
          var constructorName = namedConstructor ? " " + name : "";
          code2.overwrite(method.key.start, method.key.end, "function" + constructorName);
          return;
        }
        if (method.static) {
          var len = code2.original[method.start + 6] == " " ? 7 : 6;
          code2.remove(method.start, method.start + len);
        }
        var isAccessor = method.kind !== "method";
        var lhs;
        var methodName = method.key.name;
        if (reserved[methodName] || method.value.body.scope.references[methodName]) {
          methodName = scope2.createIdentifier(methodName);
        }
        var fake_computed = false;
        if (!method.computed && method.key.type === "Literal") {
          fake_computed = true;
          method.computed = true;
        }
        if (isAccessor) {
          if (method.computed) {
            throw new Error("Computed accessor properties are not currently supported");
          }
          code2.remove(method.start, method.key.start);
          if (method.static) {
            if (!~staticGettersAndSetters.indexOf(method.key.name)) {
              staticGettersAndSetters.push(method.key.name);
            }
            if (!staticAccessors) {
              staticAccessors = scope2.createIdentifier("staticAccessors");
            }
            lhs = "" + staticAccessors;
          } else {
            if (!~prototypeGettersAndSetters.indexOf(method.key.name)) {
              prototypeGettersAndSetters.push(method.key.name);
            }
            if (!prototypeAccessors2) {
              prototypeAccessors2 = scope2.createIdentifier("prototypeAccessors");
            }
            lhs = "" + prototypeAccessors2;
          }
        } else {
          lhs = method.static ? "" + name : name + ".prototype";
        }
        if (!method.computed) {
          lhs += ".";
        }
        var insertNewlines = constructorIndex > 0 && i === constructorIndex + 1 || i === 0 && constructorIndex === this$1.body.length - 1;
        if (insertNewlines) {
          lhs = "\n\n" + i0 + lhs;
        }
        var c = method.key.end;
        if (method.computed) {
          if (fake_computed) {
            code2.prependRight(method.key.start, "[");
            code2.appendLeft(method.key.end, "]");
          } else {
            while (code2.original[c] !== "]") {
              c += 1;
            }
            c += 1;
          }
        }
        var funcName = method.computed || isAccessor || !namedFunctions ? "" : methodName + " ";
        var rhs = (isAccessor ? "." + method.kind : "") + " = function" + (method.value.generator ? "* " : " ") + funcName;
        code2.remove(c, method.value.start);
        code2.prependRight(method.value.start, rhs);
        code2.appendLeft(method.end, ";");
        if (method.value.generator) {
          code2.remove(method.start, method.key.start);
        }
        code2.prependRight(method.start, lhs);
      });
      if (prototypeGettersAndSetters.length || staticGettersAndSetters.length) {
        var intro = [];
        var outro = [];
        if (prototypeGettersAndSetters.length) {
          intro.push("var " + prototypeAccessors2 + " = { " + prototypeGettersAndSetters.map(function(name2) {
            return name2 + ": { configurable: true }";
          }).join(",") + " };");
          outro.push("Object.defineProperties( " + name + ".prototype, " + prototypeAccessors2 + " );");
        }
        if (staticGettersAndSetters.length) {
          intro.push("var " + staticAccessors + " = { " + staticGettersAndSetters.map(function(name2) {
            return name2 + ": { configurable: true }";
          }).join(",") + " };");
          outro.push("Object.defineProperties( " + name + ", " + staticAccessors + " );");
        }
        if (constructor) {
          introBlock += "\n\n" + i0;
        }
        introBlock += intro.join("\n" + i0);
        if (!constructor) {
          introBlock += "\n\n" + i0;
        }
        outroBlock += "\n\n" + i0 + outro.join("\n" + i0);
      }
      if (constructor) {
        code2.appendLeft(constructor.end, introBlock);
      } else {
        code2.prependRight(this.start, introBlock);
      }
      code2.appendLeft(this.end, outroBlock);
    }
    Node4.prototype.transpile.call(this, code2, transforms);
  };
  return ClassBody2;
}(Node$1);
function deindent(node, code2) {
  var start = node.start;
  var end = node.end;
  var indentStr = code2.getIndentString();
  var indentStrLen = indentStr.length;
  var indentStart = start - indentStrLen;
  if (!node.program.indentExclusions[indentStart] && code2.original.slice(indentStart, start) === indentStr) {
    code2.remove(indentStart, start);
  }
  var pattern = new RegExp(indentStr + "\\S", "g");
  var slice2 = code2.original.slice(start, end);
  var match;
  while (match = pattern.exec(slice2)) {
    var removeStart = start + match.index;
    if (!node.program.indentExclusions[removeStart]) {
      code2.remove(removeStart, removeStart + indentStrLen);
    }
  }
}
var ClassDeclaration = function(Node4) {
  function ClassDeclaration2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ClassDeclaration2.__proto__ = Node4;
  ClassDeclaration2.prototype = Object.create(Node4 && Node4.prototype);
  ClassDeclaration2.prototype.constructor = ClassDeclaration2;
  ClassDeclaration2.prototype.initialise = function initialise2(transforms) {
    if (this.id) {
      this.name = this.id.name;
      this.findScope(true).addDeclaration(this.id, "class");
    } else {
      this.name = this.findScope(true).createIdentifier("defaultExport");
    }
    Node4.prototype.initialise.call(this, transforms);
  };
  ClassDeclaration2.prototype.transpile = function transpile2(code2, transforms) {
    if (transforms.classes) {
      if (!this.superClass) {
        deindent(this.body, code2);
      }
      var superName = this.superClass && (this.superClass.name || "superclass");
      var i0 = this.getIndentation();
      var i1 = i0 + code2.getIndentString();
      var isExportDefaultDeclaration = this.parent.type === "ExportDefaultDeclaration";
      if (isExportDefaultDeclaration) {
        code2.remove(this.parent.start, this.start);
      }
      var c = this.start;
      if (this.id) {
        code2.overwrite(c, this.id.start, "var ");
        c = this.id.end;
      } else {
        code2.prependLeft(c, "var " + this.name);
      }
      if (this.superClass) {
        if (this.superClass.end === this.body.start) {
          code2.remove(c, this.superClass.start);
          code2.appendLeft(c, " = /*@__PURE__*/(function (" + superName + ") {\n" + i1);
        } else {
          code2.overwrite(c, this.superClass.start, " = ");
          code2.overwrite(this.superClass.end, this.body.start, "/*@__PURE__*/(function (" + superName + ") {\n" + i1);
        }
      } else {
        if (c === this.body.start) {
          code2.appendLeft(c, " = ");
        } else {
          code2.overwrite(c, this.body.start, " = ");
        }
      }
      this.body.transpile(code2, transforms, !!this.superClass, superName);
      var syntheticDefaultExport = isExportDefaultDeclaration ? "\n\n" + i0 + "export default " + this.name + ";" : "";
      if (this.superClass) {
        code2.appendLeft(this.end, "\n\n" + i1 + "return " + this.name + ";\n" + i0 + "}(");
        code2.move(this.superClass.start, this.superClass.end, this.end);
        code2.prependRight(this.end, "));" + syntheticDefaultExport);
      } else if (syntheticDefaultExport) {
        code2.prependRight(this.end, syntheticDefaultExport);
      }
    } else {
      this.body.transpile(code2, transforms, false, null);
    }
  };
  return ClassDeclaration2;
}(Node$1);
var ClassExpression = function(Node4) {
  function ClassExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ClassExpression2.__proto__ = Node4;
  ClassExpression2.prototype = Object.create(Node4 && Node4.prototype);
  ClassExpression2.prototype.constructor = ClassExpression2;
  ClassExpression2.prototype.initialise = function initialise2(transforms) {
    this.name = (this.id ? this.id.name : this.parent.type === "VariableDeclarator" ? this.parent.id.name : this.parent.type !== "AssignmentExpression" ? null : this.parent.left.type === "Identifier" ? this.parent.left.name : this.parent.left.type === "MemberExpression" ? this.parent.left.property.name : null) || this.findScope(true).createIdentifier("anonymous");
    Node4.prototype.initialise.call(this, transforms);
  };
  ClassExpression2.prototype.transpile = function transpile2(code2, transforms) {
    if (transforms.classes) {
      var superName = this.superClass && (this.superClass.name || "superclass");
      var i0 = this.getIndentation();
      var i1 = i0 + code2.getIndentString();
      if (this.superClass) {
        code2.remove(this.start, this.superClass.start);
        code2.remove(this.superClass.end, this.body.start);
        code2.appendRight(this.start, "/*@__PURE__*/(function (" + superName + ") {\n" + i1);
      } else {
        code2.overwrite(this.start, this.body.start, "/*@__PURE__*/(function () {\n" + i1);
      }
      this.body.transpile(code2, transforms, true, superName);
      var superClass = "";
      if (this.superClass) {
        superClass = code2.slice(this.superClass.start, this.superClass.end);
        code2.remove(this.superClass.start, this.superClass.end);
      }
      code2.appendLeft(this.end, "\n\n" + i1 + "return " + this.name + ";\n" + i0 + "}(" + superClass + "))");
    } else {
      this.body.transpile(code2, transforms, false);
    }
  };
  return ClassExpression2;
}(Node$1);
var ContinueStatement = function(Node4) {
  function ContinueStatement2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ContinueStatement2.__proto__ = Node4;
  ContinueStatement2.prototype = Object.create(Node4 && Node4.prototype);
  ContinueStatement2.prototype.constructor = ContinueStatement2;
  ContinueStatement2.prototype.transpile = function transpile2(code2) {
    var loop = this.findNearest(loopStatement);
    if (loop.shouldRewriteAsFunction) {
      if (this.label) {
        throw new CompileError("Labels are not currently supported in a loop with locally-scoped variables", this);
      }
      code2.overwrite(this.start, this.start + 8, "return");
    }
  };
  return ContinueStatement2;
}(Node$1);
var ExportDefaultDeclaration = function(Node4) {
  function ExportDefaultDeclaration2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ExportDefaultDeclaration2.__proto__ = Node4;
  ExportDefaultDeclaration2.prototype = Object.create(Node4 && Node4.prototype);
  ExportDefaultDeclaration2.prototype.constructor = ExportDefaultDeclaration2;
  ExportDefaultDeclaration2.prototype.initialise = function initialise2(transforms) {
    if (transforms.moduleExport) {
      throw new CompileError("export is not supported", this);
    }
    Node4.prototype.initialise.call(this, transforms);
  };
  return ExportDefaultDeclaration2;
}(Node$1);
var ExportNamedDeclaration = function(Node4) {
  function ExportNamedDeclaration2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ExportNamedDeclaration2.__proto__ = Node4;
  ExportNamedDeclaration2.prototype = Object.create(Node4 && Node4.prototype);
  ExportNamedDeclaration2.prototype.constructor = ExportNamedDeclaration2;
  ExportNamedDeclaration2.prototype.initialise = function initialise2(transforms) {
    if (transforms.moduleExport) {
      throw new CompileError("export is not supported", this);
    }
    Node4.prototype.initialise.call(this, transforms);
  };
  return ExportNamedDeclaration2;
}(Node$1);
var LoopStatement = function(Node4) {
  function LoopStatement2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    LoopStatement2.__proto__ = Node4;
  LoopStatement2.prototype = Object.create(Node4 && Node4.prototype);
  LoopStatement2.prototype.constructor = LoopStatement2;
  LoopStatement2.prototype.findScope = function findScope3(functionScope) {
    return functionScope || !this.createdScope ? this.parent.findScope(functionScope) : this.body.scope;
  };
  LoopStatement2.prototype.initialise = function initialise2(transforms) {
    var this$1 = this;
    this.body.createScope();
    this.createdScope = true;
    this.reassigned = Object.create(null);
    this.aliases = Object.create(null);
    this.thisRefs = [];
    Node4.prototype.initialise.call(this, transforms);
    if (transforms.letConst) {
      var names = Object.keys(this.body.scope.declarations);
      var i = names.length;
      while (i--) {
        var name = names[i];
        var declaration = this$1.body.scope.declarations[name];
        var j = declaration.instances.length;
        while (j--) {
          var instance = declaration.instances[j];
          var nearestFunctionExpression = instance.findNearest(/Function/);
          if (nearestFunctionExpression && nearestFunctionExpression.depth > this$1.depth) {
            this$1.shouldRewriteAsFunction = true;
            for (var i$1 = 0, list = this$1.thisRefs; i$1 < list.length; i$1 += 1) {
              var node = list[i$1];
              node.alias = node.alias || node.findLexicalBoundary().getThisAlias();
            }
            break;
          }
        }
        if (this$1.shouldRewriteAsFunction) {
          break;
        }
      }
    }
  };
  LoopStatement2.prototype.transpile = function transpile2(code2, transforms) {
    var needsBlock = this.type != "ForOfStatement" && (this.body.type !== "BlockStatement" || this.body.type === "BlockStatement" && this.body.synthetic);
    if (this.shouldRewriteAsFunction) {
      var i0 = this.getIndentation();
      var i1 = i0 + code2.getIndentString();
      var argString = this.args ? " " + this.args.join(", ") + " " : "";
      var paramString = this.params ? " " + this.params.join(", ") + " " : "";
      var functionScope = this.findScope(true);
      var loop = functionScope.createIdentifier("loop");
      var before = "var " + loop + " = function (" + paramString + ") " + (this.body.synthetic ? "{\n" + i0 + code2.getIndentString() : "");
      var after = (this.body.synthetic ? "\n" + i0 + "}" : "") + ";\n\n" + i0;
      code2.prependRight(this.body.start, before);
      code2.appendLeft(this.body.end, after);
      code2.move(this.start, this.body.start, this.body.end);
      if (this.canBreak || this.canReturn) {
        var returned = functionScope.createIdentifier("returned");
        var insert2 = "{\n" + i1 + "var " + returned + " = " + loop + "(" + argString + ");\n";
        if (this.canBreak) {
          insert2 += "\n" + i1 + "if ( " + returned + " === 'break' ) break;";
        }
        if (this.canReturn) {
          insert2 += "\n" + i1 + "if ( " + returned + " ) return " + returned + ".v;";
        }
        insert2 += "\n" + i0 + "}";
        code2.prependRight(this.body.end, insert2);
      } else {
        var callExpression = loop + "(" + argString + ");";
        if (this.type === "DoWhileStatement") {
          code2.overwrite(this.start, this.body.start, "do {\n" + i1 + callExpression + "\n" + i0 + "}");
        } else {
          code2.prependRight(this.body.end, callExpression);
        }
      }
    } else if (needsBlock) {
      code2.appendLeft(this.body.start, "{ ");
      code2.prependRight(this.body.end, " }");
    }
    Node4.prototype.transpile.call(this, code2, transforms);
  };
  return LoopStatement2;
}(Node$1);
var ForStatement = function(LoopStatement$$1) {
  function ForStatement2() {
    LoopStatement$$1.apply(this, arguments);
  }
  if (LoopStatement$$1)
    ForStatement2.__proto__ = LoopStatement$$1;
  ForStatement2.prototype = Object.create(LoopStatement$$1 && LoopStatement$$1.prototype);
  ForStatement2.prototype.constructor = ForStatement2;
  ForStatement2.prototype.findScope = function findScope3(functionScope) {
    return functionScope || !this.createdScope ? this.parent.findScope(functionScope) : this.body.scope;
  };
  ForStatement2.prototype.transpile = function transpile2(code2, transforms) {
    var this$1 = this;
    var i1 = this.getIndentation() + code2.getIndentString();
    if (this.shouldRewriteAsFunction) {
      var names = this.init.type === "VariableDeclaration" ? this.init.declarations.map(function(declarator) {
        return extractNames(declarator.id);
      }) : [];
      var aliases = this.aliases;
      this.args = names.map(function(name) {
        return name in this$1.aliases ? this$1.aliases[name].outer : name;
      });
      this.params = names.map(function(name) {
        return name in this$1.aliases ? this$1.aliases[name].inner : name;
      });
      var updates = Object.keys(this.reassigned).map(function(name) {
        return aliases[name].outer + " = " + aliases[name].inner + ";";
      });
      if (updates.length) {
        if (this.body.synthetic) {
          code2.appendLeft(this.body.body[0].end, "; " + updates.join(" "));
        } else {
          var lastStatement = this.body.body[this.body.body.length - 1];
          code2.appendLeft(lastStatement.end, "\n\n" + i1 + updates.join("\n" + i1));
        }
      }
    }
    LoopStatement$$1.prototype.transpile.call(this, code2, transforms);
  };
  return ForStatement2;
}(LoopStatement);
var ForInStatement = function(LoopStatement$$1) {
  function ForInStatement2() {
    LoopStatement$$1.apply(this, arguments);
  }
  if (LoopStatement$$1)
    ForInStatement2.__proto__ = LoopStatement$$1;
  ForInStatement2.prototype = Object.create(LoopStatement$$1 && LoopStatement$$1.prototype);
  ForInStatement2.prototype.constructor = ForInStatement2;
  ForInStatement2.prototype.findScope = function findScope3(functionScope) {
    return functionScope || !this.createdScope ? this.parent.findScope(functionScope) : this.body.scope;
  };
  ForInStatement2.prototype.transpile = function transpile2(code2, transforms) {
    var this$1 = this;
    var hasDeclaration = this.left.type === "VariableDeclaration";
    if (this.shouldRewriteAsFunction) {
      var names = hasDeclaration ? this.left.declarations.map(function(declarator) {
        return extractNames(declarator.id);
      }) : [];
      this.args = names.map(function(name) {
        return name in this$1.aliases ? this$1.aliases[name].outer : name;
      });
      this.params = names.map(function(name) {
        return name in this$1.aliases ? this$1.aliases[name].inner : name;
      });
    }
    LoopStatement$$1.prototype.transpile.call(this, code2, transforms);
    var maybePattern = hasDeclaration ? this.left.declarations[0].id : this.left;
    if (maybePattern.type !== "Identifier") {
      this.destructurePattern(code2, maybePattern, hasDeclaration);
    }
  };
  ForInStatement2.prototype.destructurePattern = function destructurePattern(code2, pattern, isDeclaration) {
    var scope2 = this.findScope(true);
    var i0 = this.getIndentation();
    var i1 = i0 + code2.getIndentString();
    var ref2 = scope2.createIdentifier("ref");
    var bodyStart = this.body.body.length ? this.body.body[0].start : this.body.start + 1;
    code2.move(pattern.start, pattern.end, bodyStart);
    code2.prependRight(pattern.end, isDeclaration ? ref2 : "var " + ref2);
    var statementGenerators = [];
    destructure(code2, function(id) {
      return scope2.createIdentifier(id);
    }, function(ref3) {
      var name = ref3.name;
      return scope2.resolveName(name);
    }, pattern, ref2, false, statementGenerators);
    var suffix = ";\n" + i1;
    statementGenerators.forEach(function(fn, i) {
      if (i === statementGenerators.length - 1) {
        suffix = ";\n\n" + i1;
      }
      fn(bodyStart, "", suffix);
    });
  };
  return ForInStatement2;
}(LoopStatement);
var ForOfStatement = function(LoopStatement$$1) {
  function ForOfStatement2() {
    LoopStatement$$1.apply(this, arguments);
  }
  if (LoopStatement$$1)
    ForOfStatement2.__proto__ = LoopStatement$$1;
  ForOfStatement2.prototype = Object.create(LoopStatement$$1 && LoopStatement$$1.prototype);
  ForOfStatement2.prototype.constructor = ForOfStatement2;
  ForOfStatement2.prototype.initialise = function initialise2(transforms) {
    if (transforms.forOf && !transforms.dangerousForOf) {
      throw new CompileError("for...of statements are not supported. Use `transforms: { forOf: false }` to skip transformation and disable this error, or `transforms: { dangerousForOf: true }` if you know what you're doing", this);
    }
    LoopStatement$$1.prototype.initialise.call(this, transforms);
  };
  ForOfStatement2.prototype.transpile = function transpile2(code2, transforms) {
    LoopStatement$$1.prototype.transpile.call(this, code2, transforms);
    if (!transforms.dangerousForOf) {
      return;
    }
    if (!this.body.body[0]) {
      if (this.left.type === "VariableDeclaration" && this.left.kind === "var") {
        code2.remove(this.start, this.left.start);
        code2.appendLeft(this.left.end, ";");
        code2.remove(this.left.end, this.end);
      } else {
        code2.remove(this.start, this.end);
      }
      return;
    }
    var scope2 = this.findScope(true);
    var i0 = this.getIndentation();
    var i1 = i0 + code2.getIndentString();
    var key = scope2.createIdentifier("i");
    var list = scope2.createIdentifier("list");
    if (this.body.synthetic) {
      code2.prependRight(this.left.start, "{\n" + i1);
      code2.appendLeft(this.body.body[0].end, "\n" + i0 + "}");
    }
    var bodyStart = this.body.body[0].start;
    code2.remove(this.left.end, this.right.start);
    code2.move(this.left.start, this.left.end, bodyStart);
    code2.prependRight(this.right.start, "var " + key + " = 0, " + list + " = ");
    code2.appendLeft(this.right.end, "; " + key + " < " + list + ".length; " + key + " += 1");
    var isDeclaration = this.left.type === "VariableDeclaration";
    var maybeDestructuring = isDeclaration ? this.left.declarations[0].id : this.left;
    if (maybeDestructuring.type !== "Identifier") {
      var statementGenerators = [];
      var ref2 = scope2.createIdentifier("ref");
      destructure(code2, function(id) {
        return scope2.createIdentifier(id);
      }, function(ref3) {
        var name = ref3.name;
        return scope2.resolveName(name);
      }, maybeDestructuring, ref2, !isDeclaration, statementGenerators);
      var suffix = ";\n" + i1;
      statementGenerators.forEach(function(fn, i) {
        if (i === statementGenerators.length - 1) {
          suffix = ";\n\n" + i1;
        }
        fn(bodyStart, "", suffix);
      });
      if (isDeclaration) {
        code2.appendLeft(this.left.start + this.left.kind.length + 1, ref2);
        code2.appendLeft(this.left.end, " = " + list + "[" + key + "];\n" + i1);
      } else {
        code2.appendLeft(this.left.end, "var " + ref2 + " = " + list + "[" + key + "];\n" + i1);
      }
    } else {
      code2.appendLeft(this.left.end, " = " + list + "[" + key + "];\n\n" + i1);
    }
  };
  return ForOfStatement2;
}(LoopStatement);
var FunctionDeclaration = function(Node4) {
  function FunctionDeclaration2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    FunctionDeclaration2.__proto__ = Node4;
  FunctionDeclaration2.prototype = Object.create(Node4 && Node4.prototype);
  FunctionDeclaration2.prototype.constructor = FunctionDeclaration2;
  FunctionDeclaration2.prototype.initialise = function initialise2(transforms) {
    if (this.generator && transforms.generator) {
      throw new CompileError("Generators are not supported", this);
    }
    this.body.createScope();
    if (this.id) {
      this.findScope(true).addDeclaration(this.id, "function");
    }
    Node4.prototype.initialise.call(this, transforms);
  };
  FunctionDeclaration2.prototype.transpile = function transpile2(code2, transforms) {
    Node4.prototype.transpile.call(this, code2, transforms);
    if (transforms.trailingFunctionCommas && this.params.length) {
      removeTrailingComma(code2, this.params[this.params.length - 1].end);
    }
  };
  return FunctionDeclaration2;
}(Node$1);
var FunctionExpression = function(Node4) {
  function FunctionExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    FunctionExpression2.__proto__ = Node4;
  FunctionExpression2.prototype = Object.create(Node4 && Node4.prototype);
  FunctionExpression2.prototype.constructor = FunctionExpression2;
  FunctionExpression2.prototype.initialise = function initialise2(transforms) {
    var this$1 = this;
    if (this.generator && transforms.generator) {
      throw new CompileError("Generators are not supported", this);
    }
    this.body.createScope();
    if (this.id) {
      this.body.scope.addDeclaration(this.id, "function");
    }
    Node4.prototype.initialise.call(this, transforms);
    var parent = this.parent;
    var methodName;
    if (transforms.conciseMethodProperty && parent.type === "Property" && parent.kind === "init" && parent.method && parent.key.type === "Identifier") {
      methodName = parent.key.name;
    } else if (transforms.classes && parent.type === "MethodDefinition" && parent.kind === "method" && parent.key.type === "Identifier") {
      methodName = parent.key.name;
    } else if (this.id && this.id.type === "Identifier") {
      methodName = this.id.alias || this.id.name;
    }
    if (methodName) {
      for (var i$1 = 0, list$1 = this$1.params; i$1 < list$1.length; i$1 += 1) {
        var param = list$1[i$1];
        if (param.type === "Identifier" && methodName === param.name) {
          var scope2 = this$1.body.scope;
          var declaration = scope2.declarations[methodName];
          var alias = scope2.createIdentifier(methodName);
          param.alias = alias;
          for (var i = 0, list = declaration.instances; i < list.length; i += 1) {
            var identifier = list[i];
            identifier.alias = alias;
          }
          break;
        }
      }
    }
  };
  FunctionExpression2.prototype.transpile = function transpile2(code2, transforms) {
    Node4.prototype.transpile.call(this, code2, transforms);
    if (transforms.trailingFunctionCommas && this.params.length) {
      removeTrailingComma(code2, this.params[this.params.length - 1].end);
    }
  };
  return FunctionExpression2;
}(Node$1);
function isReference(node, parent) {
  if (node.type === "MemberExpression") {
    return !node.computed && isReference(node.object, node);
  }
  if (node.type === "Identifier") {
    if (!parent) {
      return true;
    }
    if (/(Function|Class)Expression/.test(parent.type)) {
      return false;
    }
    if (parent.type === "VariableDeclarator") {
      return node === parent.init;
    }
    if (parent.type === "MemberExpression" || parent.type === "MethodDefinition") {
      return parent.computed || node === parent.object;
    }
    if (parent.type === "ArrayPattern") {
      return false;
    }
    if (parent.type === "Property") {
      if (parent.parent.type === "ObjectPattern") {
        return false;
      }
      return parent.computed || node === parent.value;
    }
    if (parent.type === "MethodDefinition") {
      return false;
    }
    if (parent.type === "ExportSpecifier" && node !== parent.local) {
      return false;
    }
    return true;
  }
}
var Identifier2 = function(Node4) {
  function Identifier3() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    Identifier3.__proto__ = Node4;
  Identifier3.prototype = Object.create(Node4 && Node4.prototype);
  Identifier3.prototype.constructor = Identifier3;
  Identifier3.prototype.findScope = function findScope3(functionScope) {
    if (this.parent.params && ~this.parent.params.indexOf(this)) {
      return this.parent.body.scope;
    }
    if (this.parent.type === "FunctionExpression" && this === this.parent.id) {
      return this.parent.body.scope;
    }
    return this.parent.findScope(functionScope);
  };
  Identifier3.prototype.initialise = function initialise2(transforms) {
    if (isReference(this, this.parent)) {
      if (transforms.arrow && this.name === "arguments" && !this.findScope(false).contains(this.name)) {
        var lexicalBoundary = this.findLexicalBoundary();
        var arrowFunction = this.findNearest("ArrowFunctionExpression");
        var loop = this.findNearest(loopStatement);
        if (arrowFunction && arrowFunction.depth > lexicalBoundary.depth) {
          this.alias = lexicalBoundary.getArgumentsAlias();
        }
        if (loop && loop.body.contains(this) && loop.depth > lexicalBoundary.depth) {
          this.alias = lexicalBoundary.getArgumentsAlias();
        }
      }
      this.findScope(false).addReference(this);
    }
  };
  Identifier3.prototype.transpile = function transpile2(code2) {
    if (this.alias) {
      code2.overwrite(this.start, this.end, this.alias, {
        storeName: true,
        contentOnly: true
      });
    }
  };
  return Identifier3;
}(Node$1);
var IfStatement = function(Node4) {
  function IfStatement2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    IfStatement2.__proto__ = Node4;
  IfStatement2.prototype = Object.create(Node4 && Node4.prototype);
  IfStatement2.prototype.constructor = IfStatement2;
  IfStatement2.prototype.initialise = function initialise2(transforms) {
    Node4.prototype.initialise.call(this, transforms);
  };
  IfStatement2.prototype.transpile = function transpile2(code2, transforms) {
    if (this.consequent.type !== "BlockStatement" || this.consequent.type === "BlockStatement" && this.consequent.synthetic) {
      code2.appendLeft(this.consequent.start, "{ ");
      code2.prependRight(this.consequent.end, " }");
    }
    if (this.alternate && this.alternate.type !== "IfStatement" && (this.alternate.type !== "BlockStatement" || this.alternate.type === "BlockStatement" && this.alternate.synthetic)) {
      code2.appendLeft(this.alternate.start, "{ ");
      code2.prependRight(this.alternate.end, " }");
    }
    Node4.prototype.transpile.call(this, code2, transforms);
  };
  return IfStatement2;
}(Node$1);
var ImportDeclaration = function(Node4) {
  function ImportDeclaration2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ImportDeclaration2.__proto__ = Node4;
  ImportDeclaration2.prototype = Object.create(Node4 && Node4.prototype);
  ImportDeclaration2.prototype.constructor = ImportDeclaration2;
  ImportDeclaration2.prototype.initialise = function initialise2(transforms) {
    if (transforms.moduleImport) {
      throw new CompileError("import is not supported", this);
    }
    Node4.prototype.initialise.call(this, transforms);
  };
  return ImportDeclaration2;
}(Node$1);
var ImportDefaultSpecifier = function(Node4) {
  function ImportDefaultSpecifier2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ImportDefaultSpecifier2.__proto__ = Node4;
  ImportDefaultSpecifier2.prototype = Object.create(Node4 && Node4.prototype);
  ImportDefaultSpecifier2.prototype.constructor = ImportDefaultSpecifier2;
  ImportDefaultSpecifier2.prototype.initialise = function initialise2(transforms) {
    this.findScope(true).addDeclaration(this.local, "import");
    Node4.prototype.initialise.call(this, transforms);
  };
  return ImportDefaultSpecifier2;
}(Node$1);
var ImportSpecifier = function(Node4) {
  function ImportSpecifier2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ImportSpecifier2.__proto__ = Node4;
  ImportSpecifier2.prototype = Object.create(Node4 && Node4.prototype);
  ImportSpecifier2.prototype.constructor = ImportSpecifier2;
  ImportSpecifier2.prototype.initialise = function initialise2(transforms) {
    this.findScope(true).addDeclaration(this.local, "import");
    Node4.prototype.initialise.call(this, transforms);
  };
  return ImportSpecifier2;
}(Node$1);
var hasDashes = function(val) {
  return /-/.test(val);
};
var formatKey = function(key) {
  return hasDashes(key) ? "'" + key + "'" : key;
};
var formatVal = function(val) {
  return val ? "" : "true";
};
var JSXAttribute = function(Node4) {
  function JSXAttribute2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    JSXAttribute2.__proto__ = Node4;
  JSXAttribute2.prototype = Object.create(Node4 && Node4.prototype);
  JSXAttribute2.prototype.constructor = JSXAttribute2;
  JSXAttribute2.prototype.transpile = function transpile2(code2, transforms) {
    var ref2 = this.name;
    var start = ref2.start;
    var name = ref2.name;
    var end = this.value ? this.value.start : this.name.end;
    code2.overwrite(start, end, formatKey(name) + ": " + formatVal(this.value));
    Node4.prototype.transpile.call(this, code2, transforms);
  };
  return JSXAttribute2;
}(Node$1);
function containsNewLine(node) {
  return node.type === "JSXText" && !/\S/.test(node.value) && /\n/.test(node.value);
}
var JSXClosingElement = function(Node4) {
  function JSXClosingElement2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    JSXClosingElement2.__proto__ = Node4;
  JSXClosingElement2.prototype = Object.create(Node4 && Node4.prototype);
  JSXClosingElement2.prototype.constructor = JSXClosingElement2;
  JSXClosingElement2.prototype.transpile = function transpile2(code2) {
    var spaceBeforeParen = true;
    var lastChild = this.parent.children[this.parent.children.length - 1];
    if (lastChild && containsNewLine(lastChild) || this.parent.openingElement.attributes.length) {
      spaceBeforeParen = false;
    }
    code2.overwrite(this.start, this.end, spaceBeforeParen ? " )" : ")");
  };
  return JSXClosingElement2;
}(Node$1);
function containsNewLine$1(node) {
  return node.type === "JSXText" && !/\S/.test(node.value) && /\n/.test(node.value);
}
var JSXClosingFragment = function(Node4) {
  function JSXClosingFragment2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    JSXClosingFragment2.__proto__ = Node4;
  JSXClosingFragment2.prototype = Object.create(Node4 && Node4.prototype);
  JSXClosingFragment2.prototype.constructor = JSXClosingFragment2;
  JSXClosingFragment2.prototype.transpile = function transpile2(code2) {
    var spaceBeforeParen = true;
    var lastChild = this.parent.children[this.parent.children.length - 1];
    if (lastChild && containsNewLine$1(lastChild)) {
      spaceBeforeParen = false;
    }
    code2.overwrite(this.start, this.end, spaceBeforeParen ? " )" : ")");
  };
  return JSXClosingFragment2;
}(Node$1);
function normalise(str, removeTrailingWhitespace) {
  str = str.replace(/\u00a0/g, "&nbsp;");
  if (removeTrailingWhitespace && /\n/.test(str)) {
    str = str.replace(/\s+$/, "");
  }
  str = str.replace(/^\n\r?\s+/, "").replace(/\s*\n\r?\s*/gm, " ");
  return JSON.stringify(str);
}
var JSXElement = function(Node4) {
  function JSXElement2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    JSXElement2.__proto__ = Node4;
  JSXElement2.prototype = Object.create(Node4 && Node4.prototype);
  JSXElement2.prototype.constructor = JSXElement2;
  JSXElement2.prototype.transpile = function transpile2(code2, transforms) {
    Node4.prototype.transpile.call(this, code2, transforms);
    var children = this.children.filter(function(child2) {
      if (child2.type !== "JSXText") {
        return true;
      }
      return /\S/.test(child2.raw) || !/\n/.test(child2.raw);
    });
    if (children.length) {
      var c = (this.openingElement || this.openingFragment).end;
      var i;
      for (i = 0; i < children.length; i += 1) {
        var child = children[i];
        if (child.type === "JSXExpressionContainer" && child.expression.type === "JSXEmptyExpression")
          ;
        else {
          var tail = code2.original[c] === "\n" && child.type !== "JSXText" ? "" : " ";
          code2.appendLeft(c, "," + tail);
        }
        if (child.type === "JSXText") {
          var str = normalise(child.value, i === children.length - 1);
          code2.overwrite(child.start, child.end, str);
        }
        c = child.end;
      }
    }
  };
  return JSXElement2;
}(Node$1);
var JSXExpressionContainer = function(Node4) {
  function JSXExpressionContainer2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    JSXExpressionContainer2.__proto__ = Node4;
  JSXExpressionContainer2.prototype = Object.create(Node4 && Node4.prototype);
  JSXExpressionContainer2.prototype.constructor = JSXExpressionContainer2;
  JSXExpressionContainer2.prototype.transpile = function transpile2(code2, transforms) {
    code2.remove(this.start, this.expression.start);
    code2.remove(this.expression.end, this.end);
    Node4.prototype.transpile.call(this, code2, transforms);
  };
  return JSXExpressionContainer2;
}(Node$1);
var JSXFragment = function(JSXElement$$1) {
  function JSXFragment2() {
    JSXElement$$1.apply(this, arguments);
  }
  if (JSXElement$$1)
    JSXFragment2.__proto__ = JSXElement$$1;
  JSXFragment2.prototype = Object.create(JSXElement$$1 && JSXElement$$1.prototype);
  JSXFragment2.prototype.constructor = JSXFragment2;
  return JSXFragment2;
}(JSXElement);
var JSXOpeningElement = function(Node4) {
  function JSXOpeningElement2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    JSXOpeningElement2.__proto__ = Node4;
  JSXOpeningElement2.prototype = Object.create(Node4 && Node4.prototype);
  JSXOpeningElement2.prototype.constructor = JSXOpeningElement2;
  JSXOpeningElement2.prototype.transpile = function transpile2(code2, transforms) {
    var this$1 = this;
    Node4.prototype.transpile.call(this, code2, transforms);
    code2.overwrite(this.start, this.name.start, this.program.jsx + "( ");
    var html = this.name.type === "JSXIdentifier" && this.name.name[0] === this.name.name[0].toLowerCase();
    if (html) {
      code2.prependRight(this.name.start, "'");
    }
    var len = this.attributes.length;
    var c = this.name.end;
    if (len) {
      var i;
      var hasSpread = false;
      for (i = 0; i < len; i += 1) {
        if (this$1.attributes[i].type === "JSXSpreadAttribute") {
          hasSpread = true;
          break;
        }
      }
      c = this.attributes[0].end;
      for (i = 0; i < len; i += 1) {
        var attr = this$1.attributes[i];
        if (i > 0) {
          if (attr.start === c) {
            code2.prependRight(c, ", ");
          } else {
            code2.overwrite(c, attr.start, ", ");
          }
        }
        if (hasSpread && attr.type !== "JSXSpreadAttribute") {
          var lastAttr = this$1.attributes[i - 1];
          var nextAttr = this$1.attributes[i + 1];
          if (!lastAttr || lastAttr.type === "JSXSpreadAttribute") {
            code2.prependRight(attr.start, "{ ");
          }
          if (!nextAttr || nextAttr.type === "JSXSpreadAttribute") {
            code2.appendLeft(attr.end, " }");
          }
        }
        c = attr.end;
      }
      var after;
      var before;
      if (hasSpread) {
        if (len === 1) {
          before = html ? "'," : ",";
        } else {
          if (!this.program.options.objectAssign) {
            throw new CompileError("Mixed JSX attributes ending in spread requires specified objectAssign option with 'Object.assign' or polyfill helper.", this);
          }
          before = html ? "', " + this.program.options.objectAssign + "({}," : ", " + this.program.options.objectAssign + "({},";
          after = ")";
        }
      } else {
        before = html ? "', {" : ", {";
        after = " }";
      }
      code2.prependRight(this.name.end, before);
      if (after) {
        code2.appendLeft(this.attributes[len - 1].end, after);
      }
    } else {
      code2.appendLeft(this.name.end, html ? "', null" : ", null");
      c = this.name.end;
    }
    if (this.selfClosing) {
      code2.overwrite(c, this.end, this.attributes.length ? ")" : " )");
    } else {
      code2.remove(c, this.end);
    }
  };
  return JSXOpeningElement2;
}(Node$1);
var JSXOpeningFragment = function(Node4) {
  function JSXOpeningFragment2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    JSXOpeningFragment2.__proto__ = Node4;
  JSXOpeningFragment2.prototype = Object.create(Node4 && Node4.prototype);
  JSXOpeningFragment2.prototype.constructor = JSXOpeningFragment2;
  JSXOpeningFragment2.prototype.transpile = function transpile2(code2) {
    code2.overwrite(this.start, this.end, this.program.jsx + "( React.Fragment, null");
  };
  return JSXOpeningFragment2;
}(Node$1);
var JSXSpreadAttribute = function(Node4) {
  function JSXSpreadAttribute2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    JSXSpreadAttribute2.__proto__ = Node4;
  JSXSpreadAttribute2.prototype = Object.create(Node4 && Node4.prototype);
  JSXSpreadAttribute2.prototype.constructor = JSXSpreadAttribute2;
  JSXSpreadAttribute2.prototype.transpile = function transpile2(code2, transforms) {
    code2.remove(this.start, this.argument.start);
    code2.remove(this.argument.end, this.end);
    Node4.prototype.transpile.call(this, code2, transforms);
  };
  return JSXSpreadAttribute2;
}(Node$1);
var nonAsciiLsOrPs = /[\u2028-\u2029]/g;
var Literal = function(Node4) {
  function Literal2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    Literal2.__proto__ = Node4;
  Literal2.prototype = Object.create(Node4 && Node4.prototype);
  Literal2.prototype.constructor = Literal2;
  Literal2.prototype.initialise = function initialise2() {
    if (typeof this.value === "string") {
      this.program.indentExclusionElements.push(this);
    }
  };
  Literal2.prototype.transpile = function transpile2(code2, transforms) {
    if (transforms.numericLiteral) {
      if (this.raw.match(/^0[bo]/i)) {
        code2.overwrite(this.start, this.end, String(this.value), {
          storeName: true,
          contentOnly: true
        });
      }
    }
    if (this.regex) {
      var ref2 = this.regex;
      var pattern = ref2.pattern;
      var flags = ref2.flags;
      if (transforms.stickyRegExp && /y/.test(flags)) {
        throw new CompileError("Regular expression sticky flag is not supported", this);
      }
      if (transforms.unicodeRegExp && /u/.test(flags)) {
        code2.overwrite(this.start, this.end, "/" + (0, import_regexpu_core.default)(pattern, flags) + "/" + flags.replace("u", ""), {
          contentOnly: true
        });
      }
    } else if (typeof this.value === "string" && this.value.match(nonAsciiLsOrPs)) {
      code2.overwrite(this.start, this.end, this.raw.replace(nonAsciiLsOrPs, function(m) {
        return m == "\u2028" ? "\\u2028" : "\\u2029";
      }), {
        contentOnly: true
      });
    }
  };
  return Literal2;
}(Node$1);
var MemberExpression = function(Node4) {
  function MemberExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    MemberExpression2.__proto__ = Node4;
  MemberExpression2.prototype = Object.create(Node4 && Node4.prototype);
  MemberExpression2.prototype.constructor = MemberExpression2;
  MemberExpression2.prototype.transpile = function transpile2(code2, transforms) {
    if (transforms.reservedProperties && reserved[this.property.name]) {
      code2.overwrite(this.object.end, this.property.start, "['");
      code2.appendLeft(this.property.end, "']");
    }
    Node4.prototype.transpile.call(this, code2, transforms);
  };
  return MemberExpression2;
}(Node$1);
var NewExpression = function(Node4) {
  function NewExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    NewExpression2.__proto__ = Node4;
  NewExpression2.prototype = Object.create(Node4 && Node4.prototype);
  NewExpression2.prototype.constructor = NewExpression2;
  NewExpression2.prototype.initialise = function initialise2(transforms) {
    var this$1 = this;
    if (transforms.spreadRest && this.arguments.length) {
      var lexicalBoundary = this.findLexicalBoundary();
      var i = this.arguments.length;
      while (i--) {
        var arg = this$1.arguments[i];
        if (arg.type === "SpreadElement" && isArguments(arg.argument)) {
          this$1.argumentsArrayAlias = lexicalBoundary.getArgumentsArrayAlias();
          break;
        }
      }
    }
    Node4.prototype.initialise.call(this, transforms);
  };
  NewExpression2.prototype.transpile = function transpile2(code2, transforms) {
    Node4.prototype.transpile.call(this, code2, transforms);
    if (transforms.spreadRest && this.arguments.length) {
      var firstArgument = this.arguments[0];
      var isNew = true;
      var hasSpreadElements = spread(code2, this.arguments, firstArgument.start, this.argumentsArrayAlias, isNew);
      if (hasSpreadElements) {
        code2.prependRight(this.start + "new".length, " (Function.prototype.bind.apply(");
        code2.overwrite(this.callee.end, firstArgument.start, ", [ null ].concat( ");
        code2.appendLeft(this.end, " ))");
      }
    }
    if (this.arguments.length) {
      removeTrailingComma(code2, this.arguments[this.arguments.length - 1].end);
    }
  };
  return NewExpression2;
}(Node$1);
var ObjectExpression = function(Node4) {
  function ObjectExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ObjectExpression2.__proto__ = Node4;
  ObjectExpression2.prototype = Object.create(Node4 && Node4.prototype);
  ObjectExpression2.prototype.constructor = ObjectExpression2;
  ObjectExpression2.prototype.transpile = function transpile2(code2, transforms) {
    var this$1 = this;
    Node4.prototype.transpile.call(this, code2, transforms);
    var firstPropertyStart = this.start + 1;
    var spreadPropertyCount = 0;
    var computedPropertyCount = 0;
    var firstSpreadProperty = null;
    var firstComputedProperty = null;
    for (var i = 0; i < this.properties.length; ++i) {
      var prop = this$1.properties[i];
      if (prop.type === "SpreadElement") {
        spreadPropertyCount += 1;
        if (firstSpreadProperty === null) {
          firstSpreadProperty = i;
        }
      } else if (prop.computed && transforms.computedProperty) {
        computedPropertyCount += 1;
        if (firstComputedProperty === null) {
          firstComputedProperty = i;
        }
      }
    }
    if (spreadPropertyCount && !transforms.objectRestSpread && !(computedPropertyCount && transforms.computedProperty)) {
      spreadPropertyCount = 0;
      firstSpreadProperty = null;
    } else if (spreadPropertyCount) {
      if (!this.program.options.objectAssign) {
        throw new CompileError("Object spread operator requires specified objectAssign option with 'Object.assign' or polyfill helper.", this);
      }
      var i$1 = this.properties.length;
      while (i$1--) {
        var prop$1 = this$1.properties[i$1];
        if (prop$1.type === "Property" && !computedPropertyCount) {
          var lastProp = this$1.properties[i$1 - 1];
          var nextProp = this$1.properties[i$1 + 1];
          if (!lastProp || lastProp.type !== "Property") {
            code2.prependRight(prop$1.start, "{");
          }
          if (!nextProp || nextProp.type !== "Property") {
            code2.appendLeft(prop$1.end, "}");
          }
        }
        if (prop$1.type === "SpreadElement") {
          code2.remove(prop$1.start, prop$1.argument.start);
          code2.remove(prop$1.argument.end, prop$1.end);
        }
      }
      firstPropertyStart = this.properties[0].start;
      if (!computedPropertyCount) {
        code2.overwrite(this.start, firstPropertyStart, this.program.options.objectAssign + "({}, ");
        code2.overwrite(this.properties[this.properties.length - 1].end, this.end, ")");
      } else if (this.properties[0].type === "SpreadElement") {
        code2.overwrite(this.start, firstPropertyStart, this.program.options.objectAssign + "({}, ");
        code2.remove(this.end - 1, this.end);
        code2.appendRight(this.end, ")");
      } else {
        code2.prependLeft(this.start, this.program.options.objectAssign + "(");
        code2.appendRight(this.end, ")");
      }
    }
    if (computedPropertyCount && transforms.computedProperty) {
      var i0 = this.getIndentation();
      var isSimpleAssignment;
      var name;
      if (this.parent.type === "VariableDeclarator" && this.parent.parent.declarations.length === 1 && this.parent.id.type === "Identifier") {
        isSimpleAssignment = true;
        name = this.parent.id.alias || this.parent.id.name;
      } else if (this.parent.type === "AssignmentExpression" && this.parent.parent.type === "ExpressionStatement" && this.parent.left.type === "Identifier") {
        isSimpleAssignment = true;
        name = this.parent.left.alias || this.parent.left.name;
      } else if (this.parent.type === "AssignmentPattern" && this.parent.left.type === "Identifier") {
        isSimpleAssignment = true;
        name = this.parent.left.alias || this.parent.left.name;
      }
      if (spreadPropertyCount) {
        isSimpleAssignment = false;
      }
      name = this.findScope(false).resolveName(name);
      var start = firstPropertyStart;
      var end = this.end;
      if (isSimpleAssignment)
        ;
      else {
        if (firstSpreadProperty === null || firstComputedProperty < firstSpreadProperty) {
          name = this.findScope(true).createDeclaration("obj");
          code2.prependRight(this.start, "( " + name + " = ");
        } else {
          name = null;
        }
      }
      var len = this.properties.length;
      var lastComputedProp;
      var sawNonComputedProperty = false;
      var isFirst = true;
      for (var i$2 = 0; i$2 < len; i$2 += 1) {
        var prop$2 = this$1.properties[i$2];
        var moveStart = i$2 > 0 ? this$1.properties[i$2 - 1].end : start;
        if (prop$2.type === "Property" && (prop$2.computed || lastComputedProp && !spreadPropertyCount)) {
          if (i$2 === 0) {
            moveStart = this$1.start + 1;
          }
          lastComputedProp = prop$2;
          if (!name) {
            name = this$1.findScope(true).createDeclaration("obj");
            var propId = name + (prop$2.computed ? "" : ".");
            code2.appendRight(prop$2.start, "( " + name + " = {}, " + propId);
          } else {
            var propId$1 = (isSimpleAssignment ? ";\n" + i0 + name : ", " + name) + (prop$2.key.type === "Literal" || prop$2.computed ? "" : ".");
            if (moveStart < prop$2.start) {
              code2.overwrite(moveStart, prop$2.start, propId$1);
            } else {
              code2.prependRight(prop$2.start, propId$1);
            }
          }
          var c = prop$2.key.end;
          if (prop$2.computed) {
            while (code2.original[c] !== "]") {
              c += 1;
            }
            c += 1;
          }
          if (prop$2.key.type === "Literal" && !prop$2.computed) {
            code2.overwrite(prop$2.start, prop$2.key.end + 1, "[" + code2.slice(prop$2.start, prop$2.key.end) + "] = ");
          } else if (prop$2.shorthand || prop$2.method && !prop$2.computed && transforms.conciseMethodProperty) {
            code2.overwrite(prop$2.key.start, prop$2.key.end, code2.slice(prop$2.key.start, prop$2.key.end).replace(/:/, " ="));
          } else {
            if (prop$2.value.start > c) {
              code2.remove(c, prop$2.value.start);
            }
            code2.prependLeft(c, " = ");
          }
          if (prop$2.method && (prop$2.computed || !transforms.conciseMethodProperty)) {
            if (prop$2.value.generator) {
              code2.remove(prop$2.start, prop$2.key.start);
            }
            code2.prependRight(prop$2.value.start, "function" + (prop$2.value.generator ? "*" : "") + " ");
          }
        } else if (prop$2.type === "SpreadElement") {
          if (name && i$2 > 0) {
            if (!lastComputedProp) {
              lastComputedProp = this$1.properties[i$2 - 1];
            }
            code2.appendLeft(lastComputedProp.end, ", " + name + " )");
            lastComputedProp = null;
            name = null;
          }
        } else {
          if (!isFirst && spreadPropertyCount) {
            code2.prependRight(prop$2.start, "{");
            code2.appendLeft(prop$2.end, "}");
          }
          sawNonComputedProperty = true;
        }
        if (isFirst && (prop$2.type === "SpreadElement" || prop$2.computed)) {
          var beginEnd = sawNonComputedProperty ? this$1.properties[this$1.properties.length - 1].end : this$1.end - 1;
          if (code2.original[beginEnd] == ",") {
            ++beginEnd;
          }
          var closing = code2.slice(beginEnd, end);
          code2.prependLeft(moveStart, closing);
          code2.remove(beginEnd, end);
          isFirst = false;
        }
        var c$1 = prop$2.end;
        if (i$2 < len - 1 && !sawNonComputedProperty) {
          while (code2.original[c$1] !== ",") {
            c$1 += 1;
          }
        } else if (i$2 == len - 1) {
          c$1 = this$1.end;
        }
        if (prop$2.end != c$1) {
          code2.overwrite(prop$2.end, c$1, "", { contentOnly: true });
        }
      }
      if (!isSimpleAssignment && name) {
        code2.appendLeft(lastComputedProp.end, ", " + name + " )");
      }
    }
  };
  return ObjectExpression2;
}(Node$1);
var Property2 = function(Node4) {
  function Property3() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    Property3.__proto__ = Node4;
  Property3.prototype = Object.create(Node4 && Node4.prototype);
  Property3.prototype.constructor = Property3;
  Property3.prototype.initialise = function initialise2(transforms) {
    if ((this.kind === "get" || this.kind === "set") && transforms.getterSetter) {
      throw new CompileError("getters and setters are not supported. Use `transforms: { getterSetter: false }` to skip transformation and disable this error", this);
    }
    Node4.prototype.initialise.call(this, transforms);
  };
  Property3.prototype.transpile = function transpile2(code2, transforms) {
    Node4.prototype.transpile.call(this, code2, transforms);
    if (transforms.conciseMethodProperty && !this.computed && this.parent.type !== "ObjectPattern") {
      if (this.shorthand) {
        code2.prependRight(this.start, this.key.name + ": ");
      } else if (this.method) {
        var name = "";
        if (this.program.options.namedFunctionExpressions !== false) {
          if (this.key.type === "Literal" && typeof this.key.value === "number") {
            name = "";
          } else if (this.key.type === "Identifier") {
            if (reserved[this.key.name] || !/^[a-z_$][a-z0-9_$]*$/i.test(this.key.name) || this.value.body.scope.references[this.key.name]) {
              name = this.findScope(true).createIdentifier(this.key.name);
            } else {
              name = this.key.name;
            }
          } else {
            name = this.findScope(true).createIdentifier(this.key.value);
          }
          name = " " + name;
        }
        if (this.value.generator) {
          code2.remove(this.start, this.key.start);
        }
        code2.appendLeft(this.key.end, ": function" + (this.value.generator ? "*" : "") + name);
      }
    }
    if (transforms.reservedProperties && reserved[this.key.name]) {
      code2.prependRight(this.key.start, "'");
      code2.appendLeft(this.key.end, "'");
    }
  };
  return Property3;
}(Node$1);
var ReturnStatement = function(Node4) {
  function ReturnStatement2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ReturnStatement2.__proto__ = Node4;
  ReturnStatement2.prototype = Object.create(Node4 && Node4.prototype);
  ReturnStatement2.prototype.constructor = ReturnStatement2;
  ReturnStatement2.prototype.initialise = function initialise2(transforms) {
    this.loop = this.findNearest(loopStatement);
    this.nearestFunction = this.findNearest(/Function/);
    if (this.loop && (!this.nearestFunction || this.loop.depth > this.nearestFunction.depth)) {
      this.loop.canReturn = true;
      this.shouldWrap = true;
    }
    if (this.argument) {
      this.argument.initialise(transforms);
    }
  };
  ReturnStatement2.prototype.transpile = function transpile2(code2, transforms) {
    var shouldWrap = this.shouldWrap && this.loop && this.loop.shouldRewriteAsFunction;
    if (this.argument) {
      if (shouldWrap) {
        code2.prependRight(this.argument.start, "{ v: ");
      }
      this.argument.transpile(code2, transforms);
      if (shouldWrap) {
        code2.appendLeft(this.argument.end, " }");
      }
    } else if (shouldWrap) {
      code2.appendLeft(this.start + 6, " {}");
    }
  };
  return ReturnStatement2;
}(Node$1);
var Super = function(Node4) {
  function Super2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    Super2.__proto__ = Node4;
  Super2.prototype = Object.create(Node4 && Node4.prototype);
  Super2.prototype.constructor = Super2;
  Super2.prototype.initialise = function initialise2(transforms) {
    if (transforms.classes) {
      this.method = this.findNearest("MethodDefinition");
      if (!this.method) {
        throw new CompileError("use of super outside class method", this);
      }
      var parentClass = this.findNearest("ClassBody").parent;
      this.superClassName = parentClass.superClass && (parentClass.superClass.name || "superclass");
      if (!this.superClassName) {
        throw new CompileError("super used in base class", this);
      }
      this.isCalled = this.parent.type === "CallExpression" && this === this.parent.callee;
      if (this.method.kind !== "constructor" && this.isCalled) {
        throw new CompileError("super() not allowed outside class constructor", this);
      }
      this.isMember = this.parent.type === "MemberExpression";
      if (!this.isCalled && !this.isMember) {
        throw new CompileError("Unexpected use of `super` (expected `super(...)` or `super.*`)", this);
      }
    }
    if (transforms.arrow) {
      var lexicalBoundary = this.findLexicalBoundary();
      var arrowFunction = this.findNearest("ArrowFunctionExpression");
      var loop = this.findNearest(loopStatement);
      if (arrowFunction && arrowFunction.depth > lexicalBoundary.depth) {
        this.thisAlias = lexicalBoundary.getThisAlias();
      }
      if (loop && loop.body.contains(this) && loop.depth > lexicalBoundary.depth) {
        this.thisAlias = lexicalBoundary.getThisAlias();
      }
    }
  };
  Super2.prototype.transpile = function transpile2(code2, transforms) {
    if (transforms.classes) {
      var expression = this.isCalled || this.method.static ? this.superClassName : this.superClassName + ".prototype";
      code2.overwrite(this.start, this.end, expression, {
        storeName: true,
        contentOnly: true
      });
      var callExpression = this.isCalled ? this.parent : this.parent.parent;
      if (callExpression && callExpression.type === "CallExpression") {
        if (!this.noCall) {
          code2.appendLeft(callExpression.callee.end, ".call");
        }
        var thisAlias = this.thisAlias || "this";
        if (callExpression.arguments.length) {
          code2.appendLeft(callExpression.arguments[0].start, thisAlias + ", ");
        } else {
          code2.appendLeft(callExpression.end - 1, "" + thisAlias);
        }
      }
    }
  };
  return Super2;
}(Node$1);
var TaggedTemplateExpression = function(Node4) {
  function TaggedTemplateExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    TaggedTemplateExpression2.__proto__ = Node4;
  TaggedTemplateExpression2.prototype = Object.create(Node4 && Node4.prototype);
  TaggedTemplateExpression2.prototype.constructor = TaggedTemplateExpression2;
  TaggedTemplateExpression2.prototype.initialise = function initialise2(transforms) {
    if (transforms.templateString && !transforms.dangerousTaggedTemplateString) {
      throw new CompileError("Tagged template strings are not supported. Use `transforms: { templateString: false }` to skip transformation and disable this error, or `transforms: { dangerousTaggedTemplateString: true }` if you know what you're doing", this);
    }
    Node4.prototype.initialise.call(this, transforms);
  };
  TaggedTemplateExpression2.prototype.transpile = function transpile2(code2, transforms) {
    if (transforms.templateString && transforms.dangerousTaggedTemplateString) {
      var ordered = this.quasi.expressions.concat(this.quasi.quasis).sort(function(a, b) {
        return a.start - b.start;
      });
      var program = this.program;
      var rootScope = program.body.scope;
      var templateStrings = this.quasi.quasis.map(function(quasi) {
        return JSON.stringify(quasi.value.cooked);
      }).join(", ");
      var templateObject = this.program.templateLiteralQuasis[templateStrings];
      if (!templateObject) {
        templateObject = rootScope.createIdentifier("templateObject");
        code2.prependRight(this.program.prependAt, "var " + templateObject + " = Object.freeze([" + templateStrings + "]);\n");
        this.program.templateLiteralQuasis[templateStrings] = templateObject;
      }
      code2.overwrite(this.tag.end, ordered[0].start, "(" + templateObject);
      var lastIndex = ordered[0].start;
      ordered.forEach(function(node) {
        if (node.type === "TemplateElement") {
          code2.remove(lastIndex, node.end);
        } else {
          code2.overwrite(lastIndex, node.start, ", ");
        }
        lastIndex = node.end;
      });
      code2.overwrite(lastIndex, this.end, ")");
    }
    Node4.prototype.transpile.call(this, code2, transforms);
  };
  return TaggedTemplateExpression2;
}(Node$1);
var TemplateElement = function(Node4) {
  function TemplateElement2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    TemplateElement2.__proto__ = Node4;
  TemplateElement2.prototype = Object.create(Node4 && Node4.prototype);
  TemplateElement2.prototype.constructor = TemplateElement2;
  TemplateElement2.prototype.initialise = function initialise2() {
    this.program.indentExclusionElements.push(this);
  };
  return TemplateElement2;
}(Node$1);
var TemplateLiteral = function(Node4) {
  function TemplateLiteral2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    TemplateLiteral2.__proto__ = Node4;
  TemplateLiteral2.prototype = Object.create(Node4 && Node4.prototype);
  TemplateLiteral2.prototype.constructor = TemplateLiteral2;
  TemplateLiteral2.prototype.transpile = function transpile2(code2, transforms) {
    Node4.prototype.transpile.call(this, code2, transforms);
    if (transforms.templateString && this.parent.type !== "TaggedTemplateExpression") {
      var ordered = this.expressions.concat(this.quasis).sort(function(a, b) {
        return a.start - b.start || a.end - b.end;
      }).filter(function(node, i) {
        if (node.type !== "TemplateElement") {
          return true;
        }
        if (node.value.raw) {
          return true;
        }
        return !i;
      });
      if (ordered.length >= 3) {
        var first = ordered[0];
        var third = ordered[2];
        if (first.type === "TemplateElement" && first.value.raw === "" && third.type === "TemplateElement") {
          ordered.shift();
        }
      }
      var parenthesise = (this.quasis.length !== 1 || this.expressions.length !== 0) && this.parent.type !== "TemplateLiteral" && this.parent.type !== "AssignmentExpression" && this.parent.type !== "AssignmentPattern" && this.parent.type !== "VariableDeclarator" && (this.parent.type !== "BinaryExpression" || this.parent.operator !== "+");
      if (parenthesise) {
        code2.appendRight(this.start, "(");
      }
      var lastIndex = this.start;
      ordered.forEach(function(node, i) {
        var prefix = i === 0 ? parenthesise ? "(" : "" : " + ";
        if (node.type === "TemplateElement") {
          code2.overwrite(lastIndex, node.end, prefix + JSON.stringify(node.value.cooked));
        } else {
          var parenthesise$1 = node.type !== "Identifier";
          if (parenthesise$1) {
            prefix += "(";
          }
          code2.remove(lastIndex, node.start);
          if (prefix) {
            code2.prependRight(node.start, prefix);
          }
          if (parenthesise$1) {
            code2.appendLeft(node.end, ")");
          }
        }
        lastIndex = node.end;
      });
      if (parenthesise) {
        code2.appendLeft(lastIndex, ")");
      }
      code2.overwrite(lastIndex, this.end, "", { contentOnly: true });
    }
  };
  return TemplateLiteral2;
}(Node$1);
var ThisExpression = function(Node4) {
  function ThisExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    ThisExpression2.__proto__ = Node4;
  ThisExpression2.prototype = Object.create(Node4 && Node4.prototype);
  ThisExpression2.prototype.constructor = ThisExpression2;
  ThisExpression2.prototype.initialise = function initialise2(transforms) {
    var this$1 = this;
    var lexicalBoundary = this.findLexicalBoundary();
    if (transforms.letConst) {
      var node = this.findNearest(loopStatement);
      while (node && node.depth > lexicalBoundary.depth) {
        node.thisRefs.push(this$1);
        node = node.parent.findNearest(loopStatement);
      }
    }
    if (transforms.arrow) {
      var arrowFunction = this.findNearest("ArrowFunctionExpression");
      if (arrowFunction && arrowFunction.depth > lexicalBoundary.depth) {
        this.alias = lexicalBoundary.getThisAlias();
      }
    }
  };
  ThisExpression2.prototype.transpile = function transpile2(code2) {
    if (this.alias) {
      code2.overwrite(this.start, this.end, this.alias, {
        storeName: true,
        contentOnly: true
      });
    }
  };
  return ThisExpression2;
}(Node$1);
var UpdateExpression = function(Node4) {
  function UpdateExpression2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    UpdateExpression2.__proto__ = Node4;
  UpdateExpression2.prototype = Object.create(Node4 && Node4.prototype);
  UpdateExpression2.prototype.constructor = UpdateExpression2;
  UpdateExpression2.prototype.initialise = function initialise2(transforms) {
    if (this.argument.type === "Identifier") {
      var declaration = this.findScope(false).findDeclaration(this.argument.name);
      var statement = declaration && declaration.node.ancestor(3);
      if (statement && statement.type === "ForStatement" && statement.body.contains(this)) {
        statement.reassigned[this.argument.name] = true;
      }
    }
    Node4.prototype.initialise.call(this, transforms);
  };
  UpdateExpression2.prototype.transpile = function transpile2(code2, transforms) {
    if (this.argument.type === "Identifier") {
      checkConst(this.argument, this.findScope(false));
    }
    Node4.prototype.transpile.call(this, code2, transforms);
  };
  return UpdateExpression2;
}(Node$1);
var VariableDeclaration = function(Node4) {
  function VariableDeclaration2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    VariableDeclaration2.__proto__ = Node4;
  VariableDeclaration2.prototype = Object.create(Node4 && Node4.prototype);
  VariableDeclaration2.prototype.constructor = VariableDeclaration2;
  VariableDeclaration2.prototype.initialise = function initialise2(transforms) {
    this.scope = this.findScope(this.kind === "var");
    this.declarations.forEach(function(declarator) {
      return declarator.initialise(transforms);
    });
  };
  VariableDeclaration2.prototype.transpile = function transpile2(code2, transforms) {
    var this$1 = this;
    var i0 = this.getIndentation();
    var kind = this.kind;
    if (transforms.letConst && kind !== "var") {
      kind = "var";
      code2.overwrite(this.start, this.start + this.kind.length, kind, {
        contentOnly: true,
        storeName: true
      });
    }
    if (transforms.destructuring && this.parent.type !== "ForOfStatement" && this.parent.type !== "ForInStatement") {
      var c = this.start;
      var lastDeclaratorIsPattern;
      this.declarations.forEach(function(declarator, i) {
        declarator.transpile(code2, transforms);
        if (declarator.id.type === "Identifier") {
          if (i > 0 && this$1.declarations[i - 1].id.type !== "Identifier") {
            code2.overwrite(c, declarator.id.start, "var ");
          }
        } else {
          var inline = loopStatement.test(this$1.parent.type);
          if (i === 0) {
            code2.remove(c, declarator.id.start);
          } else {
            code2.overwrite(c, declarator.id.start, ";\n" + i0);
          }
          var simple = declarator.init.type === "Identifier" && !declarator.init.rewritten;
          var name = simple ? declarator.init.alias || declarator.init.name : declarator.findScope(true).createIdentifier("ref");
          c = declarator.start;
          var statementGenerators = [];
          if (simple) {
            code2.remove(declarator.id.end, declarator.end);
          } else {
            statementGenerators.push(function(start, prefix2, suffix2) {
              code2.prependRight(declarator.id.end, "var " + name);
              code2.appendLeft(declarator.init.end, "" + suffix2);
              code2.move(declarator.id.end, declarator.end, start);
            });
          }
          var scope2 = declarator.findScope(false);
          destructure(code2, function(id) {
            return scope2.createIdentifier(id);
          }, function(ref2) {
            var name2 = ref2.name;
            return scope2.resolveName(name2);
          }, declarator.id, name, inline, statementGenerators);
          var prefix = inline ? "var " : "";
          var suffix = inline ? ", " : ";\n" + i0;
          statementGenerators.forEach(function(fn, j) {
            if (i === this$1.declarations.length - 1 && j === statementGenerators.length - 1) {
              suffix = inline ? "" : ";";
            }
            fn(declarator.start, j === 0 ? prefix : "", suffix);
          });
        }
        c = declarator.end;
        lastDeclaratorIsPattern = declarator.id.type !== "Identifier";
      });
      if (lastDeclaratorIsPattern && this.end > c) {
        code2.overwrite(c, this.end, "", { contentOnly: true });
      }
    } else {
      this.declarations.forEach(function(declarator) {
        declarator.transpile(code2, transforms);
      });
    }
  };
  return VariableDeclaration2;
}(Node$1);
var VariableDeclarator = function(Node4) {
  function VariableDeclarator2() {
    Node4.apply(this, arguments);
  }
  if (Node4)
    VariableDeclarator2.__proto__ = Node4;
  VariableDeclarator2.prototype = Object.create(Node4 && Node4.prototype);
  VariableDeclarator2.prototype.constructor = VariableDeclarator2;
  VariableDeclarator2.prototype.initialise = function initialise2(transforms) {
    var kind = this.parent.kind;
    if (kind === "let" && this.parent.parent.type === "ForStatement") {
      kind = "for.let";
    }
    this.parent.scope.addDeclaration(this.id, kind);
    Node4.prototype.initialise.call(this, transforms);
  };
  VariableDeclarator2.prototype.transpile = function transpile2(code2, transforms) {
    if (!this.init && transforms.letConst && this.parent.kind !== "var") {
      var inLoop = this.findNearest(/Function|^For(In|Of)?Statement|^(?:Do)?WhileStatement/);
      if (inLoop && !/Function/.test(inLoop.type) && !this.isLeftDeclaratorOfLoop()) {
        code2.appendLeft(this.id.end, " = (void 0)");
      }
    }
    if (this.id) {
      this.id.transpile(code2, transforms);
    }
    if (this.init) {
      this.init.transpile(code2, transforms);
    }
  };
  VariableDeclarator2.prototype.isLeftDeclaratorOfLoop = function isLeftDeclaratorOfLoop() {
    return this.parent && this.parent.type === "VariableDeclaration" && this.parent.parent && (this.parent.parent.type === "ForInStatement" || this.parent.parent.type === "ForOfStatement") && this.parent.parent.left && this.parent.parent.left.declarations[0] === this;
  };
  return VariableDeclarator2;
}(Node$1);
var types$2 = {
  ArrayExpression,
  ArrowFunctionExpression,
  AssignmentExpression,
  BinaryExpression,
  BreakStatement,
  CallExpression,
  ClassBody,
  ClassDeclaration,
  ClassExpression,
  ContinueStatement,
  DoWhileStatement: LoopStatement,
  ExportNamedDeclaration,
  ExportDefaultDeclaration,
  ForStatement,
  ForInStatement,
  ForOfStatement,
  FunctionDeclaration,
  FunctionExpression,
  Identifier: Identifier2,
  IfStatement,
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportSpecifier,
  JSXAttribute,
  JSXClosingElement,
  JSXClosingFragment,
  JSXElement,
  JSXExpressionContainer,
  JSXFragment,
  JSXOpeningElement,
  JSXOpeningFragment,
  JSXSpreadAttribute,
  Literal,
  MemberExpression,
  NewExpression,
  ObjectExpression,
  Property: Property2,
  ReturnStatement,
  Super,
  TaggedTemplateExpression,
  TemplateElement,
  TemplateLiteral,
  ThisExpression,
  UpdateExpression,
  VariableDeclaration,
  VariableDeclarator,
  WhileStatement: LoopStatement
};
var keys = {
  Program: ["body"],
  Literal: []
};
var statementsWithBlocks = {
  IfStatement: "consequent",
  ForStatement: "body",
  ForInStatement: "body",
  ForOfStatement: "body",
  WhileStatement: "body",
  DoWhileStatement: "body",
  ArrowFunctionExpression: "body"
};
function wrap(raw, parent) {
  if (!raw) {
    return;
  }
  if ("length" in raw) {
    var i = raw.length;
    while (i--) {
      wrap(raw[i], parent);
    }
    return;
  }
  if (raw.__wrapped) {
    return;
  }
  raw.__wrapped = true;
  if (!keys[raw.type]) {
    keys[raw.type] = Object.keys(raw).filter(function(key2) {
      return typeof raw[key2] === "object";
    });
  }
  var bodyType = statementsWithBlocks[raw.type];
  if (bodyType && raw[bodyType].type !== "BlockStatement") {
    var expression = raw[bodyType];
    raw[bodyType] = {
      start: expression.start,
      end: expression.end,
      type: "BlockStatement",
      body: [expression],
      synthetic: true
    };
  }
  raw.parent = parent;
  raw.program = parent.program || parent;
  raw.depth = parent.depth + 1;
  raw.keys = keys[raw.type];
  raw.indentation = void 0;
  for (var i$1 = 0, list = keys[raw.type]; i$1 < list.length; i$1 += 1) {
    var key = list[i$1];
    wrap(raw[key], raw);
  }
  raw.program.magicString.addSourcemapLocation(raw.start);
  raw.program.magicString.addSourcemapLocation(raw.end);
  var type = (raw.type === "BlockStatement" ? BlockStatement : types$2[raw.type]) || Node$1;
  raw.__proto__ = type.prototype;
}
function Program(source, ast, transforms, options) {
  var this$1 = this;
  this.type = "Root";
  this.jsx = options.jsx || "React.createElement";
  this.options = options;
  this.source = source;
  this.magicString = new MagicString(source);
  this.ast = ast;
  this.depth = 0;
  wrap(this.body = ast, this);
  this.body.__proto__ = BlockStatement.prototype;
  this.templateLiteralQuasis = Object.create(null);
  for (var i = 0; i < this.body.body.length; ++i) {
    if (!this$1.body.body[i].directive) {
      this$1.prependAt = this$1.body.body[i].start;
      break;
    }
  }
  this.objectWithoutPropertiesHelper = null;
  this.indentExclusionElements = [];
  this.body.initialise(transforms);
  this.indentExclusions = Object.create(null);
  for (var i$2 = 0, list = this$1.indentExclusionElements; i$2 < list.length; i$2 += 1) {
    var node = list[i$2];
    for (var i$1 = node.start; i$1 < node.end; i$1 += 1) {
      this$1.indentExclusions[i$1] = true;
    }
  }
  this.body.transpile(this.magicString, transforms);
}
Program.prototype = {
  export: function export$1(options) {
    if (options === void 0)
      options = {};
    return {
      code: this.magicString.toString(),
      map: this.magicString.generateMap({
        file: options.file,
        source: options.source,
        includeContent: options.includeContent !== false
      })
    };
  },
  findNearest: function findNearest2() {
    return null;
  },
  findScope: function findScope2() {
    return null;
  },
  getObjectWithoutPropertiesHelper: function getObjectWithoutPropertiesHelper(code2) {
    if (!this.objectWithoutPropertiesHelper) {
      this.objectWithoutPropertiesHelper = this.body.scope.createIdentifier("objectWithoutProperties");
      code2.prependLeft(this.prependAt, "function " + this.objectWithoutPropertiesHelper + " (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }\n");
    }
    return this.objectWithoutPropertiesHelper;
  }
};
var matrix = {
  chrome: {
    48: 610719,
    49: 652287,
    50: 783359,
    51: 783359,
    52: 1045503,
    53: 1045503,
    54: 1045503,
    55: 3142655,
    56: 3142655,
    57: 3142655,
    58: 4191231,
    59: 4191231,
    60: 8385535,
    61: 8385535,
    62: 8385535,
    63: 8385535,
    64: 8385535,
    65: 8385535,
    66: 8385535,
    67: 8385535,
    68: 8385535,
    69: 8385535,
    70: 8385535,
    71: 8385535
  },
  firefox: {
    43: 643515,
    44: 643515,
    45: 643519,
    46: 774591,
    47: 774655,
    48: 774655,
    49: 774655,
    50: 774655,
    51: 775167,
    52: 4191231,
    53: 4191231,
    54: 4191231,
    55: 8385535,
    56: 8385535,
    57: 8385535,
    58: 8385535,
    59: 8385535,
    60: 8385535,
    61: 8385535,
    62: 8385535,
    63: 8385535,
    64: 8385535
  },
  safari: {
    8: 524297,
    9: 594141,
    10: 1831935,
    "10.1": 4191231,
    11: 4191231,
    "11.1": 8385535,
    12: 8385535
  },
  ie: {
    8: 0,
    9: 524289,
    10: 524289,
    11: 524289
  },
  edge: {
    12: 610459,
    13: 774559,
    14: 2085887,
    15: 4183039,
    16: 4183039,
    17: 4183039,
    18: 4183039,
    19: 4183039
  },
  node: {
    "0.10": 524289,
    "0.12": 524417,
    4: 594335,
    5: 594335,
    6: 783359,
    8: 4191231,
    "8.3": 8385535,
    "8.7": 8385535,
    "8.10": 8385535
  }
};
var features = [
  "getterSetter",
  "arrow",
  "classes",
  "computedProperty",
  "conciseMethodProperty",
  "defaultParameter",
  "destructuring",
  "forOf",
  "generator",
  "letConst",
  "moduleExport",
  "moduleImport",
  "numericLiteral",
  "parameterDestructuring",
  "spreadRest",
  "stickyRegExp",
  "templateString",
  "unicodeRegExp",
  "exponentiation",
  "reservedProperties",
  "trailingFunctionCommas",
  "asyncAwait",
  "objectRestSpread"
];
var parser = Parser.extend(acornDynamicImport, acornJsx());
var dangerousTransforms = ["dangerousTaggedTemplateString", "dangerousForOf"];
function target(target2) {
  var targets = Object.keys(target2);
  var bitmask = targets.length ? 8388607 : 524289;
  Object.keys(target2).forEach(function(environment) {
    var versions = matrix[environment];
    if (!versions) {
      throw new Error("Unknown environment '" + environment + "'. Please raise an issue at https://github.com/Rich-Harris/buble/issues");
    }
    var targetVersion = target2[environment];
    if (!(targetVersion in versions)) {
      throw new Error("Support data exists for the following versions of " + environment + ": " + Object.keys(versions).join(", ") + ". Please raise an issue at https://github.com/Rich-Harris/buble/issues");
    }
    var support = versions[targetVersion];
    bitmask &= support;
  });
  var transforms = Object.create(null);
  features.forEach(function(name, i) {
    transforms[name] = !(bitmask & 1 << i);
  });
  dangerousTransforms.forEach(function(name) {
    transforms[name] = false;
  });
  return transforms;
}
function transform(source, options) {
  if (options === void 0)
    options = {};
  var ast;
  var jsx = null;
  try {
    ast = parser.parse(source, {
      ecmaVersion: 10,
      preserveParens: true,
      sourceType: "module",
      allowReturnOutsideFunction: true,
      onComment: function(block, text) {
        if (!jsx) {
          var match = /@jsx\s+([^\s]+)/.exec(text);
          if (match) {
            jsx = match[1];
          }
        }
      }
    });
    options.jsx = jsx || options.jsx;
  } catch (err) {
    err.snippet = getSnippet(source, err.loc);
    err.toString = function() {
      return err.name + ": " + err.message + "\n" + err.snippet;
    };
    throw err;
  }
  var transforms = target(options.target || {});
  Object.keys(options.transforms || {}).forEach(function(name) {
    if (name === "modules") {
      if (!("moduleImport" in options.transforms)) {
        transforms.moduleImport = options.transforms.modules;
      }
      if (!("moduleExport" in options.transforms)) {
        transforms.moduleExport = options.transforms.modules;
      }
      return;
    }
    if (!(name in transforms)) {
      throw new Error("Unknown transform '" + name + "'");
    }
    transforms[name] = options.transforms[name];
  });
  if (options.objectAssign === true) {
    options.objectAssign = "Object.assign";
  }
  return new Program(source, ast, transforms, options).export(options);
}

// node_modules/react-live/dist/react-live.es.js
var import_assign = __toModule(require_assign5());
function _extends2() {
  _extends2 = Object.assign || function(target2) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target2[key] = source[key];
        }
      }
    }
    return target2;
  };
  return _extends2.apply(this, arguments);
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target2 = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target2[key] = source[key];
  }
  return target2;
}
var theme = {
  plain: {
    color: "#C5C8C6",
    backgroundColor: "#1D1F21"
  },
  styles: [{
    types: ["prolog", "comment", "doctype", "cdata"],
    style: {
      color: "hsl(30, 20%, 50%)"
    }
  }, {
    types: ["property", "tag", "boolean", "number", "constant", "symbol"],
    style: {
      color: "hsl(350, 40%, 70%)"
    }
  }, {
    types: ["attr-name", "string", "char", "builtin", "insterted"],
    style: {
      color: "hsl(75, 70%, 60%)"
    }
  }, {
    types: ["operator", "entity", "url", "string", "variable", "language-css"],
    style: {
      color: "hsl(40, 90%, 60%)"
    }
  }, {
    types: ["deleted"],
    style: {
      color: "rgb(255, 85, 85)"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["regex", "important"],
    style: {
      color: "#e90"
    }
  }, {
    types: ["atrule", "attr-value", "keyword"],
    style: {
      color: "hsl(350, 40%, 70%)"
    }
  }, {
    types: ["punctuation", "symbol"],
    style: {
      opacity: "0.7"
    }
  }]
};
var _excluded$1 = ["style", "theme", "onChange"];
function ownKeys$3(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$3(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function(key) {
        _defineProperty2(target2, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function(key) {
        Object.defineProperty(target2, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target2;
}
var CodeEditor = function CodeEditor2(props) {
  var _useState = (0, import_react2.useState)({
    code: props.code || ""
  }), state = _useState[0], setState = _useState[1];
  (0, import_react2.useEffect)(function() {
    if (state.prevCodeProp && props.code !== state.prevCodeProp) {
      setState({
        code: props.code,
        prevCodeProp: props.code
      });
    }
  }, [props.code]);
  var updateContent = function updateContent2(code3) {
    setState({
      code: code3
    });
  };
  (0, import_react2.useEffect)(function() {
    if (props.onChange) {
      props.onChange(state.code);
    }
  }, [state.code]);
  var highlightCode = function highlightCode2(code3) {
    return /* @__PURE__ */ import_react2.default.createElement(dist_default, {
      Prism: prism_default,
      code: code3,
      theme: props.theme || theme,
      language: props.language
    }, function(_ref) {
      var tokens = _ref.tokens, getLineProps = _ref.getLineProps, getTokenProps = _ref.getTokenProps;
      return /* @__PURE__ */ import_react2.default.createElement(import_react2.Fragment, null, tokens.map(function(line, i) {
        return /* @__PURE__ */ import_react2.default.createElement("div", getLineProps({
          line,
          key: i
        }), line.map(function(token, key) {
          return /* @__PURE__ */ import_react2.default.createElement("span", getTokenProps({
            token,
            key
          }));
        }));
      }));
    });
  };
  var style = props.style, theme$1 = props.theme;
  props.onChange;
  var rest = _objectWithoutPropertiesLoose(props, _excluded$1);
  var code2 = state.code;
  var baseTheme = theme$1 && typeof theme$1.plain === "object" ? theme$1.plain : {};
  return /* @__PURE__ */ import_react2.default.createElement(import_react_simple_code_editor.default, _extends2({
    value: code2,
    padding: 10,
    highlight: highlightCode,
    onValueChange: updateContent,
    style: _objectSpread$3(_objectSpread$3({
      whiteSpace: "pre",
      fontFamily: "monospace"
    }, baseTheme), style)
  }, rest));
};
var Editor = CodeEditor;
var LiveContext = /* @__PURE__ */ (0, import_react2.createContext)({});
var LiveContext$1 = LiveContext;
function ownKeys$2(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$2(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function(key) {
        _defineProperty2(target2, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target2, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target2;
}
var _poly = {
  assign: import_assign.default
};
var transform2 = function(code2, transpileOptions) {
  if (transpileOptions === void 0) {
    transpileOptions = {};
  }
  var opts = _objectSpread$2(_objectSpread$2({}, transpileOptions), {}, {
    objectAssign: "_poly.assign",
    transforms: _objectSpread$2({
      dangerousForOf: true,
      dangerousTaggedTemplateString: true
    }, transpileOptions.transforms)
  });
  return transform(code2, opts).code;
};
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
var errorBoundary = function errorBoundary2(Element, errorCallback) {
  return /* @__PURE__ */ function(_Component) {
    _inheritsLoose(ErrorBoundary, _Component);
    function ErrorBoundary() {
      return _Component.apply(this, arguments) || this;
    }
    var _proto = ErrorBoundary.prototype;
    _proto.componentDidCatch = function componentDidCatch(error) {
      errorCallback(error);
    };
    _proto.render = function render() {
      return typeof Element === "function" ? /* @__PURE__ */ import_react2.default.createElement(Element, null) : /* @__PURE__ */ import_react2.default.isValidElement(Element) ? Element : null;
    };
    return ErrorBoundary;
  }(import_react2.Component);
};
var errorBoundary$1 = errorBoundary;
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
var evalCode = function evalCode2(code2, scope2) {
  var scopeKeys = Object.keys(scope2);
  var scopeValues = scopeKeys.map(function(key) {
    return scope2[key];
  });
  var res2 = _construct(Function, ["_poly", "React"].concat(scopeKeys, [code2]));
  return res2.apply(void 0, [_poly, import_react2.default].concat(scopeValues));
};
var evalCode$1 = evalCode;
function ownKeys$1(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$1(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty2(target2, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target2, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target2;
}
var generateElement = function generateElement2(_ref, errorCallback) {
  var _ref$code = _ref.code, code2 = _ref$code === void 0 ? "" : _ref$code, _ref$scope = _ref.scope, scope2 = _ref$scope === void 0 ? {} : _ref$scope, transpileOptions = _ref.transpileOptions;
  var codeTrimmed = code2.trim().replace(/;$/, "");
  var transformed = transform2("return (" + codeTrimmed + ")", transpileOptions).trim();
  return errorBoundary$1(evalCode$1(transformed, scope2), errorCallback);
};
var renderElementAsync = function renderElementAsync2(_ref2, resultCallback, errorCallback) {
  var _ref2$code = _ref2.code, code2 = _ref2$code === void 0 ? "" : _ref2$code, _ref2$scope = _ref2.scope, scope2 = _ref2$scope === void 0 ? {} : _ref2$scope, transpileOptions = _ref2.transpileOptions;
  var render = function render2(element) {
    if (typeof element === "undefined") {
      errorCallback(new SyntaxError("`render` must be called with valid JSX."));
    } else {
      resultCallback(errorBoundary$1(element, errorCallback));
    }
  };
  if (!/render\s*\(/.test(code2)) {
    return errorCallback(new SyntaxError("No-Inline evaluations must call `render`."));
  }
  evalCode$1(transform2(code2, transpileOptions), _objectSpread$1(_objectSpread$1({}, scope2), {}, {
    render
  }));
};
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread(target2) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty2(target2, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target2, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target2;
}
function LiveProvider(_ref) {
  var children = _ref.children, code2 = _ref.code, language = _ref.language, theme2 = _ref.theme, disabled = _ref.disabled, scope2 = _ref.scope, transformCode = _ref.transformCode, transpileOptions = _ref.transpileOptions, _ref$noInline = _ref.noInline, noInline = _ref$noInline === void 0 ? false : _ref$noInline;
  var _useState = (0, import_react2.useState)({
    error: void 0,
    element: void 0
  }), state = _useState[0], setState = _useState[1];
  function transpile2(newCode) {
    var input = {
      code: transformCode ? transformCode(newCode) : newCode,
      scope: scope2,
      transpileOptions
    };
    var errorCallback = function errorCallback2(error) {
      return setState({
        error: error.toString(),
        element: void 0
      });
    };
    var renderElement = function renderElement2(element) {
      return setState({
        error: void 0,
        element
      });
    };
    try {
      if (noInline) {
        setState({
          error: void 0,
          element: null
        });
        renderElementAsync(input, renderElement, errorCallback);
      } else {
        renderElement(generateElement(input, errorCallback));
      }
    } catch (error) {
      errorCallback(error);
    }
  }
  (0, import_react2.useEffect)(function() {
    transpile2(code2);
  }, [code2, scope2, noInline, transformCode, transpileOptions]);
  var onChange = function onChange2(newCode) {
    return transpile2(newCode);
  };
  var onError = function onError2(error) {
    return setState({
      error: error.toString()
    });
  };
  return /* @__PURE__ */ import_react2.default.createElement(LiveContext$1.Provider, {
    value: _objectSpread(_objectSpread({}, state), {}, {
      code: code2,
      language,
      theme: theme2,
      disabled,
      onError,
      onChange
    })
  }, children);
}
LiveProvider.defaultProps = {
  code: "",
  noInline: false,
  language: "jsx",
  disabled: false
};
function LiveEditor(props) {
  var _useContext = (0, import_react2.useContext)(LiveContext$1), code2 = _useContext.code, language = _useContext.language, theme2 = _useContext.theme, disabled = _useContext.disabled, onChange = _useContext.onChange;
  return /* @__PURE__ */ import_react2.default.createElement(Editor, _extends2({
    theme: theme2,
    code: code2,
    language,
    disabled,
    onChange
  }, props));
}
var _excluded = ["Component"];
function LivePreview(_ref) {
  var Component3 = _ref.Component, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _useContext = (0, import_react2.useContext)(LiveContext$1), Element = _useContext.element;
  return /* @__PURE__ */ import_react2.default.createElement(Component3, rest, Element ? /* @__PURE__ */ import_react2.default.createElement(Element, null) : null);
}
LivePreview.defaultProps = {
  Component: "div"
};

// src/TagPreview.tsx
var scope = { TagChakra };
var code = `
  <TagChakra title="Tag title" />
`;
var TagPreview = () => {
  return /* @__PURE__ */ import_react3.default.createElement(LiveProvider, {
    code,
    scope
  }, /* @__PURE__ */ import_react3.default.createElement(LiveEditor, {
    style: { height: "100px", background: "#000", color: "#fff" }
  }), /* @__PURE__ */ import_react3.default.createElement(LivePreview, {
    style: { display: "flex", alignItems: "center", justifyContent: "center", padding: "50px" }
  }));
};
export {
  TagPreview
};
/*!
 * regjsgen 0.5.2
 * Copyright 2014-2020 Benjamin Tan <https://ofcr.se/>
 * Available under the MIT license <https://github.com/bnjmnt4n/regjsgen/blob/master/LICENSE-MIT.txt>
 */
/*! https://mths.be/regenerate v1.4.2 by @mathias | MIT license */
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
