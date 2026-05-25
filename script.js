function makeTextBiggerPX() {
    document.body.style.fontSize = "50px";
}

function checkSecretCode() {
    let userGuess = document.getElementById("secretinput").value;
    let messageBox = document.getElementById("errortext");

    if (userGuess == "root") {
        window.location.href = "darkweb.html";
    } else {
        messageBox.innerHTML = "ERROR: Wrong passcode. Try again!";
        messageBox.style.color = "darkred";
    }
}