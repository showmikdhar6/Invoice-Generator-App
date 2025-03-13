import { ChevronRight } from "lucide";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

function InvoiceList() {
    return <div className="space-y-4">
        <div className="bg-slate-800 rounded-lg p-6 flex items-center justify-between hover:bg-slate-700 transition-colors duration-200 cursor-pointer">
            <div className="flex items-center space-x-6">
                <span className="text-slate-400">Invoice ID</span>
                <span className="text-slate-400">Due Date</span>
                <span className="text-slate-300">John Deo</span>
            </div>
            {/* Invoice Body */}
            <div className="flex items-center space-x-6">
                <span className="text-2xl font-bold">$350</span>
                <span className="capitalize">Invoice Status</span>
                <FaChevronRight className="text-violet-500" />
            </div>
        </div>
    </div>
}

export default InvoiceList;