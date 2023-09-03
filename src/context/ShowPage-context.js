import { createContext } from "react";

const ShowPageContext = createContext({ showSuccessPage: false, dispatch: ()=>{}});

export default ShowPageContext;
