var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/homepage/', function(req, res, next) {
  res.render('index');
});
/* BOOK method*/
router.get('/bookstore/', (req, res) => {
  res.render("bookstore");
})

router.get('/book/add-new', (req, res) => {
  res.render("addBook");
})

router.get('/book/detail/:id', (req, res) => {
  let id = req.params.id;
  res.render("book-detail",{id:id});
})

/* User method*/
router.get('/register/', (req, res) => {
  res.render("register");
})

router.get('/login/', (req, res) => {
  res.render("login");
})

router.get('/user-info/:id', (req, res) => {
  let id = req.params.id;
  res.render("user-info",{id:id});
})

module.exports = router;
