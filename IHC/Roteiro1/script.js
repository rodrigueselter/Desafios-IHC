// scripts.js

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / ((altura / 100) ** 2);
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 24.9) {
        return 'Peso normal';
    } else if (imc < 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidade';
    }
}

// Adiciona evento ao formulário de cálculo do IMC
document.getElementById('form-imc').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Calcula o IMC
    const imc = calcularIMC(peso, altura);

    // Exibe o resultado
    document.getElementById('valor-imc').textContent = imc.toFixed(2);
    document.getElementById('classificacao').textContent = classificarIMC(imc);
});
