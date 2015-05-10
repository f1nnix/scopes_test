(function() {
  var db;

  db = require("./models");

  db.User.create({
    name: "John Doe"
  }).then(function(user) {
    return user.getAvatars();
  });

}).call(this);
