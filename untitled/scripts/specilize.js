let butt=document.querySelector('button');
let myhead=document.querySelector('h1');

butt.onclick=function () {
   setName();
};
function setName() {
    let myname=prompt("whats your name?");
    if(!myname||myname===null)
    {
        setName();
    }else {
        localStorage('name', myname);
        myhead.innerHTML = myname + 'nb';
    }
}
if(!localStorage.getItem('name')){
    setName();
}else{
    let tempname=localStorage.getItem('name');
    myhead.textContent=tempname+'nb';
}