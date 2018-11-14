const ControllerContact = require('./controllers/controllerContact')
const ControllerGroup = require('./controllers/controllerGroup')
const ControllerContactGroups = require('./controllers/controllerContactGroups')
const argv = process.argv.slice(2)

switch (argv[0]) {
    case 'setup':
        ControllerContact.setup()
        break

    case 'contact':
        switch (argv[1]) {
            case 'create':
                ControllerContact.createContact(argv[2], argv[3], argv[4], argv[5]) // name, phone, email, company
                break
                
            case 'showContact':
                ControllerContact.showContacts()
                break
            
            case 'findOne':
                ControllerContact.findOneContact(argv[2], argv[3]) // field, value
                break

            case 'update':
                ControllerContact.updateContact(argv[2], argv[3], argv[4]) // contact ID, field, new value
                break

            case 'delete':
                ControllerContact.deleteContact(argv[2]) // contact ID
                break
            
            case 'joinGroup':
                ControllerContactGroups.createContactGroups(argv[2], argv[3]) // email, group name
                break

            default:
                break
        }
        break
    
    case 'group':
        switch (argv[1]) {
            case 'create':
                ControllerGroup.createGroup(argv[2]) // name
                break
            case 'showGroup':
                ControllerGroup.showGroups()
                break

            case 'findOne':
                ControllerGroup.findOneGroup(argv[2], argv[3]) // field, value
                break
            
            case 'update':
                ControllerGroup.updateGroup(argv[2], argv[3], argv[4]) // contact ID, field, new value
                break

            case 'delete':
                ControllerGroup.deleteGroup(argv[2]) // group ID
                break

            default:
                break
        }   
        break
    default:
        break
}
