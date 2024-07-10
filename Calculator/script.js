var disp = document.getElementById('text_box');
function append(value){
    disp.value += value;
}
function c_disp(){
    disp.value = "";
}
function bs(){
    var temp = disp.value;
    disp.value = temp.slice(0, -1);
}
function per(){
    var temp = disp.value;
    disp.value = temp/100;
}
function equal(){
    var str = disp.value;
    try{
        disp.value = eval(str);
    }catch(e){
        disp.value = "Error";
        console.log(e);
    }
}
