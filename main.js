const argv = process.argv.slice(2)
const ContactController = require('./controllers/ContactController')
const GroupController = require('./controllers/GroupController')
const ContactGroupController = require('./controllers/ContactGroupController')

switch (argv[0]) {
    case "contact":
        switch (argv[1]) {
            case "create":
                ContactController.create(argv[2], argv[3], argv[4], argv[5])
                break;

            case "update":
                ContactController.update(argv[2], argv[3], argv[4], argv[5])
                break;

            case "delete":
                ContactController.delete(argv[2], argv[3])
                break;

            case "showContact":
                ContactController.showContact()
                break;
        
            default:
                ContactController.help()
                break;
        }
        break;

    case "group":
        switch (argv[1]) {
            case "create":
                GroupController.create(argv[2])
                break;

            case "update":
                GroupController.update(argv[2], argv[3], argv[4], argv[5])
                break;

            case "delete":
                GroupController.delete(argv[2], argv[3])
                break;

            case "showGroup":
                GroupController.showGroup()
                break;
        
            default:
                ContactController.help()
                break;
        }
        break;

    case "contactGroup":
        switch (argv[1]) {
            case "create":
                ContactGroupController.create(argv[2], argv[3])
                break;

            case "delete":
                ContactGroupController.delete(argv[2], argv[3])
                break;

            case "show":
                ContactGroupController.show()
                break;
        
            default:
                ContactController.help()
                break;
        }
        break;

    default:
        ContactController.help()
        break;
}