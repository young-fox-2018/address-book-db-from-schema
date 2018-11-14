const Model = require('./Model')
const db = require('../setupDb')

class contactGroup extends Model{

    static create(input, cb){
        let objInput =
        {
            groupId: input[0],
            contactId: input[1]
        }

        if(!input[0] || !input[1]){
            cb("Please provide <groupId> and/or <contactId> !")
        }
        else {
            super.create('contactGroups', objInput, function(err){
                if(err){
                    let objErr = 
                    {
                        Message: "Errornya di contactGroups Create",
                        Details: err
                    }
                    cb(objErr)
                }
                else{
                    cb(null, objInput)
                }
            })
        }
    }    
}

module.exports = contactGroup