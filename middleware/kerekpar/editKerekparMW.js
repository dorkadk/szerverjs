/**
 *  Post: Ha az adott id-val letezik kerekpar, akkor a mentes gomb megnyomasaval modositja az adatokat.
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const KerekparModel = requireOption(objectrepository, 'KerekparModel');
    return function (req, res, next) {
         if(
             typeof req.body.tipus === 'undefined' ||
             typeof req.body.szin === 'undefined'
         ) {
             return next();
         }


        if (typeof res.locals.kerekpar === 'undefined') {
            res.locals.kerekpar = new KerekparModel();
        }


        res.locals.kerekpar.tipus = req.body.tipus;
        res.locals.kerekpar.szin = req.body.szin;
        //res.locals.kerekpar._tulajdonos._id = req.body.tulajdonos;

        res.locals.kerekpar.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        })
    };
};
