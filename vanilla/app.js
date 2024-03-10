const playersBox = document.getElementById("players-box");
const players = document.getElementById("players");
const benchBox = document.getElementById("bench-box");
const bench = document.getElementById("bench");
const playingBox = document.getElementById("playing-box");
const playing = document.getElementById("playing");
const actionsBox = document.getElementById("actions-box");
const actions = document.getElementById("actions");
const courtBox = document.querySelector("#court-box");
const courtSpots = document.querySelectorAll("#courtgoal .shotFrom");
const goalSpots = document.querySelectorAll("#courtgoal .shotTarget");

const actionsLogBox = document.getElementById("actions-log-box");
let actionsLog = document.getElementById("actions-log");

const selectionFinishBtn = document.getElementById("selection-finish");
const selectionStartFinishBtn = document.getElementById(
    "selection-start-finish"
);

playingBox.classList.add("hide");

selectionFinishBtn.addEventListener("click", selectionFinish);
selectionStartFinishBtn.addEventListener("click", selectionStartFinish);

const limitSelection = 16;
const limitPlaying = 7;

let playerSelectedName = "";
let playerSelectedNum = "";
let throwSpotFrom = "";
let throwSpotEnd = "";
let throwGoal = "";

let playerSwapOut = "";
let playerSwapIn = "";
let timerStart;

for (let from of courtSpots) {
    from.addEventListener("click", chooseThrowSpotFrom);
}

for (let spot of goalSpots) {
    spot.addEventListener("click", chooseThrowSpotEnd);
}

function createPlayerList() {
    for (let i = 0; i < playersList.length; i++) {
        const player = document.createElement("li"); // List Item
        player.addEventListener("click", selectPlayer);
        player.setAttribute("name", playersList[i].name);
        player.setAttribute("num", playersList[i].number);
        player.setAttribute("pos", playersList[i].pos);
        player.innerHTML = playersList[i].number;
        player.innerHTML +=
            "<h6>" + playersList[i].name.split(" ")[0] + "</h6>";
        players.appendChild(player);
    }
}

function selectPlayer() {
    if (this.parentNode.id == "players") {
        if (bench.childElementCount >= limitSelection) {
            alert("Maximum players allowed is " + limitSelection);
        } else {
            bench.appendChild(this);
        }
    } else {
        players.appendChild(this);
    }
}

function selectPlayerActive() {
    if (this.parentNode.id == "bench") {
        if (playing.childElementCount >= limitPlaying) {
            alert("Maximum players allowed is " + limitPlaying);
        } else {
            playing.appendChild(this);
        }
    } else {
        bench.appendChild(this);
    }
}

function selectionFinish() {
    if (confirm("Are you sure of your selection?")) {
        playersBox.classList.add("hide");
        playingBox.classList.remove("hide");
        const playersAvailable = document.querySelectorAll("#players li");
        for (let i = 0; i < playersAvailable.length; i++) {
            playersAvailable[i].removeEventListener("click", selectPlayer);
        }
        const playersBench = document.querySelectorAll("#bench li");
        for (let i = 0; i < playersBench.length; i++) {
            playersBench[i].removeEventListener("click", selectPlayer);
            playersBench[i].addEventListener("click", selectPlayerActive);
        }
        selectionFinishBtn.classList.add("hide");
        selectionStartFinishBtn.classList.remove("hide");
    }
}

function selectionStartFinish() {
    if (confirm("Are you sure of your selection?")) {
        const playersBench = document.querySelectorAll("#bench li");
        for (let i = 0; i < playersBench.length; i++) {
            playersBench[i].removeEventListener("click", selectPlayerActive);
            playersBench[i].addEventListener("click", playerAddStat);
        }
        const playersPlaying = document.querySelectorAll("#playing li");
        for (let i = 0; i < playersPlaying.length; i++) {
            playersPlaying[i].removeEventListener("click", selectPlayerActive);
            playersPlaying[i].addEventListener("click", playerAddStat);
        }
        selectionStartFinishBtn.classList.add("hide");
        actionsBox.classList.remove("hide");
        actionsLogBox.classList.remove("hide");
        courtBox.classList.remove("hide");
        benchBox.parentNode.classList.remove("col-12");
        //benchBox.parentNode.classList.add("col-1", "");
        timerStart = Date.now();
        console.log("TEMPO START", timerStart);
    }
}

function createActions() {
    for (let i = 0; i < situationType.length; i++) {
        const situation = document.createElement("li");
        situation.setAttribute("data-situation-id", situationType[i].id);
        situation.setAttribute("data-situation-name", situationType[i].name);
        situation.innerHTML = situationType[i].name;
        const actionsList = document.createElement("ul");
        for (let j = 0; j < playerActions.length; j++) {
            if (playerActions[j].situation == situationType[i].id) {
                const action = document.createElement("li");
                action.setAttribute("data-action-id", playerActions[j].id);
                action.addEventListener("click", registerAction);
                action.innerHTML = playerActions[j].name;
                actionsList.appendChild(action);
            }
        }

        situation.appendChild(actionsList);
        actions.appendChild(situation);
    }
}

