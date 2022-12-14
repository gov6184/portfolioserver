let exp=require("express")
let cors=require("cors")
let app=exp()
app.use(cors())
let path=require("path")
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/resume",(req,res)=>{
    res.download(path.resolve("./resume.pdf"))
})
app.listen(8080)