const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Szemely = db.model('Szemely',{
    nev: String,
    kor: String
});

module.exports = Szemely;