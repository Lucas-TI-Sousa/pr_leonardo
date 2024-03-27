let formulario = $("#form-cep");

formulario.on("submit", () => {
    event.preventDefault();

    console.log(formulario.cep);
    
    let cep = $("#cep").val()

    console.log(cep);
    //AJAX - requisição de consulta do CEP
    $.ajax({
        //Origem da informação
        "url": "https://viacep.com.br/ws/"+cep+"/json/",
        //formato da requisição
        "type": "GET",
        //Fformato da resposta
        "dataType": "JSON",
        //qUAIS OS PARAMETROS QUE A ORIGEM ESOERA
        //"data": "cep="+ cep + "&formato=JSON",
        //Statos de carregando
        "beforeSend": () => {},
        //Status de sucesso
        "success": (resposta) => {
            console.log(resposta.logradouro);
        }
})

})