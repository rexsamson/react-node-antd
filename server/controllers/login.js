const reqPomise = require('request-promise')
const authorization = require('../helpers/authorization')
const requestHeader = require('../helpers/requestHeader')
const moment = require('moment')

module.exports = {
  loginHandler: function(req, res) {
    const dateToken = moment.utc().format('YYYY-MM-DD HH:mm:ss ') + 'UTC'
    const uid = req.headers['uid'] == null ? '' : req.headers['uid']
    const token = req.headers['token'] == null ? '' : req.headers['token']

    reqPomise({
      method: 'POST',
      uri: requestHeader.uri + '/login',
      body: {
        phoneNumber: req.body.phoneNumber,
        password: req.body.password
      },
      headers: {
        timestamp: dateToken,
        uid: uid,
        token: token,
        Authorization: authorization.authValidation(uid, token, dateToken)
      },
      json: true
    })
      .then(function(parsedBody) {
        res.end(JSON.stringify(parsedBody))
      })
      .catch(function(err) {
        res.status(400).send(err)
      })
  }
}
