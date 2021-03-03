<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>function musicvisualchange(){
  var obt=document.getElementById("musicvisualchange");
  var odiv=document.getElementById("container");
  
    if(odiv.style.display=="none"){
       odiv.style.display="flex";
      obt.innerHTML="<i class='fa fa-eye-slash'></i>&nbspHIDE";
    }
    else{
     odiv.style.display="none";
      obt.innerHTML="<i class='fa fa-eye'></i>&nbspSHOW";
    }
 
}