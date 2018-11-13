const Model = require('../models/Model')
const ContactGroup = require('../models/ContactGroup')
const Contacts = require('../models/Contacts')
const Group = require('../models/Groups')
const View = require('../views/View')

class Controller {

    static checkingEmail (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    static create(table, params) {

        if (params[2].length >= 10 && params[2].length <= 13) {
            if (Controller.checkingEmail(params[3])) {


                    if (table === 'contacts') {
                        if (params.length !== 4) {
                            View.displayErr(
                            `
                format yang benar untuk create contact :
                create contacts <name> <perusahaan> <nomor hp> <email>
                            `
                                )
                        } else {
                            Model.findOne(table, {
                                field: 'email',
                                value: params[3]
                            }, function(err, data){
                                if (err) {
                                    View.displayErr(err)
                                } else {
                                    // console.log(data)
                                    if (data) {
                                        View.displayErr({
                                            message: `email ${data.email} telah digunakan`
                                        })
                                    } else {
                                        Model.create(table, params, function(err){
                                            if (err) {
                                                View.displayErr(err)
                                            } else {
                                                View.displayMsg(`contact ${params[0]} berhasil dibuat`)
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    } else if (table === 'groups') {
                        // console.log(table)
                        // console.log(params)
                        if (params.length !== 1) {
                            View.displayErr(
                                `
                    format yang benar untuk create groups :
                    create groups <nama group>
                                `
                                    )
                        } else {
                            Model.findOne(table, {
                                field: 'nama',
                                value: params[0]
                            }, function(err, data){
                                if (err){
                                    View.displayErr(err)
                                } else {
                                    if (data) {
                                        View.displayErr(`nama group ${params[0]} sudah digunakan`)
                                    } else {
                                        Model.create(table, params, function(err){
                                            if (err) {
                                                View.displayErr(err)
                                            } else {
                                                View.displayMsg(`nama group ${params[0]} berhasil dibuat`)
                                            }
                                        })
                                    }
                                }
                            })
                        }

                    } else {
                        View.displayErr('table tidak ditemukan')
                    }
            } else {
                View.displayErr('input email salah')
            }
        } else {
            View.displayErr('input nomor hp salah')
        }
    


        

    }

    static update(table, params) {
        console.log(table == 'contacts')
        if (table == 'contacts' || table == 'groups') {

            if (params.id != undefined && params.field != undefined && params.value != undefined) {
                Model.findOne(table, {
                    field: 'id',
                    value: params.id
                }, function(err, data) {
                    if (err) {
                        View.displayErr(err)
                    } else {
                        if (data) {
                            // console.log(data)
                            Model.update(table, params, function(err) {
                                if (err) {
                                    View.displayErr(err)
                                } else {
                                    View.displayMsg(`id ${params.id} pada table ${table} berhasil di update`)
                                }
                            })
                        } else {
                            View.displayErr(`id ${params.id} pada table ${table} tidak ditemukan`)
                        }
                    }
                })
            } else {
                View.displayErr(`
    format yang benar untuk update data:
    update ${table} <id> <field> <value>
                `)
            }

        } else {
            View.displayErr(`table ${table} tidak ditemukan`)
        }
        
    }

    static addGroup(params) {
        if (params.nameContact != undefined &&
            params.nameGroup != undefined) {

                // ContactGroup.addGroup(params)
                Model.findOne('contacts' ,{
                    field: 'nama',
                    value: params.nameContact
                }, function(err, data){
                    if (err) {
                        View.displayErr(err)
                    } else {
                        if (data) {
                            let dataContact = data
                            // console.log(data)
                            Model.findOne('groups', {
                                field: 'nama',
                                value: params.nameGroup
                            }, function(err, data){
                                if (err) {
                                    View.displayErr(err)
                                } else {
                                    if (data) {
                                        let dataGroup = data

                                        // console.log(dataContact)
                                        // console.log(dataGroup)
                                        ContactGroup.addGroup({
                                            idContact: dataContact.id,
                                            idGroup: dataGroup.id
                                        }, function(err){
                                            if (err) {
                                                View.displayErr(err)
                                            } else {
                                                View.displayMsg(`${params.nameContact} berhasil ditambahkan ke group ${params.nameGroup}`)
                                            }
                                        })
                                    } else {
                                        View.displayErr(`tidak ada ${params.nameGroup} pada groups`)
                                    }
                                }
                            })

                        } else {
                            View.displayErr(`tidak ada ${params.nameContact} pada contacts`)
                        }
                    }
                })

        } else {
            View.displayErr(`
    format yang benar untuk addGroup:
    addGroup <nama contact> <nama group>
            `)
        }
    }

    static show (table, params) {
        // console.log(table)
        // console.log(params)
        
 
        if (table === 'contacts') {
            // console.log('table contact')
            Contacts.findContact(table, params, function(err, data){
                if (err) {
                    View.displayErr(err)
                } else {
                    // console.log(data)
                    View.displayMsg(data)
                }
            })
        } else if (table === 'groups') {
            Group.findGroup(table, params, function(err, data) {
                if (err) {
                    View.displayErr(err)
                } else {
                    View.displayMsg(data)
                }
                })
        } else {
            View.displayErr('table not found')
        }
        
    }

    static delete (table, params) {
        // console.log(table, params)
        if (params.field != undefined && params.value != undefined) {
            if (table === 'contacts') {
                Model.findOne(table, params, function(err, data) {
                    if (err) {
                        View.displayErr(err)
                    } else {
                        if (data) {
                            Contacts.deleteContact({
                                field: 'id',
                                value: data.id
                            }, function(err) {
                                if (err) {
                                    View.displayErr (err)
                                } else {
                                    View.displayMsg(`berhasil menghapus contact ${params.value}`)
                                }
                            })
                        } else {
                            View.displayErr(`${params.value} tidak ada pada table ${table}`)
                        }
                        
                    }
                })
            } else if (table === 'groups'){
                Model.findOne(table, params, function(err, data) {
                    if (err) {
                        View.displayErr(err)
                    } else {
                        if (data) {
                            Group.deleteGroup({
                                field: 'id',
                                value: data.id
                            }, function(err) {
                                if (err) {
                                    View.displayErr(err)
                                } else {
                                    View.displayMsg(`berhasil menghapus group ${params.value}`)
                                }
                            })
                        } else {
                            View.displayErr(`${params.value} tidak ada pada table ${table}`)
                        }
                    }

                })
            } else {
                View.displayErr('table not found')
            }
        } else {
            View.displayErr('input delete salah')
        }
    }

    static help () {
        View.displayMsg(`
        undefined command, follow this tips:

        1. create <table> <value1> <value2> ....
        2. update <table> <id> <field> <value>
        3. addGroup <contact name> <group name>
        4. show <table> <field> <value>  (if field and value empty will show all)
        5. delete <table> <field> <value>
        `)
    }
}


module.exports = Controller