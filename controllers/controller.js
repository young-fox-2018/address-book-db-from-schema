const Model = require('../models/model')
const Contact = require('../models/contact')
const Group = require('../models/group')
const ContGroup = require('../models/contact-group')
const View = require('../views/view')

class Controller {

  static add(data) {
    if(data[0].toLowerCase() === 'contact'){
      if(data.length !== 5) {
        View.display(`Please input name, company , phone and email!`)
      } else {
        Contact.addContact({name: data[1] , company: data[2] , phone: data[3] , email: data[4]} , function(err){
          if(err){
            View.display(`Err di addContact :` , err)
          } else {
            View.display(`Success add data into Contact` , null)
          }
        })
      }
    } else if(data[0].toLowerCase() === 'group') {
      if(data.length !== 2) {
        View.display(`Please input name !`)
      } else {
        Group.addGroup({group_name: data[1]} , function(err){
          if(err){
            View.display(`Err di addGroup :` , err)
          } else {
            View.display(`Success add data into Groups` , null)
          }
        })
      }
    } else if(data[0].toLowerCase() === 'contact_group') {
      if(data.length !== 3) {
        View.display(`Please input contact_id and group_id !`)
      } else {
        ContGroup.addContGroup({contact_id: data[1], group_id: data[2]} , function(err){
          if(err){
            View.display(`Err di add contact_group :` , err)
          } else {
            View.display(`Success add data into contact_groups`, null)
          }
        })
      }
    }
  }

  static show(table) {
    if(table[0] == 'groups' || table[0] == 'contact_group'){
      Model.findAll(table[0], function(err, rows) {
        if(err){
          View.display(`Err in showing file` , err)
        } else {
          View.display(`Success showing data :` , rows)
        }
      })
    } else if( table[0] == 'contacts') {
      Model.findAll(`(SELECT name , company , phone , email , group_concat(groups.group_name) AS "groups_name" FROM (SELECT * FROM contacts LEFT  JOIN  contact_group ON contact_group.contact_id = contacts.id) AS table1
      LEFT JOIN groups ON table1.group_id = groups.id GROUP BY table1.name )`,function(err, rows) {
        if(err){
          View.display(`Err in sowing file`, err)
        } else {
          View.display(`Success showing :` , rows)
        }
      })
    } else {
      View.display(`No such table!`)
    }
  }

  static update(data){
    let table = data[0]
    let info = {
      field:data[1],
      value: data[2],
      field2: data[3],
      value2: data[4]
    }
    Model.update(table , info , function(err) {
      if(err) {
        View.display(`Err in updating` , err)
      } else {
        View.display(`Success update :` , table)
      }
    })
  }

  static find(data) {
    let table = data[0]
    let info = {
      field: data[1],
      value: data[2]
    }
    if (table !== 'contacts'){
      Model.findOne(table, info , function(err,row) {
        if(err) {
          View.display(`Err in finding data` , err) 
        } else {
          if(row == undefined) {
            View.display(`There is no such data` , null)
          } else {
            View.display(`Success getting one data :` , row)
          }
        }
      })
    } else if(table == 'contacts') {
      Model.findOne(`(SELECT name , company , phone , email , group_concat(groups.group_name) AS "groups_name" FROM (SELECT * FROM contacts LEFT  JOIN  contact_group ON contact_group.contact_id = contacts.id) AS table1
      LEFT JOIN groups ON table1.group_id = groups.id GROUP BY table1.name )` , info,function(err,row){
        if(err){
          View.display(`Err in finding data`, err)
        } else {
          if(row == undefined){
            View.display(`There is no such data`)
          } else {
            View.display(`Success finding contact`, row)

          }
        }
      })
    }
  
  }

  static delete(data){
    let table = data[0]
    let info = {
      field: data[1],
      value: data[2]
    }

    Model.delete(table, info , function(err) {
      if(err) {
        View.display(`Err in delete` , err)
      } else {
        View.display(`Success deleting data from :` , table)
      }
    })
  }

  static help() {
    View.display(`
      AVAILABLE COMMAND FORMAT \n
      table name = contacts, groups ,contact_group
      add <table-name> <data that need to be added \n
      show <table-name> \n
      update <table-name> <column-name> <new-value> <place> <place-value>\n
      find <table-name> <column-name> <value>\n
      delete  <table-name> <column-name> <value>
    `, null)
  }
}

module.exports = Controller