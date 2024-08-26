const School = require("../models/schoolModel");

const addSchool = (schoolData, callback) => {
  // Additional business logic (e.g., formatting, validation) can go here
  School.add(schoolData, callback);
};

const listSchools = (latitude, longitude, callback) => {
  School.list(latitude, longitude, callback);
};

module.exports = {
  addSchool,
  listSchools,
};
