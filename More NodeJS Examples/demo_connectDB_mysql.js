// Sheriff Abouchekeir

// Demonstrates connecting to a database via mysql module
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "4p02recipeserver.database.windows.net",
  user: "sa16op", // DB username here
  password: "6119945SA!^op" // DB password here
});

con.connect(function(err) {
  if (err) console.log(err);
  else console.log("Connected!");
});

// Note: Does not work for me... idk why...