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

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;



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
