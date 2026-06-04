const express = require('express');

const duplicateProtection =
  require('../reliability/duplicateProtection');

const staleSignalRejection =
  require('../reliability/staleSignalRejection');

const replayProtection =
  require('../reliability/replayProtection');

const deterministicRounding =
  require('../reliability/deterministicRounding');

const errorContract =
  require('../reliability/errorContract');

const failureSimulator =
  require('../reliability/failureSimulator');

const apiValidation =
  require('../middleware/apiValidation');

const reliabilityPayloads =
  require('../data/reliabilityPayloads');

const router = express.Router();

router.post(
  '/validate',

  apiValidation,

  (req, res) => {

    const payload =
      req.body;

    const duplicate =
      duplicateProtection(
        payload.id
      );

    if (!duplicate) {

      return res.status(409)
        .json(
          errorContract(
            'Duplicate Request',
            req.traceId
          )
        );

    }

    const stale =
      staleSignalRejection(
        payload.timestamp
      );

    if (!stale) {

      return res.status(400)
        .json(
          errorContract(
            'Stale Signal',
            req.traceId
          )
        );

    }

    const replay =
      replayProtection(
        req.traceId
      );

    if (!replay) {

      return res.status(409)
        .json(
          errorContract(
            'Replay Attack',
            req.traceId
          )
        );

    }

    payload.score =
      deterministicRounding(
        payload.score
      );

    res.json({

      success: true,

      payload

    });

  }
);

router.get(
  '/failure-simulation',

  (req, res) => {

    res.json({

      success: true,

      simulation:
        failureSimulator()

    });

  }
);

module.exports = router;