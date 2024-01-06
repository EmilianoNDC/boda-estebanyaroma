import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const RSVPFrom = () => {
  const [forms, setForms] = useState({
    name: '',
    email: '',
    date: '',
  });

  const [validator] = useState(
    new SimpleReactValidator({
      className: 'errorMessage',
    })
  );

  const [attend, setAttend] = useState(true);

  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const handleRadioChange = (e) => {
    setAttend(e.target.id === 'attend');
    changeHandler(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submit button clicked');

    if (validator.allValid()) {
      validator.hideMessages();

      const whatsappMessage = `Hola, mi nombre es ${forms.name}. ${
        attend ? '¡Voy a asistir a la Boda, gracias por la invitación!.' : 'No puedo asistir, pero gracias por la invitación.'
      }`;

      console.log('WhatsApp Message:', whatsappMessage);

      window.open(`https://wa.me/+598028021?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    } else {
      validator.showMessages();
    }
  };

  return (
    <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active">
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
              placeholder="Nombre"
            />
            {validator.message('name', forms.name, 'required|custom[nameFormat]')}
          </div>
        </div>

        <div className="col col-lg-12 col-12">
          <div className="radio-buttons">
            <p>
              <input
                type="radio"
                id="attend"
                name="radio-group"
                checked={attend}
                onChange={(e) => {
                  handleRadioChange(e);
                }}
              />
              <label htmlFor="attend">Sí, estaré allí.</label>
            </p>
            <p>
              <input
                type="radio"
                id="not"
                name="radio-group"
                checked={!attend}
                onChange={(e) => {
                  handleRadioChange(e);
                }}
              />
              <label htmlFor="not">Lo siento, no puedo ir.</label>
            </p>
          </div>
        </div>
      </div>
      <div className="submit-area">
        <button type="submit" className="theme-btn">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default RSVPFrom;
