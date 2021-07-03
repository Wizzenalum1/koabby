const QuestionModel = require('./question_model');

const mongoose = require('mongoose');

const TestModel  = mongoose.model("TestModel",
    new mongoose.Schema({
        title:String,
        subject:String,
        numberOfQuestion:Number,
        maxMarks:Number,
        testDuration:Number, // default in minutes.
        questions:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"QuestionModel"
            }
        ]

    })
)
module.exports = TestModel;

