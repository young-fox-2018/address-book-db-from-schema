const Model = require('./model')

class Contact extends Model {
    static create(options,callback){
        const param = {
            name: options[1],
            company:options[2],
            phone:options[3],
            email:options[4]
        }
        super.create("contacts",param,function(err){
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        })

    }

}
module.exports = Contact