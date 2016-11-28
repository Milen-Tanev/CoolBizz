var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodejs-telerik-team-project'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodejs-telerik-team-project-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'nodejs-telerik-team-project'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodejs-telerik-team-project-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nodejs-telerik-team-project'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodejs-telerik-team-project-production'
  }
};

module.exports = config[env];
