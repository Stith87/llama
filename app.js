'use strict';

const Hapi = require('hapi');
const Handlebars = require('handlebars');
const Vision = require('vision');
const Inert = require('inert');
const Routes = require('./routes/routes.js');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000 });

server.register([Vision, Inert], (err) => {
	if (err) {
        console.error('Failed to load plugin:', err);
    }
});

server.views({
    engines: {
        html: Handlebars
    },
    relativeTo: __dirname,
    path: 'views',
    partialsPath: 'views/partials',
});

server.route(Routes);

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server is listening at ' + server.info.uri);
});