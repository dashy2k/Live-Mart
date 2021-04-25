const mongoose = require('mongoose')
const User = mongoose.model('users')

module.exports = app => {
  app.get('/api/current_user/actions/checkoutSucess', (req, res) => {
    User.findOne({ _id: req.user._id }, (err, userInfo) => {
      console.log(err)

      User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            orderHistory: {
              orderId: userInfo.orderHistory.length + 1000,
              orderDetails: userInfo.cart,
              active : true
            }
          },
          $set: {
            cart: []
          }
        },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ success: false, err })
          res.status(200).json(userInfo.cart)
        }
      )
    })
  })
}
