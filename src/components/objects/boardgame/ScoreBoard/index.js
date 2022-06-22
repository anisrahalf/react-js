import PlayerName from "../../../PlayerName";
import PlayerScore from "../../../PlayerScore";
import VsPlayer from "../../../VsPlayer";
import "./style.css";

function Scoreboard() {
    return /*html*/ `
    <header class ="score-board">
    ${PlayerName('Player1')} 
    ${PlayerScore(1)};
    ${VsPlayer()}
    ${PlayerScore()};
    ${PlayerName('Player2')}
    </header>
    `
}

export default Scoreboard;