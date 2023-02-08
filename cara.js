function openNav() {
    document.getElementById("right").style.right = "0px";
  }
  
  function closeNav() {
    document.getElementById("right").style.right = "-300px";
  }
  var main=document.getElementById("first");
  var small=document.getElementsByClassName("small");
  small[0].onclick=function(){
   main.src=small[0].src;
   
  }
  small[1].onclick=function(){
    main.src=small[1].src;
    
   }
   small[2].onclick=function(){
    main.src=small[2].src;
    
   }
   small[3].onclick=function(){
    main.src=small[3].src;
    
   }
