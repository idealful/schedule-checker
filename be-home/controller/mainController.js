const express = require('express');
const router = express.Router();

const os = require('os');

// ---
const MIDDLEWARE_PATH = '../middleware';

// ---
const LOG = require(`${MIDDLEWARE_PATH}/log`);
const LOGD = require(`${MIDDLEWARE_PATH}/logd`);
const EMAIL = require(`${MIDDLEWARE_PATH}/email`);

// ---
router.get('/', (req, res) => {
  LOGD(req.originalUrl);

  const result = { userAgent: req.headers['user-agent'], hostname: os.hostname() };

  const response = { code: 200, message: '조회 성공', result };

  LOGD(JSON.stringify(response));

  res.status(200).json(response);
});

router.post('/email', (req, res) => {
  LOGD(req.originalUrl);

  const email = req.body.email;
  const title = req.body.title;
  const contentRaw = req.body.content;
  const contentRawArr = contentRaw?.split('@@');
  let contentHtml = `
    <h1>안녕하세요? Schedule Checker 관리자입니다.</h1>
    <br />
    <h2>${contentRawArr[0]}</h2>
    <br />
    <a href="${contentRawArr[1]}" target="_blank">바로가기</a>
  `;

  EMAIL.initTransporter();
  EMAIL.sendEmail(email, title, contentRaw, contentHtml);

  const response = { code: 200, message: '이메일 전송 성공', result: true };

  LOGD(JSON.stringify(response));

  res.status(200).json(response);
});

module.exports = router;
