'use strict'

module.exports = function () {
  var _ = require('lodash')

  var faker = require('faker')

  return _.times(10, function () {
    return {
      id: faker.random.uuid(),
      name: faker.company.companyName()
    }
  })
}
