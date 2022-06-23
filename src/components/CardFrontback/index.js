import CardGame from "../cardGame";
import "./style.css";

function CardFrontBack(icon, altIcon) {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target;
        const $cardFrontback = $origin.closest('.card-front-back')

        $cardFrontback.classList.toggle('-active') 
    }

    return /*html*/ `
        <article class="card-front-back" onClick ="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame(icon, altIcon)}
            </div>
        </article>    
    `;
}    
    
export default CardFrontBack;