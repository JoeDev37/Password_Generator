
function toggleTheme() {
    function lightMode() {
        let element = document.body;
        element.classList.toggle('light-mode');
    }
    lightMode();

    function bottomDiv() {
        let btmElement = document.querySelector('.info');
        btmElement.classList.toggle('some');
    }
    bottomDiv();

    function theOption() {
        let optionTheme = document.querySelector('.option');
        optionTheme.classList.toggle('some');
    }
    theOption();

    function theCustomization() {
        let customTheme = document.querySelector('.customization');
        customTheme.classList.toggle('some');
    }
    theCustomization();

    function theInput() {
        let inputTheme = document.querySelector('.input');
        inputTheme.classList.toggle('some')
    }
    theInput();

    function theHeading() {
        let headTheme = document.querySelector('.heading-part');
        headTheme.classList.toggle('some');
    }
    theHeading();

    function makeChange() {
        let theChange = document.getElementById('changer');
        theChange.classList.toggle('forbtn');
    }
    makeChange();

    function makeCopy() {
        let theCopy = document.getElementById('copy');
        theCopy.classList.toggle('forbtn');
    }
    makeCopy();

    function theComplete() {
        let themeComplete = document.getElementById('complete');
        themeComplete.classList.toggle('forbtn');
    }
    theComplete();

    function theString() {
        let themeString = document.getElementById('string');
        themeString.classList.toggle('forbtn');
    }
    theString();

    function theNumber() {
        let themeNumber = document.getElementById('number');
        themeNumber.classList.toggle('forbtn');
    }
    theNumber();

    function increaseLenght() {
        let themeOfInc = document.querySelector('.passwordLengthIncrease');
        themeOfInc.classList.toggle('forbtn');
    }
    increaseLenght();

    function decreaseLenght() {
        let themeofDec = document.querySelector('.passwordLengthDecrease');
        themeofDec.classList.toggle('forbtn');
    }
    decreaseLenght();

    function settings() {
        let theSettings = document.querySelector('.theme');
        theSettings.classList.toggle('forbtn');
    }
    settings();

    function onClicked() {
        let icon = document.getElementById('sett');
        icon.src = (icon.src.endsWith('lightbulb-solid(1).svg')) ? 'lightbulb-solid(2).svg' : 'lightbulb-solid(1).svg';
    }
    onClicked();
}