/**
 * Get: Lekerdezi az osszes Kerekpar adatait.
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.kerekparok =[
            {
                id: 'id1',
                tipus: 'MTB',
                szin: 'sárga',
                tulajdonos: 'Petra'
            },
            {
                id: 'id2',
                tipus: 'városi',
                szin: 'kék',
                tulajdonos: 'Béla'
            },
            {
                id: 'id3',
                tipus: 'egyéb',
                szin: 'fekete',
                tulajdonos: 'Nagyi'
            }
        ]
        next();
    };
};
