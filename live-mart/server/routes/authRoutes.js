const passport = require('passport')

function isUserAuthenticated (req, res, next) {
  if (req.user) {
    next()
  } else {
    res.send('You must login!')
  }
}

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  )

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
      (req, res) => {
      res.redirect('/api/current_user')
    }
  )

  app.get('/api/current_user', isUserAuthenticated, (req, res) => {
    res.send(req.user)
  })

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })
}
