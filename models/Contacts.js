const Model = require('./Model')

class Contacts extends Model {
    static findContact (table, params, cb) {
        // console.log(table, '======')
        // console.log(params)
        let query = `
        select a.nama nama_contact, c.nama nama_group from ${table} as a
        inner join contact_group as b on a.id = b.contactId
        inner join groups as c on b.groupId = c.id
        where a.${params.field} = '${params.value}'
        `

        Model.findAll(query, function(err, data){
            if (err) {
                cb(err)
            } else {
                cb(null, data)
            }
        })
        // console.log(query)
    }
}

module.exports = Contacts