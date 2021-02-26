const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{ // Same setup as the app in server.js. The '/' means home directory, but when we pass this to server.js, we will include /questing before it
    res.render('questing/questing') // good practice to have view directory structure to mirror js file structure as much as possible
})

module.exports = router // This file (or module), when required, will return this router object.