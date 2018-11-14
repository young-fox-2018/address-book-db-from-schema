const db = require('../setupDb')

class Model{

    static create(tableName, input, cb){
        let inputKeys = Object.keys(input)
        let tmp = []
        for(let keys in input){
            tmp.push(`"${input[keys]}"`)
        }


        let queryCreate = `
            INSERT INTO ${tableName} ( ${inputKeys.join(", ")} )
            VALUES ( ${tmp.join(", ")} )
         `
         db.run(queryCreate,function(err){
            if(err){
                let objErr =
                {
                    Message: `Errornya di create ${tableName}`,
                    Details: err
                }
                cb(objErr)
            }
            else{
                cb(null)
            }
        })
    }

    static findAll(field,cb){
        let queryFindAll = 
        `
        SELECT * FROM ${field}
        `
        db.all(queryFindAll,function(err,rows){
            if(err){
                let objErr = {
                    Message: "Errornya di db.all findAll else",
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
        
        if(!input[0] || !input[1] || !input[2]){
            cb("Please provide proper input as follows: <table name> <column name> <value>")
        }
        else{
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
                    if(row){
                        cb(null, row)
                    }
                    else{
                        cb("The data you're trying to find doesn't exist")
                    }
                }
            })
        }
    }

    static update(input, cb){
        
        let objInput = 
        {
            field: input[0],
            id: input[1],
            where: input[2],
            value: input[3]
        }


        if(!input[0] || !input[1] || !input[2] || !input[3]){
            cb("Please provide proper input as follows: <field> <id> <column name> <value>")
        }
        let queryUpd = 
        `
        UPDATE "${objInput.field}"
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
        
        if(!input[0] || !input[1] || !input[2]){
            cb("Please provide proper input as follows: <table name> <column name> <value>")
        }
        else{
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


}

module.exports = Model