'use strict'

const config = require('./../config')
const store = require('./../store')

// API POST, posts a new chore to the db based on user form input

const createChore = (data) => {
  return $.ajax({
    url: config.apiOrigins.development + '/chores/',
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
    url: config.apiOrigins.development + '/chores/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
  .then((response) => {
    store.chores = response.chores
    console.log('This comes from showAllChores in chores/api.js')
    console.log(response)
    console.log('this is store.chores')
    console.log(store.chores)
    return store
  })
}

// API PATCH, updates a selected chore

// const updateChore = function (data, id) {
//   console.log(data)
//   return $.ajax({
//     url: config.apiOrigin + '/chores/' + id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
//   // .then((response) => {
//   //   store.chore = response.chore
//   //   console.log(response)
//   // })
// }

// API DELETE, deletes a selected chore

// This briefly had a method of GET, and it worked, so adapting it
// may work for a GET for a single chore. Nota bene.

const deleteChore = (id) => {
  return $.ajax({
    url: config.apiOrigins.development + '/chores/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createChore,
  showAllChores,
  // updateChore,
  deleteChore
}
