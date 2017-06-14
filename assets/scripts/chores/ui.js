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
  $('#usermessages').text('You have added a chore!')
  $('#chore-list').remove
  console.log('store.chores after #chore-list remove')
  console.log(store.chores)
  const showChoreList = showChoresTemplate({ chores: store.chores })
  $('#chore-list').append(showChoreList)
}

const createChoreFailure = (response) => {
  console.log('boooo it failed')
  console.log(response)
  $('#usermessages').text('Adding a chore failed. Try again.')
}

// Chore show

const validateChoreShow = (response) => {
  console.log('this is console.log(response) from validateChoreShow')
  console.log(response)
  console.log('this is console.log(response.chores[0]) from validateChoreShow')
  console.log(response.chores[0].id)
  if (response.chores[0].id > 0) {
    showChoreSuccess(response)
  } else {
    console.log('this is console.log(response.chores[0]) from validateChoreShow after else')
    console.log(response.chores[0].id)
    console.log('going to noShowChoreTwice')
    noShowChoreTwice(response)
  }
}

const showChoreSuccess = (response) => {
  console.log('below is console.log(response.chores) for showChoreSuccess')
  console.log(store.chores)
  console.log('this is console.log(response) from showChoreSuccess')
  console.log(response)
  console.log('this is console.log(response.chores[0]) from showChoreSuccess')
  console.log(response.chores[0])
  const showChoreList = showChoresTemplate({ chores: store.chores })
  $('#chore-list').append(showChoreList)
  $('#usermessages').text('Look at those chores! But do not worry, you got this.')
  $('#show-chore-button').hide()
}

const showChoreFailure = (response) => {
  console.log('boooo it failed')
  console.log(response)
  $('#usermessages').text('Hm. Showing all the chores failed. Try again?')
}
// In case there are already chores and a user clicks Show Chores twice

const noShowChoreTwice = (response) => {
  console.log('noShowChoreTwice ran')
  $('#usermessages').text('')
}
// In case user hasn't added any chores yet but clicks chore button

const addSomeChores = (response) => {
  console.log('addSomeChores ran')
  $('#usermessages').text('You need to add some chores first!')
}

// Chore Update

const updateChoreSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  resetForm($('#update-chore'))
  console.log('Is the form empty now?')
  const showChoreList = showChoresTemplate({ chores: store.chores })
  $('#usermessages').text('You have updated a chore!')
  $('#chore-list').empty
  $('#chore-list').append(showChoreList)
}

const updateChoreFailure = (response) => {
  console.log('boooo it failed')
  console.log(response)
  $('#usermessages').text('Updating a chore failed. Try again?')
}

// Chore Delete

const deleteChoreSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  resetForm($('#delete-chore'))
  console.log('Is the form empty now?')
  const showChoreList = showChoresTemplate({ chores: store.chores })
  $('#usermessages').text('You have deleted a chore!')
  $('#chore-list').empty
  $('#chore-list').append(showChoreList)
}

const deleteChoreFailure = (response) => {
  console.log('boooo it failed')
  console.log(response)
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
