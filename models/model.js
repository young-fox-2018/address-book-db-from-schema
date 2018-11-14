const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

class Model  {

  static findOne(table, objData, cb) {
    const field = Object.keys(objData)
    const value = Object.values(objData)

    let query = `
      SELECT * FROM ${table} WHERE ${field.join()} = "${value.join()}" `

    db.get(query,function(err, row) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, row)
      }
    })
  }

  static findAll(table, data, cb) {
    let query = `
      SELECT * FROM ${table}`

    db.all(query, function(err, rows) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, rows)
      }
    })
  }

  static create(table, objData, cb) {
    const field = Object.keys(objData)

    let value = []
    for (let key in objData) {
      value.push(`"${objData[key]}"`)
    }

    let query = `
      INSERT INTO ${table} (${field.join(", ")}) VALUES (${value.join(", ")});`

    db.run(query, function(err) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, objData)
      }
    })
  }

  static update(table, data, field, cb) {

    let query = `
      UPDATE ${table} SET ${data[1]} = "${data[2]}" WHERE ${field} = "${data[0]}";`

    db.run(query, function(err) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, this)
      }
    })
  }

  static delete(table, objData, cb) {
    const field = Object.keys(objData)
    const value = Object.values(objData)

    let query = `
      DELETE FROM ${table} WHERE ${field.join()} = "${value.join()}" `

    db.run(query,function(err) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, this)
      }
    })
  }
}

module.exports = Model