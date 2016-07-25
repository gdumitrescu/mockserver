'use strict'

module.exports = function () {
  var _ = require('lodash')

  var faker = require('faker')
  var chance = require('chance').Chance()

  var platformNames = [
    'android',
    'blackberry',
    'ios',
    'windows'
  ]

  var platformsLength = platformNames.length

  return _.times(platformsLength, function (i) {
    return {
      id: faker.random.uuid(),
      name: faker.name.findName() + '-' + platformNames[i] + ' device',
      mac: faker.internet.mac(),
      platform: platformNames[i],
      active: chance.bool({
        likelihood: 75
      })
    }
  })
}
