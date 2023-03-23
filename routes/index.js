var express = require("express");
var router = express.Router();

// Create sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

/* GET new message page. */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Message Board" });
});

/* POST new message. */
router.post("/new", function (req, res, next) {
  const { text, user } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
