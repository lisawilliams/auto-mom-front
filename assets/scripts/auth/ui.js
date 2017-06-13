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
  resetForm($('#sign-up'))
  console.log('Is the form empty now?')
  $('#usermessages').text('Thanks for signing up.')
}

const onAddUserFailure = (response) => {
  console.log('boooo it failed')
  console.log(response)
  $('#usermessages').text('Huh. Signup failed. Try again?')
}

// Sign in user

const onSignInSuccess = (response) => {
  console.log('yayyyyy we did it')
  console.log(response)
  store.user = response.user
  console.log('store.user console log data is ' + store.user)
  console.log(response)
  resetForm($('#sign-in'))
  console.log('Is the form empty now?')
  $('#usermessages').text('You are signed in. Get ready to have organized chores!')
}

const onSignInFailure = (response) => {
  console.log('boo it failed')
  console.log(response)
  $('#usermessages').text('Huh. Signing in failed. Try again?')
}

// Sign out user

const signOutSuccess = () => {
  console.log('signOut success ran. and nothing was returned')
  $('#chore-container').html('')
  console.log('clear content function ran')
  store.user = null
  console.log('We are at the end of the signOutSuccess function')
  $('#usermessages').text('You are signed out. Thanks for visiting! Text your mama :)')
}

const signOutFailure = (error) => {
  console.log('signOut failure ran. error is :', error)
  $('#usermessages').text('Hm. Signout did not work. Try again?')
}

// Change user password

const changePasswordSuccess = () => {
  console.log('changePassword success ran. and nothing was returned')
  // store.user = null
  resetForm($('#change-password'))
  $('#usermessages').text('You have changed your password.')
}

const changePasswordFailure = (error) => {
  console.log('changePassword failure ran. error is :', error)
  $('#usermessages').text('Hm. That did not work. Try again?')
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
