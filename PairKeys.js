    console.log('Pair Key Creation');
    ;
    var crypto = require("crypto");
    var prime_length = 60;
    var diffHell = crypto.createDiffieHellman(prime_length) ;
    var App = require('models/user/schema.js');
    
    diffHell.generateKeys('base64');
    console.log("Public Key : " ,diffHell.getPublicKey('base64'));
    console.log("Private Key : " ,diffHell.getPrivateKey('base64'));


    var app = new App({
        privateKey:   diffHell.getPprivateKey('base64') ,
        publicKey:    diffHell.getPublicKey('base64')
    });

    app.save(function(err) {
        if(!err) {
            console.log('Keys Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });