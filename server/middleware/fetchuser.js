import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET;

export const fetchuser = (req, res, next) => {
    const token = req.header('auth_token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.clearCookie("auth_token");
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}
