var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User =  mongoose.model('Users', mongoose.Schema({ userDetails: { fullName: String, email: String, organization: String }}, { strict: false }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/html/index.html');
});

router.post('/form', (req, res, next) => {
  console.log('Entered askdja;klasvkdnsdsnnvjadsnfjnasdjvadjsnfwenujnudsvnj j');
  var user = new User();
  user.userDetails = {};
  user.userDetails.fullName = req.body.fullName;
  user.userDetails.email = req.body.email;
  user.userDetails.organization = req.body.organization;
  user.save();
  // res.redirect('/html/index.html');
})

module.exports = router;
