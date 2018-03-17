var connection = require("./connection.js");

var orm = {

  select: function(tableInput, callB) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callB(result);
    });
  },

  new: function(table, cols, name, callB) {
    var values = {
      burger_name: name,
      devoured: false
    }
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(values.length);
    queryString += ") ";

    connection.query(queryString, values, function(err, result) {
      if (err) {
        throw err; 
      }
      callB(result);
    });
  },

  update: function(table, values, instance, callB) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(values);
    queryString += " WHERE ";
    queryString += instance;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callB(result);
    });
  }
};

module.exports = orm;

