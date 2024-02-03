function verTabuada() {
    const numero = document.getElementById("number").value;
    const tabuadaSection = document.getElementById("tabuada");
    tabuadaSection.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const linha = document.createElement("p");
        linha.textContent = `${numero} x ${i} = ${resultado}`;
        tabuadaSection.appendChild(linha);
    }
}

function limpar(){
    const tabuadaSection = document.getElementById("tabuada");
    tabuadaSection.innerHTML = ""; 
}