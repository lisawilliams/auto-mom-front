'use strict'
// const game = require('./game')

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected')
}

// to call, use:
// resetForm($('#myform')); // by id, recommended
// resetForm($('form[name=myName]')); // by name

const store = require('../store')

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

// Auth functions

// Add user

const onAddUserSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  $('#addUserSuccessPrompt').text('You have signed up!')
}

const onAddUserFailure = (response) => {
  console.log('boooo it failed')
  console.log(response)
  $('#addUserFailurePrompt').text('Signup failed. Try again.')
}

// Sign in user

const onSignInSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  store.user = response.user
  console.log('store.user console log data is ' + store.user)
  resetForm($('#sign-in-form'))
  console.log('Is the form empty now?')
}

const onSignInFailure = (response) => {
  console.log('boo it failed')
  console.log(response)
  $('#prompt').text('Sign In Failed')
}

// Sign out user

const signOutSuccess = () => {
  console.log('signOut success ran. and nothing was returned')
  store.user = null
  $('#signOutSuccessPrompt').text('You have signed out. See you soon!')
}

const signOutFailure = (error) => {
  console.log('signOut failure ran. error is :', error)
  $('#signOutFailurePrompt').text('Hm. Signout did not work. Try again?')
}

// Change user password

const changePasswordSuccess = () => {
  console.log('changePassword success ran. and nothing was returned')
  store.user = null
  resetForm($('#change-password'))
  $('#changePasswordSuccessPrompt').text('You have changed your password.')
}

const changePasswordFailure = (error) => {
  console.log('changePassword failure ran. error is :', error)
  $('#changePasswordFailurePrompt').text('Hm. That did not work. Try again?')
}

module.exports = {
  resetForm,
  failure,
  success,
  onAddUserSuccess,
  onAddUserFailure,
  onSignInSuccess,
  onSignInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
