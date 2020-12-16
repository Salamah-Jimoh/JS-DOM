
/*console.log('hello world');
console.error('this ia an error');
console.warn('this ia an error');*/
/*const fruit='watermelon'
const age=30;
const check =true;
console.log(fruit, age, check);
console.log(typeof age, check);

console.log('my name is' +fruit+ 'and im' +age+ 'this is the' +check); //old

console.log(`my name is ${fruit} and im ${age} that is the ${check}`) //recent

const s='salamah, Saudah , Abdulhafeez'
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase() , s.substring(0,5));
console.log(s.split());
console.log(s.split(''));

const numbers=['1, 2, 3, 4, 5, apples'];
console.log(numbers);
console.log(typeof numbers);
numbers.unshift('mango');
console.log(Array.isArray(fruit));
console.log(Array.isArray(numbers));
console.log(numbers.indexOf('salamah'));*/
/*const abdul=[ 
    {
        id:1,
        text:'my brother',
        value:true
    },

    {
        id:2,
        text:'student',
        value:false
    },

    {
        id:3,
        text:'my brother',
        value:true
    }
    ]
//console.log(abdul[1]);

for (let i= 0; i < abdul.length; i++ )
{
    console.log(abdul[i].text);
}*/


    
/*for (let a of abdul){
    console.log(abdul[1].text); }
    abdul.forEach(function(a){
        console.log(abdul.text);
    })*/


   /* const x=10;
    if (x===10){
        console.log('x is 10')
    }
    else{
        console.log('x is NOT 10');
    }
    if (x>10) {
        console.log('x is greater than 10')
    } else {
        console.log('x is lesser than 10')
    }
    const y=10;
    const z=4;
    if (z===4 && y>9){
        console.log('z is greater than 5 or y is greater than 10')
    }
    const r=20;
    const color= r===10 ? 'red':'blue'
    console.log(color);v
const x=10;
    const color= x>10 ? 'red':'blue'
switch (color) {
    case 'red':
        console.log('color is red')
        break;
        case 'blue':
        alert('hello world')
        break;

    default:
        console.log('color is not red blue')
        break;
}
function addNums(num1, num2){
    return num1+ num2
}
console.log (addNums(5, 5));
const addNums=(num1=1, num2=1)
console.log(addNums(4))
function Person(FirstName, LastName, dob, _year){
    this.FirstName=FirstName;
    this.LastName=LastName;
    this.dob=new Date (dob);
    this.year=function(){
        return dob.getFullYear();
    }
    console.log(person2.year());
}
const person1=new Person('sala', 'mah', '11-27-2001');
console.log(person1);
const person2=new Person('abdul', 'afeez', '2-14-2007');
console.log(person2);
const person3=new Person('sFu', 'dah', '2-6-2000');
console.log(person3);
const h1=document.getElementById('header');
h1.style.color='red';
console.log(h1);
const ul=document.querySelector('.list');
ul.lastElementChild.remove();
ul.firstElementChild.textContent='Mangoes'
//ul.children[2].innerText='salmah'
ul.children[2].innerHTML='<h5> Hello world</h5>'
const btn=document.querySelector('.btn');
btn.addEventListener('click', (e)=>{
    //console.log('mouse over')
    e.preventDefault();
    document.querySelector('h1').style.background='black'
    document.querySelector('body').list.add('bg-dard');
})*/
const form=document.querySelector('form');
const name=document.querySelector('nameInput');
const email=document.querySelector('emailInput');
const msg=document.querySelector('msg');
const list=document.querySelector('ul');
form.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();
    nameInput.value
    console.log(nameInput);
}