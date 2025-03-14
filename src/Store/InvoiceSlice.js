import { createSlice } from "@reduxjs/toolkit";
import { format, addDays } from "date-fns";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return {
                invoices: [],
                filter: "all",
                isFormOpen: false,
                selectedInvoice: null
            }
        }
        // console.log(JSON.parse(serializedState));
        return JSON.parse(serializedState);
    } catch (error) {
        return {
            invoices: [],
            filter: "all",
            isFormOpen: false,
            selectedInvoice: null
        }
    }
}

const initialState = loadState();
// console.log(initialState);

const calculateAmount = (items) => {
    if (!Array.isArray(items) || items.length === 0) return 0;

    return items.reduce((acc, item) => {
        const quantity = parseFloat(item.quantity) || 0;
        const price = parseFloat(item.price) || 0;
        return acc + (quantity * price);
    }, 0);
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (error) {
        console.log(error);

    }
}


const invoiceSlice = createSlice({
    name: "invoices",
    initialState,
    reducers: {

        addInvoice: (state, action) => {
            // console.log(action.payload.dueDate);
            const newInvoice = {
                ...action.payload,
                amount: calculateAmount(action.payload.items),
                status: action.payload.status || "pending",
                dueDate: action.payload.dueDate || format(addDays(new Date(), 30), "yyyy-MM-dd"),
            }
            state.invoices.push(newInvoice);
            saveState(state);
            state.isFormOpen = false;
        },

        setFilter: (state, action) => {
            state.filter = action.payload;
        },

        toggleForm: (state) => {  // Ensure the correct name here
            state.isFormOpen = !state.isFormOpen;
            if (!state.isFormOpen) {
                state.selectedInvoice = null;
            }
        },

        setSelectedInvoice: (state, action) => {
            state.selectedInvoice = action.payload;
            state.isFormOpen = false;
        }
    },
});

export const { toggleForm, addInvoice, setFilter, setSelectedInvoice } = invoiceSlice.actions;  // Use correct case

export default invoiceSlice.reducer;