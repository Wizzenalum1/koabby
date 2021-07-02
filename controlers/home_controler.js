console.log("called for home controller");
module.exports.home = function(req,res){
    let context = {
        title:"home"
    };
    return res.render('home',context);
}