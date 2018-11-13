const Model = require("./model");

class ContactsGroups extends Model{

    static create(input, cb){
        super.create("contactsGroup", input, cb);
    }

    static readOne(input, cb){
        super.readOne("contactsGroup", input, cb)
    }

    static readAll(input, cb){
        super.readAll("contactsGroup", input, cb)
    }
}

module.exports = ContactsGroups