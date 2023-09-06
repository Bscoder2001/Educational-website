console.log('welcome to my profile');

const hambar = document.querySelectorAll('.hambar');
const cross = document.getElementById('cross');
const mode = document.querySelector('.mode');
const navbar = document.querySelector('.navbar');

let navList = document.querySelector('.nav-list');
let rightNav = document.querySelector('.rightNav');
let contact = document.querySelector('.contact')
let body = document.body;
let btns = document.querySelectorAll('.btn');
let btnDark = document.querySelector('.btn-dark');
let upArrow = document.getElementById('#upArrow');
console.log(rightNav);

console.log(navList);
console.log(body);

hambar.forEach(element => {
    element.addEventListener('click', (e)=>{
        if(navList.style.height == ''){
        navList.style.height = '330px';
        rightNav.style.height = '35px';
        setTimeout(() => {
            upArrow.style.display = 'flex';
            
        }, 0);
        } else {
            navList.style.height = '';
            rightNav.style.height = '';
        }
    })
});

console.log(navbar.scrollHeight);

mode.addEventListener('click', ()=>{
    btnDark.classList.toggle('dark-button')
    if(body.style.backgroundColor === '') {
        body.style.backgroundColor = "black";
        contact.style.backgroundColor = "black";
        body.style.color = 'white';

        btns.forEach((element) => {
            element.style.backgroundColor = 'white';
            element.style.color = 'black';
            element.style.border = '2px solid white';
        });
    }else {
        body.style.backgroundColor = '';
        contact.style.backgroundColor = "rgb(241, 241, 241)";
        body.style.color = 'black';
          btns.forEach((element) => {
            element.style.background = 'none';
            element.style.color = 'white';
            element.style.border = '2px solid white';
        });
    }
    
})