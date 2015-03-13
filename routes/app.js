module.exports = function(app) {

    var App = require('../models/app/schema.js');

    //GET - Return all users in the DB
    getPublicKey = function (req, res) {
        App.find(function (err, apps) {
            if (!err) {
                console.log('GET /apps')
                res.send(apps);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    app.get('/apps', getPublicKey);
}


