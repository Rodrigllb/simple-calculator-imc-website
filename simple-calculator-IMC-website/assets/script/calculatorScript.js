
function executeCalcIMC(){ /*Realiza-se a chamada da função  "executeCalcIMC()"*/
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        document.getElementById('resultados').textContent = '0'; /*Se as variaveis não forem numeros, então, exibir a seguinte mensagem. "N/A"*/ 
      } else {
        /*Senão, realizar o calculo de imc abaixo e em seguida exibir o resultado no output.*/ 
        var imc = peso / (altura * altura);
        document.getElementById('resultados').textContent = imc.toFixed(2);
      }

      /*Algoritimo da Tabela de de IMC*/

      if(imc < 18.5){
        document.getElementById('statusIMC').textContent = 'Você está abaixo ou muito abaixo do peso. Alimente-se melhor!';
      } else if(imc >= 18.5 && imc <= 24.9){
        document.getElementById('statusIMC').textContent = 'Você está em seu peso normal, continue nesse ritmo!';
      } else if(imc >= 25.0 && imc <= 29.9){
        document.getElementById('statusIMC').textContent = 'Você está em sobrepeso!';
      } else if(imc >= 30.0 && imc <= 34.9){
        document.getElementById('statusIMC').textContent = 'Você está em Obesidade Grau I! Nivel inicial de riscos para a saúde.';
      } else if(imc >= 35.0 && imc <= 39.9){
        document.getElementById('statusIMC').textContent = 'Você está em Obesidade Grau II! Nivel intermediário de riscos para a sua saúde.';
      } else if(imc >= 40.0){
        document.getElementById('statusIMC').textContent = 'Você está em Obesidade Grau III! Procure um médico o quanto antes! Permanecer em obesidade morbida por longos períodos pode acarretar vários riscos a saúde podendo levar a obito.';
      }



}

/*São ouvintes de eventos aos elementos com os IDs "peso" e "altura". Quando um evento keyup (quando uma tecla é liberada) ocorrer em qualquer um desses elementos, a função executeCalcIMC será chamada.*/
document.getElementById('peso').addEventListener('keyup', executeCalcIMC);

document.getElementById('altura').addEventListener('keyup', executeCalcIMC);

