'use strict'

const resetForm = function resetForm ($form) {
  $form.find('input:text, input:password, input:file, select, textarea').val('')
  $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected')
}

// to call resetForm, use:
// resetForm($('#myform')); // by id, recommended
// resetForm($('form[name=myName]')); // by name

const store = require('../store')

const success = (data) => {

}

const failure = (error) => {

}

// Auth functions

// Add user

const onAddUserSuccess = (response) => {
  resetForm($('#sign-up'))
  $('#usermessages').text('Thanks for signing up.')
  // Add something that hides the signup box
}

const onAddUserFailure = (response) => {
  $('#usermessages').text('Huh. Signup failed. Try again?')
}

// Sign in user

const onSignInSuccess = (response) => {
  store.user = response.user
  resetForm($('#sign-in'))
  $('#chore-crud').removeClass('hidden')
  $('#sign-out-wrapper').removeClass('hidden')
  $('#sign-up-wrapper').addClass('hidden')
  $('#sign-in-wrapper').addClass('hidden')
  $('#usermessages').text('You are signed in. Get ready to have organized chores!')
}

const onSignInFailure = (response) => {
  $('#usermessages').text('Huh. Signing in failed. Try again?')
}

// Sign out user

const signOutSuccess = () => {
  // $('#chore-container').html('')
  store.user = null
  $('#chore-crud').addClass('hidden')
  $('#sign-out-wrapper').addClass('hidden')
  $('#sign-up-wrapper').removeClass('hidden')
  $('#sign-in-wrapper').removeClass('hidden')
  $('#usermessages').text('You are signed out. Thanks for visiting! Text your mama :)')
}

const signOutFailure = (error) => {
  $('#usermessages').text('Hm. Signout did not work. Try again?')
}

// Change user password

const changePasswordSuccess = () => {
  // store.user = null
  resetForm($('#change-password'))
  $('#usermessages').text('You have changed your password.')
}

const changePasswordFailure = (error) => {
  $('#usermessages').text('Hm. That did not work. Try again?')
}

module.exports = {
  // startState,
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
