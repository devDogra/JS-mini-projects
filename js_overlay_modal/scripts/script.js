const openModalBtn = document.querySelector("button.open-modal");
const closeModalBtn = document.querySelector("button.close-modal");

openModalBtn.addEventListener("click", (e) => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "block";
    modal.style.backgroundColor = "white";

    const overlay = document.querySelector(".overlay");
    overlay.style.display = "block";
});

closeModalBtn.addEventListener("click", (e) => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "none";

    const overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
});
