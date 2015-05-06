db = require "./models"

db.Bot
  .create(name: "John Doe")
  .then (bot) ->
    console.log bot.dataValues
