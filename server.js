const express=require('express');
const cluster=require("cluster");
const os=require("os");

const totalCPUs=require('node:os').availableParallelism();

if(cluster.isPrimary){
    for(let i=0;i<totalCPUs;i++){
        cluster.fork();
    }
}
else{
    
    const app=express();
    const PORT=9000;
    app.get("/",(req,res)=>{
        return res.json({message:`hello frrrrnds  ${process.pid}`});
    })
    
    app.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`));
}


