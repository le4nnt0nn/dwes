const mongoose = require("mongoose"); //import mongoose

const gradeSchema = new mongoose.Schema({
    "student_id": {
        "type": "Number"
      },
      "scores": {
        "type": [
          "Mixed"
        ]
      },
      "class_id": {
        "type": "Number"
      }
});

const Grade = mongoose.model('Grade', gradeSchema);
module.exports = Grade; 
