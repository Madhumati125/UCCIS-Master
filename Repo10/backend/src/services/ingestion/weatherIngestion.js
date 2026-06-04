const axios = require('axios');

module.exports = async (req, res) => {

  try {

    console.log(process.env.WEATHER_API);

    const response = await axios.get(
      process.env.WEATHER_API
    );

    res.json({

      success: true,

      weather: response.data

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: 'Weather Ingestion Failed',

      error: error.message

    });

  }

};