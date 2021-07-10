/*  it will have controllers to following functionalities
        1. show test creation form
        2. create test 
        3. update test
        4. delete test
    ALL OF IT WITH AUTHORIZATION.

*/
require('../routes/test_route')
// delete all routes above me
const {QuestionModel,TestModel,TestResponceModel} = require('../models')

module.exports.creationForm = function(req,res){
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
            return res.render('test/test-form',context);
        }
    })
}

module.exports.create = function(req,res){
    // let testModel = {
    //                 subject:req.body.subject,
    //                 numberOfQuestion:req.body.numberOfQuestion,
    //                 maxMarks:req.body.maxMarks,
    //                 testDuration:req.body.testDuration,
    //                     };
    // let arr = Object.values(req.body);
    // console.log(arr);
    TestModel.create(req.body,function(err,test){
        if(err){
            console.log(`error in creating test ERROR : ${err}`);
            return res.redirect('/test/creation-form');
        }
        console.log(`test is ${test}`);
        return res.redirect('/teacher');    
    })
}