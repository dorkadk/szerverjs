/**
 * Post: Ha az adott id-val meg nem letezik szemely, akkor a letrehozas gomb megnyomasaval letrehozza az uj szemely.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
