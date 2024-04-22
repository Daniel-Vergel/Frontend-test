import { createSlice } from '@reduxjs/toolkit'


export const menuSlice = createSlice({
  name: 'menuState',
  initialState: {
    computationState: false,
    celularesState: false,
    audioState:false,
  },
  reducers: {
    openComputation: (state) => {
        state.computationState = true;
    },

    closedComputation: (state) => {
        state.computationState = false;
    },

    openCelulares: (state) => {
        state.celularesState = true;
    },

    closedCelulares: (state) => {
        state.celularesState = false;
    },

    openAudio: (state) => {
        state.audioState = true;
    },

    closedAudio: (state) => {
        state.audioState = false;
    },

    restartMenu: (state) => {
        state.computationState = false;
        state.celularesState = false;
        state.audioState = false;
    },

    
  
  },
})


export const { openComputation, closedComputation, openCelulares, closedCelulares, openAudio, closedAudio, restartMenu } = menuSlice.actions

