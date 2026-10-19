
//double click
const target=document.querySelector("#target");

target.addEventListener("dbclick", ()=>{
    target.textcontent="";
    target.style.backgroundColor="#bbf7d0";
});

//mouse hover like fire and out
const target1=document.querySelector("#target");
const result=document.querySelector("#result");

target1.addEventListener("mouseover",()=>
{
    target1.style.backgroundColor="#fffff";
    PathResult.textContent="mouseover fired";
})

target1.addEventListener("mouseout",()=>
{
    target1.style.backgroundColor="##bf7d0";
    PathResult.textContent="mouseover out";
})
 
//mouse in and out
target1.addEventListener("mouseenter",()=>
{
    target1.style.backgroundColor="##bf7d0";
    PathResult.textContent="mouseover entered";
})

target1.addEventListener("mouseleave",()=>
{
    target1.style.backgroundColor="##bf7d0";
    PathResult.textContent="mouseover out";
})


//promise
const mypromis=new Promise(function(resolve,reject){
    let paysucess=true
    if(paysucess){
        resole("payment sucess");
    }else{
        reject("payment failed");
    }
});

mypromise.then(function(result){
    console.log(result);
});

.Catch(function(error){
    console.log(error);
})
