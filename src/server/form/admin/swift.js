'use strict';

var form = require('express-form')
  , field = form.field;

module.exports = form(
  field('settingForm[swift:url]', 'URL').trim().isUrl(),
  field('settingForm[swift:tenantName]', 'テナント名').trim(),
  field('settingForm[swift:user]', 'ユーザー').trim(),
  field('settingForm[swift:password]', 'パスワード').trim()
);
