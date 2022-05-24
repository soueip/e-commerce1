var menuithem=document.getElementById("menuithem");
var prodimg = document.getElementById("prodimg");
var smallimg = document.getElementsByClassName("smallimg");
var Delete = document.getElementsByClassName("remove");
var item = document.getElementsByClassName("Item");

for(let i=0; i<smallimg.length;i++){
    let onepic=smallimg[i];
    onepic.addEventListener("click", function(){
        prodimg.src=onepic.src
    })
}
   
oneimg[i].addEventListener('click',function(){
    prodimg.src= oneimg[i].src;
    console.log(prodimg);
    });

menuithem.style.maxHeight="0px";
function menutog(){
    if(menuithem.style.maxHeight=="0px")
    {
        menuithem.style.maxHeight="200px"
    }
    else
    {
        menuithem.style.maxHeight="0px"
    }
}



for(let i=0; i<smallimg.length;i++){
    let del = Delete[i];
    


    del.addEventListener("click", function () {
        item[i].remove();
      });
}

