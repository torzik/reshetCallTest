const mongoose = require('mongoose');

let shcemaContact = new mongoose.Schema({
    name: {type: String, required: true, max: 10},
    phone: {type: String, required: true, max: 50},
    email: { type: String, required: true },
    code: {type: String, required: false, max: 150 }
},{ timestamps: true });


const Contact = mongoose.model( 'Contact', shcemaContact );

module.exports = Contact;