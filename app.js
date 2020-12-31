var   bodyParser = require("body-parser"),
      express    = require('express'),
      app        = express(),
      fs         = require('fs'),
      methodOverride = require('method-override'),
      morgan     = require("morgan");
const port = 3000;
/////////////CONFIGURATION////////
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded(
    { extended: true }
));
app.use(morgan("dev"));
app.use(methodOverride('_method'));

var jsonFile = fs.readFileSync("data.json");
var data = JSON.parse(jsonFile);
////////////////////////////////////////////////////////////
app.get("/", home);
app.post("/start", start);
app.get("/data", datas);


//////////////Functions////////////
function home(req, res){
  res.render("index", {data:data})
}

function start(req, res){

  var n = Math.floor((Math.random()) * (data[0].length ));
  data.n = n +1;
  // if(n>0){
  //   data.n = n;
  // } else {
  //   data.n = 1
  // };
  console.log(n)
  saving();
  res.redirect("back");
}

function saving(){
  var str = JSON.stringify(data, null, 2);
  fs.writeFile("data.json", str, function (error, info){
    if (error){
      console.log(error + "error3");
    } else {
      // console.log("save");
    }
  });
};

function datas(req, res){
  res.json(data);
};

/////////// LISTENING PORT///////////
app.listen(port, () => {
  // console.log(`Example app listening at http://localhost:${port}`)
});
