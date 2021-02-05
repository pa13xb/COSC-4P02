// Sheriff Abouchekeir

// Demonstrates connecting to DB via tedious
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var http = require('http')

// Create connection to database
var config = {
  server: '4p02recipeserver.database.windows.net',
  authentication: {
      type: 'default',
      options: {
          userName: 'sa16op', // update me
          password: '6119945SA!^op' // update me
      }
  },
  options: {
      database: '4p02RecipeDatabase',
      encrypt: true
  }
}
var connection = new Connection(config);

function queryDatabase() {
    console.log("Reading rows from the Table...");
  
    // Read all rows from table
    const request = new Request(
      `SELECT * FROM sheriffTest2`,
      (err, rowCount) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`${rowCount} row(s) returned`);
        }
      }
    );
  
    request.on("row", columns => {
      columns.forEach(column => {
        console.log("%s\t%s", column.metadata.colName, column.value);
      });
    });
  
    connection.execSql(request);
  }

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected");
    queryDatabase();
  }
});

// Note: This does not work for me... idk why...