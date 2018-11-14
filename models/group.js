const Model = require('./model')

class Group extends Model{

  static addGroup(param,cb) {
    super.create('groups', param , function(err) {
      if(err){
        cb(err)
      } else {
        cb(null)
      }
    })  
  }

}


module.exports = Group