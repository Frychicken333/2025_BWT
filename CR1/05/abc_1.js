function verify() {
    let a = parseFloat(elementA.value);  
    let resultValue;

    if (isNaN(a)) {
        resultValue = "не определен";
    } else if (a < 10) {
        resultValue = Math.pow(a, 4);
    } else if (a > 61) {
        resultValue = a;
    } else {
        resultValue = a - Math.sin(a * a);
    }

    document.getElementById("result").value = resultValue;
}

function send() {
    const resultField = document.getElementById("result").value;
    if (resultField === "не определен" || resultField.trim() === "") {
        alert("Сначала корректно вычислите результат");
    } else {
        document.getElementById("UserEnter").submit();
    }
}


let result;
let check;

const elementA = document.getElementById("a");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);
