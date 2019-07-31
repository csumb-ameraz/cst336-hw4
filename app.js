const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

const faker = require("faker");

//root route
app.get("/", function(req, res) {
  //res.send("it works!");
  res.render("index.html");
});

app.get("/references", function(req, res){
  res.render("references.html");
});

app.get("/solutions", function(req, res){
  var company = faker.company;
  res.render("solutions.html", {"companyName":company.companyName(), "companyDescription": company.catchPhrase(), "companyImg": faker.image.business(), "companyUrl" : faker.internet.url()});
});

app.get("/tutorials", function(req, res){
  res.render("tutorials.html");
});

//server listener
// app.listen("8081", "0.0.0.0", function(){
//   console.log("Express Server is Running...");
// });

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Running Express Server...");
});
