var count=0;
function colors(){
   var c= document.getElementsByTagName("body")[0]
    var color=["red","pink","blue","green","orange"]
c.style.background=color[count++]
    
if(count>color.length-1){
    count=0
}
}