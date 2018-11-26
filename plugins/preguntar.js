'use strict';

var _ = require('lodash');
var utils = require('../lib/utils');

module.exports = function (bot) {

    var name = "preguntar";
    var description = "[mensaje] - Me puedes hacer preguntas, pero solo si no son muy tontas";
    var frases = [
        'Es cierto',
        'Sí, es así',
        'Sin ninguna duda',
        'Definitivamente sí',
        'Definitivamente no',
        'Creo que es lo más probable',
        'Sí',
        'No sé, pero talvez la vieja zorra esa te pueda decir',
        'Pregúntame luego',
        'Mejor no te lo digo ahora',
        'No puedo predecirlo con mis poderes satánicos',
        'No lo creo, querida',
        '¿Quién te crees?! NO',
        'Mis fuentes me dicen que no',
        'Lo dudo, ilusa',
        'No lo sé, pero esa estúpida igualada me quiere robar a mi Nandito',
        'Pregúntale a tu dios',
        'Más o menos',
        'Puede ser',
        'Sí, pero no porque la señora gata esa lo dijo'
    ];

    var exec = function (msg) {
        var pregunta = msg.command.params[0] || null;
        if (pregunta != null) {
            var respuesta = "";
            respuesta = frases[_.random(frases.length - 1)];
            bot.sendMessage(msg.chat.id, respuesta, 
                { reply_to_message_id: msg.message_id});
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
