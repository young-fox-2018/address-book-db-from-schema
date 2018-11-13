class View {
    static displayErr (err) {
        console.log('=======================')
        console.log('terjadi error: ')
        console.log('=======================')
        console.log(err)
    }

    static displayMsg (data) {
        console.log(data)
    }
}

module.exports = View