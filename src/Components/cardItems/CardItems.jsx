import React from 'react';
import { useDispatch } from 'react-redux';
// redux/actions
import { remove } from "../../redux/actions/actions";
// context
import { GlobalContext } from '../../context/context';
// styles
import styles from "./css/cardItems.module.css";

const CardItems = ({ card }) => {
    const dispatch = useDispatch();
    const { setBackgroundColor } = GlobalContext();
    const backGroundContent = card.bgColor?.split(',')?.map(item => +item);

    const changeBackround = () => {
        setBackgroundColor(`rgb(${backGroundContent})`)
    };

    return (
        <div className={styles.cards_box} style={{ background: `rgb(${backGroundContent})` }}>
            <div className={styles.card_items} onClick={changeBackround}>
                <h4>{card.CardsValue}</h4>
            </div>
            <div className={styles.remove_Wrapper}>
                <button className={styles.remove_btn} onClick={() => dispatch(remove(card.id))}>X</button>
            </div>
        </div>
    )
}

export default CardItems;
