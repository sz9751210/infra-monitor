const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const YAML = require('yaml');
const doc = new YAML.Document();
const bot_token = 'bot_token';
const chat_id = 'chat_id';
// New app using express module
const app = express();
app.use(express.json());

app.post("/post", function (req, res) {
  var post_body = req.body;
  // console.log(post_body);
//   str_body = JSON.stringify(post_body);
  // doc.contents = req.body;
  // doc.contents = req.body.evalMatches;
  var title       = req.body.title;
  var evalMatches = req.body.evalMatches;
  // var state       = req.body.state;
  // console.log(typeof state);
  var messages    = title + '\n';
  const objectArray = Object.entries(evalMatches);


  for (var i = 0; i < evalMatches.length; i++){
    messages += evalMatches[i]['metric']+' : '+ evalMatches[i]['value'].toFixed(2)+ '\n';
  }
  // objectArray.forEach(([key, value]) => {
  //   // console.log(key);
  //   console.log(value[]);
  // });
  // var myArray  = myEval.map(item=>item.el);
  // for each( var obj in arrOfObjs ) {
  //     arrOfVals.push( obj.el );
  // }

  // for each( var val in arrOfVals ) {
  //     console.log( val ); // 123, 234, 345
  // }
  // var count = Object.keys(req.body).length;
  // str_body = doc.toString();
  // res.end('get your response');
  // res.end(console.log(Object.values(messages)));

  request.post(
    {
      url:
        "https://api.telegram.org/bot" + bot_token +"/sendMessage?chat_id=" + chat_id +"&text=" +
        messages,
      // form:{
      //     username:'hahaha',
      //     password:'wowowowow'
      // },
      encoding: "utf8",
    },
    function (error, response, body) {
      if (response.statusCode == 200) {
        console.log(body);
      } else {
        console.log(response.statusCode);
      }
    }
  );
});

app.listen(3001, function () {
  console.log("server is running on port 3001");
});
