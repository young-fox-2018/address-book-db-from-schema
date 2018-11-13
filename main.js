const argv = process.argv.slice(2)
const command = argv[0]
const option = argv.slice(1)

const Controller = require('./Controllers/Controller')

switch (command) {
    case 'create':
        Controller.create(option)
        break;

    case 'listAll':
        Controller.readAll(option)
        break;
         
    case 'listOne':
        Controller.readOne(option)

    case 'update':
        Controller.update(option)

    case 'delete':
        Controller.delete(option)

    default:
        break;
}
