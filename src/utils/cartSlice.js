import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart' ,
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Mutating the state here
            state.items.push(action.payload);
            console.log("addItem ",current(state));
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            console.log("clearCart clicked");
            state.items.length = 0;
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;