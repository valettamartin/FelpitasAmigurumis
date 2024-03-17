import { useState } from "react";

import "./CheckoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handlePhoneChange = ({ target }) => {
        const value = target.value.replace(/\D/g, '');
        setPhone(value);
    };

    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
    };

    const handleConfirm = (event) => {
        event.preventDefault();

        if (!email.includes('@')) {
            alert('El correo electrónico debe contener "@"');
            return;
        }

        const userData = {
            name,
            phone,
            email
        };

        onConfirm(userData);
    };

    return (
        <div className="container form_has_container">
            <form onSubmit={handleConfirm}>
                <div className="field">
                    <p className="control">
                        <input className="input is-medium" type='text' value={name} onChange={({ target }) => setName(target.value)} placeholder="Nombre" required/>
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <input className="input is-medium" type='text' value={phone} onChange={handlePhoneChange} placeholder="Teléfono" required />
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                        <input className="input is-medium" type='text' value={email} onChange={handleEmailChange} placeholder="Email" required/>
                    </p>
                </div>
                <div className="field form_send">
                    <button type='submit' className="button is-primary is-size-5">Confirmar pedido</button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
