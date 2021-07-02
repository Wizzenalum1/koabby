const TestModel = require('./test_model');

const mongoose = require('mongoose');

const TestResponceModel  = mongoose.model("TestResponceModel",
    new mongoose.Schema({
        marks:Number,
        answer:[],
        test:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"TestModel"
        }
    })
);

module.exports = TestResponceModel;