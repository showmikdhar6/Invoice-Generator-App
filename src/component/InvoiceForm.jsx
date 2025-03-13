import React, { useDebugValue, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggleForm } from "../Store/InvoiceSlice";
import { addDays, format } from "date-fns";

function InvoiceForm() {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState(() => {
        return {
            id: `INV${Math.floor(Math.random() * 10000)}`,
            status: "pending",
            billFrom: {
                streetAddress: "",
                city: "",
                postCode: "",
                country: ""
            },
            billTo: {
                clientEmail: "",
                streetAddress: "",
                city: "",
                postCode: "",
                country: "",
            },
            clientName: "",
            items: [],
            paymentTerms: "Net 30 Days",
            description: "",
            projectDescription: "",
            invoiceDate: format(new Date(), "yyy-MM-dd"),
            dueDate: format(addDays(new Date(), 30), "yyy-mm-dd"),
        };
    });
    console.log(formData);

    return (
        <div className="flexd insert-0 flex items-start justify-center overflow-y-auto absolute top-0 left-[30%]">
            <div className="bg-slate-800 p-5 rounded-lg w-full max-w-2xl mt-5">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-bold text-2xl">New Invoice</h2>

                    <button type="button" onClick={() => dispatch(toggleForm())}>
                        <IoClose />
                    </button>

                </div>
                <form className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-violet-500 font-bold">Bill From</h3>
                        <input
                            type="text"
                            placeholder="Street Address"
                            value={formData.billFrom.streetAddress}
                            onChange={(e) => setFormData({
                                ...formData, billFrom: {
                                    ...formData.billFrom, streetAddress: e.target.value,
                                },
                            })}
                            required
                            className="w-full bg-slate-900 rounded-lg p-3"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="City"
                            required
                            value={formData.billFrom.city}
                            onChange={(e) => setFormData({
                                ...formData, billFrom: {
                                    ...formData.billFrom, city: e.target.value,
                                },
                            })}
                            className="w-full bg-slate-900 rounded-lg p-3 mt-1"
                        />
                        <input
                            type="text"
                            placeholder="Post Code"
                            required
                            value={formData.billFrom.postCode}
                            onChange={(e) => setFormData({
                                ...formData, billFrom: {
                                    ...formData.billFrom, postCode: e.target.value,
                                },
                            })}
                            className="w-full bg-slate-900 rounded-lg p-3"
                        />
                        <input
                            type="text"
                            placeholder="Contry"
                            required
                            value={formData.billFrom.country}
                            onChange={(e) => setFormData({
                                ...formData, billFrom: {
                                    ...formData.billFrom, country: e.target.value,
                                },
                            })}
                            className="w-full bg-slate-900 rounded-lg p-3 mt-1"
                        />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-violet-500 font-bold">Bill To</h3>
                        <input
                            type="text"
                            placeholder="Client's Name"
                            required
                            value={formData.clientName}
                            onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                            className="w-full bg-slate-900 rounded-lg p-3 mt-1"
                        />
                        <input
                            type="email"
                            placeholder="Client's Email"
                            required
                            value={formData.billTo.clientEmail}
                            onChange={(e) => setFormData({
                                ...formData, billTo: {
                                    ...formData.billTo, clientEmail: e.target.value,
                                },
                            })}
                            className="w-full bg-slate-900 rounded-lg p-3 mt-1"
                        />
                        <input
                            type="text"
                            placeholder="Street Address"
                            required
                            value={formData.billTo.streetAddress}
                            onChange={(e) => setFormData({
                                ...formData, billTo: {
                                    ...formData.billTo, streetAddress: e.target.value,
                                },
                            })}
                            className="w-full bg-slate-900 rounded-lg p-3 mt-1"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="City"
                            required
                            value={formData.billTo.city}
                            onChange={(e) => setFormData({
                                ...formData, billTo: {
                                    ...formData.billTo, city: e.target.value,
                                },
                            })}
                            className="w-full bg-slate-900 rounded-lg p-3 mt-1"
                        />
                        <input
                            type="text"
                            placeholder="Post Code"
                            required
                            value={formData.billTo.postCode}
                            onChange={(e) => setFormData({
                                ...formData, billTo: {
                                    ...formData.billTo, postCode: e.target.value,
                                },
                            })}
                            className="w-full bg-slate-900 rounded-lg p-3 mt-1"
                        />
                        <input
                            type="text"
                            placeholder="Contry"
                            required
                            value={formData.billTo.country}
                            onChange={(e) => setFormData({
                                ...formData, billTo: {
                                    ...formData.billTo, country: e.target.value,
                                },
                            })}
                            className="w-full bg-slate-900 rounded-lg p-3 mt-1"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="date"
                                className="bg-slate-900 rounded-lg p-3"
                                value={formData.invoiceDate}
                                onChange={(e) => {
                                    const newDate = e.target.value;
                                    setFormData({
                                        ...formData, invoiceDate: newDate,
                                        dueDate: format(assDays(new Date(newDate), 30), 'yyy-mm-dd')
                                    })
                                }}
                            />
                            <select
                                className="bg-slate-900 rounded-lg p-3"
                                required
                                value={formData.paymentTerms}
                                onChange={
                                    (e) => setFormData({ ...formData, paymentTerms: e.target.value })
                                }
                            >
                                <option>Net 30 Days</option>
                                <option>Net 60 Days</option>
                            </select>
                        </div>

                        <input
                            type="text"
                            placeholder="Project Description"
                            required
                            className="w-full bg-slate-900 rounded-lg p-3"
                        />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-violet-500 font-bold">Item List</h3>
                        <div className="grid grid-cols-12 gap-4 items-center">
                            <input
                                type="text"
                                placeholder="Item Name"
                                className="bg-slate-900 rounded-lg p-3 col-span-5"
                            />
                            <input
                                type="number"
                                placeholder="Quality"
                                className="bg-slate-900 rounded-lg p-3 col-span-2"
                                min="0"
                                step="0.01"
                                required
                            />
                            <div className=" col-span-3 text-right text-[18px]">
                                Total Ammount
                            </div>
                            <button type="button">
                                <RiDeleteBin6Line className="text-slate-400 hover:text-red-500" />
                            </button>
                        </div>
                        <button type="button" className="w-full bg-slate-700 hover:bg-slate-600 rounded-lg p-2 flex items-center justify-center space-x-2">
                            <FaPlus className="m-2" />
                            Add New Item
                        </button>
                    </div>

                    <div className="flex justify-end space-x-4">
                        <button type="button" className="bg-orange-700 hover:bg-orange-600 text-white py-2 px-6 rounded-full">
                            Cancle
                        </button>
                        <button type="button" className="bg-violet-500 hover:bg-violet-600 text-white py-2 px-6 rounded-full">
                            Create Invoice
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default InvoiceForm;