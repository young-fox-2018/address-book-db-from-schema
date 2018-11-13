"use strict"
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('adress_book.db');

module.exports = db