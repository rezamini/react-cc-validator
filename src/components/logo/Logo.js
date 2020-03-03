import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Logo = ({ type, alt, active }) => {
  let imgClass = 'cc-logo';

  if (active) {
    imgClass = 'cc-logo active';
  }

  return (

  );
}

function Validator() {


  useEffect(() => {


  }, []);


  return (
    <>
      <img src={type} alt={`${alt} credit card logo`} className={imgClass} />
    </>
  );
}

export default Validator;
