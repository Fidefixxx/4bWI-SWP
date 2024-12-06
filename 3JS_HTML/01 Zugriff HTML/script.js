function ButtonClick() {
    let input1 = parseInt(document.getElementById("input1").value);
    let input2 = parseInt(document.getElementById("input2").value);
    let result;

    if (document.getElementById("add").checked) {
        result = input1 + input2;
    } else if (document.getElementById("subtract").checked) {
        result = input1 - input2;
    } else if (document.getElementById("multiply").checked) {
        result = input1 * input2;
    } else if (document.getElementById("divide").checked) {
        result = input1 / input2;
    }

    document.getElementById("result").innerHTML = result;
}
