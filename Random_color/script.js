function get_random(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}
            
var temp1 = 255;
var temp2 = 255;
var temp3 = 255;

function change_color(){
    var value_1 = get_random(1,255);
    var value_2 = get_random(1,255);
    var value_3 = get_random(1,255);

    console.log(`${value_1}, ${value_2}, ${value_3}`);

    document.body.style.backgroundColor = `rgb(${value_1}, ${value_2}, ${value_3})`;

    var click = document.getElementById('click');

    click.style.backgroundColor = `rgb(${temp1}, ${temp2}, ${temp3})`;

    temp1 = value_1;
    temp2 = value_2;
    temp3 = value_3;
}

function fixed(val1, val2, val3){
    document.body.style.backgroundColor = `rgb(${val1}, ${val2}, ${val3})`;
}
