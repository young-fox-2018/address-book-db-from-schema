const Controller = require('./controllers/controller')
const argv = process.argv(2)

switch(argv[0]) {
    case ('createContact') : Controller.createContact(argv.slice(1))
        break;
    case ('updateContact') : 
        break;
    case ('deleteContact') : 
        break;
    case ('showContact') : 
        break;
    case ('createGroup') : 
        break;
    case ('updateGroup') : 
        break;
    case ('deleteGroup') : 
        break;
    case ('showGroup') : 
        break;
    default : Controller.help()
        break;
}
