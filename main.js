import "./src/components/styles/settings/colors.css"
import "./src/components/styles/settings/generics/reset.css"
import "./src/components/styles/settings/elements/base.css"

import BoardGame from "./src/components/objects/boardgame";
import PlayerName from "./src/components/PlayerName";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend",
    `
    ${PlayerName('Player1')} 
    ${PlayerName('Player2')}
    ${BoardGame(6)}
    `
)
