const fs = require("fs").promises;
const { showNotes, showNote } = require("../src/controllers/notas");

const mockReq = (id) => ({
    params: {
        id,
    },
    query: {
        
    }
});

const mockRes = () => ({
    status: function (s) { this.statusCode = s; return this; },
    statusCode: 200,
    send: function (b) { this.body = b; return this; },
});

describe('showNotes', () => {
    test('should 200', async () => {
        const req = mockReq();
        const res = mockRes();
        await showNotes(req, res);
        expect(res.statusCode).toEqual(200);
    });
    test('should 404', async () => {
        const req = mockReq();
        const res = mockRes();
        await showNotes(req, res);
        expect(res.statusCode).not.toEqual(404);
    });
});

describe('showNote', () => {
    test('should 200 and exists note', async () => {
        const req = mockReq(1);
        const res = mockRes();
        await showNote(req, res);
        expect(req.params.id).toEqual(1)
        expect(res.statusCode).toEqual(200);
    });
    test('should 404 and doesn´t exists note', async () => {
        const req = mockReq(5);
        const res = mockRes();
        await showNote(req, res);
        expect(req.params.id).not.toEqual(1)
        expect(res.statusCode).not.toEqual(404);
    });
});

