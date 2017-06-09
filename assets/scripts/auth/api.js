'use strict'

const config = require('./../config')
// const app = require('./../app')
const store = require('./../store')

// Auth API calls

const post = function (data) {
  return $.ajax({

    // Uncomment the one you need depending on if you are running local or public
    url: config.apiOrigins.development + '/sign-up',
    // url: config.apiOrigins.production + '/sign-up',
    method: 'POST',
    data
  })
}

const postSignIn = function (data) {
  return $.ajax({
    // Uncomment the one you need depending on if you are running local or public
    url: config.apiOrigins.development + '/sign-in',
    // url: config.apiOrigins.production + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = () => {
  return $.ajax({
    // Uncomment the one you need depending on if you are running local or public
    url: config.apiOrigins.development + '/sign-out/' + store.user.id,
    // url: config.apiOrigins.production + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = (data) => {
  console.log('data is ', data)
  return $.ajax({
    // Uncomment the one you need depending on if you are running local or public
    url: config.apiOrigins.development + '/change-password/' + store.user.id,
    // url: config.apiOrigins.production + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  post,
  postSignIn,
  signOut,
  changePassword
}
