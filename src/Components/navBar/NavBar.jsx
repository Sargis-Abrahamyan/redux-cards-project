import React from "react";
import { useDispatch } from "react-redux";
// redux/actions
import { add, sort, clearList } from "../../redux/actions/actions";
// styles 
import styles from "./css/navBar.module.css";

const NavBar = () => {
    const dispatch = useDispatch();

    return (
        <nav>
            <h1>Cards</h1>
            <div className={styles.navBar_container}>
                <button onClick={() => dispatch(add())}>Add</button>
                <button onClick={() => dispatch(sort())}>sort</button>
                <button onClick={() => dispatch(clearList())}>Clear List</button>
            </div>
        </nav>
    )
}

export default NavBar;
