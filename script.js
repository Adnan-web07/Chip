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

function openChest() {
    let status = document.getElementById("itemstatus");
    let box = document.getElementById("gameitem");
    status.innerHTML = "Föremål: Öppen kista! Du hittade ett legendariskt svärd.";
    box.style.backgroundColor = "#d4edda";
    box.style.borderColor = "green";
}

function resetChest() {
    let status = document.getElementById("itemstatus");
    let box = document.getElementById("gameitem");
    status.innerHTML = "Föremål: Stängd kista";
    box.style.backgroundColor = "#eee";
    box.style.borderColor = "#333";
}