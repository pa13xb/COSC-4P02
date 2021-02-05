// Sheriff Abouchekeir

// Demonstrates running a server using express module
// Connecting to a database and displaying queries using mssql module
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa16op',
        password: '6119945SA!^op',
        server: '4p02recipeserver.database.windows.net', 
        database: '4p02RecipeDatabase' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('SELECT * FROM sheriffTest2', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(8080, function () {
    console.log('Server is running..');
});

console.log('Go to localhost:8080 on your web browser to view results')
console.log('Hit Ctrl + C to terminate')
