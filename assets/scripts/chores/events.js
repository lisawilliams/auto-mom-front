'use strict'
const api = require('./api')
const ui = require('./ui')
// const store = require('./../store')

const getFormFields = require('../../../lib/get-form-fields.js')

// Chore events

const onCreateChore = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createChore(data)
    .then(ui.createChoreSuccess)
    .catch(ui.createChoreFailure)
}

const addHandlers = () => {
  $('#create-chore').on('submit', onCreateChore)
}

module.exports = {
  addHandlers,
  onCreateChore
}
