const express=require("express")
const path=require("path")
const app=express()

const pubDir=path.join(__dirname,"/public")
const viewsDir=path.join(__dirname,"/views")

app.set("view engine","ejs")
app.set("views",viewsDir)

app.use(express.static(pubDir))

app.get("/",(req,res)=>{
    res.render("homepage.ejs")
})
app.get("/about",(req,res)=>{
    res.render("about.ejs")
})
app.get("/gallery",(req,res)=>{
    res.render("gallery.ejs")
})



app.listen("80",()=>{
    console.log("app is up on port 80")
})