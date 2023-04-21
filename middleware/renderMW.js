/**
 * A templatebe ertekek betoltese
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        res.render(viewName, res.locals);
    };

};