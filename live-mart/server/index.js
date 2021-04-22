const express = require('express')
const authRoutes = require('./routes/authRoutes')
const signup = require('./routes/signup')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')
const cors = require('cors')
require('./models/User')
require('./services/passport')
const addToCart = require('./services/addToCartService')



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

mongoose.set('useFindAndModify', false)

app.use(passport.initialize())
app.use(passport.session())
app.use(cors())

authRoutes(app)
addToCart(app)
signup(app)

app.listen(5000)
