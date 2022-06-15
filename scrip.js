const formulario = document.querySelector('form')
const contas = document.querySelector('.container');

const contasCriadas = []


formulario.addEventListener('submit' , function(event){

    const dados = Object.fromEntries(new FormData(formulario).entries())

    event.preventDefault()
    adicionarCard(dados)
})

function adicionarCard(dados){
    contasCriadas.push(dados)

    contas.innerHTML= " "

    contasCriadas.forEach((conta) =>{

        const card = document.createElement('div')
        card.innerHTML = ` 
        <div class="card2">
        <h2 class="titleCard"> 
        ${conta.titulo} </h2>

        <p class="descricaoCard"> 
        ${conta.descricao} </p>
        <div class="imgCard">
        <img src="${conta.url}"> 
        </div
        </div>

        `
card.setAttribute("class", "card");
contas.appendChild(card);

});
}


