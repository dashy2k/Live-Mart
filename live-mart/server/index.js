const express = require('express')
const authRoutes = require('./routes/authRoutes')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')
const cors = require('cors')
require('./models/User')
require('./services/passport')

const whiteListedOrigins = ['http://localhost:3000', 'http://localhost:5000']

var corsOptionsDelegate = (req, callback) => {
  var corsOptions
  console.log(req.header('Origin'))
  if (whiteListedOrigins.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())
app.use(cors())

authRoutes(app)

app.listen(5000)
