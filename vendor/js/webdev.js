
document.getElementById('next').onclick = function(){
    let lists= document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists= document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1  ]);
}

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