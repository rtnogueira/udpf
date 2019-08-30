const { db } = require('../util/admin');

exports.getAllPlayers = (req, res) => {
    db.collection('players')
        .orderBy('number', 'desc')
        .get()
        .then((data) => {
            let players = [];

            data.forEach((doc) => {
                players.push({
                    playerId: doc.id,
                    name: doc.data().name,
                    surnmame: doc.data().surname,
                    number: doc.data().number,
                    birthdate: doc.data().birthdate,
                    countryId: doc.data().countryId,
                    foto: doc.data().foto,
                    statusId: doc.data().statusId
                });
            })

            return res.json(players);
        })
        .catch((err) => console.error(err))
};