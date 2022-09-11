import React from 'react';
import { useSelector } from 'react-redux';
import MainMenu from './pages/MainMenu';
import Game from './pages/Game';
import Restart from './pages/Restart';

function App() {
    const screen = useSelector((state) => state.screen.screen)
    switch (screen) {
        case 'mainMenu':
            return <MainMenu/>;
        case 'game':
            return <Game/>;
        case 'restart':
            return <Restart/>
        default:
            throw new Error('what');
    }
}

export default App;
