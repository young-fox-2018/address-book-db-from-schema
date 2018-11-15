const db = require('../db')

class Model {
    static findOne(table, input, cb) {
        if (table === 'contacts') {
            var obj = {field: 'email', data: input}
        } else {
            var obj = {field: 'name', data: input}
        }
        let queries =`
        SELECT * FROM ${table}
        WHERE ${obj.field} = "${obj.data}";`
        db.get(queries, function(err, row) {
            if (err) {
                cb({message: "err findOne", err: err})
            } else {
                cb(null, row)
            }
        })
    }

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