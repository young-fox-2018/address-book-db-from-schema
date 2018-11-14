
const args = process.argv.slice(2);
const Controller = require("./Controller/controller.js")
const command = args[0];

switch(command) {
    case "addContact" :
        Controller.createContact(args[1], args[2], args[3], args[4])
    break;
    case "showContact" :
        Controller.showContacts()
    break;
    case "delete" :
    break;
    case "update" :
    break;
}