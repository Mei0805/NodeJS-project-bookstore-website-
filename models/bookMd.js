var database = require('./connectDB');

exports.list = function(callback) {
    let sql = `SELECT * FROM book_info`;
    database.query(sql,function(err,data){
        if (err) throw err;
        callback(data); 
    });
}
exports.hotlist = function(callback) { //HOT: noibat = 1, order by view DESC
    let sql = `SELECT * FROM book_info WHERE highlight = 1 ORDER BY view DESC LIMIT 0,5 `;
    database.query(sql,function(err,data){
        if (err) throw err;
        callback(data); 
    });
}

exports.mostviewlist = function(callback) {  //xem nhieu
    let sql = `SELECT * FROM book_info ORDER BY view DESC LIMIT 0,5 `;
    database.query(sql,function(err,data){
        if (err) throw err;
        callback(data); 
    });
}

exports.highlightlist = function(callback) { //noibat
    let sql = `SELECT * FROM book_info WHERE highlight = 1 LIMIT 0,5 `;
    database.query(sql,function(err,data){
        if (err) throw err;
        callback(data); 
    });
}

exports.newlist = function(callback) { //sp moi 
    let sql = `SELECT * FROM book_info ORDER BY time_update DESC LIMIT 0,5`;
    database.query(sql,function(err,data){
        if (err) throw err;
        callback(data); 
    });
}

exports.samecategory = function(id_ctg,callback) { //sp moi 
    let sql = `SELECT * FROM book_info WHERE id_category = ${id_ctg} LIMIT 0,5`;
    database.query(sql,function(err,data){
        if (err) throw err;
        callback(data); 
    });
}

exports.create = function(data,callback) {
    let sql = `INSERT INTO book_info SET ?`;
    database.query(sql,data,function(err,dt){
        if (err) throw err;
        callback(dt) 
    });
}

exports.update = function(id,data,callback) {
    let sql = `UPDATE book_info SET ? WHERE id_book=?`;
    database.query(sql,[data,id],function(err,dt){
        if (err) throw err;
        callback() ;
    });
}

exports.read = function(id,callback) {
    let sql = `SELECT * FROM book_info WHERE id_book =?`;
    database.query(sql,id,function(err,dt){
        if (err) throw err;
        data = dt[0];
        callback(data) ;
    });
}

exports.delete = function(id,callback) {
    let sql = `DELETE FROM book_info WHERE id_book=?`;
    database.query(sql,id,function(err,dt){
        if (err) throw err;
        callback() ;
    });
}