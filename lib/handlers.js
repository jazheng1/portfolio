const express = require('express')
const router = express.Router()

// ROUTES
router.get("/", function(req, res, next){
    console.log("home rendered")
    res.render('home')
})
router.get("/resume", function(req, res, next){
    console.log("resume rendered")
    res.render('resume')
})

router.get("404", function(req, res){
    res.render('404')
})
router.get("500", function(req, res){
    res.render('500')
})

module.exports = router