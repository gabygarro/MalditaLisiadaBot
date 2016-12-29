'use strict';

var _ = require('lodash');
var utils = require('../lib/utils');

module.exports = function (bot) {

    var name = "fraserandom";
    var description = "Una frase aleatoria de Soraya Montenegro";
    var voiceMessages = [];
    // Importar archivos de voz
    utils.getGlobbedFiles('./plugins/clips/*.ogg').forEach(function(voicePath) {
        voiceMessages.push(voicePath);
    });

    var exec = function (msg) {
        var respuesta = "";
        respuesta = voiceMessages[_.random(voiceMessages.length - 1)];
        bot.sendVoice(msg.chat.id, respuesta);
        console.log("\tYo: " + respuesta);
    };

    return {
        name: name,
        exec: exec,
        description: description
    }
};
