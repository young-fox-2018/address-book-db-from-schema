const Model = require('../Models/model')

class Group extends Model{
    static create(options,callback){
        const param = {
            name:options[1]
        }
        super.create("groups",param,function(err){
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        })
    }
    
}
module.exports= Group