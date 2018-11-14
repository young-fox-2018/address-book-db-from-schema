const db = require('../database')

class Model{

  static create(table, param, cb) {
    const fields = Object.keys(param);

    let values = [];
    for (let key in param) {
        values.push(`"${param[key]}"`);
    }

    const query = `INSERT INTO ${table} (${fields.join(', ')}) VALUES (${values.join(', ')})`;
    db.run(query, function(err) {
        if (err) {
            cb(err);
        } else {
          if(this.changes == 0) {
            // biar err kalo gada data
            cb(`data not found`)
          } else 
            cb(null)
          }
        }
    })
  }

  static findOne(table , param, cb) {
    let q =''
    if (typeof param.value == 'string' ){
      q = `SELECT * FROM ${table} WHERE ${param.field} = "${param.value}"`
    }else {
      q = `SELECT * FROM ${table} WHERE ${param.field} = ${param.value}`
    }

    db.get(q, function(err, row) {
      if(err) {
        cb(err)
      } else{
        cb(null, row)
      }
    })

  }

  static findAll(table , cb) {
    const q = ` SELECT * FROM ${table}`
    db.all(q, function(err, rows){
      if(err){
        cb(err)
      } else {
        cb(null, rows)
      }
    })
  }

  static update(table , param ,cb) {
    const q = `UPDATE ${table} SET ${param.field} = ? WHERE ${param.field2} = ?`
    db.run(q, [ param.value , param.value2 ] , function(err){
      if(err){
        cb(err)
      } else {
        if(this.changes == 0) {
          // biar err kalo gada data
          cb(`data not found`)
        } else 
          cb(null)
        }
      }
    })
  }

  static delete(table,param ,cb ){
    let q = `DELETE FROM ${table} WHERE ${param.field} = ${param.value}`
    if (typeof param.value == 'string' ){
      q = `DELETE FROM ${table} WHERE ${param.field} = "${param.value}"`
    }else {
      q = `DELETE FROM ${table} WHERE ${param.field} = ${param.value}`
    }
    db.run(q, function(err){
      if(err){
        cb(err)
      } else {
        if(this.changes == 0) {
          // biar err kalo gada data
          cb(`data not found`)
        } else 
          cb(null)
        }
      }
    })
  }

}
module.exports = Model