const { findById } = require('../../models/Blog')
const BlogModel = require('../../models/Blog')
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: 'dwkppmaym',
    api_key: '359479626141935',
    api_secret: 'Q70MRVgOb7RKsAbWOZw5gYCUKWE',
    secure: false
});
class BlogController {
    static blogdisplay = async (req, res) => {
        const data = await BlogModel.find()

        res.render('admin/blog/blogdisplay', { d: data })
    }
    static bloginsert = async (req, res) => { //for the form data to show we use the npm body-parser
        // console.log(req.files.image)
        const file = req.files.image
        const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: 'blogs_image'
        })
        // console.log(myimage)
        // console.log(req.body) 
        try {
            const result = new BlogModel({
                title: req.body.title,
                description: req.body.description,
                image: {
                    public_id: myimage.public_id,
                    url: myimage.secure_url

                }
            })
            await result.save()
            // route ka url aayega hamesha jo route me dala hoga same ekdum
            res.redirect('/admin/blogdisplay')
        } catch (err) {
            console.log(err)
        }
    }
    static blogview = async (req, res) => {
        // console.log(req.params.id)
        try {
            const result = await BlogModel.findById(req.params.id)
            // console.log(result)
            res.render('admin/blog/blogview', { b: result })

        } catch (err) {
            console.log(err)
        }
    }
    static blogedit = async (req, res) => {
        // console.log(req.params.id)
        try {
            const result = await BlogModel.findById(req.params.id)
            // console.log(result)
            res.render('admin/blog/blogedit', { b: result })

        } catch (err) {
            console.log(err)
        }
    }
    static blogupdate = async (req, res) => {

        try {
            const blogdata = await BlogModel.findById(req.params.id)
            // console.log(blogdata)
            const imageid= blogdata.image.public_id
            // console.log(imageid)
            await cloudinary.uploader.destroy(imageid)
            // image update code
            const file = req.files.image
            const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'blogs_image'
            })
            const result = await BlogModel.findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                description: req.body.description,
                image: {
                    public_id: myimage.public_id,
                    url: myimage.secure_url,

                },

            })
            await result.save()
            res.redirect('/admin/blogdisplay')

        } catch (err) {
            console.log(err)
        }
    }
    static blogdelete = async (req, res) => {

        try {
            const blogdata = await BlogModel.findById(req.params.id)
            // console.log(blogdata)
            const imageid= blogdata.image.public_id
            // console.log(imageid)
            await cloudinary.uploader.destroy(imageid)
            const result = await BlogModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/blogdisplay')

        } catch (err) {
            console.log(err)
        }
    }
}
module.exports = BlogController