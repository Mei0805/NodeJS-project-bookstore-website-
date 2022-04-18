var express = require('express');
var router = express.Router();
var userMd = require('./../models/userMd');
const bcrypt = require("bcrypt");
var session = require('express-session');
var database = require('../models/connectDB');
/* GET users listing. */


router.get('/', function (req, res, next) {
  userMd.list(function (userList) {
      res.json(userList);
  });
});

router.get('/:id', function (req, res, next) {
  id = req.params.id;
  userMd.read(id,function(oneUser) {
      res.json(oneUser);
  });
});

router.delete('/delete/:id', function (req, res, next) {
  id = req.params.id;
  userMd.delete(id,function() {
      res.json({"thông báo": "Xóa thành công"});
  });
});

router.post('/register-success', function(req, res, next) {
  let data = req.body;
  userMd.create(data,function(){
      res.json({"thông báo": "Thêm thành công!"});
      
  }) 
});
router.post('/handle-login', async function (req, res) {
  let u = req.body.username;
  let p = req.body.password;
  let sql = 'SELECT * FROM users WHERE username = ?';
  database.query(sql, [u], function (err, rows) {
      if (rows.length <= 0) {
          res.redirect("/homepage");
          return;
      }
      let user = rows[0];
      let passEncode = user.password;
      var result = bcrypt.compareSync(p, passEncode);
      if (result) {
          console.log("Login!");
          var sess = req.session;  //initialize session variable
          sess.daDangNhap = true;
          sess.username = user.username;
          // res.redirect("/member/login-success");
          if (sess.back) {
              console.log(sess.back);
              res.redirect(sess.back);
          } else {
              res.redirect("/bookstore");
          }
      } else {
          console.log("Not match!");
          res.redirect("/bookstore");
      }
  })
})

router.put('/update-category/:id',function(req,res){
  let id = req.params.id;
  let data=req.body;
  userMd.update(id,data,function(){
      res.json({"thong bao": "Cập nhật xong!"});
  });

});



module.exports = router;
