import React, { useState, useEffect } from 'react';

const TimeCountDown = (props) => {
  const [countdownDate] = useState(new Date('03/15/2024').getTime());
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      if (distanceToDate <= 0) {
        // La cuenta regresiva ha llegado a su fin
        setTimeIsUp(true);
        clearInterval(interval);
      } else {
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }

        setState({ days: days, hours: hours, minutes, seconds });
      }
    }
  };

  return (
    <div className="react-countdown">
      {!timeIsUp ? (
        <>
          <div className='time-section'>
            <div className='time'>{state.days || '0'}</div>
            <small className="time-text">Días</small>
          </div>
          <div className='time-section'>
            <div className='time'>{state.hours || '00'}</div>
            <small className="time-text">Horas</small>
          </div>
          <div className='time-section'>
            <div className='time'>{state.minutes || '00'}</div>
            <small className="time-text">Minutos</small>
          </div>
          <div className='time-section'>
            <div className='time'>{state.seconds || '00'}</div>
            <small className="time-text">Segundos</small>
          </div>
        </>
      ) : (
        <div className="time-is-up-text">
          
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          ¡El día ha llegado!
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeCountDown;


