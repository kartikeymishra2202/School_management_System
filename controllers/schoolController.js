const schoolService = require("../services/schoolService");

const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ message: "All fields are required" });
  }

  schoolService.addSchool(
    [name, address, latitude, longitude],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: err });
        // "Error adding school"
      }
      res.status(201).json({ message: "School added successfully" });
    }
  );
};

const listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res
      .status(400)
      .json({ message: "Latitude and longitude are required" });
  }

  schoolService.listSchools(latitude, longitude, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error retrieving schools" });
    }
    res.status(200).json(results);
  });
};

module.exports = {
  addSchool,
  listSchools,
};
