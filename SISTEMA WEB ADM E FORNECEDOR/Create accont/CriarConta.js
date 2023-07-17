const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const emailRegex = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/;
// const nomeRegex = /[^a-zà-ú]/gi;
// const spans = document.querySelectorAll('.span-required');

form.addEventListener("submit", (event) =>{
    event.preventDefault();
     nomeValidate();
     cpfValidate();
     telefoneValidate();
     datanascValidate();
     emailValidate(); 
     compareEmail();  
     mainPasswordValidate();
     comparePassword();
}  )


// Mostrar erro (borda dos inputs em cor vermelha)
function setError(index) {
    campos[index].style.border ='2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError (index) {
    campos[index].style.border ='';
    spans[index].style.display = 'none';
}

//Validação do campo nome (caracteres)
function nomeValidate(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    } else{
        removeError(0);
    }
}

// Validação do campo CPF (mascara)
function cpfValidate(){
    var cpf = document.getElementById('CPF');
    if (cpf.value.length == 3 || cpf.value.length == 7 ) {
        cpf.value += ".";
    } else if (cpf.value.length == 11) {
        cpf.value += "-";
    }
}

// Validação Telefone (Mascara)
function telefoneValidate(){
    $('#telefone').mask("(11) 99999-9999");
}

// Validação dos campos de Email
function emailValidate(){
    if(!emailRegex.test(campos[4].value))
    {
        setError(4);
    } else {
        removeError(4);
    }
}

function compareEmail(){
    if(campos[5].value == campos[4].value && campos[4])
    {
        removeError(5);
    }
    else{
        setError(5);
    }
}


// Validação dos campos de Senha
function mainPasswordValidate(){
    if(campos[6].value.length < 8)
    {
        setError(6);
    }
    else{
        removeError(6);
        comparePassword();
    }
}

function comparePassword(){
    if(campos[7].value == campos[6].value && campos[6].value.length >=8)
    {
        removeError(7);
    }
    else{
        setError(7);
    }
}

//function checkInputs(){
//    const nameValue = uname.value.trim()
//    const cnpjValue = cnpj.value.trim()
//    const telValue = tel.value.trim()
//    const cepValue = cep.value.trim()
//    const cityValue = city.value.trim()
//    const emailValue = email.value.trim()
//    const email2Value = email2.value.trim()
//    const passwordValue = password.value.trim()
//    const password2Value = password2.value.trim()
//    if(nameValue === ''){
//    mostrar erro
//    adicionar classe error
//    errorValidation(uname, 'Preencha esse campo')
//    }else{        
//    }
//    }

//    function errorValidation(input, message){
//    const inf = input.parentElement;
//    inf.className = 'inf error'
// }

//    var tel = document.getElementById('telefone');
//    if (tel.value.length === 0) {
//    tel.value += "("
//    } else if (tel.value.length == 4){
//    tel.value += ")"
//    } else if (tel.value.length == 10){
//    tel.value += "-"
//    }

