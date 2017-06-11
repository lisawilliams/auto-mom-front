'use strict'

const config = require('./../config')
// const app = require('./../app')
const store = require('./../store')

const createChore = (data) => {
  // when we create a game we have to start with player X
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

module.exports = {
  createChore
}
