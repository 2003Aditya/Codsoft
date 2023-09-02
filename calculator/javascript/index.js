

function clearScreen() {
    document.getElementById('result').value = '';
}


function display(value) {
    document.getElementById('result').value += value;
}



const resultField = document.getElementById('result');

function answer(){
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = 'Error';
    }
}