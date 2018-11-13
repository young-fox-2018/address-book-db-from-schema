
const argv = process.argv
const ContactController = require('./controllers/contactController')
const GroupController = require('./controllers/groupController')
const ContactGroupController = require('./controllers/contactGroupController')

switch (argv[2]) {
    case 'contacts':
        switch (argv[3]) {
            case 'createTable':
                ContactController.createTable()
                break;
            case 'add':
                ContactController.add(argv[4], argv[5], argv[6], argv[7])
                break;
            case 'addDummy':
                ContactController.readDummyData()
                break;
            case 'find':
                ContactController.findOne(argv[4], argv[5])
                break;
            case 'update':
                ContactController.update(argv[4], argv[5], argv[6], argv[7])
                break;
            case 'delete':
                ContactController.delete(argv[4], argv[5])
                break;
        }
        break;
    case 'groups':
        switch (argv[3]) {
            case 'createTable':
                GroupController.createTable()
                break;
        }
    case 'contactgroup':
        switch (argv[3]) {
            case 'createTable':
                ContactGroupController.createTable()
                break;
        }

}