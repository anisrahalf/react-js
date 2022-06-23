import './style.css'

function ArrowDown(currentPlayer = 1) {
    return /* html */ `
    <img class="arrow-down"
    data-currentPlayer= "${currentPlayer}"
    src="images/IconArrowDown.png" 
    alt="Icone de seta para baixo">
    `;
}

export default ArrowDown;