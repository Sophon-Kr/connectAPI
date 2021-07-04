
'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    id: {
        type: String,
        Required: 'Please enter'
    },
    name: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    }
})

module.exports = mongoose.model('Contacts', UserSchema)