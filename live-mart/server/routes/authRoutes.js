const passport = require('passport')
const cookieParser = require('cookie-parser')

module.exports = app => {
  app.use(cookieParser())
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  )

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/error' }),
    function (req, res) {
      res.redirect('http://localhost:3000/dashboard')
    }
  )

  app.get('/error', (req, res) => {
    res.send('Login Failed')
  })

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.clearCookie('user')
    res.redirect('http://localhost:3000/')
  })

  app.get('/api/current_user', (req, res) => {
    res.status(200).json(req.user||req.cookies.user)
  })
}
