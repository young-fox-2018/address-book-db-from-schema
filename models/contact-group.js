const db = require('./../db')
const Model = require('./model')

class Groupcontacts extends Model{
    constructor(id_contact, id_group){
        this.id_contact = id_contact
        this.id_group = id_group
    }
    static findOne(params, callback){
        super.findOne("Groupcontacts", params, function(err,row){
            if(err){
                callback(err)
            }else{
               callback(null,row)
            }
        })
    }

    static execute(query, callback){
        super.execute(query, callback)
    }
    static invite(data, callback){
        super.create("Groupcontacts", "id_contact,id_group", data, function(err){
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        })
    }
    static kick(data, callback){
        super.delete("Groupcontacts", data, function(err){
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        })
    }
}   

module.exports = Groupcontacts