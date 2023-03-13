import React from 'react';
// Components
import CardItems from '../cardItems/CardItems';
// styles
import styles from "./css/cards.module.css"

const Cards = ({ cards }) => {
    return (
        <section>
            {!cards.length && <h2>add new cards...</h2>}
            <div className={styles.section_container}>
                {cards.map(card => <CardItems key={card.id} card={card} />)}
            </div>
        </section>
    )
}

export default Cards;
