const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config/DB')

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
 });
 var User = mongoose.model("User", nameSchema);


const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/nodemongo.html");
 });

 app.post("/addname", (req, res) => {
  var myData = new User(req.body);
  myData.save()
  .then(item => {
  res.send("item saved to database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
 });


app.get('/python', (req, res) => {
  
      var spawn = require("child_process").spawn;
      var process = spawn('python',['./public/helloworld.py']);
  
      process.stdout.on('data', function(data) {
          console.log(data.toString());
          res.write(data);
          res.end('end');
  
      });
  })

  app.get('/sample', function (req, res) {
    res.send('this is a sample!');
  });

const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});
