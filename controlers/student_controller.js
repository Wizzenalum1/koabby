const {QuestionModel} = require('../models')
module.exports.dashboard = function(req,res){
    context = {
        title:"student test"

    }
    return res.render('student/student-dashboard',context);
}


module.exports.test = function(req,res){
    QuestionModel.find(function(err,questions){
        if(err){
            console.log(`error in finding questions ERROR : ${err}`);
            return res.redirect('/');
        }else{
            console.log(`found ${questions.length} questions`);
            context = {
                title:"admin dashbord",
                questions:questions,
            }
            return res.render('student/test-form',context);
        
        }


    })
}
// crating the test results.

module.exports.testResult = function(req,res){
    QuestionModel.find(function(err,questions){
        if(err){
            console.log(`error in finding questions ERROR : ${err}`);
            return res.redirect('/');
        }else{
            console.log(`found ${questions.length} questions`);
            context = {
                title:"admin dashbord",
                questions:questions,
            }
            return res.render('student/test-form',context);
        }
        

    })
}
