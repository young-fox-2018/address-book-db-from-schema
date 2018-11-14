const Model = require('./model')

class Contactgroup extends Model {
    static create(options,callback){
        const param = {
            contact_id : options[1],
            group_id : options[2]
        }
        super.create("contactgroup",param,function(err){
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        })
    }
}
module.exports = Contactgroup