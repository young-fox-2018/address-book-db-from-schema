const Model = require('./Model')
const db = require('../setupDb')


class Group extends Model{

    static create(input, cb){
        
        let queryCreate = `
            INSERT INTO Groups ( name )
            VALUES ("${input}" )
         `
        db.run(queryCreate,function(err){
            if(err){
                let objErr =
                {
                    Message: "Errornya di create Group",
                    Details: err
                }
                cb(objErr)
            }
            else{
                cb(null, input)
            }
        })
    }    
}

module.exports = Group