const db = require('../db');

class Model {
    static executeQuery(qry, cb) {
        db.serialize(() => {
            db.run(qry, (err) => {
                if (err) cb(err)
                else cb(null)
            })
        })
    }
    static findAll(table, cb) {
        let qry = `SELECT * FROM ${table}`
        db.serialize(() => {
            db.all(qry, (err, rows) => {
                if (err) cb(err)
                else cb(null, rows)
            })
        })
    }
    static findOne(data, table, cb) {
        let qry = `SELECT * FROM ${table} WHERE ${data.field} = "${data.value}"`
        db.serialize(() => {
            db.get(qry, (err, row) => {
                if (err) cb(err)
                else cb(null, row)
            })
        })
    }
    static update(dataObj, table, cb) {
        let qry = `UPDATE ${table} SET ${dataObj.field} = "${dataObj.updateValue}" WHERE ${dataObj.field} = "${dataObj.value}"`
        this.executeQuery(qry, err => {
            if (err) cb(err)
            else cb(null, [])
        })
        // console.log(qry)
    }
    static delete(dataObj, table, cb) {
        let qry = `DELETE FROM ${table} WHERE ${dataObj.field} = "${dataObj.value}"`
        this.executeQuery(qry, err => {
            if (err) cb(err)
            else cb(null, [])
        })
        //console.log(qry)
    }
}

module.exports = Model