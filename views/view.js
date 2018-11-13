class View {
        static printError(err) {
            console.log(`ERROR: ${err}`)
        }

        static printLine(message) {
            console.log(`${message}`)
        }
        static print(input) {
           console.log(input) 
        }

}

module.exports = View