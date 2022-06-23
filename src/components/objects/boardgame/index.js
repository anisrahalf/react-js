import "./style.css"
import CardFrontBack from "../../CardFrontback";
import cards from "./data";

function BoardGame(amountCards) {

    const flipAndhideCards = ($cardsActive) => {
        $cardsActive.forEach((card) => card.classList.remove('-active'))
    }
    const changePlayer = () => {
        const $arrowDown = document.querySelector('.arrow-down')
        const currentplayer = $arrowDown.getAttribute('data-currentplayer')
        $arrowDown.setAttribute('data-currentplayer', currentplayer == 1 ? 2 : 1)
    }

    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game')

        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active')

        if ($cardsActive.length == 2) {
            setTimeout (() => {

                flipAndhideCards($cardsActive)
                changePlayer()
            }, 1000)

        }
    }
    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = htmlCardsList.join('');
   

    return /*html*/`
    <section class="board-game" onClick="boardGame.handleClick()">
        ${$htmlCards}
    </section>
    `
}
export default BoardGame;