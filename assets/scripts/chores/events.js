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

// Show all of a user's chores

const onShowAllChores = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const data = getFormFields(event.target)
  console.log('made it from event handler to onShowAllChores')
  api.showAllChores()
    .then(ui.showChoreSuccess)
    .catch(ui.showChoreFailure)
}

// Update a chore


// Delete a chore


const onDeleteChore = function (event) {
  event.preventDefault();
  let id = getFormFields(event.target)
  console.log('we have arrived at onDeleteChore chores/events.js')
  console.log(id)
  api.deleteChore(id)
  .then(ui.deleteChoreSuccess)
  .catch(ui.deleteChoreFailure)
}

// REMEMBER TO PUT IN # before form ID!

const addHandlers = () => {
  $('#create-chore').on('submit', onCreateChore)
  $('#show-chore').on('submit', onShowAllChores)
  $('#delete-chore').on('submit', onDeleteChore)
}

module.exports = {
  addHandlers,
  onCreateChore,
  onShowAllChores,
  onDeleteChore
}
