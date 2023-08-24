let decimalInput = document.querySelector("#decimalInput");
let binaryOutput = document.querySelector("#binaryOutput");

decimalInput.addEventListener("input", function () {
    let decimalNo = parseInt(decimalInput.value);
    if(!isNaN(decimalNo)) {
        binaryOutput.value = decToBin(decimalNo);
        console.log(binaryOutput.value);
    } else {
        binaryOutput.value = "";
    }
});

function decToBin(decimalNo) {
    str = "";
    while(decimalNo > 0) {
        let rem = decimalNo % 2;
        decimalNo = Math.floor(decimalNo / 2);
        str = rem + str;
    }
    return str;
}