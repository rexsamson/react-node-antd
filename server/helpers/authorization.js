const md5 = require('md5');

module.exports = {
  authValidation: function(uid, token, date) {
    const uidString = uid == null ? '' : uid;
    const tokenString = token == null ? '' : token.toString();
    const authEnc = tokenString + uidString + date;
    return md5(md5(authEnc));
  }
};
