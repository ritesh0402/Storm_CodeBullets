const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const fetchuser = (req, res, next) => {
    const token = req.header('auth_token');
    if (!token) {
        res.status(401).send({ error: "helloo Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}

module.exports = {fetchuser}