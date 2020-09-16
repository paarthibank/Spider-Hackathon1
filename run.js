var exp=require("express");
var bodyparser=require("body-parser");
var str = require('@supercharge/strings');

con=exp();
con.use(bodyparser.json());
con.use(bodyparser.urlencoded({extended: false}));
con.use(exp.static("public"));

con.get("/",function(req,res){
	var r=str.random(5);
	console.log(r);
	var send={
		text:r,
	}
	console.log(send);
	res.render("catcha.ejs",send);
	res.end();	
	
})

con.post("/url",function(req,res){

	var id=req.body.cap;
	var f=req.body.ver;
	console.log(id);
	console.log(f);
	if(id==f){
		res.send("captcha is correct");

	}
	else{
		res.send("captcha is wrong");

	}
	res.end();
	

})




con.listen(3000)