const db = require('../database/db')

class Model {
    static create(table, params, cb) {
        // console.log(table,'from model')
        // console.log(params, 'from model')
        let tableField = []
        for (let i = 0; i < params.length; i++) {
            tableField.push('(?)')
        }
        // console.log(tableField)

        let queryCreate = db.prepare(`
        INSERT INTO ${table}
        VALUES
        (null, ${tableField.join(',')})
        `)

        queryCreate.run(params)        

        queryCreate.finalize(function(err){
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }

    static findAll(query, cb) {
        db.all(query, function(err, data) {
            if (err) {
                cb(err)
            } else {
                cb(null, data)
            }
        })
    }

    static findOne(table, params, cb) {

        let query =
        `
        select * from ${table}
        where ${params.field} = '${params.value}'
        `

        db.get(query, function(err, data) {
            if (err) {
                cb({
                    message: `error read data find one table ${table}`,
                    err: err
                })
            } else {
                cb(null, data)
            }
        })
    }

    static update(table, params, cb) {
        // console.log(table)
        // console.log(params)
        let query = `
        update ${table}
        set 
        ${params.field} = '${params.value}'
        where id = ${params.id}
        `

        Model.execQuery(query, function(err) {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })

    }

    static delete() {

    }

    static execQuery(query, cb) {
        db.run(query, function(err){
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
}

module.exports = Model
