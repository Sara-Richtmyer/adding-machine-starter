// dont click button
function dontClick(){
    alert("I told you not to click this BITCH!");
    window.close();

}
// code for the dark/light mode
let crystalModeSetting = false;
function crystalMode() {
    if(crystalModeSetting == false ) {
        document.body.style.backgroundColor = "skyblue";
        document.body.style.color = "white";
        document.getElementById("crystal-mode").innerHTML = "Activate Bitch Mode"
        crystalModeSetting = true;
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "skyblue";
        document.getElementById("crystal-mode").innerHTML = "Activate Crystal Mode"
        crystalModeSetting = false;
    }
}
 

function addingMachine () {
    let number1 = Number(document.getElementById("number-1").value);
    let number2 = Number (document.getElementById ("number-2").value);

    if(number1 != null && number2 != null ) {
        let results = number1 + number2;
        document.getElementById("results").innerHTML = results;
    }
}

function meow() {
    let meowSound = new Audio('assets/audio/Voicemail.mp3')
    meowSound.play();
}
