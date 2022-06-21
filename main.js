import "./src/components/styles/settings/colors.css"
import "./src/components/styles/settings/generics/reset.css"
import "./src/components/styles/settings/elements/base.css"

import CardGame from "./src/components/cardGame";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame(); 


$root.insertAdjacentHTML("beforeend",  $htmlCardGame);
