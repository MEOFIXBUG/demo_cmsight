const mysql = require('mysql');
function connectToSring() {
    return mysql.createConnection({
        host: "us-cdbr-east-02.cleardb.com",
        user: "bf7d7ecfe273f2",
        password: "784edab8",
        database: "heroku_438b6608acc59dd",
    });
}

exports.load = sql => {
    return new Promise((resolve, reject) => {
        //throw new Error(' just happen right now :(');
        const con = connectToSring();
        con.connect(err => {
            if (err) {
                reject(err);
            }
            //console.log("Connected!");
        });
        con.query(sql, (error, results, fields) => {
            if (error) {
                reject(error);
            }
            resolve(results);
        });
        con.end();
    });
};
