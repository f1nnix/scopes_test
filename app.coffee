db = require "./models"

db.User
  .create(name: "John Doe")
  .then (user) ->
    user.getAvatars()
