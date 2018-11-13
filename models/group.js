const db = require('./../db')
const Model = require('./model')

class Group extends Model{
    constructor(name){
        this.name = nama
    }

    static create_group(data,callback){
        db.run(`INSERT INTO Groups(name) VALUES (?)`, data, function(err) {
            if (err) {
              callback(err)
            }
          });
    }


}

module.exports = Group