import Card from "./components/UI/Card";
import Subscription from "./components/Subscription";
import SuccessfulSub from "./components/SuccessfulSub";
import { useContext } from "react";
import ShowPageContext from "./context/ShowPage-context";

function App() {
  const {showSuccessPage} = useContext(ShowPageContext)
  return (
      <Card>
        {showSuccessPage ? <SuccessfulSub /> : <Subscription />}
      </Card>
  
  );
}

export default App;
