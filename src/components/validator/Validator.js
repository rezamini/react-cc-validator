import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCardNumber, resetValues, setCardType, setCardActive, setMultiStatus, setCardNonActive, setValidStatus } from '../../actions';
import './Validator.css';
import Visa from '../../assets/visa.svg';
import Mastercard from '../../assets/mastercard.svg';
import Discover from '../../assets/discover.svg';
import Amex from '../../assets/amex.svg';
import {prefixes} from '../../utilities/prefixes.js';

const Logo = ({ type, alt, active }) => {
  let imgClass = 'cc-logo';

  if (active) {
    imgClass = 'cc-logo active';
  }

  return (
    <>
      <img src={type} alt={`${alt} credit card logo`} className={imgClass} />
    </>
  );
}

function Validator(props) {
  const state = useSelector(state => state.validatorReducer);
  const dispatch = useDispatch();
  const prevState = usePrevious(state)

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const handleChange = (e) => {
    dispatch(changeCardNumber(e.target.value));
  }

  const handleClick = (e) => {
    dispatch(resetValues());
  }

  const purgeInactive = (firstCard, secondCard, thirdCard, fourthCard) => {
    dispatch(setMultiStatus(fourthCard));
  }

  const determineType = (cardNumber) => {
    for (let key of prefixes) {
      for (let value of key[1]) {
        if (cardNumber.startsWith(value)) {
          dispatch(setCardType(key[0]));

          switch (key[0]) {
            case 'Visa':
              purgeInactive('Mastercard', 'Discover', 'Amex', 'Visa');
              break;
            case 'Mastercard':
              purgeInactive('Visa', 'Discover', 'Amex', 'Mastercard');
              break;
            case 'Discover':
              purgeInactive('Visa', 'Mastercard', 'Amex', 'Discover');
              break;
            case 'Amex':
              purgeInactive('Visa', 'Mastercard', 'Discover', 'Amex');
              break;
            default:
              break;
          }

          return;
        } else {
          dispatch(setCardNonActive(key[0]));
        }
      }
    }
}

  const verifyNumber = () => {
    let sum = 0;
    let temp = 0;
    let cardNumberCopy = state.cardNumber;
    let checkDigit = parseInt(state.cardNumber.slice(-1));
    let parity = cardNumberCopy.length % 2;

    for (let i = 0; i <= cardNumberCopy.length - 2; i++) {
      if (i % 2 === parity) {
        temp = (+cardNumberCopy[i]) * 2;
      }
      else {
        temp = (+cardNumberCopy[i]);
      }

      if (temp > 9) {
        temp -= 9;
      }

      sum += temp;
    }

    return (sum + checkDigit) % 10 === 0;
  }

  const getValidMessage = () => {
    if (state.valid !== '') {
      return state.valid
        ? 'Valid ✓'
        : 'Credit card number is invalid';
    }

    return '';
  }

useEffect(() => {
  if(prevState != undefined){
    if (prevState.cardNumber !== state.cardNumber) {
      determineType(state.cardNumber);
    }

    if (prevState.type !== state.type) {
      if (state.type !== '') {
        dispatch(setCardActive(state.type));
      }
    }

    if (prevState.cardNumber.length !== state.cardNumber.length
        && state.cardNumber.length === state.maxLength) {
          dispatch(setValidStatus(verifyNumber()));
    }
  }

});
  return (
    <div>
        <div className="input-addon">
        <input type="text"
          value={state.cardNumber}
          placeholder={state.placeholder}
          maxLength={state.maxLength}
          onChange={handleChange}
          />
          <button className="reset" onClick={handleClick}>reset</button>
        </div>
        <div className="error">
          <span className=
            { state.valid? 'error valid' : 'error invalid' }>
              { getValidMessage() }
          </span>
        </div>
        <div>
          <Logo type={Visa}
            alt="Visa"
            active={state.activeVisa}
          />
          <Logo type={Mastercard}
            alt= "Mastercard"
            active={state.activeMastercard}
          />
          <Logo type={Discover}
            alt="Discover"
            active={state.activeDiscover}
          />
          <Logo type={Amex}
            alt="American Express"
            active={state.activeAmex}
          />
        </div>
    </div>
  );
}

export default Validator;
