const NOTE_DETAILS = [
    { key: "Q", freq: 10 },
    { key: "W", freq: 20 },
    { key: "E", freq: 30 },
    { key: "R", freq: 40 },
    { key: "T", freq: 50 },
    { key: "Y", freq: 60 },
    { key: "U", freq: 70 },
    { key: "I", freq: 80 },
    { key: "O", freq: 90 },
];

function playNote(keyPressed) {
    if (!keyPressed) return undefined;

    let noteDetails = getNoteDetails(keyPressed);

    noteDetails.active = true;

    console.log(noteDetails);

    console.log(NOTE_DETAILS);
}

// when i press a key, I want that key's freq and info to be printed

function pressReleaseKey(code, flag) {
    let keyPressed = code;
    let keyElement = document.querySelector(`.${code}`);
    if (keyElement == undefined) return undefined;
    if (flag == "press") keyElement.classList.add("pressed");
    if (flag === "release") keyElement.classList.remove("pressed");

    return keyPressed;
}

document.addEventListener("keydown", (e) => {
    if (e.repeat) return;

    let keyPressed = pressReleaseKey(e.code, "press");

    playNote(keyPressed);
});

document.addEventListener("keyup", (e) => {
    if (e.repeat) return;

    let keyPressed = pressReleaseKey(e.code, "release");
});

function getNoteDetails(key) {
    let noteDetails = NOTE_DETAILS.find((note) => {
        return `Key${note.key}` == key;
    });
    return noteDetails;
}
