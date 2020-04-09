const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.render('./assistant/index')
});

module.exports = router;