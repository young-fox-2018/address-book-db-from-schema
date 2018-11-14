class View{

    static displayError(err){
        console.log("Error")
        console.log(err)
    }
    
    static display(input){
        console.log(input)
    }

    static help(){
        console.log(`Please provide the correct input! Here is the list of the commands you can use: 

        1. show <tableName> = List all data inside the table
        2. find <tableName> <field> <value> = Find one data from the informations provided
        3. add:contact <name> <company name> <phone number> <email> = Input new contact with the information provided into Contacts table
        4. add:group <group name> = Input a new group into Groups table
        5. add:contactGroup <groupId> <contactId> = Input a new member inside a group with the corresponding ID
        6. update <table name> <id> <column name> <value> = Changing a value of an existing data in the table
        7. delete <table name> <column name> <value> = Deleting a particular data from the table with the corresponding value in the column provided.`)
    }
}

module.exports = View