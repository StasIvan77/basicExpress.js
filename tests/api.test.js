const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/server'); // Adjust the path as needed

chai.use(chaiHttp);

describe('API Tests', () => {
   it('should get a list of users', (done) => {
      chai.request(app)
         .get('/users')
         .end((err, res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.be.an('array');
            done();
         });
   });

  it('should add a new user', (done) => {
    const newUser = {
      firstName: 'Test',
      lastName: 'User',
      email: 'testuser@example.com',
      password: 'testpassword',
      age: 25,
      address: {
        street: '456 Test St',
        city: 'TestCity',
        state: 'CA',
        zip: '54321',
        country: 'USA'
      },
      createdAt: '2023-06-01T12:34:56.789Z',
      tags: ['Test']
    };

    chai
      .request(server)
      .post('/users')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(newUser);
        done();
      });
  });

});
