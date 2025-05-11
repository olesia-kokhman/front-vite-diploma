import React from 'react';
import TransactionModal from "../components/ui/pages/transactions/TransactionModal/TransactionModal.jsx";
import TopSavingTipWidget from "../components/ui/pages/dashboard/TopSavingTipWidget/TopSavingTipWidget.jsx";
import UpcomingPaymentWidget from "../components/ui/pages/dashboard/UpcomingPaymentWidget/UpcomingPaymentWidget.jsx";
import StockTrendsWidget from "../components/ui/pages/dashboard/StockTrendsWidget/StockTrendsWidget.jsx";
import MonthlyBudgetWidget from "../components/ui/pages/dashboard/MonthlyBudgetWidget/MonthlyBudgetWidget.jsx";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to your personal finance dashboard.</p>
            <StockTrendsWidget/>
            <MonthlyBudgetWidget/>
            <UpcomingPaymentWidget/>
            <TopSavingTipWidget/>
            <TransactionModal/>
        </div>
    );
};

export default Dashboard;