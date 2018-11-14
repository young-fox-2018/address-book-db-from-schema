const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');
const Model = require ('./model.js')

class ContactGroup {
  static create(table, data, cb) {
    Model.findOne("contacts",{name:data[0]}, function(err, dataContact) {
      if (err) {
        cb(err)
      }
      else {
        let contactId = dataContact.id
        Model.findOne("groups",{group_name:data[1]}, function(err, dataGroup) {
          if (err) {
            cb(err)
          }
          else {
            let groupId = dataGroup.id
            Model.create(table, {contact_id: contactId, group_id: groupId}, function(err, dataCreateTable) {
              if (err) {
                cb(err)
              }
              else {
                cb(null,data)
              }
            })
          }
        })
      }
    })
  }

  static read(cb) {
    let query = `
    SELECT contacts.name, groups.group_name
    FROM contactgroup
    JOIN contacts ON contact_id = contacts.id
    JOIN groups ON group_id = groups.id`

    db.all(query, function(err, rows) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, rows)
      }
    })
  }

}

module.exports = ContactGroup