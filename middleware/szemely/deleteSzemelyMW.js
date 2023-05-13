/**
 *  Post: Ha az adott id-val letezik szemely, akkor a torles gomb megnyomasaval torli az adatokat.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(res.locals.szemely === 'undefined'){
            return next();
        }
        res.locals.szemely.remove((err)=>{
            if(err){
                return next(err);
            }
            return res.redirect('/szemely/');
        })
        next();
    };
};
