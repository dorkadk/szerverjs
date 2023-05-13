/**
 * Post: Ha az adott id-val meg nem letezik kerekpar, akkor a letrehozas gomb megnyomasaval letrehozza az uj kerekpart.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const KerekparModel = requireOption(objectrepository, 'KerekparModel');
    return function (req, res, next) {
        if(typeof req.body.id === 'undefined' ||
        typeof req.body.tipus === 'undefined' ||
        typeof req.body.szin === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.kerekpar === 'undefined') {
            res.locals.kerekpar = new KerekparModel();
        }

        res.locals.kerekpar.id = req.body.id;
        res.locals.kerekpar.tipus = req.body.tipus;
        res.locals.kerekpar.szin = req.body.szin;

        res.locals.kerekpar.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });
        next();
    };
};
