/*  it will have controllers  to following functionalities
        1. show defferent type of users to thier respective dash bords form.
        2. profiles of user.
        3. crud to profile 
    ALL OF IT WITH AUTHORIZATION.
*/

const {QuestionModel,TestModel,TestResponceModel} = require('../models')
module.exports.student = function(req,res){
    TestModel.find(function(err,tests){
        if(err){
            console.log(`during searching the test in student ${err}`);
            return;
        }
        console.log(`total number of tests are ** ${tests.length} **`);
        context = {
            title:"student test",
            tests:tests,    
        }
        return res.render('dashboard/student-dashboard.ejs',context);
    })  
}

module.exports.teacher = function(req,res){
    TestModel.find(function(err,tests){
        if(err){
            console.log(`error in finding tests ERROR : ${err}`);
            return res.redirect('/');
        }else{
            console.log(`found ${tests.length} tests`);
            context = {
                title:"teacher dashbord",
                tests:tests,
            }
            return res.render('dashboard/teacher-dashboard',context);
        }
    })
}