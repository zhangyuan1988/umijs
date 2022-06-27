export default {
    "GET /users": {
        name: "111",
        age: 100
    },

    "POST /users/login": (req, res) => {
        console.log(req.body);
        if (req.body.username && req.body.password) {
            res.status(200).send({
                ok: 1
            })
        } else {
            res.status(400).send({
                ok: 0
            })
        }

    }
}