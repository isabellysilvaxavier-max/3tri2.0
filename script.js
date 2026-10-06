let colecaoMidia = [];

async function carregarCatalogo(){
    //Acessa a tag que exibirá os cards
    //Emite mensagem de espera
    const container_card = document.getElementById('catalogo-grid');
    container_card.innerHTML = '<p> Carregando intes, aguarde.</p>';

try{
    //método GET. fetch() já possui get como padrão
    const resposta = await fetch('dados.json');
    if(!resposta.ok) throw new Error('Erro ao buscar dados');
       //Transforma os dados no formato json()
    colecaoMidia = await resposta.json();
    renderizarGrid(colecaoMidia);

}catch(erro){
     container_card.innerHTML = `<p style ="color:#ef4444;">
     Erro ao carregar catálogo: ${erro.message}</p>`;
}
}

//Métodos POST
 async function adicionarIntem(event){
    event.preventDefault();

    const novoItem ={
        id:,
        titulo:,
        categoria:,
        plataforma:,
        nota:,
        status:,
    }
 }
function renderizarGrid(lista){
    const container = document.getElementById('catalogo-grid');
    container.innerHTML = '';

    if(lista.length ===0){
        container.innerHTML = `<p class="info">Nenhum item cadastro
        nesta categoria</p>`;
        return;
    }
lista.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML =`
    ${item.capa?`<img src="${item.capa}" alt="${item.titulo}" class="capa-midia"`:''}
    <div>
        <span class= "tag-catgoria">${item.categoria}</span>
        <h3>${item.titulo}</h3>
        <p clas="info">plataforma:${item.plataorma}</p>
        <p cla="info">Nota:<span class="nota">${item.nota.toFixed(1)}</span></p>
        <p class="info">Status: <strong>${item.status}</strong></p>

        
    </div>
    


    `;
    container.appendChild(card);
    
});
}
//Excuta a unção e carregarCatalogo quando inicia a página
document.addEventListener('DOMContLoaded',carregarCatalogo);
