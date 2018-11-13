const Controller = require('./Controllers/Controller')
const argv = process.argv.slice(2)

const cmd = argv[0].split(":")
const info = argv.slice(1)
Controller.execute(cmd, info)