let exp=require("express")
let cors=require("cors")
let app=exp()
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(8080)