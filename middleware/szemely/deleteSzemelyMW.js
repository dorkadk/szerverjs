/**
 *  Post: Ha az adott id-val letezik szemely, akkor a torles gomb megnyomasaval torli az adatokat.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
