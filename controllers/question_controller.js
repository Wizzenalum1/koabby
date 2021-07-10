/*  it will have controllers for following functionalities
        1. show question form
        2. create question 
        3. update question
        4. delete question
    ALL OF IT WITH AUTHORIZATION.
*/
require('../routes/question_route');
// delete routes above me

const {QuestionModel, TestModel} = require('../models');

module.exports.creationForm = function(req,res){
    context = {
        title:"question form",
    }
    return res.render('question/question-form',context);
}

module.exports.create = function(req,res){
    // console.log(req.file);
    console.log("sent data  ", req.body);
    // res.redirect('back');

    QuestionModel.create(req.body, function(err,question){
        if(err) {
            console.log(`error ${err}`);
            //  TODO: add messge while returning back as question is not created. 
            return res.redirect('back');
        }
        console.log(`question created is ${question}`);
        return res.redirect('back');
    });
}


