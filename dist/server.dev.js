"use strict";

var express = require('express');

var fs = require('fs');

var cors = require('cors');

var _require = require('express-validator/check'),
    check = _require.check,
    validationResult = _require.validationResult;

var dataBase = JSON.parse(fs.readFileSync("".concat(__dirname, "/database.json"), "utf8"));
var port = 5000;
var app = express();
app.use(express.json());
app.use(cors());
app.get('/', function (req, res) {
  res.status(200).json(dataBase);
});
app.post('/', [check('name', 'Name is required').not().isEmpty(), check('language', 'Language is required').not().isEmpty(), check('description', 'Description is required').not().isEmpty(), check('initRelease', 'Init Release is required').not().isEmpty()], function (req, res) {
  var errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json({
      errors: errors.array()
    });
  }

  var newId = dataBase[dataBase.length - 1].id + 1;
  var newElement = Object.assign({
    id: newId
  }, req.body);
  dataBase.push(newElement);
  fs.writeFile("".concat(__dirname, "/database.json"), JSON.stringify(dataBase), function (err) {
    res.status(201).json(dataBase);
  });
});
app["delete"]('/:id', function (req, res) {
  var index = dataBase.findIndex(function (item) {
    return item.id == req.params.id;
  });
  var element = dataBase.splice(index, 1);

  if (index === -1) {
    res.status(404).json({
      status: 'Fail',
      message: 'Invalid ID'
    });
  } else {
    fs.writeFile("".concat(__dirname, "/database.json"), JSON.stringify(dataBase), function (err) {
      res.status(200).json(dataBase);
    });
  }
});
app.listen(port, function () {
  console.log('Server is running on port' + port);
});