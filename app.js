const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",(req,res) =>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/",(req,res) =>{
    var name=req.body.name;
    var enroll=Number(req.body.enroll);
    var email=req.body.myemail;
    var branch=req.body.mybranch;
    var contactNo=Number(req.body.mynumber);
    var gender=req.body.mygender;
    var obj={
        Name : name,
        EnrollmentNumber :enroll,
        Email: email,
        Branch: branch,
        ContactNo: contactNo,
        Gender: gender
    }
    var str = JSON.stringify(obj);
    res.send(str);
})

app.listen(3000, () =>{
    console.log("App started on localhost:3000");
})