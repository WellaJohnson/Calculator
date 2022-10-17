

// function afficher(value){
//     document.getElementById("outputScreen").value+=value;
//     console.log("outputScreen");
// }

// function calculer()
// {
// let a = document.getElementById("outputScreen").value;
// let b = eval(a);

// document.getElementById("outputScreen").value = b;
// 
// const element = document.getElementById(".AC");
// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("calculatrice").innerHTML = "Hello world";
// }

// const button = document.querySelectorAll("button");
// console.log("Helloooooo");


// const btn = [...document.querySelectorAll("btn")];
// console.log(btn);

// btns.array.forEach(element) => {
//     bnt.addEventListener("click",(e)=>{
//         console.log(e);
//     })
// });


// const btns = document.getElementById("plus");
// console.log(btns.textContent);

// let btns = Array.from(document.querySelectorAll("button"));
// console.log(btns);


// btns.forEach(btn => console.log(btn));

// const display = document.querySelector(".outputScreen");

// function bonjour(params) { display.textContent = "Hello"
    
// }

// btns.addEventListener("click", bonjour);

const outputScreen = document.getElementById('outputScreen');

const buttons = Array.from(document.querySelectorAll('button'));

buttons.map(button => button.addEventListener('click', (e)=>{
    switch (e.target.innerText) {
        case 'AC':
                outputScreen.innerText = '';
             break;
         case '=':
             try{
                outputScreen.innerText = eval(outputScreen.innerText);
             } catch{
                outputScreen.innerText = 'Error!';
             }
             break;
         default:
                outputScreen.innerText += e.target.innerText;
             break;
}}));


