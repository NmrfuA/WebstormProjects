let myImage=document.querySelector('img')
myImage.onclick=function () {
    if(myImage.getAttribute('src')==='images/firefox-icon.png'){
        myImage.setAttribute('src','images/timg-2.jpeg');
    }else
    {
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}