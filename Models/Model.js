const db = require('../db')

class Model {
    
    static runner (data, callback) {
        db.run(data, function(err) {
            if(err) {
                callback(err)
            } else {
                callback(null, this)
            }
        })
    }

    static findOne (option, callback) {
        let find =
        `
        SELECT *
        FROM "${option.table}"
        WHERE "${option.field}" = "${option.value}"
        `
        db.get(find, function(err, data) {
            if(err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }

    static findAll (option, callback) {
        let find =
        `
        SELECT *
        FROM "${option.table}"
        `
        db.all(find, function(err, data) {
            if(err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }

    static update (option, callback) {
        let update = 
        `
        UPDATE "${option.table}"
        SET "${option.field}" = "${option.value}"
        WHERE name = "${option.name}"
        `
        Model.runner(update, function(err, data) {
            if(err) {
                callback(err)
            } else {
                callback(null)
            }
        })
    }
    
    static delete (option, callback) {
        let query = 
        `
        DELETE FROM "${option.table}"
        WHERE "${option.field}" = "${option.value}"
        `
        Model.runner(query, function(err, data) {
            if(err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }


}

module.exports = Model