var text = document.getElementById('text-field');
var isShift = false;
var isNum = false;

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

function enter(){
    text.value += "\n";
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
            button.innerText = char.toUpperCase();
            button.onclick = () => append(char.toUpperCase());
        } else {
            button.innerText = char.toLowerCase();
            button.onclick = () => append(char.toLowerCase());
        }
    });
}

function num(){
    isNum = !isNum;
    var buttons = document.querySelectorAll('.alp');

    var arr = ['1','2','3','4','5','6','7','8','9','0','@','#','$','_','&','-','+','(',')','/','*','"',"'",':',';','!','?',',','.'];
    var txt = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x',"c",'v','b','n','m','/','.'];
    var i = 0; 

    buttons.forEach(button => {
        if(isNum){
            button.innerText = arr[i];
            var temp = arr[i];
            button.onclick = () => append(temp);
        } else {
            button.innerText = txt[i];
            var temp = txt[i];
            button.onclick = () => append(temp);
        }
        i++;
    });
}
