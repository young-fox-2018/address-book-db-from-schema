class View {

    static errDisplay (err) {
        console.log(err)
    }

    static successCreate (data) {
        console.log(`berhasil menambah data dengan nama ${data.name}`)
    }

    static successUpdate (data) {
        console.log(`berhasil update data dengan nama ${data}`)
    }

    static successCreateCG (contactName, groupName) {
        console.log(`berhasil memasukan ${contactName} ke dalam ${groupName}`)
    }

    static displayList (data) {
        console.log(data)
    }

    static deleteDisplay (data) {
        console.log(`berhasil menghapus data ${data}`)
    }

    static help () {
        console.log(
            `
            =================================================================================
            $ node main.js create <contacts/groups/contact_group> <option>
            $ node main.js listAll <contacts/groups/contact_group>
            $ node main.js listOne <contacts/groups> <name>
            $ node main.js update <contacts/groups> <name> <column to change> <change value>
            $ node main.js delete <contacts/groups>
            ==================================================================================
            `
        )
    }

}

module.exports = View