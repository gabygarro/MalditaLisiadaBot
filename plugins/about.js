'use strict';
var _ = require('lodash');


module.exports = function(bot) {

    var name = "about";
    var description = "Créditos";

    var exec = function(msg, reply) {
        
        reply.sendMessage("Creado por @GabyGarro",
            {parse_mode: 'Markdown' });
    };

    return {
        name: name,
        exec: exec,
        description: description
    }
};