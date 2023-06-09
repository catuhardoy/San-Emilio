const {
  getRaces,
  createRace,
  getRaceById,
  deleteRace
} = require("../../controllers/raceController/raceControler");

const getAllRaces = async (req, res) => {
  try {
    const race = await getRaces();
    return res.status(200).json(race)
  } catch (error) {
    return res.status(400).json({error: error.message})
  }
};

const getRaceId = async (req, res) => {
  const {id} = req.params;
  try {
    const race= await getRaceById(id);
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


const raceDelete = async (req, res) => {
  let { id } = req.body;
  try {
    const deletedRace = await deleteRace(id);
    return res.status(200).json(deletedRace);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getAllRaces,
  postRace,
  getRaceId,
  raceDelete
}