const axios = require('axios');

module.exports = async (req, res) => {

  try {

    const response = await axios.get(
      process.env.TRAFFIC_API
    );

    res.json({

      success: true,

      traffic: response.data

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: 'Traffic Ingestion Failed'

    });

  }

};