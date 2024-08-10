let choice = document.querySelector(".choose");
let result = document.querySelector(".play");
let chosendisplay = document.querySelector(".chosen h3");
let buttons = document.querySelectorAll(".btn");
let submitbutton = document.querySelector(".submit");
let userchoice = "";
let computerChoice = "";

submitbutton.disabled = true;
buttons.forEach(function (button) {
    button.addEventListener('click', (e) => {
        userchoice = button.id;
        console.log(userchoice);
        chosendisplay.innerText = `Your Choice: ${userchoice}`;
        submitbutton.disabled = false;
    });
});

submitbutton.addEventListener('click', () => {
    choice.classList.add('hide');
    setTimeout(() => {
        choice.style.display = "none";
        result.style.display = "block";
        result.style.display = "flex";
        result.classList.add('show');

        let choices = ["STONE", "PAPER", "SCISSOR"];
        computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(computerChoice);
        
        let restxt = document.querySelector(".restxt");
        if (computerChoice === userchoice) {
            restxt.innerText = "IT'S A TIE!";
        } else if (userchoice === "STONE") {
            if (computerChoice === "PAPER") {
                restxt.innerText = "YOU LOST!";
            } else if (computerChoice === "SCISSOR") {
                restxt.innerText = "YOU WON!";
            }
        } else if (userchoice === "PAPER") {
            if (computerChoice === "SCISSOR") {
                restxt.innerText = "YOU LOST!";
            } else if (computerChoice === "STONE") {
                restxt.innerText = "YOU WON!";
            }
        } else if (userchoice === "SCISSOR") {
            if (computerChoice === "STONE") {
                restxt.innerText = "YOU LOST!";
            } else if (computerChoice === "PAPER") {
                restxt.innerText = "YOU WON!";
            }
        }

        let player_vid = document.querySelector(".player-vid");
        let comp_vid = document.querySelector(".comp-vid");

        player_vid.src = `${userchoice}.mp4`;
        comp_vid.src = `${computerChoice}.mp4`;
        //nahi hoga phir bhi chalega
        
        player_vid.load();
        comp_vid.load();
        
    }, 500);
});

let replaybutton = document.querySelector('.submit1');
replaybutton.addEventListener('click', () => {
    choice.classList.remove('hide');

    setTimeout(() => {
        choice.style.display = "block";
        choice.style.display = "flex";
        result.style.display = "none";
        result.classList.remove('show');
    }, 500);
});
