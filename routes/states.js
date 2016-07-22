'use strict'

module.exports = function () {
  var _ = require('lodash')

  var faker = require('faker')

  var states = [
    'online',
    'offline',
    'pending'
  ]

  var statesLength = states.length

  return _.times(statesLength, function (i) {
    return {
      id: faker.random.uuid(),
      name: states[i]
    }
  })
}
