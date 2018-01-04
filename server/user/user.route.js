var express = require('express');
var router = express.Router();
var emoticons=require('./userdetails.model');
var count=0;
module.exports = function(passport) {

  router.post('/login', function(req, res, next) {
    console.log("inside login route");
      passport.authenticate('login', function(err, user, info) {
        if(err) {console.log(err);}
           if (user) {
            return res.status(200).json({
              message: "success"
            });
          } else {
            return res.status(500).json({
              message: 'Invalid User'
            });
          }
      })(req, res, next);
  });



  router.post('/postfeedback', function(req, res, next) {
    console.log("inside feedbackroute route");
    var obj = req.body.feedback.split("-");
    var date1= new Date();
   var date2= new Date(date1);
    var date0=date2.getDate()+'-'+date2.getMonth()+1+'-'+date2.getFullYear();
    //console.log(date0);
    //console.log("array"+obj[1]);
  var data = {
    feedback : obj[0],
    date: date0,
    adid: obj[1],

  }
  console.log(data);
   var db=new emoticons(data);
         db.save().then((doc)=>{console.console.log("successfully inserted");
          });
          emoticons.find(function(data)
          {
            //console.log(data);
          });
          // res.status(200);
          res.send("hello")

  });




 router.get('/feedback',function(req,res,next){
   console.log("********************************************************************");
   let badCount = 0;
   let goodCount = 0;
   let normalCount = 0;
   // res.send('success');
   emoticons.find(function(err,data)
        {
          if(err)
          {
            console.log(err);
          }
          else{
          //console.log("-----",data);
          data.map((data1)=> {
            //console.log("###",data1)
              if(data1.feedback === "Bad") {
                 badCount += 1;
              }
              if(data1.feedback === "Good") {
                 goodCount += 1;
              }
              if(data1.feedback === "Normal") {
                 normalCount += 1;
              }



          })

         }
           var object={
             // date:data1.date
             bad:badCount,
             good:goodCount,
             normal:normalCount
           }
           console.log("*********************************RESULT********************************",object);
           res.send(object);

   });
   });
   var emotions_object;

  var object_to_return,obj_to_insert;



  router.post('/getFeedback', function(req, res) {
    console.log("inside getfeedback")
    //console.log("request",req.body);

    //console.log("requestjhg",req);

    let badCount = 0;
    let goodCount = 0;
    let normalCount = 0;
    let piechart;

    emoticons.find({

    //  adid:"NA353557"
  date: {"$gte": req.body.fromDate, "$lte": req.body.endDate}

    },function(err,data) {
      if(err) {
        console.log(err)
      }else {
        //console.log("dataaaaaaaaaaaaaaaaaaaaaaaa",data);
        let emotions_object=data;


        data.map((data1)=> {
          // console.log("###",data1)
            if(data1.feedback === "Bad") {
               badCount += 1;
            }
            if(data1.feedback === "Good") {
               goodCount += 1;
            }
            if(data1.feedback === "Normal") {
               normalCount += 1;
            }

        })

      var  piechart = {
          bad:badCount,
          good:goodCount,
          normal:normalCount
        }

        // console.log(piechart);

var line = [];

        start= new Date("3-01-2018")
           end=new Date("4-01-2018")
          while( start<=end ){
            // console.log("while ")
             var bad=0, normal=0, good=0;

                for(obj in emotions_object){
                  // console.log("for")
                  if(emotions_object[obj].date==start)

                  {

                    if(emotions_object[obj].feedback=="Bad")

                    bad++;
                    else if(emotions_object[obj].feedback=="Good")

                    good++;

                    else

                    normal++;

                    }
                }
                // console.log(bad)
                // console.log(good)
                // console.log(normal)

                var line_chart={date:start,bad:bad,normal:normal,good:good}

                line.push(line_chart)
                 // var newDate = new Date(start) + 1;
                var newDate = start.setDate(start.getDate() + 1)
                  // start = newDate+"";
                  start = new Date(newDate)
            }
            var result = {
              piechart:piechart,
              line_chart:line
            }
            console.log(result);
            res.send(result);

      }
    })







  });


  return router;
}
