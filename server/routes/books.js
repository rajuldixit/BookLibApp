var express = require('express');
var router = express.Router();
var fs = require('fs')

router.get('/', (req,res,next) => {
  fs.readFile('data/db.json', 'utf-8', (err,data) => {
    if(err) res.status(400).json({message: err})
    const books = JSON.parse(data).books
    res.status(200).json({books: books})
  }) 
})

module.exports = router