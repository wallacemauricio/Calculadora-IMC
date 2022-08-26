const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('peso inválido', false);
        return;
    }

    if (!altura){
        setResultado('altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} ${nivelImc}. `;

    setResultado(msg, true);


    console.log(imc, nivelImc);

});

function getNivelImc (imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 
    'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura**2;
    return imc.toFixed(2);

}

function criap (className) {
    const p = document.createElement('p');
    p.classList.add(className);
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    

    const p = criap();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }else { p.classList.add('bad')

    }

    p.innerHTML = msg;
    
    resultado.appendChild(p);
}







/*
if (imc >= 0 || <= 18.5) {
        return nivel[5]
    }
    else if (imc >= 18.5 || <= 24.9) {
        return nivel[4]
    }
    else if (imc >= 25 || <= 29.9) {
        return nivel[3]
    } 
    else if (imc >= 30 || <= 34.9) {
        return nivel[2]
    }
    else if (imc >= 35 || <= 39.9) {
        return nivel[1]
    }
    else (imc >= 40 || <= 500) {
        return nivel[0]
    }
}*/


/*

if (imc >= 39,9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29,9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }

*/