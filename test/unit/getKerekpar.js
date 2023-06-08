var expect = require('chai').expect;
var getKerekparMW = require('../../middleware/kerekpar/getKerekparMW');

describe('getKerekparMW middleware ', function () {

    it('should return kerekpar', function (done) {
        const mw = getKerekparMW({
            KerekparModel: {
                findOne:(p1, cb)=>{
                    expect(p1).eql({_id:'20'});
                    cb(null, 'mockkerekpar')
                }
            }
        });
        const resMock={
            locals:{}
        };
        mw({
            params:{
                kerekparid: '20'
            }
        },resMock,
            (err)=>{
                expect(err).eql(undefined);
                expect(resMock.locals).eql({kerekpar:'mockkerekpar'});
                done();});
    });
    it('should return error', function (done) {
        const mw = getKerekparMW({
            KerekparModel: {
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
                    kerekparid: '20'
                }
            },resMock,
            (err)=>{
                expect(err).eql('hiba');
                done();});
    });
    it('should return not kerekpar', function (done) {
        const mw = getKerekparMW({
            KerekparModel: {
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
                    kerekparid: '20'
                }
            },resMock,
            (err)=>{
                expect(err).eql(undefined);
                expect(resMock.locals).eql({});
                done();});
    });
});