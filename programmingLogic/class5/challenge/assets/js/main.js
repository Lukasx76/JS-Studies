function calculateBmi(){

    const form = document.querySelector(".form");
    const output = document.querySelector(".output");

    function formEventReceiver(browserEvent){
        browserEvent.preventDefault();

        const weight = form.querySelector(".weight").value;
        const height = form.querySelector(".height").value;

        let bmiResult = Number(weight) / Number(height) ** 2;

        if (bmiResult < 18.5) {
            output.innerHTML = `<p>Seu IMC É ${bmiResult.toFixed(2)} (Abaixo do peso)</p>`;
        } 
        else if (bmiResult > 18.5 && bmiResult < 24.9) {
            output.innerHTML = `<p>Seu IMC É ${bmiResult.toFixed(2)} (Peso normal)</p>`;
        } 
        else if (bmiResult > 25 && bmiResult < 29.9) {
            output.innerHTML = `<p>Seu IMC É ${bmiResult.toFixed(2)} (Sobrepeso)</p>`;
        } 
        else if (bmiResult > 30 && bmiResult < 34.9) {
            output.innerHTML = `<p>Seu IMC É ${bmiResult.toFixed(2)} (Obesidade grau 1)</p>`;
        } 
        else if (bmiResult > 35 && bmiResult < 39.9) {
            output.innerHTML = `<p>Seu IMC É ${bmiResult.toFixed(2)} (Obesidade grau 2)</p>`;
        } 
        else if (bmiResult > 40) {
            output.innerHTML = `<p>Seu IMC É ${bmiResult} (Obesidade grau 3)</p>`;
        }
        else {
            output.innerHTML = `<p>Peso inválido</p>`;
        }
    }

    form.addEventListener("submit", formEventReceiver);
}
calculateBmi();