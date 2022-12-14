let exp=require("express")
let cors=require("cors")
let app=exp()
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/resume",(req,res)=>{
    res.download("./resume.pdf")
})
app.listen(8080)