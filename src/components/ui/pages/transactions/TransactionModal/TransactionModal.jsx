import React, {useEffect} from 'react';
import { useState } from 'react';
import CustomDatePicker from "../../../general/CustomDateTimePicker/CustomDatePicker.jsx";
import CustomTimePicker from "../../../general/CustomDateTimePicker/CustomTimePicker.jsx";

const TransactionModal = ({transaction, onSave, onClose, accounts, categories}) => {

    const [modalTitle, setModalTitle] = useState("");
    const [transactionType, setTransactionType] = useState("");
    const [account, setAccount] = useState("");
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [description, setDescription] = useState("");

    const setMode = () => {
        if(transaction !== null) {
            setModalTitle("Edit transaction");
            setTransactionType(transaction.transactionType)
            setAmount(transaction.amount);
            setAccount(transaction.account.name);
            setCategoryId(transaction.category.id);
            setCurrency(transaction.currency);
            setDescription(transaction.description);
        } else {
            setModalTitle("Add transaction");
            setTransactionType("EXPENSE")
            setAmount("0,00");
            setAccount("Account");
            //setCategoryId();
            setCurrency("Currency");
            setDescription("Add description");
        }
    }

    useEffect(() => {
        setMode();
    }, [transaction]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const transactionData = {
            amount: amount,
            transactionType: transactionType,
            currency: currency,
            category: Number(categoryId),
            account: Number(account),
            description: description,
            dateTime: "2025-05-09T20:00:00"
        };

        onSave(transactionData);
    }

    return (
        <>
            <form className="modal" onSubmit={handleSubmit}>
                <div className="overlay">
                    <div className="modal-content">

                        <h4>{modalTitle}</h4>

                        <div className="transaction-type-selector">
                            <input type="radio"
                                   name="transaction-type"
                                   value="EXPENSE"
                                   checked={transactionType === "EXPENSE"}
                                   onChange={(event) => setTransactionType(event.target.value)}
                            />
                            <label>Expense</label>
                            <input type="radio"
                                   name="transaction-type"
                                   value="INCOME"
                                   checked={transactionType === "INCOME"}
                                   onChange={(e) => setTransactionType(e.target.value)}/>
                            <label>Income</label>

                            <input type="radio"
                                   name="transaction-type"
                                   value="TRANSFER"
                                   checked={transactionType === "TRANSFER"}
                                   onChange={(e) => setTransactionType(e.target.value)}/>
                            <label>Transfer</label>
                        </div>

                        <CustomDatePicker/>
                        <CustomTimePicker/>

                        <select className="account-selector"
                                value={account}
                                onChange={(event) => setAccount(event.target.value)}>
                            <option disabled>Account</option>
                            {accounts.map((account) => (
                                <option key={account.id} value={account.id}>{account.name}</option>
                            ))}
                        </select>

                        <div className="amount-input-wrapper">
                            <span className="prefix">-</span>
                            <input className="amount-input"
                                   type="text"
                                   inputMode="decimal"
                                   placeholder="0,00"
                                   value={amount}
                                   onChange={(event) => setAmount(event.target.value)}/>
                        </div>

                        <select className="currency-selector"
                                value={currency}
                                onChange={(event) => setCurrency(event.target.value)}>
                            <option disabled>Currency</option>
                            <option>UAH</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>PLN</option>
                        </select>

                        <select className="category-selector"
                                value={categoryId}
                                onChange={(event) => setCategoryId(event.target.value)}>
                            <option disabled value="">Category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>

                        <input className="description-input"
                               type="text" inputMode="text"
                               placeholder="Add description"
                               value={description}
                               onChange={(event) => setDescription(event.target.value)}/>

                        <button className="submit-button" type="submit">
                            Save
                        </button>
                        <button className="cancel-button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </div>
            </form>

        </>
    );
}

export default TransactionModal;
