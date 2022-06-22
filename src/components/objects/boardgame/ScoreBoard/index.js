import PlayerName from "../../../PlayerName";
import "./style.css";

function Scoreboard() {
    return /*html*/ `
    <header class ="score-board">
    ${PlayerName('Player1')} 
    ${PlayerName('Player2')}
    </header>
    `
}

export default Scoreboard;