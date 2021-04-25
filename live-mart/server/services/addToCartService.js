const mongoose = require('mongoose')
const User = mongoose.model('users')

module.exports = app => {
  app.get('/api/current_user/actions/addToCart', (req, res) => {
    User.findOne({ _id: req.user._id }, (err, userInfo) => {
      console.log(err)
      let duplicateItem = false

      userInfo.cart.forEach(item => {
        if (item.productId == req.query.productId) {
          duplicateItem = true
        }
      })

      if (duplicateItem) {
        User.findOneAndUpdate(
          { _id: req.user._id, 'cart.productId': req.query.productId },
          { $inc: { 'cart.$.quantity': parseInt(req.query.quantity) } },
          { new: true },
          (err, userInfo) => {
            if (err) return res.json({ success: false, err })
            res.status(200).json(userInfo.cart)
          }
        )
      } else {
        User.findOneAndUpdate(
          { _id: req.user._id },
          {
            $push: {
              cart: {
                productId: req.query.productId,
                product: req.query.product,
                quantity: parseInt(req.query.quantity),
                price : parseFloat(req.query.price),
                date: new Date(),
                imgURL : req.query.img
              }
            }
          },
          { new: true },
          (err, userInfo) => {
            if (err) return res.json({ success: false, err })
            res.status(200).json(userInfo.cart)
          }
        )
      }
    })
  })
}
