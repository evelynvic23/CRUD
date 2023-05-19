function deletarDados(){
    const cpf = document.getElementById("cpf").value;

    fetch(`pessoas`)
    .then(response => response.json())
    .then(data => {
        data.forEach(objeto =>{
            if(objeto.cpf === cpf){
                fetch(`pessoas/${objeto.id}`,{
                    method: "DELETE"
                })
            }
        })
    })

}