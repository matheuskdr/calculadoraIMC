let height = document.getElementById('height');
let weight = document.getElementById('weight');
let calculateBtn = document.querySelector('.calc');
let clearBtn = document.querySelector('.clear');
let container = document.querySelector('.container');
let container2 = document.getElementById('container2');
let back = document.querySelector('.back');

let imcResult = 0;

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (height.value == '' || weight.value == '') {
        alert('Preencha todos os campos!')
    } else {
        imcResult = parseFloat(weight.value) / (parseFloat(height.value) * parseFloat(height.value));

        if (imcResult < 18.5) {
            let imc = document.querySelector('h1 span');
            imc.innerHTML = `${imcResult.toFixed(2)}`;
            imc.classList.add('red');

            let situation = document.querySelector('h4 span');
            situation.innerHTML = ' Magreza';
            situation.classList.add('red');

        } else if (imcResult > 18.5 && imcResult < 24.9) {
            let imc = document.querySelector('h1 span');
            imc.innerHTML = `${imcResult.toFixed(2)}`;
            imc.classList.add('green');

            let situation = document.querySelector('h4 span');
            situation.innerHTML = ' Normal';
            situation.classList.add('green');

        } else if (imcResult >= 25.0 && imcResult <= 29.9) {
            let imc = document.querySelector('h1 span');
            imc.innerHTML = `${imcResult.toFixed(2)}`;
            imc.classList.add('lightOrange');

            let situation = document.querySelector('h4 span');
            situation.innerHTML = ' Sobrepeso';
            situation.classList.add('lightOrange');

        } else if (imcResult >= 30.0 && imcResult <= 39.9) {
            let imc = document.querySelector('h1 span');
            imc.innerHTML = `${imcResult.toFixed(2)}`;
            imc.classList.add('orange');

            let situation = document.querySelector('h4 span');
            situation.innerHTML = ' Obesidade';
            situation.classList.add('orange');

        } else if (imcResult > 40.0) {
            let imc = document.querySelector('h1 span');
            imc.innerHTML = `${imcResult.toFixed(2)}`;
            imc.classList.add('red');

            let situation = document.querySelector('h4 span');
            situation.innerHTML = ' Obesidade grave';
            situation.classList.add('red');

        }

        height.value = '';
        weight.value = '';

        container.classList.toggle('active')
        container2.classList.toggle('active')
    }

});

clearBtn.addEventListener('click', () => {
    height.value = '';
    weight.value = '';
});

back.addEventListener('click', () => {
    container.classList.toggle('active')
    container2.classList.toggle('active')
});