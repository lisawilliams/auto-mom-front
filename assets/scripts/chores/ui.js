'use strict'
const showChoresTemplate = require('../templates/chore-list.handlebars')
const store = require('./../store')

// Code to reset form
// Instructions for how to call it below

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected')
}

// to call, use:
// resetForm($('#myform')); // by id, recommended
// resetForm($('form[name=myName]')); // by name

const success = (data) => {
}

const failure = (error) => {
}

// Chore functions

// Chore create

const createChoreSuccess = (response) => {
  resetForm($('#create-chore'))
  $('#usermessages').text('You have added a chore!')
  $('#chore-list').empty()
  $('#show-chore-button').show()
}

const createChoreFailure = (response) => {
  $('#usermessages').text('Adding a chore failed. Try again.')
}

// Chore show

const validateChoreShow = (response) => {
  if (response.chores[0].id > 0) {
    showChoreSuccess(response)
  } else {
    noShowChoreTwice(response)
  }
}

const showChoreSuccess = (response) => {
  $('#chore-list').show()
  console.log('this is right after chore-list show() in chores/ui.js but before the showChoreListfunction')
  const showChoreList = showChoresTemplate({ chores: store.chores })
  $('#chore-list').append(showChoreList)
  console.log('This is after chore-list .append()')
  $('#usermessages').text('Look at those chores! But do not worry, you got this.')
  console.log('This is right before we do the .hide() on show-chore-button')
  $('#show-chore-button').hide()
  console.log('This is right after we use .hide() on the show chore button. The show chore button should not be showing. Chores should be showing.')
  console.log('This is the current user')
  console.log(store.user)
  console.log('This is the chore object for the current user')
  console.log(store.chores)
  // may want to run a function here that automatically repopulates the list; check out Rory's solution to this
}

const showChoreFailure = (response) => {
  $('#usermessages').text('Hm. Showing all the chores failed. Try again?')
}
// In case there are already chores and a user clicks Show Chores twice

const noShowChoreTwice = (response) => {
  $('#usermessages').text('')
}
// In case user hasn't added any chores yet but clicks chore button

const addSomeChores = (response) => {
  $('#usermessages').text('You need to add some chores first!')
}

// Chore Update

const updateChoreSuccess = (response) => {
  resetForm($('#update-chore'))
  $('#usermessages').text('You have updated a chore!')
  $('#chore-list').empty()
  $('#show-chore-button').show()
}

const updateChoreFailure = (response) => {
  $('#usermessages').text('Updating a chore failed. Try again?')
}

// Chore Delete

const deleteChoreSuccess = (response) => {
  resetForm($('#delete-chore'))
  $('#usermessages').text('You have deleted a chore!')
  $('#chore-list').empty()
  $('#show-chore-button').show()
}

const deleteChoreFailure = (response) => {
  $('#usermessages').text('Deleting a chore failed. Try again.')
}

module.exports = {
  resetForm,
  failure,
  success,
  createChoreSuccess,
  createChoreFailure,
  validateChoreShow,
  showChoreSuccess,
  showChoreFailure,
  addSomeChores,
  noShowChoreTwice,
  updateChoreSuccess,
  updateChoreFailure,
  deleteChoreSuccess,
  deleteChoreFailure
}
