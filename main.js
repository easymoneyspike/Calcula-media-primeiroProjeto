const botao = document.querySelector('.enviar')
const popUp = document.querySelector('.pop-up')
const close = document.getElementById('close')

let materias = document.querySelector('#materias')
let pontos = document.querySelector('#pontos')

const popUpMedia = document.querySelector('.popUp_media')
const popUpDesc = document.querySelector('.popUp_descricao')


//Extraidas para uma função

function fix(element) {
    return element.toFixed(1);
}

function popUpScreen (calc,msg) {

    popUpMedia.textContent = `Sua média é: ${fix(calc)}`;
    popUpDesc.textContent = msg;
    return;
}


//Calculando a média


botao.addEventListener('click', (e) => {
    e.preventDefault();

    let calc = parseInt(pontos.value / materias.value);

    if (fix(calc) >= 0) {
        const low = 'Sua nota está na baixa, vamos melhorar! :D'
        popUpScreen(calc, low);
    } else if (fix(calc) >= 3) {
        const medium = 'Sua nota está na média, vamos melhorar! :D'
        popUpScreen(calc, medium);
    } else if (fix(calc) >= 7) {
        const high = 'Sua nota está na alta, parabéns! :D'
        popUpScreen(calc, high);

    }

    //Limpando inputs
    materias.value = '';
    pontos.value = '';

    popUp.style.display ='block'
        

})

//Close Pop-Up
close.addEventListener('click', () => {
    popUp.style.display ='none'

})





    






