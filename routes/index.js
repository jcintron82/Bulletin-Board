var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there, and welcome to my bulletin board project! This project was created as a way to further my working knowledge with Express and what it means to create a full stack application. The backend is a Node server utilizing the Express framework and the front-end is standard CSS, using pug as the templating engine. If you'd like to read more on this project, the source code can be found here: https://github.com/jcintron82/Bulletin-Board; don't forget to post a message before you go! ",
    user: "Juan Cintron",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("k");
  res.render("index", { title: "Bulletin Board", subtitle: messages });
});

/* GET form page. */
router.get("/new", function (req, res, next) {
  const title = "Welcome" + "!";
  res.render("form", { title: title, subtitle: "Test Subject..." });
});
// Post new message to homepage
router.post("/new", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  messages.push({
    user: name,
    text: message,
    added: new Date().toDateString(),
  });

  res.redirect("/");
});
// messages.splice(0)
module.exports = router;
