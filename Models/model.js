const db = require('../database')

class Model {

    static create(tablename, options, callback) {
        const fields = Object.keys(options);

        let values = [];
        for (let key in options) {
            values.push(`"${options[key]}"`);
        }

        const query = `INSERT INTO ${tablename} (${fields.join(', ')}) VALUES (${values.join(', ')})`;
        db.run(query, function(err) {
            console.log(query)
            if (err) {
                callback(err);
            } else {
                if(this.changes == 0) {
                    // biar err kalo gada data
                    callback(`data not found`)
                  } else{
    
                      callback(null)
                  }
            }
        })

    }
    static findall(tablename,callback){
        const query = `SELECT * FROM ${tablename}`
        db.all(query,function(err,rows){
            if(err){
                callback(err)
            }else{
                callback(null,rows)
            }
        })

    }
    static findone(tablename,param,callback){
        let query = ""
        if(typeof(param.value) === 'string'){
            query = `SELECT * FROM ${tablename} WHERE ${param.field} = "${param.value}"`
        }else{
            query = `SELECT * FROM ${tablename} WHERE ${param.field} = ${param.value}`
        }
        
        db.get(query,function(err,row){
            if(err){
                callback(err)
            }else{
                if(row === undefined){
                    callback(`data is not found`)
                }
                callback(null,row)
            }
        })
    }
    static update(table , param ,callback) {
        const q = `UPDATE ${table} SET ${param.field} = ? WHERE ${param.field2} = ?`
        db.run(q, [ param.value , param.value2 ] , function(err){
          if(err){
            callback(err)
          } else {
            if(this.changes == 0) {
                // biar err kalo gada data
                callback(`data not found`)
              } else{

                  callback(null)
              }
          }
        })
      }
    static delete(table,param,callback){
        const q = `DELETE FROM ${table} WHERE ${param.field} = ?`
        db.run(q, [ param.value ] , function(err){
          if(err){
            callback(err)
          } else {
            if(this.changes == 0) {
                // biar err kalo gada data
                callback(`data not found`)
              } else{

                  callback(null)
              }
              
          
          }
        })
    
}
module.exports = Model