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
  // static delete(input) {
  //   Model.delete('contact', input, function (err, data) {

  //   })
  // }
}


module.exports = Contact