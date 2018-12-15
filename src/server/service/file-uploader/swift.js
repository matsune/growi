// crowi-fileupload-swift

module.exports = function(crowi) {
  'use strict';

  var lib = {};

  function getSwiftConf() {
    let config = crowi.getConfig()
    return {
      authUrl: config.crowi['swift:authUrl'],
      userName: config.crowi['swift:user'],
      apiKey: config.crowi['swift:password'],
      domain: config.crowi['swift:domain'],
      domainId: config.crowi['swift:domainId'],
      tenant: config.crowi['swift:tenant'],
      tenantId: config.crowi['swift:tenantId'],
    }
  }

  lib.createClient = function(data) {
    const Swift = require('client-swift');
    return new Swift(data).authenticate();
  }

  lib.client = function() {
    return this.createClient(getSwiftConf())
  }

  lib.deleteFile = function(filePath) {
    let config = crowi.getConfig()
    let container = config.crowi['swift:container']
    return new Promise(function(resolve, reject) {
      crowi.swift
        .Container(container)
        .delete(filePath)
        .then(resolve)
        .catch(reject)
    });
  };

  lib.uploadFile = function(filePath, contentType, fileStream, options) {
    let config = crowi.getConfig()
    let container = config.crowi['swift:container']
    return new Promise(function(resolve, reject) {
      crowi.swift
        .Container(container)
        .create(filePath, fileStream)
        .then(resolve)
        .catch(reject)
    });
  };

  lib.generateUrl = function(filePath) {
    let config = crowi.getConfig()
    let container = config.crowi['swift:container']
    return crowi.swift.Container(container).Object(filePath).url()
  };

  lib.checkCapacity = async(uploadFileSize) => {
    return true;
  };

  return lib;
};
