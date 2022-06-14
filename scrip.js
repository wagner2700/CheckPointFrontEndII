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
        <h2> 
        ${conta.titulo} </h2>
        <p> 
        ${conta.descricao} </p>
        <img src="${conta.url}"> 

        `
card.setAttribute("class", "card");
contas.appendChild(card);

});
}
