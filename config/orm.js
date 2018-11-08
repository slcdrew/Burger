// Import MySQL connection.
var connection = require('./connection.js');
var express = require('express');

// Object for all our SQL statement functions.
var orm = {
  all: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, res) {
      if(err) {
        throw err;
      }
      cb(res);
    });
  },

  // Create function
  create: function(burger_name, cb){
    var queryString = 'INSERT INTO burgers SET ?';
    connection.query(queryString, {
      burger_name: burger_name,
      devoured: false
    }, function(err, res) {
      if(err) {
        throw err;
      }
      cb(res);
    });
  },


//  update function
  update: function(burgerID, cb) {
    var queryString = "UPDATE burgers SET ? WHERE ?";
    // console.log(queryString);
    connection.query(queryString, [{devoured: true}, {id: burgerID}], function(err, res) {
      if(err) {
        throw err;
      }
      cb(res);
    });
  },

  delete: function(burgerID, cb) {
    var queryString = "DELETE FROM burgers WHERE ?";
    console.log("We're running");
    connection.query(queryString, [{id: burgerID}], function(err, res) {
      if(err) {
        throw err;
      }
      cb(res);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
