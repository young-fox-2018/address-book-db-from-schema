
const View = require('../views/View.js')
const Group = require('../models/Groups.js')

class GroupController {
    static addGroup(input) {
        if (!input[0]) {
            View.printError('Missing input')
        } else {
            let group = {
                name : input[0]
            }

            Group.create('Groups', group, err => {
                if (err) {
                    View.printError(' Failed to add group')
                } else {
                    View.printData('Data successfully added')
                }
            })
        }
    }

    static getAllGroup() {
        Group.getAll('Groups', (err, rows) => {
            if (err) {
                View.printError('Failed to get contacts')
            } else {
                View.printData(rows)
            }
        })
    }

    static getOneGroup(data) {
        if (!data[0] || !data[1]) {
            View.printError('Missing inputs')
        } else {
            let group = {
                field : data[0],
                value : data[1]
            }

            Group.getOne('Groups', group, (err, row) => {
                if (err) {
                    View.printError('Failed to get group')
                } else {
                    View.printData(row)
                }
            })
        }  
    }

    static updateGroup(data) {
        if (!data[0] || !data[1] || !data[2]) {
            View.printError('Missing input')
        } else {
            let group = {
                id : data[0],
                field : data[1],
                value : data[2] 
            }
            
            Group.update('Groups', group, err => {
                if (err) {
                    View.printError('Failed to update group')
                } else {
                    View.printData(`Update group with group id : ${group.id} success`)
                }
            })
        }  
    }

    static deleteGroup(data) {
        if (!data[0] || !data[1]) {
            View.printError('Missing input')
        } else {
            let group = {
                field : data[0],
                value : data[1],
                field2 : 'groupId'
            }

            Group.delete('Groups', group, err => {
                if (err) {
                    View.printError(err)
                } else {
                    View.printData('Group successfully deleted')
                }
            })
        }
    }
}

module.exports = GroupController