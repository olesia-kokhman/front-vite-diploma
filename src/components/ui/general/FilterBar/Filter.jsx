import React, {useState} from 'react';

const Filter = ({filterTitle, data, onApplyFilter}) => {

    const [selectedData, setSelectedData] = useState([]);

    const handleCheckboxChange = (itemId) => {
        if(!selectedData.includes(itemId)) {
            setSelectedData((prevState) => [...prevState, itemId]);
        } else {
            setSelectedData((prevState) => {
                return prevState.filter((id) => id !== itemId);
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onApplyFilter(selectedData);
    }

    return (
        <>
            <h5>{filterTitle}</h5>
            <form className="filter-list" onSubmit={handleSubmit}>
                {data.map((item, index) => {
                    return (
                        <div className="data-item" key={index}>
                            <input type="checkbox" autoFocus
                                   name="filter-list"
                                   checked={selectedData.includes(item.id)}
                                   value={item.id}
                                   onChange={() => handleCheckboxChange(item.id)}
                                   />
                            <label>{item.name}</label>
                        </div>
                    );
                })}
                <button type="submit">Apply filters</button>
            </form>
        </>
    );
}

export default Filter;