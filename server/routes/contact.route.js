const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact.controller');

router.   get( '/',         contactController.contact_all );
router.   get( '/:contactId',      contactController.contact_one );
router.  post( '/create',   contactController.contact_create );
router.   put( '/edit/:contactId',     contactController.contact_edit );
router.delete( '/delete/:contactId',   contactController.contact_delete );


module.exports = router;
