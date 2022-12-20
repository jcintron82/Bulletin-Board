var express = require("express");
var router = express.Router();

const messages = [];

const formattedSubtitle = JSON.stringify(messages, null, 2)
  .replaceAll('"', "")
  .replaceAll("[", "")
  .replaceAll("{", "")
  .replaceAll("}", "")
  .replaceAll("]", "");

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
