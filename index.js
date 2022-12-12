let exp=require("express")
let app=exp()
app.get("/resume",(req,res)=>{
    res.download("./resume.pdf")
})
app.listen(8080)