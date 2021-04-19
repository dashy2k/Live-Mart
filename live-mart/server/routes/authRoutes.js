const passport = require('passport')

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  )

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/error' }),
    function (req, res) {
      console.log(req.user.profile)
      res.redirect('http://localhost:3000/dashboard')
    }
  )

  app.get('/error',(req, res) => {
    res.send("Login Failed")
  })

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })

}
