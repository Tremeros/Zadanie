"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = void 0;

var _redux = require("redux");

var _records = require("./records");

var reducers = (0, _redux.combineReducers)({
  records: _records.recordsReducer
});
exports.reducers = reducers;