module.exports = (req, res) => {

  res.json({

    success: true,

    source: 'FloodFeed',

    rainfall: {

      ward: 'Ward-A',

      rainfall_mm: 120,

      flood_risk: 'HIGH'

    }

  });

};