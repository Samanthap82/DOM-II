// Your code goes here




const changeBannerImg = document.querySelector("intro img");
window.addEventListener("resize", () => {
    changeBannerImg.src = "img/horseback.jpg";
});

//change color of nav bar
const navBarItems = document.querySelectorAll(".nav-link");
navBarItems.forEach((nel) => {
    nel.addEventListener("click", () => {
        nel.style.color = "pink";
    });
});
const headerImg = document.querySelector('header img');
headerImg.addEventListener('mouseover', obj=> { 
    obj.target.style.opacity = '0.3';
});

headerImg.addEventListener('mouseout', obj=> {
    obj.target.style.opacity = '1.0';
});



//nested event
const destinationEl = document.querySelectorAll(".destination");
const btns = document.querySelectorAll(".btn");
destinationEl.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "teal";
    });
});
// Stop Propagation
btns.forEach((item)=> {
    item.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "aqua";
        event.stopPropagation();
    });
});
// stop nav links from refreshing Prevent default
navBarItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
    });
});