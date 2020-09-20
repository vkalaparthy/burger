// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    all: function(tableInput, cb) {
      const queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
            return res.status(500).end();
        }
        cb(result);
      });
    },
    update: function(table, col_value, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET";
        queryString += col_value;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
        if (err) {
            return res.status(500).end();
        }

        cb(result);
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;