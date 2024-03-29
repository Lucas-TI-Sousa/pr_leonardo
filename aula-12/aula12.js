let produtos = [
    {
        "name": "Blusa Nike",
        "price": 109.90,
        "color": "White",
        "img1": "https://cdnv2.moovin.com.br/kenpo/imagens/produtos/min/camiseta-nike-liverpool-fc-m-nk-ssl-futura-masculino-vermelho-d1b1db4c23dd4a2d77fc27a84905f7f7.jpg",
        "img2": "https://cdnv2.moovin.com.br/kenpo/imagens/produtos/min/camiseta-nike-liverpool-fc-m-nk-ssl-futura-masculino-vermelho-2fe5f0af126a99e98fe1f1cfd882da4f.jpg",
        "img3": "https://cdnv2.moovin.com.br/kenpo/imagens/produtos/min/camiseta-nike-liverpool-fc-m-nk-ssl-futura-masculino-vermelho-35b43e6f6e9705ba83335c53714f450d.jpg"
    },
    {
        "name": "Blusa Adidas",
        "price": 99.90,
        "color": "White",
        "img1": "https://static.netshoes.com.br/produtos/camiseta-adidas-logo-linear-ii-masculina/14/FB8-8501-014/FB8-8501-014_zoom1.jpg?ts=1703689625&",
        "img2": "https://static.netshoes.com.br/produtos/camiseta-adidas-logo-linear-ii-masculina/14/FB8-8501-014/FB8-8501-014_zoom2.jpg?ts=1703689625&",
        "img3": "https://static.netshoes.com.br/produtos/camiseta-adidas-logo-linear-ii-masculina/14/FB8-8501-014/FB8-8501-014_zoom3.jpg?ts=1703689625&"
    },
    {
        "name": "Blusa Lacoste",
        "price": 209.90,
        "color": "White",
        "img1": "https://static.netshoes.com.br/produtos/camiseta-lacoste-logo-masculina/10/D66-7579-010/D66-7579-010_zoom1.jpg?ts=1695701088&",
        "img2": "https://static.netshoes.com.br/produtos/camiseta-lacoste-logo-masculina/10/D66-7579-010/D66-7579-010_zoom2.jpg?ts=1695701088&?ims=544xhttps://static.netshoes.com.br/produtos/camiseta-lacoste-logo-masculina/10/D66-7579-010/D66-7579-010_zoom2.jpg?ts=1695701088&?ims=1088x",
        "img3": "https://static.netshoes.com.br/produtos/camiseta-lacoste-logo-masculina/10/D66-7579-010/D66-7579-010_zoom3.jpg?ts=1695701088&"
    },
    {
        "name": "Blusa Reserva",
        "price": 399.90,
        "color": "White",
        "img1": "https://lojausereserva.vtexassets.com/arquivos/ids/8162564/0034603014_01.jpg?v=638313338254230000",
        "img2": "https://lojausereserva.vtexassets.com/arquivos/ids/8162565-2400-auto?v=638313338268430000&width=2400&height=auto&aspect=true",
        "img3": "https://lojausereserva.vtexassets.com/arquivos/ids/8162566-2400-auto?v=638313338284070000&width=2400&height=auto&aspect=true"
    },
    {
        "name": "Blusa Gucci",
        "price": 599.90,
        "color": "White",
        "img1": "https://cdn-images.farfetch-contents.com/12/56/27/18/12562718_52925956_2048.jpg",
        "img2": "https://cdn-images.farfetch-contents.com/12/56/27/18/12562718_52925951_2048.jpg",
        "img3": "https://cdn-images.farfetch-contents.com/12/56/27/18/12562718_52925957_2048.jpg"
    }
]
let vitrine= $("#vitrine");

//variavel auciliadora
let aux_vitrine = "";

//leitura do array de objeto

//produtos.forEach(item_produto =>{
for(let y = 0; y < produtos.length; y++){
    console.log(produtos[y].name)
    console.log(produtos[y].color)
    console.log(produtos[y].price)

    //variavel de parcelas 
    const parcela = produtos[y].price / 3;
    
    //variavel acumuladora
    aux_vitrine += `<div class="col-md-3"> <div class="card">
                        <h5 class="card-header">
                            ${produtos[y].name}
                        </h5>
                        <div class="card-body">
                            <div class="img-grande">
                                <img src="${produtos[y].img1}" id="imagem-grande-${y}">
                            </div>
                            <p>Cor: ${produtos[y].color}</p>
                            <p>${produtos[y].price.toLocaleString('pt-br',
                                        {style: "currency", "currency": "BRL"})}</p>
                            <p>3x de ${parcela.toLocaleString('pt-br',
                                        {style: "currency", "currency": "BRL"})} s/juros</p>
                            <div class="row">
                                <div class="col">
                                    <img
                                        src="${produtos[y].img1}"
                                        onclick="mudarImg(${y}, '${produtos[y].img1}')"
                                    >
                                </div> 
                                <div class="col">
                                    <img
                                        src="${produtos[y].img2}"
                                        onclick="mudarImg(${y}, '${produtos[y].img2}')"
                                    >
                                </div>
                                <div class="col">
                                    <img
                                        src="${produtos[y].img3}"
                                        onclick="mudarImg(${y}, '${produtos[y].img3}')"
                                    >
                                </div>                 
                            </div>        
                        </div>        
                    </div>
                </div>`
};

vitrine.html(aux_vitrine);

/*Criar  a função para modificar as imagens pequenas em maiores*/
function mudarImg(posicao, imagem){
    let imagem_grande = $("#image-grande-" + posicao);
    imagem_grande.prop("src", imagem)

}
