window.addEventListener('load', function(){
    setTimeout(function(){
        document.querySelector('.preloader').style.display = 'none';
        document.querySelector('.personal-website').style.display = 'block';
        document.querySelector('.tab-bar').style.display = 'block';
    }, 0);
});
// window.addEventListener("resize", changePage);
// let currentPage = 'sublime version';
// function changePage() {
//     console.log('sublime function');
//     if (screen.width < 1200 && currentPage != 'boring version') {
//         //&& currentPage != 'boring version' 1127
//         window.location.replace("boring.html");
//     }
// }
// const submit = document.querySelector('.submit button');
// const fromName = document.getElementById('name');
// const fromEmail = document.getElementById('email');
// const message = document.getElementById('message');
// submit.addEventListener('click', function(){
//     if (fromName.value){
//         ifEmpty('.nameLabel');
//     }if(fromEmail.value == ''){
//         ifEmpty('.emailLabel');
//     }if(message.value == ''){
//         ifEmpty('.messageLabel');
//     }else{
//         sendEmailToMe();
//     }
// });
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let tempParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    emailjs.send('service_thdt37i', 'template_enutm8g', tempParams)
    .then(function() {
        console.log('SUCCESS!');
    }, function(error) {
        console.log('FAILED...', error);
    });
    clearForm();
});
function clearForm(){
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    showThanks();
}
function showThanks(){
    const thanks = document.querySelector('.thanksMessage');
    const submit = document.querySelector('.submit');
    submit.style.display = 'none';
    thanks.style.display = 'block';
    setTimeout(function(){
        thanks.style.display = 'none';
        submit.style.display = 'block';
    }, 1500);
}
/*-----------loader-----------*/
let d = new Date();
var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var months = ["jan", "feb", "mar", "apr", "may", "jun",
    "jul", "aug", "sep", "oct", "nov", "dec"
];
let sec = d.getSeconds();
let min = d.getMinutes();
let hr = d.getHours();
let date = d.getDate();
if(sec < 10) sec = '0' + sec;
if(min < 10) min = '0' + min;
if(hr < 10) hr = '0' + hr;
if(date < 10) date = '0' + date;
const loginDetail = document.querySelector('.d');
loginDetail.innerHTML = `${days[d.getDay()]} ${months[d.getMonth()]} ${date}
    ${d.getFullYear()} ${hr}:${min}:${sec}`
/*-----------nav----------*/
const about = document.querySelector('.about');
const education = document.querySelector('.education');
const skills = document.querySelector('.skills');
const contact = document.querySelector('.contact');
/*----------about---------*/
const aboutB = document.querySelector('.aboutB');
const aboutA= document.querySelector('.aboutA');
about.addEventListener('mouseenter', function(){
    aboutB.style.visibility = 'visible';
    aboutA.style.visibility = 'visible';
    aboutB.innerHTML = '[';
    aboutA.innerHTML = ']';
});
about.addEventListener('mouseleave', function(){
    aboutB.style.visibility = 'hidden';
    aboutA.style.visibility = 'hidden';
});
/*---------education-------*/
const eduA = document.querySelector('.eduA');
education.addEventListener('mouseenter', function(){
    aboutA.style.visibility = 'visible';
    eduA.style.visibility = 'visible';
    aboutA.innerHTML = '[';
    eduA.innerHTML = ']'; 
});
education.addEventListener('mouseleave', function(){
    aboutA.style.visibility = 'hidden';
    eduA.style.visibility = 'hidden';
});
/*-----skills------*/
const skillsA = document.querySelector('.skillsA');
skills.addEventListener('mouseenter', function(){
    eduA.style.visibility = 'visible';
    skillsA.style.visibility = 'visible';
    eduA.innerHTML = '[';
    skillsA.innerHTML = ']';
    
});
skills.addEventListener('mouseleave', function(){
    eduA.style.visibility = 'hidden';
    skillsA.style.visibility = 'hidden';
});
/*-----contact------*/
const contactA = document.querySelector('.contactA');
contact.addEventListener('mouseenter', function(){
    skillsA.style.visibility = 'visible';
    contactA.style.visibility = 'visible';
    skillsA.innerHTML = '[';
    contactA.innerHTML = ']';  
});
contact.addEventListener('mouseleave', function(){
    skillsA.style.visibility = 'hidden';
    contactA.style.visibility = 'hidden';
});
// const expand = document.querySelector('.expand');
// const eduElobrate = document.querySelector('.edu-objects');
// expand.addEventListener('click', function(){
//     eduElobrate.style.display = 'block';
// });
const expand = document.querySelector('.expand');
const eduElobrate = document.querySelector('.edu-objects');
expand.addEventListener('click', function(){
    expand.style.display = 'none';
    eduElobrate.style.display = 'block';
});
/*------education section-------*/
const nittShort = document.querySelector('.nitt-short');
const nittElobrate = document.querySelector('.nitt-elobrate');
const vbcShort = document.querySelector('.vbc-short');
const vbcElobrate = document.querySelector('.vbc-elobrate');
const kvmcShort = document.querySelector('.kvmc-short');
const kvmcElobrate = document.querySelector('.kvmc-elobrate');
nittShort.addEventListener('click', function(){
    nittShort.style.display = 'none';
    nittElobrate.style.display = 'block';
});
nittElobrate.addEventListener('click', function(){
    nittShort.style.display = 'block';
    nittElobrate.style.display = 'none';
});
vbcShort.addEventListener('click', function(){
    console.log('True');
    vbcShort.style.display = 'none';
    vbcElobrate.style.display = 'block';
});
vbcElobrate.addEventListener('click', function(){
    vbcShort.style.display = 'block';
    vbcElobrate.style.display = 'none';
});
kvmcShort.addEventListener('click', function(){
    kvmcShort.style.display = 'none';
    kvmcElobrate.style.display = 'block';
});
kvmcElobrate.addEventListener('click', function(){
    kvmcShort.style.display = 'block';
    kvmcElobrate.style.display = 'none';
});
/*-----------highlight-----------*/
const highlight = document.querySelectorAll('.highlight');
const onHoverVar = document.querySelectorAll('.onHoverVar');
const onHoverExp = document.querySelectorAll('.onHoverExp');
const onHoverStr = document.querySelectorAll('.onHoverStr');
function mouseEnter(index){
    onHoverVar[index].style.color = '#f8f8f2';
    onHoverExp[index].style.color = '#f8f8f2';
    onHoverStr[index].style.color = '#e6db74';
}
highlight[0].addEventListener('mouseenter', function(){mouseEnter(0)});
highlight[1].addEventListener('mouseenter', function(){mouseEnter(1)});
highlight[2].addEventListener('mouseenter', function(){mouseEnter(2)});
function mouseLeave(index){
    onHoverVar[index].style.color = onHoverExp[index].style.color = onHoverStr[index].style.color =  '#464741';
}
highlight[0].addEventListener('mouseleave', function(){mouseLeave(0)});
highlight[1].addEventListener('mouseleave', function(){mouseLeave(1)});
highlight[2].addEventListener('mouseleave', function(){mouseLeave(2)});
/*-------------boring version----------*/
const click = document.querySelector('.click');
const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', function(){
    alert("I'm working on it, Please visit some time later!");
});
click.addEventListener('mouseenter', function(){
    cancel.style.color = '#f8f8f2';
});
click.addEventListener('mouseleave', function(){
    cancel.style.color = '#75715e';
});
cancel.addEventListener('mouseenter', function(){
    cancel.style.color = '#f8f8f2';
});
cancel.addEventListener('mouseleave', function(){
    cancel.style.color = '#75715e';
});