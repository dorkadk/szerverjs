var expect = require('chai').expect;
var getSzemelyMW = require('../../middleware/szemely/getSzemelyMW');

describe('getSzemelyMW middleware ', function () {

    it('should return szemely', function (done) {
        const mw = getSzemelyMW({
            SzemelyModel: {
                findOne:(p1, cb)=>{
                    expect(p1).eql({_id:'20'});
                    cb(null, 'mockszemely')
                }
            }
        });
        const resMock={
            locals:{}
        };
        mw({
                params:{
                    szemelyid: '20'
                }
            },resMock,
            (err)=>{
                expect(err).eql(undefined);
                expect(resMock.locals).eql({szemely:'mockszemely'});
                done();});
    });
    it('should return error', function (done) {
        const mw = getSzemelyMW({
            SzemelyModel: {
                findOne:(p1, cb)=>{
                    expect(p1).eql({_id:'20'});
                    cb('hiba', null)
                }
            }
        });
        const resMock={
            locals:{}
        };
        mw({
                params:{
                    szemelyid: '20'
                }
            },resMock,
            (err)=>{
                expect(err).eql('hiba');
                done();});
    });
    it('should return not szemely', function (done) {
        const mw = getSzemelyMW({
            SzemelyModel: {
                findOne:(p1, cb)=>{
                    expect(p1).eql({_id:'20'});
                    cb(undefined, null)
                }
            }
        });
        const resMock={
            locals:{}
        };
        mw({
                params:{
                    szemelyid: '20'
                }
            },resMock,
            (err)=>{
                expect(err).eql(undefined);
                expect(resMock.locals).eql({});
                done();});
    });
});