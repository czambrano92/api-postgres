const pgp = require('pg-promise')();
const cn = {
    host: '10.6.109.185',
    port: 5432,
    database: 'HIS_HBLT',
    user: 'desarrollo',
    password: 'dgtidev*'
};

const db = pgp(cn);
 
module.exports = db;

/*
// SELECT
db.any('select * from urgencia.rol_funcionario where rut_funcionario = $1' , '18062538-0')
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
  console.log('error en conexión bd.' + error);
}); 

//Simple INSERT
db.none('INSERT INTO urgencia.rol_funcionario (cod_rol, rut_funcionario, activo) VALUES ($1, $2, $3)', [8, '18062538-0', true])
    .then(() => {
        // success;
        console.log('OK OK OK ...');
    })
    .catch(error => {
        // error;
        console.log('ERROR => ' + error);
    });


//INSERT with result
    db.one('INSERT INTO urgencia.rol_funcionario (cod_rol, rut_funcionario, activo) VALUES ($1, $2, $3) RETURNING rut_funcionario', [2, '18062538-0', true])
    .then(data => {
        console.log(data.rut_funcionario); // print new user id;
    })
    .catch(error => {
        console.log('ERROR:', error); // print error;
    });

//Functions & Procedures
db.func('urgencia.diferencia_horas', ['04-07-2018 00:00:00'])
.then(data => {
    console.log('DATA:', data); // print data;
})
.catch(error => {
    console.log('ERROR:', error); // print the error;
});*/