let valorTotal = parseFloat(0);

//iniciar o campo 'quantidade' focado e com 1 unidade
document.getElementById('quantidade').focus();
document.getElementById('quantidade').value = 1;
function adicionar() {
    
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    
    //calcular o preço, o nosso subtotal 
    let preço = parseFloat(valor * quantidade);
    
    
    //Se houver algum campo vázio, alerta mensagem de erro
    if(quantidade != 0) {
        
        //adicionar no carrinho
        let listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preço}</span>
        </section>`;
        limparQuantidade();
        
        //atualizar o valor total
        valorTotal = parseFloat(valorTotal + preço);
        let campoDoValorTotal = document.getElementById('valor-total');
        //COLOCA O FORMATO BRL NO TOTAL DO CARRINHO.
        campoDoValorTotal.textContent = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
    }   else {
            alert('Preencha o campo "quantidade" corretamente');
            document.getElementById('quantidade').focus();
            document.getElementById('quantidade').value = 1;
        } 
 }
 //function para limpar a caixa de quantidade   
 
 function limparQuantidade(quantidade) {
    quantidade = document.getElementById('quantidade');
    quantidade.value = '';
    document.getElementById('quantidade').focus();
    document.getElementById('quantidade').value = 1;
 } 
//function apaga todo o carrinho

function limparCarrinho() {
        document.getElementById('lista-produtos').innerHTML = '';
        document.getElementById('valor-total').textContent = '';
}
