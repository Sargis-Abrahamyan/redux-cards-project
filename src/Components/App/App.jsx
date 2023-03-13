import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// context
import { GlobalContext } from '../../context/context';
// components
import NavBar from '../navBar/NavBar';
import Cards from '../cards/Cards';
import Footer from '../footer/Footer';

const App = () => {
    const cards = useSelector(state => state.cards);
    const { backgroundColor, setBackgroundColor } = GlobalContext();

    useEffect(() => {
        if (!cards.length) return setBackgroundColor('');
    }, [cards]);

    return (
        <div style={{ minHeight: "100vh", backgroundColor: cards.length ? backgroundColor : 'inherit' }}>
            <NavBar />
            <Cards cards={cards} />
            <Footer />
        </div>
    )

};

export default App;