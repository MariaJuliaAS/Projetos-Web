let inputElement = document.querySelector('#addNota');
let buttonElement = document.querySelector('#buttonAdd');
let sectionNota = document.querySelector('#notas');

let guardarNota = JSON.parse(localStorage.getItem('NotasHub')) || [];

function addNota(){
    if(inputElement.value === ''){
        alert('Faça uma anotação!');
    }else{
        let novaNota = inputElement.value;
        guardarNota.push(novaNota);

        inputElement.value = '';

        mostrarNota();
        salvarDados();
    }
}

function mostrarNota(){
    sectionNota.innerHTML = '';

    guardarNota.map((item) => {
        let articleNota = document.createElement('article');
        let textNota = document.createTextNode(item);
        
        articleNota.appendChild(textNota);
        sectionNota.appendChild(articleNota);
    });
}


function salvarDados(){
    localStorage.setItem('NotasHub', JSON.stringify(guardarNota));
}

mostrarNota();
