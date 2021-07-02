const mongoose = require('mongoose');

const QuestionModelSchema = new mongoose.Schema({

  problemStatement :String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  answer :String,
});
const QuestionModel = mongoose.model('QuestionModel',QuestionModelSchema);
module.exports=QuestionModel;
