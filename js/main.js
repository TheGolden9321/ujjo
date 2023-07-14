"use strict";
// Document Object Model //
// alert - сообщение, confirm - подтверждение, prompt - ввод; //
// поиск по id начинается с решетки '#'; //

// Навигация // 


// Поиск элементов //

/* append - внутрь в конец, prepend - внутрь вначало*/ 

/*



container.insertAdjacentHTML(
    'afterend',
    `<button data-say-hi='yes' class='created'>Вставленный <span>текст</span></button>`
);



const style = getComputedStyle(java);
console.log(style.fontSize);
console.log(parseInt(style.fontSize));
console.log(java.tagName);
console.log(created.dataset.sayHi);
*/

/* прокрутка и координаты */

/*const width = window.innerWidth;
const width1 = all.clientWidth;
const height = all.clientHeight;
console.log(width);
console.log(width1);
console.log(height);
const scrollY = window.pageYOffset;
console.log(parseInt(scrollY));

function scrollBy (){
    window.scrollBy(0, 100);
}



function scrollPage(){
    window.scrollTo({
        top : 100,
        left : 0, 
        behavior: 'smooth',
    });
}



function intoview (top) {
    java.scrollIntoView(top);
}

const parent = java.offsetParent;
console.log(parent);
console.log(java.offsetLeft);
console.log(java.offsetWidth);
console.log(java.offsetHeight);
console.log(java.clientWidth);
console.log(java.clientLeft);
*/

/* getBoundingClientRect находит координаты обьекта */;

/*const rect = java.getBoundingClientRect();
console.log(parseInt(rect.top));
console.log(parseInt(rect.bottom));
console.log(parseInt(rect.height));
let fromtop = java.getBoundingClientRect().top;
console.log(fromtop);
let scrolledfromtop = fromtop + window.pageYOffset;
console.log(scrolledfromtop);
*/

/* elementFromPoint наоборот находит обьект по координатам */;

/*let find = document.elementFromPoint(114, 235);
console.log(find);
*/

/* События */

/*function clicker (){
    console.log('tim');
}

created.onclick = clicker;
*/

/*function stop(){
    console.log(12);
    created.removeEventListener('click', stop);
} 
created.addEventListener('click', stop);

function stopped(){
    console.log('Messi');
}
const options = {
    
    once: true,
}
created.addEventListener('click', stopped, options);
*/

/* event.stopPropagation - клик сработает только на конкретном блоке,
и не сработает на родительских
 */
/* "capture": true позволяет выполнить действие на конкретном 
элементе в первую очередь
 */


/*form.addEventListener('focus', function(){
    form.style.backgroundColor=`gray`;
}, parametres);
form.addEventListener('blur', function(){
    form.style.backgroundColor=`transparent`;
}, parametres)

Name.focus();
setTimeout(() => {
    Name.blur();
    Pass.focus();
}, 3000);
setTimeout(() => {
    Pass.blur();
    info.focus();
}, 6000);
*/



/*age.forEach(ageItem => {
    ageItem.addEventListener('change', function(){
        select.value=3;
    })
});
*/
const button = document.querySelector(".hot__button");
const line = document.querySelector(".hot__line");
document.addEventListener("click", (event) => {
    if(event.target.closest(".burger")){
        document.documentElement.classList.toggle('menuOpened');
        document.body.classList.toggle('locked')
    }
});

button.addEventListener('click', () => {
    line.classList.toggle('stopped');
    button.classList.toggle('stopped');
    if(button.classList.contains('stopped')){
        button.innerHTML = "Run";
    }
    else{
        button.innerHTML = "Stop";
    }
});
const button2 = document.querySelector('.lava__button');
const anotherLine = document.querySelector('.lava__line')
button2.addEventListener('click', () => {
    anotherLine.classList.toggle('stopped');
    button2.classList.toggle('stopped');
    if(button2.classList.contains('stopped')){
        button2.innerHTML = "Run";
    }
    else{
        button2.innerHTML = "Stop";
    }
});

const button3 = document.querySelector('.story__button');
const lastLine = document.querySelector('.story__line')
button3.addEventListener('click', () => {
    lastLine.classList.toggle('stopped');
    button3.classList.toggle('stopped');
    if(button3.classList.contains('stopped')){
        button3.innerHTML = "Run";
    }
    else{
        button3.innerHTML = "Stop";
    }
});