const mongoose = require("mongoose"); //import mongoose

const commentSchema = new mongoose.Schema({
    "name": {
        "type": "String"
    },
    "email": {
        "type": "String"
    },
    "movie_id": {
        "$oid": {
            "type": "ObjectId"
        }
    },
    "text": {
        "type": "String"
    },
    "date": {
        "$date": {
            "type": "Date"
        }
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment; 
