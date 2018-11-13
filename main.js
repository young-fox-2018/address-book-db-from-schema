"use strict"
const ContactController = require('./controllers/contactsController.js')
const GroupController = require('./controllers/groupsController.js')
const ContactGroupController = require('./controllers/contactGroupsController.js')
const argv = process.argv.slice(2)

switch (argv[0]) {
    case 'addContact':
        ContactController.addContact(argv.slice(1))
        break
    case 'getAllContacts':
        ContactController.getAllContacts()
        break
    case 'getOneContact':
        ContactController.getOneContact(argv.slice(1))
        break
    case 'updateContact':
        ContactController.updateContact(argv.slice(1))
        break
    case 'deleteContact':
        ContactController.deleteContact(argv.slice(1))
        break
    case 'addGroup':
        GroupController.addGroup(argv.slice(1))
    break
    case 'getAllGroup':
        GroupController.getAllGroup()
        break
    case 'getOneGroup':
        GroupController.getOneGroup(argv.slice(1))
        break
    case 'updateGroup':
        GroupController.updateGroup(argv.slice(1))
        break
    case 'deleteGroup':
        GroupController.deleteGroup(argv.slice(1))
        break
    case 'addContactGroup':
        ContactGroupController.createContactGroup(argv.slice(1))
    break
    case 'updateContactGroup':
        ContactGroupController.updateContactGroup(argv.slice(1))
        break
}
