const Model = require('./model')
const db = require('../database')

class Contact extends Model{

  static addContact(param , cb) {
    super.create('contacts', param , function(err) {
      if(err){
        cb(err)
      } else {
        cb(null)
      }
    })
  }
//   SELECT * FROM (SELECT name , company , phone , email , group_concat(groups.group_name) AS "groups_name" FROM (SELECT * FROM contacts JOIN  contact_group ON contact_group.contact_id = contacts.id) AS table1
// JOIN groups ON table1.group_id = groups.id GROUP BY table1.name ) WHERE name = "venecia"


// SELECT name , company , phone , email , group_concat(groups.group_name) AS "groups_name" FROM (SELECT * FROM contacts LEFT  JOIN  contact_group ON contact_group.contact_id = contacts.id) AS table1
// LEFT JOIN groups ON table1.group_id = groups.id GROUP BY table1.name 

  static show(cb) {
    db.all(`SELECT name , company , phone , email , group_concat(groups.group_name) AS "groups_name" FROM (SELECT * FROM contacts LEFT  JOIN  contact_group ON contact_group.contact_id = contacts.id) AS table1
    LEFT JOIN groups ON table1.group_id = groups.id GROUP BY table1.name `, function(err, rows){  
      if(err) {
        cb(err)
      } else {
        cb(null,rows)
      }
    })
  }

  static find (cb) {
    db.get
  }
}


module.exports = Contact