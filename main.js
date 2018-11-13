const argv = process.argv.slice(2)
const Controller = require('./controllers/Controller')

switch (argv[0]) {
    case 'create':
        Controller.create(argv.slice(1))
        break;

    default:
        break;
}