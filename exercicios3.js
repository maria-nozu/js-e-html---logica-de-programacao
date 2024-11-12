function ehPrimo(n) {
    if (n <= 1) {
        return false; // 1 e números negativos não são primos
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Se n for divisível por algum número, não é primo
        }
    }
    return true; // Se não encontrar divisores, é primo
}

console.log(ehPrimo(7)); // Saída: true
console.log(ehPrimo(10)); // Saída: false
console.log(ehPrimo(1));  // Saída: false