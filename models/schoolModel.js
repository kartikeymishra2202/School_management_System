const db = require("../config/db");

const School = {
  add: (schoolData, callback) => {
    const query = `INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;
    db.query(query, schoolData, callback);
  },

  list: (latitude, longitude, callback) => {
    const query = `
            SELECT id, name, address, latitude, longitude,
            (6371 * acos(
                cos(radians(?)) *
                cos(radians(latitude)) *
                cos(radians(longitude) - radians(?)) +
                sin(radians(?)) *
                sin(radians(latitude))
            )) AS distance
            FROM schools
            ORDER BY distance`;

    db.query(query, [latitude, longitude, latitude], callback);
  },
};

module.exports = School;
