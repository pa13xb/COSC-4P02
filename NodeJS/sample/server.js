const express = require('express') /** require() is how we import a dependency/

This is supposedly best
practice for importing a package. The package returns an object. 
the keyword const just prevents the developer from accidentally
reassigning the variable and losing the returned object.
*/
//console.log(express) // if you wanna see what express is. It's quite large
const app = express()
//console.log(app) // same deal

app.set('view engine', 'ejs') /** in order to call that render() function below, we need to set our view engine. EJS (Embedded JavaScript templating) is a very popular package
for this. I do not know how React interacts with .ejs files, but apparently it is possible.
*/


// the first argument is the 'route' which is another word for path. '/' means the home directory
// the second argument is a function (I used an arrow function). This function is what will be called when a client gives a GET request.
app.get('/',(req, res) =>{ 
    
    console.log(req.query)
    for (key in req.query){
        console.log(key)
    }
    res.send("This should be html... " + req.query.bobs +" "+ req.query.uncle) // There are a couple of ways to send html. 
       
})


/**  Setting this GET here is not the best practice, otherwise this module ('module' is the same thing as 'file') will be huge.*/
app.get('/testing/',(req, res) =>{ 
    
    console.log(req.query)
    for (key in req.query){
        console.log(key)
    }
    res.render("testing") /**  This is only possible because we set our view engine. the render() function defaults to looking in a 'views' folder,
    so I made one and made a dummy "testing.ejs" file in it.
    */
       
})

const questingRouter = require ('./routes/questing') // probably not a great idea to import this low in the file, but oh well
app.use('/questing', questingRouter) // Hopefully this makes sense

app.listen(3000) // This program is now listening at port 3000

console.log('go on a browser and type "localhost:3000/?bobs=your&uncle=bob"')
console.log('then on a browser and type "localhost:3000/testing"')
console.log('how about "localhost:3000/questing"')