var container=document.createElement("div");  
container.classname="container";
var row=document.createElement("div");
row.classList.add("row","m-3");  
container.append(row);
document.body.append(container);
var element = document.querySelector('body div.container');
var title=document.createElement("h1");
title.setAttribute("id","title");
var title=document.getElementById("title");

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=> foo(data1))
.catch((error)=>console.log(error))

function foo(data1)
{
    console.log(data1);
    for(var i=0;i<data1.length;i++)
    {
        row.innerHTML+=
        `<div class="col-lg-4" "col-sm-12">
        <div class="card text-center">
  <div class="card-header">
   <h1> ${data1[i].name}</h1>
  </div>
  <img src="${data1[i].flag}" class="card-img-top" alt="...">


  <div class="card-body">
    
    <p class="card-text">capital:${data1[i].capital}</p>
    <p class="card-text">region:${data1[i].region}</p>
    <p class="card-text">countrycode:${data1[i].countrycodes}</p>
    <div class="card-footer">
     <a href="https://openweathermap.org/" class="btn btn-primary">click for weather</a>
  </div>
  

</div>



        
       


  

</div>`
    }
    document.body.append(container); 
}
