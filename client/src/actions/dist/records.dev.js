"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRecord = exports.addRecord = exports.getRecords = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getRecords = function getRecords() {
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get('http://localhost:5000'));

          case 3:
            res = _context.sent;
            dispatch({
              type: _types.GET_RECORDS,
              payload: res.data
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: _types.ERROR,
              payload: {
                msg: 'Fail to load records'
              }
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.getRecords = getRecords;

var addRecord = function addRecord(record) {
  return function _callee2(dispatch) {
    var config, body, res;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            config = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
            body = JSON.stringify(record);
            _context2.next = 5;
            return regeneratorRuntime.awrap(_axios["default"].post('http://localhost:5000', body, config));

          case 5:
            res = _context2.sent;
            dispatch({
              type: _types.GET_RECORDS,
              payload: res.data
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            dispatch({
              type: _types.ERROR,
              payload: {
                msg: 'Fail to add record'
              }
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.addRecord = addRecord;

var deleteRecord = function deleteRecord(id) {
  return function _callee3(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_axios["default"]["delete"]("http://localhost:5000/".concat(id)));

          case 3:
            res = _context3.sent;
            dispatch({
              type: _types.GET_RECORDS,
              payload: res.data
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            dispatch({
              type: _types.ERROR,
              payload: {
                msg: 'Fail to delete record'
              }
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.deleteRecord = deleteRecord;