const Controller = require('../Controllers/Controller')


class View {
    static showError(err) {
        console.log(err)
    }
    static showData(input) {
        console.log(input)
    }
}
module.exports = View