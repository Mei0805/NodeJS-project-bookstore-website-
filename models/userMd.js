var database = require('./connectdb');
const bcrypt = require("bcrypt");

exports.list = function (callback) {
    let sql = `SELECT * FROM users`;
    database.query(sql, function (err, data) {
        if (err) throw err;
        callback(data);
    });
}

exports.create = function (data, callback) {
    var salt = bcrypt.genSaltSync(10);
    let u = data.username;
    let p = data.password;
    var passwordEncode = bcrypt.hashSync(p, salt);
    let em = data.email;
    let user_info = { username: u, password: passwordEncode, email: em };
    let sql = `INSERT INTO users SET ?`;
    database.query(sql, user_info, function (err, dt) {
        if (err) throw err;
        callback(dt);
        
    });

}

exports.update = function (id, data, callback) {
    let sql = `UPDATE users SET ? WHERE id=?`;
    database.query(sql, [data, id], function (err, dt) {
        if (err) throw err;
        callback();
    });
}

exports.read = function (id, callback) {
    let sql = `SELECT * FROM users WHERE id =?`;
    database.query(sql, id, function (err, dt) {
        if (err) throw err;
        data = dt[0];
        callback(data);
    });
}

exports.delete = function (id, callback) {
    let sql = `DELETE FROM book_info WHERE id_book=?`;
    database.query(sql, id, function (err, dt) {
        if (err) throw err;
        callback();
    });
}