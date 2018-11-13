const db = require('../models/Database');

class Model {
    static create(table, options, callback) {
        const fields = Object.keys(options);

        let values = [];
        for (let key in options) {
            values.push(`"${options[key]}"`);
        }

        const query = `INSERT INTO ${table} (${fields.join(', ')}) VALUES (${values.join(', ')})`;
        db.run(query, function(err) {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        })

    }

    static update(table, id, options, callback) {
        let arr = [];

        for (let key in options) {
            arr.push(`${key} = "${options[key]}"`);
        }
        
        const query = `UPDATE ${table} SET ${arr.join(', ')} WHERE id = ${id}`;
        console.log(query);

        db.run(query, function(err) {
            if (err) {
                callback({message: `Error updating data`, err: err});
            } else {
                callback(null);
            }
        })
    }

    static findAll(table, callback) {
        const query = `SELECT * FROM ${table}`;

        db.all(query, function(err, rows) {
            if (err) {
                callback({message: `Error getting all ${table}`, err: err});
            } else {
                callback(null, rows);
            }
        });

    }

    static findOne(table, options, callback) {        
        const stmt = db.prepare(`SELECT * FROM ${table} WHERE ${options.field} = ?`);        
        stmt.get(options.value, function(err, row) {
            if (err) {
                callback({message: `Error getting data ${options.value}`, err: err});
            } else {                
                callback(null, row);

            }
        });
    }

    static delete(table, options, callback) {        
        const stmt = db.prepare(`DELETE FROM ${table} WHERE ${options.field} = ?`);        
        stmt.run(options.value, function(err) {
            if (err) {
                callback({message: `Error deleting data`, err: err});
            } else {
                callback(null);
            }
        })
    }
}

module.exports = Model;