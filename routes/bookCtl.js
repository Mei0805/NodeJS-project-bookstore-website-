var express = require('express');
var router = express.Router();
var bookMd = require('./../models/bookMd');


router.get('/', function (req, res, next) {
    bookMd.list(function (bookList) {
        res.json(bookList);
    });
});

router.get('/most-view', function (req, res, next) {
    bookMd.mostviewlist(function (bookList) {
        res.json(bookList);
    });
});

router.get('/hot-list', function (req, res, next) {
    bookMd.hotlist(function (bookList) {
        res.json(bookList);
    });
});

router.get('/highlight', function (req, res, next) {
    bookMd.highlightlist(function (bookList) {
        res.json(bookList);
    });
});

router.get('/new-list', function (req, res, next) {
    bookMd.newlist(function (bookList) {
        res.json(bookList);
    });
});

router.get('/same-category/:id', function (req, res, next) {
    id= req.params.id;
    bookMd.samecategory(id,function (bookList) {
        res.json(bookList);
    });
});

router.get('/:id', function (req, res, next) {
    id = req.params.id;
    bookMd.read(id,function(oneBook) {
        res.json(oneBook);
    });
});

router.delete('/delete/:id', function (req, res, next) {
    id = req.params.id;
    bookMd.delete(id,function() {
        res.json({"thông báo": "Xóa thành công"});
    });
});

router.post('/addnew', function(req, res, next) {
    let data = req.body;
    bookMd.create(data,function(){
        res.json({"thông báo": "Thêm thành công!"});
        
    }) 
});

router.put('/update-category/:id',function(req,res){
    let id = req.params.id;
    let data=req.body;
    bookMd.update(id,data,function(){
        res.json({"thong bao": "Cập nhật xong!"});
    });

});



module.exports = router;