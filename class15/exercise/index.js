let num = prompt("Digite um número");
let numTitle = document.getElementById("number-title");
let text = document.getElementById("text");

numTitle.innerHTML = num;
text.innerHTML += `<p> Raiz quadrada é: ${Number(num) ** 0.5}</p>`;
text.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(Number(num))}</p>`;
text.innerHTML += `<p>${num} é NaN: ${Number.isNaN(Number(num))}</p>`;
text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(Number(num))}</p>`;
text.innerHTML += `<p>Arredondado para cima: ${Math.ceil(Number(num))}</p>`;
text.innerHTML += `<p>Com duas casas decimais: ${Number(num).toFixed(2)}<p>`;