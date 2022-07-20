// on clicking any expand btn,
// even for dynamically added elements, 'show' attrb is added to that card's body

// deal with the initial state of the card bodies
const expandBtns = document.querySelectorAll(".expand-button");
expandBtns.forEach((btn) => {
    let cardBody = btn.closest(".card-header").nextElementSibling;
    if (cardBody.hasAttribute("show")) {
        btn.innerText = "Collapse";
    } else {
        btn.innerText = "Expand";
    }
});

// toggle state of card bodies
document.addEventListener("click", function (e) {
    if (e.target.matches(".card-header .expand-button"));
    let cardBody = e.target.closest(".card-header").nextElementSibling;
    cardBody.toggleAttribute("show");

    console.log(cardBody);

    if (cardBody.hasAttribute("show")) {
        e.target.innerText = "Collapse";
    } else {
        e.target.innerText = "Expand";
    }
});
