/**
 * Get: Lekerdezi az egy szemelyhez tartozo osszes Kerekpar adatait.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const KerekparModel = requireOption(objectrepository, 'KerekparModel');
    return function (req, res, next) {
        KerekparModel.find({_tulajdonos: res.locals.szemely._id}, (err, kerekparok)=> {
            if(err){
                return next(err);
            }
            res.locals.kerekparok = kerekparok;
            console.log("listet hív");
            return next();
        })
    };
};
