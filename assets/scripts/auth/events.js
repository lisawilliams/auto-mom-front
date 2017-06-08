'use strict'
const api = require('./api')
const ui = require('./ui')
// const store = require('./../store')

const getFormFields = require('../../../lib/get-form-fields.js')
// Auth events

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.post(data)
    .then(ui.onAddUserSuccess)
    .catch(ui.onAddUserFailure)
}
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  onSignUp,
  addHandlers
  // onSignIn,
  // postSignInSuccess,
  // onSignOut,
  // onChangePassword
}
