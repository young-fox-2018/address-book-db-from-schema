const Contact = require ('../models/contactmodel.js')
const View = require ('../view.js')

class ControllerContact {
  static create(table, data) {
    Contact.create(table, data, function(err, data) {
      if (err) {
        View.error(err)
      }
      else {
        View.success(`sukses menyimpan kontak ${data.name}`)
      }
    })
  }

  static read(table, data) {
    Contact.read(table, data, function(err, data) {
      if (err) {
        View.error(err)
      }
      else {
        View.success(JSON.stringify(data))
      }
    })
  }

  static update(table, data) {
    Contact.update(table, data, function(err, data) {
      if (err) {
        View.error(err)
      }
      else {
        if (data.changes === 0) {
          View.success(`update gagal, ada sesuatu yang salah`)
        }
        else {
          View.success(`berhasil update data`)
        }
      }
    })
  }

  static delete(table, data) {
    Contact.delete(table, data, function(err, data) {
      if (err) {
        View.error(err)
      }
      else {
        if (data.changes != 0) {
          View.success(`berhasil menghapus contact`)
        }
        else {
          View.success(`gagal menghapus contact`)
        }
      }
    })
  }
}

module.exports = ControllerContact