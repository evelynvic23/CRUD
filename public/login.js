function buscarDados(){
    const cpf = document.getElementById('cpfAtualizar').value;

    

    fetch(`pessoas`,{
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const pessoaEncontrada = data.find(pessoa => pessoa.cpf === cpf)
        if(pessoaEncontrada){
            document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome;
            document.getElementById('idadeAtualizar').value = pessoaEncontrada.idade;
            document.getElementById('cpfAtualizar').value = pessoaEncontrada.cpf;
            document.getElementById('senhaAtualizar').value = pessoaEncontrada.senha;
            document.getElementById('dataAtualizar').value = pessoaEncontrada.data;
            document.getElementById('cargoAtualizar').value = pessoaEncontrada.cargo;
            document.getElementById('objetivoAtualizar').value = pessoaEncontrada.objetivo;
            document.getElementById('pontoFAtualizar').value = pessoaEncontrada.pontoF;
            document.getElementById('pontoMAtualizar').value = pessoaEncontrada.pontoM;
            document.getElementById('sugestoesAtualizar').value = pessoaEncontrada.sugestoes;

            document.getElementById('id').value = pessoaEncontrada.id;
        }else{
            alert("Pessoa não encontrada!")
        }
    })
}


//PUT

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


    
        
    fetch(`http://localhost:3000/pessoas/${id}`,{
        method: "PUT",
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({nome: nome, idade: idade, cpf: cpf, senha: senha, data: data, cargo: cargo, objetivo: objetivo, pontoF: pontoF, pontoM: pontoM, sugestoes: sugestoes})
    })

    .then(response => response.json())
 
    }