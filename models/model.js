const db = require('../database')

class Model{
  static findOne(table , param, cb) {
    const q =''
    if (typeof(param.value) == string ){
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
    // db.run("UPDATE tbl SET name = ? WHERE id = ?", [ "bar", 2 ])
    db.run(q, [ JSON.parse(param.value) , JSON.parse(para.value2) ] , function(err){
      if(err){
        cb(err)
      } else {
        cb(null)
      }
    })
  }
}
module.exports = Model