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

}

module.exports = View