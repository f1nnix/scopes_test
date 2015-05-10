'use strict'

fs        = require('fs')
path      = require('path')
Sequelize = require('sequelize')

basename  = path.basename(module.filename)
env       = process.env.NODE_ENV or 'development'
config    = require(__dirname + '/../../config/config.json')[env]
sequelize = new Sequelize(config.database, config.username, config.password, config)
db        = {}

fs
  .readdirSync(__dirname)
  .filter (file)-> file.indexOf('.') != 0 and file != basename
  .forEach (file) ->
    # prevent reading coffescript files, only *.js models
    if path.extname(file) is ".js"
      model = sequelize['import'](path.join(__dirname, file))
      db[model.name] = model

for keyName of db
  console.log "keyName: #{keyName}"
  model = db[keyName]
  console.log "Model name: #{model.name}"
  # if it's a model
  if model.associate?
    model.associate db

db.sequelize   = sequelize
db.Sequelize   = Sequelize
module.exports = db
