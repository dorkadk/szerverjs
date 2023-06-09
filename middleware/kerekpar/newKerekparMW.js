/**
 * Post: Ha az adott id-val meg nem letezik kerekpar, akkor a letrehozas gomb megnyomasaval letrehozza az uj kerekpart.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const KerekparModel = requireOption(objectrepository, 'KerekparModel');
    const SzemelyModel = requireOption(objectrepository, 'SzemelyModel');
    return function (req, res, next) {
        if(
        typeof req.body.tipus === 'undefined' ||
        typeof req.body.szin === 'undefined'
        ) {
            return next();
        }
        SzemelyModel.findOne({_id: req.body.tulaj}, (err, tulaj)=> {
            if ( err ||!tulaj) {

                return res.redirect('/');

            }

        })
        if (typeof res.locals.kerekpar === 'undefined') {
            res.locals.kerekpar = new KerekparModel();

        }

        res.locals.kerekpar.tipus = req.body.tipus;
        res.locals.kerekpar.szin = req.body.szin;
        res.locals.kerekpar._tulajdonos = req.body.tulaj;

        res.locals.kerekpar.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });

    };
};
