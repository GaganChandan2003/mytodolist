var completed=JSON.parse(localStorage.getItem("comple"));
completed.map(function(elm)
{
    var tr2=document.createElement("tr")
    var todotask=document.createElement("td")
    todotask.innerText=elm.productname;
    var quantity=document.createElement("td");
    quantity.innerText=elm.productquantity;
    var prio=document.createElement("td");
    prio.innerText=elm.productpriority;

    tr2.append(todotask,quantity,prio)
    document.querySelector("#body").append(tr2);
})