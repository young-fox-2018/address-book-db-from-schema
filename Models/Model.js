const db = require('../setupDb')

class Model{

    static findAll(field,cb){
        let queryFindAll = 
        `
        SELECT * FROM ${field}
        `
        db.all(queryFindAll,function(err,rows){
            if(err){
                let objErr = {
                    Message: "Errornya di db.all findAll",
                    Details: err
                }
                cb(objErr)
            }
            else{
                cb(null, rows)
            }
        })
    }

    static findOne(input,cb){
        let objInput = 
        {
            field: input[0],
            where: input[1],
            value: input[2]
        }
        
        let queryFindOne = `
        SELECT * FROM "${objInput.field}"
        WHERE "${objInput.where}" = "${objInput.value}"
        `
        db.get(queryFindOne, function(err,row){
            if(err){
                let objErr =
                {
                    Message: "Errornya di findOne",
                    Details: err
                }
                cb(objErr)
            }
            else{
                cb(null, row)
            }
        })
    }

    static update(field, input, cb){
        
        let objInput = 
        {
            id: input[0],
            where: input[1],
            value: input[2]
        }

        let queryUpd = 
        `
        UPDATE "${field}"
        SET "${objInput.where}" = "${objInput.value}"
        WHERE id = "${objInput.id}"
        `
        db.run(queryUpd,function(err){
            if(err){
                let objErr =
                {
                    Message: "Errornya di db.run Model.update",
                    details: err
                }
                cb(objErr)
            }
            else{
                cb(null,objInput)
            }
        })
    }

    static delete(input, cb){
        let queryDel = 
        `
        DELETE FROM ${input[0]}
        WHERE "${input[1]}" = "${input[2]}"  
        `
        db.run(queryDel, function(err){
            if(err){
                cb(err)
            }
            else{
                cb(null)
            }
        })
    }


}

module.exports = Model