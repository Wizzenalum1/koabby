const TestModel = require('./test_model');

const mongoose = require('mongoose');

const TestResponceModel  = mongoose.model("TestResponceModel",
    new mongoose.Schema({
        title:String,
        answer:[],
        test:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"TestModel"
        },
        attempted:Number,
        correct:Number,
        duration:Number,// in minutes.
    })
);

module.exports = TestResponceModel;