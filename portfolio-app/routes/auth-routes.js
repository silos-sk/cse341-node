const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();

// auth login
router.get('/login', (req, res)=>{
    res.render('login');
})

// auth logout
router.get('/logout', (req, res)=>{
    //handle with passport
    res.send('logging out')
})

// //auth with google
// router.get('/google', (req, res)=>{
//     //handle with passport
//     res.send('logging in with google');
// });

//auth with github
router.get('/github', (req, res)=>{
    res.redirect(`https://github.com/login/oauth/authorize?client_id=fe5c0ba03af61774a0f9`)
})

router.get('/github/redirect', ({ query: { code } }, res) => {
    const body = {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    };
    const opts = { headers: { accept: 'application/json' } };
    axios
      .post('https://github.com/login/oauth/access_token', body, opts)
      .then((_res) => _res.data.access_token)
      .then((token) => {
        // eslint-disable-next-line no-console
        console.log('My token:', token);
  
        res.redirect(`/?token=${token}`);
      })
      .catch((err) => res.status(500).json({ err: err.message }));
  });

// my try
// router.get('/github/redirect', ({ query: { code }}, res) => {
//     const body = {
//         client_id: process.env.GITHUB_CLIENT_ID,
//         client_secret: process.env.GITHUB_SECRET,
//         code,
//     };
//     const opts = { headers: { accept: 'application/json' } };
//     axios
//     .post('https://github.com/login/oauth/access_token', body, opts)
//     .then((_res) => _res.data.access_token)
//     .then((access_token) => {
//         // eslint-disable-next-line no-console
//         console.log('My token:', access_token);

//         // res.redirect(`/?token=${token}`);
//     })
//     .catch((err) => res.status(500).json({ err: err.message}))
// });

module.exports = router;