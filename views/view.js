class View{
  static display (msg , data){
    if(data !== null) {
      console.log(msg, data)
    } else {
      console.log(msg)
    }
  }
}

module.exports = View