const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

/* Alerte vide */
checkBtn.addEventListener("click",
    () => {
        if (textInput.value === "") {
            alert("Please input a value");
        } else {
            const alphaNum = /[^a-zA-Z0-9]/g;
            const propre = textInput.value.replace(alphaNum, "").toLowerCase().trim();
            const palin = propre.split('').reverse().join('').toLowerCase().trim();

            if (palin === propre) {
                result.innerText = `${textInput.value} is a palindrome`;
            } else {
                result.innerText = `${textInput.value} is not a palindrome`;
            }
        }
    });