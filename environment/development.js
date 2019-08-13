const path = require('path');

module.exports = {
  dbUrl: 'mongodb+srv://alex:alex@cluster0-hai9j.mongodb.net/twitter?retryWrites=true&w=majority',
  cert: path.join( __dirname, '../ssl/local.crt'),
  key: path.join( __dirname, '../ssl/local.key'),
}