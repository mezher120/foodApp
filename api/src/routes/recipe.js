const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send('recipe con una sola s');
});

module.exports = router;