class View {
    static displayErr(data){
        console.log(data)
    }
    static displaysuccess(data){
        if(data !== null){
            console.log(data)
        }
    }
}
module.exports = View