(function() {
  var db;

  db = require("./models");

  db.Bot.create({
    name: "John Doe"
  }).then(function(bot) {
    return console.log(bot.dataValues);
  });

}).call(this);
