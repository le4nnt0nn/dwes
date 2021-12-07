const sinon = require('sinon');
const { showNote } = require('../src/controllers/notas');


const mockReq = (id) => ({
    params: {
        id,
    }
});

const mockRes = () => ({
    status: function(s) { this.statusCode=s; return this; },
    statusCode: 200,
    send: function(b) { this.body=b; return this;},
});

describe('getNoteById 200 Ok', () => {
    it('should getNoteById', (done) => {
        const noteId = '1';
        const callback = sinon.stub();
        const res = showNote(mockReq(noteId), mockRes());
        console.log(JSON.stringify(res, null, 2));
        //expect(res.statusCode).toBe(200);
        expect(res.statusCode).toEqual(200)
        //expect(res.body.id).toBe(noteId);
        done();
    });
});

describe('getNoteById Error 404', () => {
    it('should getNoteById', (done) => {
        const noteId = 123;
        const callback = sinon.stub();
        const res = showNote(mockReq(noteId), mockRes());
        //expect(res.statusCode).toBe(404);
        //expect(res.body.message).toBe('Nota no encontrada');
        done();
    });
});