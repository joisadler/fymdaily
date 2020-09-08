"use strict";

var _process$env = process.env,
    DBUSER = _process$env.DBUSER,
    DBPASSWORD = _process$env.DBPASSWORD,
    DBHOST = _process$env.DBHOST,
    DBNAME = _process$env.DBNAME;
/* eslint-disable max-len */

module.exports = {
  url: "mongodb+srv://".concat(DBUSER, ":").concat(DBPASSWORD, "@").concat(DBHOST, "/").concat(DBNAME, "?retryWrites=true&w=majority")
};