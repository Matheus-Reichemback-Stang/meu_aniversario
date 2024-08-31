// Pegando a Data de hoje, mas o que nos interessa é o ano atual
const anoAtual = new Date()

// Definindo a data do Aniversário e acrescentando 1 ano para o ano atual
const dataDoAniversario = new Date(`May 03, ${anoAtual.getFullYear() + 1} 00:00:00`);

// Pegando TimeStamp do Aniversário
const timeStampDoAniversario = dataDoAniversario.getTime();

    // Atualizando o Timer da página
const atualizadorDoTimer = setInterval(function() {


    // Pegando o momento atual
    const agora = new Date();
    // Pegando o TimeStamp do momento atual
    const timeStampDeAgora = agora.getTime();


    // Diferença de Milissegundos do momento atual até o aniversário
    const diferencaDeTempo = timeStampDoAniversario - timeStampDeAgora;


    // Definindo quanto tempo tem um dia, uma hora, um minuto em milissegundos
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;


    // Quanto tempo falta até o aniversário
    // em DIAS, HORAS, MINUTOS e SEGUNDOS
    const diasAteOAniversario = Math.floor(diferencaDeTempo / diaEmMs);
    const horasAteOAniversario = Math.floor((diferencaDeTempo % diaEmMs) / horaEmMs)
    const minutosAteOAniversario = Math.floor((diferencaDeTempo % horaEmMs) / minutoEmMs)
    const segundosAteOAniversario = Math.floor((diferencaDeTempo % minutoEmMs) / 1000)


    // Recuperando o elemento HTML onde vai ficar o tempo
    const span = document.querySelector('.main__timer')
    // Aplicando os valores das constantes no elemento
    span.innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`

    const idade = agora.getFullYear() - 2005;

    if(diferencaDeTempo < 0){
        // Parando o Atualizador, para ele não continuar rodando e ficar números negativos
        clearInterval(atualizadorDoTimer)

        
        span.innerHTML = "Matheus fez 20 anos"
    }




}, 1000);

