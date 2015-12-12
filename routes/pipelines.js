'use strict';

module.exports = function () {

    var _ = require('lodash');

    var faker = require('faker');
    var chance = require('chance').Chance();

    var pipeline = [
        'Front End',
        'Back End',
        'Web',
        'Mobile',
        'Android',
        'iOS',
        'BlackBerry'
    ];

    var pipelineLength = pipeline.length;

    return _.times(pipelineLength, function (i) {

        return {
            id: faker.random.uuid(),
            name: pipeline[i],
            active: chance.bool({
                likelihood: 50
            })
        };

    });
};
