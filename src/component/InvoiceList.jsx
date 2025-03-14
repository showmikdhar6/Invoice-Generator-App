import { ChevronRight } from "lucide";
import { format, parseISO } from "date-fns";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedInvoice } from "../Store/InvoiceSlice";

function InvoiceList() {

    const dispatch = useDispatch();
    const { invoices, filter } = useSelector((state) => state.invoices) || [];

    const filteredInvoices = (invoices || []).filter((invoice) => {
        if (filter === "all") return true;
        return invoice.status === filter;
    });

    if (filteredInvoices.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-xl text-slate-400"> No Invoice Found</p>
            </div>
        )
    }

    const handleInvoiceClick = (invoice) => {
        dispatch(setSelectedInvoice(invoice));
    }

    const formatDate = (date) => {
        try {
            return format(parseISO(date), "dd MMM yyyy");
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="space-y-4">
            {invoices.length > 0 ? (
                filteredInvoices.map((invoice) => (
                    <div
                        key={invoice.id}
                        onClick={() => handleInvoiceClick(invoice)}
                        className="bg-slate-800 rounded-lg p-6 flex items-center justify-between hover:bg-slate-700 transition-colors duration-200 cursor-pointer"
                    >
                        <div className="flex items-center space-x-6">
                            <span className="text-slate-400">{invoice.id}</span>
                            <span className="text-slate-400">Due {formatDate(invoice.dueDate)}</span>
                            <span className="text-slate-300">{invoice.clientName}</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <span className="text-2xl font-bold">${invoice.amount?.toFixed(2) || "0.00"}</span>
                            <div
                                className={`px-4 py-2 rounded-lg flex item-center space-x-2 
                            ${invoice.status === "paid"
                                        ? "bg-green-900/20 text-green-500"
                                        : invoice.status === "pending"
                                            ? "bg-orange-900/20 text-orange-500"
                                            : "bg-slate-700/50 text-slate-400"
                                    }`}
                            >
                                <div className={` mt-2 w-2 h-2 rounded-full ${invoice.status === "paid" ? "bg-green-500" : invoice.status === "pending" ? "bg-orange-500" : "bg-slate-400"}`}></div>
                                <span className="capitalize">{invoice.status}</span>
                            </div>
                            <FaChevronRight className="text-violet-500" />
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-slate-400 text-center">No invoices found.</p>
            )}
        </div>
    );
}

export default InvoiceList;