function atualizarDados(){
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nomeAtualizar').value;
    const idade = document.getElementById('idadeAtualizar').value;
    const cpf = document.getElementById('cpfAtualizar').value;
    const senha = document.getElementById('senhaAtualizar').value;
    const data = document.getElementById('dataAtualizar').value;
    const cargo = document.getElementById('cargoAtualizar').value;
    const objetivo = document.getElementById('objetivoAtualizar').value;
    const pontoF = document.getElementById('pontoFAtualizar').value;
    const pontoM = document.getElementById('pontoMAtualizar').value;
    const sugestoes = document.getElementById('sugestoesAtualizar').value;


    
        
    fetch(`pessoas/${id}`,{
        method: "PUT",
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({nome: nome, idade: idade, cpf: cpf, senha: senha, data: data, cargo: cargo, objetivo: objetivo, pontoF: pontoF, pontoM: pontoM, sugestoes: sugestoes})
    })

    .then(response => response.json())
 
    }