var express = require('express');
var app = express();

app.use(express.static('public')); // uses static files from the 'public' folder
app.get('/demoLoginPage.htm', function (req, res) { // specific get url
   res.sendFile( __dirname + "/public/" + "form.html" ); // returns this page to the on the get addr
})

app.get('/process_login', function (req, res) {
   // Prepare output in JSON format
   var response = {
      username: req.query.username, // gotten from the form
      password: scramble(req.query.password), // gotten from the form
      allergens: req.query.allergens // gotten from the form
   };
   // Print the query
   console.log(response); // Display the form information

   // // Start of SQL
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
           
        var queryString = `INSERT INTO dbo.[user] 
        VALUES (2, '${response.username}', '${response.password}', 110)`
        var queryString2 = 'SELECT * FROM [user]'
        request.query(queryString, function (err, recordset) {
            
            if (err) console.log(err)

            // Print Response that the user was successfully added...
            // This is flawed as it's a success print if the query went through
            // NOT if the query succeeded
            console.log('Successfully added %s to the database', response.username)
            
        });
    });
    // End of SQL
   
   /**
    * This is the post operation after all the handling
    * ideally, it would leading to the home page or account page or whatever
    */
   res.end(JSON.stringify(response)); // Display the information to the webpage
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://localhost:%s", port)
   console.log('Go to http://localhost:%s/demoLoginPage.html to test', port)
})

function scramble(password){
    // A properly complicated scramble (hashing) function needs to implemented
    return password.toUpperCase()
}