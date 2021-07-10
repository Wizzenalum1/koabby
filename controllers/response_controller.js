/*  it will have controllers to following functionalities
        1. show test attemp form
        2. create response
        3. show test response
    ALL OF IT WITH AUTHORIZATION.
*/
require('../routes/response_route');
// delete routes above me
const {TestModel, ResponseModel} = require('../models')
module.exports.creationForm = function(req,res){
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
            return res.render('renponse/creation-form',context);      
        }
    })
}
module.exports.create = function(req,res){
    console.log(req.body);
    TestModel.findById(req.body.id).populate('questions').exec(function(err,test){
        if(err){
            console.log(`during searching test create test response ERROR is ${err}`);
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
            ResponseModel.create({title:test.title,answer:arr,test:req.body.id,attempted:attempted,correct:correct,duration:req.body.duration}, function(err, response){
                if(err){
                    console.log(`during creation of the response error occured ${err}`);
                    return;
                }
                console.log(`response is ** ${response} ** `);
                return res.redirect(`/response/show/?id=${response._id}`);
            })

        }

    })

}


module.exports.show = function(req,res){
    console.log(req.query.id);
    ResponseModel.findById(req.query.id,function(err,response){
        if(err){
            console.log(`error in finding response ERROR : ${err}`);
            return;
        }if(response){
            console.log(`response is found **${response.title}** found **${response.id}** which has test id **${response.test}**`);

            TestModel.findById(response.test).populate('questions').exec(function(err,test){
                if(err){
                    console.log(`error in finding test in test ERROR : ${err}`);
                    return;
                }if(test){
                    console.log(`found test is **${test.title}** and no. of questions are **${test.questions.length}**`);
                    context = {
                        title:"test time",
                        test:test,
                        response:response,
                    }
                    return res.render('renponse/response',context);      
                }
                // console.log("test is empty");//error
                // return res.redirect("back");//error
            })    
        
        }
        // console.log("response is empty");//error
        // return res.redirect("back");//error
    })
}
