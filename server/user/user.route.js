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
    console.log(date0);
    console.log("array"+obj[1]);
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
            console.log(data);
          });
          // res.status(200);
          res.send("hello")

  });



 //
 // router.get('/feedback',function(req,res,next){
 //   console.log("********************************************************************");
 //   let badCount = 0;
 //   let goodCount = 0;
 //   let normalCount = 0;
 //   // res.send('success');
 //   emoticons.find(function(err,data)
 //        {
 //          if(err)
 //          {
 //            console.log(err);
 //          }
 //          else{
 //          console.log("-----",data);
 //          data.map((data1)=> {
 //            console.log("###",data1)
 //              if(data1.feedback === "Bad") {
 //                 badCount += 1;
 //              }
 //              if(data1.feedback === "Good") {
 //                 goodCount += 1;
 //              }
 //              if(data1.feedback === "Normal") {
 //                 normalCount += 1;
 //              }
 //
 //          })
 //
 //         }
 //           var object={
 //             // date:data1.date
 //             bad:badCount,
 //             good:goodCount,
 //             normal:normalCount
 //           }
 //           console.log("*********************************RESULT********************************",object);
 //           res.send(object);
 //
 //   });
 //   });
   var emotions_object;

  var object_to_return,obj_to_insert;



  router.post('/getFeedback', function(req, res) {
    console.log("inside getfeedback")
    console.log("request",req.body);

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
        //console.log("dataa",data);
        let emotions_object=data;

        //console.log("emoticons_object",data)
        data.map((data1)=> {
           console.log("###",data1)
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

          good:goodCount,
          normal:normalCount,
            bad:badCount,
        }

        // console.log(piechart);

        var line = [];
        var date_arr =[];
        start= req.body.fromDate;
           end=req.body.endDate;
           console.log( "start date :", start);
           console.log( "end date :",end);
           // for(obj in emotions_object) {
           //   if(date_arr.includes(emotions_object[obj].date == false)
           //   date_arr.push(emotions_object[obj].date);
           // }
           // console.log("date array", date_arr);
           let r = {};
           emotions_object.map(o => {
             if(o.date in r) {
               if(o.feedback === 'Good') {
                  r[o.date].good += 1;
               } else if(o.feedback === 'Bad') {
                  r[o.date].bad += 1;
               } else if(o.feedback === 'Normal') {
                  r[o.date].normal += 1;
               }
             } else {
               if(o.feedback === 'Good') {
                  r[o.date] = {
                    good: 1,
                    bad: 0,
                    normal: 0
                  };
               } else if(o.feedback === 'Bad') {
                  r[o.date] = {
                    good: 0,
                    bad: 1,
                    normal: 0
                  };
               } else if(o.feedback === 'Normal') {
                  r[o.date] = {
                    good: 0,
                    bad: 0,
                    normal: 1
                  };
               }
             }
           });
           console.log('r: ', r);
           let r_arr = [];
           for(key in r) { r_arr.push({ good: r[key].good,bad : r[key].bad,normal : r[key].normal, date: key}); }
           console.log('r_arr: ', r_arr);
            var result = {
              piechart:piechart,
              line_chart:r_arr
            }
            console.log(result);
            res.send(result);
      }
    })


  });


  return router;
}
