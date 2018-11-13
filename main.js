const argv = process.argv.slice(2)
const Controller = require('./controllers/Controller')


// console.log(argv)

switch (argv[0]) {
    case 'create':
        Controller.create(argv[1], argv.slice(2))
        break;
    case 'update':
        Controller.update(argv[1], {
            id: argv[2],
            field: argv[3],
            value: argv[4]
        })
        break
    case 'addGroup':
        Controller.addGroup({
            nameContact: argv[1],
            nameGroup: argv[2]
        })
        break;
    case 'show':
        Controller.show(argv[1],{
            field: argv[2],
            value: argv[3]
        })
        break
    case 'delete':
        Controller.delete(argv[1], {
            field: argv[2],
            value: argv[3]
        })
        break
    default:
        Controller.help()
        break;
}