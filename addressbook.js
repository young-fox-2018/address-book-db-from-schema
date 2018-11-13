const ContactController = require('./controllers/ContactController')
const inp = process.argv.slice(2)

switch (inp[0]) {
    case "contact":
        switch (inp[1]) {
            case 'findAll':
                ContactController.findAll()
                break;
            case 'findOne':
                ContactController.findOne(inp.slice(2))
                break;
            case 'create':
                ContactController.create(inp.slice(2))
                break;
            case 'update':
                ContactController.update(inp.slice(2))
                break;
            default:
                break;
        }
        break;
    default: console.log('input salah')
        break;
}
