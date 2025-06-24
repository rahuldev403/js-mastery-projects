const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
const User = require('./models/User');
const Tournament = require('./models/Tournament');

AdminJS.registerAdapter(AdminJSMongoose);

const adminJs = new AdminJS({
  resources: [User, Tournament],
  rootPath: '/admin',
});

const router = AdminJSExpress.buildRouter(adminJs);

module.exports = router;
