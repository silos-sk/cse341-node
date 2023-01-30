const checkAuth = (req, res, next) => {
    if (!req.oidc.isAuthenticated()){
        return res.status(400).send({
            error: 'Please log in to update any data.',
            login: '/auth/login'
        })
    }
}

// const jwt = require('jsonwebtoken');

// const checkAuth = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
//     const userId = decodedToken.userId;
//     if (req.body.userId && req.body.userId !== userId) {
//       throw 'Invalid user ID';
//     } else {
//       next();
//     }
//   } catch {
//     res.status(401).json({
//       error: new Error('Invalid request!')
//     });
//   }
// };

// function generateAccessToken(username) {
//     return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
//   }

module.exports = { checkAuth };