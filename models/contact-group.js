const db = require('./../db')
const Model = require('./model')

class Groupcontacts extends Model{
    constructor(id_contact, id_group){
        this.id_contact = id_contact
        this.id_group = id_group
    }

}   

module.exports = Groupcontacts