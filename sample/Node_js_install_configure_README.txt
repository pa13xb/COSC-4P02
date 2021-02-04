<<<Ethan Gibbons>>>

Let me know if any of these steps don't work or make sense. Unfortunately, Github doesn't like it when I add all
the imports, so you will have to import them on your own machines. Hopefully there is a way around this.

Go to website: https://nodejs.org/en/

download LTS version and install.

Now you have access to "npm" commands in command line, bash, Powershell. npm stands for Node Package Manager

I recommend using VS Code as the IDE because its extensions supposedly make for a faster workflow,
but I also like the colour themes. VS Code does not have a compiler, but typing CTRL ` (that is, the backwards apostrophe next
to the 1 key on your keyboard) toggles a terminal window.

In the terminal, navigate to the path you want to put your server file in.

Put everything this folder into that directory.

Run the "npm init -y" command. This creates a package.json file which will hold info about the program

Run "npm i express ejs mssql", the 'i' stands for install. We are installing express, which is apparently the most popular
backend framework for node.js for dealing with http requests (remember GET and POST are types of http requests).
ejs is a popular view engine (you'll see what that means later), and mssql will be used later for database stuff

Run "npm i --save-dev nodemon". This is a dev library that, if the program is started in dev mode, makes it so that
when you save the program while it's running, the program will stop and restart with the saved changes. This makes
it easier to see your changes when you're writing code.

If you look at the package.json file, you will see a dependencies field and a devDependencies field with our installed
libraries. "Dependency" == "Library" == "Package"

You will also see a scripts field. We can add scripts to this field. You can delete the default "test" script. 
and put this instead ->   "devStart" : "nodemon server.js"

Now in the terminal we can run "npm run devStart" which will open a file called server.js, if that file exists.





<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>