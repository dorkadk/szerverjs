/**
 * Post: Ha az adott id-val meg nem letezik szemely, akkor a letrehozas gomb megnyomasaval letrehozza az uj szemely.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const SzemelyModel = requireOption(objectrepository, 'SzemelyModel');
    return function (req, res, next) {
        if(typeof req.body.nev === 'undefined' ||
            typeof req.body.kor === 'undefined'
        ) {
            return next();

        }

        if (typeof res.locals.szemely === 'undefined') {
            res.locals.szemely = new SzemelyModel();

        }

        res.locals.szemely.nev = req.body.nev;
        res.locals.szemely.kor = req.body.kor;

        res.locals.szemely.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/szemely/');
        });

    };
};

