var express = require('express');
var router = express.Router();



const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },

  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome', subtitle: JSON.stringify(messages)});
});

router.get('/new', function(req, res, next) {
  const title = 'Welcome' + '!';
  res.render('form', { title: title, subtitle: 'Test Subject...' });
});
//Left off here
router.post('/new',(req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  messages.push({text:message, user:name, date: new Date()})

  res.redirect('/')
})

module.exports = router;
