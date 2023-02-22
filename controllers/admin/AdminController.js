class AdminController{
    static dashboard=(req,res)=>{
        try {
            // res.send('hello home')
            const {name,email}= req.admin 
            res.render('admin/dashboard',{n:name,e:email})
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports=AdminController