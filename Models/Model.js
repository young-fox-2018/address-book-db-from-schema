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

    static findAll(table,callback){
        db.all(`SELECT * FROM ${table}`,function(err,data){
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

    static delete(table,id,callback){
        let query = `DELETE FROM people WHERE id=${args[0]}`
        db.run(query, function (err) {
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        });
    }
    
}

module.exports = Model