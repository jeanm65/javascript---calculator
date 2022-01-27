const buttons = document.querySelectorAll(".btn");
const result = document.getElementById('result');

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        // le id est tout de suite reconnu par JS sans le declarer
        result.textContent += e.target.id;
        // il faut le concatener avec += pour qu'on puisse écrire des chiffres plus longues
    })
})

console.log(equal); // ce equal est tout de suite reconnu par js comme etant un id dans notre html

equal.addEventListener('click', ()=>{
    result.textContent = eval(result.textContent);
})

clear.addEventListener('click', ()=>{
    result.textContent = ""
})