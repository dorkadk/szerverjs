/**
 *  Post: Ha az adott id-val letezik kerekpar, akkor a torles gomb megnyomasaval torli az adatokat.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(res.locals.kerekpar === 'undefined'){
            return next();
        }
        res.locals.kerekpar.remove((err)=>{
            if(err){
                return next(err);
            }
            return res.redirect('/');
        })

    };
};
