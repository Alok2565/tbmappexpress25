const jwt = require('jsonwebtoken');

exports.verifyRole = (requiredRole) => {
    return (req, resp, next) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) return resp.status(401).json({ error: 'Token missing' });

        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return resp.status(403).json({ error: 'Invalid token' });

            if (decoded.role !== requiredRole) {
                return resp.status(403).json({ error: 'Forbidden: Insufficient role' });
            }

            req.user = decoded;
            next();
        });
    };
};
