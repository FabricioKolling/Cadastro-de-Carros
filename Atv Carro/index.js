
function Salvar(){
    
    let marca = document.getElementById('marcaCarro').value;
    let modelo = document.getElementById('modeloCarro').value;

    const carro = {
        marca: marca,
        modelo: modelo, 
    }
    
    localStorage.setItem("Carros", JSON.stringify(carro))

}
alert("Carro cadastrado com sucesso!!")