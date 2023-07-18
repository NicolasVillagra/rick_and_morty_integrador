const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`${URL}${id}`);

    if (response.data.error) {
      res.status(404).json({ message: 'Not found' });
    } else {
      const { id, status, name, species, origin, image, gender } = response.data;
      res.json({ id, status, name, species, origin, image, gender });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;