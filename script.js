  
        let interacao = document.querySelector('input#clicar')
        interacao.addEventListener('click', clicar)

        function clicar(){
            interacao.style.background = ''
        }

        /*Atribuindo variaveis aos inputs*/

        function calcular(){

        let valorCombustivel = Number(document.querySelector('input#txtn1').value);
        let consumoMedioDeLitroPorKm = Number(document.querySelector('input#txtn2').value);
        let distanciaTotalPercorrida = Number(document.querySelector('input#txtn3').value);
        let quantidadePedagios = Number(document.querySelector('input#txtn4').value);
        let custoPorPedagio = Number(document.querySelector('input#txtn5').value);
        let quantidadeDeParadas = Number(document.querySelector('input#txtn6').value);
        let gastoPorParada = Number(document.querySelector('input#txtn7').value);

        
        // Validação de preenchimento

        if (!valorCombustivel || !consumoMedioDeLitroPorKm || !distanciaTotalPercorrida) {
            alert("Por favor, preencha todos os campos obrigatórios corretamente.");
            return;
        }

        let quantidadeTotalDeCombustivel = distanciaTotalPercorrida / consumoMedioDeLitroPorKm;
        let valorTotalEmCombustivel = quantidadeTotalDeCombustivel * valorCombustivel;
        let valorTotalEmPedagio = quantidadePedagios * custoPorPedagio;
        let valorTotalEmParadas = quantidadeDeParadas * gastoPorParada;
        let valorTotalGasto = valorTotalEmCombustivel + valorTotalEmPedagio + valorTotalEmParadas;

        /*Exibir resultados concatenados*/

        let resposta = document.getElementById('resposta');
        resposta.innerHTML = 
        `
        <p>Você gastará ${quantidadeTotalDeCombustivel.toFixed(1)} litros de combustível.</p>
        <p>O valor gasto com combustível será de ${valorTotalEmCombustivel.toFixed(2)}.</p>
        <p>O valor gasto com pedágios será de ${valorTotalEmPedagio.toFixed(2)}.</p>
        <p>O valor gasto nas paradas será de ${valorTotalEmParadas.toFixed(2)}.</p>
        <p>O custo total da viagem será de ${valorTotalGasto.toFixed(2)}.</p>

        `;

        }