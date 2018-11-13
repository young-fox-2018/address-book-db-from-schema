argv = process.argv.slice(2)
const Controller = require("./controllers/controller")

switch (argv[0]) {
    case "setup":
        Controller.setup()
        break;
    case "create":
        Controller.create(argv[1], argv.slice(2))
        break;
    case "findOne":
        Controller.findOne(argv[1], argv[2], argv[3]) // table, field, value
        break;
    case "find":
        Controller.find(argv[1])
        break;
    default:
        break;
}