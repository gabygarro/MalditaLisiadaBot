'use strict';

var _ = require('lodash');
var utils = require('../lib/utils');
const fs = require('fs');

module.exports = function (bot) {

    var name = "malditalisiada";
    var description = "¡Maldita lisiada!";

    var exec = function (msg) {
        bot.sendSticker(msg.chat.id, "BQADAwADaAADVC-4B7GiygWzwI4yAg");
        var respuesta = "./plugins/clips/malditalisiada.ogg";
        bot.sendVoice(msg.chat.id, respuesta, 
            { caption: "¡Maldita lisiada!"});
        /*const stream = fs.createReadStream(respuesta);
        bot.sendAudio(msg.chat.id, stream);*/
        console.log("\tYo: " + respuesta);
    };

    return {
        name: name,
        exec: exec,
        description: description
    }
};
