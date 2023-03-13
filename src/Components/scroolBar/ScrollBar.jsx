import { useEffect, useRef } from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';
// context
import { GlobalContext } from '../../context/context';
// css
import styles from "./css/scrollBar.module.css";

const ScrollBar = () => {
    const { windowScrollY: { winScroll }, windowScrollTop } = GlobalContext();
    const scrollRef = useRef();

    useEffect(() => {
        winScroll ? scrollRef.current.style.display = 'block' : scrollRef.current.style.display = 'none'
    }, [winScroll]);

    return (
        <>
            <button ref={scrollRef} onClick={windowScrollTop} className={styles.scroolBtn}>
                <FaChevronCircleUp size={50} />
            </button>
        </>
    )
}

export default ScrollBar;
