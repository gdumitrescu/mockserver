'use strict'

var pipelines = require('./routes/pipelines')
var projects = require('./routes/projects')
var spaces = require('./routes/spaces')
var states = require('./routes/states')
var users = require('./routes/users')

module.exports = function () {
  return {
    pipelines: pipelines(),
    projects: projects(),
    spaces: spaces(),
    states: states(),
    users: users()
  }
}
