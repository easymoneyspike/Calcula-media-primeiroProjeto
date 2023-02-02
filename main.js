const botao = document.querySelector('.enviar')
let materias = document.querySelector('#materias')
let pontos = document.querySelector('#pontos')
const form = document.querySelector('.section')


botao.addEventListener('click', (e) => {
    e.preventDefault();
    var calc = parseInt(pontos.value / materias.value);

    if (fix(calc) <= 0) {
        const low = 'Sua nota está na baixa, vamos melhorar! :D'
        alertCalc(calc, low);
    } else if (fix(calc) <= 3) {
        const medium = 'Sua nota está na média, vamos melhorar! :D'
        alertCalc(calc, medium);
    } else if (fix(calc) >= 8) {
        const high = 'Sua nota está na alta, parabéns! :D'
        alertCalc(calc, high);
    }


})


//Extraidas para uma função
function alertCalc(calc, msg) {
    alert(`${'Média de: '}${+calc.toFixed(0)} ${msg}`)
}

function fix(element) {
    return element.toFixed(0);
}


