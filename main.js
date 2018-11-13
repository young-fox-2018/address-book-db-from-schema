const Controller = require("./Controllers/controller");
const command = process.argv[2]
const option = process.argv.slice(3);

Controller.execute(command, option)
