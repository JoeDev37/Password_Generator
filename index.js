window.generationMode = "all";
window.character_length = 8;

function make(length) {
    let result = '';
    const characters = 
    window.generationMode == 'all' ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'
    : (window.generationMode == 'number' ? '0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function generateRandomPass(set = false) {
    if(set) window.generationMode = set;
    const result = make(window.character_length);
    document.getElementById("text").value = result;
}

function copyRandomString() {

    const randomString = document.getElementById("text");
    
    randomString.select();
    document.execCommand('copy');
    randomString.setSelectionRange(0, 0);
}

generateRandomPass();

copyRandomString();