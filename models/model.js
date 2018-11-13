const db = require('./../db')

class Model {
    static execute(query, callback){
        db.run(query, function(err){
            if(err) {
                callback(err)
            } 
        })
    }

    static getAll(tablename, callback)
    {
        db.all(`SELECT * FROM ${tablename}`, function (err, data) {
            if(err){
                callback(err)
            }else{
                callback(null,data)
            }
        });
        // db.close()
    }

    static update(tablename, data, callback){
        Model.execute(`UPDATE ${tablename} SET (${data.field} = ${data.value}) WHERE
        id = ${data.id};`, function(err){
            if(err){
                callback(err)
            }
        })
    }
    
    static delete(tablename, data){
        Model.execute(`DELETE FROM ${tablename} WHERE id =  ${data.id};`, function(err){
            if(err){
                callback(err)
            }
        } )
    }

}

module.exports = Model