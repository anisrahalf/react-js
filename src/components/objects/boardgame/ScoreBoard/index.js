import PlayerName from "../../../PlayerName";
import VsPlayer from "../../../VsPlayer";
import "./style.css";

function Scoreboard() {
    return /*html*/ `
    <header class ="score-board">
    ${PlayerName('Player1')} 
    ${VsPlayer()}
    ${PlayerName('Player2')}
    </header>
    `
}

export default Scoreboard;