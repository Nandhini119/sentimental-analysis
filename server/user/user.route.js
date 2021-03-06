var express = require('express');
var router = express.Router();
var emoticons=require('./feedback.model');
var count=0;
var emotions_object;
var object_to_return,obj_to_insert;
module.exports = function(passport) {

  router.post('/login', function(req, res, next) {
    console.log("req",req.body);
        passport.authenticate('login', function(err, user, info) {
            if (err) return res.status(500).json({
                message: 'Server Error'
            });
            else if (user) {
                return res.status(200).json({
                    user: user
                });
            } else return res.status(500).json({
                message: 'Invalid User'
            });
        })(req, res, next);
    });
    router.get('/logout', function(request, response) {
            request.session.destroy(function(req, res, err) {
                if (err) {
                    console.log("status of error in logout" + err);
                    response.status(500).json({
                        status: 'error in logout'
                    });
                } else {
                    response.status(200).json({
                        status: 'success'
                    });
                }
            });
        });
router.get('/adid',function(req,res,next) {
  let r = ["All"];
  emoticons.find({}, 'adid', function (err, docs) {
if(err)
console.log(err);
else {
  docs.map((data,index)=> {
    //console.log(data.adid);
    if( r.includes(data.adid)){
    } else {
      r.push(data.adid);
    }
  })
  var result = {
      adid : r
    }
    res.send(result);
}
});

})

router.get('/table_analysis',function(req,res,next) {
  console.log("In Table analysis",req.query);
  if(req.query.adid == "All" || req.query.adid == 1) {
    emoticons.find({date: {"$gte": req.query.fromDate, "$lte": req.query.endDate}},function(err,data)
    { if(err)
      {
      throw err;
    }
    else {
      console.log("same dates data",data);
      let r = {};
      data.map(o => {
        if(o.feedback in r) {
          //console.log("r...",o.date);
          r[o.feedback].count +=1;

        } else {
          //console.log("else...",o.date);
          r[o.feedback] = {
            count : 1,
          }
        }
      });
      console.log('r: ', r);
      let r_arr = [];
      for(key in r) { r_arr.push({count : r[key].count, emotion: key}); }
      console.log('r_arr: ', r_arr);
       var result = {
         table :r_arr
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
        if(o.feedback in r) {
          //console.log("r...",o.date);
          r[o.feedback].count +=1;

        } else {
          //console.log("else...",o.date);
          r[o.feedback] = {
            count : 1,
          }
        }
      });
      console.log('r: ', r);
      let r_arr = [];
      for(key in r) { r_arr.push({ count : r[key].count, emotion: key}); }
      console.log('r_arr: ', r_arr);
       var result = {
         table:r_arr
       }
       //console.log(result);
       res.send(result);
    }
    });


  }
})

router.get('/group_analysis',function(req,res,next) {
  console.log("in grup analysis", req.query.adid,req.query.fromDate, req.query.endDate);
  if(req.query.adid == "All" || req.query.adid == 1) {
    console.log("if")
    emoticons.find({date: {"$gte": req.query.fromDate, "$lte": req.query.endDate}},function(err,data)
    { if(err) {
      console.log("error in mongoss",err);
        throw err;
    }
    else {
      console.log("group-analysis",data);
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
      for(key in r) { r_arr.push({ rating: r[key].rating,count : r[key].count, emotion: key}); }
      console.log('r_arr: ', r_arr);
       var result = {
         line_chart:r_arr
       }
       console.log(result);
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
      for(key in r) { r_arr.push({ rating: r[key].rating,count : r[key].count, emotion: key}); }
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
/*to save users feedback */
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

        console.log("data rating, type",data.adid, typeof data.rating);
          emoticons.update({ adid: data.adid, date: data.date },
           {'$set': {feedback: data.feedback, rating: data.rating, comments: data.comments}},
           { upsert: true },
           function(err, res) {
             console.log('err: ', err);
             console.log('res: ', res);
           }
         )

          res.status(200);
          res.send("hello")
  });


return router;
}
