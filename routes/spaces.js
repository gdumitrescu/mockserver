'use strict'

module.exports = function () {
  var _ = require('lodash')

  var faker = require('faker')

  var spaceNames = [
    'DEV',
    'TEST',
    'DEMO',
    'LIVE'
  ]

  var spacesLength = spaceNames.length

  return _.times(spacesLength, function (i) {
    return {
      id: faker.random.uuid(),
      name: spaceNames[i],
      host: faker.internet.ip(),
      version: '1.1.' + i
    }
  })
}
