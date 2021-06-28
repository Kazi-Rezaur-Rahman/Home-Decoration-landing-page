$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    items: 1,
    nav:true
})

/*const itemTrack = document.querySelector('.container');
const itrack = Array.from(itemTrack.children);

const left = document.querySelector('.slide-button-left');
const right = document.querySelector('.slide-button-right');

let counter=0;
const size = itrack[0].clientWidth

itemTrack.style.transform = "translateX("+(-size * counter)+ "px)";

right.addEventListener('click', ()=>{
  if(counter <= itrack.length-2){
  counter++
  itemTrack.style.transition = "0.5s"
    itemTrack.style.transform = "translateX("+(-size * counter)+ "px)";
  }
})

left.addEventListener('click', ()=>{
  if(counter >= 1){
    counter--
    itemTrack.style.transition = "0.5s"
    itemTrack.style.transform = "translateX("+(-size * counter)+ "px)";
  }
})

right.addEventListener('click', ()=>{
  if(counter === itrack.length-1){
    right.style.opacity = "0";
    left.style.opacity = "1";
  }
})
right.addEventListener('click', ()=>{
  if(counter >0){
    left.style.opacity = "1";
  }
})
left.addEventListener('click', ()=>{
  if(counter === itrack.length-2){
    right.style.opacity = "1";
  }
})
left.addEventListener('click', ()=>{
  if(counter === 0){
    left.style.opacity = "0";
  }
})*/
