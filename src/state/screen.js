import { createSlice } from "@reduxjs/toolkit";

const [MAIN_MENU, GAME, RESTART] = ['mainMenu', 'game', 'restart']

export const screenSlice = createSlice({
    name: 'screen',
    initialState: {
        screen: MAIN_MENU
    },
    reducers: {
        main_menu: state => {
            state.screen = MAIN_MENU
        },
        game: state => {
            state.screen = GAME
        },
        restart: state => {
            state.screen = RESTART
        },
    }
})

export const { main_menu, game, restart } = screenSlice.actions;

export default screenSlice.reducer;