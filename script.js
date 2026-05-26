// Variabel som håller koll på hur många gånger användaren skrivit fel lösenord
let failCount = 0;

function makeTextBiggerPX() {
    document.body.style.fontSize = "50px";
}

function checkSecretCode() {
    let userGuess = document.getElementById("secretinput").value;
    let messageBox = document.getElementById("errortext");
    let hintBox = document.getElementById("hintbox");

    if (userGuess == "root") {
        window.location.href = "darkweb.html";
    } else {
        // Öka räknaren med 1 vid varje felaktig gissning
        failCount = failCount + 1;
        
        messageBox.innerHTML = "ERROR: Fel kodord. Försök igen.";
        messageBox.style.color = "darkred";
        
        // Logik som låser upp delar av ledtråden varje gång man misslyckas
        hintBox.style.display = "block";
        
        if (failCount == 1) {
            hintBox.innerHTML = "Ledtråd 1: Koden består av 4 bokstäver.";
        } 
        else if (failCount == 2) {
            hintBox.innerHTML = "Ledtråd 2: Första bokstaven i ordet är r.";
        } 
        else if (failCount >= 3) {
            hintBox.innerHTML = "Systemet gav upp av dig! Kodordet är: root";
        }
    }
}

function openChest() {
    let status = document.getElementById("itemstatus");
    let box = document.getElementById("gameitem");
    status.innerHTML = "Föremål: Öppen kista! Du hittade ett legendariskt svärd.";
    box.style.backgroundColor = "#e0ffe0";
    box.style.borderColor = "green";
}

function resetChest() {
    let status = document.getElementById("itemstatus");
    let box = document.getElementById("gameitem");
    status.innerHTML = "Föremål: Stängd kista";
    box.style.backgroundColor = "#fff";
    box.style.borderColor = "#222";
}

function createHero() {
    // 1. Hämta vad användaren skrev i textrutan
    let nameInput = document.getElementById("playername").value;
    
    // 2. Hämta p-taggen där resultatet ska visas
    let resultParagraph = document.getElementById("previewtext");
    
    // 3. Kolla om användaren glömde skriva något
    if (nameInput == "") {
        resultParagraph.innerHTML = "Fel: Du måste skriva ett namn först!";
        resultParagraph.style.color = "red";
    } else {
        // Om allt stämmer, slå ihop texten med namnet
        resultParagraph.innerHTML = "Hjälten " + nameInput + " har vaknat till liv i databasen!";
        resultParagraph.style.color = "black";
    }
}