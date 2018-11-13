const Model = require('./Model');
const db = require('../models/Database');

class ContactGroup extends Model{
    static create(options, callback) {
        super.create('ContactGroup', options, function(err) {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    }

    static deleteSome(options, callback) {
        const query = `DELETE FROM ContactGroup WHERE ${options.field} = ${options.value}`;

        db.run(query, function(err, rows) {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        })
    }
}

module.exports = ContactGroup;