/**
 * Created by andrea on 1/3/15.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;


var Userschema = new Schema({
    username: {type:String},
    sign:{type:String},
    age: {type:Number}
});

module.exports = mongoose.model('User', Userschema);