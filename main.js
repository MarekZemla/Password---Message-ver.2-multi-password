const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", "name", "surname"];
const messages = ["password user accepted", "password name accepted", "password surname accepted"];
input.addEventListener('input', (e)=> {
    div.textContent = "";
    const text = e.target.value;

    passwords.forEach((password, index)=> {
        if(password === text){
            div.textContent = messages[index];
            e.target.value = "";
        }})

})

input.addEventListener('focus', (e) =>{
e.target.classList.add('active');
});

input.addEventListener('blur', (e) =>{
e.target.classList.remove('active');
});



// if(password === e.target.value) {
// div.textContent = message;
// e.target.value = "";
// }
// else {
//     div.textContent = "";
// }