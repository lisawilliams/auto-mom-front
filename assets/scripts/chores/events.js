'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

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
  api.showAllChores()
    .then(ui.showChoreSuccess)
    .catch(ui.showChoreFailure)
}

// Update a chore

const onUpdateChore = function (event) {
  event.preventDefault()
  let data = {}
  data.chores = getFormFields(event.target)
  let choreNumber = (data.chores.chore.id)
  let choreObject = (data.chores)
  console.log('this is console.log(data)')
  console.log(data)
  console.log('this is console.log(data.chores.chore)')
  console.log(data.chores.chore)
  console.log('this is console.log(data.chores.chore.id)')
  console.log(data.chores.chore.id)
  console.log('this is console.log(choreNumber)')
  console.log(choreNumber)
  api.updateChore(choreObject, choreNumber)
  .then(ui.updateChoreSuccess)
.catch(ui.updateChoreFailure)
}

// Delete a chore

const onDeleteChore = function (event) {
  event.preventDefault()
  const id = getFormFields(event.target)
  console.log('we have arrived at onDeleteChore chores/events.js. Below is console.log event.target')
  console.log(event.target)
  // debugger;
  console.log('Below is console.log(id)')
  console.log(id.chore.id)
  api.deleteChore(id.chore.id)
  .then(ui.deleteChoreSuccess)
  .catch(ui.deleteChoreFailure)
}

// REMEMBER TO PUT IN # before form ID!

const addHandlers = () => {
  $('#create-chore').on('submit', onCreateChore)
  $('#show-chore').on('submit', onShowAllChores)
  $('#delete-chore').on('submit', onDeleteChore)
  $('#update-chore').on('submit', onUpdateChore)
}

module.exports = {
  addHandlers,
  onCreateChore,
  onShowAllChores,
  onUpdateChore,
  onDeleteChore
}
