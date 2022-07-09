const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formQuestions = document.querySelectorAll("form div.li");

    let allCorrectAnswers = true;
    formQuestions.forEach((question) => {
        const btns = Array.from(
            question.querySelectorAll("input[type='radio']")
        );

        const checkedBtn = btns.find((btn) => btn.checked);

        if (
            checkedBtn == undefined ||
            checkedBtn.value != question.dataset.answer
        ) {
            allCorrectAnswers = false;
            question.style.color = "red";
        } else {
            question.style.color = "lightgreen";
        }
    });

    if (allCorrectAnswers) {
        console.log("CONGRANTS");
        const overlay = document.querySelector(".overlay");
        const congrats = document.querySelector(".congrats");
        overlay.style.display = "block";
        overlay.style.zIndex = 3;
        congrats.style.display = "block";
        congrats.style.zIndex = 5;

        document.addEventListener("click", (e) => {
            overlay.style.display = "none";
            congrats.style.display = "none";
        });
    }
});
