const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI
  },
  default: {
    SECRET: 'SUPERSECRETPASSWORD123',
    DATABASE: 'mongodb://brka94:nokian96@ds163730.mlab.com:63730/phone-number'
  }
}
//mongodb://localhost:27017/phoneNumber
exports.get = function get(env) {
  return config[env] || config.default
}