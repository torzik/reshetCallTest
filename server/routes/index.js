const express = require('express');
const router = express.Router();

const contact = require( './contact.route' );


router.use(express.json());
router.use('/contact', contact)


module.exports = router;