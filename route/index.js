
const deleteKerekparMW = require('../middleware/kerekpar/deleteKerekparMW');
const editKerekparMW = require('../middleware/kerekpar/editKerekparMW');
const getKerekparMW = require('../middleware/kerekpar/getKerekparMW');
const getAllKerekparMW = require('../middleware/kerekpar/getAllKerekparMW');
const getListKerekparMW = require('../middleware/kerekpar/getListKerekparMW');
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


    app.use('/kerekpar/edit/:kerekparid',
        getKerekparMW(objRepo),
        getAllSzemelyMW(objRepo),
        editKerekparMW(objRepo),
        renderMW(objRepo, 'editkerekpar'));
    app.use('/kerekpar/add/',
        getAllSzemelyMW(objRepo),
        newKerekparMW(objRepo),
        renderMW(objRepo, 'ujkerekpar'));
    app.get('/kerekpar/del/:kerekparid',
        getKerekparMW(objRepo),
        deleteKerekparMW(objRepo));

    app.use('/szemely/edit/:szemelyid',
        getSzemelyMW(objRepo),
        editSzemelyMW(objRepo),
        renderMW(objRepo, 'editszemely'));

    app.use('/szemely/add/',
        newSzemelyMW(objRepo),
        renderMW(objRepo, 'ujszemely'));
    app.use('/szemely/list/:szemelyid',
        getSzemelyMW(objRepo),
        getListKerekparMW(objRepo),
        renderMW(objRepo, 'index'));
    app.get('/szemely/del/:szemelyid',
        getSzemelyMW(objRepo),
        deleteSzemelyMW(objRepo));
    app.use('/szemely/',

        getAllSzemelyMW(objRepo),
        renderMW(objRepo, 'szemely'));
    app.use('/',

        getAllKerekparMW(objRepo),
        getSzemelyMW(objRepo),
        renderMW(objRepo, 'index'));

};