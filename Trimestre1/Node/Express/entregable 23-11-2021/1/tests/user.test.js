const sinon = require('sinon');
const { showUser } = require('../src/controllers/user')

describe('with Stub: getUserById', () => {
    it('should getUserById', (done) => {
        showUser().then((users) => {
            expect(users.length).to.equal(3);
            users.forEach(user => {
                expect(user).to.have.property('id');
                expect(user).to.have.property('name');
                expect(user).to.have.property('pass');
            });
            done();
        });
    });
});