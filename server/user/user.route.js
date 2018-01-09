var express = require('express');
var router = express.Router();
var emoticons=require('./feedback.model');
var count=0;
var emotions_object;
var object_to_return,obj_to_insert;
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

router.get('/adid',function(req,res,next) {
  console.log("get adid");
  emoticons.find(function(err,data)
  {
    if(err) {
      throw err;
    } else {
    //console.log(data);
    var adid = [{adid : "All"}];
    let r = {};
    data.map(o => {
      if(o.adid in r) {
        //console.log("r...",o.date);
      } else {
        //console.log("else...",o.date);
        r[o.date] = {
          adid : o.adid
        }
      }
    });
    for(key in r) { adid.push({ adid: r[key].adid}); }
    var result = {
      adid : adid
    }
    res.send(result);
  }
  });

})
router.get('/group_analysis',function(req,res,next) {
  console.log("in grup analysis", req.query.adid);
  if(req.query.adid == "All" || req.query.adid == 1) {
    console.log("if")
    emoticons.find(function(err,data)
    { if(err)
      throw err;
    else {
      console.log(data);
      let r = {};
      data.map(o => {
        if(o.date in r) {
          //console.log("r...",o.date);
          r[o.date].count +=1;
          r[o.date].rating += o.rating;
        } else {
          //console.log("else...",o.date);
          r[o.date] = {
            count : 1,
            rating : o.rating
          }
        }
      });
      console.log('r: ', r);
      let r_arr = [];
      for(key in r) { r_arr.push({ rating: r[key].rating,count : r[key].count, date: key}); }
      console.log('r_arr: ', r_arr);
       var result = {
         line_chart:r_arr
       }
       //console.log(result);
       res.send(result);
    }
    });
  } else {
    console.log("else")
    emoticons.find({date: {"$gte": req.query.fromDate, "$lte": req.query.endDate}, adid : req.query.adid},function(err,data)
    { if(err)
      throw err;
    else {
      console.log(data);
      let r = {};
      data.map(o => {
        if(o.date in r) {
          //console.log("r...",o.date);
          r[o.date].count +=1;
          r[o.date].rating += o.rating;
        } else {
          //console.log("else...",o.date);
          r[o.date] = {
            count : 1,
            rating : o.rating
          }
        }
      });
      console.log('r: ', r);
      let r_arr = [];
      for(key in r) { r_arr.push({ rating: r[key].rating,count : r[key].count, date: key}); }
      console.log('r_arr: ', r_arr);
       var result = {
         line_chart:r_arr
       }
       //console.log(result);
       res.send(result);
    }
    });

  }
})
  router.post('/postfeedback', function(req, res, next) {
    console.log("inside feedbackroute route",req.body);
    var obj = req.body.feedback.split("-");
    console.log("comments",obj[2])
    var date1= new Date();
    var data = {};
    var adid;
   var date2= new Date(date1);
    var date0=date2.getDate()+'-'+date2.getMonth()+1+'-'+date2.getFullYear();
    console.log(date0);
    console.log("array"+obj[1]);
      if(obj[0] == "High_Happy") {
         data = {
          feedback : obj[0],
          date: date0,
          adid: obj[1],
          rating : 15,
          comments : obj[2]
        }
      }else if(obj[0] == "High_Sad") {
        console.log("high_sad")
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 10,
            comments : obj[2]
        }
      }else if(obj[0] == "High_Angry") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 7,
            comments : obj[2]
        }
      }else if(obj[0] == "High_Afraid") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 6,
            comments : obj[2]
        }
      }else if(obj[0] == "High_Ashamed") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 1,
            comments : obj[2]
        }
      }else if(obj[0] == "Medium_Happy") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 14,
            comments : obj[2]
        }
      }else if(obj[0] == "Medium_Sad") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 11,
            comments : obj[2]
        }
      }else if(obj[0] == "Medium_Angry") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 8,
            comments : obj[2]
        }
      }else if(obj[0] == "Medium_Afraid") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 5,
            comments : obj[2]
        }
      }else if(obj[0] == "Medium_Ashamed") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 2,
            comments : obj[2]
        }
      }else if(obj[0] == "Low_Happy") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 13,
            comments : obj[2]
        }
      }else if(obj[0] == "Low_Sad") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 12,
            comments : obj[2]
        }
      }else if(obj[0] == "Low_Angry") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 9,
            comments : obj[2]
        }
      }else if(obj[0] == "Low_Afraid") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 4,
            comments : obj[2]
        }
      }else if(obj[0] == "Low_Ashamed") {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 3,
            comments : obj[2]
        }
      }else {
           data = {
            feedback : obj[0],
            date: date0,
            adid: obj[1],
            rating : 0,
            comments : obj[2]
          }
        }
  console.log( data);
   var db=new emoticons(data);
  //  emoticons.find({date : data.date , adid : data.adid},function(err,res) {
      //console.log("response",res[0].adid,res[0].date);

      //if(res.length > 0){
        console.log("data rating, type",data.adid, typeof data.rating);
          emoticons.update({ adid: data.adid, date: data.date },
           {'$set': {feedback: data.feedback, rating: data.rating, comments: data.comments}},
           { upsert: true },
           function(err, res) {
             console.log('err: ', err);
             console.log('res: ', res);
           }
         )
        // emoticons.update({ adid: "NA353557",date : "9-01-2018" },
        //   {'$set':{feedback : "Low_A",date : data.date,adid: data.adid,rating : data.rating,comments : data.comments}},
        //   { upsert: true })
      //} else {
       // db.save().then((doc)=>{console.console.log("successfully inserted");
       //  });
      //}
    //})
          res.status(200);
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



  router.post('/getFeedback', function(req, res) {
    console.log("inside getfeedback")
    console.log("request",req.body);
    //console.log(req.body.adid.toUpperCase())
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
        console.log("dataa",data);
        let emotions_object=data;

        //console.log("emoticons_object",data)
        data.map((data1)=> {
           console.log("###",data1)

        })
        var line = [];
        var date_arr =[];
        start= req.body.fromDate;
           end=req.body.endDate;
           // console.log( "start date :", start);
           // console.log( "end date :",end);
           let r = {};
           emotions_object.map(o => {
             if(o.date in r) {
               //console.log("r...",o.date);
               r[o.date].count +=1;
               r[o.date].rating += o.rating;
             } else {
               //console.log("else...",o.date);
               r[o.date] = {
                 count : 1,
                 rating : o.rating
               }
             }
           });
           console.log('r: ', r);
           let r_arr = [];
           for(key in r) { r_arr.push({ rating: r[key].rating,count : r[key].count, date: key}); }
           console.log('r_arr: ', r_arr);
            var result = {
              line_chart:r_arr
            }
            //console.log(result);
            res.send(result);
      }
    })


  });


  return router;
}
