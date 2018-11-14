class View {
    static displayError(err){
        console.log(err)
    }

    static displaySuccess(message){
        console.log(message)
    }

    static help(){
        console.log(`:::::::::Help:::::::::::
        [1] Help : - node main.js 
                   - node main.js help
        [2] Create   
            Contact : node main.js create contact contact_name company phone_num email
            Group   : node main.js create group_name name 
        [3] Update  
            Contact : node main.js update contact contact_name field_tobe_updated new_value
            Group   : node main.js update group group_name new_name 
        [4] Delete  
            Contact : node main.js delete contact contact_name
            Group   : node main.js delete contact group_name
        [5] Show
            Contact : node main.js show contact
            Group   : node main.js show group
        [6] SETUP   : node setup.js
        `)
    }

}

module.exports = View