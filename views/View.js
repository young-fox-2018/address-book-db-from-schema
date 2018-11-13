class View {

    static help() {
        console.log(`Address Book Beta Version`);
        console.log(`=========================`);
        console.log(`node setup ==> For create tables`);
        console.log(`node seed_data ==> Generate dummy datas`);
        console.log(`node main getAllContacts`);
        console.log(`node main getContact <field> <value>`);
        console.log(`node main addContact <contact_name> <company> <phone> <email>`);
        console.log(`node main updateContact <id_contact> <field> <value> [<field> <value>]`);                
    }

    static displayError(err) {
        console.log(err);
    }

    static displayAll(datas) {
        console.log(datas);
    }

    static displaySuccess(msg) {
        console.log(msg);
    }
}

module.exports = View;