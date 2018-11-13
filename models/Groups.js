const Model = require('./Model')

class Groups extends Model {
    static findGroup (table, params, cb) {
        // console.log(table, '==========')
        // console.log(params)
        let query = ''

        if (params.field && params.value) {
            query = 
            `
            select G.nama nama_group, C.nama nama_contact from ${table} as G
            left join contact_group as CG on CG.groupId = G.id
            left join contacts as C on C.id = CG.contactId
            where G.${params.field} = '${params.value}'
            `
        } else {
            query = 
            `
            select G.nama nama_group, C.nama nama_contact from ${table} as G
            left join contact_group as CG on CG.groupId = G.id
            left join contacts as C on C.id = CG.contactId
            `
        }

        
        Model.findAll(query, function(err, data){
            if (err) {
                cb(err)
            } else {
                cb(null, data)
            }
        })
    }

    static deleteGroup (params, cb) {
        // console.log(params)
        let query =
        `
        delete from groups 
        where ${params.field} = '${params.value}'
        `

        Model.execQuery(query, function(err){
            if (err) {
                cb(err)
            } else {
                let query = 
                `
                delete from contact_group
                where groupId = ${params.value}
                `

                Model.execQuery(query, function(err){
                    if (err) {
                        cb(err)
                    } else {
                        cb(null)
                    }
                })
            }
        })


    }
}

module.exports = Groups