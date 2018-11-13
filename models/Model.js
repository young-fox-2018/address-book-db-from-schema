const db = require('../setup')

class Model {
    // static findOne(input, table, cb) {
    //     let queries =`
    //     SELECT * FROM ${table}
    //     WHERE ${input.field} = ${input.data}`
    //     db.get(queries, function(err, row) {
    //         if (err) {
    //             cb({message: "err findOne", err: err})
    //         } else {
    //             cb(row)
    //         }
    //     })
    // }

    // static findAll(table, cb) {
    //     let queries =`
    //     SELECT * FROM ${table}`
    //     db.all(queries, function(err, rows) {
    //         if (err) {
    //             cb({message: "err findAll", err: err})
    //         } else {
    //             cb(rows)
    //         }
    //     })
    // }

    // static update() {

    // }

    // static delete() {

    // }
}

module.exports = Model