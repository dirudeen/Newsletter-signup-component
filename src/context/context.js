import { createContext } from "react";

const Context = createContext({ showSuccessPage: false, dispatch: ()=>{}});

export default Context;
