const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./address_book.db')

class Model{

    static findOne(table,options,callback){
        let qFind = ``
        for(let key in options){
          if(typeof options[key] === 'number'){
            qFind += `${key} = ${options[key]} AND `
          } else {
            qFind += `${key} = "${options[key]}" AND `
          }
        }
        db.get(`SELECT * FROM ${table} WHERE ${qFind.slice(0,-4)}`,function(err,data){      
          if(err){
            callback(err)
          } else {
            if(data){
              callback(null,data)
            } else {
              callback(null,null)
            }
          }
        })
    }

    static findAll(field,table,callback){
        db.all(`SELECT ${field} FROM ${table}`,function(err,data){
            if(err){
                callback(err)
            } else {
                callback(null,data)
            }
        })
    }

    static update(id,options,callback){
        let qFind = ``
        for(let key in options){
          if(typeof options[key] === 'number'){
            qFind += `${key} = ${options[key]}`
          } else {
            qFind += `${key} = "${options[key]}"`
          }
        }
        db.run(`UPDATE Employees SET ${qFind} WHERE id = ${id}`,function(err){
          if(err){
            callback(err)
          } else {
            callback(null)
          }
        })
    }

    static delete(table,options,callback){
        // console.log(options)
        let qFind = ``
        for(let key in options){
          if(typeof options[key] === 'number'){
            qFind += `${key} = ${options[key]} AND `
          } else {
            qFind += `${key} = "${options[key]}" AND `
          }
        }

        let query = `DELETE FROM ${table} WHERE ${qFind.slice(0,-4)}`
        // console.log(query)
        db.run(query, function (err) {
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        });
    }

    static executeQuery(sql){

    }
    
}

module.exports = Model