
document.querySelector('.result').innerHTML = 0
function buttonMais() {
    const input1 = parseFloat(document.getElementById('number1').value)
    const input2 = parseFloat(document.getElementById('number2').value)
     

    if (isNaN(input1)){
        document.getElementById('number1').classList.add('input-error')
        alert('Por favor, preencha os campos com valores numéricos.')
    } if (isNaN(input2)){
        document.getElementById('number2').classList.add('input-error')
        alert('Por favor, preencha os campos com valores numéricos.')
    }else {
        document.querySelector('.result').innerHTML  = input1 +  input2
    }
} 
function buttonMultiplicacao() {
    const input1 = parseFloat(document.getElementById('number1').value)
    const input2= parseFloat(document.getElementById('number2').value)
    if (isNaN(input1)){
        alert('Por favor, preencha os campos com valores numéricos.')
       Number=  document.getElementById('number1').classList.add('input-error')
    } if (isNaN(input2)){
        document.getElementById('number2').classList.add('input-error')
        alert('Por favor, preencha os campos com valores numéricos.')
    } else {
         document.querySelector('.result').innerHTML = input1 * input2
    }
} 
function clearInputs() {
    const input1 = parseFloat(document.getElementById('number1').value);
    const input2 = parseFloat(document.getElementById('number2').value);
        document.getElementById('number1').value = '';
        document.getElementById('number2').value = '';
        document.querySelector('.result').innerHTML= 0;
    }

