const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', () => {
  it('should return "Hello, World!"', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});

describe('GET /about', () => {
  it('should return "About Page -1"', (done) => {
    chai.request(app)
      .get('/about')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('About Page');
        done();
      });
  });
});
