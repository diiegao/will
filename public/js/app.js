class LotoFacil {
    constructor() {

    }

    generateNewList() {
        const numbers = [];

        while (numbers.length < 50) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        return numbers.sort((a, b) => a - b);
    }
}

const Teste = new LotoFacil();
const list = Teste.generateNewList();
const result = document.querySelector('.result');
list.map(e => result.innerHTML += `<span>${e}</span>`);