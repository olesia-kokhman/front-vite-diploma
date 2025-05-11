import React, {useState} from 'react';

const AccountTypeModal = ({types}) => {

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
                <form className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <h4>Choose account type</h4>

                            {types.map((type, index) => (
                                <button key={index} className="account-type-button" onClick={handleSubmit}>
                                    <span className="label">{type}</span>
                                </button>
                            ))}

                            <button className="close-modal" onClick={toggleModal}>✕</button>
                        </div>
                    </div>
                </form>
            }
        </>
    );
}

export default AccountTypeModal;