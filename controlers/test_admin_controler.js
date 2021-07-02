const {QuestionModel, TestModel} = require('../models');
console.log("quesiton moflka", QuestionModel);

module.exports.adminDashboard = function(req,res){
    TestModel.find(function(err,tests){
        if(err){
            console.log(`error in finding tests ERROR : ${err}`);
            return res.redirect('/');
        }else{
            console.log(`found ${tests.length} tests`);
            context = {
                title:"admin dashbord",
                tests:tests,
            }
            return res.render('test_admin/test-admin-dashboard',context);
        
        }


    })
}

module.exports.testCreationForm = function(req,res){
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
            return res.render('test_admin/test-creation-form',context);
        }
    })
}

module.exports.createTest = function(req,res){
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
            return res.redirect('/admin/test-creation-form');
        }
        console.log(`test is ${test}`);
        return res.redirect('/admin');
            
        
    })
}




module.exports.questionForm = function(req,res){
    context = {
        title:"question form",
    }
    return res.render('test_admin/test-form',context);
}

module.exports.createQuestion = function(req,res){
    console.log("sent data  ", req.body);
    QuestionModel.create(req.body, function(err,question){
        if(err) {
            console.log(`error ${err}`);
            //  TODO: add messge while returning back as question is not created. 
            res.redirect('back');
        }
        console.log(`question created is ${question}`);
        return res.redirect('/admin');
    });
}