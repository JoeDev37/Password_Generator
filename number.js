function num(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function generateRandomNUM() {
    window.generationMode = "number";
    const length = 8;
    const result = num(length);
    document.getElementById("text").innerHTML = result;
}

generateRandomNUM();
