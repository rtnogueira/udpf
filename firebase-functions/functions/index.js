const functions = require('firebase-functions');
const app = require('express')();
const FBAuth = require('./util/fbAuth');
const { db } = require('./util/admin');

const {
    getAllCoach,
} = require('./handlers/coach');

const {
    getAllPlayers,
} = require('./handlers/players');

// coach
app.get('/players', getAllCoach);

// players
app.get('/players', getAllPlayers);

exports.api = functions.region('europe-west2').https.onRequest(app);