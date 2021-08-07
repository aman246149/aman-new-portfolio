

let icon_container=document.querySelector(".icon_container")
let textdata=document.querySelectorAll(".textdata");
let header=document.querySelector('.header')
let count=0;
console.log(icon_container)


window.addEventListener('resize', function(event){
    // do stuff here
    if (window.screen.width<=908) {
        icon_container.disabled=true;
        console.log(window.screen.width)
    }else{
        toggle()
    }
    
    
  });

//   if (window.screen.width<=908) {
//     icon_container.disabled=true;
//     console.log(window.screen.width)
// }else{
//     toggle()
// }

function toggle(){
 icon_container.addEventListener('click',(e)=>{
    
         
         header.className="toggleheader";
   
        header.className="header";

     
    icon_container.classList.toggle("toggleContainer");
    textdata.forEach((elem)=>{
        elem.classList.toggle("fortextdata");
    })
 });
}



toggle()