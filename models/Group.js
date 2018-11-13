const db = require('../setup')
const Model = require("./Model")

class Group extends Model{
    static create(input, cb) {
        let queries =`
        INSERT INTO contacts (name)
        VALUES ("${input.name}")`
        db.run(queries, function(err) {
            if (err) {
                cb({message: "err create group"})
            }
        })
    }
}

module.exports = Group