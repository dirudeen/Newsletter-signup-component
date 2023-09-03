import Card from "./components/UI/Card";
import Subscription from "./components/Subscription";
import SuccessfulSub from "./components/SuccessfulSub";
import { useContext } from "react";
import Context from "./context/context";

function App() {
  const {showSuccessPage} = useContext(Context)
  console.log(showSuccessPage)
  return (
      <Card>
        {showSuccessPage ? <SuccessfulSub /> : <Subscription />}
      </Card>
  
  );
}

export default App;
