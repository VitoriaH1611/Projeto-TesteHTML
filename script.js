let nome = document.querySelector('#nome')
let email = document.querySelector('#email')


function validarNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
       
    }

}


function validarEmail(){
    let txt = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1  || email.value.indexOf('.') == -1 ){
        txt.innerHTML = 'Email Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Email Válido'
        txt.style.color = 'green'
       
    }

}