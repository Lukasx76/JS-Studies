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

// 918139880 80

// obter 918139880 e multiplicar por 10,9,8,7...2
// obter nove primeiros digitos
// multiplicar por 10,9,8,7...2

const cpf = "91813988080";
let cpfCopy = cpf.slice(0, 9);
let sum = 0;
let multiplier = 10;
let firstDigit;
let secondDigit;

for (let i = 0; i <= 8; i++) {
    let digit = Number(cpf[i]);
    sum += digit * multiplier;
    multiplier -= 1;

    if (i == 8) {
        firstDigit = 11 - (sum % 11);
        cpfCopy = cpfCopy + String(firstDigit);
        multiplier = 11;
        sum = 0;
        for (let j = 0; j <= 9; j++) {
            let digit = Number(cpf[j]);
            sum += digit * multiplier;
            console.log(digit + "x" + multiplier + "=" + digit * multiplier);
            multiplier -= 1;
        
            if (j == 9) {
                secondDigit = 11 - (sum % 11);
                
                cpfCopy = cpfCopy + String(secondDigit);
            }
        }
    }
}