'use strict';

var _ = require('lodash');
var utils = require('../lib/utils');

module.exports = function (bot) {

    var name = "malditalisiada";
    var description = "¡Maldita lisiada!";

    var exec = function (msg) {
        bot.sendSticker(msg.chat.id, "BQADAwADaAADVC-4B7GiygWzwI4yAg");
        var respuesta = "./plugins/clips/malditalisiada.ogg";
        bot.sendVoice(msg.chat.id, respuesta, 
            { caption: "¡Maldita lisiada!"});
        console.log("\tYo: " + respuesta);
    };

    return {
        name: name,
        exec: exec,
        description: description
    }
};
