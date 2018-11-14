const Model = require('./model')
const db = require('../database')

class Contact extends Model{

  static addContact(param , cb) {
    super.create('contacts', param , function(err) {
      if(err){
        cb(err)
      } else {
        cb(null)
      }
    })
  }
}


module.exports = Contact