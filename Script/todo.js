var todolist=JSON.parse(localStorage.getItem('tododata'));
var comp=JSON.parse(localStorage.getItem("comple"))||[];
todolist.map(function(element)
{
   var tr1= document.createElement("tr");
   var tdname=document.createElement("td");
   var tdqty=document.createElement("td");
   var tdprior=document.createElement("td");
   var mark=document.createElement("td");
   tdname.innerText=element.productname;
   tdqty.innerText=element.productquantity;
   tdprior.innerText=element.productpriority;
   mark.innerText="Completed"
   mark.style.color="green";
   mark.style.cursor="pointer"
   mark.addEventListener("click",function()
   {
      com(element);
   })
   tr1.append(tdname,tdqty,tdprior,mark)
   document.querySelector("#body").append(tr1);
})
function com(element)
   {
      comp.push(element);
      localStorage.setItem("comple",JSON.stringify(comp));
   } 
