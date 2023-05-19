fetch("pessoas")

.then(response => {
    return response.json()
}).then(pessoas => {

    for (var x = 0; x < 100; x++) {

    document.getElementById("nome").innerHTML += "Dados: <br>" + "<br>Nome: " + pessoas[x].nome +    "<br>CPF: " + pessoas[x].cpf +        "<br>Idade: " + pessoas[x].idade + "<br>Senha: " + pessoas[x].senha +       "<br>Data: " + pessoas[x].data + "<br>Cargo: " + pessoas[x].cargo + "<br>Objetivo: " + pessoas[x].objetivo + "<br>Pontos fortes: " + pessoas[x].pontoF + "<br>Pontos de melhoria: " + pessoas[x].pontoM + "<br>Sugestões: " +  pessoas[x].sugestoes + "<hr>";
   
    

        
        
    

     }

   

   
    console.log(pessoas);

   
})