
// require('dotenv').config()
// const expres = require('express')

// const app = expres()

// const port = process.env.PORT;

// app.get('/',(req,res)=>{
//     res.send('hii')
// })
// app.get('/login',(req,res)=>{
//     res.send("login")
// })

// app.listen(process.env.PORT,()=>{
//     console.log(`all listening ${port}`)
// })


require("dotenv").config();
const express = require('express')

const app = express()

port = process.env.PORT

app.get('/',(req,res)=>{
    res.send("Hii Om Sharma")

})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});