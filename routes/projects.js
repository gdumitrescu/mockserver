'use strict';

module.exports = function () {

    var _ = require('lodash');

    var faker = require('faker');
    var chance = require('chance').Chance();

    return _.times(10, function () {

        return {
            id: faker.random.uuid(),
            name: faker.commerce.productName(),
            active: chance.bool({
                likelihood: 75
            })
        };

    });
};
