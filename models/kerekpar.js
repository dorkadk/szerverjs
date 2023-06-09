const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Kerekpar = db.model('Kerekpar', {
    tipus: String,
    szin: String,
    _tulajdonos: {
        type: Schema.Types.ObjectId,
        ref: 'Szemely'
    }
});

module.exports = Kerekpar;