const Model = require('./model')

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