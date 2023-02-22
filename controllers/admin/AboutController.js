const AboutModel=require('../../models/About')
class AboutController{
    static about=async(req,res)=>{
        const result=await AboutModel.find()
        res.render('admin/about/display',{r:result})
    }
    static aboutedit=async(req,res)=>{
        try{
            const result=await AboutModel.find()
            res.render('admin/about/aboutedit',{r:result})
        }catch(err)
        {
            console.log(err)
        }
    }
    static aboutupdate=async(req,res)=>{
        try{
            const data = await AboutModel.findOneAndUpdate({
              description : req.body.description
            })
            await data.save();
            res.redirect('/admin/about')
      }catch(err)
      {
          console.log(err);

      }
  
    }
    
}
module.exports=AboutController