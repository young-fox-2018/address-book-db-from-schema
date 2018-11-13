class View {
    static viewError() {
    }

    static viewData(id) {
        console.log(id);
        
    }

    static viewHelp() {
        console.log(`Available Syntax: \n 
        kontak <syntax. \n
        grup <syntax> \n
        \n
        Syntax list: \n
        create \n
        read \n
        update \n
        delete \n`);
        
    }
}

module.exports = View