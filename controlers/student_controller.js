const {QuestionModel,TestModel,TestResponceModel} = require('../models')
module.exports.dashboard = function(req,res){
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
        return res.render('student/student-dashboard',context);
    })
    
}


module.exports.test = function(req,res){
    console.log(`query is ** ${req.query.id} **`);
    TestModel.findById(req.query.id).populate('questions').exec(function(err,test){
        if(err){
            console.log(`error in finding test in test ERROR : ${err}`);
            return res.redirect('/');
        }else{
            console.log(`found test is **${test.title}** and no. of questions are **${test.questions.length}**`);
            context = {
                title:"test time",
                test:test,
                
            }
            return res.render('student/test-form',context);      
        }
    })
}
module.exports.createTestResponce = function(req,res){
    console.log(req.body);
    TestModel.findById(req.body.id).populate('questions').exec(function(err,test){
        if(err){
            console.log(`during searching test create test responce ERROR is ${err}`);
            return;
        }
        if(test){
            let v = 0, arr = [], correct = 0, attempted = 0;
            for(let i = 0; i<test.questions.length;i++){
                arr.push(req.body[i]);
                if(req.body[i]!=0){
                    attempted++;
                    if(req.body[i]==(test.questions[i].answer.charCodeAt()-96)){
                        correct++;
                    }
                }
            }
            TestResponceModel.create({title:test.title,answer:arr,test:req.body.id,attempted:attempted,correct:correct,duration:req.body.duration}, function(err, responce){
                if(err){
                    console.log(`during creation of the responce error occured ${err}`);
                    return;
                }
                console.log(`responce is ** ${responce} ** `);
                return res.redirect(`/student/result/?id=${responce._id}`);
            })
            // return res.redirect("back");// errors

        }
        // console.log(`test is empty`);//erroers
        // return res.redirect("back");//errore

    })

}


module.exports.testResult = function(req,res){
    console.log(req.query.id);
    TestResponceModel.findById(req.query.id,function(err,responce){
        if(err){
            console.log(`error in finding responce ERROR : ${err}`);
            return;
        }if(responce){
            console.log(`found responce is found **${responce.title}** which has test id **${responce.test}**`);

            TestModel.findById(responce.test).populate('questions').exec(function(err,test){
                if(err){
                    console.log(`error in finding test in test ERROR : ${err}`);
                    return;
                }if(test){
                    console.log(`found test is **${test.title}** and no. of questions are **${test.questions.length}**`);
                    context = {
                        title:"test time",
                        test:test,
                        responce:responce,
                    }
                    return res.render('student/result',context);      
                }
                // console.log("test is empty");//error
                // return res.redirect("back");//error
            })    
        
        }
        // console.log("responce is empty");//error
        // return res.redirect("back");//error
    })
}
