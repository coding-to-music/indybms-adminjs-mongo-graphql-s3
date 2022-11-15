const AdminJS = require('adminjs')
const AdminJSMongoose = require('@adminjs/mongoose')
const mongoose = require('mongoose')
const { User } = require('../models')

AdminJS.registerAdapter(AdminJSMongoose)

const admin = () => new AdminJS({
  databases: [ mongoose ],
  rootPath: "/admin",
  branding: {
    companyName: "IndyBMS",
    softwareBrothers: false,
  },
  resources: [
    User,
  ]
});

const DEFAULT_ADMIN = {
  email: 'admin@indybms.com',
  password: '1234567890',
}

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}

module.exports = {
  admin,
  authenticate,
}