const jwt = require('jsonwebtoken');

// Authentication middleware
const authenticateToken = (req: any, res: any, next: any) => {
    const token = req.header('authorization');

    if (token == null)
        return res.sendStatus(401);

    try {
        jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
            if (err) {
                console.log(err);
                return res.sendStatus(403);
            }

            req.user = user;

            console.log(req.user);

            next();
        })
    } catch (error) {
        res.status(403);
    }
}

export default authenticateToken;