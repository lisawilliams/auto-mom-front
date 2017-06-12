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

// const showChoreSuccess = (response) => {
//   console.log('yayyyyy we did it we got to ui.js')
//   console.log(response)
//   $('#showChoreSuccessPrompt').text('Here are all the chores.')
//   const showChoreList = showChoresTemplate({ chores: store.chores })
//     $('#chore-list').append(showChoreList)
//     console.log('This is after the AJAX call')
//     console.log(store.chores)
//
// }

const showChoreSuccess = (data) => {
  console.log('below is console.log(data) for showChoreSuccess')
  console.log(data)
  const showChoreList = showChoresTemplate({ chores: data })
  $('#chore-list').append(showChoreList)
}



const showChoreFailure = (response) => {
  console.log('boooo it failed')
  console.log(response)
  $('#showChoreFailurePrompt').text('Hm. Showing all the chores failed. Try again?')
}

module.exports = {
  resetForm,
  failure,
  success,
  createChoreSuccess,
  createChoreFailure,
  showChoreSuccess,
  showChoreFailure

}
