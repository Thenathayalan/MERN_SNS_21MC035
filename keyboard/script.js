var text = document.getElementById('text-field');
var isShift = false;

function append(value){
    text.value += value
}

function backspace(){
    var temp = text.value;
    text.value = temp.slice(0, -1)
}

function capitalise(value){
    return value
}

function toggleShift() {
    isShift = !isShift;
    var buttons = document.querySelectorAll('.alp');
    var shift = document.querySelector('.shift');

    if (isShift) {
        shift.innerHTML = '<i class="bi bi-shift-fill"></i>';
    } else {
        shift.innerHTML = '<i class="bi bi-shift"></i>';
    }

    buttons.forEach(button => {
        var char = button.innerText;
        if (isShift) {
            button
            button.innerText = char.toUpperCase();
            button.onclick = () => append(char.toUpperCase());
        } else {
            button.innerText = char.toLowerCase();
            button.onclick = () => append(char.toLowerCase());
        }
    });
}
