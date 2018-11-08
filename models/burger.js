// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var express = require('express');

var burger = {
  all: function(cb) {
    orm.all(function(res) {
      cb(res);
    });
  },
 
  create: function(burger_name, cb) {
    orm.create(burger_name, function(res) {
      cb(res);
    });
  },
  
  update: function(burger_id, cb) {
    orm.update(burger_id, function(res) {
      cb(res);
    });
  },

  delete: function (burger_id, cb) {
    orm.delete(burger_id, function(res) {
      cb(res);
    });
  }
};



// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
