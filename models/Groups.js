const Model = require('./Model')

class Groups extends Model {
    static findGroup (table, params, cb) {
        // console.log(table, '==========')
        // console.log(params)
        
        let query = 
        `
        select G.nama nama_group, C.nama nama_contact from ${table} as G
        inner join contact_group as CG on CG.groupId = G.id
        inner join contacts as C on C.id = CG.contactId
        where G.${params.field} = '${params.value}'
        `
        
        Model.findAll(query, function(err, data){
            if (err) {
                cb(err)
            } else {
                cb(null, data)
            }
        })
    }
}

module.exports = Groups