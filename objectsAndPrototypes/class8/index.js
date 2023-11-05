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

// 705484450 52
// 97334339002

const cpf = "97334339002";
let cpfCopy = cpf.slice(0, 9);
let sum = 0;
let multiplier = 10;

for (let i=0; i < cpfCopy.length; i++) {
    let digit = cpfCopy[i];
    sum += Number(digit) * multiplier;
    multiplier--;

    if (i === 8) {
        let firstDigit = 11 - (sum % 11);
        if (firstDigit > 9) firstDigit = 0;
        cpfCopy += String(firstDigit)
        sum = 0;
        multiplier = 11;

        for (let j = 0; j < cpfCopy.length; j++) {
            digit = cpfCopy[j];
            sum += Number(digit) * multiplier;
            multiplier--

            if (j === 9) {
                let secondDigit = 11 - (sum % 11);
                if (secondDigit > 9) secondDigit = 0;
                cpfCopy += String(secondDigit);
            }
        }
    }
}