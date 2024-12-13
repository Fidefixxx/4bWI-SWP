function ButtonClick() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    let result;
    let operator;

    if (document.getElementById("add").checked) {
        result = (input1 + input2).toFixed(5);
        operator = "+";
    } else if (document.getElementById("subtract").checked) {
        result = (input1 - input2).toFixed(5);
        operator = "-";
    } else if (document.getElementById("multiply").checked) {
        result = (input1 * input2).toFixed(5);
        operator = "×";
    } else if (document.getElementById("divide").checked) {
        result = (input1 / input2).toFixed(5);
        operator = "÷";
    }

    result = parseFloat(result);

    document.getElementById("calculation").innerHTML = input1 + " " + operator + " " + input2 + " = " + result;
}



