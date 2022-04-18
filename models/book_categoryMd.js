var database = require('./connectdb');

exports.list = function(callback) {
    let sql = `SELECT * FROM book_categories`;
    database.query(sql,function(err,data){
        if (err) throw err;
        callback(data); 
    });
}

exports.create = function(data,callback) {
    let sql = `INSERT INTO book_categories SET ?`;
    database.query(sql,data,function(err,dt){
        if (err) throw err;
        callback(dt) 
    });
}

exports.update = function(id,data,callback) {
    let sql = `UPDATE book_categories SET ? WHERE id_category=?`;
    database.query(sql,[data,id],function(err,dt){
        if (err) throw err;
        callback() ;
    });
}

exports.read = function(id,callback) {
    let sql = `SELECT * FROM book_categories WHERE id_category =?`;
    database.query(sql,id,function(err,dt){
        if (err) throw err;
        data = dt[0];
        callback(data) ;
    });
}

exports.delete = function(id,callback) {
    let sql = `DELETE FROM book_categories WHERE id_category=?`;
    database.query(sql,id,function(err,dt){
        if (err) throw err;
        callback() ;
    });
}