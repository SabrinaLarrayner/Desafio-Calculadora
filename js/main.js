
document.querySelector('.result').innerHTML = 0
function calculate(operador) {  //recebo o operador como parametro da função
    if (operador == 'C') {
        let inputClass1 = document.getElementById('number1').classList
        inputClass1.remove('input-error')
        let inputClass2 = document.getElementById('number2').classList
        inputClass2.remove('input-error')
        document.getElementById('number1').value = '';
        document.getElementById('number2').value = '';
        document.querySelector('.result').innerHTML = 0;
    } else {
        const input1 = parseFloat(document.getElementById('number1').value)
        const input2 = parseFloat(document.getElementById('number2').value)

        if (isNaN(input1)) {
            document.getElementById('number1').classList.add('input-error')
            alert('Por favor, preencha somente com números!')
        }
        else if (isNaN(input2)) {
            document.getElementById('number2').classList.add('input-error')
            alert('Por favor, preencha somente com números!')
        }
        else {
            let inputClass1 = document.getElementById('number1').classList
            inputClass1.remove('input-error')
            let inputClass2 = document.getElementById('number2').classList
            inputClass2.remove('input-error')

            if (operador == '+') {
                document.querySelector('.result').innerHTML = input1 + input2
            }

            if (operador == '*') {
                document.querySelector('.result').innerHTML = input1 * input2
            }
        }
    }

}
