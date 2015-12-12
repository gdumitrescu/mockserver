'use strict';

module.exports = function () {

    var pipelines = require('./routes/pipelines');
    var spaces = require('./routes/spaces');
    var states = require('./routes/states');

    return {
        pipelines: pipelines(),
        spaces: spaces(),
        states: states()
    };

};
