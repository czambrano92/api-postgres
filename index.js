
//Documentacion: https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example#simple-select

var app = require('./app');
const db = require('./pg-con');


db.connect()
    .then(function (obj) {
        console.log('DATABASE WORKING ...');
        obj.done(); // success, release connection;
    })
    .catch(function (error) {
        console.log("ERROR:", error.message);
    });



