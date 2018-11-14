const argv = process.argv.slice(2)
const Controller = require('./Controllers/Controller')
options =  argv.slice(1)

switch (argv[0]) {
    case "create": 
    Controller.create(options)
        break;
    case "show" :
    Controller.show(options)
        break;
    case "update":
    Controller.update(options)
        break;
    case "delete":
    Controller.delete(options)
        break;
    case "find" :
    Controller.find(options)
        break;
    case "help":
    Controller.help()
        break;
    default: Controller.help()
        break;
}
