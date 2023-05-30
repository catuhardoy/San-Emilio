const {
  getRaces,
  createRace
} = require("../../controllers/raceController/raceControler");

const getAllRaces = async (req, res) => {
  try {
    const race = await getRaces();
    return res.status(200).json(race)
  } catch (error) {
    return res.status(400).json({error: error.message})
  }
};

const postRace = async (req, res) => {
  const {name} = req.body;
  try {
    const race = await createRace(name);
    res.status(200).json(race)
  } catch (error) {
    return res.status(400).json({error: error.message})
  }
};

module.exports = {
  getAllRaces,
  postRace
}