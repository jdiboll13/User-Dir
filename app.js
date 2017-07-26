const data = require('data.js')
const express = require('express')
const path = require('path')
const mustacheExpress = require('mustache-express')
const app = express()

app.use(express.static('public'))
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
//Can use mst instead of mustache. This is apparently very common.
app.listen(3000, () => {
  console.log("Let's do this!")
})

app.get('/', (req, res) => {
  res.render('', data)
})
app.get('/users/:username', (req, res) => {
  const userData = {
    username: req.params.username
  }
  function findUser(user) {
    return user.username === userData.username
  }
  const oneUser = data.users.find(findUser)
  res.render('users', oneUser)
})
