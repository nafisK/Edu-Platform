const express = require('express')
var cors = require('cors')
const bcrypt = require('bcrypt')

const app = express()
app.use(cors())
app.use(express.json())

require('./config/database')()

const Users = require('./models/Users')
const Groups = require('./models/Groups')

// checking for working server
app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

// user signup
app.post('/signup', async function (req, res) {
  // empty object to store user data
  if (!req.body) {
    return res.status(400).send('Request body is missing')
  }

  // hash password and create user
  const hashedPw = await bcrypt.hash(req.body.password, 10)
  const newUser = new Users({
    name: req.body.name,
    email: req.body.email,
    password: hashedPw,
  })

  // upload user to database
  await newUser
    .save()
    .then(data => {
      console.log('User saved successfully')
      res.json(data)
    })
    .catch(err => {
      console.log('Error saving user')
      res.json(err)
    })
})

// user login
app.get('/login', async function (req, res) {
  try {
    const user = await Users.findOne({ email: req.body.email })
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        res.send({ isLoggedin: true, message: 'Login successful' })
      } else {
        res.send({ isLoggedin: false, message: 'Incorrect password' })
      }
    } else {
      res.send({ isLoggedin: false, message: 'Email does not exist' })
    }
  } catch (err) {
    res.send({ message: err })
  }
})

// get all users
app.get('/users', (req, res) => {
  Users.find({}, (err, users) => {
    if (err) {
      res.json(err)
    } else {
      res.json(users)
    }
  })
})

// get all users
app.get('/users', (req, res) => {
  Users.find({}, (err, users) => {
    if (err) {
      res.json(err)
    } else {
      res.json(users)
    }
  })
})

// get one user
app.get('/users/:keyword', async function (req, res) {
  try {
    const user = await Users.find({ name: req.params.keyword })
    res.send(user)
  } catch (err) {
    res.send({ message: err })
  }
})

// post new group 
// user signup
app.post('/groups', async function (req, res) {
  // empty object to store user data
  if (!req.body) {
    return res.status(400).send('Request body is missing')
  }

  
  // upload user to database
  await newGroup
    .save()
    .then(data => {
      console.log('User saved successfully')
      res.json(data)
    })
    .catch(err => {
      console.log('Error saving user')
      res.json(err)
    })
})

PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}..`)
})
