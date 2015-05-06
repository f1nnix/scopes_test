(function() {
  'use strict';
  var Sequelize, basename, config, db, env, fs, keyName, model, path, sequelize;

  fs = require('fs');

  path = require('path');

  Sequelize = require('sequelize');

  basename = path.basename(module.filename);

  env = process.env.NODE_ENV || 'development';

  config = require(__dirname + '/../../config/config.json')[env];

  sequelize = new Sequelize(config.database, config.username, config.password, config);

  db = {};

  fs.readdirSync(__dirname).filter(function(file) {
    return file.indexOf('.') !== 0 && file !== basename;
  }).forEach(function(file) {
    var model;
    if (path.extname(file) === ".js") {
      model = sequelize['import'](path.join(__dirname, file));
      return db[model.name] = model;
    }
  });

  for (keyName in db) {
    model = db[keyName];
    if (model.associate != null) {
      model.associate(db);
    }
  }

  db.sequelize = sequelize;

  db.Sequelize = Sequelize;

  module.exports = db;

}).call(this);
