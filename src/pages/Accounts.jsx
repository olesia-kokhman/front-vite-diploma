import React, {useEffect, useState} from 'react';
import axios from "axios";
import AccountConnectionMethodModal
    from "../components/ui/pages/accounts/AccountConnectionMethodModal/AccountConnectionMethodModal.jsx";
import AccountTypeModal from "../components/ui/pages/accounts/AccountTypeModal/AccountTypeModal.jsx";
import AddAccountModal from "../components/ui/pages/accounts/AddAccountModal/AddAccountModal.jsx";

const Accounts = () => {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/accounts')
            .then((response) => {
                setAccounts(response.data);
                console.log("success fetching accounts: ", response);
            })
            .catch((error) => {
                console.log("error fetching accounts: ", error.message);
            })
    }, []);


    return (
        <div>
            <h1>Accounts</h1>
            <p>Here you can manage your financial accounts.</p>
            <AccountConnectionMethodModal/>
            <AccountTypeModal/>
            <AddAccountModal/>
        </div>
    );
};

export default Accounts;