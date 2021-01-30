window.addEventListener('load', function(){
    setTimeout(function(){
        document.querySelector('.preloader').style.display = 'none';
        document.querySelector('.personal-website').style.display = 'block';
        document.querySelector('.tab-bar').style.display = 'block';
    }, 2000);
});
/*------loader------*/
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
/*-------nav------*/
const about = document.querySelector('.about');
const education = document.querySelector('.education');
const skills = document.querySelector('.skills');
const contact = document.querySelector('.contact');
/*-----about------*/
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
/*-----education------*/
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

/*------education section-------*/
const expand = document.querySelector('.expand');
const eduObjects = document.querySelector('.edu-objects');
expand.addEventListener('click', function(){
    expand.style.display = 'none';
    eduObjects.style.display = 'block';
});
eduObjects.addEventListener('click', function(){
    expand.style.display = 'inline';
    eduObjects.style.display = 'none';
});
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

