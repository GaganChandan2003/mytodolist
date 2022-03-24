var todoarr;

document.querySelector("form").addEventListener("submit",myfunction);
if(localStorage.getItem("tododata")==null)
{
    todoarr=[];
}
else{
    todoarr=JSON.parse(localStorage.getItem("tododata"));
}

function myfunction()
{
    event.preventDefault()
    var name =document.querySelector("#name").value;
    var quantity=document.querySelector("#qty").value;
    var priority=document.querySelector("#priority").value;
    var obj ={
        productname: name,
        productquantity: quantity,
        productpriority: priority
    }
    todoarr.push(obj);
    localStorage.setItem("tododata",JSON.stringify(todoarr));
}