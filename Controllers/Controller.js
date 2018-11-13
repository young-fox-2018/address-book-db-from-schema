const Contact = require('../Models/Contact')
const Group = require('../Models/Group')
const ContactGroup = require('../Models/Contact-group')
const View = require('../Views/View')
const Model = require('../Models/Model')

class Controller {

    static create (option) {
        if(option[0] === 'contacts') {
            Contact.create(option[1], option[2], option[3], option[4], function(err, data) {
                if(err) {
                    View.errDisplay(err)
                } else {
                    Contact.findOne({
                        table: 'contacts',
                        field: 'id',
                        value: data.lastID
                    }, function(err, data) {
                        if(err) {
                            View.errDisplay(err)
                        } else {
                            View.successCreate(data)
                        }
                    })
                }
            })
        } else if(option[0] === 'groups') {
            Group.create(option[1], function(err, data) {
                console.log("ini apa ", data)
                if(err) {
                    View.errDisplay(err)
                } else {
                    Group.findOne({
                        table: 'groups',
                        field: 'id',
                        value: data.lastID
                    }, function(err, data) {
                        if(err) {
                            View.errDisplay(err)
                        } else {
                            View.successCreate(data)
                        }
                    })
                }
            })
        } else if(option[0] === 'contact_group') {
            Contact.findOne({
                table: "contacts",
                field: 'name',
                value: option[1]
            }, function(err, data) {
                if(err) {
                    View.errDisplay(err)
                } else {
                    if(!data) {
                        View.errDisplay(`nama contact tidak ada`)
                    } else {
                        let contactData = data
                        Group.findOne({
                            table: 'groups',
                            field: 'name',
                            value: option[2]
                        }, function(err, data) {
                            if(err) {
                                View.errDisplay(err)
                            } else {
                                if(!data) {
                                    View.errDisplay(`nama group tidak ada`)
                                } else {
                                    let groupData = data
                                    ContactGroup.create(contactData.id, groupData.id, function(err, data) {
                                        if(err) {
                                            View.errDisplay(err)
                                        } else {
                                            View.successCreateCG(contactData.name, groupData.name)
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            })
        }
        
    } 

    static readAll (option) {
        Contact.findAll({
            table: option[0]
        }, function(err, data) {
            if(err) {
                View.errDisplay(err)
            } else {
                View.displayList(data)
            }
        })
    }

    static readOne (option) {
        Model.findOne({
            table: option[0],
            field: 'name',
            value: option[1]
        }, function(err, data) {
            if(err) {
                View.errDisplay(err)
            } else {
                if(!data) {
                    View.errDisplay(`data tidak di temukan`)
                } else {
                    View.displayList(data)
                }
            }
        })
    }

    static update (option) {
        Model.update({
            table: option[0],
            field: option[2],
            value: option[3],
            name: option[1]
        }, function(err) {
            if(err) {
                View.errDisplay(err)
            } else {
                View.successUpdate(option[1])
            }
        })
    }

    static delete (option) {
        Model.findOne({
            table: option[0],
            field: 'name',
            value: option[1]
        }, function(err, data) {
            if(err) {
                View.errDisplay(err)
            } else {
                if(!data) {
                    View.errDisplay(`data tidak ditemukan`)
                } else {
                    let tempData = data
                    Model.delete({
                        table: option[0],
                        field: 'name',
                        value: option[1]
                    }, function(err, data) {
                        if(err) {
                            View.errDisplay(err)
                        } else {
                            if(option[0] === 'contacts') {
                                Model.delete({
                                    table: 'contact_group',
                                    field: 'contact_id',
                                    value: tempData.id
                                }, function(err, data) {
                                    if(err) {
                                        View.errDisplay(err)
                                    } else {
                                        View.deleteDisplay(tempData.name)
                                    }
                                })
                            } else if(option[0] === 'groups'){
                                Model.delete({
                                    table: 'contact_group',
                                    field: 'group_id',
                                    value: tempData.id
                                }, function(err, data) {
                                    if(err) {
                                        View.errDisplay(err)
                                    } else {
                                        View.deleteDisplay(tempData.name)
                                    }
                                })
                            }
                        }
                    })
                }
            }
        })
    }

    static help () {
        View.help()
    }

}

module.exports = Controller