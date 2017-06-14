'use strict'

const config = require('./../config')
const store = require('./../store')
// const ui = require('./ui')

// API POST, posts a new chore to the db based on user form input

const createChore = (data) => {
  return $.ajax({
    // url: config.apiOrigins.development + '/chores/',
    url: config.apiOrigin + '/chores/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
  .then((response) => {
    store.chore = response.chore
    console.log(response)
  })
}

// API GET, shows all chores for a current user

const showAllChores = function () {
  return $.ajax({
    // url: config.apiOrigins.development + '/chores/',
    url: config.apiOrigin + '/chores/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
  .then((response) => {
    store.chores = response.chores
    console.log('This is response.chores')
    console.log(response.chores)
    console.log('This is (response) from showAllChores in chores/api.js')
    console.log(response)
    console.log('This is response.chores[0]')
    console.log(response.chores[0])
    console.log('this is store.chores')
    console.log(store.chores)
    return store
  })
}

// API PATCH, updates a chore

const updateChore = function (choreObject, choreNumber) {
  // debugger
  console.log(store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/chores/' + choreNumber,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: choreObject
  })
}

// API DELETE, deletes a selected chore

// This briefly had a method of GET, and it worked, so adapting it
// may work for a GET for a single chore. Nota bene.

const deleteChore = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/chores/' + id,
    // url: config.apiOrigins.development + '/chores/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createChore,
  showAllChores,
  updateChore,
  deleteChore
}
