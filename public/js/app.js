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

    twelveGroup(n, m, k) {
        // const n = 100;
        // const m = 12;
        // const k = 50;
        let arr = Array.from({ length: n }, (_, i) => i + 1);
        let groups = [];

        for (let i = 0; i < m; i++) {
            let group = [];
            for (let j = 0; j < k; j++) {
                let randomIndex = Math.floor(Math.random() * arr.length);
                group.push(arr[randomIndex]);
                arr.splice(randomIndex, 1);
            }
            group.sort((a, b) => a - b);
            groups.push(group);
            arr = Array.from({ length: n }, (_, i) => i + 1);
        }

        return groups
    }
}

const Teste = new LotoFacil();
// const list = Teste.generateNewList();
const result = document.querySelector('.result');
// list.map(e => result.innerHTML += `<span>${e}</span>`);

const group = Teste.twelveGroup(100, 12, 50);
let listGroup = '';
const printResult = group.forEach((e, i) => {
    listGroup += `<div><h1>Grupo ${i + 1}</h1>`;
    e.forEach(n => {
        listGroup += `<span>${n}</span>`;
    })
    listGroup += `</div>`;
});
result.innerHTML = listGroup;