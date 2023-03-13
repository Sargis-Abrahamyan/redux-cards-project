import { useContext, useEffect, useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [backgroundColor, setBackgroundColor] = useState('');
    const [windowScrollY, setWindowScrollY] = useState({ winScroll: 0 });

    const scrollDown = () => setWindowScrollY({ winScroll: window.scrollY });

    useEffect(() => {
        window.addEventListener('scroll', scrollDown);
        return () => {
            window.removeEventListener('scroll', scrollDown);
        }
    }, [])

    const windowScrollTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    return <AppContext.Provider value={{
        backgroundColor,
        windowScrollY,
        windowScrollTop,
        setBackgroundColor
    }}>
        {children}
    </AppContext.Provider>
};

const GlobalContext = () => {
    return useContext(AppContext)
};

export { AppProvider, GlobalContext }
