const ContactModel = require('../../models/Contact')
class ContactController{
    static contactdisplay=(req,res)=>{
        
        res.render('admin/contact/contactdisplay')
    }
    static contactinsert=async(req,res)=>{
        
        try {
            const result = new ContactModel({
                name: req.body.name,
                email: req.body.email,
                phoneno: req.body.phoneno,
                message: req.body.message,
                
                
            })
            
            await result.save()
            // route ka url aayega hamesha jo route me dala hoga same ekdum
            res.redirect('/contact')
        } catch (err) {
            console.log(err)
        }
    }
    static contactview = async (req, res) => {
        // console.log(req.params.id)
        try {
            const result = await ContactModel.find()
            // console.log(result)
            res.render('admin/contact/contactdisplay', { b: result })

        } catch (err) {
            console.log(err)
        }
    }
}
module.exports=ContactController