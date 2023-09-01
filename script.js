// for the mouse cursor follower

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)` ;
    })
}
circleMouseFollower();

let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight ;
        let id = sec.getAttribute('id');
        if( top >= offset && top < offset+height){
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [herf*='+ id +']').classList.add('active');
            });
        };
    });
};

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});





