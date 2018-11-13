const Model = require("./model");

class ContactsGroups extends Model{

    static create(input, cb){
        super.create("contactsGroups", input, cb);
    }

    static readOne(input, cb){
        super.readOne("contactsGroups", input, cb)
    }

    static readAll(input, cb){
        super.readAll("contactsGroups", input, cb)
    }

    static delete(input, cb){
        super.delete("contactsGroups", input, cb)
    }
}

module.exports = ContactsGroups