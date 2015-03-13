    console.log('Pair Key Creation');

   /*
    var crypto = require("crypto");
    var prime_length = 60;
    var diffHell = crypto.createDiffieHellman(prime_length) ;


    diffHell.generateKeys('base64');
    console.log("Public Key : " ,diffHell.getP.getPublicKey('base64'));
    console.log("Private Key : " ,diffHell.getPrivateKey('base64'));
*/
    var keypair = require('keypair');
    var pair = keypair();
    console.log(pair);
    var App = require('./models/App/schema.js');
    var app = new App({
        privateKey:   pair.privateKey ,
        publicKey:    pair.publicKey
    });

    app.save(function(err) {
        if(!err) {
            console.log('Keys Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });