
const deleteKerekparMW = require('../middleware/kerekpar/deleteKerekparMW');
const editKerekparMW = require('../middleware/kerekpar/editKerekparMW');
const getKerekparMW = require('../middleware/kerekpar/getKerekparMW');
const getAllKerekparMW = require('../middleware/kerekpar/getAllKerekparMW');
const newKerekparMW = require('../middleware/kerekpar/newKerekparMW');
const deleteSzemelyMW = require('../middleware/szemely/deleteSzemelyMW');
const editSzemelyMW = require('../middleware/szemely/editSzemelyMW');
const getSzemelyMW = require('../middleware/szemely/getSzemelyMW');
const getAllSzemelyMW = require('../middleware/szemely/getAllSzemelyMW');
const newSzemelyMW = require('../middleware/szemely/newSzemelyMW');
const renderMW = require('../middleware/renderMW');

const KerekparModel = require('../models/kerekpar');
const SzemelyModel = require('../models/szemely');
module.exports = function (app) {
    const objRepo = {
        KerekparModel: KerekparModel,
        SzemelyModel: SzemelyModel
    };


    app.get('/kerekpar/edit/:kerekparid',
        getKerekparMW(objRepo),
        editKerekparMW(objRepo),
        renderMW(objRepo, 'editkerekpar'));
    app.use('/kerekpar/add/',
        newKerekparMW(objRepo),
        renderMW(objRepo, 'ujkerekpar'));
    app.get('/kerekpar/del/:kerekparid',
        getKerekparMW(objRepo),
        deleteKerekparMW(objRepo));

    app.get('/szemely/edit/:szemelyid',
        editSzemelyMW(objRepo),
        getSzemelyMW(objRepo),
        renderMW(objRepo, 'editszemely'));

    app.get('/szemely/add/',
        newSzemelyMW(objRepo),
        renderMW(objRepo, 'ujszemely'));
    app.use('/szemely/list/:szemelyid',
        getSzemelyMW(objRepo),
        getAllKerekparMW(objRepo),
        renderMW(objRepo, 'index'));
    app.get('/szemely/del/:szemelyid',
        getSzemelyMW(objRepo),
        deleteSzemelyMW(objRepo));
    app.use('/szemely/',
        getAllSzemelyMW(objRepo),
        renderMW(objRepo, 'szemely'));
    app.use('/',
        getAllKerekparMW(objRepo),
        renderMW(objRepo, 'index'));

};