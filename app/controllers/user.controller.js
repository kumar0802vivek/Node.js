var Model = require('../models/signup');
module.exports = {
    //show the signup page
    signupForm: function (req, res) {
        res.render('pages/signup', { topicHead: 'Signup' });

    },
    signupSubmit: function (req, res) {
        console.log(req.body);
        console.log(Model);

        var signup = new Model.signup({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            created_at: new Date(),
        });
        signup.save(function (err, signup) {
            if (err) {
                res.send(err);
            }
            console.log("1 document inserted");
            res.render('pages/signup', { topicHead: 'Signup' });

        });
    }
};
