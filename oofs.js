// OOFS (Open Office File System)
// static: based on express.js
// dynamic: TODO rely on web server
// configure

///////////////////////////////////////////////////////
///////////////// static implementation ///////////////
///////////////////////////////////////////////////////

// Import Express, initializing the app, and listen.
const express = require('express');
const app = express();
app.listen(2000, () => {})

// Getting the path request and sending the response with text
app.get('/', (req, res) => {
    // console.log(req.url); // message @ server side
    res.send('Hi, your request has been received')
})

// handle (server/local) files

// vim:ts=4:sw=4:sts=4:et:fen:fdm=marker:fmr={{{,}}}:fdl=1
