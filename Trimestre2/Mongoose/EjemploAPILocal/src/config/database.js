const mongoose = require('mongoose');
const CONFIG = require('./config');

module.exports = {
    
    /*connection: null,
    connect: () => {
        if (this.connection) return this.connection;
        return mongoose.connect(CONFIG.DB, {useUnifiedTopology: true,useNewUrlParser: true}).then(connection => {
            this.connection = connection;
            console.log('Conexion a DB exitosa');
        }).catch(err => console.log(err))
    } */

    connection: null,
    connect: () => {
        if (this.connection) return this.connection;
        return mongoose.connect("mongodb://localhost/ejemploapilocal_mongodb_1", {useUnifiedTopology: true,useNewUrlParser: true}).then(connection => {
            this.connection = connection;
            console.log('Conexion a DB exitosa');
        }).catch(err => console.log(err))
    }
}

