const express = require('express');
const router = express.Router();

require('dotenv').config();

// ---
const MIDDLEWARE_PATH = '../middleware';
const SERVICE_PATH = '../service';

// ---
const LOG = require(`${MIDDLEWARE_PATH}/log`);
const LOGD = require(`${MIDDLEWARE_PATH}/logd`);

// ---
const verifyJwt = require(`${MIDDLEWARE_PATH}/verifyJwt`);
const {
  selectMembers,
  selectMemberByUserEmail,
  insertMember,
  updateMember,
  deleteMember,
} = require(`${SERVICE_PATH}/memberService.js`);

// ---
router.get('/', async (req, res) => {
  LOG(req.originalUrl);

  let response = {};
  try {
    const result = await selectMembers();

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
    res.status(response.code).json(response);
  }
});

// router.get('/:user_email', verifyJwt, async (req, res) => {
router.get('/:user_email', async (req, res) => {
  LOGD(req.originalUrl);

  const user_email = req.params.user_email;

  const result = await selectMemberByUserEmail(user_email);

  const response = { code: null, result };
  response.code = 200; // OK
  if (!result) {
    response.code = 204; // No Content
  }

  LOGD(JSON.stringify(response));

  res.status(response.code).json(response);
});

router.post('/', async (req, res) => {
  LOGD(req.originalUrl);

  const user_code = req.body.user_code;
  const user_email = req.body.user_email;
  const user_name = req.body.user_name;

  const userInfo = {
    user_code,
    user_email,
    user_name,
  };

  const result = await insertMember(userInfo);

  const response = { code: null, result };
  response.code = 201; // Created
  if (!result) {
    response.code = 204; // No Content
  }

  LOGD(JSON.stringify(response));

  res.status(response.code).json(response);
});

router.patch('/:user_email', verifyJwt, async (req, res) => {
  LOGD(req.originalUrl);

  const grade = req.body.grade;
  const status = req.body.status;
  const user_email = req.params.user_email;

  const userInfo = {
    grade,
    status,
    user_email,
  };

  const result = await updateMember(userInfo);

  const response = { code: null, result };
  response.code = 201; // Created
  if (!result) {
    response.code = 204; // No Content
  }

  LOGD(JSON.stringify(response));

  res.status(response.code).json(response);
});

router.delete('/:user_email', verifyJwt, async (req, res) => {
  LOGD(req.originalUrl);

  const user_email = req.params.user_email;

  const result = await deleteMember(user_email);

  const response = { code: null, result };
  response.code = 201; // Created
  if (!result) {
    response.code = 204; // No Content
  }

  LOGD(JSON.stringify(response));

  res.status(response.code).json(response);
});

module.exports = router;
