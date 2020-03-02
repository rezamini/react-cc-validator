import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Visa from '../../assets/visa.svg';
import Mastercard from '../../assets/mastercard.svg';
import Discover from '../../assets/discover.svg';
import Amex from '../../assets/amex.svg';

function Validator() {


  useEffect(() => {


  }, []);

  return (
    <div>
      <div className="input-addon">
        <input type="text"/>
        <button className="reset">reset</button>
      </div>
      <div className="error">
        <span></span>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Validator;
