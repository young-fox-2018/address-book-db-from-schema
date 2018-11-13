const db = require("../databases/connection")
// const Seeder = require("../seeder/seeder")

class Model {
    static save(table, columns, data, callback) {
        db.run(
            `INSERT INTO ${table} (${columns})VALUES (${data})`,
            (err) => {
                if (err) callback(err)
                else callback(null)
            }
        )
    }

    static update(table, column, updateData, param, data, callback) {
        db.run(`UPDATE  ${table} SET ${column} = "${updateData}" WHERE ${param} = ${data}`, (err) => {
            if (err) callback(err)
            else callback(null)
        });
    }
    static findOne(table, columns, param, callback) {
        db.get(
            `SELECT * FROM ${table} WHERE ${columns}="${param}" `,
            (err, data) => {
                if (err) callback(err, null)
                else callback(null, data)
            }
        )
    }
    static findAll(table, columns, param, callback) {
        db.all(
            `SELECT * FROM ${table}`,
            (err, data) => {
                if (err) callback(err, null)
                else callback(null, data)
            }
        )
    }
    static delete(table, column, data, callback) {
        db.run(`DELETE FROM ${table} WHERE ${column} = ${data}`, (err) => {
            if (err) callback(err)
            else callback(null)
        });
    }
}

module.exports = Model