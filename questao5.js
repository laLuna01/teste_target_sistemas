function inverteString(inputString) {
    let stringInvertida = "";

    for (let i = inputString.length - 1; i >= 0; i--) {
        stringInvertida += inputString[i];
    }

    return stringInvertida;
}

const inputString = "Olá, mundo!";
console.log("String Original:", inputString);
console.log("String Invertida:", inverteString(inputString));