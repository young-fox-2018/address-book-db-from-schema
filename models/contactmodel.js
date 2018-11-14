const Model = require ('./model.js')

class Contact {
  static create(table, data, cb) {
    const objData = {
      name: data[0],
      company: data[1],
      phone_number: data[2],
      email: data[3]
    }
    Model.create(table, objData, function(err, data) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, data)
      }
    })
  }

  static read(table, data, cb) {
    Model.findAll(table, data, function(err, data) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, data)
      }
    })
  }

  static update(table, data, cb) {
    Model.update(table, data, "name", function(err, data) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, data)
      }
    })
  }

  static delete(table, data, cb) {
    Model.findOne(table, {name:data[0]}, function(err, dataContact) {
      if (err) {
        cb(err)
      }
      else {
        let contactId = dataContact.id
        Model.delete("contacts", {id: contactId}, function(err, data) {
          if (err) {
            cb(err)
          }
          else {
            Model.delete("contactgroup", {contact_id: contactId}, function(err, data) {
              if (err) {
                cb(err)
              }
              else {
                cb(null, data)
              }
            })
          }
        })
      }
    })
  }
}

module.exports = Contact