const db = require('./../db')

class Model {
    static execute(query, callback){
        db.run(query, function(err){
            if(err) {
                callback(err)
            }else{
                callback(null)
            }
        })
    }

    static create(tablename, params, data, callback) {
        let values = []
        data.forEach(element => {
            values.push('?')
        });
        db.run(`INSERT INTO ${tablename}(${params}) VALUES (${values})`,data, function(err) {
            if (err) {
              callback(err)
            }else{
                callback(null)
            }
          });
    }
    static findOne(tablename, input, callback) {
        const findOneQuery = `
                            SELECT * FROM ${tablename}
                            WHERE ${input.field} LIKE "${input.value}%"
                            `
        db.get(findOneQuery, function(err,row) {
          if(err) {
            callback(err)
          } else {
            callback(null, row)
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
        Model.execute(`UPDATE ${tablename} SET ${data.field} = "${data.value}" WHERE
        id = ${data.id};`, function(err){
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        })
    }
    
    static delete(tablename, data, callback){
        Model.execute(`DELETE FROM ${tablename} WHERE id =  ${data.id};`, function(err){
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        } )
    }

}

module.exports = Model