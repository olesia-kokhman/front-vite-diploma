import React, {useEffect, useState} from 'react';
import TransactionModal from "../components/ui/pages/transactions/TransactionModal/TransactionModal.jsx";
import TransactionHistory from "../components/ui/pages/transactions/TransactionHistory/TransactionHistory.jsx";
import FilterBar from "../components/ui/general/FilterBar/FilterBar.jsx";
import axios from "axios";

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [editableTransaction, setEditableTransaction] = useState(null);

    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 20;

    const [filters, setFilters] = useState({
        categoryIds: [],
        accountIds: [],
        startDate: null,
        endDate: null,
        keyword: ""
    });

    const fetchTransactions = () => {
      axios.get("http://localhost:8080/api/transactions/all", {
            params: {
                page: page,
                size: pageSize,
            },
        })
          .then((response) => {
              setTransactions(response.data.content);
              setTotalPages(response.data.totalPages);
              console.log("success fetching transactions: ", response);
          })
          .catch ((error) => {
              console.error("Error fetching transactions:", error.message);
          });
    };

    useEffect(() => {
        fetchTransactions();
    }, [page]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/accounts")
            .then((response) => {
                setAccounts(response.data);
                console.log("success fetching accounts: ", response.data);
            })
            .catch((error) => {
                console.log("error fetching accounts: ", error.message);
            });

        axios
            .get("http://localhost:8080/api/categories")
            .then((response) => {
                setCategories(response.data);
                console.log("success fetching categories: ", response.data);
            })
            .catch((error) => {
                console.log("error fetching categories: ", error.message);
            });
    }, []);

    const handleEdit = (transaction) => {
        setIsEditable(true);
        setShowModal(true);
        setEditableTransaction(transaction);
    };

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8080/api/transactions/${id}`)
            .then((response) => {
                console.log("success deleting transaction: ", response.data);
                setTransactions((prevState) => {
                    return prevState.filter((transaction) => {
                        return transaction.id !== id;
                    })
                })
            })
            .catch((error) => {
                console.log("error deleting transaction: ", error.message);
            });
    }

    const handleSave = (newTransaction) => {
        if(isEditable) {
            axios
                .put(`http://localhost:8080/api/transactions/${newTransaction.id}`, newTransaction)
                .then((response) => {
                    setTransactions((prevState) => {
                        return prevState.map((transaction) => {
                            return newTransaction.id === transaction.id ? response.data : transaction
                        })
                    });
                    console.log("success updating transaction: ", response.data);
                })
                .catch((error) => {
                    console.log("error updating transaction: ", error.message);
                });

            setIsEditable(false);
        } else {
            axios
                .post("http://localhost:8080/api/transactions", newTransaction)
                .then((response) => {
                    console.log("success adding transaction: ", response.data);
                    setTransactions((prevState) => [...prevState, response.data]);
                })
                .catch((error) => {
                    console.log("error adding transaction: ", error.message);
                });
        }

        handleClose();
    }

    const handleClose = () => {
        setShowModal(false);
        setIsEditable(false);
        setEditableTransaction(null);
    }

    const handleApplyFilter = (idsName, ids) => {
        console.log("handle apply filter in transactions");
        console.log("ids: ", ids);
        console.log("idsName: ", idsName);
        if(idsName === "categories") {
            updateFilter("categoryIds", ids);
        } else if (idsName === "accounts") {
            updateFilter("accountIds", ids);
        }

        handleFilterFetch();
    }

    const updateFilter = (key, value) => {
        console.log("update filter in transactions");
        setFilters(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const getQueryParams = () => {
        console.log("get query params");
        const params = {};

        if (filters.categoryIds.length > 0) params.categoryIds = filters.categoryIds;
        if (filters.accountIds.length > 0) params.accountIds = filters.accountIds;
        if (filters.startDate) params.startDate = filters.startDate;
        if (filters.endDate) params.endDate = filters.endDate;
        if (filters.keyword) params.keyword = filters.keyword;

        console.log("params: ", params);
        return params;
    };

    const handleFilterFetch = () => {
        console.log("filters in handle filter fetch: ", filters);
        console.log("handle filter fetch");
        axios
            .get('http://localhost:8080/api/transactions/all', {
                params: getQueryParams()
            })
            .then(response => {
                console.log("success fetching transactions with filters: ", response.data);
            })
            .catch(error => {
                console.error("error fetching transactions with filters: ", error.message);
            });
    }

    return (
        <div className="flex justify-between items-start bg-blue-100 p-4 rounded-lg mb-6 shadow-md">
            <FilterBar accounts={accounts}
                       categories={categories}
                       onApplyFilter={handleApplyFilter}/>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold text-base px-5 py-3 rounded-xl shadow-md ml-4"
                    onClick={() => {
                setShowModal(true);
                setIsEditable(false);
                setEditableTransaction(null);
            }
            }>Add transaction</button>

            <TransactionHistory transactions={transactions}
                                onEdit={handleEdit}
                                onDelete={handleDelete}/>
            { showModal &&
            <TransactionModal transaction={editableTransaction}
                              onSave={handleSave}
                              onClose={handleClose}
                              accounts={accounts}
                              categories={categories}/>
            }
        </div>
    );
};

export default Transactions;