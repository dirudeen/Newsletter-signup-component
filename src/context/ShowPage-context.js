import { createContext } from "react";

const ShowPageContext = createContext({ showSuccessPage: false, dispatch: ()=>{}, email: ''});

export default ShowPageContext;
