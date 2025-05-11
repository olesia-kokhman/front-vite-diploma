import React, {useState} from 'react';

const AccountConnectionMethodModal = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleSelect = (method) => {
        console.log("Selected method:", method);
    };

    return (
        <>
           <button onClick={toggleModal} className="add-button">
               Add account
           </button>

            {modal &&
                <form className="modal" onClick={handleSubmit}>
                    <div className="overlay">
                        <div className="modal-content">

                            <h4>Add account</h4>

                            <div className="methods">
                                <div className="method-card" onClick={() => handleSelect('bank')}>
                                    <img src="" alt="Bank sync" />
                                    <h5>Bank synchronization</h5>
                                    <p>Connect your bank accounts and automatically sync transactions.</p>
                                </div>
                                <div className="method-card" onClick={() => handleSelect('csv')}>
                                    <img src="" alt="Import CSV" />
                                    <h5>Import CSV</h5>
                                    <p>Download your transaction history by importing CSV, Excel, OFX and other files.</p>
                                </div>
                                <div className="method-card" onClick={() => handleSelect('manual')}>
                                    <img src="" alt="Manual Input" />
                                    <h5>Manual input</h5>
                                    <p>Update your account manually. You can connect your bank or import your data later.</p>
                                </div>
                            </div>

                            <button className="close-modal" onClick={toggleModal}>✕</button>
                        </div>
                    </div>
                </form>
            }
        </>
    );
}

export default AccountConnectionMethodModal;