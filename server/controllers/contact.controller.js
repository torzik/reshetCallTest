const chalk = require('chalk')
const Contact = require( '../models/contact.model' );

exports.contact_all = function ( req, res ) {
    try {
        Contact.find().then(
            all => { 
                res.send(
                    {   all ,
                        count: all.length
                    }
                )
        });  
    } catch (error) {
        console.error(error)
    }  
}
exports.contact_one = function ( req, res ) {
    try {
        const { contactId } = req.params
        if ( contactId ) {
            Contact.findOne({_id: contactId}).then(
            all => { 
                res.send(all)
            });
        }          
    } catch (error) {
        console.error(error)
    }  
}
exports.contact_create = function ( req, res, next ) {
    try {
        let contact = new Contact(        
        {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            code: req.body.code,            
        }
    );

    contact.save(function (err, contact) {
        if (err) {
            return next(err);
        }
        res.json(contact)
    })
    } catch (error) {
        console.log(chalk.red('ERROR',error))
    }
    
};
exports.contact_edit = function ( req, res, next ) {    
    try {
        Contact.findByIdAndUpdate(
            req.params.contactId,
            req.body,
            { new: true },
            (err, contact) => {
                if (err) return res.status(500).send(err);
                return res.send(contact);
            }
        )        
    } catch (error) {
        console.log(chalk.red('ERROR',error))
    }
    
};
exports.contact_delete = function (req, res, next) {
    try {
        Contact.deleteOne( { _id: req.params.contactId } ).then( response => {
            res.send(response)
        })
    } catch (error) {
        console.log(chalk.red('ERROR',error))
    }
    
};
