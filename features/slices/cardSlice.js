import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api/index';


export const getCards = createAsyncThunk('cards/getCards', api.getCards);
export const saveCard = createAsyncThunk('cards/saveCard', api.saveCard);
export const deleteCard = createAsyncThunk('cards/deleteCard', api.deleteCard);

const cardSlice = createSlice({
    name: 'cardsStatus',
    initialState: {
        cards: [],
        loadError: false,
        saveStatus: false,
        saveError: false,
        delError: false,
        delStatus: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCards.pending, (state) => {
            state.products = [];
            state.loadError = false;
        })
        .addCase(getCards.fulfilled, (state, action) => {
            state.cards = action.payload;
        })
        .addCase(getCards.rejected, (state, action) => {
            state.loadError = true
        })
        .addCase(saveCard.pending, (state) => {
            state.saveError = false;
            state.saveStatus = false;
        })
        .addCase(saveCard.fulfilled, (state) => {
            console.log('reload')
            state.saveStatus = true;
        })
        .addCase(saveCard.rejected, (state) => {
            state.saveError = true;
            state.saveStatus = false;
        })
        .addCase(deleteCard.pending, (state) => {
            state.delStatus = false;
        })
        .addCase(deleteCard.fulfilled, (state) => {
            state.delError = false;
            state.delStatus = true;
        })
        .addCase(deleteCard.rejected, (state) =>{
            state.delError = true;
            state.delStatus = false;
        } )
    }
})

export const regState = (state) => state.cardsStatus;


export default cardSlice.reducer;