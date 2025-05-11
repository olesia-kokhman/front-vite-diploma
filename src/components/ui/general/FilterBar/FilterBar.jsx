import React, {useState} from 'react';
import Filter from "./Filter.jsx";
import CustomPeriodPicker from "../CustomDateTimePicker/CustomPeriodPicker.jsx";

const FilterBar = ({accounts, categories, onApplyFilter}) => {

    const [isCategoryFilterOpen, setIsCategoryFilterOpen] =  useState(false);
    const [isAccountFilterOpen, setIsAccountFilterOpen] = useState(false);

    const toggleCategoryFilter = () => {
        if(isAccountFilterOpen) {
            toggleAccountFilter()
        }
        setIsCategoryFilterOpen(!isCategoryFilterOpen);
    }

    const toggleAccountFilter = () => {
        if(isCategoryFilterOpen) {
            toggleCategoryFilter()
        }
        setIsAccountFilterOpen(!isAccountFilterOpen);
    }

    const handleApplyCategories = (categoryIds) => {
        console.log("handle apply categories in filter bar");
        setIsCategoryFilterOpen(false);
        onApplyFilter("categories", categoryIds);
    }

    const handleApplyAccounts = (accountIds) => {
        console.log("handle apply accounts in filter bar");
        setIsAccountFilterOpen(false);
        onApplyFilter("accounts", accountIds)
    }

    return (
        <>
            <div className="flex flex-wrap gap-3 items-center">
               <CustomPeriodPicker/>

               <button className="bg-[#141b4d] text-white font-semibold px-4 py-2 rounded-md shadow"
                       onClick={toggleCategoryFilter}>
                   Filter by category
               </button>
               {isCategoryFilterOpen && <Filter filterTitle="Categories"
                                                data={categories}
                                                onApplyFilter={handleApplyCategories}/>}

               <button className="bg-[#141b4d] text-white font-semibold px-4 py-2 rounded-md shadow"
                       onClick={toggleAccountFilter}>
                   Filter by account
               </button>
               {isAccountFilterOpen && <Filter filterTitle="Accounts"
                                               data={accounts}
                                               onApplyFilter={handleApplyAccounts}/>}
               <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-4 py-2 rounded-md shadow">
                   Clear
               </button>
            </div>
        </>
    );
}

export default FilterBar;