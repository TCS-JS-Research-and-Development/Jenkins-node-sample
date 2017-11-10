/*jshint esversion: 6 */
var chai = require('chai');
var chaiHttp = require('chai-http');
//var server = require('../server/app');
var server = require('./server').default;
var should=require('should');

var should = chai.should();
chai.use(chaiHttp);




it('display hello', function(done) {
    chai.request('http://localhost:5000')
    .get('/')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
    });