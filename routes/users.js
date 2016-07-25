'use strict'

module.exports = function () {
  var _ = require('lodash')

  var faker = require('faker')
  var chance = require('chance').Chance()

  return _.times(10, function () {
    return {
      id: faker.random.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      active: chance.bool({
        likelihood: 75
      })
    }
  })
}
