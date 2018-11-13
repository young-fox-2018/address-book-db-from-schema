const Controller = require("./Controllers/Controller.js")
const View = require("./Views/View.js")
const argv = process.argv.slice(2)
const command = argv[0]
const options = argv.slice(1)

switch (command) {
    case "create":
        Controller.create(options)
        break;
    case "invite":
        Controller.invite(options)
        break;
    case "findOne":
        Controller.findOne(options)
        break;
    case "findAll":
        Controller.findAll(options)
        break;
    case "show":
        Controller.show(options)
        break;
    case "delete":
        Controller.delete(options)
        break;
    case "help":
        View.help()
        break;
    default:
        View.help()
        break;
}