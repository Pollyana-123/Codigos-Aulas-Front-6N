// let i = prompt("Informe a sua idade: ");
// if(i < 18){
// alert("Parabéns, você não foi designado hoje!");
// } 
// else{
// alert("Ótimo, você pode tudo!")
// }


function proc(){
    console.log("Entrou na função de processamento!");
    let n = document.getElementById("nome").value;
    console.log(n);

    //Saída de dados
    let res = document.getElementById("resultados");
    res.innerHTML += "<li>" + n + "</li>";
}