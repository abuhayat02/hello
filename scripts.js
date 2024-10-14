let promise = new Promise((resolveFunction , rejectFunction)=>{
    let data = false;
    if(data){
        resolveFunction("yes! data is comming")
    }
    else{
        rejectFunction("no data availeavale")
    }
})

promise.then((m)=>{
    console.log(m)
}).catch((e)=>{
    console.log(e)
})





