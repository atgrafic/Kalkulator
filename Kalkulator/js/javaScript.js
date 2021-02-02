let sign;
displayNumber();
operationSign();
//wyswietlanie liczb
function clickNumber() {
    if (document.getElementById("current-operand").innerHTML === "0") {
        document.getElementById("current-operand").innerHTML = "";
    }

    document.getElementById("current-operand").innerHTML += this.innerHTML;
    // equalsNumber();
}

function displayNumber() {
    let elelments = document.getElementsByClassName("number");

    for (i = 0; i < elelments.length; i++) {
        elelments[i].addEventListener("click", clickNumber);
    }
}

//delate

document.getElementById("delete").addEventListener("click", deleteNumber);

function deleteNumber() {
    document.getElementById("current-operand").innerHTML = "0";
    document.getElementById("current-result").innerHTML = "";
}

//eventy operatora (+ - * / )

function operationSign() {
    let operationMat = document.getElementsByClassName("operation");

    for (i = 0; i < operationMat.length; i++) {
        operationMat[i].addEventListener("click", clickOperation);
    }
}

function clickOperation() {
    let temp = document.getElementById("current-operand").innerHTML;
    console.log("2: ", this.innerHTML);

    document.getElementById("current-result").innerHTML += temp + " " + this.innerHTML + " ";
    document.getElementById("current-operand").innerHTML = "";

    sign = this.innerHTML;
}

document.getElementById("equals").addEventListener("click", equalsNumber);
let equals = document.getElementById("equals");

function equalsNumber() {
    let firsNumber = parseFloat(document.getElementById("current-result").innerHTML);
    let nextNumber = parseFloat(document.getElementById("current-operand").innerHTML);

    console.log(firsNumber);
    console.log(nextNumber);
    let result;

    console.log(sign);

    switch (sign) {
        case "+":
            result = firsNumber + nextNumber;

            document.getElementById("current-operand").innerHTML = result;
            document.getElementById("current-result").innerHTML = " ";

            console.log(result);
            break;
        case "-":
            result = firsNumber - nextNumber;

            document.getElementById("current-operand").innerHTML = result;
            document.getElementById("current-result").innerHTML = " ";
            console.log(result);
            break;
        case "*":
            result = firsNumber * nextNumber;

            document.getElementById("current-operand").innerHTML = result;
            document.getElementById("current-result").innerHTML = " ";
            console.log(result);
            break;
        case "/":
            result = firsNumber / nextNumber;

            document.getElementById("current-operand").innerHTML = result;
            document.getElementById("current-result").innerHTML = " ";
            console.log(result);
            if (nextNumber == 0) {
                document.getElementById("current-operand").innerHTML = "nie dzieli się przez zero";
            }
            break;

        default:
            return;
    }
}
