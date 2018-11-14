const Model = require("./model");

class Contacts extends Model{

    static create(input, cb){
        super.create("contacts", input, cb);
    }

    static readOne(input, cb){
        super.readOne("contacts", input, cb)
    }

    static readAll(input, cb){
        super.readAll("contacts", input, cb)
    }

    static delete(input, cb){
        super.delete("contacts", input, cb)
    }


}

module.exports = Contacts