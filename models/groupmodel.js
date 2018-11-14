const Model = require ('./model.js')

class Group {
  static create(table, data, cb) {
    const objData = {
      group_name: data[0],
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
    Model.update(table, data, "group_name", function(err, data) {
      if (err) {
        cb(err)
      }
      else {
        cb(null, data)
      }
    })
  }

  static delete(table, data, cb) {
    Model.findOne(table, {group_name:data[0]}, function(err, dataGroup) {
      if (err) {
        cb(err)
      }
      else {
        let groupId = dataGroup.id
        Model.delete("groups", {id: groupId}, function(err, data) {
          if (err) {
            cb(err)
          }
          else {
            Model.delete("contactgroup", {group_id: groupId}, function(err, data) {
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

module.exports = Group