export const CHANGE_CARD_NUM = 'CHANGE_CARD_NUM';
export const RESET_VALUES = 'RESET_VALUES';
export const SET_CARD_TYPE = 'SET_CARD_TYPE';
export const SET_CARD_ACTIVE = 'SET_CARD_ACTIVE';
export const SET_MULTI_STATUS = 'SET_MULTI_STATUS';
export const SET_CARD_NON_ACTIVE = 'SET_CARD_NON_ACTIVE';
export const SET_VALID_STATUS = 'SET_VALID_STATUS';

export const changeCardNumber = (value) => {
  return {
    type: CHANGE_CARD_NUM,
    payload: value
  };
};

export const resetValues = () => {
  return {
    type: RESET_VALUES
  };
};

export const setCardType = (value) => {
  return {
    type: SET_CARD_TYPE,
    payload: value
  };
};

export const setCardActive = (value) => {
  return {
    type: SET_CARD_ACTIVE,
    payload: value
  };
};

export const setCardNonActive = (value) => {
  return {
    type: SET_CARD_NON_ACTIVE,
    payload: value
  };
};

export const setMultiStatus = (value) => {
  return {
    type: SET_MULTI_STATUS,
    payload: value
  };
};

export const setValidStatus = (value) => {
  return {
    type: SET_VALID_STATUS,
    payload: value
  };
};
