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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _todoItemManager = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = exports.App = function App() {
  _classCallCheck(this, App);

  _todoItemManager.toDoItemManager.GetList();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(0);

var app = new _app.App();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToDoItem = exports.ToDoItem = function () {
    function ToDoItem(toDoDetails) {
        _classCallCheck(this, ToDoItem);

        this._id = toDoDetails.id;
        this._text = toDoDetails.text;
        this._done = toDoDetails.done;
    }

    _createClass(ToDoItem, [{
        key: "id",
        get: function get() {
            return this._id;
        }
    }, {
        key: "text",
        get: function get() {
            return this._text;
        },
        set: function set(newText) {
            this._text = newText;
        }
    }, {
        key: "done",
        get: function get() {
            return this._done;
        },
        set: function set(newDone) {
            this._done = newDone;
        }
    }]);

    return ToDoItem;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var storageName = 'toDoList';

var DataStorage = exports.DataStorage = function () {
  function DataStorage() {
    _classCallCheck(this, DataStorage);
  }

  _createClass(DataStorage, [{
    key: 'GetToDoList',
    value: function GetToDoList() {

      var list = localStorage.getItem(storageName);

      if (!list) {
        console.error('No data in storage,just new created');
        list = [];
        return false;
      } else {
        list = JSON.parse(list);
      }

      return list;
    }
  }, {
    key: 'AddToDoItem',
    value: function AddToDoItem(toDoItem) {
      var list = localStorage.getItem(storageName);
      if (!list) {
        list = [];
        localStorage.setItem(storageName, list);
      } else {
        list = JSON.parse(list);
      }
      list.push(toDoItem);
      list = JSON.stringify(list);
      localStorage.setItem(storageName, list);
    }
  }, {
    key: 'DeleteToDoItem',
    value: function DeleteToDoItem(id) {
      var list = localStorage.getItem(storageName);
      list = JSON.parse(list);
      var index = this.SearchById(id, list);
      if (!index) {
        alert("No Data TO Delete");
      }
      list.splice(index, 1);
      list = JSON.stringify(list);
      localStorage.setItem(storageName, list);
    }
  }, {
    key: 'UpdateToDoItem',
    value: function UpdateToDoItem(id, newToDoItem) {
      var list = localStorage.getItem(storageName);
      list = JSON.parse(list);
      var index = this.SearchById(id, list);
      list[index] = newToDoItem;
    }
  }, {
    key: 'SearchById',
    value: function SearchById(id, toDoList) {
      var index = function index() {
        for (var i = 0; i < list.length; i++) {
          if (list[i].id === id) return i;
        }
        return index;
      };
    }
  }]);

  return DataStorage;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Events = function () {
    function Events() {
        _classCallCheck(this, Events);
    }

    _createClass(Events, [{
        key: "on",
        value: function on(element, eventName, callback) {
            element.addEventListener(eventName, callback, false);
        }
    }, {
        key: "subscribe",
        value: function subscribe(eventName, callback) {
            document.addEventListener(eventName, callback, false);
        }
    }, {
        key: "send",
        value: function send(eventName, details) {
            details = details || {};

            var event = new CustomEvent(eventName, {
                detail: details
            });

            document.dispatchEvent(event);
        }
    }, {
        key: "deleteEvent",
        value: function deleteEvent() {
            document.removeEventListener(eventName, callback, false);
        }
    }]);

    return Events;
}();

var events = exports.events = new Events();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IdGenerator = exports.IdGenerator = function () {
    function IdGenerator() {
        _classCallCheck(this, IdGenerator);
    }

    _createClass(IdGenerator, [{
        key: 'getId',
        value: function getId() {
            var letters = 'abcdefghijklmnopqrstuvwxyz';
            var id = '';
            for (var i = 0; i < 6; i++) {
                id += letters[Math.floor(Math.random() * 26)];
            }
            return id;
        }
    }]);

    return IdGenerator;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Markup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //import _ from 'lodash';


var _events = __webpack_require__(4);

var _addHandler = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addHandler = new _addHandler.AddHandler();

var Markup = exports.Markup = function () {
    function Markup() {
        _classCallCheck(this, Markup);
    }

    _createClass(Markup, [{
        key: 'GenerateBaseMarkup',
        value: function GenerateBaseMarkup() {
            // let baseTemplate = document.getElementById('base-template').innerHTML;
            // let html = _.template(baseTemplate)();

            // document.write(html);
            this.GenerateAddForm();
        }
    }, {
        key: 'GenerateItemMarkup',
        value: function GenerateItemMarkup(toDoList) {

            var listSection = document.getElementById('listSection');
            var self = this;

            toDoList.forEach(function (toDo) {
                var toDoContainerAttr = {
                    class: 'col-md-12 row toDo-container'
                };
                var toDoContainerEl = self.GenerateElement('div', toDoContainerAttr);

                //Generate CheckBox
                var toDoCheckboxContainerAttr = {
                    class: 'col-md-1 toDo-checkBox-container'
                };
                var toDoCheckboxContainerEl = self.GenerateElement('div', toDoCheckboxContainerAttr);

                var todoCheckboxAttr = {
                    class: 'glyphicon glyphicon-' + (toDo.done ? 'check' : 'unchecked')
                };
                var todoCheckboxEl = self.GenerateElement('span', todoCheckboxAttr);
                toDoCheckboxContainerEl.appendChild(todoCheckboxEl);
                toDoContainerEl.appendChild(toDoCheckboxContainerEl);

                //Generate ToDo Text
                var toDoTextContainerAttr = {
                    class: 'col-md-7 toDo-text-container ' + (toDo.done ? 'toDo-done' : 'toDo-undone')
                };
                var toDoTextContainerEl = self.GenerateElement('div', toDoTextContainerAttr);
                var toDoTextEl = self.GenerateElement('span', null, toDo.text);
                toDoContainerEl.appendChild(toDoTextEl);

                //Generate ToDo Buttons
                var toDoBtnContainerAttr = {
                    class: 'col-md-2 toDo-btn-container'
                };
                var toDoBtnContainerEl = self.GenerateElement('div', toDoBtnContainerAttr);

                var toDoDeleteBtnAttr = {
                    type: 'button',
                    class: 'btn btn-danger btn-xs'
                };
                var toDoDeleteBtnEl = self.GenerateElement('div', toDoDeleteBtnAttr, '<span class=\"glyphicon glyphicon-remove\"><\/span>');
                toDoBtnContainerEl.appendChild(toDoDeleteBtnEl);
                toDoContainerEl.appendChild(toDoBtnContainerEl);

                listSection.appendChild(toDoContainerEl);
            });
            // _.each(toDoList, function (toDo) {
            //     let toDoContainerAttr = {
            //         class: 'col-md-12 row toDo-container'
            //     };
            //     let toDoContainerEl = self.GenerateElement('div', toDoContainerAttr);

            //     //Generate CheckBox
            //     let toDoCheckboxContainerAttr = {
            //         class: 'col-md-1 toDo-checkBox-container'
            //     };
            //     let toDoCheckboxContainerEl = self.GenerateElement('div', toDoCheckboxContainerAttr);

            //     let todoCheckboxAttr = {
            //         class: 'glyphicon glyphicon-' + (toDo.done ? 'check' : 'unchecked')
            //     };
            //     let todoCheckboxEl = self.GenerateElement('span', todoCheckboxAttr);
            //     toDoCheckboxContainerEl.appendChild(todoCheckboxEl);
            //     toDoContainerEl.appendChild(toDoCheckboxContainerEl);

            //     //Generate ToDo Text
            //     let toDoTextContainerAttr = {
            //         class: 'col-md-7 toDo-text-container ' + (toDo.done ? 'toDo-done' : 'toDo-undone')
            //     };
            //     let toDoTextContainerEl = self.GenerateElement('div', toDoTextContainerAttr);
            //     let toDoTextEl = self.GenerateElement('span', null, toDo.text);
            //     toDoContainerEl.appendChild(toDoTextEl);

            //     //Generate ToDo Buttons
            //     let toDoBtnContainerAttr = {
            //         class: 'col-md-2 toDo-btn-container'
            //     };
            //     let toDoBtnContainerEl = self.GenerateElement('div', toDoBtnContainerAttr);

            //     let toDoDeleteBtnAttr = {
            //         type: 'button',
            //         class: 'btn btn-danger btn-xs'
            //     };
            //     let toDoDeleteBtnEl = self.GenerateElement('div', toDoDeleteBtnAttr, '<span class=\"glyphicon glyphicon-remove\"><\/span>');
            //     toDoBtnContainerEl.appendChild(toDoDeleteBtnEl);
            //     toDoContainerEl.appendChild(toDoBtnContainerEl);

            //     listSection.appendChild(toDoContainerEl);
            // });
        }
    }, {
        key: 'GenerateElement',
        value: function GenerateElement(tag, attributes, innerHTML) {
            tag = tag || {};
            attributes = attributes || {};
            innerHTML = innerHTML || {};
            var element = document.createElement(tag);

            // _.each(attributes, function (value, attribute) {
            //     element.setAttribute(attribute.toString(), value);
            // });

            for (var key in attributes) {
                element.setAttribute(key, attributes[key].toString());
            }

            if (innerHTML) {
                element.innerHTML = innerHTML;
            }
            return element;
        }
    }, {
        key: 'GenerateAddForm',
        value: function GenerateAddForm() {
            // Create AddForm element
            var formAttr = {
                id: "addForm"
            };
            var formAdd = this.GenerateElement('form', formAttr);

            // Create AddInput element
            var inputAtttr = {
                id: "addInput",
                type: 'text',
                class: "enterText",
                placeholder: "I'm going to..."
            };
            var inputAdd = this.GenerateElement('input', inputAtttr);

            // Create AddButton element
            var buttonAttr = {
                id: "addBtn",
                type: 'submit',
                class: "btn btn-submit addButton"
            };
            var buttonAdd = this.GenerateElement('button', buttonAttr, 'Lets do it!');

            //Make Form
            formAdd.appendChild(inputAdd);
            formAdd.appendChild(buttonAdd);
            var div = document.getElementById('baseHead');
            _events.events.on(buttonAdd, 'submit', function () {
                addHandler.CreateToDoItem(inputAdd.value);
            });
            div.appendChild(formAdd);
        }
    }]);

    return Markup;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toDoItemManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _todoItem = __webpack_require__(2);

var _idGenerator = __webpack_require__(5);

var _dataStorage = __webpack_require__(3);

var _markup = __webpack_require__(6);

var _events = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var idGenerator = new _idGenerator.IdGenerator();
var dataStorage = new _dataStorage.DataStorage();
var markup = new _markup.Markup();

var ToDoItemManager = function () {
    function ToDoItemManager() {
        _classCallCheck(this, ToDoItemManager);
    }

    _createClass(ToDoItemManager, [{
        key: 'Create',
        value: function Create(newText) {
            var newId = idGenerator.getId();
            var text = newText;
            var toDoItemDetails = {
                id: newId,
                text: text,
                done: false
            };

            var toDoItem = new _todoItem.ToDoItem(toDoItemDetails);
            dataStorage.AddToDoItem(toDoItem);
            // return toDoItem; ////// ?????
        }
    }, {
        key: 'Edit',
        value: function Edit(id, newText, newDone) {
            var toDoItemDetails = {
                id: id,
                text: newText,
                done: newDone
            };
            dataStorage.UpdateToDoItem(id, toDoItemDetails);
        }
    }, {
        key: 'Delete',
        value: function Delete(id) {
            dataStorage.DeleteToDoItem(id);
        }

        // Должен возвращать массив элементов, а в маркапе должен отображать 

    }, {
        key: 'GetList',
        value: function GetList() {
            var self = this;
            var toDoList = dataStorage.GetToDoList();
            markup.GenerateBaseMarkup();
            markup.GenerateItemMarkup(toDoList);
        }
    }]);

    return ToDoItemManager;
}();

var toDoItemManager = exports.toDoItemManager = new ToDoItemManager();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AddHandler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _todoItemManager = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const toDoItemManager = new ToDoItemManager();

var AddHandler = exports.AddHandler = function () {
    function AddHandler() {
        _classCallCheck(this, AddHandler);
    }

    _createClass(AddHandler, [{
        key: 'CreateToDoItem',
        value: function CreateToDoItem(text) {
            _todoItemManager.toDoItemManager.Create(text);
        }
    }]);

    return AddHandler;
}();

/***/ })
/******/ ]);