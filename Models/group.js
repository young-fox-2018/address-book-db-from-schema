const Model = require('./Model')
const db = require('../Database/db')

class Group extends Model {
    constructor() {
        super()
    }
    static addGroup(name, callback) {
        let query = `INSERT INTO groups (name) VALUES ('${name}')`
        db.run(query, (err) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, null)
            }
        })

    }
}

module.exports = Group