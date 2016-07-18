'use strict';

module.exports = function () {

    var pipelines = require('./routes/pipelines');
    var projects = require('./routes/projects');
    var spaces = require('./routes/spaces');
    var states = require('./routes/states');
    var users = require('./routes/users');

    return {
        pipelines: pipelines(),
        projects: projects(),
        spaces: spaces(),
        states: states(),
        users: users()
    };

};
