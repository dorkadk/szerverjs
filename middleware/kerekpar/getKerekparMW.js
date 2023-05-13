/**
 * Get: Lekerdezi az adott id-val rendelkezo Kerekpar adatait.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const KerekparModel = requireOption(objectrepository, 'KerekparModel');
    return function (req, res, next) {

        KerekparModel.findOne({_id: req.params.kerekparid}, (err, kerekpar) => {
            if (err || !kerekpar) {
                return next(err);
            }
            res.locals.kerekpar = kerekpar;
            return next();
        })

    };
};
