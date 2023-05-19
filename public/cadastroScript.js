function enviarDados(){
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpfCadastro').value;
    const senha = document.getElementById('senha').value;
    const data = document.getElementById('data').value;
    const cargo = document.getElementById('cargo').value;
    const objetivo = document.getElementById('objetivo').value;
    const pontoF = document.getElementById('pontoF').value;
    const pontoM = document.getElementById('pontoM').value;
    const sugestoes = document.getElementById('sugestoes').value;

    
        
    fetch(`pessoas`,{
        method: "POST",
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({nome: nome, idade: idade, cpf: cpf, senha: senha, data: data, cargo: cargo, objetivo: objetivo, pontoF: pontoF, pontoM: pontoM, sugestoes: sugestoes})
    })

    .then(response => response.json(),

    alert("Cadastro realizado com sucesso!"),

    window.location.reload()

    )



    
 
    }

