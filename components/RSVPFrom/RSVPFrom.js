import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const RSVPFrom = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        date: '',
        guest: '',
        meal: '',
        reason: '',
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                date: '',
                guest: '',
                meal: '',
                reason: '',
            })
        } else {
            validator.showMessages();
        }
    };


    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="Nombre" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>

                <div className="col col-lg-12 col-12">
                    <div className="radio-buttons">
                        <p>
                            <input type="radio" id="attend" name="radio-group" defaultChecked/>
                                <label htmlFor="attend">Sí, estaré allí.</label>
                        </p>
                        <p>
                            <input type="radio" id="not" name="radio-group"/>
                            <label htmlFor="not">Lo siento, no puedo ir.</label>
                        </p>
                    </div>
                </div>

                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.reason}
                            type="text"
                            name="reason"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="¿A qué asistirás?" />
                        {validator.message('reason', forms.email, 'required')}
                    </div>
                </div>
                
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">Enviar</button>
            </div>
        </form >
    )
}

export default RSVPFrom;