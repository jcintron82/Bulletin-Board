var express = require('express');
var router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amanfedfefdo",
    added: new Date().toDateString()
  },
  {
    text: "Heleeelo World!",
    user: "Charles",
    added: new Date().toDateString()
  },
];


const formattedSubtitle =  JSON.stringify(messages,null, 2).replaceAll('"','')
.replaceAll('[','').replaceAll('{','').replaceAll('}','').replaceAll("]",'');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('k')
  res.render('index', { title: 'Welcome', subtitle: messages});
});


/* GET form page. */
router.get('/new', function(req, res, next) {
  const title = 'Welcome' + '!';
  res.render('form', { title: title, subtitle: 'Test Subject...' });
});
// Post new message to homepage 
router.post('/new',(req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  messages.push({user:name, text:message, date:new Date().toDateString()})

  res.redirect('/')
})

module.exports = router;
