const db = require('./database')


const qContact = `
  CREATE TABLE contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50),
    company VARCHAR(50),
    phone VARCHAR(13),
    email VARCHAR(50)
  )
`

const qgroups = `
    CREATE TABLE groups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      group_name VARCHAR(50)
    )
`

const qgc = `
  CREATE TABLE contact_group (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_id INTEGER,
    group_id INTEGER,
    FOREIGN KEY (contact_id) REFERENCES contacts(id),
    FOREIGN KEY (group_id) REFERENCES groups(id)

  )
`
db.serialize(function(err) {
  if(err){
    console.log(`Err di serialize : ${err}`)
  } else {
    db.run(qContact, function(err){
      if(err){
        console.log(`err di run` , err)
      } else {
        console.log(`Berhasil menambahkan tabel Contact.`)
      }
    })
    db.run(qgroups, function(err){
      if(err){
        console.log(`err di run` , err)
      } else {
        console.log(`Berhasil menambahkan tabel groups.`)
      }
    })
    db.run(qgc, function(err){
      if(err){
        console.log(`err di run` , err)
      } else {
        console.log(`Berhasil menambahkan tabel contact_group.`)
      }
    })
  }
})
db.close()