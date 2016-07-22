'use strict'

module.exports = function () {
  var _ = require('lodash')

  var faker = require('faker')

  var spaces = [
    'DEV',
    'QA',
    'UAT',
    'LIVE'
  ]

  var spacesLength = spaces.length

  return _.times(spacesLength, function (i) {
    return {
      id: faker.random.uuid(),
      name: spaces[i],
      host: faker.internet.ip(),
      version: '1.1.' + i
    }
  })
}
