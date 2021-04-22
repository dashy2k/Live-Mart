
const bodyParser = require('body-parser');



module.exports = app => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/usersignup', (req, res) => {
        res.send("<h1>On the signup page</h1>");
        console.log("Hello there");
    })

    app.post('/usersignup', (req, res) => {
        res.send("Thanks for posting that");
        console.log(req.body);
        var userDetails = JSON.stringify(req.body);
        console.log(userDetails);
    })
}