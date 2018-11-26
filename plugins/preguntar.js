'use strict';

var _ = require('lodash');
var utils = require('../lib/utils');

var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

function loadFile(filename, array) {
    var instream = fs.createReadStream('./' + filename);
    var outstream = new stream;
    var rl = readline.createInterface(instream, outstream);

    rl.on('line', function(line) {
        array.push(line);
    });
}

module.exports = function (bot) {

    var name = "preguntar";
    var description = "[mensaje] - Me puedes hacer preguntas, pero solo si no son muy tontas";
    var frases = [];
    var stickers = [];
    loadFile('frases.txt', frases);
    loadFile('stickers.txt', stickers);

    var exec = function (msg) {
        var pregunta = msg.command.params[0] || null;
        if (pregunta != null) {
            var respuesta = "";
            var probability = _.random(5);
            if(probability > 2) {
                bot.sendSticker(msg.chat.id, stickers[_.random(stickers.length - 1)]);
            }
            else {
                respuesta = frases[_.random(frases.length - 1)];
                bot.sendMessage(msg.chat.id, respuesta, 
                    { reply_to_message_id: msg.message_id});
            }
        }
        else {
            respuesta = "No puedo responder si no me preguntas, igualada.\nEjemplo: /preguntar ¿Porqué eres tan marginal?";
            bot.sendMessage(msg.chat.id, respuesta, 
                { reply_to_message_id: msg.message_id});
        }
        console.log("\tYo: " + respuesta);
    };

    return {
        name: name,
        exec: exec,
        description: description
    }
};
