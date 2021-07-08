const Controller = require('./controllers/controller')
const argv = process.argv.slice(2)

switch(argv[0]) {
    case ('create') :
        switch(argv[1]) {
            case ('contact') : Controller.createContact(argv.slice(2))
                break;
            case ('group') : Controller.createGroup(argv.slice(2))
                break;
            default : Controller.help()
                break;
        }
        break;
    case ('update') :
        switch(argv[1]) {
            case ('contact') : Controller.updateContact(argv.slice(2))
                break;
            case ('group') : Controller.updateGroup(argv.slice(2))
                break;
            default : Controller.help()
                break;
        }
        break;
    case ('delete') :
        switch(argv[1]) {
            case ('contact') : Controller.deleteContact(argv.slice(2))
                break;
            case ('group') : Controller.deleteGroup(argv.slice(2))
                break;
            default : Controller.help()
                break;
        }
        break;
    case ('show') : 
        switch(argv[1]){
            case('contact') : Controller.showContact()
                break;
            case('group') : Controller.showGroup()
                break;
            default : Controller.help()
        }
        break;
    case ('invite') : Controller.invite(argv.slice(1))
        break;
    case ('kick') : Controller.kick(argv.slice(1))
        break;
    default : Controller.help()
        break;
}
