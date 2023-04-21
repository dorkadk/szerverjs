
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

module.exports = function (app) {
    const objRepo = {};


    app.get('/kerekpar/edit/:kerekparid',
        getKerekparMW(objRepo),
        editKerekparMW(objRepo),
        renderMW(objRepo, 'editkerekpar'));
    app.use('/kerekpar/add/',
        newKerekparMW(objRepo),
        renderMW(objRepo, 'ujkerekpar'));

    app.get('/szemely/edit/:szemelyid',
        getSzemelyMW(objRepo),
        editSzemelyMW(objRepo)),
        renderMW(objRepo, 'edittulaj');

    app.get('/szemely/add/',
        newSzemelyMW(objRepo),
        getAllSzemelyMW(objRepo),
        renderMW(objRepo, 'ujszemely'));
    app.use('/szemely/list/:szemelyid',
        getSzemelyMW(objRepo),
        getAllKerekparMW(objRepo),
        renderMW(objRepo, 'index'));
    app.use('/szemely/',
        getAllSzemelyMW(objRepo),
        getSzemelyMW(objRepo),
        deleteSzemelyMW(objRepo),
        renderMW(objRepo, 'tulaj'));
    app.use('/',
        getAllKerekparMW(objRepo),
        deleteKerekparMW(objRepo),
        renderMW(objRepo, 'index'));

};