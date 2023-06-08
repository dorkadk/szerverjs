/**
 * Post: Ha az adott id-val meg nem letezik kerekpar, akkor a letrehozas gomb megnyomasaval letrehozza az uj kerekpart.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const KerekparModel = requireOption(objectrepository, 'KerekparModel');
    const SzemelyModel = requireOption(objectrepository, 'SzemelyModel');
    return function (req, res, next) {
        if(typeof req.body.id === 'undefined' ||
        typeof req.body.tipus === 'undefined' ||
        typeof req.body.szin === 'undefined'
        ) {
            console.log("undefined");
            return next();
        }
        SzemelyModel.findOne({nev: req.body.szemely}, (err, szemely)=> {
            if ( err ||!szemely) {
                console.log("atiranyit");
                return res.redirect('/');

            }
            console.log("nem iranyit at");
        })
        if (typeof res.locals.kerekpar === 'undefined') {
            res.locals.kerekpar = new KerekparModel();
            console.log("letrehoz");
        }

        res.locals.kerekpar.id = req.body.id;
        res.locals.kerekpar.tipus = req.body.tipus;
        res.locals.kerekpar.szin = req.body.szin;
        //res.locals.kerekpar._tulajdonos = szemely;

        res.locals.kerekpar.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/');
        });

    };
};
