import React from 'react';

const TransactionHistory = ({transactions, onEdit, onDelete}) => {

    return (
        <>
            <table className="transaction-history-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Account</th>
                        <th>Amount</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {transactions.map((transaction, index) => {
                    return (
                           <tr key={index}>
                               <td>{transaction.dateTime}</td>
                               <td>{transaction.description}</td>
                               <td>{transaction.category?.name || ""}</td>
                               <td>{transaction.account.name}</td>
                               <td>{transaction.amount} {transaction.currency}</td>
                               <td>
                                   <button onClick={() => onEdit(transaction)}>Edit</button>
                               </td>
                               <td>
                                   <button onClick={ () => onDelete(transaction.id)}>Delete</button>
                               </td>
                           </tr>
                        );
                })}
                </tbody>
            </table>
        </>
    );
}

export default TransactionHistory;