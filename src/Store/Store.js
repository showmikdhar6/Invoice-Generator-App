import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./InvoiceSlice"; // Ensure the correct import path

export const store = configureStore({
    reducer: {
        invoices: invoiceReducer,  // Ensure correct reducer reference
    }
});