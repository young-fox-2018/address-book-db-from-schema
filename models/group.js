const db = require('../db')
class Group {
    static create(values, cb) {
        let qry = `INSERT INTO Groups (name)
                    VALUES ("${values.name}")`
        db.serialize(() => {
            db.run(qry, err => {
                if(err) cb(err)
                else cb(null)
            })
        })
        
    }
}

module.exports = Group