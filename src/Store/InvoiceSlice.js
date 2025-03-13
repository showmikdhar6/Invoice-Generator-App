import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    invoice: [],
    filter: 'all',
    isFormOpen: false,
    selectedInvoice: null,
};

const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        toggleForm: (state) => {  // Ensure the correct name here
            state.isFormOpen = !state.isFormOpen;
            if (!state.isFormOpen) {
                state.selectedInvoice = null;
            }
        },
    },
});

export const { toggleForm } = invoiceSlice.actions;  // Use correct case

export default invoiceSlice.reducer;