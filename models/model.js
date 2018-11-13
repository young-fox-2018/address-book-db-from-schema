const db = require("./connectDB")

class Model {
    static execute(query, callback) {
        db.run(query, function(err) {
            if (err) callback(err)
            else {
                callback(null)
            }
        })
    }
    static create(table, values, callback) {
        if (table == "Contacts") {
            let query = `INSERT INTO Contacts (name, company, telp,email) 
                         VALUES ("${values[0]}", "${values[1]}", "${values[2]}", "${values[3]}");`

            Model.execute(query, function(err) {
                if (err) callback(err, null)
                else {
                    callback(null, `Successfully inserted ${values} to table ${table}`)
                }
            })
        } else if (table == "Groups") {
            let query = `INSERT INTO Groups (name) VALUES ("${values[0]}")`
            Model.execute(query, function(err) {
                if (err) callback(err, null)
                else {
                    callback(null, `Successfully inserted ${values} to table ${table}`)
                }
            })

        } else if (table == "ContactsGroups") {
            let query = `INSERT INTO ContactsGroups (contact_id, group_id) VALUES ("${values[0]}", "${values[1]}")`
            Model.execute(query, function(err) {
                if (err) callback(err, null)
                else {
                    callback(null, `Successfully inserted ${values} to table ${table}`)
                }
            })
        } else {
            callback("Table doesn't exist", null)
        }
    }

    static findOne(table, option, callback) {
        let query  = `SELECT * FROM ${table} WHERE "${option.field}" = "${option.value}"`
        db.get(query, function(err, rows) {
            if (err) callback(err, null)
            else {
                callback(null, rows)
            }
        })
    }

    static find(table, callback) {
        let query = `SELECT * FROM ${table}`
        db.all(query, function(err, rows){
            if (err) callback(err, null)
            else {
                callback(null, rows)
            }
        })
    }

    static update() {

    }
}

module.exports = Model

// CRUD
// Create: adding value using insert into blabla
// Read: findOne, findAll
// Update
// Delete