function playerAddStat() {
    if (this.parentNode.id == "bench") {
        if (playerSelectedName != "") {
            // SUBSTITUIÃ‡ÃƒO
            playing.appendChild(this);
            playerSwapOut = this.getAttribute("name");
            const playerOn = document.querySelector(".player-selected");
            bench.appendChild(playerOn);
            registerAction();
            clearPlayerSelected();
        }
    } else {
        if (document.querySelector("#playing-box .player-selected")) {
            document
                .querySelector("#playing-box .player-selected")
                .classList.remove("player-selected");
        }
        this.classList.add("player-selected");
        playerSelectedName = this.getAttribute("name");
        playerSelectedNum = this.getAttribute("num");
    }
}

function registerAction() {
    if (playerSelectedName == "") {
        alert("Select Player First");
        return;
    } else if (
        playerSelectedName != "" &&
        throwSpotFrom != "" &&
        throwSpotEnd == ""
    ) {
        alert("Can't select Action while Selecting Shot Path");
        return;
    }

    const logLine = document.createElement("tr");
    logLine.addEventListener("click", deleteStatLine);
    const logTime = document.createElement("td");
    const logNumber = document.createElement("td");
    const logPlayer = document.createElement("td");
    const logSituation = document.createElement("td");
    const logAction = document.createElement("td");
    const logShotFrom = document.createElement("td");
    const logShotEnd = document.createElement("td");
    const logShotResult = document.createElement("td");

    let tempTime = Math.round((Date.now() - timerStart) / 1000);
    let tempMinutes = Math.floor(tempTime / 60);
    let tempSeconds = tempTime % 60;

    tempMinutes = tempMinutes.toString().padStart(2, "0");
    tempSeconds = tempSeconds.toString().padStart(2, "0");

    logTime.innerHTML = tempMinutes + ":" + tempSeconds;
    logNumber.innerHTML = playerSelectedNum;
    logPlayer.innerHTML = playerSelectedName;

    if (throwSpotFrom == "") {
        if (playerSwapOut != "") {
            logSituation.innerHTML = "Substitution";
            logAction.innerHTML = playerSwapOut;
        } else {
            logSituation.innerHTML =
                this.parentNode.parentNode.dataset.situationName;
            logAction.innerHTML = this.innerHTML;
        }
    } else {
        logSituation.innerHTML = "Ataque";
        logAction.innerHTML = `Remate`;
        logShotFrom.innerHTML = throwSpotFrom;
        logShotEnd.innerHTML = throwSpotEnd;
        logShotResult.innerHTML = throwGoal;
    }

    logLine.append(
        logTime,
        logNumber,
        logPlayer,
        logSituation,
        logAction,
        logShotFrom,
        logShotEnd,
        logShotResult
    );
    actionsLog.prepend(logLine);
    saveLog();
    clearPlayerSelected();
}

function clearPlayerSelected() {
    const playersSelected = document.querySelectorAll(".player-selected");
    for (let player of playersSelected) {
        player.classList.remove("player-selected");
    }
    playerSelectedName = "";
    playerSelectedNum = "";
    throwSpotFrom = "";
    throwSpotEnd = "";
    throwGoal = "";
    playerSwapOut = "";
}

function deleteStatLine() {
    if (confirm("Really delete THIS stat line?\n" + this.textContent)) {
        this.remove();
        saveLog();
    }
}

function saveLog() {
    const savedLog = actionsLogBox.innerHTML;
    localStorage.setItem("actionsLogFile", savedLog);
}

function getActionsLog() {
    const savedLog = localStorage.getItem("actionsLogFile");
    if (savedLog != null) {
        // console.log(savedLog);
        actionsLogBox.innerHTML = savedLog;
        actionsLog = document.getElementById("actions-log");

        const logLines = document.querySelectorAll("#actions-log tr");
        logLines.forEach((item) => {
            item.addEventListener("click", deleteStatLine);
        });
    }
}

function chooseThrowSpotFrom() {
    if (playerSelectedName != "") {
        throwSpotFrom = this.id;
        if (document.querySelector("#courtgoal .player-selected")) {
            document
                .querySelector("#courtgoal .player-selected")
                .classList.remove("player-selected");
        }
        this.classList.add("player-selected");
    } else {
        alert("Escolher atleta primeiro");
    }
}

function chooseThrowSpotEnd() {
    if (playerSelectedName != "" && throwSpotFrom != "") {
        throwSpotEnd = this.id;
        validateThrow();
    } else {
        alert("Escolher atleta e local primeiro");
    }
}

function validateThrow() {
    if (throwSpotEnd == "fora") {
        throwGoal = "Falha";
    } else if (confirm("Golo > OK : Defesa > Cancelar")) {
        throwGoal = "Golo";
    } else {
        throwGoal = "Defesa";
    }
    registerAction();
}

function main() {
    createPlayerList();
    createActions();
    getActionsLog();
}

main();