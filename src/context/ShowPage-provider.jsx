/* eslint-disable react/prop-types */
import ShowPageContext from "./ShowPage-context";
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "Success") {
    return {
      ...state,
      showSuccessPage: true,
      email: action.enteredEmail,
    };
  }

  if (action.type === "Done") {
    return {
      ...state,
      showSuccessPage: false,
      email: '',
    };
  }

  return {
    showSuccessPage: false,
    email: '',
  };
}

const initialState = {
  showSuccessPage: false,
  email: ''
};


const ShowPageProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState );
  return (
    <ShowPageContext.Provider
      value={{ showSuccessPage: state.showSuccessPage, dispatch, email: state.email }}
    >
      {props.children}
    </ShowPageContext.Provider>
  );
};

export default ShowPageProvider;
