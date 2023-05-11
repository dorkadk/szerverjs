/**
 * Get: Lekerdezi az adott id-val rendelkezo Szemely adatait.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const SzemelyModel = requireOption(objectrepository, 'SzemelyModel');

    return function (req, res, next) {

        SzemelyModel.findOne({_id: req.params.szemelyid}, (err, szemely)=> {
            if(err || !szemely){
                return next(err);
            }
            res.locals.szemelyek = szemely;
            return next();
        })

    };

};
