var express = require('express');
var app = express();

app.use(express.static('public')); // uses static files from the 'public' folder
app.get('/demoLoginPage.htm', function (req, res) { // specific get url
   res.sendFile( __dirname + "/public/" + "form.html" ); // returns this page to the on the get addr
})

app.get('/process_login', function (req, res) {
   // Prepare output in JSON format
   var response = {
      userID: 0, // this will be an incremented plus 1 from the last userID in the database
      username: req.query.username, // gotten from the form
      password: scramble(req.query.password), // gotten from the form
      allergens: req.query.allergens // gotten from the form
   };
   // Print the query
   console.log(response); // Display the form information

   /*
   Database code is currently in a different file
   It will go here to handle the response from the form
   */
   
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