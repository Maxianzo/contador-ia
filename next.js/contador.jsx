import React, { useState, useEffect } from 'react';
import moment from 'moment';

const IndexPage = () => {
  const [duracion, setDuracion] = useState(moment.duration(7, 'days'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuracion(duracion.subtract(1, 'second'));
    }, 1000);

    if (duracion.asMilliseconds() <= 0) {
      setDuracion(moment.duration(7, 'days'));
    }

    return () => clearInterval(intervalId);
  }, [duracion]);

  return (
    <div className="contador">
      <h1>Contador de tiempo</h1>
      <div className="duracion">{duracion.days()}d {duracion.hours()}h {duracion.minutes()}m {duracion.seconds()}s</div>
    </div>
  );
};

export default IndexPage;
