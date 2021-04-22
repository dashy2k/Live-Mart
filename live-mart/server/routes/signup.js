
const bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/usersignup', (req, res) => {
        //res.send("Thanks for posting that");
        console.log(req.body);
        var userDetails = JSON.stringify(req.body);
        console.log(userDetails);
        res.redirect('http://localhost:3000');
    })
}