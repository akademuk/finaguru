var bear = document.querySelector(".showContainer");
        
setTimeout(function(){
    bear.classList.add("showContainerAnimation");
    
},2000)
function svgClose() {
    bear.classList.remove("showContainerAnimation");
   
}