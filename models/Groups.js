const Model = require('./Model');

class Groups extends Model{
    static addGroup(data, callback) {
        super.create('Groups', data, function(err) {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    }

    static update(id, options, callback) {
        super.update('Groups', id, options, function(err) {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    }

    static findAll(callback) {
        super.findAll('Groups', function(err, rows) {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        });
    }

    static findOne(options, callback) {
        super.findOne('Groups', options, function(err, row) {
            if (err) {
                callback(err);
            } else {
                callback(err, row);
            }
        });
    }

    static delete(options, callback) {
        super.delete('Groups', options, function(err) {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    }

}

module.exports = Groups