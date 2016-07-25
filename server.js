'use strict'

var jsonServer = require('json-server')

var devices = require('./routes/devices')
var organizations = require('./routes/organizations')
var spaces = require('./routes/spaces')
var users = require('./routes/users')

var env = process.env.NODE_ENV || 'development'
var port = process.env.PORT || '3000'

var data = {
  devices: devices(),
  organizations: organizations(),
  spaces: spaces(),
  users: users()
}

var app = jsonServer.create()
var router = jsonServer.router(data)

app.use(jsonServer.defaults({
  logger: env !== 'production'
}))

app.use(router)
app.listen(port)

