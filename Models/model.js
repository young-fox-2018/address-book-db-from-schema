const db = require("../Database/database")

class Model{

    static create(tableName, input, cb) {
        let keys = Object.keys(input).join(',')

        let valuesArr = [];

        for(let i in input){
            valuesArr.push(`"${input[i]}"`);
        }
        let values = valuesArr.join(",")
    
        let sql = `INSERT INTO ${tableName} (${keys}) VALUES (${values})`
        db.run(sql, function(err) {
          if (err) cb(err)
          else cb(null)
        })
      }

    static readOne(tableName, input, cb){
        let sql = `SELECT * FROM ${tableName}
        WHERE ${input.field} = "${input.value}"`

        db.get(sql, function(err, data){
            if(err){
                cb(err)
            }
            else{
                if(data === undefined){
                    cb("The data you are looking for is not available")
                }
                else{
                    cb(null, data)
                }
            }
        })
    }

    static readAll(tableName, input, cb){
        let sql = `SELECT * FROM ${tableName}
        WHERE ${input.field} = "${input.value}"`

        db.all(sql, function(err, data){
            if(err){
                cb(err)
            }
            else{
                if(data === undefined){
                    cb("The data you are looking for is not available")
                }
                else{
                    cb(null, data)
                }
            }
        })
    }

    static delete(tableName, input, cb){
        let sql = `DELETE FROM ${tableName}
        WHERE ${input.field} = "${input.value}"`

        db.run(sql, function(err){
            if(err){
                cb(err)
            }
            else{
                cb(null, this)
            }
        })
    }
}

module.exports = Model;