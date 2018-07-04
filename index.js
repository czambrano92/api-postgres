'use strict'
const pgp = require('pg-promise')();
const cn = {
    host: '10.6.109.185',
    port: 5432,
    database: 'HIS_HBLT',
    user: 'desarrollo',
    password: 'dgtidev*'
};
const db = pgp(cn);

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