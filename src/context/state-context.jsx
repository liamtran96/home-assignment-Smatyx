import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  modal: {
    title: undefined,
    body: undefined,
    open: false,
  },
};

const contextState = {
  ...initialState,
  setModal: () => false,
};

const StateContext = createContext(contextState);

const useStateContext = () => useContext(StateContext);

export const reducer = (state, action) => {
  switch (action.type) {
    case "modal":
      return { ...state, modal: action.modal };
    default:
      return state;
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setModal = (modal) => {
    dispatch({ type: "modal", modal });
  };

  return (
    <StateContext.Provider value={{ ...state, setModal }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider, useStateContext };
