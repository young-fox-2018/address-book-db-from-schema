const Group = require ('../models/groupmodel.js')
const View = require ('../view.js')

class ControllerGroup {
  static create(table, data) {
    Group.create(table, data, function(err, data) {
      if (err) {
        View.error(err)
      }
      else {
        View.success(`sukses menyimpan group ${data.group_name}`)
      }
    })
  }

  static read(table, data) {
    Group.read(table, data, function(err, data) {
      if (err) {
        View.error(err)
      }
      else {
        View.success(JSON.stringify(data))
      }
    })
  }

  static update(table, data) {
    Group.update(table, data, function(err, data) {
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
    Group.delete(table, data, function(err, data) {
      if (err) {
        View.error(err)
      }
      else {
        if (data.changes != 0) {
          View.success(`berhasil menghapus group`)
        }
        else {
          View.success(`gagal menghapus group`)
        }
      }
    })
  }
}

module.exports = ControllerGroup