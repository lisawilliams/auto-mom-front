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
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

// Chore functions

// Chore create

const createChoreSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  resetForm($('#create-chore'))
  console.log('Is the form empty now?')
  $('#addUserSuccessPrompt').text('You have added a chore!')
}

const createChoreFailure = (response) => {
  console.log('boooo it failed')
  console.log(response)
  $('#addChoreFailurePrompt').text('Adding a chore failed. Try again.')
}

// Chore show

const showChoreSuccess = (response) => {
  console.log('below is console.log(response.chores) for showChoreSuccess')
  console.log(store.chores)
  const showChoreList = showChoresTemplate({ chores: store.chores })
  $('#chore-list').append(showChoreList)
}

const showChoreFailure = (response) => {
  console.log('boooo it failed')
  console.log(response)
  $('#showChoreFailurePrompt').text('Hm. Showing all the chores failed. Try again?')
}

// Chore Update

const updateChoreSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  resetForm($('#update-chore'))
  console.log('Is the form empty now?')
  $('#updateChoreSuccessPrompt').text('You have updated a chore!')
}

const updateChoreFailure = (response) => {
  console.log('boooo it failed')
  console.log(response)
  $('#updateChoreFailurePrompt').text('Updating a chore failed. Try again?')
}

// Chore Delete

const deleteChoreSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  resetForm($('#delete-chore'))
  console.log('Is the form empty now?')
  $('#deleteChoreSuccessPrompt').text('You have deleted a chore!')
}

const deleteChoreFailure = (response) => {
  console.log('boooo it failed')
  console.log(response)
  $('#deleteChoreFailurePrompt').text('Deleting a chore failed. Try again.')
}

module.exports = {
  resetForm,
  failure,
  success,
  createChoreSuccess,
  createChoreFailure,
  showChoreSuccess,
  showChoreFailure,
  updateChoreSuccess,
  updateChoreFailure,
  deleteChoreSuccess,
  deleteChoreFailure
}
