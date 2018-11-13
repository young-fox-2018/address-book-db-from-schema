const Model = require('./Model');

class Contacts extends Model{
    static addContact(data, callback) {
        super.create('Contacts', data, function(err) {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    }

    static findAll(callback) {
        super.findAll('Contacts', function(err, rows) {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        });
    }

    static findOne(options, callback) {
        super.findOne('Contacts', options, function(err, row) {
            if (err) {
                callback(err);
            } else {
                callback(err, row);
            }
        });
    }

    static update(id, options, callback) {
        super.update('Contacts', id, options, function(err) {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    }

    static delete(options, callback) {
        super.delete('Contacts', options, function(err) {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    }
}

module.exports = Contacts;