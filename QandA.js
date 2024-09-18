const inputbox = document.getElementById("password")

let upprecase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase ="abcdefghijklmnopqrstuvwxyz";
let number ="0123456789";
let simbole =",./;'[]@#$()|";

const lastpass= upprecase+lowercase+number+simbole;

function create(){
    let password ="";
    password += upprecase[Math.floor(Math.random()*upprecase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += number[Math.floor(Math.random()*number.length)]
    password + simbole [Math.floor(Math.random()*simbole.length)]
    password += upprecase[Math.floor(Math.random()*upprecase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += number[Math.floor(Math.random()*number.length)]
    password + simbole [Math.floor(Math.random()*simbole.length)]
    password += upprecase[Math.floor(Math.random()*upprecase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += number[Math.floor(Math.random()*number.length)]
    password + simbole [Math.floor(Math.random()*simbole.length)]
   
   

    while( password.lenght){
        password+=lastpass[math.floor(Math.random()*lastpass.length)]
    }
    inputbox .value=password;


}

function copy(){
    inputbox.select()
    document.execCommand("copy")
   }