var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var interns = [
    {name: "brendan walsh"      ,location: "Ag Hall" },
    {name: "daniel greeson"     ,location: "Ag Hall" },
    {name: "jake danell"        ,location: "Ag Hall" },
    {name: "jacob kalt"         ,location: "Ag Hall" },
    {name: "christian zawisza"  ,location: "Ag Hall" },
    {name: "emily stehouwer"    ,location: "Ag Hall" },
    {name: "khalil aljahmi"     ,location: "Ag Hall" },
    {name: "teddy zegers"       ,location: "Clinical Center" },
    {name: "christopher sweeley",location: "Clinical Center" },
    {name: "elijah sheridan"    ,location: "Computer Center" },
    {name: "jackson mcgee"      ,location: "Computer Center" },
    {name: "usha reddy"         ,location: "Fee Hall" },
    {name: "joshua andrews"     ,location: "Fee Hall" },
    {name: "william loomis"     ,location: "Networking" },
    {name: "lucas hossi"        ,location: "Networking" },
    {name: "omar al-mohaged"    ,location: "Telecom" },
    {name: "sita belleville"    ,location: "Computer Lab" },
    {name: "greg margosian"     ,location: "Data Analytics" },
    {name: "marilyn lalrindiki" ,location: "Data Analytics" },
    {name: "jon spiwak"         ,location: "IPF" },
    {name: "caleb engle"        ,location: "Data Center" },
    {name: "shukuo tsunoda"     ,location: "Data Center" },
    {name: "devin wilcox"       ,location: "Service Catalog" },
    {name: "dan nakashima"      ,location: "Mobile Dev"},
    {name: "sean o'hare"        ,location: "Planning Team"},
];

var loc = "";

app.get("/", function(req, res){
    res.render("index");
});

app.get("/assignments", function(req, res){
    loc = null;
    res.render("assignments", {loc: loc});
});

app.post("/assignments", function(req,res){
    var name = req.body.name;
    loc = null;
    interns.forEach(function(worker){
        if(name.toLowerCase() === worker.name){
            loc = worker.location;
        }
    })
    res.render("assignments",{loc: loc});
})

app.get("/progress", function(req, res){
    res.render("progress");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Working...");
});