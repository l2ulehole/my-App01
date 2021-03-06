var express = require('express');
var router = express.Router();

// const isLoggedIn = (req, res, next) => {
//   if (!req.session.user) {
//     return res.redirect('/login')
//   }
//   next()
// }

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  }
}

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', isLoggedIn, function (req, res, next) {
  res.render('index', { title: 'FishMate' })
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})


module.exports = router;
