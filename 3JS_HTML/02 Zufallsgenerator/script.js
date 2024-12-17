function ButtonClick() {
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    
    let result = Math.floor(Math.random() * (input2 - input1 + 1)) + input1;
    
    document.getElementById("generation").innerHTML = result;
}
    


