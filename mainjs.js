const form=document.querySelector('#form');
const nameInput=document.querySelector('#name');
const email=document.querySelector('#email');
const msg=document.querySelector('.msg');
const list=document.querySelector('#list');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
     console.log(nameInput.value);
    if(nameInput.value===''|| email.value===''){
       //alert('pls enter all fields')
       msg.classList.add('error')
       msg.innerHTML='<font color="white">pls enter all fields</font>';
       setTimeout(()=>msg.remove(), 3000)
       
     } else{
         const li=document.createElement('li')
         li.appendChild(document.createTextNode(` ${nameInput.value} ${email.value}`))
         list.appendChild(li);
        console.log('sucess')
     }
}
)
function onsubmit(){
  preventDefault();
  nameInput.value
  console.log(nameInput);
}
