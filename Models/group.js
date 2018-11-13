const Model = require("./model");

class Groups extends Model{

    static create(input, cb){
        super.create("groups", input, cb);
    }

    static readOne(input, cb){
        super.readOne("groups", input, cb)
    }

    static readAll(input, cb){
        super.readAll("groups", input, cb)
    }

    static delete(input, cb){
        super.delete("groups", input, cb)
    }
}

module.exports = Groups