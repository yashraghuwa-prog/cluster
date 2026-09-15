const express=require('express');
const app=express();

const PORT=9000;

app.get("/",(req,res)=>{
    return res.json({message:`hello frrrrnds  ${process.pid}`});
})

app.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`));

