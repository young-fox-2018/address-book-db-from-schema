const Model = require('./Model')

class Contacts extends Model {
    static findContact (table, params, cb) {
        // console.log(table, '======')
        // console.log(params)
        let query = ''

        if (params.field && params.value) {
            query = `
            select a.nama nama_contact, c.nama nama_group from ${table} as a
            left join contact_group as b on a.id = b.contactId
            left join groups as c on b.groupId = c.id
            where a.${params.field} = '${params.value}'
            `
        } else {
            query = `
            select a.nama nama_contact, c.nama nama_group from ${table} as a
            left join contact_group as b on a.id = b.contactId
            left join groups as c on b.groupId = c.id
            `
        }

        
        
        // console.log(query)
        Model.findAll(query, function(err, data){
            if (err) {
                cb(err)
            } else {

                cb(null, data)
            }
        })
        // console.log(query)
    }

    static deleteContact(params, cb) {
        // console.log(params)

        let query =
        `
        delete from contacts 
        where ${params.field} = '${params.value}'
        `

        Model.execQuery(query, function(err){
            if (err) {
                cb(err)
            } else {
                let query = `
                delete from contact_group
                where contactId = '${params.value}'
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

module.exports = Contacts