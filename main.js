import "./src/components/styles/settings/colors.css"
import "./src/components/styles/settings/generics/reset.css"
import "./src/components/styles/settings/elements/base.css"

import Scoreboard from "./src/components/objects/boardgame/ScoreBoard";
import BoardGame from "./src/components/objects/boardgame";


const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${Scoreboard()}
    ${BoardGame(6)}
    `
)
