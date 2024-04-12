let btn = document.getElementById("btn");
let resultado = document.getElementById('resultado');
arrPessoa = []

function cadastrar () {
    let nome = document.getElementById('nome').value 
    let posicao = document.getElementById('posicao').value 

    let peso = document.querySelector('#peso').value
    let altura = document.querySelector('#altura').value

    const pessoa={
      nome: nome,
      posicao: posicao,
      peso: peso,
      altura: altura,
      imc: calcularIMC(peso, altura),
      categoriaImc: categoriaIMC(calcularIMC(peso, altura))
  }

  arrPessoa.push(pessoa);
  //console.log(arrPessoa);
  imprimir();


    // let imc = calcularIMC(peso, altura);
    // let categoriaIMC = categoriaIMC(imc);
    console.log(imc);

  //  resultado.innerHTML = "NOME: " + nome + " SOBRENOME: " + sobrenome + ".";
   


}

function calcularIMC(peso, altura) {

  let imc = peso / Math.pow(altura, 2);

  return imc;
}

function categoriaIMC(imc) {
  if (imc <= 18.5) {
    return 'Abaixo do normal';

  } else if (imc <= 24.9) {
    return 'Normal';

  } else if (imc <= 29.9) {
    return 'Sobrepeso';

  } else if (imc <= 34.9) {
    return 'Obesidade grau I';

  } else if (imc <= 39.9) {
    return 'Obesidade grau II';

  } else {
    return 'Obesidade grau III';
  }

}

function imprimir() {

  resultado.innerHTML = '';

  for(let i = 0; i < arrPessoa.length; i++)

  resultado.innerHTML += ` 

  <tr.>
      <td>${arrPessoa[i].nome} </td>
      <td> ${arrPessoa[i].posicao} </td>
      <td>${arrPessoa[i].altura} </td>
      <td>${arrPessoa[i].peso} </td>
      <td> ${arrPessoa[i].imc.toFixed(2)} </td>
      <td>${arrPessoa[i].categoriaImc} </td>
  </tr.> `    

}

btn.addEventListener('click',cadastrar);

