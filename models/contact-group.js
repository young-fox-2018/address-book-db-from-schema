const Model = require('./model')

class ContGroup extends Model{

  static addContGroup(param,cb) {
    super.create('contact_group', param , function(err) {
      if(err){
        cb(err)
      } else {
        cb(null)
      }
    })  
  }

}


module.exports = ContGroup