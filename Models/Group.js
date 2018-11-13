const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./address_book.db')

const Model = require("./Model.js")

class Group extends Model{
    constructor( name ){
        super()
        this.group_name = name
    }

    static create(name, callback){
        let newGroup = new Group(name)

        let qInsert = `INSERT INTO Groups(group_name)
                  VALUES("${newGroup.group_name}")
                  `
    
        db.run(qInsert, function(err){
        if(err){
            callback(err)
        } else {
            callback(null)
        }
        })
    }
}

module.exports = Group