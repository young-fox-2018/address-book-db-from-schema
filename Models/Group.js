const Model = require('./Model')
const db = require('../setupDb')


class Group extends Model{

    static create(input, cb){
        let objInput =
        {
            name: input[0]
        }
        
        if(!input[0]){
            cb("Please provide proper input as follows: <group name>")
        }
        else{
            super.create('Groups', objInput, function(err){
                if(err){
                    let objErr = 
                    {
                        Message: "Errornya di Group Create",
                        Details: err
                    }
                    cb(objErr)
                }
                else{
                    cb(null, objInput.name)
                }
            })
        }
    }    
}

module.exports = Group