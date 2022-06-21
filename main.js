import "./src/components/styles/settings/colors.css"
import "./src/components/styles/settings/generics/reset.css"
import "./src/components/styles/settings/elements/base.css"

import BoardGame from "./src/components/objects/boardgame";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);


$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
