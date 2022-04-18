var express = require('express');
var router = express.Router();
var bookCategoryMd = require('./../models/book_categoryMd');


router.get('/', function (req, res, next) {
    bookCategoryMd.list(function (categoryList) {
        res.json(categoryList);
    });
});

router.get('/:id', function (req, res, next) {
    id = req.params.id;
    bookCategoryMd.read(id,function(oneCategory) {
        res.json(oneCategory);
    });
});

router.delete('/delete/:id', function (req, res, next) {
    id = req.params.id;
    bookCategoryMd.delete(id,function() {
        res.json({"thông báo": "Xóa thành công"});
    });
});

router.post('/addnew', function(req, res, next) {
    let data = req.body;
    bookCategoryMd.create(data,function(){
        res.json({"thông báo": "Thêm thành công!"});
        
    }) 
});

router.put('/update-category/:id',function(req,res){
    let id = req.params.id;
    let data=req.body;
    bookCategoryMd.update(id,data,function(){
        res.json({"thong bao": "Cập nhật xong!"});
    });

});



module.exports = router;