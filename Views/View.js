class View{

    static displayError(err){
        console.log("Error")
        console.log(err)
    }
    
    static display(input){
        console.log(input)
    }

    static help(){
        console.log("Please provide the correct input!")
    }
}

module.exports = View