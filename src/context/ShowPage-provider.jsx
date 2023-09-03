/* eslint-disable react/prop-types */
import Context from "./context";
import { useReducer } from "react";

function reducer(state, action) {

  if (action.type === "Success") {
    return {
      ...state.showSuccessPage,
      showSuccessPage: true,
    };
  }

  if (action.type === "Done") {
    return {
      ...state.showSuccessPage,
      showSuccessPage: false,
    };
  }

  return {
    showSuccessPage: false,
  };
}

const ShowPageProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    showSuccessPage: false,
  });
  return (
    <Context.Provider
      value={{ showSuccessPage: state.showSuccessPage, dispatch }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ShowPageProvider;
