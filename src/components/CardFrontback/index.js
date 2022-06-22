import CardGame from "../cardGame";
import "./style.css";

function CardFrontBack() {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target;
        const $cardFrontback = $origin.closest('.card-front-back')

        // if($cardFrontback.classList.contains('-active')) {
        //     $cardFrontback.classList.remove('-active')
        // } else {
        //     $cardFrontback.classList.add('-active')
        // }

        $cardFrontback.classList.toggle('-active') /*faz todo o processo comentado acima*/
    }

    return /*html*/ `
        <article class="card-front-back" onClick ="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("javascript", "Logo do Javascript")}
            </div>
        </article>    
    `;
}    
    
export default CardFrontBack;