// validar cpf

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = soma(237)

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = soma(284)

primeiro digito = 11 - (237 % 11) = 5
segundo digito = 11 - (284 % 11) = 5
*/

// 705.484.450-52
// 973.343.390-02

// rewriting the code



// let cpf = "705.484.450-52";


function validateCPF(cpf) {
    let cleanCpf = cpf.replace(/\D+/g, "").slice(0,9);
    let sum = 0;
    let multiplier = 10;

    for (let n of cleanCpf) {

        sum += Number(n) * multiplier;
        multiplier--;
    
        if (multiplier === 1) {
            firstCpfDigit = 11 - (sum % 11);
    
            if (firstCpfDigit > 9){
                firstCpfDigit = 0
            }
    
            cleanCpf = cleanCpf.concat(String(firstCpfDigit));
            
            sum = 0;
            multiplier = 11;
    
            for (let j of cleanCpf) {
    
                sum += Number(j) * multiplier;
                multiplier--
    
                if (multiplier === 1) {
                    secondCpfDigit = 11 - (sum % 11)
                    if (secondCpfDigit > 9){
                        secondCpfDigit = 0
                    }
                    cleanCpf = cleanCpf.concat(String(secondCpfDigit))
                }
            }
    
        }
    }
    
    if (cpf.replace(/\D+/g, "") === cleanCpf) {
        return `valid`
    }
    else {
        return `invalid`
    }
}

// console.log(validateCPF("705.484.450-52"))
module.exports = validateCPF

// remove . and -
// const cpf2 = "973.343.390-02";
// let cleanCpf = cpf2.replace(/\D+/g, "");

// let var1 = Array.from(cleanCpf.slice(0,9));
// var1 = var1.map((value)=> Number(value));

// let var2 = var1.reduce((accum, value) => {accum--; return accum * value}, 10);
// console.log(var2);
// reduce the numbers in var1 to the sum of the multiplication between the digits and 10, 9, 8... and so on;
