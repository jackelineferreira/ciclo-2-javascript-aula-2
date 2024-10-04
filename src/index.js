// Desafio 1
// A linha 3 deste código permikte ler a entrada que o usuário irá fornecer.
const readline = require('readline-sync');


//Aqui estou definindo uma função que é "lcularAreaParede" onde defini dois parâmetros largura e altura.
function calcularAreaParede(largura, altura) {
  const area = largura * altura;
  return area;
}

// Aqui eu solicito ao usuário que forneça o valor para altura da parede, onde 
//o valor será inserido na variavel.
//A função "IF", verifica se a altura fornecida é um número válido e menor ou igaul a zero;
const altura = readline.questionFloat('Digite a altura da parede em metros: ');
if (isNaN(altura) || altura <= 0) {
  console.log('Por favor, insira um valor válido para a altura.');
  process.exit(1); 
}

// Aqui defini os mesmo parâmetros para a variavel largura.
const largura = readline.questionFloat('Digite a largura da parede em metros: ');
if (isNaN(largura) || largura <= 0) {
  console.log('Por favor, insira um valor válido para a largura.');
  process.exit(1);
}

// Aqui estou chamando a função "cacularAreaParede" retornando os valores e armazenando na variavel area.
const area = calcularAreaParede(largura, altura);

// com o console.log exibo o resultado.
console.log(`A área da parede é ${area.toFixed(2)} metros quadrados.`);



//-------------------------------------------------------------------------------------------------

// Desafio 2

// Imagine que você está desenvolvendo um sistema de cadastro para uma empresa.
// Quando um usuário se cadastra, ele insere seu nome e sobrenome em campos separados.
// Você precisa juntar essas duas informações para formar o nome completo do
// usuário e exibir uma mensagem de boas-vindas.

// Função para criar a mensagem de boas-vindas;
//Na linha 47 defino a função chamada de "criarMensagemDeBoasVindas",
//E também determino dois parâmetros para a função que são respectivamente "Nome e sobrenome do usuário"
function criarMensagemDeBoasVindas(nome, sobrenome) {
      const nomeCompleto = `${nome} ${sobrenome}`;
      return `Bem-vindo(a), ${nomeCompleto}!`; 
  }
  
  //Nas linhas 54 e 55 defino as duas variavel como constantes e atribuo a elas os valores que serão o nome e sobrenome do usuário;
  const nome = "João";
  const sobrenome = "Silva";
  
  // Nesta linha chamo a função criada e informo os valores da variavel; 
  //O resultado da função será armazenar os valores das variaveis nome e sobrenome e a mensagem de boas vindas;
  const mensagem = criarMensagemDeBoasVindas(nome, sobrenome);
  
  // Exibindo a mensagem no console
  console.log(mensagem);
  
//-------------------------------------------------------------------------------------------------
//Desafio 3
// Você está trabalhando no departamento de recursos humanos de uma empresa, e precisa
// calcular quantos dias um funcionário já viveu até agora, com base na idade informada.
// O funcionário informa sua idade em anos, e você deve converter esse valor para dias,
// considerando que todos os anos têm 365 dias.

// Nesta linha, eu estou definindo uma função chamada calcularDiasVividos, que recebe um,
//parâmetro chamado idadeEmAnos. Esse parâmetro deve representar a idade da pessoa em anos,
//também eu estou verificando se o tipo do valor fornecido para idadeEmAnos não é um número 
//ou se ele é menor que zero. 
//Na função return, se a condição anterior for verdadeira (ou seja, se a entrada não for válida), 
//eu retorno uma mensagem solicitando que o usuário insira uma idade válida. Isso interrompe a execução da função nesse ponto.
function calcularDiasVividos(idadeEmAnos) {
      if (typeof idadeEmAnos !== 'number' || idadeEmAnos < 0) {
          return "Por favor, insira uma idade válida.";
      }
      
      // Na linha abaixo, eu estou declarando uma constante chamada diasPorAno e atribuindo o valor de 365 a ela, 
      //que representa o número de dias em um ano. Essa constante será utilizada para realizar o cálculo.
      const diasPorAno = 365;

      // declaro uma nova constante chamada diasVividos. Eu a estou calculando multiplicando a idade em anos (idadeEmAnos) pelo número de dias em um ano (diasPorAno). 
      //O resultado dessa multiplicação é a quantidade total de dias vividos pela pessoa.
      const diasVividos = idadeEmAnos * diasPorAno;
      //Aqui eu retorno o valor de diasVividos, que representa a quantidade total de dias que a pessoa viveu.
      return diasVividos;
  }
  
  // Aqui, eu estou declarando uma constante chamada idadeEmAnos e atribuindo o valor de 30 a ela. Este valor representa a idade da pessoa para o exemplo.
  const idadeEmAnos = 30;

  //E nesta linha, eu estou chamando a função calcularDiasVividos passando idadeEmAnos como argumento. O resultado do cálculo é armazenado na constante resultado.
  const resultado = calcularDiasVividos(idadeEmAnos);
  
  // Finalmente, nesta linha, eu utilizo console.log para exibir uma mensagem no console que informa a quantidade de dias que o funcionário viveu, concatenando a mensagem com o valor armazenado na variável resultado.
  console.log("O funcionário viveu aproximadamente " + resultado + " dias.");
  

//-------------------------------------------------------------------------------------------------


// Desafio 4

// Você trabalha em uma empresa de eventos, e foi solicitado a calcular quanto tempo
// um evento durou. Você recebeu o total de minutos que o evento durou, mas precisa
// converter esse valor em horas e minutos para gerar um relatório. Por exemplo,
//  se o evento durou 135 minutos, você deve dizer que ele durou 2 horas e 15 minutos.






//Nesta linha, eu declaro uma função chamada calcularDuracaoEvento, que recebe um parâmetro 
//denominado duracaoEmMinutos. Este parâmetro representa a duração do evento em minutos.
function calcularDuracaoEvento(duracaoEmMinutos) {
      // Aqui, eu calculo a quantidade de horas que o evento durou. Para isso, utilizo a 
      //função Math.floor() para arredondar para baixo o resultado da divisão de duracaoEmMinutos por 60, o que me fornece o número total de horas inteiras.
      var horas = Math.floor(duracaoEmMinutos / 60);

      //Nesta linha, eu calculo a quantidade de minutos restantes após contabilizar as horas. Para isso, utilizo o operador módulo (%), que retorna o restante 
      //da divisão de duracaoEmMinutos por 60. Assim, obtenho os minutos que não completam uma hora inteira.
      var minutos = duracaoEmMinutos % 60;
  
      // Aqui, eu retorno uma string formatada que informa a duração do evento,  resultando na frase que indica a duração total do evento em horas e minutos.
      return `${horas} horas e ${minutos} minutos.`;
  }
  
  //  eu declaro uma variável chamada duracaoEmMinutos, que armazena o valor 135. 
  var duracaoEmMinutos = 135;

  //console.log() para exibir no console a mensagem resultante da chamada da função calcularDuracaoEvento com o argumento duracaoEmMinutos
  console.log(`O evento durou ${calcularDuracaoEvento(duracaoEmMinutos)}`);
  
