let password1 = document.querySelector('#password1');
let password2 = document.querySelector('#password2');
let p1 = document.querySelector('#p1');
let p2  = document.querySelector('#p2');

let firstName = document.querySelector('#name')
let surname = document.querySelector('#surname')

let pname = document.querySelector('#pfname');
let psurname = document.querySelector('#psurname');

let email = document.querySelector('#email');
let pemail = document.querySelector('#pemail');

let date = document.querySelector('#date');
let pdate = document.querySelector('#pdate');

let plast = document.querySelector('#plast');

let gender = document.querySelector('#gender');
let nationality = document.querySelector('#nationality')

let btn = document.querySelector('#btn')

let count = 0;

let regEx = /^[a-zA-z]/gi;


firstName.addEventListener('input', (e)=> {
      if(!((/^[a-zA-Z]+$/.test(e.target.value)))){
        firstName.style.borderBottom = '1px solid red'
        pname.innerHTML = 'Faqat xarflar!';
        pname.style.display = 'block';
     }
     else if(e.target.value.length < 3 || e.target.value.length > 9){
        firstName.style.borderBottom = '1px solid red'
        pname.innerHTML = 'Ism xato!';
        pname.style.display = 'block';
     }
      else{
        firstName.style.borderBottom = '3px solid green';
        pname.style.display = 'none';
        count++;
     }
})
surname.addEventListener('input', (e)=> {
     if(!((/^[a-zA-Z]+$/.test(e.target.value)))){
        surname.style.borderBottom = '1px solid red'
       psurname.innerHTML = 'Faqat xarflar!';
       psurname.style.display = 'block';
    }
    else if(e.target.value.length < 3 || e.target.value.length > 9){
        surname.style.borderBottom = '1px solid red'
        psurname.innerHTML = 'Ism xato!';
        psurname.style.display = 'block';
     }
     else{
        surname.style.borderBottom = '3px solid green';
        psurname.style.display = 'none';
        count++;
    }
})

email.addEventListener('input', (e) =>{
    if( e.target.value.includes('@') && e.target.value.includes('.')){
        email.style.borderBottom = '3px solid green';
        pemail.style.display = 'none';
        count++;
    }
    else{
        email.style.borderBottom = '2px solid red';
        pemail.style.display = 'block';
        pemail.innerHTML = 'Email xato';
    }
})

let regex2 = /^[a-z0-9]/g
let el = ''
password1.addEventListener('input', (e) =>{
    
     if( e.target.value.length > 6 && regex2.test(e.target.value) ){
        password1.style.borderBottom = '3px solid green';
        el += e.target.value;
        count++;
     }
     else{
        password1.style.borderBottom = '2px solid red';
     }
     
})
password2.addEventListener('input', (e) =>{
    if( e.target.value == el ){
       password2.style.borderBottom = '3px solid green';
       count++;
    }
    else{
       password2.style.borderBottom = '2px solid red'
    }
    
})

date.addEventListener('input', (e) =>{
    if( e.target.value.length === 0){
        pdate.innerHTML = `Sanani to'g'ri kiriting!`;
        pdate.style.display = 'block';
        pdate.style.marginTop = '-10px';
        date.style.borderBottom = '2px solid red'
    }
    else{
    date.style.borderBottom = '3px solid green';
    pdate.style.display = 'none';
    count++;
    }
})


btn.addEventListener('click', (e) => {
    e.preventDefault()
    
   
   if( count === 6  ){
    plast.innerHTML = 'Tabriklaymiz! Malumotingiz muvofaqqiyatli kiritildi!';
    plast.style.display = 'block';
    plast.style.color = 'green';
    nationality.style.borderBottom = '3px solid green';
    gender.style.borderBottom = '3px solid green';
    
   }
   else{
    plast.innerHTML = `Malumot barchasi kiritilmadi! Tekshirib qayta urinib ko'ring!`;
    plast.style.display = 'block';
    
   }

})



