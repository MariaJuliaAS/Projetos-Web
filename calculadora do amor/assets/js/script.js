function caulcular(){
    
    const valor = document.getElementById('input-number').value;
    let sectionValor = document.getElementById('resultado');
    
    if(valor >= 0 && valor < 5){
        sectionValor.innerHTML = '<p> É sério? Pode ir deixando de gracinha. 😡</p>';
    } else if(valor >=5 && valor < 8){
        sectionValor.innerHTML = '<p>Pouquinho demais, é óbvio que eu te amo mais. 🤷‍♀️</p>';
    } else if(valor >= 8 && valor <= 10){
        sectionValor.innerHTML = '<p>Até que você me ama, porém não mais que eu. 😘</p>';
    } else if(valor > 10 && valor <= 20){
        sectionValor.innerHTML = '<p>Tá tentando apelar pra ver se ganha né?! Sinto muito. 🤣</p>';
    } else if(valor >= 20 && valor <= 30){
        sectionValor.innerHTML = '<p>Você realmente me ama né, mas tenho que te contar um segredo, eu te amo mais. ❤️</p>';
    } else {
        sectionValor.innerHTML = '<p>Vai ter que provar, me comprar um açai que eu revejo isso ai. 😇</p>';
    }
    
    document.getElementById('input-number').value = '';
}