function createPerson(){
    // selecting the tag form by class
    const form = document.querySelector('.form');

    // selecting the div by tag
    const result = document.querySelector('.result');

    // creating an array to store the objects
    const people = [];

    // creating a function to prevent the brower to refresh the page  
    function formEventReceiver (browserEvent) {
        browserEvent.preventDefault();

        // getting the result placed in the input element
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        // inserting the values in the array
        people.push({nome: nome.value, sobrenome: sobrenome.value, altura: altura.value, peso: peso.value});

        // adding a paragraph in the div.
        result.innerHTML +=`<p>${nome.value} ${sobrenome.value} ${altura.value} ${peso.value}</p>`;
    }
    // allowing this script to run in the index.html page whenever I click in the button submit
    form.addEventListener('submit', formEventReceiver);
}
createPerson();