//select element
const selectElement=function(element){
    return document.querySelector(element);
};
let menuToggler=selectElement('.menu-toggle');
let body=selectElement('body');
menuToggler.addEventListener('click',function(){
body.classList.toggle('open');
});


window.sr=scrollReveal();
sr.reveal('.animate-left',{
origin:'left',
duration:1000,
distance:'25rem',
delay:300
});



window.sr=scrollReveal();
sr.reveal('.animate-right',{
origin:'left',
duration:1000,
distance:'25rem',
delay:300
});




window.sr=scrollReveal();
sr.reveal('.animate-top',{
origin:'left',
duration:1000,
distance:'25rem',
delay:300
});

window.sr=scrollReveal();
sr.reveal('.animate-bottom',{
origin:'left',
duration:1000,
distance:'25rem',
delay:300
});