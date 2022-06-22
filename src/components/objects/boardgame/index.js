import "./style.css"
import CardFrontBack from "../../CardFrontback";

function BoardGame(amountCards) {

    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards);

    return /*html*/`
    <section class="board-game">
        ${$htmlContent}
    </section>`
}
export default BoardGame;