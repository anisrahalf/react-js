import "./src/components/styles/settings/colors.css"
import "./src/components/styles/settings/generics/reset.css"
import "./src/components/styles/settings/elements/base.css"

import BoardGame from "./src/components/objects/boardgame";
import Scoreboard from "./src/components/objects/boardgame/ScoreBoard";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend",
    `${Scoreboard()}
    ${BoardGame(6)}
    `
)
