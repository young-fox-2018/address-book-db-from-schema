const ContactGroup = require ('../models/contactgroupmodel.js')
const View = require ('../view.js')

class ControllerContactGroup {
  static create(table, data) {
    ContactGroup.create(table, data, function(err, data) {
      if (err) {
        View.error(err)
      }
      else {
        View.success(`sukses menambahkan ${data[0]} kedalam ${data[1]}`)
      }
    })
  }

  static read() {
    ContactGroup.read(function(err, data) {
      if (err) {
        View.error(err)
      }
      else {
        View.success(data)
      }
    })
  }
}

module.exports = ControllerContactGroup