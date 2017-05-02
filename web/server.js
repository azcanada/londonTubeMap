const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Set EJS viewer
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//tell node where to go if it's lost something
var route = app.use(express.static(__dirname + '/public'));

//Add mongo DB
const monk = require('monk');
const url = 'localhost:27017/project';
const db = monk(url);
//connect to db
var _timeQuery;

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('nodes');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
};

//get list of times to pass to server for dropdown box
var listOfTimes;
var listOfTimesArray = [];
var getListOfTimes = function () {
  db.get('edges').findOne({}, {fields : {_id:0, passengerInformation:1}}).then((docs) => {
    var listOfTimes = docs["passengerInformation"];
    console.log(JSON.stringify(listOfTimes));
    for (var amPm in listOfTimes) {
      if (listOfTimes.hasOwnProperty(amPm)) {
        listOfTimesArray.push(amPm);
      }
    }
  }).catch((err) => {
    console.log('err', err);
  })
};
getListOfTimes();
//console.log(listOfTimes['passengerInformation']);

app.get("/", function(req, res) {
  res.render('index', {
    timesArray: listOfTimesArray
  });

});

app.get("/edges/:time", function(req,res) {
  var time = "passengerInformation." + req.params.time;
  console.log(`${time}`);
  fieldsQuery = {};
  fieldsQuery['_id'] = 1;
  fieldsQuery['from'] = 1;
  fieldsQuery['to'] = 1;
  fieldsQuery['line'] = 1;
  fieldsQuery[time] = 1;
  console.log(fieldsQuery);
  console.log(_timeQuery);
  //db.get('edges').find({}, {fields : {_id:0, from:1, to:1, line:1, "passengerInformation.Early":1}}).then((docs) => {
  db.get('edges').find({}, {fields : fieldsQuery}).then((docs) => {
    return res.status(200).send(docs);
  }).catch((err) => {
    console.log('err', err);
  });
});

app.get("/nodes", function(req,res) {
  db.get('nodes').find({}, {fields : {_id:0}}).then((docs) => {
    return res.status(200).send(docs);
  });
});



app.listen(3000, function() {
  console.log("server started and listening on port 3000");
});
