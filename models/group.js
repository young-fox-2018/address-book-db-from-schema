const db = require('./../db')
const Model = require('./model')

class Group extends Model{
    constructor(name){
        this.name = nama
    }

    static create_group(data,callback){
        super.create("Groups", "name", data, function(err){
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        }) 
    }
    static findOne(params, callback){
        super.findOne("Groups", params, function(err,row){
            if(err){
                callback(err)
            }else{
               callback(null,row)
            }
        })
    }

    static updateGroup(params, callback){
        super.update("Groups", params, function(err){
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        })
    }

    static deleteGroup(params, callback){
        super.delete("Groups", params, function(err){
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        })
    }

    static showGroup(callback){
        const query = `SELECT Groups.name AS groupname, COUNT(*) AS members
        FROM Groupcontacts INNER JOIN Groups ON Groupcontacts.id_group = Groups.id
        GROUP BY Groupcontacts.id_group
        ORDER BY members DESC
        `
        db.all(query, function(err, data){
                if(err) {
                    callback(err)
                }else{
                    callback(null,data)
                }
        })
    }

}

module.exports = Group