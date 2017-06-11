'use strict'

const config = require('./../config')
// const app = require('./../app')
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
}


module.exports = {
  createChore,
  showAllChores
}
