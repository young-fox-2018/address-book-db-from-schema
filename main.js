const input = process.argv.slice(2)
const Controller = require('./Controllers/Controller')

switch (input[0]) {
    case 'add':
        switch (input[1]) {
            case 'contacts':
                Controller.addContact(input[1], input.slice(2))
                break;
            case 'group':
                Controller.addGroup(input[1], input.slice(2))
                break;
            case 'contactGroup':
                Controller.addContactGroup(input[2], input[3])
        }
        break;
    case 'update':
        switch (input[1]) {
            case 'contacts':
                Controller.updateContact(input[1], input[2], input[3], input[4])
                break;
            case 'group':
                Controller.updateGroup(input[1], input.slice(2))
                break;
            case 'contactGroup':
                Controller.updateContactGroup(input[2], input[3])
        }
        break;
    case 'delete':
        switch (input[1]) {
            case 'contacts':
                Controller.deleteContact(input[1], input[2])
                break;
            case 'group':
                Controller.updateGroup(input[1], input.slice(2))
                break;
            case 'contactGroup':
                Controller.updateContactGroup(input[2], input[3])
        }
        break;
    case 'show':
        switch (input[1]) {
            case 'contacts':
                Controller.showContact()

                break;

        }


    default:
        console.log(`Wellcome to db Contact!`)
        break;
}


