const express = require('express');
const router = express.Router();

const os = require('os');

// ---
const MIDDLEWARE_PATH = '../middleware';

// ---
const LOG = require(`${MIDDLEWARE_PATH}/log`);
const LOGD = require(`${MIDDLEWARE_PATH}/logd`);

// ---
router.get('/', (req, res) => {
  LOGD(req.originalUrl);

  let response = {};
  try {
    const result = { userAgent: req.headers['user-agent'], hostname: os.hostname() };

    response.code = 200; // OK
    if (!result) {
      response.code = 204; // No Content
    }
    response.result = result;
    response.message = '성공';

    LOGD(JSON.stringify(response));
  } catch (error) {
    response.code = 500; // Internal Server Error
    response.result = null;
    response.message = '에러가 발생했습니다. 관리자에게 문의하세요.';

    LOG('[ERROR]', JSON.stringify(error?.toString()));
  } finally {
    res.status(200).json(response);
  }
});

module.exports = router;
