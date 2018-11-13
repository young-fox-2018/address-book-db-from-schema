const Model = require('./model')

class Group {
    constructor(name) {
        this.name = name
    }
    static createTable(cb) {
        let fields = `id INTEGER PRIMARY KEY AUTOINCREMENT,
                      name TEXT NOT NULL`
        Model.createTable('Groups', fields, function (err) {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }

}




module.exports = Group