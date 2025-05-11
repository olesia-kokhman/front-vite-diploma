import React, {useState} from 'react';

const AddAccountModal = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            {modal &&
                <form className="modal" onClick={handleSubmit}>
                    <div className="overlay">
                        <div className="modal-content">
                            <h4>Add account</h4>

                            <input className="account-name" type="text" placeholder="Enter account name"/>
                            <select className="currency-selector">
                                <option>UAH</option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>PLN</option>
                            </select>

                            <input className="balance" type="text" placeholder="0,00"/>

                            <label>Choose to be as main account</label>
                            <input className="is-main-account-checkbox" type="checkbox"/>

                            <button className="add-button" type="submit">Add account</button>
                            <button className="close-button" onClick={toggleModal}>Cancel</button>
                        </div>
                    </div>
                </form>
            }
        </>
    );
}

export default AddAccountModal;