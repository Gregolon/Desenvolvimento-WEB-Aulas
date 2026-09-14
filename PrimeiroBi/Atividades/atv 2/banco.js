const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const conta = {
    titular: "Vinícius Gregolon",
    agencia: "1024",
    numero: "98765-4",
    saldo: 1500.00
};


function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}


function exibirMenu() {
    console.log("\n=============================");
    console.log("💰 MENU - CAIXA ELETRÔNICO 💰");
    console.log("=============================");
    console.log("1 - Consultar dados da Conta");
    console.log("2 - Consultar Saldo");
    console.log("3 - Realizar Débito");
    console.log("4 - Realizar Crédito");
    console.log("0 - Sair do Sistema");
    
    rl.question("\nDigite o número da opção desejada: ", processarOpcao);
}


function processarOpcao(opcao) {
    switch (opcao) {
        case '1':
            console.log("\n--- DADOS DA CONTA ---");
            console.log(`Titular: ${conta.titular}`);
            console.log(`Agência: ${conta.agencia}`);
            console.log(`Número : ${conta.numero}`);
            exibirMenu();
            break;

        case '2':
            console.log(`\n💸 Seu saldo atual é: ${formatarMoeda(conta.saldo)}`);
            exibirMenu();
            break;

        case '3':
            rl.question("\nDigite o valor que deseja sacar/debitar: R$ ", (input) => {
                const valor = parseFloat(input.replace(',', '.')); 
                
                if (isNaN(valor) || valor <= 0) {
                    console.log("❌ Valor inválido. Tente novamente.");
                } else if (valor > conta.saldo) {
                    console.log("❌ Saldo insuficiente para esta operação!");
                } else {
                    conta.saldo -= valor;
                    console.log(`✅ Débito de ${formatarMoeda(valor)} realizado com sucesso!`);
                }
                exibirMenu();
            });
            break;

        case '4':
            rl.question("\nDigite o valor que deseja depositar/creditar: R$ ", (input) => {
                const valor = parseFloat(input.replace(',', '.'));
                
                if (isNaN(valor) || valor <= 0) {
                    console.log("❌ Valor inválido. Tente novamente.");
                } else {
                    conta.saldo += valor;
                    console.log(`✅ Crédito de ${formatarMoeda(valor)} realizado com sucesso!`);
                }
                exibirMenu();
            });
            break;

        case '0':
            console.log("\nObrigado por utilizar nosso sistema bancário. Até logo! 👋\n");
            rl.close();
            break;

        default:
            console.log("\n⚠️ Opção inválida. Por favor, escolha um número de 0 a 4.");
            exibirMenu();
            break;
    }
}

// Inicia a aplicação
exibirMenu();