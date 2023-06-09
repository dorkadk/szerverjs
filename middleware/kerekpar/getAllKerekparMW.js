/**
 * Get: Lekerdezi az osszes Kerekpar adatait.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const KerekparModel = requireOption(objectrepository, 'KerekparModel');
    return function (req, res, next) {
        KerekparModel.find({}, (err, kerekparok)=> {
            if(err){
                return next(err);
            }
            res.locals.kerekparok = kerekparok;
            return next();
        })
    };
};
