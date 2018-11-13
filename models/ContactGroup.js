const Model = require('./Model')

class ContactGroup extends Model {
    static addGroup (params, cb) {
        let registeredContact = false 
        let registeredGroup = false
        // console.log(params)

        Model.findOne('contact_group', {
            field: 'contactId',
            value: params.idContact
        }, function(err, data) {
            if (err) {
                cb(err)
            } else {
                if (data) {
                    Model.findOne('contact_group', {
                        field: 'groupId',
                        value: params.idGroup
                    }, function(err, data){
                        if (err) {
                            cb(err)
                        } else {
                            // console.log(data)
                            if (data) {
                                cb(`kontak sudah terdaftar pada group tersebut`)
                            } else {
                                Model.create('contact_group', [params.idContact, params.idGroup], function(err){
                                    if (err) {
                                        cb(err)
                                    } else {
                                        cb(null)
                                    }
                                })
                            }
                        }
                    })
                } else {
                    Model.create('contact_group', [params.idContact, params.idGroup], function(err){
                        if (err) {
                            cb(err)
                        } else {
                            cb(null)
                        }
                    })
                }
            }
        })
        
    }
}

module.exports = ContactGroup