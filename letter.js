function createRandomString(stringLength) {
    window.generationMode = "letter";
    
    var randomString = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    for(var i, i = 0; i < stringLength; i++ ){
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("text").innerHTML = randomString;
}

createRandomString(8)
