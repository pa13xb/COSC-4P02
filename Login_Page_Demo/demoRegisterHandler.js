var express = require('express');
var app = express();
var md5 = require('md5')

app.use(express.static('public')); // uses static files from the 'public' folder
app.get('/demoLoginPage.htm', function (req, res) { // specific get url
   res.sendFile( __dirname + "/public/" + "form.html" ); // returns this page to the on the get addr
})

app.get('/process_register', function (req, res) {
   // Prepare output in JSON format (Dictionary)
   var response = {
      username: req.query.username, // gotten from the form
      email: req.query.email, // gotten from form
      password: scramble(req.query.password), // gotten from the form
      allergens: req.query.allergens, // gotten from the form
      salt: generateSalt() // To be used in hashing the password
   };
   // Print
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

        // Query to get max user ID to increment uid for new user
        var queryString1 = 'SELECT MAX(user_id) FROM dbo.[user]'
        request.query(queryString1, function (err, result) {
            if (err) console.log(err);
            response.uid = result.recordset[0][''] + 1;
            
            // Second Query once new uid is prepared
            // This query adds the user to the database with the new userID
            var queryString2 = `INSERT INTO dbo.[user] 
            VALUES ('${response.uid}', '${response.username}', '${response.password}', 110, '${response.salt}', '${response.email}')`
            request.query(queryString2, (err2, result2) => {
               if (err2) console.log(err2)
               console.log('UID: ' + response.uid);
               console.log('Successfully added %s to the database', response.username);
            })
        });
    });
    // End of SQL
   
   /**
    * This is the post operation after all the handling
    * ideally, it would leading to the home page or account page or whatever
    */
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://localhost:%s", port)
   console.log('Go to http://localhost:%s/demoRegisterPage.html to test', port)
})

function scramble(password, salt){
    // A properly complicated scramble (hashing) function
    // Double hashed with salt
    return md5(md5(password) + salt)
}

function generateSalt(){
   // Goal: Make a randomly generated salt string
   return 'iAmSalt'
}