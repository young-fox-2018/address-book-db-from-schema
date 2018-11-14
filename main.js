const argv = process.argv.slice(2)
const Controller = require('./controllers/controller')

switch (argv[0]) {
  case "add": Controller.add(argv.slice(1));break;
  case "show": Controller.show(argv.slice(1));break;
  case "update": Controller.update(argv.slice(1));break;
  case "find": Controller.find(argv.slice(1));break;
  case "delete": Controller.delete(argv.slice(1));break;
  case "help": Controller.help();break;

  default: Controller.help();break;
}