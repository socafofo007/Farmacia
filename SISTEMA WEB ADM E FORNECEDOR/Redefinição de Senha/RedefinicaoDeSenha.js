const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required'); 



function setError(index) {
    campos[index].style.border ='2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError (index) {
    campos[index].style.border ='';
    spans[index].style.display = 'none';
  
}

function mainPasswordValidate(){
    if(campos[0].value.length < 8)
    {
        setError(0);
    }
    else{
        removeError(0);
        comparePassword();
    }
}

function comparePassword(){
    if(campos[0].value == campos[1].value && campos[1].value.length >=8)
    {
        removeError(1);
    }
    else{
        setError(1);
    }
}

