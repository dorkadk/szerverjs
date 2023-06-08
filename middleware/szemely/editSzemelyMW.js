/**
 *  Post: Ha az adott id-val letezik szemely, akkor a mentes gomb megnyomasaval modositja az adatokat.
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
            console.log(res.locals.szemely.nev);
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
