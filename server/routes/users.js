var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET users listing. */
router.post('/register', function(req, res, next) {
  const newObj = {
    "firstname": req.body.firstname,
    "lastname": req.body.lastname,
    "email": req.body.email,
    "gender": req.body.username,
    "password": req.body.password
  }
  fs.readFile('data/db.json', 'utf-8', function(err,data){
    const d = JSON.parse(data)
    d.users.push(newObj)
    const newObj1 = {...d}
    fs.writeFile('data/db.json', JSON.stringify(newObj1, null, 2), function(err,data){
        console.log('Note added', data);
        res.status(200).json({message: 'successfully'})
    });
  })
});
router.post('/login', function(req, res, next) {
  fs.readFile('data/db.json', 'utf-8', function(err,data){
    const users = JSON.parse(data).users;
    console.log(users)
    const user = users.filter(user => (user.firstname === req.body.username && user.password === req.body.password))
    console.log(user)
    if(user[0].firstname === req.body.username) {
      res.status(200).send('respond with a resource');
    } else {
      res.status(400).send('username or password wrong');
    }
  })
});

module.exports = router;
