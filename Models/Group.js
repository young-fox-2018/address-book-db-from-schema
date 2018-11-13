const Model = require('./Model')

class Group extends Model {

    static create (name, callback) {
        let create = 
        `
        INSERT INTO groups
            (name)
        VALUES
            ("${name}")
        `
        Group.runner(create, function(err, data) {
            if(err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }

}

module.exports = Group