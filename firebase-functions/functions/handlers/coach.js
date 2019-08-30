const { db } = require('../util/admin');

exports.getAllCoach = (req, res) => {
    db.collection('coach')
        .orderBy('name', 'desc')
        .get()
        .then((data) => {
            let coach = [];

            data.forEach((doc) => {
                coach.push({
                    coachId: doc.id,
                    name: doc.data().name,
                    surnmame: doc.data().surname,
                    birthdate: doc.data().birthdate,
                    countryId: doc.data().countryId,
                    foto: doc.data().foto,
                    statusId: doc.data().statusId
                });
            })

            return res.json(coach);
        })
        .catch((err) => console.error(err))
};