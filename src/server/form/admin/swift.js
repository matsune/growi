'use strict';

var form = require('express-form')
  , field = form.field;

module.exports = form(
  field('settingForm[swift:authUrl]', 'Auth URL').trim().isUrl(),
  field('settingForm[swift:user]', 'ユーザー').trim(),
  field('settingForm[swift:password]', 'パスワード').trim(),
  field('settingForm[swift:container]', 'コンテナ名').trim(),
  field('settingForm[swift:domain]', 'ドメイン名').trim(),
  field('settingForm[swift:domainId]', 'ドメインID').trim(),
  field('settingForm[swift:tenant]', 'テナント名(プロジェクト名)').trim(),
  field('settingForm[swift:tenantId]', 'テナントID').trim()
);
