import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaFilter } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const status = ["all", "paid", "pending", "draft"];
function Header({ onNewInvoice }) {

    const { invoice, filter } = useSelector((state) => state.invoices);
    // console.log(invoice);
    return (
        <header className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Invoice</h1>
                <p className="text-slate-400"> {invoice.length === 0 ? "No Invoice" : `There are ${invoice.length} Total Invoices`} </p>
            </div>
            <div className="flex items-center space-x-4">
                <Menu as="div" className="realative">
                    <Menu.Button className="flex items-center space-x-2 text-white">
                        <FaFilter />
                        <span> Filter by Status</span>
                    </Menu.Button>

                    <Menu.Items className="absolute  mt-2 w-40 bg-slate-800 rounded-lg shadow-lg p-2 z-10">
                        {status.map((s) => (
                            <Menu.Item key={s}>
                                {({ active }) => (
                                    <button className={`${active ? "bg-slate-700" : ""} w-full text-left px-4 py-2 rounded-lg capitalize ${filter === s ? "text-violet-500" : "text-white"}`}>
                                        {s}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Menu>

                <button type="button" onClick={onNewInvoice} className="bg-violet-500 hover:bg-violet-600 text-white py-2 px-6 rounded-full flex items-center space-x-2">
                    <div className="bg-white rounded-full p-3">
                        <FaPlus className="text-slate-500" />
                    </div>
                    <span> New Invoice </span>
                </button>
            </div>
        </header>
    )
}

export default Header;