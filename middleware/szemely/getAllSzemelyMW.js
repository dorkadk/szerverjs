/**
 * Get: Lekerdezi az osszes Szemely adatait.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const SzemelyModel = requireOption(objectrepository, 'SzemelyModel');
    return function (req, res, next) {
        SzemelyModel.find({}, (err, szemelyek)=> {
            if(err){
                return next(err);
            }
            res.locals.szemelyek = szemelyek;
            return next();
        })

    };
};
