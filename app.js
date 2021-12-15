const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemNumber=movieLists[i].querySelectorAll("img").length+1;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        const ratio=Math.floor(window.innerWidth/270)
        if(itemNumber - (4+clickCounter) + (4 - ratio) >= 0){
        clickCounter++;
        movieLists[i].style.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value
        -330}px)`;
    } else{ 
        movieLists[i].style.transform = "translateX(0)";
        clickCounter=0;
    }
    });

    console.log();
});




//DARK MODE
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container, .food-menu , .people-menu, .subBar ,popup ,.movie-list-title, .toggle-icon, .navbar-container, .sidebar, .left-menu-icon, .toggle, .copyright-bar"
    );


//constant darkmode
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelectorAll(
    ".container, .food-menu , .people-menu, .subBar ,popup ,.movie-list-title, .toggle-icon, .navbar-container, .sidebar, .left-menu-icon, .toggle, .copyright-bar"
    );

const enableDarkMode = () => {
  //add the class to the body
  document.body.classList.add('darkmode');
  //update darkMode in localStorage
  items.forEach(item=>{
    item.classList.toggle("active")
})
ball.classList.toggle("active");
localStorage.setItem('darkMode', "enabled");
}

const disableDarkMode = () => {
   //add the class to the body
   document.body.classList.add('darkmode');
   //update darkMode in localStorage
   const darkModeToggle = document.querySelectorAll(
    ".container, .food-menu , .subBar ,popup ,.movie-list-title, .toggle-icon, .navbar-container, .sidebar, .left-menu-icon, .toggle, .copyright-bar"
    );
    location.reload();

 ball.classList.toggle("active");
 localStorage.setItem('darkMode', null);
 }
 
 
//check if darkmode has already been enabled by the user before
if (darkMode === 'enabled') {
  enableDarkMode();
}

//when someone clicks the button
ball.addEventListener('click', () => {

    if (darkMode !== 'enabled') {
        enableDarkMode();
      // if it has been enabled, turn it off  
      } else {  
        disableDarkMode(); 
      }
 
});


//PARKING UNRESPONSIVE
const parking = document.querySelector(".parking-space");
parking.addEventListener("click", ()=>{
    items.forEach(item=>{
        parking.classList.toggle("active") 
    })
})


function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
 }

 function togglePopup1(){
    document.getElementById("popup-2").classList.toggle("active");
 }
 

 function togglePopup2(){
    document.getElementById("popup-3").classList.toggle("active");
 }

 function togglePopup3(){
    document.getElementById("popup-4").classList.toggle("active");
 }

 function togglePopup4(){
    document.getElementById("popup-5").classList.toggle("active");
 }

 function togglePopup5(){
    document.getElementById("popup-6").classList.toggle("active");
 }

 function togglePopup6(){
    document.getElementById("popup-7").classList.toggle("active");
 }

 function togglePopup7(){
    document.getElementById("popup-8").classList.toggle("active");
 }

 function togglePopup8(){
    document.getElementById("popup-9").classList.toggle("active");
 }

 function togglePopup9(){
    document.getElementById("popup-10").classList.toggle("active");
 }
 
 function togglePopup10(){
    document.getElementById("popup-11").classList.toggle("active");
 }

 
 function togglePopup11(){
    document.getElementById("popup-12").classList.toggle("active");
 }

 
 function togglePopup11(){
    document.getElementById("popup-12").classList.toggle("active");
 }

  
 function toggleSchedule(){
    document.getElementById("popupschedule1").classList.toggle("active");
 }





